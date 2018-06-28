import { BlockRow } from "newui/component/BlockRow";
import { Heading } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
export declare class LabelledRow extends BlockRow {
    private readonly label;
    constructor(uiApi: UiApi);
    setLabel(labelInitializer: (label: Heading) => Heading): this;
    /**
     * Safe — removes all children except for the label
     */
    dump(): this;
}
