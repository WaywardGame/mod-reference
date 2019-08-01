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
import { IHasImagePath } from "game/IObject";
import { IGameOptions, IGameOptionsPlayer } from "game/options/IGameOptions";
import { IModdable } from "mod/ModRegistry";
import { ITooltip } from "newui/component/IComponent";
export declare enum GameOptionsIcon {
    Peaceful = 0,
    Creatures = 1,
    Respawn = 2,
    EternalNight = 3,
    Time = 4,
    Benignity = 5,
    Malignity = 6,
    Health = 7,
    Stamina = 8,
    Hunger = 9,
    Thirst = 10,
    Bleeding = 11,
    Poisoned = 12,
    Burned = 13,
    Skills = 14,
    NoItems = 15,
    Weight = 16
}
export interface IGameOptionsIcon extends IModdable, IHasImagePath {
    check(options: IGameOptions, localPlayerOption: IGameOptionsPlayer): boolean;
    tooltip?(tooltip: ITooltip, options: IGameOptions, localPlayerOption: IGameOptionsPlayer): any;
}
declare const gameOptionsIcons: Descriptions<GameOptionsIcon, IGameOptionsIcon>;
export default gameOptionsIcons;
