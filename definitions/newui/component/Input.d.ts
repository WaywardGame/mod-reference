import Component from "newui/component/Component";
import { IComponentOptions, TextOrTranslationData } from "newui/component/IComponent";
import { InputOptions } from "newui/component/IInput";
import { UiApi } from "newui/INewUi";
export declare enum InputEvent {
    Change = "Change",
    Done = "Done",
    Enter = "Enter",
    Escape = "Escape",
    Focus = "Focus",
    Blur = "Blur",
}
export default class Input extends Component {
    default: TextOrTranslationData;
    text: string;
    private options;
    private keydownEnter;
    private keydownEscape;
    constructor(uiApi: UiApi, options?: InputOptions & IComponentOptions);
    setOptions(options: InputOptions): void;
    focus(): void;
    blur(event?: Event): void;
    /**
     * Reset the text of the input to the default, or to the clearTo option if that was provided
     * @param useDefault Whether to use the default over clearTo
     */
    clear(useDefault?: boolean): void;
    private keydown(event);
    private change(eventOrText);
}
