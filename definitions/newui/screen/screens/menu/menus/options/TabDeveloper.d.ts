import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabDeveloper extends Tab implements IRefreshable {
    private readonly refreshables;
    constructor(api: UiApi);
    refresh(): this;
    private addRefreshable;
    private toggleLogSource;
    private toggleDeveloperTools;
    private openLogsFolder;
    private toggleContextMenu;
    private toggleDeveloperMode;
    private reloadGame;
}
