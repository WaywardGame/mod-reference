import { BlockRow } from "newui/element/BlockRow";
import { IUiElementOptions, TextOrTranslationData } from "newui/element/IUiElement";
import { UiApi } from "newui/INewUi";
export interface LabelledRowOptions extends IUiElementOptions {
    label?: TextOrTranslationData;
}
export declare class LabelledRow<T = any> extends BlockRow<T> {
    private readonly label;
    constructor(uiApi: UiApi, options?: LabelledRowOptions);
    setLabel(label: TextOrTranslationData): this;
    dump(): Promise<void>;
}
