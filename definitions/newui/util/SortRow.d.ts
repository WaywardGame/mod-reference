import { UiApi, UiElementOptions } from "newui/INewUi";
import { IDropdownOption } from "newui/util/Dropdown";
import { LabelledRow } from "newui/util/LabelledRow";
import { Refreshable } from "newui/util/Refreshable";
import { SortDirection } from "save/ISaveManager";
export interface SortRowOptions<Sort> extends UiElementOptions {
    sortEnum: any;
    defaultSort: Sort;
    disabledSorts?: Sort[];
    getOption(sort: [string, Sort]): IDropdownOption<Sort>;
}
export declare enum SortRowEvent {
    Sort = "Sort",
}
export default class SortRow<Sort extends number, Data = {}> extends LabelledRow<Data> implements Refreshable {
    private _sort;
    private _sortDirection;
    private disabledSorts;
    private readonly dropdown;
    readonly sort: Sort;
    readonly sortDirection: SortDirection;
    constructor(uiApi: UiApi, options: SortRowOptions<Sort>);
    setDisabledSorts(val: Sort[], refresh?: boolean): this;
    refresh(): Promise<void>;
    triggerSort(): Promise<void>;
}
