import Component from "newui/component/Component";
import { UiApi } from "newui/INewUi";
export interface BlockRowData {
    childCount: number;
}
export declare class BlockRow extends Component {
    constructor(api: UiApi, elementType?: string);
}
