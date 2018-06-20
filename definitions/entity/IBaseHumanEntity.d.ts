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
import { EquipType, ItemQuality, ItemType, PlayerState, RestCancelReason, SkillType } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { MilestoneType } from "player/IMilestone";
import { IAttackHand, IMobCheck, IPlayerCustomization, IRestData } from "player/IPlayer";
import PlayerDefense from "player/PlayerDefense";
import { ISkillSet } from "player/Skills";
import { IOptions } from "save/data/ISaveDataGlobal";
export default interface IBaseHumanEntity extends IBaseEntity {
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
    options: IOptions;
    raft: number | undefined;
    restData: IRestData | undefined;
    score: number;
    skills: ISkillSet;
    state: PlayerState;
    swimming: boolean;
    canSendMessage: boolean;
    addMilestone(milestone: MilestoneType, data?: number): void;
    burn(skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType, fromCombat?: boolean): number | undefined;
    cancelResting(reason: RestCancelReason): void;
    canSeePosition(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    createItemInInventory(itemType: ItemType, quality?: ItemQuality): IItem;
    damage(amount: number, damageMessage: string, soundDelay?: number): number | undefined;
    damage(damageInfo: IDamageInfo): number | undefined;
    damageRandomEquipment(): void;
    equip(item: IItem, slot: EquipType): void;
    getDamageModifier(): number;
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquippedItems(): IItem[];
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    getHandToUse(): EquipType | undefined;
    getMaxHealth(): number;
    getName(): string;
    hasHandToUse(): boolean;
    isGhost(): boolean;
    isResting(): boolean;
    isRestingCancelled(): boolean;
    setRaft(itemId: number | undefined): boolean;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    staminaReduction(skillType: SkillType): void;
    startResting(restData: IRestData): void;
    unequip(item: IItem): void;
    update(): void;
    updateReputation(reputation: number): void;
    updateStatsAndAttributes(): void;
}
