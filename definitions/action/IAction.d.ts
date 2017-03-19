import { IDoodad } from "doodad/IDoodad";
import { ActionType, AttackType, Delay, EquipType, FacingDirection, IMessagePack, IPoint, IRGB, ItemQuality, ItemType, RestType, SfxType, SkillType, TurnType } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { Message } from "language/Messages";
import IPlayer from "player/IPlayer";
import { HintType } from "ui/IHint";
export interface IAction {
    type: ActionType;
    callback: ActionCallback;
    usableAsGhost?: boolean;
}
export interface IActionArgument {
    type?: ActionType;
    all?: boolean;
    attackType?: AttackType;
    bypass?: boolean;
    container?: IContainer;
    containerName?: string;
    direction?: FacingDirection;
    equipSlot?: EquipType;
    item?: IItem;
    itemComponentsConsumed?: IItem[];
    itemComponentsRequired?: IItem[];
    itemComponentsToBeSalvaged?: IItem[];
    itemQuality?: ItemQuality;
    itemType?: ItemType;
    point?: IPoint;
    preservee?: IItem;
    reinforcee?: IItem;
    repairee?: IItem | IDoodad;
    restType?: RestType;
    silent?: boolean;
    targetContainer?: IContainer;
    torch?: IItem;
    transmogrifee?: IItem;
    useActionType?: ActionType;
}
export interface IActionResult {
    returnValue?: boolean;
    passTurn?: boolean | TurnType;
    particle?: IActionParticle | IRGB;
    updateRender?: boolean;
    updateCraftTableAndWeight?: boolean;
    delay?: IActionResultDelay | Delay;
    hint?: HintType;
    updateReputation?: number;
    staminaReduction?: SkillType;
    skillGain?: IActionResultSkillGain | SkillType;
    soundEffect?: IActionResultSoundEffect | SfxType;
    messages: ActionMessages;
}
export interface IActionResultDelay {
    type: Delay;
    replace?: boolean;
}
export interface IActionParticle {
    color: IRGB;
    x?: number;
    y?: number;
    z?: number;
    count?: number;
    inFront?: boolean;
}
export interface IActionResultSkillGain {
    type: SkillType;
    mod?: number;
}
export interface IActionResultSoundEffect {
    type: SfxType;
    inFront?: boolean;
    x?: number;
    y?: number;
    z?: number;
    delay?: number;
    speed?: number;
    noPosition?: boolean;
}
export declare type ExecuteArgument = IActionArgument | IItem | undefined;
export declare type ActionCallback = (player: IPlayer, argument: IActionArgument, result: IActionResult) => void;
export declare type ActionMessages = Array<IMessagePack | Message>;
