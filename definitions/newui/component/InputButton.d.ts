import Button from "newui/component/Button";
import Input from "newui/component/Input";
import { UiApi } from "newui/INewUi";
export declare enum InputButtonEvent {
    Change = "Change",
    Done = "Done"
}
export default class InputButton extends Button {
    private readonly inputElement;
    private _editMode;
    editMode: boolean;
    constructor(uiApi: UiApi, inputInitializer: (input: Input) => any);
    private onInputChange;
    private onInputDone;
}
