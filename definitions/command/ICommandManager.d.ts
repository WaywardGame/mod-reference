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
import { Command, ICommand } from "command/ICommand";
import Player from "entity/player/Player";
import { IGenericManager } from "game/IGenericManager";
export interface ICommandManager extends IGenericManager<ICommand> {
    execute(player: Player, cmd: Command, args?: string): void;
}
