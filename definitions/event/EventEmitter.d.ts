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
    event: EventEmitter<this, E>;
}
export interface IEventEmitterHostClass<E> extends Class<IEventEmitterHost<E>> {
}
export interface ITrueEventEmitterHostClass<E> extends Class<any> {
    [SYMBOL_SUBSCRIPTIONS]: Map<keyof E, PriorityMap<Set<IterableOr<Handler<any, any>>>>>;
}
export interface ISelfSubscribedEmitter<E> {
    [SYMBOL_SUBSCRIPTIONS]: Array<[ISelfSubscribedEmitter<any>, keyof E, string | number | symbol, number?]>;
}
declare type ArgsOf<F> = ArgumentsOf<Extract<F, AnyFunction>>;
declare type ReturnOf<F> = ReturnType<Extract<F, AnyFunction>>;
declare type Handler<H, F> = (host: H, ...args: ArgsOf<F>) => ReturnOf<F>;
interface IEventEmitter {
    subscribe: AnyFunction;
    unsubscribe: AnyFunction;
    until: any;
    waitFor: AnyFunction;
    copyFrom: AnyFunction;
    emit: AnyFunction;
    emitStream: AnyFunction;
    emitReduce: AnyFunction;
    emitAsync: AnyFunction;
}
interface IEventEmitterEventSubscriberBlackMagic<E> {
    subscribe(event: E, ...args: any[]): any;
}
declare class EventEmitter<H, E> implements IEventEmitter {
    private readonly host;
    private readonly hostClass;
    private readonly subscriptions;
    constructor(host: H);
    copyFrom(emitter: EventEmitter<H, E>): void;
    emit<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): H;
    emitStream<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Stream<ReturnOf<E[K]>>;
    emitReduce<K extends keyof E, A extends ReturnOf<E[K]> & Head<ArgsOf<E[K]>>>(event: K, arg: A, ...args: Tail<ArgsOf<E[K]>>): Extract<ReturnOf<E[K]> & Head<ArgsOf<E[K]>>, undefined> extends undefined ? (undefined extends A ? ReturnOf<E[K]> : A) : ReturnOf<E[K]>;
    emitAsync<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Promise<ReturnType<Extract<E[K], AnyFunction>> extends Promise<infer R> ? Stream<R> : never>;
    subscribe<K extends keyof E>(event: K, handler: IterableOr<Handler<H, E[K]>>, priority?: number): H;
    unsubscribe<K extends keyof E>(event: K, handler: IterableOr<Handler<H, E[K]>>, priority?: number): boolean;
    waitFor<K extends keyof E>(event: K, priority?: number): Promise<ArgumentsOf<Extract<E[K], AnyFunction>>>;
    until<H2 extends IEventEmitterHost<any>>(emitter: H2, ...events: Array<EventNamesFromBlackMagic<H2>>): H extends {
        event: IEventEmitter;
    } ? H["event"] & {
        [key in Exclude<keyof IEventEmitter, "subscribe">]: never;
    } : never;
    until(promise: Promise<any>): H extends {
        event: IEventEmitter;
    } ? H["event"] & {
        [key in Exclude<keyof IEventEmitter, "subscribe">]: never;
    } : never;
}
declare const x: unique symbol;
export declare type ExtendedEvents<H, T extends {
    event: EventEmitter<any, any>;
}, EN> = typeof x & EventEmitter<H, EN> & ExtractEmitters<H, T>;
declare type ExtractEmitters<H, T extends {
    event: any;
}> = {
    [1]: T extends {
        event: ExtendedEvents<any, infer B, infer E>;
    } ? ExtractEmitters<H, B> & EventEmitter<H, E> : never;
    [0]: T extends {
        event: EventEmitter<any, infer E>;
    } ? EventEmitter<H, E> : never;
}[T extends {
    event: typeof x;
} ? 1 : 0];
export declare type EventNamesFromHostOrHostClass<H extends IEventEmitterHost<any> | IEventEmitterHostClass<any>> = H extends IEventEmitterHost<any> ? ExtractEventNames<H> : ExtractEventNames<InstanceOf<Extract<H, IEventEmitterHostClass<any>>>>;
declare type ExtractEventNames<T extends {
    event: any;
}> = {
    [1]: T extends {
        event: ExtendedEvents<any, infer B, infer E>;
    } ? ExtractEventNames<B> | keyof E : never;
    [0]: T extends {
        event: EventEmitter<any, infer E>;
    } ? keyof E : never;
}[T extends {
    event: typeof x;
} ? 1 : 0];
declare type EventNamesFromBlackMagic<H extends IEventEmitterHost<any> | IEventEmitterHostClass<any>> = H extends IEventEmitterHost<any> ? ExtractEventNamesBlackMagic<H> : ExtractEventNamesBlackMagic<InstanceOf<Extract<H, IEventEmitterHostClass<any>>>>;
declare type ExtractEventNamesBlackMagic<T extends {
    event: any;
}> = {
    [1]: T extends {
        event: ExtendedEvents<any, infer B, infer E>;
    } ? ExtractEventNamesBlackMagic<B> | keyof E : never;
    [0]: T extends {
        event: IEventEmitterEventSubscriberBlackMagic<infer E>;
    } ? E : never;
}[T["event"] extends typeof x ? 1 : 0];
export declare type EventHandlerFromHostOrHostClassAndName<H extends IEventEmitterHost<any> | IEventEmitterHostClass<any>, K extends string | number | symbol> = H extends IEventEmitterHost<any> ? FindEventHandler<H, K> : FindEventHandler<InstanceOf<Extract<H, IEventEmitterHostClass<any>>>, K>;
declare type FindEventHandler<T extends {
    event: any;
}, K extends string | number | symbol> = {
    [1]: T extends {
        event: ExtendedEvents<any, infer B, infer E>;
    } ? (K extends keyof E ? E[K] : FindEventHandler<B, K>) : never;
    [0]: T extends {
        event: EventEmitter<any, infer E>;
    } ? (K extends keyof E ? E[K] : never) : never;
}[T extends {
    event: typeof x;
} ? 1 : 0];
declare module EventEmitter {
    class Host<E> implements IEventEmitterHost<E> {
        readonly event: EventEmitter<this, E>;
    }
}
export default EventEmitter;
