import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class ChangelogMenu extends Menu {
    private readonly headingVersionName;
    private readonly labelChangeCount;
    private readonly changesContainer;
    private lastVersion;
    constructor(uiApi: UiApi);
    show(): this;
    private refresh();
    private showVersion(version?, loadingInterrupt?);
    private appendChangelog(title, cards?);
    private getChangelogText(html?);
    private sortCards(a, b);
}
