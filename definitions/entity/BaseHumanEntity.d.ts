import { IDamageInfo } from "creature/ICreature";
import BaseEntity from "entity/BaseEntity";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { EntityType } from "entity/IEntity";
import { EquipType, ItemQuality, ItemType, PlayerState, RestCancelReason, SkillType, StatType } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { Message, MessageType } from "language/IMessages";
import { MilestoneType } from "player/IMilestone";
import { IAttackHand, IMobCheck, IPlayerCustomization, IRestData } from "player/IPlayer";
import PlayerDefense from "player/PlayerDefense";
import { ISkillSet } from "player/Skills";
import { IOptions } from "save/data/ISaveDataGlobal";
export declare const REPUTATION_MAX = 64000;
export default abstract class BaseHumanEntity extends BaseEntity implements IBaseHumanEntity {
    static sendMessage(human: IBaseHumanEntity | undefined, message: Message | string, type?: MessageType, ...args: any[]): boolean;
    entityType: EntityType;
    attackFromEquip: IAttackHand;
    customization: IPlayerCustomization;
    deathBy: string;
    defense: PlayerDefense;
    defenses: number[];
    equipped: {
        [index: number]: number;
    };
    handToUse: EquipType;
    inventory: IContainer;
    lightBonus: number;
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
    constructor();
    resetStatTimers(): void;
    getName(): string;
    sendMessage(message: Message | string, type?: MessageType, ...args: any[]): boolean;
    isResting(): boolean;
    isGhost(): boolean;
    isRestingCancelled(): boolean;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): void;
    createItemInInventory(itemType: ItemType, quality?: ItemQuality): IItem;
    getHandToUse(): EquipType | undefined;
    damageRandomEquipment(): void;
    getDamageModifier(): number;
    damage(damageInfoOrAmount: IDamageInfo | number, damageMessage?: string, soundDelay?: number): number | undefined;
    getEquippedItems(): IItem[];
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    getMaxHealth(): number;
    addMilestone(milestone: MilestoneType, data?: number): void;
    update(): void;
    updateStatsAndAttributes(): void;
    staminaReduction(skillType: SkillType): void;
    updateReputation(reputation: number): void;
    setRaft(itemId: number | undefined): boolean;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    /**
     * Burn the player
     */
    burn(skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType): number | undefined;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    equip(item: IItem, slot: EquipType): void;
    unequip(item: IItem): void;
    /**
     * Improve one of the core player stats
     */
    protected statGain(stat: StatType, bypass: boolean): void;
    protected calculateStats(): void;
    protected resetDefense(): void;
    protected calculateEquipmentStats(): void;
    protected swimCheck(): void;
}
