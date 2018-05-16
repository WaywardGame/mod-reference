import { BlockRow } from "newui/component/BlockRow";
import Button from "newui/component/Button";
import { TextOrTranslationData } from "newui/component/IComponent";
import { RangeInput, RangeInputOptions } from "newui/component/RangeInput";
import { RangeInputValueDisplay } from "newui/component/RangeInputValueDisplay";
import { Refreshable } from "newui/component/Refreshable";
import { Heading } from "newui/component/Text";
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
