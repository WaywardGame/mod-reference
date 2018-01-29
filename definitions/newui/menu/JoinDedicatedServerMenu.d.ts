import { UiApi } from "newui/INewUi";
import Menu from "newui/util/Menu";
export default class JoinDedicatedServerMenu extends Menu {
    private readonly inputServerIdentifier;
    constructor(uiApi: UiApi);
    private getOptions();
}
