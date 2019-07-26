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
import Human from "entity/Human";
import NPC from "entity/npc/NPC";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import { InspectionResult } from "game/inspection/IInspection";
import Inspection from "game/inspection/Inspect";
import { Quality } from "game/IObject";
import { ContainerReference, IContainable, IContainer, IItemDescription, IItemWeightComponent, ItemType, ItemTypeGroup } from "item/IItem";
import { CraftStatus, IProtectedItemOptions, RequirementInfo, WeightType } from "item/IItemManager";
import Item from "item/Item";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import Stream from "utilities/stream/Stream";
interface ItemManagerEvents {
    containerItemRemove(item: Item, previousContainer: IContainer): any;
    containerItemUpdate(item: Item, previousContainer: IContainer | undefined, newContainer: IContainer): any;
    containerItemAdd(item: Item, newContainer: IContainer): any;
}
export default class ItemManager extends EventEmitter.Host<ItemManagerEvents> {
    private readonly worldContainer;
    private cachedWeights;
    private cachedDecaysIntoWeights;
    private cachedDefaultItemForGroup;
    private cachedItemGroups;
    private cachedItemTypes;
    private cachedItemTypesWithRecipes;
    constructor();
    getItemTypes(): readonly ItemType[];
    getItemsWithRecipes(): readonly ItemType[];
    getContainerReference(container: IContainer | undefined, parentObject?: any, showWarnings?: boolean): ContainerReference;
    derefenceContainerReference(containerRef: ContainerReference): object | undefined;
    addToContainerInternal(item: Item, container: IContainer, movingMultiple?: boolean, skipMessage?: boolean): boolean;
    removeContainerItems(container: IContainer): void;
    exists(item: Item): boolean;
    remove(item: Item): void;
    getDisassemblyComponents(description: IItemDescription, quality: Quality | undefined): Item[];
    getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup>;
    /**
     * Returns the "processed" weight of the given item.
     * - If the item is a "raw" item — ie, it was not created from other items, this is the `weightFraction` lerping the item's min & max weight.
     * - If the item is a "constructed" item — ie, it was created from other items, this is the processed weights of all component items added together.
     *
     * Processed item weights can also be "tweaked", such as weight additions or reductions.
     *
     * @deprecated This method currently shouldn't be used in production code, as it's to do with the new crafting system. Stay tuned.
     */
    getWeight(item: Item | IItemWeightComponent): number;
    /**
     * Uses the old system to get the weight of an item type.
     */
    getWeight(itemType: ItemType, weightType?: WeightType): number;
    weightTree(itemType: ItemType, weightType?: WeightType, debug?: boolean, depth?: number): number;
    create(itemType: ItemType | ItemTypeGroup, container: IContainer, quality?: Quality): Item;
    createFake(itemType: ItemType | ItemTypeGroup, quality?: Quality): Item;
    isContainer(obj: unknown): obj is IContainer;
    moveAllFromContainerToInventory(human: Human, container: IContainer, ofQuality?: Quality): Item[];
    computeContainerWeight(container: IContainer): number;
    getLegendaryWeightCapacity(container: IContainer): number;
    moveAllFromContainerToContainer(human: Human | undefined, fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType | undefined, ofQuality?: Quality | undefined, checkWeight?: boolean, onMoveItem?: (item: Item) => void): Item[];
    moveToContainer(human: Human | undefined, item: Item, container: IContainer): boolean;
    hasRoomInContainer(extraWeight: number, container: IContainer, itemToMove?: Item): boolean;
    breakContainerOnTile(itemContainer: Item, x: number, y: number, z: number): void;
    /**
     * Drop items in a 3x3 square around the location
     */
    placeItemsAroundLocation(container: IContainer, x: number, y: number, z: number, skipMessage?: boolean): void;
    spawn(itemTypes: ItemType[] | undefined, x: number, y: number, z: number): void;
    resetMapsInContainer(container: IContainer): void;
    getTileContainer(x: number, y: number, z: number): IContainer;
    getRandomQuality(bonusQuality?: number): Quality;
    hasAdditionalRequirements(human: Human, craftType: ItemType, message?: Message, faceDoodad?: boolean, isRepairOrDisassembly?: boolean): RequirementInfo;
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: boolean, count?: number): Translation;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup | ItemType): boolean;
    craft(human: Human, itemType: ItemType, itemsToRequire: Item[], itemsToConsume: Item[], baseItem?: Item): CraftStatus;
    decayItems(): boolean;
    getPlayerWithItemInInventory(containable: IContainable): Player | undefined;
    getAbsentPlayerWithItemInInventory(containable: IContainable): Player | undefined;
    getNPCWithItemInInventory(containable: IContainable): NPC | undefined;
    countItemsInContainer(containers: IContainer | IContainer[], itemTypeSearch: ItemType, ignoreItem?: Item): number;
    countItemsInContainerByGroup(containers: IContainer | IContainer[], itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: Item): number;
    getItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: Item, excludeProtectedItems?: IProtectedItemOptions | undefined): Item | undefined;
    getItemForHuman(human: Human, search: ItemType | ItemTypeGroup): Item | undefined;
    getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, excludeProtectedItems?: IProtectedItemOptions | undefined): Item | undefined;
    getItemsInContainer(container: IContainer, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions | undefined): Item[];
    getItemsInContainerByType(container: IContainer, itemType: ItemType, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions | undefined): Item[];
    getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions | undefined): Item[];
    getItemInInventoryByGroup(human: Human, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number): Item | undefined;
    isItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: Item): boolean;
    isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    getAdjacentContainers(human: Human, includeNpcs?: boolean, ignoreOptions?: boolean): IContainer[];
    isContainableInAdjacentContainer(player: Player, containable: IContainable, includeNpcs?: boolean, ignoreOptions?: boolean): boolean;
    isInInventory(containable: IContainable): boolean;
    isTileContainer(container: IContainer | undefined): boolean;
    getOrderedContainerItems(container: IContainer, protectedItemOptions?: IProtectedItemOptions | undefined): Item[];
    reduceDismantleWeight(createdItems: Item[], itemWeight: number, mod?: number): void;
    getItemTranslations(items: Item[], article?: boolean): Stream<Translation>;
    getItemListTranslation(items: Item[], article?: boolean): Translation;
    loadReferences(isTraveling: boolean): void;
    saveTileReferences(): void;
    loadTileReferences(): void;
    isGroup(item: ItemType | ItemTypeGroup): item is ItemTypeGroup;
    getGroupItems(itemGroup: ItemType | ItemTypeGroup, ancestorGroups?: ItemTypeGroup[]): Set<ItemType>;
    getGroupDefault(itemGroup: ItemTypeGroup, weightType?: WeightType, ancestorGroups?: ItemTypeGroup[]): ItemType;
    getGroups(itemType: ItemType): Stream<ItemTypeGroup>;
    checkMilestones(player: Player, item: Item): void;
    getDefaultDurability(weight: number, itemType: ItemType): number;
    generateLookups(): void;
    updateItemOrder(container: IContainer, itemOrder: number[] | undefined): void;
    getQualityBasedOnSkill(itemQuality: Quality | undefined, skillValue: number, allowIncreasedQuality?: boolean, bonusChance?: number): Quality | undefined;
    getNPCFromInventoryContainer(container: IContainer): NPC | undefined;
    getItemsByWeight(a: number, b: number): number;
    getItemsWeight(items: Item[]): number;
    inspect({ context }: Inspection, ...items: Item[]): InspectionResult;
    copyProperties(item: Item, item2: Item): void;
    private getDefaultWeightRange;
    private updateItemOrderInternal;
    private loadReference;
    private removeFromContainerInternal;
    private updateUiOnItemRemove;
    private getCraftQualityBonus;
    private computeCraftQualityBonus;
    private isCraftSuccessful;
    private getPlayerFromInventoryContainer;
    private getAbsentPlayerFromInventoryContainer;
}
export {};
