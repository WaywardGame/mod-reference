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
import { IComponent } from "newui/component/IComponent";
import { IVector2 } from "utilities/math/IVector";
export declare enum BindableType {
    Game = 0,
    Dialog = 1,
    Menu = 2,
    Developer = 3,
    Mod = 4
}
/**
 * Note: If you rename a Bindable and don't make a save conversion for it, the old binding will be lost.
 */
export declare enum Bindable {
    /**
     * Safe for `if` statements. Falsey!
     */
    None = 0,
    GameMoveDirection = 1,
    GameMoveToTile = 2,
    GameMoveToTilePreview = 3,
    GameMoveDown = 4,
    GameMoveLeft = 5,
    GameMoveRight = 6,
    GameMoveUp = 7,
    GameFaceDirection = 8,
    GameFaceDown = 9,
    GameFaceLeft = 10,
    GameFaceRight = 11,
    GameFaceUp = 12,
    GameIdle = 13,
    GameActions = 14,
    GameItemMove = 15,
    GameItemMenu = 16,
    GameItemQuickMove = 17,
    GameItemQuickMoveAll = 18,
    GameItemDrop = 19,
    GameItemDropAll = 20,
    GameItemEquipToggle = 21,
    GameHandToggleLeft = 22,
    GameHandToggleRight = 23,
    GameInspect = 24,
    GameMoreInformation = 25,
    GameZoomIn = 26,
    GameZoomOut = 27,
    GamePause = 28,
    GameSave = 29,
    GameFullscreen = 30,
    GameScreenshotMode = 31,
    GameQuickSlotClear = 32,
    GameQuickSlot1 = 33,
    GameQuickSlot2 = 34,
    GameQuickSlot3 = 35,
    GameQuickSlot4 = 36,
    GameQuickSlot5 = 37,
    GameQuickSlot6 = 38,
    GameQuickSlot7 = 39,
    GameQuickSlot8 = 40,
    GameQuickSlot9 = 41,
    GameQuickSlotToggle1 = 42,
    GameQuickSlotToggle2 = 43,
    GameQuickSlotToggle3 = 44,
    GameQuickSlotToggle4 = 45,
    GameQuickSlotToggle5 = 46,
    GameQuickSlotToggle6 = 47,
    GameQuickSlotToggle7 = 48,
    GameQuickSlotToggle8 = 49,
    GameQuickSlotToggle9 = 50,
    GameContextMenu1 = 51,
    GameContextMenu2 = 52,
    GameContextMenu3 = 53,
    GameContextMenu4 = 54,
    GameContextMenu5 = 55,
    GameContextMenu6 = 56,
    GameContextMenu7 = 57,
    GameContextMenu8 = 58,
    GameContextMenu9 = 59,
    GameContextMenu10 = 60,
    GameContextMenu11 = 61,
    GameContextMenu12 = 62,
    GameContextMenu13 = 63,
    GameContextMenu14 = 64,
    GameContextMenu15 = 65,
    GameContextMenu16 = 66,
    GameContextMenu17 = 67,
    GameContextMenu18 = 68,
    GameContextMenu19 = 69,
    GameContextMenu20 = 70,
    GameContextMenu21 = 71,
    GameContextMenu22 = 72,
    GameContextMenu23 = 73,
    GameContextMenu24 = 74,
    DialogCloseAll = 75,
    DialogOptions = 76,
    DialogHelp = 77,
    DialogMilestones = 78,
    DialogNotes = 79,
    DialogMessages = 80,
    DialogMessagesChatFocus = 81,
    DialogInventory = 82,
    DialogCrafting = 83,
    DialogDismantle = 84,
    DialogEquipment = 85,
    DialogSkills = 86,
    DialogQuests = 87,
    MenuEnter = 88,
    MenuNext = 89,
    MenuPrevious = 90,
    MenuUp = 91,
    MenuDown = 92,
    MenuLeft = 93,
    MenuRight = 94,
    MenuCancel = 95,
    MenuContextMenu = 96,
    DeveloperToggleDeveloperMode = 97,
    DeveloperToggleDeveloperTools = 98,
    DeveloperReloadGame = 99,
    DeveloperReloadAndContinueGame = 100
}
export declare enum BindingManagerEvent {
    BindsEnabled = "BindsEnabled"
}
export declare enum KeyModifier {
    Shift = 0,
    Alt = 1,
    Control = 2
}
export interface IBinding {
    /**
     * See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#Try_it_out, use `key` only if `code` is an empty string
     */
    key?: string;
    mouseButton?: number | "Up" | "Down";
    /**
     * Does not currently function
     */
    gamepadButton?: number;
    modifiers?: KeyModifier[];
}
export interface IBindings {
    [key: string]: IBinding | IBinding[];
}
export interface BindCatcherApi {
    time: number;
    mouseX: number;
    mouseY: number;
    mousePosition: IVector2;
    wasPressed(key: string): boolean;
    wasPressed(bind: Bindable): boolean;
    /** wasReleased is only updated if wasPressed is also checked */
    wasReleased(key: string): boolean;
    /** wasReleased is only updated if wasPressed is also checked */
    wasReleased(bind: Bindable): boolean;
    removePressState(key: string, removeInternal?: boolean): void;
    removePressState(bind: Bindable, removeInternal?: boolean): void;
    removeAllPressStates(removeInternal?: boolean): void;
    isDown(key: string): boolean;
    isDown(bind: Bindable): boolean;
    isAnythingDown(): boolean;
    timeDown(key: string): number;
    timeDown(bind: Bindable): number;
    isMouseWithin(element: Element | IComponent): boolean;
    isMouseWithin(element: Element | IComponent, mustBeTarget?: boolean): boolean;
    mouseStartWasWithin(element: Element | IComponent, mustBeTarget?: boolean): boolean;
}
