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
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import Button from "newui/component/Button";
import { TranslationGenerator } from "newui/component/IComponent";
import { IRefreshableValue } from "newui/component/Refreshable";
import { Paragraph } from "newui/component/Text";
interface IThreeStateButtonEvents extends Events<Button> {
    /**
     * @param state The state this button is changing to.
     * @param oldState The state this button is changing from.
     * @returns `false` to cancel the change.
     */
    willChange(state: ThreeStateButtonState, oldState?: ThreeStateButtonState): boolean | void;
    /**
     * @param state The new state of this button.
     */
    change(state: ThreeStateButtonState): any;
}
export declare enum ThreeStateButtonState {
    Null = 0,
    On = 1,
    Off = 2
}
export declare module ThreeStateButtonState {
    function boolean(state: ThreeStateButtonState): boolean | undefined;
}
export declare class ThreeStateButton extends Button implements IRefreshableValue<ThreeStateButtonState> {
    event: IEventEmitter<this, IThreeStateButtonEvents>;
    protected refreshMethod: () => ThreeStateButtonState;
    private _state;
    readonly state: ThreeStateButtonState;
    constructor();
    setState(state: ThreeStateButtonState, triggerEvent?: boolean): this;
    trySetState(state: ThreeStateButtonState, triggerEvent?: boolean): boolean;
    toggleState(): void;
    refresh(): this;
    setRefreshMethod(refreshMethod: () => ThreeStateButtonState): this;
    setText(text: TranslationGenerator): this;
    addDescription(initializer: (paragraph: Paragraph) => any): this;
}
export {};
