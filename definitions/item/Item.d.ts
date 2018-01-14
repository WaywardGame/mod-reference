import { ICreature } from "creature/ICreature";
import { BookType, CreatureType, EquipType, IPointZ, ItemQuality, ItemType, TatteredMap } from "Enums";
import { IContainable, IContainer, IItem, IItemArray, IItemDescription, IItemLegendary } from "item/IItem";
import IPlayer from "player/IPlayer";
import { IUnserializedCallback } from "save/ISerializer";
export default class Item implements IItem, IContainer, IContainable, IUnserializedCallback {
    book: BookType;
    containedItems: IItemArray;
    containedWithin: IContainer;
    decay: number;
    disassembly: IItemArray;
    equippedPid: EquipType;
    id: number;
    itemOrders?: number[];
    legendary: IItemLegendary;
    maxDur: number;
    minDur: number;
    order: number;
    ownerIdentifier?: string;
    quality: ItemQuality;
    quickSlot: number | undefined;
    renamed: string;
    tatteredMap: TatteredMap;
    type: ItemType;
    weight: number;
    weightCapacity: number;
    private _description;
    constructor(itemType?: ItemType | undefined, quality?: ItemQuality);
    description(): IItemDescription | undefined;
    isValid(): boolean;
    shouldBeProtected(): boolean;
    getDecayMax(): number;
    getTotalWeight(): number;
    getDisassemblyWeight(): number;
    verifyAndFixItem(): void;
    damage(source: string, modifier?: number): void;
    isDamaged(): boolean;
    isEquipped(): boolean;
    getEquipSlot(): EquipType | undefined;
    setQuickSlot(player: IPlayer, quickSlot: number | undefined): void;
    isDecayed(): boolean;
    changeInto(type: ItemType, disableNotify?: boolean): void;
    returns(): boolean;
    spawnOnBreak(): ICreature | undefined;
    spawnOnDecay(): ICreature | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined, forceAberrant?: boolean): ICreature | undefined;
    getLocation(): IPointZ | undefined;
    dropInLava(player: IPlayer, x?: number, y?: number): void;
    dropInWater(player: IPlayer, x?: number, y?: number): void;
    placeOnTile(x: number, y: number, z: number, force: boolean, skipMessage?: boolean): boolean;
    initializeMap(): void;
    setQuality(quality?: ItemQuality): void;
    acquireNotify(player: IPlayer): void;
    getStokeFireValue(): number | undefined;
    getOnUseBonus(): number;
    onUnserialized(): void;
    private checkIfItemsMatch(item1, item2);
    private checkIfItemArraysMatch(arr1, arr2);
    private getOwner();
}
