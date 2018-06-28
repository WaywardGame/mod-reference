import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import IGameScreenApi, { QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
import { IPlayer } from "player/IPlayer";
import { IStringSection } from "utilities/string/Interpolator";
export default class Stats extends QuadrantComponent {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    private player;
    constructor(gsapi: IGameScreenApi, player: IPlayer);
    setPlayer(player: IPlayer): void;
    getID(): QuadrantComponentId;
    protected getName(): IStringSection[];
    private refresh;
    /**
     * Returns an object containing iterables for all stats that exist on the player and have a description,
     * separated by how a given stat should be displayed
     */
    private getStatsIterables;
    /**
     * Returns how the stat on an entity should be displayed.
     */
    private getStatDisplayType;
}
