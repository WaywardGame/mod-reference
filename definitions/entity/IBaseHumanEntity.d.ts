import { IDamageInfo } from "creature/ICreature";
import IBaseEntity from "entity/IBaseEntity";
import { EquipType, ItemQuality, ItemType, RestCancelReason } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { IPlayerCustomization, IRestData } from "player/IPlayer";
import PlayerDefense from "player/PlayerDefense";
export default interface IBaseHumanEntity extends IBaseEntity {
    customization: IPlayerCustomization;
    defense: PlayerDefense;
    equipped: {
        [index: number]: number;
    };
    inventory: IContainer;
    raft: number | undefined;
    restData: IRestData | undefined;
    swimming: boolean;
    damage(amount: number, damageMessage: string, soundDelay?: number): number | undefined;
    damage(damageInfo: IDamageInfo): number | undefined;
    canSeeTile(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    getMaxHealth(): number;
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquippedItems(): IItem[];
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    createItemInInventory(itemType: ItemType, quality?: ItemQuality): IItem;
    damageRandomEquipment(): void;
    isResting(): boolean;
    isRestingCancelled(): boolean;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): void;
}
