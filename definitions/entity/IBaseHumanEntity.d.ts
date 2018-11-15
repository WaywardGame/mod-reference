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
import { IDamageInfo } from "creature/ICreature";
import IBaseEntity from "entity/IBaseEntity";
import { Delay, EquipType, ItemQuality, ItemType, PlayerState, RestCancelReason, SkillType } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { IProtectedItemOptions } from "item/IItemManager";
import Message from "language/dictionary/Message";
import Translation, { ISerializedTranslation } from "language/Translation";
import { MilestoneType } from "player/IMilestone";
import { IAttackHand, IMobCheck, IPlayerCustomization, IRestData } from "player/IPlayer";
import MessageManager from "player/MessageManager";
import NoteManager from "player/NoteManager";
import PlayerDefense from "player/PlayerDefense";
import { ISkillSet } from "player/Skills";
import { IOptions } from "save/data/ISaveDataGlobal";
import { IVector3 } from "utilities/math/IVector";
export default interface IBaseHumanEntity extends IBaseEntity {
    attackFromEquip: IAttackHand;
    canSendMessage: boolean;
    customization: IPlayerCustomization;
    deathBy: ISerializedTranslation;
    defense: PlayerDefense;
    defenses: number[];
    equipped: {
        [index: number]: number;
    };
    handToUse: EquipType;
    inventory: IContainer;
    messages: MessageManager;
    options: IOptions;
    raft: number | undefined;
    restData: IRestData | undefined;
    score: number;
    skills: ISkillSet;
    state: PlayerState;
    swimming: boolean;
    identifier: string;
    notes: NoteManager;
    isLocalPlayer(): boolean;
    /**
     * @returns the "base value" of the skill (ignoring any bonuses applied by legendary equipment)
     */
    getSkillCore(skill: SkillType): number;
    /**
     * Sets the "base value" of the skill (ignoring any bonuses applied by legendary equipment)
     * @param skill The skill to set the base value of.
     * @param value The value (between 0 and 100) to set the skill to.
     */
    setSkillCore(skill: SkillType, value: number): void;
    /**
     * @returns The value of the given skill, the sum of the base value and any bonuses from legendary equipment
     */
    getSkill(skill: SkillType): number;
    /**
     * @returns Whether the skill of this human is more than or equal to a random number between `0` and the value of `check`.
     */
    skillCheck(skill: SkillType, check: number): boolean;
    addDelay(delay: Delay, replace?: boolean): void;
    addMilestone(milestone: MilestoneType, data?: number): void;
    burn(skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType, fromCombat?: boolean): number | undefined;
    calculateEquipmentStats(): void;
    cancelResting(reason: RestCancelReason): boolean;
    canJump(): boolean;
    canSeePosition(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    checkAndRemoveBlood(): boolean;
    checkForGatherFire(): Translation | undefined;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    createItemInInventory(itemType: ItemType, quality?: ItemQuality): IItem;
    damage(amount: number, damageMessage: Message | Translation, soundDelay?: number, causesBlood?: boolean): number | undefined;
    damage(damageInfo: IDamageInfo): number | undefined;
    damageRandomEquipment(): void;
    equip(item: IItem, slot: EquipType): void;
    getBurnDamage(skipParry?: boolean, equipType?: EquipType): number;
    getConsumeBonus(item: IItem | undefined, skillUse: SkillType | undefined): number;
    getDamageModifier(): number;
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquippedItems(): IItem[];
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    getHandToUse(): EquipType | undefined;
    getMaxHealth(): number;
    getName(): Translation;
    getProtectedItemsOptions(): IProtectedItemOptions;
    getReputation(): number;
    hasDelay(): boolean;
    hasHandToUse(): boolean;
    isGhost(): boolean;
    isResting(): boolean;
    isRestingCancelled(): boolean;
    setPosition(point: IVector3): void;
    setRaft(itemId: number | undefined): boolean;
    setZ(z: number): void;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    staminaReduction(skillType: SkillType): void;
    startResting(restData: IRestData): void;
    unequip(item: IItem): void;
    unequipAll(): void;
    update(): void;
    updateReputation(reputation: number): void;
    updateStatsAndAttributes(): void;
}
export declare const enum HumanEvent {
    /**
     * @param skill The skill that is changing
     * @param value The new skill value (core + bonus)
     */
    SkillChange = "SkillChange"
}
