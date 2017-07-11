import { ExecuteArgument, IAction } from "action/IAction";
import { ActionType } from "Enums";
import { IActionArgumentPacketData } from "multiplayer/IPacket";
import IPlayer from "player/IPlayer";
export interface IActionManager {
    check(): void;
    add(action: IAction): void;
    remove(actionType: ActionType): void;
    execute(player: IPlayer, actionType: ActionType, executeArgument?: ExecuteArgument): boolean | undefined;
    executePacket(player: IPlayer, actionArgumentPacketData: IActionArgumentPacketData): void;
}
export default IActionManager;
