import { BlockRow } from "newui/element/BlockRow";
import Button from "newui/element/Button";
import { TextOrTranslationData } from "newui/element/IUiElement";
import { RangeInput, RangeInputOptions } from "newui/element/RangeInput";
import { RangeInputValueDisplay } from "newui/element/RangeInputValueDisplay";
import { Refreshable } from "newui/element/Refreshable";
import { Heading } from "newui/element/Text";
import { UiApi } from "newui/INewUi";
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
