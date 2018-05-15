import Button, { ButtonOptions } from "newui/element/Button";
import { TextOrTranslationData } from "newui/element/IComponent";
import { Refreshable } from "newui/element/Refreshable";
import { UiApi } from "newui/INewUi";
export interface CheckButtonOptions extends ButtonOptions {
    onActivate?: never;
    checked?: boolean;
    description?: TextOrTranslationData;
    refresh?(): boolean;
    onChange?(checkButton: CheckButton, checked: boolean): Promise<boolean | void> | void;
}
export declare enum CheckButtonEvent {
    Change = "Change",
}
export declare class CheckButton extends Button implements Refreshable {
    private readonly heading;
    private _checked;
    private readonly _refresh;
    checked: boolean;
    constructor(uiApi: UiApi, options?: CheckButtonOptions);
    setChecked(checked: boolean, triggerEvent?: boolean): Promise<boolean>;
    toggleChecked(): void;
    refresh(): void;
    getText(): string | undefined;
    setText(text: TextOrTranslationData, refreshTranslationData?: boolean): this;
}
