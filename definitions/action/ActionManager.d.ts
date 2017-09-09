import { ExecuteArgument, IAction } from "action/IAction";
import IActionManager from "action/IActionManager";
import { ActionType } from "Enums";
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import IPlayer from "player/IPlayer";
export default class ActionManager implements IActionManager {
    private registered;
    private executing;
    check(): void;
    add(action: IAction): void;
    remove(actionType: ActionType): void;
    execute(player: IPlayer, actionType: ActionType, executeArgument?: ExecuteArgument): boolean | undefined;
    executeMultiplayer(player: IPlayer, actionPacket: ActionPacket): any;
    private executeInternal(player, actionType, actionArgument);
    private cloneActionArgument(actionArgument);
}
