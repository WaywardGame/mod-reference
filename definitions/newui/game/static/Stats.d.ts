import QuadrantElement, { Quadrant } from "newui/game/util/QuadrantElement";
import { UiApi } from "newui/INewUi";
import { IPlayer } from "player/IPlayer";
export default class Stats extends QuadrantElement {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    private player;
    private statbars;
    private attributes;
    private autoStats;
    constructor(uiApi: UiApi, player: IPlayer);
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
