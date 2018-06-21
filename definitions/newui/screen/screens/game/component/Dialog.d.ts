import { Bindable } from "Enums";
import { BindCatcherApi } from "newui/BindingManager";
import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import { DialogId, Edge, IDialogDescription } from "newui/screen/screens/game/Dialogs";
import IGameScreenApi, { IDialog } from "newui/screen/screens/game/IGameScreenApi";
/**
 * The positions of each edge of the dialog. Stored as percentages.
 */
export interface IDialogEdges {
    [Edge.Top]: number;
    [Edge.Right]: number;
    [Edge.Bottom]: number;
    [Edge.Left]: number;
}
export declare enum DialogEvent {
    /**
     * Emitted synchronously with no arguments.
     * @returns A `IterableOf<Dialog>` containing sibling dialogs. The list may contain this dialog.
     */
    GetDialogList = "GetDialogList",
    /**
     * Emitted when the close button is pressed in the dialog, or when the `close` method is called.
     */
    Close = "Close"
}
export default abstract class Dialog extends Component implements IDialog {
    protected readonly gsapi: IGameScreenApi;
    private static topOrder;
    private static topDialog;
    static makeTopDialog(element: HTMLElement): void;
    /**
     * The positions of each edge of the dialog. Stored as percentages.
     */
    edges: IDialogEdges;
    protected body: Component;
    protected header: Component;
    protected footer: Component;
    private readonly panels;
    private visiblePanel;
    /**
     * The last edge positions of the dialog. Used when a handle is being moved.
     */
    private lastEdges;
    /**
     * The description of how the dialog should be sized. (min, default, and max sizes and the position)
     */
    private description;
    constructor(gsapi: IGameScreenApi);
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
     * The ID is used for `Switch With` context menu options
     */
    abstract getID(): DialogId;
    /**
     * The name is displayed in the `Move To` context menu option, and in the `Switch With` options
     */
    abstract getName(): TranslationGenerator;
    /**
     * Event handler for when this dialog is appended
     */
    private onAppend;
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
    private resetPosition;
}
