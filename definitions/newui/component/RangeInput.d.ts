import Component from "newui/component/Component";
import { IComponentOptions } from "newui/component/IComponent";
import { Refreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
export interface RangeInputOptions extends IComponentOptions {
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
export declare class RangeInput extends Component implements Refreshable {
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
