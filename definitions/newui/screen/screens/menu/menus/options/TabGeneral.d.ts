import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabGeneral extends Tab implements IRefreshable {
    private readonly skipSplash;
    private readonly language;
    constructor(api: UiApi);
    refresh(): this;
    private toggleSkipSplash;
    private onLanguageSelect;
    private getLanguageDropdownData;
}
