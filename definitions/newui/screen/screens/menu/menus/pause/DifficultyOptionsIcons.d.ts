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
import { IModdable } from "Enums";
import { IDifficultyOptions } from "game/Difficulty";
import { ITooltip } from "newui/component/IComponent";
export declare enum DifficultyOptionsIcon {
    Peaceful = 0,
    Respawn = 1,
    EternalNight = 2,
    Time = 3,
    Benignity = 4,
    Malignity = 5,
    Health = 6,
    Stamina = 7,
    Hunger = 8,
    Thirst = 9,
    Bleeding = 10,
    Poisoned = 11,
    Burned = 12,
    Skills = 13,
    NoItems = 14,
    Weight = 15
}
export interface IDifficultyOptionsIcon extends IModdable {
    imagePath?: string;
    check(options: IDifficultyOptions): boolean;
    tooltip?(tooltip: ITooltip, options: IDifficultyOptions): any;
}
declare const difficultyOptionsIcons: Descriptions<DifficultyOptionsIcon, IDifficultyOptionsIcon>;
export default difficultyOptionsIcons;
