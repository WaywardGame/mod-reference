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
import Entity from "entity/Entity";
import IHuman, { EquipType, ICustomizations, IRestData, RestCancelReason, SkillType } from "entity/IHuman";
import { Stat } from "entity/IStats";
import { MilestoneType } from "entity/player/IMilestone";
import { IAttackHand, IMobCheck, PlayerState } from "entity/player/IPlayer";
import MessageManager from "entity/player/MessageManager";
import NoteManager from "entity/player/note/NoteManager";
import PlayerDefense from "entity/player/PlayerDefense";
import { ISkillSet } from "entity/player/Skills";
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import { FireType } from "game/IGame";
import { Quality } from "game/IObject";
import { IContainer, IItem, ItemType } from "item/IItem";
import { IProtectedItemOptions } from "item/IItemManager";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IOptions } from "save/data/ISaveDataGlobal";
import { IVector3 } from "utilities/math/IVector";
export declare const REPUTATION_MAX = 64000;
export default abstract class Human extends Entity implements IHuman {
    event: IEventEmitter<this, Events<IHuman>>;
    attackFromEquip: IAttackHand;
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
    getSkillCore(skill: SkillType): number;
    setSkillCore(skill: SkillType, value: number): void;
    getSkill(skill: SkillType): number;
    skillCheck(skill: SkillType, check: number): boolean;
    isResting(): boolean;
    isGhost(): boolean;
    isRestingCancelled(): boolean;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): boolean;
    createItemInInventory(itemType: ItemType, quality?: Quality): IItem;
    hasHandToUse(): boolean;
    getAndSwitchHandToUse(): EquipType | undefined;
    damageRandomEquipment(): void;
    getDamageModifier(): number;
    damage(damageInfoOrAmount: IDamageInfo | number, damageMessage?: Message | Translation, soundDelay?: number, causesBlood?: boolean): number | undefined;
    getEquippedItems(): IItem[];
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    getMaxHealth(): number;
    addMilestone(milestone: MilestoneType, data?: number): void;
    update(): void;
    updateStatsAndAttributes(): void;
    staminaReduction(skill: SkillType): void;
    updateReputation(reputation: number): void;
    setRaft(itemId: number | undefined): boolean;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    checkAndRemoveBlood(): boolean;
    getBurnDamage(fireType: FireType, skipParry?: boolean, equipType?: EquipType): number;
    /**
     * Burn the player
     */
    burn(fireType: FireType, skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType, fromCombat?: boolean): number | undefined;
    setPosition(point: IVector3): void;
    setZ(z: number): void;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    equip(item: IItem, slot: EquipType): void;
    unequip(item: IItem): void;
    unequipAll(): void;
    canJump(): boolean;
    hasDelay(): boolean;
    addDelay(delay: number, replace?: boolean): void;
    getConsumeBonus(item: IItem | undefined, skillUse?: SkillType): number;
    checkForGatherFire(): Translation | undefined;
    calculateEquipmentStats(): void;
    /**
     * Improve one of the core player stats
     */
    protected statGain(stat: Stat, bypass: boolean): void;
    protected calculateStats(): void;
    protected resetDefense(): void;
    protected updateSwimming(): void;
    protected swimCheck(): void;
}
