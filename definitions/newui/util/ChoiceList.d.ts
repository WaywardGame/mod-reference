import { UiApi, UiElementOptions } from "newui/INewUi";
import { BlockRow } from "newui/util/BlockRow";
import { CheckButton, CheckButtonOptions } from "newui/util/CheckButton";
import { Refreshable } from "newui/util/Refreshable";
export declare enum ChoiceListEvent {
    Choose = "Selection",
}
export interface ChoiceListOptions<ChoiceType extends Choice = Choice> extends UiElementOptions {
    refresh?(): ChoiceType;
}
export default class ChoiceList<ChoiceType extends Choice = Choice> extends BlockRow implements Refreshable {
    private _selection;
    private readonly options;
    readonly choice: ChoiceType;
    constructor(uiApi: UiApi, options?: ChoiceListOptions<ChoiceType>);
    setChoices(choices: IterableOf<ChoiceType>): Promise<void>;
    refresh(): void;
    choose(chosen?: ChoiceType): void;
    findChoice(filter: (choice: ChoiceType) => boolean): ChoiceType | undefined;
}
export declare class Choice extends CheckButton {
    constructor(uiApi: UiApi, options?: CheckButtonOptions);
}
