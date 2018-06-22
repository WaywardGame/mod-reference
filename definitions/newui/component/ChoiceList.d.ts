import { BlockRow } from "newui/component/BlockRow";
import { CheckButton } from "newui/component/CheckButton";
import { IRefreshableValue } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
export declare enum ChoiceListEvent {
    Choose = "Selection"
}
export default class ChoiceList<C extends Choice = Choice> extends BlockRow implements IRefreshableValue<C> {
    private refreshMethod;
    private _selection;
    readonly choice: C;
    constructor(uiApi: UiApi);
    setChoices(...choices: ArrayOfTOrIterablesOfT<C>): this;
    refresh(): this;
    setRefreshMethod(refreshMethod: (choiceList: this) => C): this;
    choose(chosen?: C): void;
    findChoice(filter: (choice: C) => boolean): C | undefined;
    private onChoiceChange;
}
export declare class Choice<I extends string | number | undefined = string | number | undefined> extends CheckButton {
    readonly id: I;
    constructor(uiApi: UiApi, id: I);
}
