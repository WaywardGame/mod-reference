import { IOptionDescription } from "newui/component/ContextMenu";
import StaticComponent from "newui/screen/screens/game/component/StaticComponent";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
import { IStringSection } from "utilities/string/Interpolator";
/**
 * Since when do quadrants refer to 8 sections, this ain't no octagon
 */
export declare enum Quadrant {
    None = 0,
    TopLeft = 1,
    Top = 2,
    TopRight = 3,
    BottomRight = 4,
    Bottom = 5,
    BottomLeft = 6
}
export declare enum QuadrantComponentEvent {
    /**
     * Emitted with the following arguments:
     * @param quadrant The new quadrant of this element
     * @param oldQuadrant The old quadrant of this element
     */
    ChangeQuadrant = "ChangeQuadrant",
    /**
     * Emitted synchronously with no arguments.
     * @returns A `IterableOf<QuadrantElement>` containing sibling quadrant elements. The list
     * may contain this quadrant element.
     */
    GetQuadrantElementList = "GetQuadrantElementList"
}
/**
 * An element that displays in one quadrant of the screen.
 *
 * The current quadrant is stored in a data attribute `[data-quadrant]` as
 * the name of the quadrant (@see `Quadrant`)
 *
 * Changing the quadrant via `Quadrant->setQuadrant` will emit the event `ChangeQuadrant`
 * with the parameters being the new quadrant and the old quadrant.
 *
 * Changing the quadrant will not affect other elements: this is the responsisibility of the parent.
 */
export default abstract class QuadrantComponent extends StaticComponent {
    protected readonly gsapi: IGameScreenApi;
    readonly preferredQuadrant: Quadrant;
    constructor(gsapi: IGameScreenApi);
    /**
     * Changes the quadrant of this element, then emits the `ChangeQuadrant` event
     * with the parameters being the new quadrant and the old quadrant.
     *
     * Does not emit the event if the quadrant is not changing.
     */
    setQuadrant(quadrant: Quadrant, trigger?: boolean): Promise<void>;
    /**
     * The ID is used for `Switch With` context menu options
     */
    abstract getID(): string | number;
    /**
     * The name is displayed in the `Move To` context menu option, and in the `Switch With` options
     */
    protected abstract getName(): IStringSection[];
    protected getContextMenuDescription(): Array<[number | string, IOptionDescription]>;
    /**
     * Returns a new context menu using this element's context menu descriptions
     */
    private getContextMenu;
}
