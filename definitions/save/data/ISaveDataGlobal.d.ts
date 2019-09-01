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
import { DropLocation } from "entity/action/actions/Drop";
import { InspectType } from "game/inspection/IInspection";
import { GameMode, IGameOptions } from "game/options/IGameOptions";
import { ISerializedTranslation } from "language/Translation";
import { IBindings } from "newui/IBindingManager";
import { ISourceFilter } from "utilities/Log";
export interface IOptions {
    alternateContextMenu: boolean;
    alternatingDirectionMovement: boolean;
    alwaysShowMoreInformation: boolean;
    autoAttack: boolean;
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
    tooltipDelay: number;
    tooltips: {
        [key in InspectType]: boolean | undefined;
    };
    uiScale: number;
    useAdjacentContainers: boolean;
    useNewCraftingSystem: boolean;
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
    keyBinds: {
        [index: number]: number;
    };
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
    allowDiagonalMovement: boolean;
};
export interface IHighscore {
    name: string;
    message: ISerializedTranslation;
    turns: number;
    score: number;
    difficulty: GameMode;
    date: number;
    characterName: string;
    seed?: string | number;
    difficultyOptions?: IGameOptions;
}
export declare type IHighscoreOld = Partial<IHighscore> & {
    dailyChallenge: boolean;
    talent: number;
};
