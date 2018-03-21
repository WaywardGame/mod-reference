import UiElement from "newui/element/UiElement";
import { UiApi, UiElementOptions } from "newui/INewUi";
export interface BlockRowData {
    childCount: number;
}
export declare class BlockRow<T = {}> extends UiElement<BlockRowData & T> {
    constructor(uiApi: UiApi, options?: UiElementOptions);
}
