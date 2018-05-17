import Component from "newui/component/Component";
import { UiApi } from "newui/INewUi";
export declare enum Edge {
    Top = 0,
    Right = 1,
    Bottom = 2,
    Left = 3,
}
/**
 * The positions of each edge of the dialog. Stored as percentages.
 */
export interface IEdges {
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
}
export default class Dialog extends Component {
    protected body: Component;
    protected header: Component;
    protected footer: Component;
    /**
     * The positions of each edge of the dialog. Stored as percentages.
     */
    protected edges: IEdges;
    /**
     * The last edge positions of the dialog. Used when a handle is being moved.
     */
    private lastEdges;
    constructor(uiApi: UiApi);
    /**
     * Set the position of an edge.
     */
    setEdgePosition(edge: Edge, position: number): void;
    /**
     * Event handler for when a dialog handle starts to be moved.
     */
    private onHandleMoveStart();
    /**
     * Event handler for when a dialog handle finishes being moved.
     */
    private onHandleMoveEnd();
    /**
     * Event handler for when a dialog handle moves.
     * @param handle The handle that moved.
     * @param move The amount that the handle has moved since the movement started.
     */
    private onHandleMove(handle, move);
    /**
     * Event handler for when the header is moved.
     * @param move The amount that the header has moved since the movement started.
     */
    private onHeaderMove(_, move);
    /**
     * Returns the new `Edge` position for the given `Axis`.
     * If an `Edge` on this `Axis` (after the movement) is near enough to snap, returns that
     * `Edge` and the snap position. Otherwise, returns the top/left `Edge` (depending on `Axis`)
     * and the new position after the given movement.
     */
    private getNewEdgePositionForAxis(axis, move);
    /**
     * Returns the closest snap position for both edges on the given axis, and which edge
     * the snap position is for.
     */
    private getSnapPositionForAxis(axis, move);
    /**
     * Returns the new edge position of the given `Edge`; either the current position plus the given
     * movement, or the nearest snap position.
     */
    private getNewEdgePositionOrSnap(edge, move);
    /**
     * Returns the snap position for a given `Edge`, based on where it's moving to.
     */
    private getSnapPositionForEdge(edge, move);
    /**
     * Returns the closest snap position for the given edge position, on the given `Axis`,
     * or `undefined` if there is no snap position within the given snap distance.
     */
    private getClosestSnapPosition(edgePosition, axis);
    /**
     * Gets the snap positions for an axis, which include the positions of the edges of other
     * dialogs and the edges of the screen.
     *
     * For example:
     * - `Axis.X` would return the position of `Edge.Left` and `Edge.Right` of each dialog,
     * and `0` and `100`.
     */
    private getSnapPositions(axis);
    /**
     * Returns the new position of the given `Edge`, after moving the given amount.
     */
    private getNewEdgePosition(edge, move);
    /**
     * Returns this dialog's positions of the two edges on the given axis.
     */
    private getEdges(axis);
}
