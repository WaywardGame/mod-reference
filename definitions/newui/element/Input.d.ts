import { InputOptions } from "newui/element/IInput";
import { IUiElementOptions, TextOrTranslationData } from "newui/element/IUiElement";
import UiElement from "newui/element/UiElement";
import { UiApi } from "newui/INewUi";
export declare enum InputEvent {
    Change = "Change",
    Done = "Done",
    Enter = "Enter",
    Escape = "Escape",
}
export default class Input extends UiElement {
    default: TextOrTranslationData;
    text: string;
    private options;
    constructor(uiApi: UiApi, options?: InputOptions & IUiElementOptions);
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
