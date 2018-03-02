import { IDamageInfo } from "creature/ICreature";
import { IBaseEntity } from "entity/IBaseEntity";
import { EquipType, ItemQuality, ItemType, RestCancelReason } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { IPlayerCustomization, IPlayerStatus, IRestData } from "player/IPlayer";
import PlayerDefense from "player/PlayerDefense";
export default interface IBaseHumanEntity extends IBaseEntity {
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
    getStat(stat: Stat): IStat;
    reduceStat(stat: Stat | IStat, amount: number): void;
    increaseStat(stat: Stat | IStat, amount: number): void;
    setStat(stat: Stat | IStat, amount: number): void;
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
    on(event: HumanEntityEvent.StatChanged, handler: (_: this, stat: IStat, oldValue: number) => any): void;
}
export declare enum HumanEntityEvent {
    StatChanged = 0,
}
export declare enum Stat {
    Health = 0,
    Stamina = 1,
    Hunger = 2,
    Thirst = 3,
}
export declare const STAT_COLOR: {
    readonly Health: string;
    readonly Stamina: string;
    readonly Hunger: string;
    readonly Thirst: string;
};
export declare type IStats = {
    [key in keyof typeof Stat]: IStat;
};
export declare function createStatInstance(type: Stat, regen: number, regenBase?: number): IStat;
export interface IStat {
    type: Stat;
    value: number;
    timer: number;
    regen: number;
    regenBase: number;
}
