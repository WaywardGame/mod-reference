import { Difficulty, DropLocation, IBindArray, IKeyBind, IModBindArray } from "Enums";
import { ICrafted } from "game/IGame";
import { ModState } from "mod/IModManager";
import { IBindings } from "newui/BindingManager";
import { ICharacter } from "newui/util/Character";
import { IMilestoneData } from "player/IMilestone";
import { IDialogInfo } from "ui/IUi";
import * as Utilities from "Utilities";
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
        [index: string]: Utilities.Enums.IEnumInfo;
    };
    savedDialogInfo: {
        [index: string]: IDialogInfo;
    };
    multiplayerBannedPlayers: string[];
    characters: ICharacter[];
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
    alternateContextMenu: boolean;
    autoGather: boolean;
    autoPickup: boolean;
    binds: IBindArray;
    bindings: IBindings;
    currentGame: number;
    developerMode: boolean;
    developerModeContextMenu: boolean;
    dialogOpacity: number;
    directionTurnDelay: number;
    dropOnGather: boolean;
    dropLocation: DropLocation;
    fontStyle: boolean;
    fullscreen: boolean;
    keepSortActive: boolean;
    leftHand: boolean;
    modBinds: IModBindArray;
    muteEffects: boolean;
    muteMusic: boolean;
    protectedCraftingItems: boolean;
    realTimeTickSpeed: number;
    rightClickInspect: boolean;
    rightHand: boolean;
    screenshotMode: boolean;
    skipSplash: boolean;
    tooltipsCreatures: boolean;
    tooltipsDoodads: boolean;
    tooltipsItems: boolean;
    tooltipsTerrain: boolean;
    uiScale: number;
    visionMode: boolean;
    volumeEffects: number;
    volumeMusic: number;
    warnOnDangerousActions: boolean;
    warnWhenBreakingItems: boolean;
    warnWhenBreakingItemsOnCraft: boolean;
    alwaysShowMoreInformation: boolean;
    windowMode: boolean;
    zoomLevel: number;
    openNotesAutomatically: boolean;
}
export declare type IOptionsOld = Partial<IOptions> & {
    keyBinds: IKeyBind;
    directionTurnDelay: boolean;
    developerLogging: boolean;
    hints: boolean;
    skipIntro: boolean;
    worldTooltips: boolean;
    dropUnderYourself: boolean;
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
