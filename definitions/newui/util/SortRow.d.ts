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
    private readonly sortEnum;
    private readonly dropdown;
    private readonly getOption;
    readonly sort: Sort;
    readonly sortDirection: SortDirection;
    disabledSorts: Sort[];
    /**
     * After creating a SortRow, don't forget to call row.init(), this will call the default sort.
     * It's not part of the constructor in order to allow creating & appending the SortRow,
     * creating all the elements which will be sorted, and then sorting them afterwards.
     */
    constructor(uiApi: UiApi, options: SortRowOptions<Sort>);
    /**
     * Should be called sometime after creating the SortRow.
     * This method will add the sort options to the dropdown, and in doing so call the default sort.
     * It's not part of the constructor in order to allow creating & appending the SortRow,
     * creating all the elements which will be sorted, and then sorting them afterwards.
     */
    init(): Promise<void>;
    private updateSorts();
}
