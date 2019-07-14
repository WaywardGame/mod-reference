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
import { INPC } from "entity/npc/INPC";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import { InspectionResult } from "game/inspection/IInspection";
import Inspection from "game/inspection/Inspect";
import { Quality } from "game/IObject";
import { ContainerReference, IContainable, IContainer, IItem, IItemDescription, IItemWeightComponent, ItemType, ItemTypeGroup } from "item/IItem";
import { CraftStatus, IItemManager, IProtectedItemOptions, RequirementInfo, WeightType } from "item/IItemManager";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import Stream from "utilities/stream/Stream";
interface ItemManagerEvents {
    containerItemRemove(item: IItem, previousContainer: IContainer): any;
    containerItemUpdate(item: IItem, previousContainer: IContainer | undefined, newContainer: IContainer): any;
    containerItemAdd(item: IItem, newContainer: IContainer): any;
}
export default class ItemManager extends EventEmitter.Host<ItemManagerEvents> implements IItemManager {
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
    addToContainerInternal(item: IItem, container: IContainer, movingMultiple?: boolean, skipMessage?: boolean): boolean;
    removeContainerItems(container: IContainer): void;
    exists(item: IItem): boolean;
    remove(item: IItem): void;
    getDisassemblyComponents(description: IItemDescription, quality: Quality | undefined): IItem[];
    getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup>;
    getWeight(item: IItem | IItemWeightComponent): number;
    getWeight(itemType: ItemType, weightType?: WeightType): number;
    weightTree(itemType: ItemType, weightType?: WeightType, debug?: boolean, depth?: number): number;
    create(itemType: ItemType, container: IContainer, quality?: Quality): IItem;
    createFake(itemType: ItemType, quality?: Quality): IItem;
    isContainer(obj: unknown): obj is IContainer;
    moveAllFromContainerToInventory(human: Human, container: IContainer, ofQuality?: Quality): IItem[];
    computeContainerWeight(container: IContainer): number;
    getLegendaryWeightCapacity(container: IContainer): number;
    moveAllFromContainerToContainer(human: Human | undefined, fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType | undefined, ofQuality?: Quality | undefined, checkWeight?: boolean, onMoveItem?: (item: IItem) => void): IItem[];
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
    getRandomQuality(bonusQuality?: number): Quality;
    hasAdditionalRequirements(human: Human, craftType: ItemType, message?: Message, faceDoodad?: boolean, isRepairOrDisassembly?: boolean): RequirementInfo;
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: boolean, count?: number): Translation;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup | ItemType): boolean;
    craft(human: Human, itemType: ItemType, itemsToRequire: IItem[], itemsToConsume: IItem[], baseItem?: IItem): CraftStatus;
    decayItems(): boolean;
    getPlayerWithItemInInventory(containable: IContainable): Player | undefined;
    getAbsentPlayerWithItemInInventory(containable: IContainable): Player | undefined;
    getNPCWithItemInInventory(containable: IContainable): INPC | undefined;
    countItemsInContainer(containers: IContainer | IContainer[], itemTypeSearch: ItemType, ignoreItem?: IItem): number;
    countItemsInContainerByGroup(containers: IContainer | IContainer[], itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: IItem): number;
    getItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem, excludeProtectedItems?: IProtectedItemOptions | undefined): IItem | undefined;
    getItemForHuman(human: Human, search: ItemType | ItemTypeGroup): IItem | undefined;
    getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, excludeProtectedItems?: IProtectedItemOptions | undefined): IItem | undefined;
    getItemsInContainer(container: IContainer, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions | undefined): IItem[];
    getItemsInContainerByType(container: IContainer, itemType: ItemType, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions | undefined): IItem[];
    getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, includeSubContainers?: boolean, excludeProtectedItems?: IProtectedItemOptions | undefined): IItem[];
    getItemInInventoryByGroup(human: Human, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number): IItem | undefined;
    isItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): boolean;
    isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    getAdjacentContainers(human: Human, includeNpcs?: boolean, ignoreOptions?: boolean): IContainer[];
    isContainableInAdjacentContainer(player: Player, containable: IContainable, includeNpcs?: boolean, ignoreOptions?: boolean): boolean;
    isInInventory(containable: IContainable): boolean;
    isTileContainer(container: IContainer | undefined): boolean;
    getOrderedContainerItems(container: IContainer, protectedItemOptions?: IProtectedItemOptions | undefined): IItem[];
    reduceDismantleWeight(createdItems: IItem[], itemWeight: number, mod?: number): void;
    getItemTranslations(items: IItem[], article?: boolean): Stream<Translation>;
    getItemListTranslation(items: IItem[], article?: boolean): Translation;
    loadReferences(isTraveling: boolean): void;
    saveTileReferences(): void;
    loadTileReferences(): void;
    isGroup(item: ItemType | ItemTypeGroup): item is ItemTypeGroup;
    getGroupItems(itemGroup: ItemType | ItemTypeGroup, ancestorGroups?: ItemTypeGroup[]): Set<ItemType>;
    getGroupDefault(itemGroup: ItemTypeGroup, weightType?: WeightType, ancestorGroups?: ItemTypeGroup[]): ItemType;
    getGroups(itemType: ItemType): Stream<ItemTypeGroup>;
    checkMilestones(player: Player, item: IItem): void;
    getDefaultDurability(weight: number, itemType: ItemType): number;
    generateLookups(): void;
    updateItemOrder(container: IContainer, itemOrder: number[] | undefined): void;
    getQualityBasedOnSkill(itemQuality: Quality | undefined, skillValue: number, allowIncreasedQuality?: boolean, bonusChance?: number): Quality | undefined;
    getNPCFromInventoryContainer(container: IContainer): INPC | undefined;
    getItemsByWeight(a: number, b: number): number;
    getItemsWeight(items: IItem[]): number;
    inspect({ context }: Inspection, ...items: IItem[]): InspectionResult;
    copyProperties(item: IItem, item2: IItem): void;
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
