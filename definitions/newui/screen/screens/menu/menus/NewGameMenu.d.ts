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
import ChoiceList, { Choice } from "newui/component/ChoiceList";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class NewGameMenu extends Menu {
    multiplayerMode: ChoiceList;
    choiceSingleplayer: Choice;
    choiceMultiplayer: Choice;
    private slot;
    private inputName;
    private inputNameRow;
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
    private choiceLobbyPrivate;
    private inputPVP;
    private maxPlayersRow;
    private tickSpeedRow;
    private buttonNext;
    private customGameOptionsMenu;
    private difficultyOptions;
    constructor(api: UiApi);
    create(): void;
    private updateDifficultyOptions;
    private refresh;
    private getStartClickHandler;
    private getPlayOptions;
    private getCustomGameOptionsMenu;
}
