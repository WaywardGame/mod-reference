/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
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
    Blur = "Blur",
    UpArrow = "UpArrow",
    DownArrow = "DownArrow"
}
export default class Input extends Component implements IRefreshable, IInput {
    default: (() => string) | undefined;
    text: string;
    private keydownEnter;
    private keydownEscape;
    private canBeEmpty;
    private clearTo;
    private placeholder;
    private shouldBlurWhenEnterPressed;
    private shouldBlurWhenEnterPressedAndEmpty;
    private hasChanged;
    readonly changed: boolean;
    constructor(uiApi: UiApi);
    setMaxLength(maxLength?: number): this;
    setCanBeEmpty(canBeEmpty?: boolean): this;
    setDefault(generator: () => string): this;
    setClearTo(clearTo?: () => string): this;
    setPlaceholder(generator: TranslationGenerator): this;
    setShouldBlurWhenEnterPressedAndEmpty(shouldBlurWhenEnterPressedAndEmpty?: boolean): this;
    setShouldBlurWhenEnterPressed(shouldBlurWhenEnterPressed?: boolean): this;
    refresh(): this;
    /**
     * Reset the text of the input to the default, or to the clearTo option if that was provided
     * @param useDefault Whether to use the default over clearTo
     */
    clear(useDefault?: boolean): this;
    focus(): void;
    blur(event?: Event): void;
    private keydown;
    private keyup;
    private change;
}
