/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Translation from "language/Translation";
import { BlockRow } from "newui/component/BlockRow";
import { IDisableable } from "newui/component/IComponent";
import { RangeInput } from "newui/component/RangeInput";
import { RangeInputValueDisplay } from "newui/component/RangeInputValueDisplay";
import { IRefreshable } from "newui/component/Refreshable";
import { Heading } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
import { IStringSection } from "utilities/string/Interpolator";
export declare class RangeRow extends BlockRow implements IRefreshable, IDisableable {
    protected rangeInput: RangeInput;
    protected heading: Heading;
    protected rangeInputValueDisplay: RangeInputValueDisplay | undefined;
    value: number;
    private _disabled;
    readonly disabled: boolean;
    constructor(api: UiApi);
    setDisabled(val: boolean): this;
    editRange(rangeInputInitializer: (rangeInput: RangeInput) => RangeInput): this;
    setLabel(label: (label: Heading) => Heading): this;
    setDisplayValue(display: boolean | ((val: number) => IStringSection[] | Translation)): this;
    addDefaultButton(defaultValue?: () => number): this;
    refresh(): this;
    private updateDisplay;
}
