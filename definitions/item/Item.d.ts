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
import { ICreature } from "creature/ICreature";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { EntityType } from "entity/IEntity";
import { BookType, CreatureType, EquipType, ItemQuality, ItemType, TatteredMap } from "Enums";
import { IContainable, IContainer, IItem, IItemArray, IItemDescription, IItemLegendary } from "item/IItem";
import IPlayer from "player/IPlayer";
import { IUnserializedCallback } from "save/ISerializer";
import { IVector3 } from "utilities/math/IVector";
export default class Item implements IItem, IContainer, IContainable, IUnserializedCallback {
    book: BookType;
    containedItems: IItemArray;
    containedWithin: IContainer;
    decay: number;
    disassembly: IItemArray;
    equippedId?: number;
    equippedType?: EntityType;
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
    isInTradeContainer(): boolean;
    isEquipped(): boolean;
    getEquipSlot(): EquipType | undefined;
    setQuickSlot(player: IPlayer, quickSlot: number | undefined): void;
    clearQuickSlot(): void;
    isDecayed(): boolean;
    changeInto(type: ItemType, disableNotify?: boolean): void;
    returns(): boolean;
    spawnOnBreak(): ICreature | undefined;
    spawnOnDecay(): ICreature | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined, forceAberrant?: boolean): ICreature | undefined;
    getLocation(): IVector3 | undefined;
    dropInLava(player: IPlayer, x?: number, y?: number): void;
    dropInWater(human: IBaseHumanEntity, x?: number, y?: number): void;
    placeOnTile(x: number, y: number, z: number, force: boolean, skipMessage?: boolean): boolean;
    initializeMap(): void;
    setQuality(quality?: ItemQuality): void;
    setLegendary(): void;
    acquireNotify(player: IPlayer): void;
    getStokeFireValue(): number | undefined;
    getOnUseBonus(): number;
    getWorth(legendaryWorth?: boolean): number | undefined;
    canBurnPlayer(): boolean;
    onUnserialized(): void;
    private checkIfItemsMatch;
    private checkIfItemArraysMatch;
    private getOwner;
}
