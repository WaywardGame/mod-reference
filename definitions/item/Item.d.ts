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
import { IDoodad } from "doodad/IDoodad";
import { CreatureType, ICreature } from "entity/creature/ICreature";
import { EntityType } from "entity/IEntity";
import IHuman, { EquipType } from "entity/IHuman";
import Player from "entity/player/Player";
import { Quality } from "game/IObject";
import { BookType, IContainable, IContainer, IItem, IItemDescription, IItemLegendary, IItemUsed, ItemType, TatteredMap } from "item/IItem";
import Translation, { ISerializedTranslation } from "language/Translation";
import { IUnserializedCallback } from "save/ISerializer";
import { IVector3 } from "utilities/math/IVector";
export default class Item implements IItem, IContainer, IContainable, IUnserializedCallback {
    book: BookType;
    containedItems: IItem[];
    containedWithin: IContainer;
    decay: number;
    disassembly: IItem[];
    equippedId?: number;
    equippedType?: EntityType;
    id: number;
    itemOrders?: number[];
    legendary: IItemLegendary;
    maxDur: number;
    minDur: number;
    order: number;
    ownerIdentifier?: string;
    used?: IItemUsed;
    quality: Quality;
    quickSlot: number | undefined;
    renamed: string | ISerializedTranslation;
    tatteredMap: TatteredMap;
    type: ItemType;
    weight: number;
    weightFraction: number;
    weightCapacity: number;
    readonly fromDescription: import("../utilities/FromDescription").ISafeFn<IItemDescription, undefined>;
    private _description;
    constructor(itemType?: ItemType | undefined, quality?: Quality);
    toString(): string;
    /**
     * @deprecated This method currently shouldn't be used in production code, as it's to do with the new crafting system. Stay tuned.
     */
    getWeight(): number;
    getName(article?: boolean, count?: number, showCount?: boolean, showQuality?: boolean): Translation;
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
    setQuickSlot(player: Player, quickSlot: number | undefined): void;
    clearQuickSlot(): void;
    isDecayed(): boolean;
    changeInto(type: ItemType, disableNotify?: boolean): void;
    returns(): boolean;
    setUsed(itemUse?: IItemUsed, human?: IHuman): void;
    spawnOnBreak(): ICreature | undefined;
    spawnOnDecay(): ICreature | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined, forceAberrant?: boolean, bypass?: boolean, preferFacingDirection?: Player): ICreature | undefined;
    getLocation(): IVector3 | undefined;
    dropInWater(human: Human, x?: number, y?: number, skipParticles?: boolean): void;
    placeOnTile(x: number, y: number, z: number, force: boolean, skipMessage?: boolean): boolean;
    initializeMap(): void;
    setQuality(quality?: Quality): void;
    setLegendary(bypassType?: boolean): void;
    acquireNotify(player: Player): void;
    getStokeFireValue(): number | undefined;
    getOnUseBonus(): number;
    getWorth(legendaryWorth?: boolean): number | undefined;
    canBurnPlayer(): boolean;
    getBaseDefense(): number;
    getDurabilityCharge(): number;
    revertFromDoodad(doodad: IDoodad): void;
    getContainerWeightReduction(): number;
    canBeRefined(): boolean;
    onUnserialized(): void;
    private checkIfItemsMatch;
    private checkIfItemArraysMatch;
    private getOwner;
}
