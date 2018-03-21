import UiElement from "newui/element/UiElement";
import { TextOrTranslationData, TranslationData, UiApi, UiElementOptions } from "newui/INewUi";
export interface InputOptions {
    placeholder?: TextOrTranslationData;
    default?: TextOrTranslationData;
    maxLength?: number;
    canBeEmpty?: boolean;
    clearTo?: TextOrTranslationData;
}
export interface InputData {
    translationData: TranslationData;
}
export declare enum InputEvent {
    Change = "Change",
    Done = "Done",
    Enter = "Enter",
    Escape = "Escape",
}
export default class Input<T = {}> extends UiElement<T & InputData> {
    default: TextOrTranslationData;
    text: string;
    private options;
    constructor(uiApi: UiApi, options?: InputOptions & UiElementOptions);
    setOptions(options: InputOptions): void;
    focus(): void;
    blur(): void;
    /**
     * Reset the text of the input to the default, or to the clearTo option if that was provided
     * @param useDefault Whether to use the default over clearTo
     */
    clear(useDefault?: boolean): void;
    private change(value?);
}
