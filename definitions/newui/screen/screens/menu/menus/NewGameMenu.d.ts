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
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class NewGameMenu extends Menu {
    private slot;
    private inputName;
    private inputNameRow;
    private inputSeed;
    private inputSeedRow;
    private difficulty;
    private multiplayerMode;
    private choiceSingleplayer;
    private choiceMultiplayer;
    private turnMode;
    private choiceTurnsManual;
    private choiceTurnsRealTime;
    private lobbyType;
    private choiceLobbyFriends;
    private choiceLobbyPublic;
    private choiceLobbyPrivate;
    private inputPVP;
    private maxPlayersRow;
    private tickSpeedRow;
    private buttonNext;
    constructor(api: UiApi);
    create(): void;
    private refresh;
    private getStartClickHandler;
    private getPlayOptions;
}
