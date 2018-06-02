import { BlockRow } from "newui/component/BlockRow";
import { TranslationGenerator } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
export declare class LabelledRow extends BlockRow {
    private readonly label;
    constructor(uiApi: UiApi);
    setLabel(label: TranslationGenerator): this;
    /**
     * Safe — removes all children except for the label
     */
    dump(): this;
}
