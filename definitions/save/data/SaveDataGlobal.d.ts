/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ICrafted } from "game/IGame";
import { ModState } from "mod/IModInfo";
import { ISavedCharacter } from "newui/screen/screens/menu/menus/character/Character";
import { IMilestoneData } from "player/IMilestone";
import { ICharacter } from "player/IPlayer";
import ISaveDataGlobal, { IHighscore, IOptions } from "save/data/ISaveDataGlobal";
import { IDialogInfo } from "ui/IUi";
import { IEnumInfo } from "utilities/enum/IEnum";
export default class SaveDataGlobal implements ISaveDataGlobal {
    static defaultOptions: IOptions;
    gameCrafted: {
        [index: number]: ICrafted;
    };
    gameLastPlayedVersion: string;
    gameHighscores: IHighscore[];
    gamePlayedCount: number;
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
        [index: string]: IEnumInfo;
    };
    savedDialogInfo: {
        [index: string]: IDialogInfo;
    };
    multiplayerBannedPlayers: string[];
    multiplayerPreviousGames: {
        [index: string]: ICharacter | undefined;
    };
    characters: ISavedCharacter[];
    newui: {
        [index: string]: any;
    };
    lastServerJoined: string | undefined;
    /**
     * Resets all options to default
     */
    resetOptions(): void;
    /**
     * Resets all milestone progress
     */
    resetMilestones(): void;
}
