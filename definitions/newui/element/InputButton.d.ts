import Button, { ButtonOptions } from "newui/element/Button";
import { InputOptions } from "newui/element/IInput";
import { IUiElementOptions } from "newui/element/IUiElement";
import { UiApi } from "newui/INewUi";
export interface InputButtonOptions extends ButtonOptions {
    input: InputOptions & IUiElementOptions;
}
export declare enum InputButtonEvent {
    Change = "Change",
    Done = "Done",
}
export default class InputButton<T = any> extends Button<T> {
    private readonly inputElement;
    private _editMode;
    editMode: boolean;
    constructor(uiApi: UiApi, options?: InputButtonOptions);
}
