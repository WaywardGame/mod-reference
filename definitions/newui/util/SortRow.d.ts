import { UiApi, UiElementOptions } from "newui/INewUi";
import { LabelledRow } from "newui/util/LabelledRow";
import { TextOptions } from "newui/util/Text";
import { SortDirection } from "save/ISaveManager";
export interface SortRowOptions<Sort> extends UiElementOptions {
    sortEnum: any;
    defaultSort: Sort;
    disabledSorts?: Sort[];
    getOption(name: string, sort: Sort): TextOptions;
}
export declare enum SortRowEvent {
    Sort = "Sort",
}
export default class SortRow<Sort extends number, Data = {}> extends LabelledRow<Data> {
    private _sort;
    private _sortDirection;
    private _disabledSorts;
    private sortEnum;
    private dropdown;
    private getOption;
    readonly sort: Sort;
    readonly sortDirection: SortDirection;
    disabledSorts: Sort[];
    constructor(uiApi: UiApi, options: SortRowOptions<Sort>);
    private updateSorts();
}
