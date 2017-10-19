import { ExecuteArgument, IAction } from "action/IAction";
import IActionManager from "action/IActionManager";
import { ActionType, Source } from "Enums";
import GenericManager from "game/GenericManager";
import { IGenericManager } from "game/IGenericManager";
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import IPlayer from "player/IPlayer";
export default class ActionManager extends GenericManager<IAction> implements IActionManager {
    private executing;
    setup(instance: IGenericManager<IAction>): void;
    execute(player: IPlayer, actionType: ActionType, executeArgument?: ExecuteArgument): boolean | undefined;
    executeMultiplayer(player: IPlayer, actionPacket: ActionPacket): any;
    protected getSource(): Source;
    protected getEnumObject(): any;
    private executeInternal(player, actionType, actionArgument);
    private cloneActionArgument(actionArgument);
}
