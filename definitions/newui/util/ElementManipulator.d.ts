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
export interface IElementWrapper {
    element: HTMLElement;
}
export interface IClassListManipulatorUntil<E extends IElementWrapper = IElementWrapper> {
    add(...classes: string[]): E;
    remove(...classes: string[]): E;
}
export declare class ClassListManipulator<E extends IElementWrapper = IElementWrapper> {
    private readonly element;
    constructor(element: E);
    add(...classes: string[]): E;
    remove(...classes: string[]): E;
    toggle(...classes: string[]): E;
    toggle(on: boolean, ...classes: string[]): E;
    has(...classes: string[]): boolean;
    after(ms: number): IClassListManipulatorUntil<E>;
    after(promise: Promise<any>): IClassListManipulatorUntil<E>;
    until(ms: number): IClassListManipulatorUntil<E>;
    until(promise: Promise<any>): IClassListManipulatorUntil<E>;
}
export declare class AttributeManipulator<E extends IElementWrapper = IElementWrapper> {
    private readonly element;
    constructor(element: E);
    set(name: string, value: string): E;
    set(attributes: IterableOf<[string, string | null]>): E;
    get(name: string): string;
    get(name: string, ...attributes: string[]): IterableIterator<[string, string | null]>;
    remove(...attributes: string[]): E;
    has(...attributes: string[]): boolean;
    private getAttributeIterator;
}
export declare class DataManipulator<E extends IElementWrapper = IElementWrapper> {
    private readonly element;
    constructor(element: E);
    set(name: string, value: string): E;
    set(data: IterableOf<[string, string | undefined]>): E;
    get(name: string): string;
    get(name: string, ...keys: string[]): IterableIterator<[string, string | undefined]>;
    remove(...keys: string[]): E;
    has(...keys: string[]): boolean;
    private getDataIterator;
}
