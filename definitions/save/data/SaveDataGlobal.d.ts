import { ICrafted } from "game/IGame";
import { ModState } from "mod/IModInfo";
import { ISavedCharacter } from "newui/screen/screens/menu/menus/character/Character";
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
    options: IOptions;
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
