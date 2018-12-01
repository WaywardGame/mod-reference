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
import IPlayer from "player/IPlayer";
export declare enum RequirementType {
    KillCreature = 0,
    CollectItem = 1,
    LearnSkill = 2,
    SailToCivilization = 3
}
export declare const enum RequirementEvent {
    Met = 0,
    Update = 1
}
export interface IRequirement<O extends any[] = any[]> {
    type: RequirementType;
    options: O;
    hidden: boolean;
    completed: boolean;
}
export interface IRequirementApi<O extends any[], D> {
    host: IPlayer;
    requirement: IRequirement<O>;
    data: D;
}
