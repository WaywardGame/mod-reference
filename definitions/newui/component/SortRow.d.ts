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
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import Button from "newui/component/Button";
import { LabelledRow } from "newui/component/LabelledRow";
import { IRefreshableValue } from "newui/component/Refreshable";
import { SortDirection } from "save/ISaveManager";
export interface SortRowData<Sort> {
    sortEnum: any;
    defaultSort: Sort;
    initializeOption(button: Button, sort: [string, Sort]): any;
}
interface ISortRowEvents<S extends number> extends Events<LabelledRow> {
    /**
     * @param sort The sort type (value in the sort enum)
     * @param direction a SortDirection
     */
    sort(sort: S, direction: SortDirection): any;
}
export default class SortRow<S extends number> extends LabelledRow implements IRefreshableValue<SortRowData<S>> {
    event: IEventEmitter<this, ISortRowEvents<S>>;
    private _sort;
    private _sortDirection;
    private disabledSorts;
    private readonly dropdown;
    private refreshMethod;
    readonly sort: S;
    readonly sortDirection: SortDirection;
    constructor();
    setDisabledSorts(val: S[], refresh?: boolean): this;
    setRefreshMethod(refresh: () => SortRowData<S>): this;
    refresh(): this;
    triggerSort(): void;
    triggerSortAsync(): Promise<import("../../utilities/stream/Stream").default<any>>;
}
export {};
