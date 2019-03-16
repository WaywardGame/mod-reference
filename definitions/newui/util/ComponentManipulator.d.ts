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
import Stream from "utilities/stream/Stream";
export interface Until<T> {
    [key: string]: (...args: any[]) => T;
}
export declare type UntilHandler<T, U extends Until<T>> = {
    [key in keyof U]: {
        start: U[key];
        end: U[key];
    };
};
declare type EmptyIfUndefined<T> = T extends undefined ? {} : T;
export declare abstract class Manipulator<T, U extends Until<T> | undefined = undefined> {
    protected readonly element: () => HTMLElement;
    protected readonly host: T;
    protected untilHandler?: UntilHandler<T, EmptyIfUndefined<U>>;
    constructor(host: T, element: () => HTMLElement);
    until(promise: Promise<any>): EmptyIfUndefined<U>;
    until(ms: number): EmptyIfUndefined<U>;
    after(promise: Promise<any>): EmptyIfUndefined<U>;
    after(ms: number): EmptyIfUndefined<U>;
}
export interface ClassUntil<T> extends Until<T> {
    add(...classes: string[]): T;
    remove(...classes: string[]): T;
    toggle(hasClass: boolean, ...classes: string[]): T;
}
export declare class ClassManipulator<T> extends Manipulator<T, ClassUntil<T>> {
    protected untilHandler: {
        add: {
            start: (...classes: string[]) => T;
            end: (...classes: string[]) => T;
        };
        remove: {
            start: (...classes: string[]) => T;
            end: (...classes: string[]) => T;
        };
        toggle: {
            start: (hasClass: boolean, ...classes: string[]) => T;
            end: (hasClass: boolean, ...classes: string[]) => T;
        };
    };
    add(...classes: string[]): T;
    remove(...classes: string[]): T;
    toggle(...classes: string[]): T;
    toggle(hasClass: boolean, ...classes: string[]): T;
    /**
     * Note: Alias of `hasEvery`
     */
    has(...classes: string[]): boolean;
    hasEvery(...classes: string[]): boolean;
    hasNone(...classes: string[]): boolean;
    hasAny(...classes: string[]): boolean;
}
export interface IElementWrapper {
    element: HTMLElement;
}
export interface AttributeUntil<T> extends Until<T> {
    set(attribute: string, value: string): T;
    set(attributes: Iterable<[string, string | null]>): T;
}
export declare class AttributeManipulator<T> extends Manipulator<T, AttributeUntil<T>> {
    protected untilHandler: {
        set: any;
    };
    set(name: string, value: string): T;
    set(attributes: Iterable<[string, string | null]>): T;
    get(name: string): string;
    get(firstAttribute: string, secondAttribute: string, ...attributes: string[]): Stream<[string, string | null]>;
    remove(...attributes: string[]): T;
    has(...attributes: string[]): boolean;
    private getAttributeIterator;
}
export declare class DataManipulator<T> extends Manipulator<T> {
    set(name: string, value: string): T;
    set(data: Iterable<[string, string | undefined]>): T;
    get(name: string): string;
    get(name: string, ...keys: string[]): Stream<[string, string | undefined]>;
    remove(...keys: string[]): T;
    has(...keys: string[]): boolean;
    private getDataIterator;
}
export interface StyleUntil<T> extends Until<T> {
    set(rule: string, value: string): T;
}
export declare class StyleManipulator<T> extends Manipulator<T, StyleUntil<T>> {
    protected untilHandler: {
        set: {
            start: (rule: string, value: string | number) => T;
            end: (rule: string) => T;
        };
    };
    set(rule: string, value: string | number | null): T;
    get(rule: string): string;
    remove(rule: string): T;
}
export {};
