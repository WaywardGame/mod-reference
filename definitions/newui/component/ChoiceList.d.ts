/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { BlockRow } from "newui/component/BlockRow";
import { CheckButton } from "newui/component/CheckButton";
import { IDisableable } from "newui/component/IComponent";
import { IRefreshableValue } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
export declare enum ChoiceListEvent {
    Choose = "Selection"
}
export default class ChoiceList<C extends Choice = Choice> extends BlockRow implements IRefreshableValue<C>, IDisableable {
    private refreshMethod;
    private _selection;
    readonly choice: C;
    private _disabled;
    readonly disabled: boolean;
    constructor(uiApi: UiApi);
    setDisabled(val: boolean): this;
    setChoices(...choices: ArrayOfIterablesOfOr<C>): this;
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
