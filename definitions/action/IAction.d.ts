import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { ActionType, AttackType, Delay, EquipType, FacingDirection, IMessagePack, IPoint, IRGB, ItemQuality, ItemType, RestType, SfxType, SkillType, TurnType } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import IPlayer from "player/IPlayer";
import { HintType } from "ui/IHint";
export interface IAction {
    type: ActionType;
    callback: ActionCallback;
    usableAsGhost?: boolean;
    ignoreHasDelay?: boolean;
}
export interface IActionArgument {
    type?: ActionType;
    all?: boolean;
    attackType?: AttackType;
    bypass?: boolean;
    container?: IContainer;
    containerName?: string;
    creature?: ICreature;
    direction?: FacingDirection;
    doodad?: IDoodad;
    equipSlot?: EquipType;
    item?: IItem;
    itemComponentsConsumed?: IItem[];
    itemComponentsRequired?: IItem[];
    itemQuality?: ItemQuality;
    itemType?: ItemType;
    name?: string;
    point?: IPoint;
    preservee?: IItem;
    reinforcee?: IItem;
    repairee?: IItem | IDoodad;
    restType?: RestType;
    silent?: boolean;
    switchingHands?: boolean;
    targetContainer?: IContainer;
    torch?: IItem;
    transmogrifee?: IItem;
    useActionType?: ActionType;
}
export interface IActionResult {
    returnValue?: boolean;
    passTurn?: boolean | TurnType;
    updateView?: IActionUpdateView | boolean;
    particle?: IActionParticle | IRGB;
    updateRender?: boolean;
    updateCraftTableAndWeight?: boolean;
    delay?: IActionResultDelay | Delay;
    hint?: HintType;
    updateReputation?: number;
    staminaReduction?: SkillType;
    skillGain?: IActionResultSkillGain | SkillType;
    milestone?: MilestoneType;
    soundEffect?: IActionResultSoundEffect | SfxType;
    messages: ActionMessages;
    highlight?: string;
}
export interface IActionUpdateView {
    updateFov: boolean;
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
