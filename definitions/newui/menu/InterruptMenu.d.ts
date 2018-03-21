import { InterruptChoice } from "language/ILanguage";
import Menu from "newui/element/Menu";
import { InterruptInputOptions, MenuId, TextOrTranslationData, UiApi } from "newui/INewUi";
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
    specialType?: string;
}
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
