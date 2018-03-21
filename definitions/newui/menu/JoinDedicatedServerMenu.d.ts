import Menu from "newui/element/Menu";
import { UiApi } from "newui/INewUi";
export default class JoinDedicatedServerMenu extends Menu {
    private readonly inputServerIdentifier;
    constructor(uiApi: UiApi);
    private getOptions();
}
