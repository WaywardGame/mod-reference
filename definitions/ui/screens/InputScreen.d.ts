import BaseScreen from "ui/screens/BaseScreen";
export interface InputOptions {
    message: string;
    buttonText: string;
    inputText: string;
    placeholder: string;
    callback?: (input: string | undefined) => void;
}
export default class InputScreen extends BaseScreen {
    options: InputOptions;
    elementOverlay: JQuery;
    elementMessage: JQuery;
    elementControlRow: JQuery;
    selector(): string;
    bindElements(): void;
    onShow(options: InputOptions): void;
    onHide(): void;
    onKeyUp(event: JQueryEventObject): boolean | undefined;
    private onButtonClick(inputOverride?);
}
