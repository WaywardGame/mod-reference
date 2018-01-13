import { DialogId, EquipType, IMessagePack, ItemType, ScreenId, SentenceCaseStyle, StatType } from "Enums";
import { IContainer, IDismantleComponent, IItem } from "item/IItem";
import { Message, MessageType } from "language/Messages";
import { BindCatcherApi } from "newui/BindingManager";
import { MenuId } from "newui/INewUi";
import { IPlayer } from "player/IPlayer";
import "ui/functional/FunctionalSortable";
import "ui/functional/FunctionalTooltip";
import { HintType } from "ui/IHint";
import { IDialogInfo, IUi } from "ui/IUi";
import InGameScreen from "ui/screens/InGameScreen";
import * as Utilities from "Utilities";
export default class Ui extends Utilities.Emitter implements IUi {
    screenInGame: InGameScreen;
    private elementDocument;
    private elementWindow;
    private elementBody;
    private elementScrollableContainers;
    private screen;
    private screenId;
    private screenHelp;
    private objectUrl;
    constructor();
    initialize(): void;
    onBindLoop(api: BindCatcherApi): void;
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
    toggleOptions(): void;
    showOptionsScreen(): Promise<void>;
    onWindowResize(): void;
    resetHelpHeight(): void;
    isInGameScreenShown(): boolean;
    isTitleScreenShown(): boolean;
    setupItemBackgrounds(): void;
    refreshStats(): void;
    shakeStat(stat: StatType): void;
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
    closeMapDialog(): void;
    openBookDialog(title: string, content: string): void;
    setFontStyle(): void;
    addButton(translationId: string, imagePath: string, keyBind?: number): JQuery;
    refreshButtonTooltip(button: JQuery): void;
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
    onGameEnd(showBlocker: boolean): void;
    onUpdateDirection(): void;
    highlight(selectors?: string[] | undefined, onlyFirstElement?: boolean, timeout?: number): void;
    toggleUIDisplay(): void;
    getSerializationProperties(_: string): string[];
    onMove(): void;
    changeEquipmentOption(id: string): void;
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
}
