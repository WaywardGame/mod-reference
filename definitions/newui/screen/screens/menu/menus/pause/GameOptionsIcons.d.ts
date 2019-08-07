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
    EternalDay = 3,
    EternalNight = 4,
    Time = 5,
    Benignity = 6,
    Malignity = 7,
    Health = 8,
    Stamina = 9,
    Hunger = 10,
    Thirst = 11,
    Bleeding = 12,
    Poisoned = 13,
    Burned = 14,
    Skills = 15,
    NoItems = 16,
    Weight = 17
}
export interface IGameOptionsIcon extends IModdable, IHasImagePath {
    check(options: IGameOptions, localPlayerOption: IGameOptionsPlayer): boolean;
    tooltip?(tooltip: ITooltip, options: IGameOptions, localPlayerOption: IGameOptionsPlayer): any;
}
declare const gameOptionsIcons: Descriptions<GameOptionsIcon, IGameOptionsIcon>;
export default gameOptionsIcons;
