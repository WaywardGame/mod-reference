import "ui/functional/FunctionalSortable";
import "ui/functional/FunctionalTooltip";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { DialogId, EquipType, ItemType, ScreenId, SentenceCaseStyle } from "Enums";
import { IContainer, IDismantleComponent, IItem } from "item/IItem";
import { IMessagePack, Message } from "language/IMessages";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
import Menu from "newui/screen/screens/menu/component/Menu";
import { HintType } from "ui/IHint";
import { IDialogInfo, IUi } from "ui/IUi";
import InGameScreen from "ui/screens/InGameScreen";
import Emitter from "utilities/Emitter";
export default class Ui extends Emitter implements IUi {
    screenInGame: InGameScreen;
    private readonly elementDocument;
    private readonly elementWindow;
    private readonly elementBody;
    private elementScrollableContainers;
    private screen;
    private objectUrl;
    constructor();
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
    switchToScreen<M extends Menu = Menu>(screenId: ScreenId, menuId?: MenuId, menuInitializer?: (menu: M) => any): void;
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
    displayHint(human: IBaseHumanEntity | undefined, hintType: HintType, force?: boolean): boolean;
    tooltipRefresh(): void;
    refreshWorldTooltips(): void;
    messageIdToText(message: Message): string;
    getMessageHtml(messagePack: IMessagePack, tag?: string, textCase?: SentenceCaseStyle, log?: boolean, addedClass?: string): string;
    updateMilestonesDialog(): void;
    updateSkillsDialog(): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent): void;
    getInventoryItemOrder(): any[];
    updateItem(item: IItem): void;
    hideContextMenu(): void;
    hideActionsMenu(): void;
    openMapDialog(): void;
    closeMapDialog(): void;
    openBookDialog(title: string, content: string): void;
    setFontStyle(): void;
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    toggleDialog(dialog: JQuery): boolean;
    openDialog(dialog: JQuery): boolean;
    closeDialog(dialog: JQuery): boolean;
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
    toggleUIDisplay(): void;
    getSerializationProperties(_: string): string[];
    onMove(): void;
    changeEquipmentOption(id: string): void;
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
}
