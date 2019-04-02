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
import { EventBus, EventHandlerFromIndex, EventHandlerFromIndexRecursive, EventNameFromIndex, EventNameFromIndexRecursive } from "event/EventBuses";
import { EventHandlerFromHostOrHostClassAndName, EventNamesFromHostOrHostClass, IEventEmitterHost, IEventEmitterHostClass } from "event/EventEmitter";
declare type ArgsOf<F> = ArgumentsOf<Extract<F, AnyFunction>>;
declare type ReturnOf<F> = ReturnType<Extract<F, AnyFunction>>;
declare type Handler<H, F> = (host: H, ...args: ArgsOf<F>) => ReturnOf<F>;
declare type HostFromHostOrHostClass<H extends IEventEmitterHost<any> | IEventEmitterHostClass<any>> = H extends IEventEmitterHost<any> ? H : InstanceOf<Extract<H, IEventEmitterHostClass<any>>>;
declare module EventManager {
    function subscribe<I extends EventBus, P extends EventNameFromIndex<I>>(emitter: I, event: P, handler: IterableOr<EventHandlerFromIndex<I, P>>, priority?: number): void;
    function subscribe<T extends IEventEmitterHost<E> | IEventEmitterHostClass<E>, E, K extends keyof E>(emitter: T, event: K, handler: IterableOr<Handler<HostFromHostOrHostClass<T>, E[K]>>, priority?: number): void;
    function unsubscribe<I extends EventBus, P extends EventNameFromIndex<I>>(emitter: I, event: P, handler: IterableOr<EventHandlerFromIndex<I, P>>, priority?: number): boolean;
    function unsubscribe<T extends IEventEmitterHost<E> | IEventEmitterHostClass<E>, E, K extends keyof E>(emitter: T, event: K, handler: IterableOr<Handler<HostFromHostOrHostClass<T>, E[K]>>, priority?: number): boolean;
    function waitFor<I extends EventBus, P extends EventNameFromIndex<I>>(emitter: I, event: P, priority?: number): Promise<ArgsOf<EventHandlerFromIndex<I, P>>>;
    function waitFor<T extends IEventEmitterHost<E> | IEventEmitterHostClass<E>, E, K extends keyof E>(emitter: T, event: K, priority?: number): Promise<AddHead<HostFromHostOrHostClass<T>, ArgsOf<E[K]>>>;
    interface IUntilSubscriber {
        subscribe<I extends EventBus, P extends EventNameFromIndex<I>>(emitter: I, event: P, handler: EventHandlerFromIndex<I, P>, priority?: number): this;
        subscribe<T extends IEventEmitterHost<E> | IEventEmitterHostClass<E>, E, K extends keyof E>(emitter: T, event: K, handler: Handler<HostFromHostOrHostClass<T>, E[K]>, priority?: number): this;
    }
    function until(promise: Promise<any>): IUntilSubscriber;
    function registerEventBusSubscriber(subscriber: object): void;
    function deregisterEventBusSubscriber(subscriber: object): void;
}
export default EventManager;
declare type ReturnTypeLenient<T extends AnyFunction> = ReturnType<T> extends void ? Promise<void> : ReturnType<T>;
declare type TypedPropertyDescriptorFunctionAnyNOfParams<T extends AnyFunction> = TypedPropertyDescriptor<(...args: ArgumentsOf<T>) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8], a9: ArgumentsOf<T>[9]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<() => ReturnTypeLenient<T>> | TypedPropertyDescriptor<T> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8], a9: ArgumentsOf<T>[9]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0]) => ReturnType<T>> | TypedPropertyDescriptor<() => ReturnType<T>>;
export declare function EventHandler<T extends IEventEmitterHost<any>>(injectInto: "self"): <P extends EventNamesFromHostOrHostClass<T>>(property: P, priority?: number) => (host: T, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<EventHandlerFromHostOrHostClassAndName<T, P>>) => void;
export declare function EventHandler<T extends IEventEmitterHostClass<any>>(cls: T): <P extends EventNamesFromHostOrHostClass<T>>(property: P, priority?: number) => (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<Handler<HostFromHostOrHostClass<T>, EventHandlerFromHostOrHostClassAndName<T, P>>>) => void;
export declare function EventHandler<E extends EventBus>(injectInto: E): <P extends EventNameFromIndexRecursive<E>>(property: P, priority?: number) => (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<EventHandlerFromIndexRecursive<E, P>>) => void;
