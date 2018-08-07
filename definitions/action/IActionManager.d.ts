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
