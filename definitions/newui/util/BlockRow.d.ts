import { UiApi, UiElementOptions } from "newui/INewUi";
import UiElement from "newui/util/UiElement";
export interface BlockRowData {
    childCount: number;
}
export declare class BlockRow<T = {}> extends UiElement<BlockRowData & T> {
    constructor(uiApi: UiApi, options?: UiElementOptions);
}
