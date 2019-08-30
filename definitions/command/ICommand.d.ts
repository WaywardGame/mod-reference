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
import Player from "entity/player/Player";
export interface ICommand {
    type: Command;
    callback: CommandCallback;
}
export declare type CommandCallback = (player: Player, args: string) => void;
export declare enum Command {
    Commands = 0,
    Players = 1,
    Ping = 2,
    Kick = 3,
    Banned = 4,
    Ban = 5,
    Unban = 6,
    Pause = 7,
    Save = 8,
    Sync = 9
}
