import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabGameplay extends Tab implements IRefreshable {
    private readonly refreshables;
    constructor(api: UiApi);
    refresh(): this;
    private addRefreshable(refreshable);
}
