import { TextOrTranslationData, UiApi, UiElementOptions } from "../INewUi";
import { BlockRow } from "./BlockRow";
export interface LabelledRowOptions extends UiElementOptions {
    label?: TextOrTranslationData;
}
export declare class LabelledRow<T = {}> extends BlockRow<T> {
    private label;
    constructor(uiApi: UiApi, options?: LabelledRowOptions);
    setLabel(label: TextOrTranslationData): this;
    dump(): Promise<void>;
}
