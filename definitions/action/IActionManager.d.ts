import { ExecuteArgument, IAction } from "action/IAction";
import { ActionType } from "Enums";
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import IPlayer from "player/IPlayer";
export interface IActionManager {
    check(): void;
    add(action: IAction): void;
    remove(actionType: ActionType): void;
    execute(player: IPlayer, actionType: ActionType, executeArgument?: ExecuteArgument): boolean | undefined;
    executeMultiplayer(player: IPlayer, actionArgument: ActionPacket): any;
}
export default IActionManager;
