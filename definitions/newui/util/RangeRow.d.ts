import { TextOrTranslationData, UiApi } from "newui/INewUi";
import { BlockRow } from "newui/util/BlockRow";
import Button from "newui/util/Button";
import { RangeInput, RangeInputOptions } from "newui/util/RangeInput";
import { RangeInputValueDisplay } from "newui/util/RangeInputValueDisplay";
import { Refreshable } from "newui/util/Refreshable";
import { Heading } from "newui/util/Text";
export interface RangeRowOptions extends RangeInputOptions {
    heading: TextOrTranslationData;
    displayValue?: boolean | ((value: number) => string);
    defaultButtonValue?(): number;
}
export declare class RangeRow extends BlockRow implements Refreshable {
    protected rangeInput: RangeInput;
    protected heading: Heading;
    protected defaultButton: Button;
    protected rangeInputValueDisplay: RangeInputValueDisplay;
    private readonly displayValue?;
    readonly value: number;
    constructor(uiApi: UiApi, options: RangeRowOptions);
    refresh(): void;
    clamp(): void;
    setMax(max: number, clamp: boolean): void;
    setMin(min: number, clamp: boolean): void;
    private updateDisplay(val);
}
