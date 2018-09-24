/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { Difficulty, PlayerState } from "Enums";
import { ISerializedTranslation } from "language/Translation";
import { IEnumInfo } from "utilities/enum/IEnum";
export interface ISaveData {
    gameSlotName: string;
    gameState: PlayerState.Won | PlayerState.Ghost | PlayerState.None;
    gameBaseSeed: number | string;
    gameCreationTime: number;
    gameThumbnail: string;
    saveManagerSaveTime: number;
    saveManagerTicks: number;
    saveManagerDifficulty: Difficulty;
    saveManagerScore: number;
    saveManagerOriginalVersion: string;
    saveManagerDeathBy: ISerializedTranslation;
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
    newui: {
        [index: string]: any;
    };
}
export default ISaveData;
