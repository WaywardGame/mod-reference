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
import { SkillType } from "entity/IHuman";
import { ISerializedTranslation } from "language/Translation";
export interface IObject<T> {
    type: T;
    id: number;
    renamed?: string | ISerializedTranslation;
}
export interface IObjectDescription {
    decayMax?: number;
    skillUse?: SkillType;
    weightCapacity?: number;
    imagePath?: string;
    preservationChance?: number;
}
export interface IObjectOptions {
    decay?: number;
    minDur?: number;
    maxDur?: number;
    quality?: Quality;
}
export declare enum Quality {
    None = 0,
    Random = 1,
    Exceptional = 2,
    Remarkable = 3,
    Legendary = 4
}
