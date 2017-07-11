import { ExecuteArgument, IAction } from "action/IAction";
import IActionManager from "action/IActionManager";
import { ActionType } from "Enums";
import { IActionArgumentPacketData } from "multiplayer/IPacket";
import IPlayer from "player/IPlayer";
export default class ActionManager implements IActionManager {
    private registered;
    private executing;
    check(): void;
    add(action: IAction): void;
    remove(actionType: ActionType): void;
    execute(player: IPlayer, actionType: ActionType, executeArgument?: ExecuteArgument): boolean | undefined;
    executePacket(player: IPlayer, actionArgumentPacketData: IActionArgumentPacketData): void;
    private executeInternal(player, actionType, actionArgument);
    private argumentToPacketData(actionArgument);
    private packetToArgument(packetData);
}
