/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { CheckButton } from "newui/component/CheckButton";
import { RangeInput } from "newui/component/RangeInput";
import { RangeInputValueDisplay } from "newui/component/RangeInputValueDisplay";
import { UiApi } from "newui/INewUi";
import { IStringSection } from "utilities/string/Interpolator";
export declare enum CheckButtonRangeEvent {
    Change = "Change2"
}
export default class CheckButtonRange extends CheckButton {
    protected rangeInputValueDisplay: RangeInputValueDisplay | undefined;
    private readonly rangeInput;
    private readonly rangeWrapper;
    private valueWhenDisabled;
    constructor(api: UiApi, valueWhenDisabled?: number);
    setValueWhenDisabled(valueWhenDisabled?: number): this;
    editRange(rangeInitializer: (range: RangeInput) => RangeInput): this;
    setDisplayValue(display: boolean | ((val: number, enabled: boolean) => IStringSection[])): this;
    refresh(): this;
    private change;
    private updateDisplay;
}
