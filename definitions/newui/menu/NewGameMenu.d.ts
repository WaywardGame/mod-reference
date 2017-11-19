import { UiApi } from "newui/INewUi";
import Menu from "newui/util/Menu";
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
    private inputPVP;
    constructor(uiApi: UiApi);
    refresh(): Promise<void>;
    create(): Promise<void>;
}
