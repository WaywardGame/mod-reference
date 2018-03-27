import UiText, { TextOptions } from "newui/element/Text";
import { MenuId, UiApi } from "newui/INewUi";
import { InterruptOptions } from "newui/menu/InterruptMenu";
export interface ButtonEffect {
    switchMenu?: MenuId;
    loadingInterrupt?: InterruptOptions;
    noTransition?: true;
    args?(): {
        [key: string]: any;
    };
}
export interface ButtonOptions extends TextOptions {
    effect?: ButtonEffect | ((...args: any[]) => any);
    disabled?: boolean;
}
export declare enum ButtonEvent {
    Activate = "Activate",
}
export default class Button<T = any> extends UiText<T> {
    playSound: boolean;
    private buttons;
    private readonly _options;
    private _disabled;
    disabled: boolean;
    constructor(uiApi: UiApi, options?: ButtonOptions, bindEvent?: boolean);
    activate(playSound?: boolean): Promise<void>;
    addButton(buttonOptions: ButtonOptions): Button<any>;
    toggleDisabled(disabled?: boolean): void;
}
