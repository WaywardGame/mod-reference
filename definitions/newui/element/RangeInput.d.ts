import { IUiElementOptions } from "newui/element/IUiElement";
import { Refreshable } from "newui/element/Refreshable";
import UiElement from "newui/element/UiElement";
import { UiApi } from "newui/INewUi";
export interface RangeInputOptions extends IUiElementOptions {
    min?: number;
    max?: number;
    step?: number;
    default?: number;
    refresh?(): number;
}
export declare enum RangeInputEvent {
    Change = "Change",
    Finish = "Finish",
}
export declare class RangeInput<T = any> extends UiElement<T> implements Refreshable {
    element: HTMLInputElement;
    private min;
    private max;
    private readonly _refresh;
    private _value;
    value: number;
    constructor(uiApi: UiApi, options?: RangeInputOptions);
    clamp(): void;
    setMax(max: number, clamp?: boolean): void;
    setMin(min: number, clamp?: boolean): void;
    update(eventTrigger?: RangeInputEvent): void;
    refresh(): void;
}
