import IOptions from "game/IOptions";
import { ModState } from "mod/IModManager";
import { IMilestoneData } from "player/IMilestone";
import ISaveDataGlobal from "save/data/ISaveDataGlobal";
import { Enums } from "Utilities";
export default class SaveDataGlobal implements ISaveDataGlobal {
    gameCrafted: {
        [index: number]: boolean;
    };
    gameNewCrafted: {
        [index: number]: boolean;
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
        [index: string]: Enums.IEnumInfo;
    };
}
