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
import { PriorityMap } from "utilities/PriorityMap";
import Stream from "utilities/stream/Stream";
export declare const SYMBOL_SUBSCRIPTIONS: unique symbol;
export interface IEventEmitterHost<E> {
    event: EventEmitter<E>;
}
export interface IEventEmitterHostClass<E> extends NullaryClass<any> {
    [SYMBOL_SUBSCRIPTIONS]: Map<keyof E, PriorityMap<Set<IterableOr<Handler<any>>>>>;
}
declare type ArgsOf<F> = ArgumentsOf<Extract<F, AnyFunction>>;
declare type ReturnOf<F> = ReturnType<Extract<F, AnyFunction>>;
declare type Handler<F> = (...args: ArgsOf<F>) => ReturnOf<F>;
declare class EventEmitter<E> {
    private readonly hostClass;
    private readonly subscriptions;
    constructor(hostClass: any);
    copyFrom(emitter: EventEmitter<E>): void;
    emit<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): void;
    emitStream<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Stream<ReturnOf<E[K]>>;
    emitReduce<K extends keyof E, A extends ReturnOf<E[K]> & Head<ArgsOf<E[K]>>>(event: K, arg: A, ...args: Tail<ArgsOf<E[K]>>): Extract<ReturnOf<E[K]> & Head<ArgsOf<E[K]>>, undefined> extends undefined ? (undefined extends A ? ReturnOf<E[K]> : A) : ReturnOf<E[K]>;
    emitAsync<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Promise<void>;
    subscribe<K extends keyof E>(event: K, handler: IterableOr<Handler<E[K]>>, priority?: number): void;
    unsubscribe<K extends keyof E>(event: K, handler: IterableOr<Handler<E[K]>>, priority?: number): boolean;
    waitFor<K extends keyof E>(event: K, priority?: number): Promise<ArgumentsOf<Extract<E[K], AnyFunction>>>;
    until(promise: Promise<any>): {
        subscribe<K extends keyof E>(event: K, handler: Handler<E[K]>, priority?: number): {
            subscribe<K extends keyof E>(event: K, handler: Handler<E[K]>, priority?: number): any;
        };
    };
}
declare module EventEmitter {
    class Host<E> implements IEventEmitterHost<E> {
        readonly event: EventEmitter<E>;
    }
}
export default EventEmitter;
