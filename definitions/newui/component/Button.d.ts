import Text, { TextOptions } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
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
    onActivate?: ButtonEffect | (() => any);
    disabled?: boolean;
}
export interface DefaultButtonEffect extends ButtonEffect {
    switchMenu: MenuId;
}
export interface DefaultButtonOptions extends ButtonOptions {
    onActivate?: DefaultButtonEffect | (() => any);
}
export declare enum ButtonEvent {
    Activate = "Activate",
}
export default class Button extends Text {
    playSound: boolean;
    private buttons;
    private readonly _options;
    private _disabled;
    private _activated;
    disabled: boolean;
    constructor(uiApi: UiApi, options?: DefaultButtonOptions, bindEvent?: boolean);
    activate(playSound?: boolean): Promise<void>;
    addButton(buttonOptions: DefaultButtonOptions): Button;
    toggleDisabled(disabled?: boolean): void;
}
