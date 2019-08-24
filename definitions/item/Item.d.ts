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
import Creature from "entity/creature/Creature";
import { CreatureType } from "entity/creature/ICreature";
import Human from "entity/Human";
import { EntityType } from "entity/IEntity";
import { EquipType } from "entity/IHuman";
import NPC from "entity/npc/NPC";
import Player from "entity/player/Player";
import { IObject, IObjectOptions, Quality } from "game/IObject";
import { BookType, IConstructedInfo, IContainable, IContainer, IItemDescription, IItemLegendary, IItemUsed, ItemType, LegendaryType, TatteredMap } from "item/IItem";
import Translation, { ISerializedTranslation } from "language/Translation";
import { IUnserializedCallback } from "save/ISerializer";
import { IVector3 } from "utilities/math/IVector";
export default class Item implements IContainer, IContainable, IUnserializedCallback, IObject<ItemType>, IObjectOptions, IContainable, Partial<IContainer> {
    book?: BookType;
    constructedFrom?: IConstructedInfo;
    containedItems: Item[];
    containedWithin: IContainer;
    decay?: number;
    disassembly: Item[];
    equippedId?: number;
    equippedType?: EntityType;
    id: number;
    itemOrders?: number[];
    legendary: IItemLegendary;
    maxDur: number;
    minDur: number;
    order: number;
    ownerIdentifier?: string;
    quality: Quality;
    quickSlot: number | undefined;
    renamed: string | ISerializedTranslation;
    tatteredMap: TatteredMap;
    type: ItemType;
    used?: IItemUsed;
    weight: number;
    weightCapacity: number;
    weightFraction: number;
    readonly fromDescription: import("../utilities/FromDescription").ISafeFn<IItemDescription, undefined>;
    private _description;
    constructor(itemType?: ItemType | undefined, quality?: Quality);
    toString(): string;
    /**
     * @deprecated This method currently shouldn't be used in production code, as it's to do with the new crafting system. Stay tuned.
     */
    getWeight(): number;
    /**
     * @param article Whether to include an article for the name of the item. Uses the article rules on the language. Defaults to `true`.
     * @param count The number of this item that you're getting the name of. Defaults to `1`.
     * @param showCount If `true`, adds the passed count to the translation, using `MiscTranslation.CountThing`.
     *
     * Examples:
     * - `item.getName()` // "a stone axe"
     * - `item.getName(false)` // "stone axe"
     * - `item.getName(undefined, 3)` // "stone axes"
     */
    getName(article?: boolean, count?: number, showCount?: boolean, showQuality?: boolean): Translation;
    description(): IItemDescription | undefined;
    isValid(): boolean;
    isProtected(human: Human): boolean;
    areItemsProtectedWithin(human: Human): boolean;
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
    setUsed(itemUse?: IItemUsed, human?: Human): void;
    spawnOnBreak(): Creature | undefined;
    spawnOnDecay(): Creature | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined, forceAberrant?: boolean, bypass?: boolean, preferFacingDirection?: Player): Creature | undefined;
    getLocation(): IVector3 | undefined;
    dropInWater(human: Human, x?: number, y?: number, skipParticles?: boolean): void;
    placeOnTile(x: number, y: number, z: number, force: boolean, skipMessage?: boolean): boolean;
    initializeMap(): void;
    setQuality(quality?: Quality): void;
    getAcceptableLegendaryTypes(): LegendaryType[];
    setLegendary(bypassType?: boolean): void;
    acquireNotify(player: Player): void;
    getStokeFireValue(): number | undefined;
    getOnUseBonus(): number;
    getWorth(legendaryWorth?: boolean): number;
    getTraderSellPrice(player: Player | NPC, legendaryWorth?: boolean): number;
    canBurnPlayer(): boolean;
    getBaseDefense(): number;
    getDurabilityCharge(): number;
    revertFromDoodad(doodad: Doodad): void;
    getContainerWeightReduction(): number;
    canBeRefined(): boolean;
    onUnserialized(): void;
    private checkIfItemsMatch;
    private checkIfItemArraysMatch;
    private getOwner;
}
