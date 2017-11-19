import { TextOrTranslationData, UiApi } from "../INewUi";
import Button, { ButtonOptions } from "./Button";
import { Refreshable } from "./Refreshable";
export interface CheckButtonOptions extends ButtonOptions {
    effect?: never;
    checked?: boolean;
    description?: TextOrTranslationData;
    refresh?(): boolean;
    onChange?(checkButton: CheckButton, checked: boolean): Promise<boolean | void> | void;
}
export declare enum CheckButtonEvent {
    Change = "Change",
}
export declare class CheckButton<T = {}> extends Button<T> implements Refreshable {
    private _checked;
    private _refresh;
    checked: boolean;
    constructor(uiApi: UiApi, options?: CheckButtonOptions);
    setChecked(checked: boolean, triggerEvent?: boolean): Promise<boolean>;
    toggleChecked(): void;
    refresh(): void;
}
