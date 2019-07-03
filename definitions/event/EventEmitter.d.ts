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
    event: IEventEmitter<this, E>;
}
export interface IEventEmitterHostClass<E> extends Class<IEventEmitterHost<E>> {
}
export interface ITrueEventEmitterHostClass<E> extends Class<any> {
    [SYMBOL_SUBSCRIPTIONS]: Map<any, Map<keyof E, PriorityMap<Set<IterableOr<Handler<any, any>>>>>>;
}
export interface ISelfSubscribedEmitter<E> {
    [SYMBOL_SUBSCRIPTIONS]: Array<[ISelfSubscribedEmitter<any>, keyof E, string | number | symbol, number?]>;
}
declare type ArgsOf<F> = ArgumentsOf<Extract<F, AnyFunction>>;
declare type ReturnOf<F> = ReturnType<Extract<F, AnyFunction>>;
declare type Handler<H, F> = (host: H, ...args: ArgsOf<F>) => ReturnOf<F>;
export interface IEventEmitter<H = any, E = any> {
    emit<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): H;
    emitStream<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Stream<ReturnOf<E[K]>>;
    emitReduce<K extends keyof E, A extends ReturnOf<E[K]> & Head<ArgsOf<E[K]>>>(event: K, arg: A, ...args: Tail<ArgsOf<E[K]>>): Extract<ReturnOf<E[K]> & Head<ArgsOf<E[K]>>, undefined> extends undefined ? (undefined extends A ? ReturnOf<E[K]> : A) : ReturnOf<E[K]>;
    emitAsync<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Promise<Stream<(Extract<ReturnOf<E[K]>, Promise<any>> extends Promise<infer R> ? R : never) | Exclude<ReturnOf<E[K]>, Promise<any>>>>;
    subscribe<K extends ArrayOr<keyof E>>(event: K, handler: IterableOr<Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>, priority?: number): H;
    unsubscribe<K extends ArrayOr<keyof E>>(event: K, handler: IterableOr<Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>, priority?: number): boolean;
    waitFor<K extends ArrayOr<keyof E>>(events: K, priority?: number): Promise<ArgsOf<K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>;
    until<E2>(emitter: IEventEmitterHost<E2>, ...events: Array<keyof E2>): IUntilSubscriber<H, E>;
    until(promise: Promise<any>): IUntilSubscriber<H, E>;
}
interface IUntilSubscriber<H, E> {
    subscribe<K extends ArrayOr<keyof E>>(event: K, handler: IterableOr<Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>, priority?: number): H;
}
declare class EventEmitter<H, E> implements IEventEmitter<H, E> {
    private readonly host;
    private readonly hostClass;
    private readonly subscriptions;
    constructor(host: H);
    copyFrom(emitter: IEventEmitter<H, E>): void;
    emit<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): H;
    emitStream<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Stream<ReturnOf<E[K]>>;
    emitReduce<K extends keyof E, A extends ReturnOf<E[K]> & Head<ArgsOf<E[K]>>>(event: K, arg: A, ...args: Tail<ArgsOf<E[K]>>): Extract<ReturnOf<E[K]> & Head<ArgsOf<E[K]>>, undefined> extends undefined ? (undefined extends A ? ReturnOf<E[K]> : A) : ReturnOf<E[K]>;
    emitAsync<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Promise<any>;
    subscribe<K extends ArrayOr<keyof E>>(events: K, handler: IterableOr<Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>, priority?: number): H;
    unsubscribe<K extends ArrayOr<keyof E>>(events: K, handler: IterableOr<Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>, priority?: number): boolean;
    waitFor<K extends ArrayOr<keyof E>>(events: K, priority?: number): Promise<ArgsOf<K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>;
    until<E2>(emitter: IEventEmitterHost<E2>, ...events: Array<keyof E2>): IUntilSubscriber<H, E>;
    until(promise: Promise<any>): IUntilSubscriber<H, E>;
    private stream;
}
declare module EventEmitter {
    class Host<E> implements IEventEmitterHost<E> {
        readonly event: IEventEmitter<this, E>;
    }
}
export default EventEmitter;
