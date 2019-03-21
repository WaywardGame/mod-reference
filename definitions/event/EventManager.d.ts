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
declare type ArgsOf<F> = ArgumentsOf<Extract<F, (...args: any[]) => any>>;
declare type ReturnOf<F> = ReturnType<Extract<F, (...args: any[]) => any>>;
declare type Handler<F> = (...args: ArgsOf<F>) => ReturnOf<F>;
declare module EventManager {
    function subscribe<I extends EventBus, P extends EventNameFromIndex<I>>(emitter: I, event: P, handler: EventHandlerFromIndex<I, P>, priority?: number): void;
    function subscribe<E, K extends keyof E>(emitter: IEventEmitterHost<E> | IEventEmitterHostClass<E>, event: K, handler: Handler<E[K]>, priority?: number): void;
    function unsubscribe<I extends EventBus, P extends EventNameFromIndex<I>>(emitter: I, event: P, handler: EventHandlerFromIndex<I, P>, priority?: number): boolean;
    function unsubscribe<E, K extends keyof E>(emitter: IEventEmitterHost<E> | IEventEmitterHostClass<E>, event: K, handler: Handler<E[K]>, priority?: number): boolean;
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
declare type DescriptorForEventHandler<H extends (...args: any[]) => any> = TypedPropertyDescriptor<H | // allow the actual event handler signature
(() => ReturnType<H>)>;
export declare function EventHandler<I extends EventBus, P extends string>(injectInto: I, property: P, priority?: number): (host: any, property2: string | number | symbol, descriptor: DescriptorForEventHandler<Extract<EventHandlerFromIndex<I, P>, (...args: any[]) => any>>) => void;
