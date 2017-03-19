import ISaveData from "save/data/SaveData";
import { Enums } from "Utilities";
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
        [index: string]: Enums.IEnumInfoInternal;
    };
}
