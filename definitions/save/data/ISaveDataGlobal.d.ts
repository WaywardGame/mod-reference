import IOptions from "game/IOptions";
import { ModState } from "mod/IModManager";
import { IMilestoneData } from "player/IMilestone";
import { Enums } from "Utilities";
export interface ISaveDataGlobal {
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
        language: string | null;
    };
    utilitiesEnumsAllocated: {
        [index: string]: Enums.IEnumInfo;
    };
}
export default ISaveDataGlobal;
