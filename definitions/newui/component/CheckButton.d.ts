import Button, { ButtonOptions } from "newui/component/Button";
import { TextOrTranslationData } from "newui/component/IComponent";
import { Refreshable } from "newui/component/Refreshable";
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
    private _refresh;
    checked: boolean;
    constructor(uiApi: UiApi, options?: CheckButtonOptions);
    setChecked(checked: boolean, triggerEvent?: boolean): Promise<boolean>;
    toggleChecked(): void;
    refresh(): this;
    refresh(refreshMethod: () => boolean): this;
    getText(): string | undefined;
    setText(text: TextOrTranslationData, refreshTranslationData?: boolean): this;
}
