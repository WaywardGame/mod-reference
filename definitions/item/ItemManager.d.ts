import { IDoodad } from "doodad/IDoodad";
import { CraftStatus, IItemTypeGroup, ItemQuality, ItemType, ItemTypeGroup, RequirementInfo, SentenceCaseStyle, WeightType } from "Enums";
import { ContainerReference, IContainable, IContainer, IItem, IItemArray, IItemDescription } from "item/IItem";
import IItemManager from "item/IItemManager";
import { Message } from "language/Messages";
import { IPlayer } from "player/IPlayer";
import { ITile, ITileContainer } from "tile/ITerrain";
export default class ItemManager implements IItemManager {
    private worldContainer;
    private cachedWeights;
    private cachedDecaysIntoWeights;
    private cachedDefaultItemForGroup;
    constructor();
    getContainerReference(container: IContainer | undefined, showWarnings?: boolean): ContainerReference;
    derefenceContainerReference(containerRef: ContainerReference): object | undefined;
    addToContainerInternal(item: IItem, container: IContainer, movingMultiple?: boolean, skipMessage?: boolean): void;
    removeContainerItems(container: IContainer): void;
    remove(item: IItem): void;
    getDisassemblyComponents(description: IItemDescription, quality: ItemQuality | undefined): IItemArray;
    getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup | IItemTypeGroup>;
    getWeight(itemType: ItemType, weightType?: WeightType): number;
    weightTree(itemType: ItemType, weightType?: WeightType, debug?: boolean, depth?: number): number;
    create(itemType: ItemType, container: IContainer, quality?: ItemQuality): IItem;
    createFake(itemType: ItemType, quality?: ItemQuality): IItem;
    isContainer(obj: IItem | IDoodad | IContainer | ITile | IPlayer): obj is IContainer;
    moveAllFromContainerToInventory(player: IPlayer, container: IContainer, ofQuality?: ItemQuality): void;
    computeContainerWeight(container: IContainer): number;
    moveAllFromContainerToContainer(player: IPlayer | undefined, fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType | undefined, ofQuality?: ItemQuality | undefined, checkWeight?: boolean, onMoveItem?: (item: IItem) => void): void;
    moveToContainer(player: IPlayer | undefined, item: IItem, container: IContainer): void;
    hasRoomInContainer(extraWeight: number, container: IContainer, itemToMove?: IItem): boolean;
    breakContainerOnTile(itemContainer: IItem, x: number, y: number, z: number): void;
    /**
     * Drop items in a 3x3 square around the location
     */
    placeItemsAroundLocation(container: IContainer, x: number, y: number, z: number, skipMessage?: boolean): void;
    spawn(itemTypes: ItemType[] | undefined, x: number, y: number, z: number): void;
    resetMapsInContainer(container: IContainer): void;
    getTileContainer(x: number, y: number, z: number): IContainer;
    getRandomQuality(itemType: ItemType, bonusQuality?: number): ItemQuality;
    hasAdditionalRequirements(player: IPlayer, craftType: ItemType, message?: Message, faceDoodad?: boolean): RequirementInfo;
    isItemTypeGroup(itemType: (ItemType | ItemTypeGroup)): itemType is ItemTypeGroup;
    isItemTypeInGroup(itemType: ItemType, itemGroupSearch: ItemTypeGroup): boolean;
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup | IItemTypeGroup, prefix?: boolean, sentenceCaseStyle?: SentenceCaseStyle): string;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup): boolean;
    craft(player: IPlayer, itemType: ItemType, itemsToRequire: IItemArray, itemsToConsume: IItemArray, baseItem?: IItem): CraftStatus;
    decayItems(): boolean;
    getPlayerWithItemInInventory(containable: IContainable): IPlayer | undefined;
    countItemsInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): number;
    countItemsInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup | IItemTypeGroup, ignoreItem?: IItem): number;
    getItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem, excludeProtectedItems?: boolean): IItem | undefined;
    getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, excludeProtectedItems?: boolean): IItem | undefined;
    getItemsInContainer(container: IContainer, includeSubContainers?: boolean, excludeProtectedItems?: boolean): IItemArray;
    getItemsInContainerByType(container: IContainer, itemType: ItemType, includeSubContainers?: boolean, excludeProtectedItems?: boolean): IItemArray;
    getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, includeSubContainers?: boolean, excludeProtectedItems?: boolean): IItemArray;
    getItemInInventoryByGroup(player: IPlayer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number): IItem | undefined;
    isItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): boolean;
    isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    isInInventory(containable: IContainable): boolean;
    isTileContainer(container: IContainer | undefined): boolean;
    getOrderedContainerItems(container: IContainer): IItem[];
    reduceDismantleWeight(createdItems: IItemArray, itemWeight: number, mod?: number): void;
    getItemsString(items: IItemArray): string;
    loadReferences(): void;
    saveTileReferences(tileContainers: ITileContainer[]): void;
    loadTileReferences(): void;
    getDefaultItemFromItemGroup(itemGroup: ItemTypeGroup, weightType?: WeightType): ItemType;
    checkMilestones(player: IPlayer, item: IItem): void;
    getDefaultDurability(): number;
    generateLookups(): void;
    updateItemOrder(container: IContainer, itemOrder: number[] | undefined): void;
    getQualityBasedOnSkill(itemQuality: ItemQuality | undefined, skillValue: number, qualityBypass?: boolean): ItemQuality | undefined;
    private updateItemOrderInternal(container, itemOrder);
    private loadReference(container);
    private removeFromContainerInternal(item);
    private updateUiOnItemRemove(player, item, willBeAnywhereInInventory?, skipMessage?);
    private getCraftQualityBonus(quality, required?);
    private computeCraftQualityBonus(itemsToRequire, itemsToConsume);
    private isCraftSuccessful(player, recipe, qualityBonus);
    private getPlayerFromInventoryContainer(container);
    private getAbsentPlayerFromInventoryContainer(container);
}
