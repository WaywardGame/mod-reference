import Component from "newui/component/Component";
import { IComponentOptions } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
export interface BlockRowData {
    childCount: number;
}
export declare class BlockRow extends Component {
    constructor(uiApi: UiApi, options?: IComponentOptions);
}
