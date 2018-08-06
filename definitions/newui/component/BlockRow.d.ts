/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Component from "newui/component/Component";
import { UiApi } from "newui/INewUi";
export interface BlockRowData {
    childCount: number;
}
export declare enum ColumnType {
    Auto = "auto",
    Fill = "1fr"
}
export declare class BlockRow extends Component {
    constructor(api: UiApi, elementType?: string);
    setColumns(...columns: ColumnType[]): this;
}
