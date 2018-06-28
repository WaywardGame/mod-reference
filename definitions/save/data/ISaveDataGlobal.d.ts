import { Difficulty, DropLocation, IKeyBind } from "Enums";
import { ICrafted } from "game/IGame";
import { ModState } from "mod/IModInfo";
import { IBindings } from "newui/BindingManager";
import { ISavedCharacter } from "newui/screen/screens/menu/menus/character/Character";
import { IMilestoneData } from "player/IMilestone";
import { IDialogInfo } from "ui/IUi";
import { IEnumInfo } from "utilities/enum/IEnum";
import { ISourceFilter } from "utilities/Log";
export interface ISaveDataGlobal {
    gameCrafted: {
        [index: number]: ICrafted;
    };
    gameLastPlayedVersion: string;
    gameHighscores: IHighscore[];
    gamePlayedCount: number;
    playerMilestoneData: {
        [index: number]: IMilestoneData | undefined;
    };
    options: IOptions;
    modManagerModState: {
        [index: string]: ModState;
    };
    modManagerSaveData: {
        [index: string]: any;
    };
    languageManagerSaveData: {
        language?: string;
    };
    utilitiesEnumsAllocated: {
        [index: string]: IEnumInfo;
    };
    savedDialogInfo: {
        [index: string]: IDialogInfo;
    };
    multiplayerBannedPlayers: string[];
    characters: ISavedCharacter[];
    newui: {
        [index: string]: any;
    };
    /**
     * Resets all options to default
     */
    resetOptions(): void;
    /**
     * Resets all milestone progress
     */
    resetMilestones(): void;
}
export default ISaveDataGlobal;
export interface IOptions {
    allowDiagonalMovement: boolean;
    alternateContextMenu: boolean;
    alwaysShowMoreInformation: boolean;
    autoGatherHarvest: boolean;
    autoPickup: boolean;
    bindings: IBindings;
    consoleLogSourceFilter: ISourceFilter;
    currentGame: number;
    developerMode: boolean;
    developerModeContextMenu: boolean;
    dialogOpacity: number;
    directionTurnDelay: number;
    dropLocation: DropLocation;
    dropOnGatherHarvest: boolean;
    fontStyle: boolean;
    fullscreen: boolean;
    hideEquippedHeadgear: boolean;
    keepSortActive: boolean;
    leftHand: boolean;
    muteEffects: boolean;
    muteMusic: boolean;
    protectedCraftingItems: boolean;
    realTimeTickSpeed: number;
    rightClickInspect: boolean;
    rightHand: boolean;
    shouldLoadLastSave: boolean;
    skipSplash: boolean;
    tooltipsCreatures: boolean;
    tooltipsDoodads: boolean;
    tooltipsItems: boolean;
    tooltipsNPCs: boolean;
    tooltipsTerrain: boolean;
    uiScale: number;
    visionMode: boolean;
    volumeEffects: number;
    volumeMusic: number;
    warnOnDangerousActions: boolean;
    warnWhenBreakingItems: boolean;
    warnWhenBreakingItemsOnCraft: boolean;
    windowMode: boolean;
    zoomLevel: number;
}
export declare type IOptionsOld = Partial<IOptions> & {
    keyBinds: IKeyBind;
    directionTurnDelay: boolean;
    developerLogging: boolean;
    hints: boolean;
    skipIntro: boolean;
    worldTooltips: boolean;
    dropUnderYourself: boolean;
    openNotesAutomatically: boolean;
};
export interface IHighscore {
    name: string;
    message: string;
    turns: number;
    score: number;
    difficulty: Difficulty;
    date: number;
    characterName: string;
}
export declare type IHighscoreOld = Partial<IHighscore> & {
    dailyChallenge: boolean;
    talent: number;
};
