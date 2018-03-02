import ISaveData from "save/data/ISaveData";
import { IEnumInfo } from "utilities/enum/IEnum";
export declare const saveDataVersionUnknown = "Unknown";
export default class SaveData implements ISaveData {
    gameSlotName: string;
    gameWon: boolean;
    gameBaseSeed: number | string;
    gameCreationTime: number;
    gameThumbnail: string;
    saveManagerSaveTime: number;
    saveManagerTicks: number;
    saveManagerOriginalVersion: string;
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
        [index: string]: IEnumInfo;
    };
}
