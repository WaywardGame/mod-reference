import { InterruptChoice } from "language/ILanguage";
import { InterruptInputOptions, MenuId, TextOrTranslationData, UiApi } from "newui/INewUi";
import Menu from "newui/util/Menu";
export declare enum InterruptType {
    Info = 0,
    Confirm = 1,
    Choice = 2,
    Input = 3,
    Loading = 4,
    Menu = 5,
}
export interface InterruptOptions {
    type?: InterruptType;
    title?: TextOrTranslationData;
    description?: TextOrTranslationData;
    input?: InterruptInputOptions;
    choices?: InterruptChoice[];
    menuId?: MenuId;
    args?: {
        [key: string]: any;
    };
    canCancel?: boolean;
}
export declare enum InterruptMenuEvent {
    Resolve = "Resolve",
}
export default class InterruptMenu extends Menu {
    private _type;
    private interruptTitle;
    private interruptDescription;
    private input;
    private choiceRow;
    private loadingElement;
    readonly type: InterruptType;
    constructor(uiApi: UiApi);
    setOptions(options: InterruptOptions): Promise<void>;
    setText(title?: TextOrTranslationData, description?: TextOrTranslationData): void;
    choose(choice: InterruptChoice | string): Promise<void>;
    waitFor(): Promise<InterruptChoice | string | boolean | undefined>;
}
