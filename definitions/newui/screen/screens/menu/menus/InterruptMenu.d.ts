import { InterruptChoice } from "language/ILanguage";
import { TextOrTranslationData } from "newui/element/IComponent";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/element/Menu";
import { InterruptOptions, InterruptType } from "newui/util/IInterrupt";
export declare enum InterruptMenuEvent {
    Resolve = "Resolve",
}
export default class InterruptMenu extends Menu {
    private _type;
    private readonly interruptTitle;
    private readonly interruptDescription;
    private readonly input;
    private readonly choiceRow;
    private readonly loadingElement;
    private readonly settingOptionsQueue;
    private isResolved;
    readonly type: InterruptType;
    constructor(uiApi: UiApi);
    setOptions(options: InterruptOptions): Promise<void>;
    setText(title?: TextOrTranslationData, description?: TextOrTranslationData): void;
    cancelInterrupt(): Promise<void>;
    choose(choice: InterruptChoice | string): Promise<void>;
    waitFor(): Promise<InterruptChoice | string | boolean | undefined>;
}
