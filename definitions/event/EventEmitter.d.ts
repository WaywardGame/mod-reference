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
export interface IEventEmitterHostClass<E> extends Class<any> {
    [SYMBOL_SUBSCRIPTIONS]: Map<keyof E, PriorityMap<Set<Handler<any>>>>;
}
declare type ArgsOf<F> = ArgumentsOf<Extract<F, (...args: any[]) => any>>;
declare type ReturnOf<F> = ReturnType<Extract<F, (...args: any[]) => any>>;
declare type Handler<F> = (...args: ArgsOf<F>) => ReturnOf<F>;
export declare const enum EmitStrategy {
    Race = 0,
    All = 1
}
declare class EventEmitter<E> {
    private readonly hostClass;
    private readonly subscriptions;
    constructor(hostClass: any);
    emit<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): void;
    emitStream<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Stream<ReturnOf<E[K]>>;
    emitAsync<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Promise<void>;
    subscribe<K extends keyof E>(event: K, handler: Handler<E[K]>, priority?: number): void;
    unsubscribe<K extends keyof E>(event: K, handler: Handler<E[K]>, priority?: number): boolean;
    waitFor<K extends keyof E>(event: K, priority?: number): Promise<ArgumentsOf<Extract<E[K], (...args: any[]) => any>>>;
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
