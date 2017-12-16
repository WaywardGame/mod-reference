import { ExecuteArgument, IAction } from "action/IAction";
import { ActionType } from "Enums";
import { IGenericManager } from "game/IGenericManager";
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import IPlayer from "player/IPlayer";
export interface IActionManager extends IGenericManager<IAction> {
    execute(player: IPlayer, actionType: ActionType, executeArgument?: ExecuteArgument): boolean | undefined;
    executeMultiplayer(player: IPlayer, actionArgument: ActionPacket): any;
}
export default IActionManager;
