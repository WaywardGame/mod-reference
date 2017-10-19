import { Command } from "Enums";
import { IPlayer } from "player/IPlayer";
export interface ICommand {
    type: Command;
    callback: CommandCallback;
}
export declare type CommandCallback = (player: IPlayer, args: string) => void;
