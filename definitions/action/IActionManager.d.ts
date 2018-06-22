import { ExecuteArgument, IAction, IActionResult } from "action/IAction";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { ActionType } from "Enums";
import { IGenericManager } from "game/IGenericManager";
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import IPlayer from "player/IPlayer";
export interface IActionManager extends IGenericManager<IAction> {
    execute(human: IPlayer | IBaseHumanEntity, actionType: ActionType, executeArgument?: ExecuteArgument): boolean | undefined;
    executeMultiplayer(player: IPlayer, actionArgument: ActionPacket): any;
    processResult(human: IBaseHumanEntity, result: IActionResult): any;
}
export default IActionManager;
