import { IUiElementOptions } from "newui/element/IUiElement";
import { UiApi } from "newui/INewUi";
import StaticElement from "newui/screen/screens/game/element/StaticElement";
/**
 * Since when do quadrants refer to 8 sections, this ain't no octagon
 */
export declare enum Quadrant {
    None = 0,
    Left = 1,
    TopLeft = 2,
    Top = 3,
    TopRight = 4,
    Right = 5,
    BottomRight = 6,
    Bottom = 7,
    BottomLeft = 8,
}
export declare enum QuadrantElementEvent {
    /**
     * Emitted with the following arguments:
     * @param quadrant The new quadrant of this element
     * @param oldQuadrant The old quadrant of this element
     */
    ChangeQuadrant = "ChangeQuadrant",
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
export default abstract class QuadrantElement extends StaticElement {
    readonly preferredQuadrant: Quadrant;
    constructor(uiApi: UiApi, options?: IUiElementOptions);
    /**
     * Changes the quadrant of this element, then emits the `ChangeQuadrant` event
     * with the parameters being the new quadrant and the old quadrant.
     *
     * Does not emit the event if the quadrant is not changing.
     */
    setQuadrant(quadrant: Quadrant, trigger?: boolean): Promise<void>;
}
