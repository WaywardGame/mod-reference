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
import { EventBus, EventHandlerFromIndex, EventNameFromIndex } from "event/EventBuses";
import { IEventEmitterHost, IEventEmitterHostClass } from "event/EventEmitter";
declare type ArgsOf<F> = ArgumentsOf<Extract<F, AnyFunction>>;
declare type ReturnOf<F> = ReturnType<Extract<F, AnyFunction>>;
declare type Handler<F> = (...args: ArgsOf<F>) => ReturnOf<F>;
declare module EventManager {
    function subscribe<I extends EventBus, P extends EventNameFromIndex<I>>(emitter: I, event: P, handler: IterableOr<EventHandlerFromIndex<I, P>>, priority?: number): void;
    function subscribe<E, K extends keyof E>(emitter: IEventEmitterHost<E> | IEventEmitterHostClass<E>, event: K, handler: IterableOr<Handler<E[K]>>, priority?: number): void;
    function unsubscribe<I extends EventBus, P extends EventNameFromIndex<I>>(emitter: I, event: P, handler: IterableOr<EventHandlerFromIndex<I, P>>, priority?: number): boolean;
    function unsubscribe<E, K extends keyof E>(emitter: IEventEmitterHost<E> | IEventEmitterHostClass<E>, event: K, handler: IterableOr<Handler<E[K]>>, priority?: number): boolean;
    function waitFor<I extends EventBus, P extends EventNameFromIndex<I>>(emitter: I, event: P, priority?: number): Promise<ArgsOf<EventHandlerFromIndex<I, P>>>;
    function waitFor<E, K extends keyof E>(emitter: IEventEmitterHost<E> | IEventEmitterHostClass<E>, event: K, priority?: number): Promise<ArgsOf<E[K]>>;
    interface IUntilSubscriber {
        subscribe<I extends EventBus, P extends EventNameFromIndex<I>>(emitter: I, event: P, handler: EventHandlerFromIndex<I, P>, priority?: number): this;
        subscribe<E, K extends keyof E>(emitter: IEventEmitterHost<E> | IEventEmitterHostClass<E> | EventBus, event: K, handler: Handler<E[K]>, priority?: number): this;
    }
    function until(promise: Promise<any>): IUntilSubscriber;
    function registerEventBusSubscriber(subscriber: object): void;
    function deregisterEventBusSubscriber(subscriber: object): void;
}
export default EventManager;
declare type TypedPropertyDescriptorFunctionAnyNOfParams<T extends AnyFunction> = TypedPropertyDescriptor<T> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8], a9: ArgumentsOf<T>[9]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0]) => ReturnType<T>> | TypedPropertyDescriptor<() => ReturnType<T>>;
export declare function EventHandler<E>(injectInto: "self", ownClass: AnyClass<IEventEmitterHost<E>>): <P extends keyof E>(property: P, priority?: number) => (host: IEventEmitterHost<E>, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<Extract<E[P], AnyFunction>>) => void;
export declare function EventHandler<E>(cls: IEventEmitterHostClass<E>): <P extends keyof E>(property: P, priority?: number) => (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<Extract<E[P], AnyFunction>>) => void;
export declare function EventHandler<E extends EventBus>(injectInto: E): <P extends EventNameFromIndex<E>>(property: P, priority?: number) => (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<Extract<EventHandlerFromIndex<E, P>, AnyFunction>>) => void;
