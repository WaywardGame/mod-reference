/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation, { ISerializedTranslation } from "language/Translation";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import { IRefreshable } from "newui/component/Refreshable";
import { Bindable, BindCatcherApi } from "newui/IBindingManager";
import { DialogId, Edge, IDialogDescription } from "newui/screen/screens/game/Dialogs";
import { IDialog } from "newui/screen/screens/game/IGameScreenApi";
import Vector2 from "utilities/math/Vector2";
import { IStringSection } from "utilities/string/Interpolator";
/**
 * The positions of each edge of the dialog. Stored as percentages.
 */
export interface IDialogEdges {
    [Edge.Top]: number;
    [Edge.Right]: number;
    [Edge.Bottom]: number;
    [Edge.Left]: number;
}
export interface ISavedEdges {
    scale: number;
    edges: IDialogEdges;
}
/**
 * An enum for every position that a dialog handle can be in.
 */
declare enum HandlePosition {
    Top = 0,
    TopRight = 1,
    Right = 2,
    BottomRight = 3,
    Bottom = 4,
    BottomLeft = 5,
    Left = 6,
    TopLeft = 7,
    Header = 8
}
interface IDialogEvents extends Events<Component> {
    /**
     * This event is handled by the GameScreen.
     * @returns A `IterableOf<Dialog>` containing sibling dialogs. The list may contain this dialog.
     */
    getDialogList(): Iterable<Dialog>;
    /**
     * Emitted when the close button is pressed in the dialog, or when the `close` method is called.
     */
    close(): any;
    /**
     * Emitted when the settings button is pressed in the dialog.
     */
    options(): any;
    /**
     * Emitted when the dialog is resized
     */
    resize(wDiff: number, hDiff: number): any;
    /**
     * Emitted when the dialog is moved
     */
    move(xDiff: number, yDiff: number): any;
    /**
     * Emitted when the dialog panel changes
     * @param id The string or number representing the panel that was switched to
     * @param panel The panel that was switched to
     */
    switchPanel(id: string | number, panel: Component): any;
}
export default abstract class Dialog extends Component implements IDialog {
    private static topOrder;
    private static topDialog;
    static makeTopDialog(element: HTMLElement): void;
    event: IEventEmitter<this, IDialogEvents>;
    readonly id: DialogId;
    /**
     * The positions of each edge of the dialog. Stored as percentages.
     */
    edges: IDialogEdges;
    protected body: Component;
    protected header: Header;
    protected footer: Component;
    private readonly panels;
    private currentPanel;
    private lastPanel;
    private readonly visiblePanel;
    /**
     * The last edge positions of the dialog. Used when a handle is being moved.
     */
    private lastEdges;
    /**
     * Edge positions of the dialog saved the last time the dialog was resized by the user, with a scale. When the scale returns to
     * the scale of these saved positions, the dialog uses these positions rather than autoresizing.
     */
    private savedEdges?;
    /**
     * The description of how the dialog should be sized. (min, default, and max sizes and the position)
     */
    private description;
    constructor(id: number);
    addScrollableWrapper(initializer?: (wrapper: Component) => any): Component;
    addSettingsPanel(): Component;
    showSettingsPanel(): this;
    resetSizeAndPosition(): void;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    /**
     * Closes the dialog.
     *
     * Also the event handler for when the close button is pressed in the dialog's header.
     */
    close(): Promise<boolean>;
    addPanel(id: string | number): Component;
    showPanel(id: string | number): Component | undefined;
    getPanel(id: string | number): Component | undefined;
    isPanelVisible(id: string | number): boolean;
    /**
     * Sets the dialog position.
     */
    setSizeAndPosition(description: IDialogDescription): void;
    /**
     * Set the position of an edge.
     */
    setEdgePosition(edge: Edge, position: number): void;
    /**
     * Makes this dialog the top dialog.
     */
    focus(): void;
    /**
     * Mark that this dialog is "active"
     */
    markActive(): void;
    /**
     * Mark that this dialog is not "active"
     */
    markInactive(): void;
    /**
     * The name is displayed in the `Move To` context menu option, and in the `Switch With` options
     */
    abstract getName(): Iterable<IStringSection> | Translation | UiTranslation | ISerializedTranslation | undefined;
    /**
     * Event handler for when this dialog is appended
     */
    protected onAppend(): void;
    private hideSettingsPanel;
    private saveEdgesForScale;
    /**
     * Event handler for when a dialog handle starts to be moved.
     */
    private onHandleMoveStart;
    /**
     * Caches the current edge positions so any resizing/movement knows where it's moving from
     */
    private cacheLastEdges;
    /**
     * Event handler for when a dialog handle finishes being moved.
     */
    private onHandleMoveEnd;
    /**
     * Event handler for when a dialog handle moves.
     * @param handle The handle that moved.
     * @param move The amount that the handle has moved since the movement started.
     */
    private onHandleMove;
    /**
     * Event handler for when the header is moved.
     * @param move The amount that the header has moved since the movement started.
     */
    private onHeaderMove;
    /**
     * Returns the new `Edge` position for the given `Axis`.
     * If an `Edge` on this `Axis` (after the movement) is near enough to snap, returns that
     * `Edge` and the snap position. Otherwise, returns the top/left `Edge` (depending on `Axis`)
     * and the new position after the given movement.
     */
    private getNewEdgePositionForAxis;
    /**
     * Returns the closest snap position for both edges on the given axis, and which edge
     * the snap position is for.
     */
    private getSnapPositionForAxis;
    /**
     * Returns the new edge position of the given `Edge`; either the current position plus the given
     * movement, or the nearest snap position.
     */
    private getNewEdgePositionOrSnap;
    /**
     * Takes an edge and the generated edge position, and clamps the new edge position so that the
     * width and height of the dialog are within the described sizes.
     */
    private clampAxisLength;
    /**
     * Returns the snap position for a given `Edge`, based on where it's moving to.
     */
    private getSnapPositionForEdge;
    /**
     * Returns the closest snap position for the given edge position, on the given `Axis`,
     * or `undefined` if there is no snap position within the given snap distance.
     */
    private getClosestSnapPosition;
    /**
     * Gets the snap positions for an axis, which include the positions of the edges of other
     * dialogs and the edges of the screen.
     *
     * For example:
     * - `Axis.X` would return the position of `Edge.Left` and `Edge.Right` of each dialog,
     * and `0` and `100`.
     */
    private getSnapPositions;
    /**
     * Returns the new position of the given `Edge`, after moving the given amount.
     */
    private getNewEdgePosition;
    /**
     * Returns this dialog's positions of the two edges on the given axis.
     */
    private getEdgePositionsOfAxis;
    /**
     * Returns a `IVector2` containing the distance between the two sides.
     */
    private getSize;
    /**
     * Returns the two edges of the dialog closest to the edges of the viewport, and their positions.
     */
    private getEdges;
    private getScale;
    /**
     * Resets the position, causing it to be clamped to the viewport, using its current position
     *
     * Also the event handler for when the viewport resizes
     */
    private correctPosition;
}
interface IHandleEvents extends Events<Component> {
    moveStart(): any;
    move(change: Vector2): any;
    moveEnd(): any;
}
/**
 * A component that emits events for being dragged. Takes a `HandlePosition` to be styled with.
 */
declare class Handle extends Component {
    event: IEventEmitter<this, IHandleEvents>;
    private lastMousePosition?;
    readonly position: HandlePosition;
    constructor(position: HandlePosition, elementType?: string);
    private dragStart;
    private drag;
    private dragEnd;
}
interface IHeaderEvents extends Events<Handle> {
    close(): any;
}
/**
 * You can drag the header, so it's a `Handle` as well.
 */
export declare class Header extends Handle implements IRefreshable {
    event: IEventEmitter<this, IHeaderEvents>;
    readonly backButton: Button;
    readonly optionsButton: Button;
    private readonly text;
    constructor();
    setText(text: TranslationGenerator): void;
    refresh(): this;
}
export {};
