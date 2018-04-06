import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/element/Menu";
export default class ChangelogMenu extends Menu {
    private readonly headingVersionName;
    private readonly labelChangeCount;
    private readonly changesContainer;
    private lastVersion;
    constructor(uiApi: UiApi);
    private refresh();
    private showVersion(version?, loadingInterrupt?);
    private appendChangelog(title, cards?);
    private getChangelogText(html?);
    private sortCards(a, b);
}
