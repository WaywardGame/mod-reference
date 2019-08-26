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
import Doodad from "doodad/Doodad";
import { IDamageInfo } from "entity/creature/ICreature";
import Entity from "entity/Entity";
import { ICausesDamage } from "entity/IEntity";
import { EquipType, ICheckUnderOptions, ICrafted, ICustomizations, IHumanEvents, IRestData, RestCancelReason, SkillType } from "entity/IHuman";
import { Stat } from "entity/IStats";
import { IAttackHand, IMobCheck, PlayerState } from "entity/player/IPlayer";
import MessageManager from "entity/player/MessageManager";
import NoteManager from "entity/player/note/NoteManager";
import PlayerDefense from "entity/player/PlayerDefense";
import { ISkillSet } from "entity/player/Skills";
import { IEventEmitter } from "event/EventEmitter";
import { FireType } from "game/IGame";
import { Quality } from "game/IObject";
import { Milestone } from "game/milestones/IMilestone";
import { IContainer, ItemType, ItemTypeGroup } from "item/IItem";
import { IProtectedItemOptions } from "item/IItemManager";
import Item from "item/Item";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IOptions } from "save/data/ISaveDataGlobal";
import { ITileEvent } from "tile/ITileEvent";
import { IVector3 } from "utilities/math/IVector";
export declare const REPUTATION_MAX = 64000;
export default abstract class Human extends Entity {
    event: IEventEmitter<this, IHumanEvents>;
    attackFromEquip: IAttackHand;
    crafted: {
        [index: number]: ICrafted;
    };
    customization: ICustomizations;
    deathBy: import("../language/Translation").ISerializedTranslation;
    defense: PlayerDefense;
    defenses: number[];
    equipped: {
        [index: number]: number;
    };
    handToUse: EquipType | undefined;
    identifier: string;
    inventory: IContainer;
    lightBonus: number;
    messages: MessageManager;
    notes: NoteManager;
    options: IOptions;
    raft: number | undefined;
    restData: IRestData | undefined;
    score: number;
    skills: ISkillSet;
    state: PlayerState;
    swimming: boolean;
    canSendMessage: boolean;
    protected _fovRadius: number;
    protected _fovMaxRadius: number;
    private readonly privateStore;
    constructor();
    resetStatTimers(): void;
    isLocalPlayer(): boolean;
    setOptions(options: IOptions): void;
    getName(): Translation;
    getProtectedItemsOptions(): IProtectedItemOptions;
    getReputation(): number;
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
    isResting(): boolean;
    isGhost(): boolean;
    isRestingCancelled(): boolean;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): boolean;
    createItemInInventory(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, quality?: Quality): Item;
    hasHandToUse(): boolean;
    getAndSwitchHandToUse(): EquipType | undefined;
    damageRandomEquipment(): void;
    getDamageModifier(): number;
    damage(damageInfoOrAmount: IDamageInfo | number, damageMessage?: Message | Translation, soundDelay?: number, causesBlood?: boolean): number | undefined;
    getEquippedItems(): Item[];
    getEquippedItem(slot: EquipType): Item | undefined;
    getEquipSlotForItem(item: Item): EquipType | undefined;
    getMaxHealth(): number;
    addMilestone(milestone: Milestone, data?: number): void;
    update(): void;
    updateStatsAndAttributes(): void;
    staminaReduction(skill: SkillType): void;
    updateReputation(reputation: number): void;
    setRaft(itemId: number | undefined): boolean;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    getBurnDamage(fireType: FireType, skipParry?: boolean, equipType?: EquipType): number;
    /**
     * Burn the player
     */
    burn(fireType: FireType, skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType, fromCombat?: boolean): number | undefined;
    setPosition(point: IVector3): void;
    setZ(z: number, updateFlowField?: boolean): void;
    checkUnder(inFacingDirection?: boolean, options?: ICheckUnderOptions): ICheckUnderOptions;
    damageBySteppingOn(thing: Doodad | ITileEvent, options?: ICheckUnderOptions): ICheckUnderOptions;
    equip(item: Item, slot: EquipType): void;
    unequip(item: Item): void;
    unequipAll(): void;
    canJump(): boolean;
    hasDelay(): boolean;
    addDelay(delay: number, replace?: boolean): void;
    getConsumeBonus(item: Item | undefined, skillUse?: SkillType): number;
    checkForGatherFire(): Translation | undefined;
    calculateEquipmentStats(): void;
    discoverRecipe(recipeType: ItemType, crafted?: ICrafted): void;
    getDamage(causesDamage: ICausesDamage, equipType?: EquipType): number;
    causeStatus(thing: Doodad | ITileEvent, equipForProtection?: EquipType): void;
    protected getBaseStatBonuses(): OptionalDescriptions<Stat, number>;
    protected getSkillGainMultiplier(skillType: SkillType): number;
    /**
     * Improve one of the core player stats
     */
    protected statGain(stat: Stat, bypass: boolean): void;
    protected calculateStats(): void;
    protected resetDefense(): void;
    protected updateSwimming(): void;
    protected swimCheck(): void;
}
