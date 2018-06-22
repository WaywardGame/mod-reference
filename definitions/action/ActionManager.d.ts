import { ExecuteArgument, IAction, IActionResult } from "action/IAction";
import IActionManager from "action/IActionManager";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { ActionType } from "Enums";
import GenericManager from "game/GenericManager";
import { IGenericManager } from "game/IGenericManager";
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import IPlayer from "player/IPlayer";
import { LogSource } from "utilities/Log";
export default class ActionManager extends GenericManager<IAction> implements IActionManager {
    private executing;
    setup(instance: IGenericManager<IAction>): void;
    execute(player: IPlayer | IBaseHumanEntity, actionType: ActionType, executeArgument?: ExecuteArgument): boolean | undefined;
    executeMultiplayer(player: IPlayer, actionPacket: ActionPacket, skipCanExecuteCheck?: boolean): any;
    processResult(human: IBaseHumanEntity, result: IActionResult): boolean | undefined;
    protected getSource(): LogSource;
    protected getEnumObject(): any;
    private canExecuteAction;
    private executeInternal;
    private hasValidArguments;
}
