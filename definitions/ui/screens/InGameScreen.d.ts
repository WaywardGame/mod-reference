import { DialogId, EquipType, FacingDirection, IBind, IMessagePack, ItemType, SortType, StatType } from "Enums";
import { IDismantleComponent } from "item/IItem";
import { IContainer, IItem } from "item/IItem";
import { Message } from "language/Messages";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import { ISortableEvent } from "ui/functional/IFunctionalSortable";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo } from "ui/IUi";
import BaseScreen from "ui/screens/BaseScreen";
export declare enum TextElementId {
    Weight = 0,
    Attack = 1,
    Defense = 2,
    Reputation = 3,
}
export default class InGameScreen extends BaseScreen {
    elementVisibleInGame: JQuery;
    elementBlocker: JQuery;
    elementBlockerMouse: JQuery;
    elementStats: JQuery;
    elementStatHealth: JQuery;
    elementStatStamina: JQuery;
    elementStatHunger: JQuery;
    elementStatThirst: JQuery;
    elementStatBurn: JQuery;
    elementStatBleed: JQuery;
    elementStatPoison: JQuery;
    elementAttributeWeight: JQuery;
    elementAttributeAttack: JQuery;
    elementAttributeDefense: JQuery;
    elementAttributeReputation: JQuery;
    elementReputationMalignity: JQuery;
    elementReputationBenignity: JQuery;
    elementButtons: JQuery;
    elementQuickSlotsContainer: JQuery;
    elementMessagesOverlay: JQuery;
    elementMessagesChatInput: JQuery;
    elementActions: JQuery;
    elementDialogs: JQuery;
    elementDialogInventory: JQuery;
    elementDialogInventoryContainer: JQuery;
    elementDialogCrafting: JQuery;
    elementDialogCraftingContainer: JQuery;
    elementDialogDismantleContainer: JQuery;
    elementDialogCraftingButton: JQuery;
    elementDialogDismantleButton: JQuery;
    elementDialogEquipment: JQuery;
    elementDialogEquipmentContainer: JQuery;
    elementDialogSkills: JQuery;
    elementDialogSkillsContainer: JQuery;
    elementDialogMilestones: JQuery;
    elementDialogMilestonesContainer: JQuery;
    elementDialogMessages: JQuery;
    elementDialogMessagesContainer: JQuery;
    elementDialogMessagesChatInput: JQuery;
    elementDialogMap: JQuery;
    elementContainers: JQuery;
    elementVersion: JQuery;
    elementContainerDialogs: JQuery[];
    elementOtherDialogs: JQuery[];
    private mouseEvent;
    private touchEvent;
    private hasTouchScreen;
    private mouseX;
    private mouseY;
    private contextMenu;
    private contextMenuTarget;
    private contextMenuOpen;
    private closingContextMenu;
    private contextMenuBlocking;
    private lastContextMenuPosition;
    private actionsMenuOpen;
    private activeContainer;
    private multipleContainersOpened;
    private sortableElement;
    private sortableElementPosition;
    private sortableElementTargetContainer;
    private sortingCancelled;
    private onSortableAction;
    private craftableItemTypes;
    private nonCraftableItemTypes;
    private messages;
    private messageOverlayCount;
    private messageLoadIndex;
    private worldTooltip;
    private lastText;
    private lastStats;
    selector(): string;
    bindElements(): void;
    changeEquipmentOption(element: JQuery, id: string): void;
    toggleCraftingTab(which: "crafting" | "dismantle", canClose?: boolean): void;
    toggleCraftingTabElements(which: "crafting" | "dismantle"): void;
    unbindElements(): void;
    bindSortable(element: JQuery): void;
    onKeyDown(_: JQueryEventObject, keyCode: number, blockable: boolean): boolean | null;
    onKeyUp(event: JQueryEventObject): boolean | null;
    runBind(bind: IBind): boolean | null;
    pressHotKey(hotKeyNumber: number): boolean;
    useQuickSlot(slot: number): boolean;
    onChatEnter(chatElement: JQuery): void;
    displayChatMessage(player: IPlayer, message: string): void;
    isSorting(): boolean;
    runSortableAction(action: string): void;
    cancelSorting(): void;
    setupContextMenu(): any;
    onShow(): void;
    onHide(): void;
    initializeGameState(): void;
    updateMultiplayerElements(isConnected: boolean): void;
    onGameEnd(showBlocker: boolean): void;
    getDialogIndex(dialogId: DialogId, customDialogInfo?: IDialogInfo | null): string;
    setupDialog(dialogId: DialogId, highlightItemId?: number | null, customDialogInfo?: IDialogInfo | null): JQueryUI.DialogOptions;
    onMouseDown(event: JQueryEventObject): void;
    onMouseUpOrLeave(event: JQueryEventObject): void;
    onOtherClick(event: JQueryEventObject): void;
    onMouseMove(event: JQueryEventObject): void;
    onBlockerMouseMove(event: JQueryEventObject): void;
    completeBlockerMouseMovement(): void;
    isMouseMovementBlockerVisible(): boolean;
    highlightItemElementByItemId(itemId: number, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementByItemType(itemType: ItemType, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementByItemTypeWithNoItemId(itemType: ItemType, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementBySelector(selector: string, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    getMovementDirection(event: any): FacingDirection;
    onMouseScroll(event: JQueryEventObject): void;
    canUseHotkeys(): boolean;
    shakeStat(stat: StatType): void;
    refreshStats(): void;
    refreshAttributes(): void;
    updateTextIfChanged(id: TextElementId, element: JQuery, text: string): void;
    onButtonBarClick(button: string): void;
    blurInputs(): void;
    toggleDialog(dialog: JQuery): boolean;
    openDialog(dialog: JQuery): boolean;
    closeDialog(dialog: JQuery): boolean;
    openMapDialog(): void;
    closeMapDialog(): void;
    closeAllDialogs(): boolean;
    autoOpenDialog(index: string | number, element: JQuery): boolean;
    openDialogs(): void;
    clampDialogs(): void;
    getItemClass(item: IItem | null, itemType?: ItemType | null): string;
    createItemElementByItemType(itemType: ItemType, item?: IItem | null): JQuery;
    createItemElementByItem(item: IItem): JQuery | null;
    syncItemElements(itemId: number, selector?: JQuery | null): void;
    syncDamagedDecayed(item: IItem, element: JQuery): void;
    addItemToContainer(item: IItem, container: IContainer, internal?: boolean, isAddingMultipleItems?: boolean): void;
    insertItemElementToContainer(itemElement: JQuery, containerElement: JQuery): void;
    onAddItemsToContainer(containerElement: JQuery, containerDialogElement: JQuery | null, isInventoryContainer: boolean): void;
    afterAddingMultipleItemsToContainer(container: IContainer): void;
    removeItemFromContainer(item: IItem, container: IContainer): void;
    refreshQuickSlots(): void;
    getInventoryItemsInOrder(): any[];
    loadQuickSlots(): void;
    saveItemOrder(containerElement: JQuery): void;
    showItemContextMenu(element: JQuery, isContainer?: boolean): void;
    onContextMenuAction(element: JQuery, action: IContextMenuAction, toElement: JQuery | null): boolean;
    runContextMenuAction(itemId: number, containerId: number | null, action: IContextMenuAction): boolean;
    onInventoryItemRightClick(element: JQuery): void;
    onContainerItemRightClick(element: JQuery): void;
    onCraftingItemClick(element: JQuery): void;
    onDismantleItemClick(element: JQuery): void;
    onDismantleHover(element: JQuery, hover: boolean): void;
    onQuickSlotItemRightClick(element: JQuery): void;
    onEquipmentItemRightClick(element: JQuery): void;
    getTooltipHtml(element: JQuery): string | undefined;
    tooltipEnable(): void;
    tooltipRefresh(): void;
    tooltipDisable(): void;
    tooltipHide(): void;
    onTooltipClose(): void;
    getTooltipHtmlForItem(item: IItem, itemType: ItemType, isQuickSlot: boolean): string;
    getTooltipHtmlForTile(tile: ITile): string;
    displayMessagePack(messagePack: IMessagePack): void;
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    getMessageCount(): number;
    removeOldestMessage(): void;
    getUsedQuickSlots(): number[];
    getFreeQuickSlots(): number[];
    getQuickSlotItemElement(quickSlot: number): JQuery;
    getItemIdInQuickSlot(quickSlot: number): number | null;
    setQuickSlot(quickSlot: number, itemId: number | null, internal?: boolean): boolean;
    setQuickSlotByItemType(quickSlot: number, itemType: ItemType, disabled: boolean): JQuery;
    addItemToFreeQuickSlot(itemId: number): void;
    clearQuickSlot(quickSlot: number, internal?: boolean): void;
    removeItemFromQuickSlot(itemId: number | null, skipSync?: boolean): void;
    updateQuickSlotItem(quickSlot: number): boolean;
    onUpdateQuickSlotsOrEquips(): void;
    onSortableItemReceive(sortableEvent: ISortableEvent): void;
    getEquipSlotItemElement(equip: EquipType): JQuery;
    getItemIdInEquipSlot(equip: EquipType): number | null;
    setEquipSlot(equip: EquipType, itemId: number | null, internal?: boolean): void;
    removeItemFromEquipSlot(equip: EquipType): void;
    updateSkillsDialog(): void;
    updateMilestonesDialog(): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    generateDismantleItems(): void;
    updateDismantleTab(dismantleItems: IDismantleComponent): void;
    createCraftItemElements(sortType: SortType): void;
    updateItem(item: IItem): void;
    onMove(): void;
    refreshWorldTooltips(): void;
    getDialogElementForContainer(container: IContainer): JQuery | null;
    isContainerOpen(container: IContainer): boolean;
    openContainer(container: IContainer, containerName?: string | null): void;
    closeContainer(container: IContainer): void;
    closeContainerDialog(containerDialog: JQuery | null): void;
    closeStaticContainers(): void;
    closeAllContainers(): boolean;
    updateContainerName(containerDialogElement: JQuery): void;
    updateActiveContainer(): void;
    hideContextMenu(): boolean;
    hideActionsMenu(): void;
    toggleActionsMenu(center?: boolean): void;
    showActionsMenu(center?: boolean, updatePosition?: boolean): void;
    onClearMessages(): void;
    onFilterInput(containerElement: JQuery): void;
    showSortContextMenu(element: JQuery, container: JQuery, messageType: Message): void;
    sortItems(containerElement: JQuery, sortType: SortType, messageType?: Message, canReverse?: boolean): void;
    sortItemElements(itemElements: JQuery, containerSortInfo: IContainerSortInfo): void;
    updateInventorySort(): void;
    onUpdateContainer(containerElement: JQuery, activeSort: boolean): void;
    updateSort(container: JQuery, activeSort: boolean): void;
    isContainerDialogOver(x: number, y: number): boolean;
    addButton(elementId: string, buttonName: string, imagePath: string, tooltip: string, keyBind?: number): JQuery;
    refreshButtonTooltip(buttonName: string, tooltip: string, keyBind: number): void;
    removeButton(buttonName: string): void;
    onUpdateDirection(): void;
    private updateContextMenu(contextMenu);
    private onOpenMessages();
    private getMessagesHtml();
    private onCloseMessages();
}
