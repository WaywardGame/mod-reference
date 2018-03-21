import { InterruptChoice } from "language/ILanguage";
import UiScreen from "newui/element/UiScreen";
import { UiApi } from "newui/INewUi";
import { InterruptOptions, InterruptType } from "newui/menu/InterruptMenu";
export default class InterruptScreen extends UiScreen {
    readonly interruptType: InterruptType | undefined;
    constructor(uiApi: UiApi);
    interrupt(options: InterruptOptions): Promise<InterruptChoice | string | boolean | void>;
    hideLoadingInterrupt(): Promise<void>;
}
