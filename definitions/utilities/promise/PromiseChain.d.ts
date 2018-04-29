export declare type IResolve<T> = (value?: T | PromiseLike<T> | undefined) => void;
export declare type IReject = (reason?: any) => void;
export declare type IExecutor<T> = (resolve: IResolve<T>, reject: IReject) => void;
export declare type IPromiseOrAsyncFunction = AnyPromise | (() => AnyPromise);
export declare type AnyPromise = Promise<any> | PromiseChain<any>;
export declare type ValueOrPromise<T> = T | Promise<T>;
/**
 * Apply handlers for when the `PromiseChain` is resolved or rejected.
 */
export declare type IThen<TResult1, TResult2 = never> = (onfulfilled?: ((value: TResult1) => any) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2> | undefined) | undefined | null) => Promise<TResult1 | TResult2>;
/**
 * #### This module is very, very complicated.
 * It makes heavy use of the `Proxy` class and is a bit esoteric in some ways. However, when you know the
 * rules of it, it will make your life a lot easier for chaining asynchronous methods.
 *
 * The most important rule is that the `PromiseChain` should *only* be used for chaining method calls that
 * return `PromiseChain`s. It also should only be used with void promises at the moment, as results are
 * not saved properly. If you need this functionality ping me and I'll work on it again.
 *
 * ### A basic overview is as follows:
 * A `PromiseChain` is constructed from a class, and at least one promise. It also extends the `Promise`
 * class, so it can be `await`ed, and you can call the `then` and `catch` methods on it. The instance can
 * hold any number of promises, and will resolve when they have all completed.
 *
 * The main point of the `PromiseChain` is it allows chaining method calls of methods that also return
 * `PromiseChain`s. There are two fields of PromiseChain that support this chaining:
 *
 * - `and` — For chaining asynchronous methods in parallel.
 * - `then` — For chaining asynchronous methods after all previous promises resolve.
 *
 * Each field returns a `Proxy` instance targeting the object that the `PromiseChain` was constructed from.
 *
 * Example usage:
 *
 * ```ts
 * function sleep(ms) {
 * 	return new Promise(resolve => setTimeout(resolve, ms));
 * }
 * var test = {
 * 	foo () {
 * 		return new PromiseChain(this, async () => {
 * 			await sleep(200);
 * 			console.log("finish foo");
 *         });
 * 	},
 * 	bar () {
 * 		return new PromiseChain(this, async () => {
 * 			await sleep(1000);
 * 			console.log("finish bar");
 *         });
 * 	}
 * }
 * test.foo().and.bar().then.foo().then.bar().then(() => console.log("done"))
 * ```
 *
 * This code will do the following:
 * - Wait `.2` seconds, then log "finish foo"
 * - Wait `.8` seconds, then log "finish bar" (the two methods were called in parallel)
 * - Wait `.2` seconds, then log "finish foo"
 * - Wait `1` second, then log "finish bar"
 * - Log "done"
 *
 * It's relatively easy to tell when things will execute — each `then` separates a section of parallel calls, while each `and`
 * connects parallel calls together.
 */
export default class PromiseChain<T extends object, R extends any[] = any[]> extends Promise<R> {
    /**
     * Call an asynchronous method on the instance in parallel with previous calls.
     *
     * Do not use this to call non-asynchronous methods, or to get the passed instance back. This field
     * contains a proxy to the passed instance used exclusively for chaining promises.
     *
     * Example usage:
     * ```ts
     * await instance.methodThatReturnsChain()
     * .and.otherMethodThatReturnsChain();
     * ```
     */
    and: T;
    /**
     * Call an asynchronous method on the instance after all prior methods have resolved.
     *
     * Do not use this to call non-asynchronous methods, or to get the passed instance back. This field
     * contains a proxy to the passed instance used exclusively for chaining promises.
     *
     * Example usage:
     * ```ts
     * await instance.methodThatReturnsChain()
     * .then.otherMethodThatReturnsChain();
     * ```
     *
     * You can also call this field directly like it's the basic `then` of a promise, to apply handlers
     * for resolving or rejecting.
     */
    // @ts-ignore
	then: T & IThen<R>;
    /**
     * Returns the base/target instance after all promises have been completed.
     */
    readonly instance: Promise<T>;
    /**
     * All parallel promises
     */
    private readonly promises;
    /**
     * The instance that will be used for `and`, and `then` chaining
     */
    private readonly target;
    /**
     * Any callbacks to execute after the parallel promises resolve. Used for `then` chaining.
     */
    private readonly callbacks;
    /**
     * A promise for when parallel calls can begin.
     */
    private canStartParallelCalls;
    /**
     * @param target The instance that will be used for `and`, and `then` chaining
     * @param promise At least one promise is required
     * @param promises Any other additional promises to be resolved in parallel
     */
    constructor(target: T, promise: IPromiseOrAsyncFunction, ...promises: IPromiseOrAsyncFunction[]);
    /**
     * Schedules an "and" method to be called after `this.canStartParallelCalls`
     */
    private scheduleAnd(fn, thisArg, args);
    /**
     * Creates a proxy for the given function, where when it is called, it schedules the actual method
     * to be called after the previous `PromiseChain` is complete (see `canStartParallelCalls`).
     *
     * The proxy function returns this `PromiseChain` instance.
     */
    private getAndProxyFunction<F>(fn);
    /**
     * Creates a proxy for the given function, where when it is called, it is added as a callback for
     * when all previous promises are resolved. It returns a new `PromiseChain` instance wrapping the
     * same target object.
     *
     * When all previous promises are resolved, the new `PromiseChain` begins executing its promises.
     */
    private getThenProxyFunction<F>(fn);
}
