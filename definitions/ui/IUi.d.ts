import { BindType, DialogId, EquipType, IBind, IMessagePack, ItemType, KeyBind, LoadingType, ScreenId, SentenceCaseStyle, SortType, StatType, TitleScreenId } from "Enums";
import { IContainer, IDismantleComponent, IItem } from "item/IItem";
import { UiMessage } from "language/ILanguage";
import { Message, MessageType } from "language/Messages";
import { IPlayer } from "player/IPlayer";
import { IPropSerializable } from "save/ISerializer";
import { HintType } from "ui/IHint";
export interface IUiScreen {
    selector(): string;
    bindElements(): void;
    unbindElements(): void;
    show(data?: any): void;
    hide(): void;
    onGameEnd(showBlocker: boolean): void;
    isVisible(): void;
    onMouseDown(event: JQueryEventObject): void;
    onMouseUpOrLeave(event: JQueryEventObject): void;
    onMouseMove(event: JQueryEventObject): void;
    onMouseScroll(event: JQueryEventObject): void;
    onKeyDown(event: JQueryEventObject, keyCode: number, blockable: boolean): boolean | null;
    onKeyUp(event: JQueryEventObject): boolean | null;
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
    onOpen?: () => void;
    onClose?: () => void;
    onResizeStop?: () => void;
    resizable?: boolean;
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
export interface IUi extends IPropSerializable {
    initialize(): void;
    initializeGameState(): void;
    setupButtons(): void;
    getBody(): JQuery;
    getWidth(): number;
    getHeight(): number;
    removeStyle(id: string): void;
    appendStyle(id: string, styleContent: string): void;
    setRangeValue(id: string, value: number): void;
    setCheckboxValue(element: JQuery, id: string, checked: boolean): void;
    playClickSound(): void;
    switchToScreen(screenId: ScreenId, titleScreenId?: TitleScreenId, data?: any): void;
    showLoadingScreen(loadingType?: LoadingType, message?: UiMessage, fadeAudio?: boolean): void;
    setLoadingType(loadingType: LoadingType): void;
    setLoadingMessage(message: UiMessage): void;
    showLoadingScreenAround(func: () => void): void;
    showLoadingScreenAround(message: UiMessage, func: () => void): void;
    hideLoadingScreen(): void;
    toggleOptions(): void;
    showOptionsScreen(): void;
    hideOptionsScreen(): void;
    onWindowResize(): void;
    resetHelpHeight(): void;
    updateWindowMode(): void;
    onUpdateWindowMode(): void;
    launchFullScreen(): void;
    cancelFullscreen(): void;
    isInGameScreenShown(): boolean;
    isTitleScreenShown(): boolean;
    onMouseDown(event: JQueryEventObject): void;
    onMouseUpOrLeave(event: JQueryEventObject): void;
    onMouseMove(event: JQueryEventObject): void;
    onMouseScroll(event: JQueryEventObject): void;
    onKeyDown(event: JQueryEventObject): void;
    onKeyUp(event: JQueryEventObject): void;
    setRebindingKey(key: KeyBind | null, element: JQuery | null): void;
    getRebindingKeyElement(): JQuery | null;
    isBindDown(key: KeyBind): boolean;
    getBindDownTime(key: KeyBind): number | undefined;
    isBindPressed(key: KeyBind, pressedBind: IBind): boolean;
    getBind(key: KeyBind): IBind;
    getKeyBind(key: KeyBind): number | null;
    getMouseBind(key: KeyBind): number | null;
    setBind(key: KeyBind, value: number, type: BindType): void;
    clearBind(key: KeyBind): void;
    getStringForKeyBind(key: KeyBind): string;
    getMousePositionFromMouseEvent(event: any): {
        x: number;
        y: number;
    };
    setupItemBackgrounds(): void;
    refreshStats(): void;
    shakeStat(stat: StatType): void;
    refreshAttributes(): void;
    loadQuickSlots(): void;
    isOverlayShown(): boolean;
    isConfirmOverlayShown(): boolean;
    isInputOverlayShown(): boolean;
    isOptionsOverlayShown(): boolean;
    isHelpOverlayShown(): boolean;
    isLoadingScreenShown(): boolean;
    isConfirmOverlayEnabled(): boolean;
    isInputOverlayEnabled(): boolean;
    isHelpOverlayEnabled(): boolean;
    isOptionsOverlayEnabled(): boolean;
    showTitleScreen(): void;
    refreshSlots(): void;
    displayConfirmDialog(message: string | UiMessage, buttons: UiMessage[], callback?: (selection: UiMessage) => void, force?: boolean): void;
    displayInputDialog(message: UiMessage, buttonText: UiMessage, inputText: string, placeholder: string, callback?: (input: string) => void): void;
    displayHint(player: IPlayer | undefined, hintType: HintType, force?: boolean): void;
    displayChatMessage(player: IPlayer, message: string): void;
    getCurrentHint(): HintType;
    setCurrentHint(hintType: HintType): void;
    isMouseMovementBlockerVisible(): boolean;
    updateMultiplayerElements(isConnected: boolean): void;
    toggleHelp(): void;
    hideHelpScreen(): void;
    tooltipRefresh(): void;
    refreshWorldTooltips(): void;
    messageIdToText(message: Message): string;
    getMessageHtml(messagePack: IMessagePack, tag?: string, textCase?: SentenceCaseStyle, log?: boolean, addedClass?: string): string;
    displayMessage(player: IPlayer | IPlayer[] | undefined, message: Message, messageType?: MessageType, ...args: any[]): void;
    displayMessagePack(player: IPlayer | IPlayer[] | undefined, messagePack: IMessagePack): void;
    getMessageCount(): number;
    removeOldestMessage(): void;
    updateMilestonesDialog(): void;
    updateSkillsDialog(): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent): void;
    getInventoryItemOrder(): any[];
    updateItem(item: IItem): void;
    hideActionsMenu(): void;
    openMapDialog(): void;
    closeMapDialog(): void;
    setFontStyle(): void;
    setOpacity(): void;
    updateKeybind(key: KeyBind, element: JQuery): void;
    addOptionsSection(elementId: string, sectionName: string): JQuery;
    removeOptionsSection(sectionName: string): void;
    addButton(elementId: string, buttonName: string, imagePath: string, tooltip: string, keyBind?: number): JQuery;
    removeButton(buttonName: string): void;
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    toggleDialog(dialog: JQuery): boolean;
    openDialog(dialog: JQuery): boolean;
    closeDialog(dialog: JQuery): boolean;
    setEquipSlot(equip: EquipType, itemId: number, internal?: boolean): void;
    setQuickSlot(quickSlot: number, itemId: number, internal?: boolean): void;
    refreshQuickSlots(): void;
    removeItemFromQuickSlot(itemId: number): void;
    removeItemFromEquipSlot(equip: EquipType): void;
    isManageModsVisible(): boolean;
    refreshModManager(): any;
    setObjectUrl(objectUrl: string): void;
    runHotKeys(): void;
    pressHotKey(hotKeyNumber: number): boolean;
    onGameEnd(showBlocker: boolean): void;
    highlight(selector?: string[] | null, onlyFirstElement?: boolean, timeout?: number): void;
    removeHighlights(): void;
    toggleUIDisplay(): void;
    getSerializationProperties(_: string): string[];
    onMove(): void;
    openContainer(container: IContainer, containerName?: string | null): void;
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
