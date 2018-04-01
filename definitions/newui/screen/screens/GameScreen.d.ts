import { UiApi } from "newui/INewUi";
import MenuBar from "newui/screen/screens/game/static/MenuBar";
import Messages from "newui/screen/screens/game/static/Messages";
import Quickslots from "newui/screen/screens/game/static/Quickslots";
import Stats from "newui/screen/screens/game/static/Stats";
import UiScreen from "newui/screen/UiScreen";
export interface GameScreenData {
    backgroundImage: string;
}
export default class GameScreen extends UiScreen<GameScreenData> {
    menuBar: MenuBar;
    stats: Stats;
    quickslots: Quickslots;
    messages: Messages;
    private readonly quadrantMap;
    constructor(uiApi: UiApi);
    create(): void;
    /**
     * Adds a quadrant element to the screen.
     *
     * The quadrant is decided following these steps:
     * 1. Starts with the `preferredQuadrant` of the element.
     * 2. If the quadrant is `Quadrant.None`, or the quadrant is already used,
     * use instead the result of `getUnusedQuadrant()`
     */
    private addQuadrantElement(element);
    /**
     * Event handler for `QuadrantElementEvent.ChangeQuadrant`
     *
     * The element that is changing quadrants switches places with the element already in that quadrant.
     *
     * If the element is changing to `Quadrant.None`, it is removed from the `quadrantMap`. If the element
     * was in `Quadrant.None` and is switching places with another element, that element is removed
     * from the `quadrantMap`.
     */
    private onQuadrantElementChange(quadrantElement, quadrant, oldQuadrant);
    /**
     * Returns the first unused `Quadrant`, or `Quadrant.None` if there are none.
     */
    private getUnusedQuadrant();
}
