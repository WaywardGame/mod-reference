import { BlockRow } from "newui/element/BlockRow";
import { TextOrTranslationData, UiElementOptions } from "newui/element/IUiElement";
import { UiApi } from "newui/INewUi";
export interface LabelledRowOptions extends UiElementOptions {
    label?: TextOrTranslationData;
}
export declare class LabelledRow<T = any> extends BlockRow<T> {
    private readonly label;
    constructor(uiApi: UiApi, options?: LabelledRowOptions);
    setLabel(label: TextOrTranslationData): this;
    dump(): Promise<void>;
}
