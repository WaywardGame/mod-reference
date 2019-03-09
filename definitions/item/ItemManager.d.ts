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
import { IItemManager, IProtectedItemOptions } from "item/IItemManager";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { INPC } from "npc/INPC";
import { IPlayer } from "player/IPlayer";
export default class ItemManager implements IItemManager {
    private readonly worldContainer;
    private cachedWeights;
    private cachedDecaysIntoWeights;
    private cachedDefaultItemForGroup;
    private cachedItemGroups;
    private cachedItemTypes;
    private cachedItemTypesWithRecipes;
    constructor();
    getItemTypes(): ReadonlyArray<ItemType>;
    getItemsWithRecipes(): ReadonlyArray<ItemType>;
    getContainerReference(container: IContainer | undefined, parentObject?: any, showWarnings?: boolean): ContainerReference;
    derefenceContainerReference(containerRef: ContainerReference): object | undefined;
    addToContainerInternal(item: IItem, container: IContainer, movingMultiple?: boolean, skipMessage?: boolean): boolean;
    removeContainerItems(container: IContainer): void;
    exists(item: IItem): boolean;
    remove(item: IItem): void;
    getDisassemblyComponents(description: IItemDescription, quality: ItemQuality | undefined): IItemArray;
    getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup>;
    getWeight(itemType: ItemType, weightType?: WeightType): number;
    weightTree(itemType: ItemType, weightType?: WeightType, debug?: boolean, depth?: number): number;
    create(itemType: ItemType, container: IContainer, quality?: ItemQuality): IItem;
    createFake(itemType: ItemType, quality?: ItemQuality): IItem;
    isContainer(obj: unknown): obj is IContainer;
    moveAllFromContainerToInventory(human: Human, container: IContainer, ofQuality?: ItemQuality): IItem[];
    computeContainerWeight(container: IContainer): number;
    getLegendaryWeightCapacity(container: IContainer): number;
    moveAllFromContainerToContainer(human: Human | undefined, fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType | undefined, ofQuality?: ItemQuality | undefined, checkWeight?: boolean, onMoveItem?: (item: IItem) => void): IItem[];
    moveToContainer(human: Human | undefined, item: IItem, container: IContainer): boolean;
    hasRoomInContainer(extraWeight: number, container: IContainer, itemToMove?: IItem): boolean;
    breakContainerOnTile(itemContainer: IItem, x: number, y: number, z: number): void;
    /**
     * Drop items in a 3x3 square around the location
     */
    placeItemsAroundLocation(container: IContainer, x: number, y: number, z: number, skipMessage?: boolean): void;
    spawn(itemTypes: ItemType[] | undefined, x: number, y: number, z: number): void;
    resetMapsInContainer(container: IContainer): void;
    getTileContainer(x: number, y: number, z: number): IContainer;
    getRandomQuality(bonusQuality?: number): ItemQuality;
    hasAdditionalRequirements(human: Human, craftType: ItemType, message?: Message, faceDoodad?: boolean, isRepairOrDisassembly?: boolean): RequirementInfo;
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: boolean, count?: number): Translation;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup): boolean;
    craft(human: Human, itemType: ItemType, itemsToRequire: IItemArray, itemsToConsume: IItemArray, baseItem?: IItem): CraftStatus;
    decayItems(): boolean;
    getPlayerWithItemInInventory(containable: IContainable): IPlayer | undefined;
    getAbsentPlayerWithItemInInventory(containable: IContainable): IPlayer | undefined;
    getNPCWithItemInInventory(containable: IContainable): INPC | undefined;
    countItemsInContainer(containers: IContainer | IContainer[], itemTypeSearch: ItemType, ignoreItem?: IItem): number;
    countItemsInContainerByGroup(containers: IContainer | IContainer[], itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: IItem): number;
    getItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem, excludeProtectedItems?: IProtectedItemOptions | undefined): IItem | undefined;
    getItemForHuman(human: Human, search: ItemType | ItemTypeGroup): IItem | undefined;
    getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, excludeProtectedItems?: IProtectedItemOptions | undefined): IItem | undefined;
    getItemsInContainer(container: IContainer, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions | undefined): IItemArray;
    getItemsInContainerByType(container: IContainer, itemType: ItemType, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions | undefined): IItemArray;
    getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions | undefined): IItemArray;
    getItemInInventoryByGroup(player: IPlayer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number): IItem | undefined;
    isItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): boolean;
    isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    getAdjacentContainers(human: Human, includeNpcs?: boolean, ignoreOptions?: boolean): IContainer[];
    isContainableInAdjacentContainer(player: IPlayer, containable: IContainable, includeNpcs?: boolean, ignoreOptions?: boolean): boolean;
    isInInventory(containable: IContainable): boolean;
    isTileContainer(container: IContainer | undefined): boolean;
    getOrderedContainerItems(container: IContainer, protectedItemOptions?: IProtectedItemOptions | undefined): IItem[];
    reduceDismantleWeight(createdItems: IItemArray, itemWeight: number, mod?: number): void;
    getItemTranslations(items: IItem[], article?: boolean): IterableIterator<Translation>;
    getItemListTranslation(items: IItem[], article?: boolean): Translation;
    loadReferences(isTraveling: boolean): void;
    saveTileReferences(): void;
    loadTileReferences(): void;
    isGroup(item: ItemType | ItemTypeGroup): item is ItemTypeGroup;
    getGroupItems(itemGroup: ItemTypeGroup, ancestorGroups?: ItemTypeGroup[]): Set<ItemType>;
    getGroupDefault(itemGroup: ItemTypeGroup, weightType?: WeightType, ancestorGroups?: ItemTypeGroup[]): ItemType;
    getGroups(itemType: ItemType): IterableIterator<ItemTypeGroup>;
    checkMilestones(player: IPlayer, item: IItem): void;
    getDefaultDurability(): number;
    generateLookups(): void;
    updateItemOrder(container: IContainer, itemOrder: number[] | undefined): void;
    getQualityBasedOnSkill(itemQuality: ItemQuality | undefined, skillValue: number, qualityBypass?: boolean): ItemQuality | undefined;
    getNPCFromInventoryContainer(container: IContainer): INPC | undefined;
    getItemsByWeight(a: number, b: number): number;
    getItemsWeight(items: IItem[]): number;
    inspect({ context }: Inspection, ...items: IItem[]): InspectionResult;
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
