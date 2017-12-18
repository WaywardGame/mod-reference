import { UiApi } from "newui/INewUi";
import Menu from "newui/util/Menu";
export default class ChangelogMenu extends Menu {
    private headingVersionName;
    private labelChangeCount;
    private changesContainer;
    private lastVersion;
    constructor(uiApi: UiApi);
    private refresh();
    private showVersion(version?, loadingInterrupt?);
    private appendChangelog(title, cards?);
    private sortCards(a, b);
}
