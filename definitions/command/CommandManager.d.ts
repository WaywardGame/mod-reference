import { ICommand } from "command/ICommand";
import { ICommandManager } from "command/ICommandManager";
import { Command, Source } from "Enums";
import GenericManager from "game/GenericManager";
import { IGenericManager } from "game/IGenericManager";
import IPlayer from "player/IPlayer";
export default class CommandManager extends GenericManager<ICommand> implements ICommandManager {
    setup(instance: IGenericManager<ICommand>): void;
    execute(player: IPlayer, cmd: Command, args: string): void;
    protected getSource(): Source;
    protected getEnumObject(): any;
}
