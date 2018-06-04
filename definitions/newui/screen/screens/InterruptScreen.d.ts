import { InterruptChoice } from "language/ILanguage";
import { UiApi } from "newui/INewUi";
import MenuScreen from "newui/screen/screens/menu/component/MenuScreen";
import { InterruptOptions, InterruptType } from "newui/util/IInterrupt";
export default class InterruptScreen extends MenuScreen {
    readonly interruptType: InterruptType | undefined;
    private canBeInstant;
    constructor(uiApi: UiApi);
    backOneMenu(): this;
    interrupt(options: InterruptOptions): Promise<InterruptChoice | string | boolean | void>;
    hideLoadingInterrupt(): Promise<void>;
}
