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
