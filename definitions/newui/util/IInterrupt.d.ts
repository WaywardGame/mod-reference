import { InterruptChoice } from "language/ILanguage";
import { TranslationGenerator } from "newui/component/IComponent";
import { IInput } from "newui/component/IInput";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
export declare enum InterruptType {
    Info = 0,
    Confirm = 1,
    Choice = 2,
    Input = 3,
    Loading = 4,
    Menu = 5
}
export interface InterruptOptions {
    type?: InterruptType;
    title?: TranslationGenerator;
    description?: TranslationGenerator;
    choices?: InterruptChoice[];
    menuId?: MenuId;
    args?: {
        [key: string]: any;
    };
    canCancel?: boolean;
    specialType?: string;
    input?(input: IInput): any;
}
