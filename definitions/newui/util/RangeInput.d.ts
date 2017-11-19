import { UiApi, UiElementOptions } from "../INewUi";
import { Refreshable } from "./Refreshable";
import UiElement from "./UiElement";
export interface RangeInputOptions extends UiElementOptions {
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
export declare class RangeInput<T = {}> extends UiElement<T> implements Refreshable {
    element: HTMLInputElement;
    private min;
    private max;
    private step;
    private _refresh;
    private _value;
    value: number;
    constructor(uiApi: UiApi, options?: RangeInputOptions);
    clamp(): void;
    setMax(max: number, clamp?: boolean): void;
    setMin(min: number, clamp?: boolean): void;
    update(triggerChange?: boolean): void;
    refresh(): void;
}
