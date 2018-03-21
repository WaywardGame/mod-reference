import { DropLocation, IBindArray, IModBindArray } from "Enums";
import { ICrafted } from "game/IGame";
import { ModState } from "mod/IModInfo";
import { IBindings } from "newui/BindingManager";
import { ICharacter } from "newui/element/Character";
import { IMilestoneData } from "player/IMilestone";
import ISaveDataGlobal, { IHighscore, IOptions } from "save/data/ISaveDataGlobal";
import { IDialogInfo } from "ui/IUi";
import { IEnumInfo } from "utilities/enum/IEnum";
export default class SaveDataGlobal implements ISaveDataGlobal {
    static defaultOptions: IOptions;
    gameCrafted: {
        [index: number]: ICrafted;
    };
    gameLastPlayedVersion: string;
    gameHighscores: IHighscore[];
    gamePlayedCount: number;
    options: {
        alternateContextMenu: boolean;
        alwaysShowMoreInformation: boolean;
        autoGather: boolean;
        autoPickup: boolean;
        bindings: IBindings;
        binds: IBindArray;
        currentGame: number;
        developerMode: boolean;
        developerModeContextMenu: boolean;
        dialogOpacity: number;
        directionTurnDelay: number;
        dropLocation: DropLocation;
        dropOnGather: boolean;
        fontStyle: boolean;
        fullscreen: boolean;
        hideEquippedHeadgear: boolean;
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
        openNotesAutomatically: boolean;
    };
    playerMilestoneData: {
        [index: number]: IMilestoneData | undefined;
    };
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
    characters: ICharacter[];
    /**
     * Resets all options to default
     */
    resetOptions(): void;
    /**
     * Resets all milestone progress
     */
    resetMilestones(): void;
    private static cloneDefaultOptions();
}
