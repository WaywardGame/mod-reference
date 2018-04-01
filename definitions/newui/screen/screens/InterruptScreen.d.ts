import { InterruptChoice } from "language/ILanguage";
import { UiApi } from "newui/INewUi";
import { InterruptOptions, InterruptType } from "newui/screen/screens/menu/menus/InterruptMenu";
import UiScreen from "newui/screen/UiScreen";
export default class InterruptScreen extends UiScreen {
    readonly interruptType: InterruptType | undefined;
    constructor(uiApi: UiApi);
    interrupt(options: InterruptOptions): Promise<InterruptChoice | string | boolean | void>;
    hideLoadingInterrupt(): Promise<void>;
}
