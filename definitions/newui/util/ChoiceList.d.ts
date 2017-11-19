import { UiApi, UiElementOptions } from "../INewUi";
import { BlockRow } from "./BlockRow";
import { CheckButton, CheckButtonOptions } from "./CheckButton";
export declare enum ChoiceListEvent {
    Choose = "Selection",
}
export default class ChoiceList extends BlockRow {
    private _selection;
    readonly choice: Choice;
    constructor(uiApi: UiApi, options?: UiElementOptions);
    setChoices(choices: Choice[]): Promise<void>;
    choose(chosen?: Choice): void;
    findChoice(filter: (choice: Choice) => boolean): Choice | undefined;
}
export declare class Choice extends CheckButton {
    constructor(uiApi: UiApi, options?: CheckButtonOptions);
}
