import { UiApi, UiElementOptions } from "newui/INewUi";
import { Refreshable } from "newui/util/Refreshable";
import UiElement from "newui/util/UiElement";
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
