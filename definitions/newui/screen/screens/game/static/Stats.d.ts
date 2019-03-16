/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IPlayer } from "entity/player/IPlayer";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import { QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
import { IStringSection } from "utilities/string/Interpolator";
export default class Stats extends QuadrantComponent {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    private player;
    constructor(player: IPlayer);
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
