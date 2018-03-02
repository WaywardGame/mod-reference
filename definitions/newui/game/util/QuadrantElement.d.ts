import StaticElement from "newui/game/util/StaticElement";
import { UiApi, UiElementOptions } from "newui/INewUi";
export declare enum Quadrant {
    TopLeft = 0,
    TopRight = 1,
    BottomLeft = 2,
    BottomRight = 3,
}
export declare enum QuadrantElementEvent {
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
    preferredQuadrant?: Quadrant;
    constructor(uiApi: UiApi, options?: UiElementOptions);
    /**
     * Changes the quadrant of this element, then emits the `ChangeQuadrant` event
     * with the parameters being the new quadrant and the old quadrant.
     */
    setQuadrant(quadrant: Quadrant): Promise<void>;
}
