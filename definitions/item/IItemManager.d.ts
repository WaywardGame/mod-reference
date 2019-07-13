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
import { DoodadType, DoodadTypeGroup, IDoodad } from "doodad/IDoodad";
import { INPC } from "entity/npc/INPC";
import { IPlayer } from "entity/player/IPlayer";
import { InspectionResult } from "game/inspection/IInspection";
import Inspection from "game/inspection/Inspect";
import { Quality } from "game/IObject";
import { ContainerReference, IContainable, IContainer, IItem, IItemDescription, ItemType, ItemTypeGroup } from "item/IItem";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IVector2, IVector3 } from "utilities/math/IVector";
import Stream from "utilities/stream/Stream";
export interface IItemManager {
    getItemTypes(): ReadonlyArray<ItemType>;
    getItemsWithRecipes(): ReadonlyArray<ItemType>;
    addToContainerInternal(item: IItem, container: IContainer, movingMultiple: boolean, skipMessage?: boolean): boolean;
    breakContainerOnTile(itemContainer: IItem, x: number, y: number, z: number): void;
    checkMilestones(player: IPlayer, item: IItem): void;
    computeContainerWeight(container: IContainer): number;
    countItemsInContainer(container: IContainer | IContainer[], itemTypeSearch: ItemType, ignoreItem?: IItem): number;
    countItemsInContainerByGroup(container: IContainer | IContainer[], itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: IItem): number;
    craft(human: Human, itemType: ItemType, itemsToRequire: IItem[], itemsToConsume: IItem[], baseItem?: IItem): CraftStatus;
    create(itemType: ItemType, container: IContainer, quality?: Quality, fake?: boolean): IItem;
    createFake(itemType: ItemType, quality?: Quality): IItem;
    decayItems(): boolean;
    derefenceContainerReference(containerRef: ContainerReference): object | undefined;
    generateLookups(): void;
    getAdjacentContainers(human: Human, includeNpcs?: boolean, ignoreOptions?: boolean): IContainer[];
    getContainerReference(container: IContainer, parentObject?: any, showWarnings?: boolean): ContainerReference;
    getDefaultDurability(weight: number, itemType: ItemType): number;
    getDisassemblyComponents(description: IItemDescription, quality: Quality | undefined): IItem[];
    getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup>;
    getGroupDefault(itemGroup: ItemTypeGroup, weightType?: WeightType): ItemType;
    getGroupItems(itemGroup: ItemTypeGroup | ItemType): Set<ItemType>;
    getItemForHuman(human: Human, search: ItemType | ItemTypeGroup): IItem | undefined;
    getItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): IItem | undefined;
    getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, excludeProtectedItems?: IProtectedItemOptions): IItem | undefined;
    getItemInInventoryByGroup(human: Human, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, excludeProtectedItems?: IProtectedItemOptions): IItem | undefined;
    getItemListTranslation(items: IItem[], article?: boolean): Translation;
    getItemsByWeight(a: number, b: number): number;
    getItemsWeight(items: IItem[]): number;
    getItemsInContainer(container: IContainer, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions): IItem[];
    getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions): IItem[];
    getItemsInContainerByType(container: IContainer, itemType: ItemType, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions): IItem[];
    getItemTranslations(items: IItem[], article?: boolean): Stream<Translation>;
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: boolean, count?: number): Translation;
    getLegendaryWeightCapacity(container: IContainer): number;
    getNPCFromInventoryContainer(container: IContainer): INPC | undefined;
    getNPCWithItemInInventory(containable: IContainable): INPC | undefined;
    getOrderedContainerItems(container: IContainer, excludeProtectedItems?: IProtectedItemOptions): IItem[];
    getPlayerWithItemInInventory(containable: IContainable): IPlayer | undefined;
    getAbsentPlayerWithItemInInventory(containable: IContainable): IPlayer | undefined;
    getQualityBasedOnSkill(itemQuality: Quality | undefined, skillValue: number, qualityBypass?: boolean, bonusChance?: number): Quality | undefined;
    getRandomQuality(bonusQuality?: number): Quality;
    getTileContainer(x: number, y: number, z: number): IContainer;
    /**
     * Returns the "processed" weight of the given item.
     * - If the item is a "raw" item — ie, it was not created from other items, this is the `weightFraction` lerping the item's min & max weight.
     * - If the item is a "constructed" item — ie, it was created from other items, this is the processed weights of all component items added together.
     *
     * Processed item weights can also be "tweaked", such as weight additions or reductions.
     *
     * @deprecated This method currently shouldn't be used in production code, as it's to do with the new crafting system. Stay tuned.
     */
    getWeight(item: IItem): number;
    /**
     * Uses the old system to get the weight of an item type.
     */
    getWeight(itemType: ItemType, weightType?: WeightType): number;
    hasAdditionalRequirements(human: Human, craftType: ItemType, message?: Message, faceDoodad?: boolean, isRepairOrDisassembly?: boolean): RequirementInfo;
    hasRoomInContainer(extraWeight: number, container: IContainer, itemToMove?: IItem): boolean;
    isContainableInAdjacentContainer(player: IPlayer, containable: IContainable, includeNpcs?: boolean, ignoreOptions?: boolean): boolean;
    isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    isContainer(obj: unknown): obj is IContainer;
    isGroup(itemType: (ItemType | ItemTypeGroup)): itemType is ItemTypeGroup;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup | ItemType): boolean;
    getGroups(itemType: ItemType): Stream<ItemTypeGroup>;
    isInInventory(containable: IContainable): boolean;
    isItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): boolean;
    isTileContainer(container: IContainer | undefined): boolean;
    loadReferences(isTraveling: boolean): void;
    loadTileReferences(): void;
    moveAllFromContainerToContainer(human: Human | undefined, fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType, ofQuality?: Quality, checkWeight?: boolean, onMoveItem?: (item: IItem) => void): IItem[];
    moveAllFromContainerToInventory(human: Human, container: IContainer, ofQuality?: Quality): IItem[];
    moveToContainer(human: Human | undefined, item: IItem, container: IContainer): boolean;
    placeItemsAroundLocation(container: IContainer, x: number, y: number, z: number, skipMessage?: boolean): void;
    reduceDismantleWeight(createdItems: IItem[], itemWeight: number, mod?: number): void;
    remove(item: IItem): void;
    removeContainerItems(container: IContainer): void;
    resetMapsInContainer(container: IContainer): void;
    saveTileReferences(): void;
    spawn(itemTypes: ItemType[] | undefined, x: number, y: number, z: number): void;
    updateItemOrder(container: IContainer, itemOrder: number[] | undefined): void;
    inspect(inspection: Inspection, ...items: IItem[]): InspectionResult;
    copyProperties(item: IItem, item2: IItem): void;
    exists(item: IItem): boolean;
}
export default IItemManager;
export declare enum CraftStatus {
    Invalid = 0,
    Failed = 1,
    Success = 2
}
export declare enum WeightType {
    Normal = 0,
    Static = 1,
    Min = 2,
    Max = 3
}
export interface RequirementInfo extends IVector2, IVector3 {
    requirementsMet: boolean;
    isLava?: boolean;
    doodadRequirementMet: boolean;
    fireRequirementMet: boolean;
    requiredDoodad: IDoodad | undefined;
    doodadsUsed: IDoodadsUsed[];
}
export interface IDoodadsUsed {
    doodad: IDoodad;
    group: DoodadType | DoodadTypeGroup;
}
export interface IProtectedItemOptions {
    protect: boolean;
    protectContainers: boolean;
}
