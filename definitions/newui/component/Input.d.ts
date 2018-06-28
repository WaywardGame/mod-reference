import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import { IInput } from "newui/component/IInput";
import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
export declare enum InputEvent {
    Change = "Change",
    Done = "Done",
    Enter = "Enter",
    Escape = "Escape",
    Focus = "Focus",
    Blur = "Blur"
}
export default class Input extends Component implements IRefreshable, IInput {
    default: (() => string) | undefined;
    text: string;
    private keydownEnter;
    private keydownEscape;
    private canBeEmpty;
    private clearTo;
    private placeholder;
    private shouldBlurWhenEnterPressedAndEmpty;
    constructor(uiApi: UiApi);
    setMaxLength(maxLength?: number): this;
    setCanBeEmpty(canBeEmpty?: boolean): this;
    setDefault(generator: () => string): this;
    setClearTo(clearTo?: () => string): this;
    setPlaceholder(generator: TranslationGenerator): this;
    setShouldBlurWhenEnterPressedAndEmpty(shouldBlurWhenEnterPressedAndEmpty?: boolean): this;
    refresh(): this;
    /**
     * Reset the text of the input to the default, or to the clearTo option if that was provided
     * @param useDefault Whether to use the default over clearTo
     */
    clear(useDefault?: boolean): void;
    focus(): void;
    blur(event?: Event): void;
    private keydown;
    private change;
}
