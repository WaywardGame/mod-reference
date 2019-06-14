/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IDamageInfo } from "entity/creature/ICreature";
import IEntity from "entity/IEntity";
import { MilestoneType } from "entity/player/IMilestone";
import { IAttackHand, IMobCheck, PlayerState } from "entity/player/IPlayer";
import PlayerDefense from "entity/player/PlayerDefense";
import { ISkillSet } from "entity/player/Skills";
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import { FireType } from "game/IGame";
import { Quality } from "game/IObject";
import { IContainer, IItem, ItemType } from "item/IItem";
import { IProtectedItemOptions } from "item/IItemManager";
import Message from "language/dictionary/Message";
import Translation, { ISerializedTranslation } from "language/Translation";
import { IModdable } from "mod/ModRegistry";
import { IOptions } from "save/data/ISaveDataGlobal";
import { IRGB } from "utilities/Color";
import { IVector3 } from "utilities/math/IVector";
export default interface IHuman extends IEntity {
    event: IEventEmitter<this, IHumanEvents>;
    attackFromEquip: IAttackHand;
    canSendMessage: boolean;
    crafted: {
        [index: number]: ICrafted;
    };
    customization: ICustomizations;
    deathBy: ISerializedTranslation;
    defense: PlayerDefense;
    defenses: number[];
    equipped: {
        [index: number]: number;
    };
    readonly handToUse: EquipType | undefined;
    inventory: IContainer;
    readonly options: IOptions;
    raft: number | undefined;
    restData: IRestData | undefined;
    score: number;
    skills: ISkillSet;
    state: PlayerState;
    swimming: boolean;
    identifier: string;
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
    addDelay(delay: number, replace?: boolean): void;
    addMilestone(milestone: MilestoneType, data?: number): void;
    burn(burnType: FireType, skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType, fromCombat?: boolean): number | undefined;
    calculateEquipmentStats(): void;
    cancelResting(reason: RestCancelReason): boolean;
    canJump(): boolean;
    canSeePosition(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    checkAndRemoveBlood(): boolean;
    checkForGatherFire(): Translation | undefined;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    createItemInInventory(itemType: ItemType, quality?: Quality): IItem;
    damage(amount: number, damageMessage: Message | Translation, soundDelay?: number, causesBlood?: boolean): number | undefined;
    damage(damageInfo: IDamageInfo): number | undefined;
    damageRandomEquipment(): void;
    equip(item: IItem, slot: EquipType): void;
    getBurnDamage(fireType: FireType, skipParry?: boolean, equipType?: EquipType): number;
    getConsumeBonus(item: IItem | undefined, skillUse?: SkillType): number;
    getDamageModifier(): number;
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquippedItems(): IItem[];
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    getAndSwitchHandToUse(): EquipType | undefined;
    getMaxHealth(): number;
    getName(): Translation;
    getProtectedItemsOptions(): IProtectedItemOptions;
    getReputation(): number;
    hasDelay(): boolean;
    hasHandToUse(): boolean;
    isGhost(): boolean;
    isResting(): boolean;
    isRestingCancelled(): boolean;
    setOptions(options: IOptions): void;
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
interface IHumanEvents extends Events<IEntity> {
    /**
     * @param skill The skill that is changing
     * @param value The new skill value (core + bonus)
     */
    skillChange(skill: SkillType, value: number): void;
}
export interface IHairstyleDescription extends IModdable {
    name: string;
    imagePath?: string;
}
export interface IColorDescription extends IModdable {
    color: IRGB;
}
export interface ICustomizations {
    hairStyle: keyof typeof HairStyle;
    hairColor: keyof typeof HairColor;
    skinColor: keyof typeof SkinColor;
}
export interface ICharacter {
    name: string;
    customization: ICustomizations;
}
export declare const enum Delay {
    None = 0,
    LongPause = 25,
    Movement = 10,
    ShortPause = 13,
    Collision = 40,
    TurnDirection = 2,
    ReallyLongPause = 100
}
export declare enum EquipType {
    None = 0,
    Held = 1,
    Legs = 2,
    Chest = 3,
    Head = 4,
    Belt = 5,
    Feet = 6,
    Neck = 7,
    Hands = 8,
    Back = 9,
    LeftHand = 10,
    RightHand = 11
}
export declare enum HairColor {
    "#e7c978" = 0,
    "#b9793d" = 1,
    "#b84627" = 2,
    "#7f3721" = 3,
    "#7e4b1c" = 4,
    "#422116" = 5,
    "#28222a" = 6,
    "#bfb0a8" = 7,
    "#ffffff" = 8
}
export declare enum SkinColor {
    "#fddcd4" = 0,
    "#d6be93" = 1,
    "#f0ceab" = 2,
    "#c7a077" = 3,
    "#d89a72" = 4,
    "#89623a" = 5,
    "#88563b" = 6,
    "#613429" = 7,
    "#361e1c" = 8
}
export declare enum HairStyle {
    None = 0,
    Spike = 1,
    Bun = 2,
    Ponytail = 3,
    Afro = 4,
    Bouncy = 5,
    Dreads = 6,
    Shaved = 7,
    Long = 8,
    Mohawk = 9
}
export declare enum RestCancelReason {
    CreatureNearby = 0,
    Damaged = 1,
    FullStamina = 2,
    NearbyCreatureDamagedDoodad = 3,
    CreatureDamaged = 4,
    Canceled = 5
}
export interface IRestData {
    type: RestType;
    startHealth: number;
    totalCycles: number;
    itemId?: number;
    doodadId?: number;
    cycle?: number;
    cancelReason?: RestCancelReason;
}
export declare enum RestType {
    Resting = 0,
    Sleeping = 1
}
export declare enum SkillType {
    Chemistry = 0,
    Anatomy = 1,
    Marksmanship = 2,
    Blacksmithing = 3,
    Botany = 4,
    Camping = 5,
    Cartography = 6,
    Claythrowing = 7,
    Cooking = 8,
    Fishing = 9,
    Fletching = 10,
    Glassblowing = 11,
    Leatherworking = 12,
    LockPicking = 13,
    Lumberjacking = 14,
    Mining = 15,
    Mycology = 16,
    Parrying = 17,
    Stonecrafting = 18,
    Swimming = 19,
    Tactics = 20,
    Tailoring = 21,
    Throwing = 22,
    Tinkering = 23,
    Trapping = 24,
    Woodworking = 25,
    Taming = 26,
    Gardening = 27,
    Bartering = 28
}
export interface ICrafted {
    unlockTime: number;
    newUnlock: boolean;
}
export {};
