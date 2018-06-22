import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class MainMenu extends Menu {
    private continueGameButton;
    private friendsButton;
    private loadGameButton;
    private newGameButton;
    private playRow1;
    private playRow2;
    private aboutMenu;
    private changelogMenu;
    private newsMenu;
    constructor(api: UiApi);
    protected onBeforeShow(): Promise<void>;
    private create;
    private checkAndShowGameInterrupts;
    private getAboutMenu;
    private getChangelogMenu;
    private getNewsMenu;
}
