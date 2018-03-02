import { IEnumInfo } from "utilities/enum/IEnum";
export interface ISaveData {
    gameSlotName: string;
    gameWon: boolean;
    gameBaseSeed: number | string;
    gameCreationTime: number;
    saveManagerOriginalVersion: string;
    gameThumbnail: string;
    saveManagerSaveTime: number;
    saveManagerTicks: number;
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
export default ISaveData;
