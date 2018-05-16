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
    constructor(uiApi: UiApi);
    refresh(): Promise<void>;
    create(): Promise<void>;
    private getPlayOptions();
}
