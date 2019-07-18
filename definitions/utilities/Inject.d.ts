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
export interface IInjectionApi<T extends {
    [key in K]: AnyFunction;
}, K extends keyof T> {
    /**
     * The instance that the injected method was called on.
     */
    executingInstance: T;
    /**
     * The original method (the one injected into).
     */
    originalMethod: T[K];
    /**
     * The return value of the method call.
     */
    returnValue: ReturnType<T[K]> | undefined;
    /**
     * The arguments given to the method call.
     */
    arguments: ArgumentsOf<T[K]>;
    /**
     * Whether the original method (the one injected into) should be called.
     */
    cancelled: boolean;
}
declare type InjectionMethod<T extends {
    [key in K]: AnyFunction;
}, K extends keyof T> = T[K] extends (...args: infer A) => any ? (api: IInjectionApi<T, K>, ...args: A) => any : never;
export declare enum InjectionPosition {
    /**
     * This injection will be called before the target method.
     */
    Pre = "pre",
    /**
     * This injection will be called after the target method.
     */
    Post = "post"
}
export declare function Inject<T extends {
    [key in K]: AnyFunction;
}, K extends keyof T>(injectInto: AnyClass<T>, property: K, position: InjectionPosition, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptor<InjectionMethod<T, K>>) => void;
/**
 * Classes decorated with `Injector` will have their methods automatically injected using `inject`.
 *
 * **These injections will not be automatically cleaned up.**
 * To prevent a memory leak, make sure you always call `Injector.deregister` on the instance when you're
 * done with it.
 *
 * Note: Alternatively, if you want to register your injection instances manually on a case-by-case basis,
 * you can instead use `Injector.register`
 */
export declare function Injector<T>(constructor: Class<T>): NullaryClass<T>;
export declare module Injector {
    /**
     * Injects the `@Inject`-decorated methods of this class into their respective classes.
     *
     * **These injections will not be automatically cleaned up.**
     * To prevent a memory leak, make sure you always call `Injector.deregister` on the instance when you're
     * done with it.
     *
     * Note: Due to the implementation, this operation is negligible, so don't worry about performance impacts of calling it.
     *
     * Note: If you want your instance's injections to be registered automatically, decorate the class with `@Injector`
     */
    function register<T>(injectorClass: Class<T>, instance: T): void;
    /**
     * Removes the injections (`@Inject`-decorated methods) of this class.
     *
     * Note: Due to the implementation, this operation is negligible, so don't worry about performance impacts of calling it.
     */
    function deregister<T>(injectorClass: Class<T>, instance: T): boolean;
}
export {};
