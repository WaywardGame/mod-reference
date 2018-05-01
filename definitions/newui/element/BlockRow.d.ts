import Component from "newui/element/Component";
import { IComponentOptions } from "newui/element/IComponent";
import { UiApi } from "newui/INewUi";
export interface BlockRowData {
    childCount: number;
}
export declare class BlockRow extends Component {
    constructor(uiApi: UiApi, options?: IComponentOptions);
}
