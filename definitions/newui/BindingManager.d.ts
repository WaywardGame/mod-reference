import { Bindable, BindableType } from "Enums";
export declare enum KeyModifier {
    Shift = 0,
    Alt = 1,
    Control = 2,
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
    [key: number]: IBinding | IBinding[];
}
export interface BindCatcherApi {
    time: number;
    mouseX: number;
    mouseY: number;
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
    isMouseWithin(element: Element): boolean;
    isMouseWithin(element: Element, mustBeTarget: boolean): boolean;
}
export declare class BindingManager {
    private static defaultBinds;
    private bindCatchers;
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
    getBindTranslation(bindable: Bindable): string;
    getBindTranslation(bind: IBinding | IBinding[]): string;
    getBindTranslation(bindable: Bindable, separate: true): string[];
    getBindTranslation(bind: IBinding | IBinding[], separate: true): string[];
    registerBindCatcher(element: HTMLElement, shouldFocus?: boolean): number;
    deregisterBindCatcher(id: number): void;
    setDefaultBindCatcher(id: number): void;
    getPressTime(bindOrKey: Bindable | string, id?: number): number;
    removePressState(bindOrKey: Bindable | string, id?: number): void;
    removeAllPressStates(id?: number): void;
    checkModifiers(modifiers: KeyModifier[], exclude: string, id?: number): boolean;
    isPressed(bindOrKey: Bindable | string, id?: number): boolean;
    isAnythingPressed(id?: number): boolean;
    manualLoop(id: number): () => BindCatcherApi;
    beginLoop(id: number, cb: (api: BindCatcherApi) => any): void;
    endLoop(id: number): void;
}
export declare const bindingManager: BindingManager;
