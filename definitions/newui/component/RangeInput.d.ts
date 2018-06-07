import Component from "newui/component/Component";
import { IRefreshableValue } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
export declare enum RangeInputEvent {
    Change = "Change",
    Finish = "Finish"
}
export declare class RangeInput extends Component implements IRefreshableValue<number> {
    element: HTMLInputElement;
    private refreshMethod;
    private clampOnRefresh;
    private _value;
    value: number;
    readonly min: number;
    readonly max: number;
    readonly step: number;
    constructor(uiApi: UiApi);
    clamp(): this;
    setStep(step: number): this;
    setMax(max: number, clamp?: boolean): this;
    setMin(min: number, clamp?: boolean): this;
    update(eventTrigger?: RangeInputEvent): void;
    refresh(): this;
    setRefreshMethod(refresh: () => number): this;
    noClampOnRefresh(): this;
}
