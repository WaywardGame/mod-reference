import StaticElement from "newui/game/util/StaticElement";
import { UiApi, UiElementOptions } from "newui/INewUi";
export declare enum Quadrant {
    None = 0,
    TopLeft = 1,
    TopRight = 2,
    BottomLeft = 3,
    BottomRight = 4,
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
    constructor(uiApi: UiApi, options?: UiElementOptions);
    /**
     * Changes the quadrant of this element, then emits the `ChangeQuadrant` event
     * with the parameters being the new quadrant and the old quadrant.
     *
     * Does not emit the event if the quadrant is not changing.
     */
    setQuadrant(quadrant: Quadrant): Promise<void>;
}
