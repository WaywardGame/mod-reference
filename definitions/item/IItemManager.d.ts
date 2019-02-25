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
import { CraftStatus, ItemQuality, ItemType, ItemTypeGroup, RequirementInfo, WeightType } from "Enums";
import { InspectionResult } from "game/inspection/IInspection";
import Inspection from "game/inspection/Inspect";
import { ContainerReference, IContainable, IContainer, IItem, IItemArray, IItemDescription } from "item/IItem";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { INPC } from "npc/INPC";
import { IPlayer } from "player/IPlayer";
export interface IItemManager {
    getItemTypes(): ReadonlyArray<ItemType>;
    getItemsWithRecipes(): ReadonlyArray<ItemType>;
    addToContainerInternal(item: IItem, container: IContainer, movingMultiple: boolean, skipMessage?: boolean): boolean;
    breakContainerOnTile(itemContainer: IItem, x: number, y: number, z: number): void;
    checkMilestones(player: IPlayer, item: IItem): void;
    computeContainerWeight(container: IContainer): number;
    countItemsInContainer(container: IContainer | IContainer[], itemTypeSearch: ItemType, ignoreItem?: IItem): number;
    countItemsInContainerByGroup(container: IContainer | IContainer[], itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: IItem): number;
    craft(human: Human, itemType: ItemType, itemsToRequire: IItemArray, itemsToConsume: IItemArray, baseItem?: IItem): CraftStatus;
    create(itemType: ItemType, container: IContainer, quality?: ItemQuality, fake?: boolean): IItem;
    createFake(itemType: ItemType, quality?: ItemQuality): IItem;
    decayItems(): boolean;
    derefenceContainerReference(containerRef: ContainerReference): object | undefined;
    generateLookups(): void;
    getAdjacentContainers(player: IPlayer, includeNpcs?: boolean, ignoreOptions?: boolean): IContainer[];
    getContainerReference(container: IContainer, parentObject?: any, showWarnings?: boolean): ContainerReference;
    getDefaultDurability(): number;
    getDisassemblyComponents(description: IItemDescription, quality: ItemQuality | undefined): IItemArray;
    getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup>;
    getGroupDefault(itemGroup: ItemTypeGroup, weightType?: WeightType): ItemType;
    getGroupItems(itemGroup: ItemTypeGroup): Set<ItemType>;
    getItemForHuman(human: Human, search: ItemType | ItemTypeGroup): IItem | undefined;
    getItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): IItem | undefined;
    getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, excludeProtectedItems?: IProtectedItemOptions): IItem | undefined;
    getItemInInventoryByGroup(player: IPlayer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, excludeProtectedItems?: IProtectedItemOptions): IItem | undefined;
    getItemListTranslation(items: IItem[], article?: boolean): Translation;
    getItemsByWeight(a: number, b: number): number;
    getItemsWeight(items: IItem[]): number;
    getItemsInContainer(container: IContainer, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions): IItemArray;
    getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions): IItemArray;
    getItemsInContainerByType(container: IContainer, itemType: ItemType, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions): IItemArray;
    getItemTranslations(items: IItem[], article?: boolean): IterableIterator<Translation>;
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: boolean, count?: number): Translation;
    getLegendaryWeightCapacity(container: IContainer): number;
    getNPCFromInventoryContainer(container: IContainer): INPC | undefined;
    getNPCWithItemInInventory(containable: IContainable): INPC | undefined;
    getOrderedContainerItems(container: IContainer, excludeProtectedItems?: IProtectedItemOptions): IItem[];
    getPlayerWithItemInInventory(containable: IContainable): IPlayer | undefined;
    getAbsentPlayerWithItemInInventory(containable: IContainable): IPlayer | undefined;
    getQualityBasedOnSkill(itemQuality: ItemQuality | undefined, skillValue: number, qualityBypass?: boolean): ItemQuality | undefined;
    getRandomQuality(bonusQuality?: number): ItemQuality;
    getTileContainer(x: number, y: number, z: number): IContainer;
    getWeight(itemType: ItemType, weightType?: WeightType): number;
    hasAdditionalRequirements(human: Human, craftType: ItemType, message?: Message, faceDoodad?: boolean, isRepairOrDisassembly?: boolean): RequirementInfo;
    hasRoomInContainer(extraWeight: number, container: IContainer, itemToMove?: IItem): boolean;
    isContainableInAdjacentContainer(player: IPlayer, containable: IContainable, includeNpcs?: boolean, ignoreOptions?: boolean): boolean;
    isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    isContainer(obj: unknown): obj is IContainer;
    isGroup(itemType: (ItemType | ItemTypeGroup)): itemType is ItemTypeGroup;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup): boolean;
    getGroups(itemType: ItemType): IterableIterator<ItemTypeGroup>;
    isInInventory(containable: IContainable): boolean;
    isItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): boolean;
    isTileContainer(container: IContainer | undefined): boolean;
    loadReferences(isTraveling: boolean): void;
    loadTileReferences(): void;
    moveAllFromContainerToContainer(human: Human | undefined, fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType, ofQuality?: ItemQuality, checkWeight?: boolean, onMoveItem?: (item: IItem) => void): IItem[];
    moveAllFromContainerToInventory(human: Human, container: IContainer, ofQuality?: ItemQuality): IItem[];
    moveToContainer(human: Human | undefined, item: IItem, container: IContainer): boolean;
    placeItemsAroundLocation(container: IContainer, x: number, y: number, z: number, skipMessage?: boolean): void;
    reduceDismantleWeight(createdItems: IItemArray, itemWeight: number, mod?: number): void;
    remove(item: IItem): void;
    removeContainerItems(container: IContainer): void;
    resetMapsInContainer(container: IContainer): void;
    saveTileReferences(): void;
    spawn(itemTypes: ItemType[] | undefined, x: number, y: number, z: number): void;
    updateItemOrder(container: IContainer, itemOrder: number[] | undefined): void;
    inspect(inspection: Inspection, ...items: IItem[]): InspectionResult;
    exists(item: IItem): boolean;
}
export default IItemManager;
export interface IProtectedItemOptions {
    protect: boolean;
    protectContainers: boolean;
}
