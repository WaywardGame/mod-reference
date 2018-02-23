import { IDamageInfo } from "creature/ICreature";
import BaseEntity from "entity/BaseEntity";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { EquipType, ItemQuality, ItemType, RestCancelReason } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { IPlayerCustomization, IPlayerStatus, IRestData, IStats } from "player/IPlayer";
import PlayerDefense from "player/PlayerDefense";
export default abstract class BaseHumanEntity extends BaseEntity implements IBaseHumanEntity {
    customization: IPlayerCustomization;
    defense: PlayerDefense;
    dehydration: number;
    dexterity: number;
    equipped: {
        [index: number]: number;
    };
    inventory: IContainer;
    raft: number | undefined;
    restData: IRestData | undefined;
    starvation: number;
    stats: IStats;
    status: IPlayerStatus;
    strength: number;
    swimming: boolean;
    isResting(): boolean;
    isRestingCancelled(): boolean;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): void;
    createItemInInventory(itemType: ItemType, quality?: ItemQuality): IItem;
    damageRandomEquipment(): void;
    damage(damageInfoOrAmount: IDamageInfo | number, damageMessage?: string, soundDelay?: number): number | undefined;
    getEquippedItems(): IItem[];
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    getMaxHealth(): number;
}
