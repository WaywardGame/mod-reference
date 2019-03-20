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
import { IEventEmitterHost, IEventEmitterHostClass } from "event/EventEmitter";
import { EventHandlerFromIndex, EventNameFromIndex, IndexedEmitter } from "event/IndexedEmitters";
declare type ArgsOf<F> = ArgumentsOf<Extract<F, (...args: any[]) => any>>;
declare type ReturnOf<F> = ReturnType<Extract<F, (...args: any[]) => any>>;
declare type Handler<F> = (...args: ArgsOf<F>) => ReturnOf<F>;
declare module EventManager {
    function subscribe<I extends IndexedEmitter, P extends EventNameFromIndex<I>>(emitter: I, event: P, handler: EventHandlerFromIndex<I, P>, priority?: number): void;
    function subscribe<E, K extends keyof E>(emitter: IEventEmitterHost<E> | IEventEmitterHostClass<E>, event: K, handler: Handler<E[K]>, priority?: number): void;
    function unsubscribe<I extends IndexedEmitter, P extends EventNameFromIndex<I>>(emitter: I, event: P, handler: EventHandlerFromIndex<I, P>, priority?: number): boolean;
    function unsubscribe<E, K extends keyof E>(emitter: IEventEmitterHost<E> | IEventEmitterHostClass<E>, event: K, handler: Handler<E[K]>, priority?: number): boolean;
    function waitFor<I extends IndexedEmitter, P extends EventNameFromIndex<I>>(emitter: I, event: P, priority?: number): Promise<ArgsOf<EventHandlerFromIndex<I, P>>>;
    function waitFor<E, K extends keyof E>(emitter: IEventEmitterHost<E> | IEventEmitterHostClass<E>, event: K, priority?: number): Promise<ArgsOf<E[K]>>;
    interface IUntilSubscriber {
        subscribe<I extends IndexedEmitter, P extends EventNameFromIndex<I>>(emitter: I, event: P, handler: EventHandlerFromIndex<I, P>, priority?: number): this;
        subscribe<E, K extends keyof E>(emitter: IEventEmitterHost<E> | IEventEmitterHostClass<E> | IndexedEmitter, event: K, handler: Handler<E[K]>, priority?: number): this;
    }
    function until(promise: Promise<any>): IUntilSubscriber;
    function registerSubscriber(subscriber: object): void;
    function deregisterSubscriber(subscriber: object): void;
}
export default EventManager;
export declare function EventHandler<I extends IndexedEmitter, P extends EventNameFromIndex<I>>(injectInto: I, property: P, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptor<EventHandlerFromIndex<I, P>>) => void;
