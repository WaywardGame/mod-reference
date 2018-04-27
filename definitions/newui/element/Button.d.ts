import UiText, { TextOptions } from "newui/element/Text";
import { UiApi } from "newui/INewUi";
import { MenuId } from "newui/screen/screens/menu/element/IMenu";
import { InterruptOptions } from "newui/util/IInterrupt";
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
export default class Button extends UiText {
    playSound: boolean;
    private buttons;
    private readonly _options;
    private _disabled;
    private _activated;
    disabled: boolean;
    constructor(uiApi: UiApi, options?: ButtonOptions, bindEvent?: boolean);
    activate(playSound?: boolean): Promise<void>;
    addButton(buttonOptions: ButtonOptions): Button;
    toggleDisabled(disabled?: boolean): void;
}
