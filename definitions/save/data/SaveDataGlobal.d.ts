import { ICrafted } from "game/IGame";
import IOptions from "game/IOptions";
import { ModState } from "mod/IModManager";
import { IMilestoneData } from "player/IMilestone";
import ISaveDataGlobal from "save/data/ISaveDataGlobal";
import { IDialogInfo } from "ui/IUi";
import * as Utilities from "Utilities";
export default class SaveDataGlobal implements ISaveDataGlobal {
    gameCrafted: {
        [index: number]: ICrafted;
    };
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
        [index: string]: Utilities.Enums.IEnumInfo;
    };
    savedDialogInfo: {
        [index: string]: IDialogInfo;
    };
}
