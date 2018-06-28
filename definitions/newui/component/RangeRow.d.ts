import { BlockRow } from "newui/component/BlockRow";
import { RangeInput } from "newui/component/RangeInput";
import { RangeInputValueDisplay } from "newui/component/RangeInputValueDisplay";
import { IRefreshable } from "newui/component/Refreshable";
import { Heading } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
import { IStringSection } from "utilities/string/Interpolator";
export declare class RangeRow extends BlockRow implements IRefreshable {
    protected rangeInput: RangeInput;
    protected heading: Heading;
    protected rangeInputValueDisplay: RangeInputValueDisplay | undefined;
    readonly value: number;
    constructor(api: UiApi);
    editRange(rangeInputInitializer: (rangeInput: RangeInput) => RangeInput): this;
    setLabel(label: (label: Heading) => Heading): this;
    setDisplayValue(display: boolean | ((val: number) => IStringSection[])): this;
    addDefaultButton(defaultValue?: () => number): this;
    refresh(): this;
    private updateDisplay;
}
