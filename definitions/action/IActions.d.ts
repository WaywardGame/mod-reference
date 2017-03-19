import { IDoodad } from "doodad/IDoodad";
import { ActionType, Delay, IMessagePack, ItemType, SfxType, SkillType } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { Message } from "language/Messages";
import { HintType } from "ui/IHint";
export interface IActionArgument {
    item?: IItem;
    preserver?: IItem;
    preservee?: IItem;
    fuel?: IItem;
    torch?: IItem;
    itemType?: ItemType;
    container?: IContainer;
    containerName?: string;
    silent?: boolean;
    reinforcer?: IItem;
    reinforcee?: IItem;
    repairer?: IItem;
    repairee?: IItem | IDoodad;
    transmogrifier?: IItem;
    transmogrifee?: IItem;
    tool?: IItem;
    toolBypass?: boolean;
}
export declare type ActionMessages = Array<IMessagePack | Message>;
export interface IActionResult {
    returnValue?: any;
    passTurn?: boolean;
    updateCraftTableAndWeight?: boolean;
    delay?: Delay;
    hint?: HintType;
    updateMalignity?: number;
    staminaReduction?: SkillType;
    skillGain?: IActionResultSkillGain | SkillType;
    audioEffect?: IActionResultAudioEffect | SfxType;
    messages: ActionMessages;
}
export interface IActionResultSkillGain {
    type: SkillType;
    mod?: number;
}
export interface IActionResultAudioEffect {
    type: SfxType;
    delay?: number;
    speed?: number;
}
export declare type ActionArgument = IActionArgument | IItem | undefined;
export declare type ActionCallback = (result: IActionResult, argument?: ActionArgument) => void;
export interface IActions {
    add(action: ActionType, callback: ActionCallback): void;
    remove(action: ActionType): void;
    execute<T>(action: ActionType, argument?: ActionArgument): T;
}
export default IActions;
