import { IUiElementOptions } from "newui/element/IUiElement";
import UiElement from "newui/element/UiElement";
import { UiApi } from "newui/INewUi";
export interface BlockRowData {
    childCount: number;
}
export declare class BlockRow extends UiElement {
    constructor(uiApi: UiApi, options?: IUiElementOptions);
}
