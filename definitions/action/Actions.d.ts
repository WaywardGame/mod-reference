import { IAction } from "action/IAction";
import { IGenericManager } from "game/IGenericManager";
export default function setup(actionManager: IGenericManager<IAction>): void;
export interface IActionDescription {
    showDestroyConfirmination?: boolean;
}
export declare const actionDescriptions: IActionDescription[];
