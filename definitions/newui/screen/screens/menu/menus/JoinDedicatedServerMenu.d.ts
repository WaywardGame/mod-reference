import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class JoinDedicatedServerMenu extends Menu {
    private readonly serverInput;
    private readonly joinButton;
    constructor(uiApi: UiApi);
    private onShow();
    private onInputEnter(input);
    private onInputChange(input, text);
    private getOptions();
}
