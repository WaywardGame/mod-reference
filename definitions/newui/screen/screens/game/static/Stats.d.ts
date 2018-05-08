import { UiTranslation } from "language/ILanguage";
import { UiApi } from "newui/INewUi";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/element/QuadrantComponent";
import { IPlayer } from "player/IPlayer";
export default class Stats extends QuadrantComponent {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    private player;
    constructor(uiApi: UiApi, player: IPlayer);
    setPlayer(player: IPlayer): void;
    protected getID(): string;
    protected getName(): UiTranslation;
    private refresh();
    /**
     * Returns an object containing iterables for all stats that exist on the player and have a description,
     * separated by how a given stat should be displayed
     */
    private getStatsIterables();
    /**
     * Returns how the stat on an entity should be displayed.
     */
    private getStatDisplayType(entity, stat);
}
