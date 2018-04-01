import Menu from "newui/element/Menu";
import { UiApi } from "newui/INewUi";
export default class MainMenu extends Menu {
    private continueGameButton;
    private friendsButton;
    private loadGameButton;
    private newGameButton;
    private playRow1;
    private playRow2;
    constructor(uiApi: UiApi);
    refresh(): Promise<void>;
    private create();
    private createDedicatedServer();
}
