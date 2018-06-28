import { Bindable } from "Enums";
import { BindCatcherApi } from "newui/BindingManager";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class HelpMenu extends Menu {
    constructor(api: UiApi);
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
}
