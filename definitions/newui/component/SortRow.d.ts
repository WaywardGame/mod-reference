import Button from "newui/component/Button";
import { LabelledRow } from "newui/component/LabelledRow";
import { IRefreshableValue } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { SortDirection } from "save/ISaveManager";
export interface SortRowData<Sort> {
    sortEnum: any;
    defaultSort: Sort;
    initializeOption(button: Button, sort: [string, Sort]): any;
}
export declare enum SortRowEvent {
    Sort = "Sort"
}
export default class SortRow<Sort extends number> extends LabelledRow implements IRefreshableValue<SortRowData<Sort>> {
    private _sort;
    private _sortDirection;
    private disabledSorts;
    private readonly dropdown;
    private refreshMethod;
    readonly sort: Sort;
    readonly sortDirection: SortDirection;
    constructor(uiApi: UiApi);
    setDisabledSorts(val: Sort[], refresh?: boolean): this;
    setRefreshMethod(refresh: () => SortRowData<Sort>): this;
    refresh(): this;
    triggerSort(): Promise<void>;
}
