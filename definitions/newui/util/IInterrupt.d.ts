import { InterruptChoice } from "language/ILanguage";
import { TextOrTranslationData } from "newui/component/IComponent";
import { InputOptions } from "newui/component/IInput";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
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
export declare type InterruptInputOptions = InputOptions & InterruptOptionsCanCancel;
export interface InterruptOptionsCanCancel {
    canCancel?: boolean;
}
