import { IHighscore } from "Enums";
import { ICrafted } from "game/IGame";
import IOptions from "game/IOptions";
import { ModState } from "mod/IModManager";
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
}
export default ISaveDataGlobal;
