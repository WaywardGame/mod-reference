import { DialogId, EquipType, IMessagePack, ItemType, ScreenId, SentenceCaseStyle, SortType } from "Enums";
import { IContainer, IDismantleComponent, IItem } from "item/IItem";
import { Message, MessageType } from "language/Messages";
import { MenuId } from "newui/INewUi";
import { IPlayer } from "player/IPlayer";
import { IPropSerializable } from "save/ISerializer";
import { HintType } from "ui/IHint";
import Emitter from "utilities/Emitter";
export interface IUiScreen {
    bindCatcher?: number;
    selector(): string;
    bindElements(): void;
    unbindElements(): void;
    show(data?: any): void;
    hide(): void;
    onGameEnd(showDeath: boolean): void;
    isVisible(): void;
}
export interface IDialogInfo {
    id?: string;
    title?: string;
    open?: boolean;
    x?: number;
    y?: number;
    width?: number | "auto";
    height?: number | "auto";
    minWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    maxWidth?: number;
    canResizeHeight?: boolean;
    resizable?: boolean;
    onOpen?(): void;
    onClose?(): void;
    onResizeStop?(): void;
}
export interface IQuickSlotInfo {
    itemType: ItemType;
    action: IContextMenuAction | undefined;
}
export interface IContainerSortInfo {
    sortType: SortType;
    reverse?: boolean;
}
export interface IContextMenuAction {
    action: string;
    text: string;
    keybind?: number;
    data?: any;
}
export interface IUi extends IPropSerializable, Emitter {
    screenInGame: IUiScreen;
    initialize(): void;
    initializeGameState(): void;
    setupButtons(): void;
    getBody(): JQuery;
    getWidth(): number;
    getHeight(): number;
    removeStyle(id: string): void;
    appendStyle(id: string, styleContent: string): void;
    setCheckboxValue(element: JQuery, id: string, checked: boolean): void;
    playClickSound(): void;
    switchToScreen(screenId: ScreenId, menuId?: MenuId, ...args: any[]): void;
    changeEquipmentOption(id: string): void;
    toggleOptions(): void;
    showOptionsScreen(): Promise<void>;
    onWindowResize(): void;
    resetHelpHeight(): void;
    isInGameScreenShown(): boolean;
    setupItemBackgrounds(): void;
    refreshStats(): void;
    refreshAttributes(): void;
    loadQuickSlots(): void;
    isContextMenuOpen(): boolean;
    isOptionsOverlayShown(): boolean;
    isHelpOverlayShown(): boolean;
    isHelpOverlayEnabled(): boolean;
    isOptionsOverlayEnabled(): boolean;
    displayHint(player: IPlayer | undefined, hintType: HintType, force?: boolean): boolean;
    displayChatMessage(player: IPlayer, message: string): void;
    getCurrentHint(): HintType;
    setCurrentHint(hintType: HintType): void;
    toggleHelp(): void;
    hideHelpScreen(): void;
    tooltipRefresh(): void;
    refreshWorldTooltips(): void;
    messageIdToText(message: Message): string;
    getMessageHtml(messagePack: IMessagePack, tag?: string, textCase?: SentenceCaseStyle, log?: boolean, addedClass?: string): string;
    displayMessage(player: IPlayer | IPlayer[] | undefined, message: Message | string, messageType?: MessageType, ...args: any[]): void;
    displayMessagePack(player: IPlayer | IPlayer[] | undefined, messagePack: IMessagePack): void;
    getMessageCount(): number;
    removeOldestMessage(): void;
    updateMilestonesDialog(): void;
    updateSkillsDialog(): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent): void;
    getInventoryItemOrder(): any[];
    updateItem(item: IItem): void;
    hideContextMenu(): void;
    hideActionsMenu(): void;
    openMapDialog(): void;
    openBookDialog(title: string, content: string): void;
    closeMapDialog(): void;
    setFontStyle(): void;
    addButton(translationId: string, imagePath: string, keyBind?: number): JQuery;
    removeButton(button: JQuery): void;
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    toggleDialog(dialog: JQuery): boolean;
    openDialog(dialog: JQuery): boolean;
    closeDialog(dialog: JQuery): boolean;
    setEquipSlot(equip: EquipType, itemId: number, internal?: boolean): void;
    setQuickSlot(quickSlot: number, itemId: number, internal?: boolean): void;
    refreshQuickSlots(): void;
    removeItemFromQuickSlot(itemId: number): void;
    removeItemFromEquipSlot(equip: EquipType): void;
    shouldRefreshMods(): boolean;
    setObjectUrl(objectUrl: string): void;
    onGameEnd(showDeath: boolean): void;
    highlight(selector?: string[] | undefined, onlyFirstElement?: boolean, timeout?: number): void;
    toggleUIDisplay(): void;
    getSerializationProperties(_: string): string[];
    onMove(): void;
    closeAllContainers(): void;
    openContainer(container: IContainer, containerName?: string): void;
    closeContainer(container: IContainer): void;
    isContainerOpen(container: IContainer): boolean;
    addItemToContainer(item: IItem, container: IContainer, internal?: boolean, isAddingMultipleItems?: boolean): void;
    afterAddingMultipleItemsToContainer(container: IContainer): void;
    removeItemFromContainer(item: IItem, container: IContainer): void;
    updateInventorySort(): void;
    getDialogInfo(dialogId: DialogId): IDialogInfo;
    setVersionExtra(msg: string): void;
    openDialogs(): void;
    updateScrollableContainersList(): void;
    updateScrollableContainer(this: Element): void;
    onUpdateDirection(): void;
}
export default IUi;
export declare enum UiEvent {
    HelpShow = 0,
    HelpHide = 1,
}
