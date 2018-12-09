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
import "ui/functional/FunctionalSortable";
import "ui/functional/FunctionalTooltip";
import { DialogId, EquipType, ItemType } from "Enums";
import { IContainer, IDismantleComponent, IItem } from "item/IItem";
import { ScreenId } from "newui/screen/IScreen";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
import Menu from "newui/screen/screens/menu/component/Menu";
import { IDialogInfo, IUi } from "ui/IUi";
import InGameScreen from "ui/screens/InGameScreen";
import Emitter from "utilities/Emitter";
export default class Ui extends Emitter implements IUi {
    screenInGame: InGameScreen;
    private readonly elementDocument;
    private readonly elementWindow;
    private readonly elementBody;
    private elementScrollableContainers;
    private objectUrl;
    private unloading;
    constructor();
    initialize(): void;
    initializeGameState(): void;
    getBody(): JQuery;
    getWidth(): number;
    getHeight(): number;
    removeStyle(id: string): void;
    appendStyle(id: string, styleContent: string): void;
    setCheckboxValue(element: JQuery, id: string, checked: boolean): void;
    playClickSound(): void;
    hideInGameScreen(): void;
    switchToScreen<M extends Menu = Menu>(screenId: ScreenId, menuId?: MenuId, menuInitializer?: (menu: M) => any): Promise<void>;
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
    onUpdateDirection(): void;
    highlightUnique(iterations?: number, ...selectors: Array<string | HTMLElement>): void;
    highlight(iterations?: number, ...selectors: Array<string | HTMLElement>): void;
    toggleUIDisplay(hide: boolean): void;
    getSerializationProperties(_: string): string[];
    onMove(): void;
    changeEquipmentOption(id: "leftHand" | "rightHand"): void;
    closeAllContainers(): void;
    openContainer(container: IContainer, containerName?: string): void;
    closeContainer(container: IContainer): void;
    refreshContainerName(container: IContainer): void;
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
    cancelSorting(): void;
    private onBeforeUnloadElectron;
    private onBeforeUnloadBrowser;
}
