import Menu from "newui/element/Menu";
import { UiApi } from "newui/INewUi";
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
