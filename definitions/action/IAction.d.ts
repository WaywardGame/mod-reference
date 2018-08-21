/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ICorpse } from "creature/corpse/ICorpse";
import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { IEntity } from "entity/IEntity";
import { ActionType, AttackType, Delay, Direction, EquipType, IRGB, ItemQuality, ItemType, RestType, SfxType, SkillType, TurnType } from "Enums";
import { IGenericRegistration } from "game/IGenericManager";
import { IContainer, IItem } from "item/IItem";
import { INPC } from "npc/INPC";
import { MilestoneType } from "player/IMilestone";
import IPlayer from "player/IPlayer";
import { IVector2, IVector3 } from "utilities/math/IVector";
export interface IActionBase {
    validateArguments?: IActionArgumentValidator;
    usableAsGhost?: boolean;
    usableWhenPaused?: boolean;
    ignoreHasDelay?: boolean;
}
export interface IActionDescription extends IActionBase {
    name?: string;
    description?: string;
}
export interface IAction extends IActionBase, IGenericRegistration {
    type: ActionType;
    callback: ActionCallback;
}
export declare type IActionArgumentValidatorBase = {
    [P in keyof IActionArgument]?: boolean;
};
export interface IActionArgumentValidator extends IActionArgumentValidatorBase {
    allowNearbyItem?: boolean;
}
export declare type IActionArgument<T = any | undefined> = {
    type?: ActionType;
    all?: boolean;
    attackType?: AttackType;
    bypass?: boolean;
    container?: IContainer;
    containerType?: IItem | IDoodad;
    corpse?: ICorpse;
    creature?: ICreature;
    direction?: Direction;
    doodad?: IDoodad;
    entity?: IEntity;
    equipSlot?: EquipType;
    item?: IItem;
    itemComponentsCanBurn?: boolean;
    itemComponentsConsumed?: IItem[];
    itemComponentsRequired?: IItem[];
    itemQuality?: ItemQuality;
    itemType?: ItemType;
    lit?: IItem;
    name?: string;
    npc?: INPC;
    player?: IPlayer;
    point?: IVector2;
    position?: IVector3;
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
} & (T extends undefined ? T extends any ? {
    object?: T;
} : {} : {
    object: T;
});
export interface IActionResult {
    returnValue?: boolean;
    passTurn?: boolean | TurnType;
    updateView?: IActionUpdateView | boolean;
    particle?: IActionParticle | IRGB;
    updateRender?: boolean;
    updateTablesAndWeight?: boolean;
    delay?: IActionResultDelay | Delay;
    updateReputation?: number;
    staminaReduction?: SkillType;
    skillGain?: IActionResultSkillGain | SkillType;
    milestone?: MilestoneType;
    soundEffect?: IActionResultSoundEffect | SfxType;
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
export declare type ActionCallback<T = any> = (player: IPlayer, argument: IActionArgument<T>, result: IActionResult) => void;
