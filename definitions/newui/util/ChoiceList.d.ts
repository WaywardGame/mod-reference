import { Refreshable } from "newui/util/Refreshable";
import { UiApi, UiElementOptions } from "../INewUi";
import { BlockRow } from "./BlockRow";
import { CheckButton, CheckButtonOptions } from "./CheckButton";
export declare enum ChoiceListEvent {
    Choose = "Selection",
}
export interface ChoiceListOptions extends UiElementOptions {
    refresh?(): Choice;
}
export default class ChoiceList extends BlockRow implements Refreshable {
    private _selection;
    private options;
    readonly choice: Choice;
    constructor(uiApi: UiApi, options?: ChoiceListOptions);
    setChoices(choices: Choice[]): Promise<void>;
    refresh(): void;
    choose(chosen?: Choice): void;
    findChoice(filter: (choice: Choice) => boolean): Choice | undefined;
}
export declare class Choice extends CheckButton {
    constructor(uiApi: UiApi, options?: CheckButtonOptions);
}
