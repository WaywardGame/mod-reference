import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabControls extends Tab implements IRefreshable {
    private readonly modBindingsTab;
    private readonly bindCatcher;
    private readonly bindSections;
    constructor(api: UiApi);
    refresh(): this;
    private filterBindRows;
    private getSelector;
}
