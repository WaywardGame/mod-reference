/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { DialogId, EquipType, ItemType, SortType } from "Enums";
import { IContainer, IDismantleComponent, IItem } from "item/IItem";
import { ScreenId } from "newui/screen/IScreen";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
import Menu from "newui/screen/screens/menu/component/Menu";
import { IPropSerializable } from "save/ISerializer";
import Emitter from "utilities/Emitter";
export interface IUiScreen {
    bindCatcher?: number;
    selector(): string;
    bindElements(): void;
    unbindElements(): void;
    show(data?: any): void;
    hide(): void;
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
    getBody(): JQuery;
    getWidth(): number;
    getHeight(): number;
    hideInGameScreen(): void;
    removeStyle(id: string): void;
    appendStyle(id: string, styleContent: string): void;
    setCheckboxValue(element: JQuery, id: string, checked: boolean): void;
    playClickSound(): void;
    switchToScreen<M extends Menu = Menu>(screenId: ScreenId, menuId?: MenuId, menuInitializer?: (menu: M) => any): Promise<void>;
    changeEquipmentOption(id: "leftHand" | "rightHand"): void;
    toggleOptions(): void;
    showOptionsScreen(): Promise<void>;
    onWindowResize(): void;
    isInGameScreenShown(): boolean;
    setupItemBackgrounds(): void;
    refreshStats(): void;
    loadQuickSlots(): void;
    isContextMenuOpen(): boolean;
    isOptionsOverlayShown(): boolean;
    isOptionsOverlayEnabled(): boolean;
    tooltipRefresh(): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent): void;
    getInventoryItemOrder(): any[];
    updateItem(item: IItem): void;
    hideContextMenu(): void;
    hideActionsMenu(): void;
    setFontStyle(): void;
    setEquipSlot(equip: EquipType, itemId: number, internal?: boolean): void;
    setQuickSlot(quickSlot: number, itemId: number, internal?: boolean): void;
    refreshQuickSlots(): void;
    getUsedQuickSlots(): number[];
    removeItemFromQuickSlot(itemId: number): void;
    removeItemFromEquipSlot(equip: EquipType): void;
    shouldRefreshMods(): boolean;
    setObjectUrl(objectUrl: string): void;
    onGameEnd(): void;
    /**
     * Highlight any number of elements, replacing any other previous "unique highlight" elements, if they
     * are still flashing
     * @param iterations How many times the element should flash
     * @param selectors A list of selectors and elements that should be highlighted
     */
    highlightUnique(iterations?: number, ...selectors: Array<string | HTMLElement>): void;
    /**
     * Highlight any number of elements
     * @param iterations How many times the element should flash
     * @param selectors A list of selectors and elements that should be highlighted
     */
    highlight(iterations?: number, ...selectors: Array<string | HTMLElement>): void;
    toggleUIDisplay(hide: boolean): void;
    getSerializationProperties(_: string): string[];
    onMove(): void;
    closeAllContainers(): void;
    openContainer(container: IContainer, containerName?: string): void;
    refreshContainerName(container: IContainer): void;
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
    cancelSorting(): void;
}
export default IUi;
export declare enum UiEvent {
    HelpShow = 0,
    HelpHide = 1
}
