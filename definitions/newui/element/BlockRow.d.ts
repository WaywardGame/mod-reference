import { IUiElementOptions } from "newui/element/IUiElement";
import UiElement from "newui/element/UiElement";
import { UiApi } from "newui/INewUi";
export interface BlockRowData {
    childCount: number;
}
export declare class BlockRow<T = any> extends UiElement<BlockRowData & T> {
    constructor(uiApi: UiApi, options?: IUiElementOptions);
}
