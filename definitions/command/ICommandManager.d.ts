import { ICommand } from "command/ICommand";
import { Command } from "Enums";
import { IGenericManager } from "game/IGenericManager";
import { IPlayer } from "player/IPlayer";
export interface ICommandManager extends IGenericManager<ICommand> {
    execute(player: IPlayer, cmd: Command, args?: string): void;
}
