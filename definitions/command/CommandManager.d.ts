/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import { ICommand } from "command/ICommand";
import { ICommandManager } from "command/ICommandManager";
import { Command } from "Enums";
import GenericManager from "game/GenericManager";
import { IGenericManager } from "game/IGenericManager";
import IPlayer from "player/IPlayer";
import { LogSource } from "utilities/Log";
export default class CommandManager extends GenericManager<ICommand> implements ICommandManager {
    setup(instance: IGenericManager<ICommand>): void;
    execute(player: IPlayer, cmd: Command, args?: string): void;
    protected getSource(): LogSource;
    protected getEnumObject(): any;
}
