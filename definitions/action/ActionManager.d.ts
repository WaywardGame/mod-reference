import { ExecuteArgument, IAction } from "action/IAction";
import IActionManager from "action/IActionManager";
import { ActionType } from "Enums";
import GenericManager from "game/GenericManager";
import { IGenericManager } from "game/IGenericManager";
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import IPlayer from "player/IPlayer";
import { Source } from "utilities/Log";
export default class ActionManager extends GenericManager<IAction> implements IActionManager {
    private executing;
    setup(instance: IGenericManager<IAction>): void;
    execute(player: IPlayer, actionType: ActionType, executeArgument?: ExecuteArgument): boolean | undefined;
    executeMultiplayer(player: IPlayer, actionPacket: ActionPacket, skipCanExecuteCheck?: boolean): any;
    protected getSource(): Source;
    protected getEnumObject(): any;
    private canExecuteAction(player, action, actionArgument);
    private executeInternal(player, action, actionArgument);
    private hasValidArguments(player, actionValidator, actionArgument);
    private cloneActionArgument(actionArgument);
}
