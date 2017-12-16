import { UiApi, UiElementOptions } from "newui/INewUi";
import Button, { ButtonOptions } from "newui/util/Button";
import { InputOptions } from "newui/util/Input";
export interface InputButtonOptions extends ButtonOptions {
    input: InputOptions & UiElementOptions;
}
export declare enum InputButtonEvent {
    Change = "Change",
    Done = "Done",
}
export default class InputButton<T = {}> extends Button<T> {
    private inputElement;
    private _editMode;
    editMode: boolean;
    constructor(uiApi: UiApi, options?: InputButtonOptions);
}
