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
import { PlayerState } from "Enums";
import { Difficulty } from "game/Difficulty";
import { ISerializedTranslation } from "language/Translation";
import { IMultiplayerState } from "multiplayer/IMultiplayer";
import { IEnumInfo } from "utilities/enum/IEnum";
import IClientStore from "../clientStore/IClientStore";
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
    multiplayerState: IMultiplayerState;
    utilitiesEnumsAllocated: {
        [index: string]: IEnumInfo;
    };
    newui: {
        [index: string]: any;
    };
    clientStore: Map<string, IClientStore>;
}
export default ISaveData;
