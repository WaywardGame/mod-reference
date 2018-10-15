/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { Bindable, BindableType } from "Enums";
import { IComponent } from "newui/component/IComponent";
import Emitter from "utilities/Emitter";
import { IVector2 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
export declare const enum BindingManagerEvent {
    BindsEnabled = "BindsEnabled"
}
export declare enum KeyModifier {
    Shift = 0,
    Alt = 1,
    Control = 2
}
export interface IBinding {
    /**
     * See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#Try_it_out, use `key` only if `code` is an empty string
     */
    key?: string;
    mouseButton?: number | "Up" | "Down";
    /**
     * Does not currently function
     */
    gamepadButton?: number;
    modifiers?: KeyModifier[];
}
export interface IBindings {
    [key: string]: IBinding | IBinding[];
}
export interface BindCatcherApi {
    time: number;
    mouseX: number;
    mouseY: number;
    mousePosition: IVector2;
    wasPressed(key: string): boolean;
    wasPressed(bind: Bindable): boolean;
    /** wasReleased is only updated if wasPressed is also checked */
    wasReleased(key: string): boolean;
    /** wasReleased is only updated if wasPressed is also checked */
    wasReleased(bind: Bindable): boolean;
    removePressState(key: string, removeInternal?: boolean): void;
    removePressState(bind: Bindable, removeInternal?: boolean): void;
    removeAllPressStates(removeInternal?: boolean): void;
    isDown(key: string): boolean;
    isDown(bind: Bindable): boolean;
    isAnythingDown(): boolean;
    timeDown(key: string): number;
    timeDown(bind: Bindable): number;
    isMouseWithin(element: Element | IComponent): boolean;
    isMouseWithin(element: Element | IComponent, mustBeTarget?: boolean): boolean;
    mouseStartWasWithin(element: Element | IComponent, mustBeTarget?: boolean): boolean;
}
export declare class BindingManager extends Emitter {
    private static readonly defaultBinds;
    private readonly bindCatchers;
    private defaultBindCatcher;
    constructor();
    registerBindable(index: number, defaultBinding: IBinding | IBinding[]): void;
    deregisterBindable(index: number): void;
    getBindableType(bindable: Bindable): BindableType | undefined;
    getBinding(bindable: Bindable): IBinding | IBinding[];
    getBindings(bindable: Bindable): IBinding[];
    addBinding(bindable: Bindable, binding: IBinding): void;
    setBinding(bindable: Bindable, binding: IBinding | IBinding[]): void;
    deleteBinding(bindable: Bindable): void;
    resetBinding(bindable: Bindable): void;
    doBindsIntersect(bindableA: Bindable, bindableB: Bindable): boolean;
    getBindingsTranslation(bindable: Bindable): string;
    getBindingsTranslation(bind: IBinding | IBinding[]): string;
    getBindingsTranslation(bindable: Bindable, separate: true): string[];
    getBindingsTranslation(bind: IBinding | IBinding[], separate: true): string[];
    registerBindCatcher(element: HTMLElement, shouldFocus?: boolean): number;
    deregisterBindCatcher(id: number): void;
    disableBindsUntil(until: number | Promise<any>, id?: number): void;
    areBindsDisabled(id?: number): boolean;
    setDefaultBindCatcher(id: number): void;
    getPressTime(bindOrKey: Bindable | string, id?: number): number;
    removePressState(bindOrKey: Bindable | string, id?: number): void;
    removeAllPressStates(id?: number): void;
    checkModifiers(modifiers: KeyModifier[], exclude: string, id?: number): boolean;
    isPressed(bindOrKey: Bindable | string, id?: number): boolean;
    isAnythingPressed(id?: number): boolean;
    getMouse(id?: number): Vector2;
    isMouseWithin(element: Element | IComponent, mustBeTarget?: boolean, id?: number): boolean;
    mouseStartWasWithin(element: Element | IComponent, mustBeTarget?: boolean, id?: number): boolean;
    manualLoop(id: number): () => BindCatcherApi;
    private startLoop;
    private getBindPressTranslation;
}
export declare const bindingManager: BindingManager;
