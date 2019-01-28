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
import { Stat } from "entity/IStats";
import { IModdable, SkillType } from "Enums";
export declare class SkillLevel {
    readonly bonus: number;
    readonly core: number;
}
export interface ISkillSet {
    [index: number]: SkillLevel | undefined;
}
export interface ISkillDescription extends IModdable {
    attribute?: Stat;
    reputation?: number;
}
export declare function skillSet(): ISkillSet;
export declare function skillChance(level: number): number;
export declare const skillDescriptions: OptionalDescriptions<SkillType, ISkillDescription>;
