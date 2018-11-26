/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import IEntity from "entity/IEntity";
import { CreatureType } from "Enums";
import Requirement, { Goal } from "player/quest/requirement/Requirement";
export default class KillCreatureRequirement extends Requirement<[CreatureType, number], KillCreatureGoal> {
    constructor();
    protected getGoalClass(): typeof KillCreatureGoal;
    protected validateOptions(creatureType: unknown, killQuantity: unknown): boolean;
}
declare class KillCreatureGoal extends Goal<[CreatureType, number]> {
    private kills;
    onCreatureKill(entity: IEntity): boolean;
}
export {};
