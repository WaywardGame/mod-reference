import { ExecuteArgument, IAction } from "action/IAction";
import IActionManager from "action/IActionManager";
import { ActionType } from "Enums";
import { IActionArgumentPacket } from "multiplayer/IPacket";
import IPlayer from "player/IPlayer";
export default class ActionManager implements IActionManager {
    private registered;
    check(): void;
    add(action: IAction): void;
    remove(actionType: ActionType): void;
    execute(player: IPlayer, actionType: ActionType, executeArgument?: ExecuteArgument): boolean | undefined;
    executePacket(player: IPlayer, actionArgumentPacket: IActionArgumentPacket): void;
    private executeInternal(player, actionType, actionArgument);
    private argumentToPacket(actionArgument);
    private packetToArgument(packet);
}
