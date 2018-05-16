import Button, { ButtonOptions } from "newui/component/Button";
import { IComponentOptions } from "newui/component/IComponent";
import { InputOptions } from "newui/component/IInput";
import { UiApi } from "newui/INewUi";
export interface InputButtonOptions extends ButtonOptions {
    input: InputOptions & IComponentOptions;
}
export declare enum InputButtonEvent {
    Change = "Change",
    Done = "Done",
}
export default class InputButton extends Button {
    private readonly inputElement;
    private _editMode;
    editMode: boolean;
    constructor(uiApi: UiApi, options?: InputButtonOptions);
}
