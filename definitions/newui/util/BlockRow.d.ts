import { UiApi, UiElementOptions } from "../INewUi";
import UiElement from "./UiElement";
export interface BlockRowData {
    childCount: number;
}
export declare class BlockRow<T = {}> extends UiElement<BlockRowData & T> {
    constructor(uiApi: UiApi, options?: UiElementOptions);
}
