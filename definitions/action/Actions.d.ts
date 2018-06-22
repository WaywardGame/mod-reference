import { IAction } from "action/IAction";
import { IGenericManager } from "game/IGenericManager";
export default function setup(actionManager: IGenericManager<IAction>): void;
export interface IActionDescriptionDescription {
    showDestroyConfirmination?: boolean;
}
export declare const actionDescriptions: IActionDescriptionDescription[];
