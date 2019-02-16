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
import { Difficulty, IDifficultyOptions } from "game/Difficulty";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class NewGameMenu extends Menu {
    private inputName;
    private inputSeed;
    private inputSeedRow;
    private difficulty;
    private turnMode;
    private choiceTurnModeManual;
    private choiceTurnModeRealTime;
    private choiceTurnModeSimulated;
    private lobbyType;
    private choiceLobbyFriends;
    private choiceLobbyPublic;
    private inputPVP;
    private maxPlayersRow;
    private tickSpeedRow;
    private buttonNext;
    private customGameOptionsMenu;
    private multiplayerMode;
    private choiceMultiplayer;
    private choiceSingleplayer;
    private slot;
    private difficultyOptions?;
    private wasEditedPreShown;
    constructor(api: UiApi);
    create(): void;
    setSeed(seed: string | number, lock?: boolean): this;
    setDifficulty(difficulty: Difficulty, lock?: boolean): this;
    setDifficultyOptions(options: IDifficultyOptions): this;
    setMultiplayer(): this;
    private updateDifficulty;
    private refresh;
    private refreshAsync;
    private getStartClickHandler;
    private getPlayOptions;
    private getCustomGameOptionsMenu;
    private getDifficultyOptions;
    private getDefaultSaveName;
}
