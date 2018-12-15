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
import { DropLocation, IKeyBind } from "Enums";
import { Difficulty } from "game/Difficulty";
import { ICrafted } from "game/IGame";
import { InspectType } from "game/inspection/IInspection";
import { ISerializedTranslation } from "language/Translation";
import { ModState } from "mod/IModInfo";
import { IBindings } from "newui/BindingManager";
import { ISavedCharacter } from "newui/screen/screens/menu/menus/character/Character";
import { IMilestoneData } from "player/IMilestone";
import { ICharacter } from "player/IPlayer";
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
    multiplayerPreviousGames: {
        [index: string]: ICharacter | undefined;
    };
    characters: ISavedCharacter[];
    newui: {
        [index: string]: any;
    };
    lastServerJoined: string | undefined;
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
    defaultCursor: boolean;
    developerMode: boolean;
    developerModeContextMenu: boolean;
    dialogOpacity: number;
    directionTurnDelay: number;
    dropLocation: DropLocation;
    dropOnGatherHarvest: boolean;
    enableAutoSave: boolean;
    fallBackToEnglish: boolean;
    fontStyle: boolean;
    fullscreen: boolean;
    hideEquippedHeadgear: boolean;
    keepSortActive: boolean;
    leftHand: boolean;
    mouseTurnDelay: number;
    musicPlaylist: MusicPlaylist;
    muteEffects: boolean;
    muteMusic: boolean;
    powerPreference: PowerMode;
    protectedCraftingItemContainers: boolean;
    protectedCraftingItems: boolean;
    realTimeTickSpeed: number;
    rightClickInspect: boolean;
    rightHand: boolean;
    shouldLoadLastSave: boolean;
    skipSplash: boolean;
    tooltips: {
        [key in InspectType]: boolean | undefined;
    };
    uiScale: number;
    useAdjacentContainers: boolean;
    visionMode: boolean;
    volumeEffects: number;
    volumeMusic: number;
    warnOnDangerousActions: boolean;
    warnWhenBreakingItems: boolean;
    warnWhenBreakingItemsOnCraft: boolean;
    windowMode: boolean;
    zoomLevel: number;
}
export declare enum MusicPlaylist {
    Ordered = 0,
    Shuffle = 1,
    Dynamic = 2
}
export declare enum PowerMode {
    Default = "default",
    LowPower = "low-power",
    HighPerformance = "high-performance"
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
    tooltipsCreatures: boolean;
    tooltipsDoodads: boolean;
    tooltipsNPCs: boolean;
    tooltipsTerrain: boolean;
    tooltipsItems: boolean;
};
export interface IHighscore {
    name: string;
    message: ISerializedTranslation;
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
