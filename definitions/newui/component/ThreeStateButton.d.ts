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
import Button from "newui/component/Button";
import { TranslationGenerator } from "newui/component/IComponent";
import { IRefreshableValue } from "newui/component/Refreshable";
import { Paragraph } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
export declare const enum ThreeStateButtonEvent {
    Change = "Change"
}
export declare enum ThreeStateButtonState {
    Null = 0,
    On = 1,
    Off = 2
}
export declare class ThreeStateButton extends Button implements IRefreshableValue<ThreeStateButtonState> {
    protected refreshMethod: () => ThreeStateButtonState;
    private _state;
    readonly state: ThreeStateButtonState;
    constructor(uiApi: UiApi);
    setState(state: ThreeStateButtonState, triggerEvent?: boolean): this;
    trySetState(state: ThreeStateButtonState, triggerEvent?: boolean): boolean;
    toggleState(): void;
    refresh(): this;
    setRefreshMethod(refreshMethod: () => ThreeStateButtonState): this;
    setText(text: TranslationGenerator): this;
    addDescription(initializer: (paragraph: Paragraph) => any): this;
}
