import { TextOrTranslationData, TranslationData, UiApi, UiElementOptions } from "newui/INewUi";
import UiElement from "newui/util/UiElement";
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
}
export default class Input<T = {}> extends UiElement<T & InputData> {
    default: TextOrTranslationData;
    text: string;
    private options;
    constructor(uiApi: UiApi, options?: InputOptions & UiElementOptions);
    setOptions(options: InputOptions): void;
    focus(): void;
    blur(): void;
    clear(): void;
}
