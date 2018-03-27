import Button, { ButtonOptions } from "newui/element/Button";
import { InputOptions } from "newui/element/Input";
import { UiApi, UiElementOptions } from "newui/INewUi";
export interface InputButtonOptions extends ButtonOptions {
    input: InputOptions & UiElementOptions;
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
