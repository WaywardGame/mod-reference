import { Bindable } from "Enums";
import { BindCatcherApi } from "newui/BindingManager";
import { UiApi } from "newui/INewUi";
import Screen from "newui/screen/Screen";
export default class SplashScreen extends Screen {
    constructor(uiApi: UiApi);
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    private create;
    private showNext;
}
