import ISaveData from "save/data/ISaveData";
import * as Utilities from "Utilities";
export default class SaveData implements ISaveData {
    gameSlotName: string;
    gameWon: boolean;
    gameBaseSeed: number | string;
    saveManagerSaveTime: number;
    modManagerSaveData: {
        [index: string]: any;
    };
    modManagerUnloadable: {
        [index: string]: {
            name: string;
            unloadable: boolean;
        };
    };
    utilitiesEnumsAllocated: {
        [index: string]: Utilities.Enums.IEnumInfo;
    };
}