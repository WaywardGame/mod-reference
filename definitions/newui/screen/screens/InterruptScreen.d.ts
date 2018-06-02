import { InterruptChoice } from "language/ILanguage";
import { UiApi } from "newui/INewUi";
import MenuScreen from "newui/screen/MenuScreen";
import { InterruptOptions, InterruptType } from "newui/util/IInterrupt";
export default class InterruptScreen extends MenuScreen {
    readonly interruptType: InterruptType | undefined;
    constructor(uiApi: UiApi);
    backOneMenu(): this;
    interrupt(options: InterruptOptions): Promise<InterruptChoice | string | boolean | void>;
    hideLoadingInterrupt(): Promise<void>;
}
