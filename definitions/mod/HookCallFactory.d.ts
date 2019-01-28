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
import { Hook } from "mod/IHookManager";
import Mod from "mod/Mod";
export declare enum ReduceStrategy {
    /**
     * Calls the hook on all mods. The current result is updated to every valid result.
     */
    Reduce = 0,
    /**
     * Returns the first valid hook result.
     */
    First = 1,
    /**
     * Returns the last valid hook result. (Calls the hook on all mods, & returns the last valid)
     */
    Last = 2,
    /**
     * Returns every valid hook result.
     */
    All 
    /**
     * Returns a random valid hook result. (Calls the hook on all mods, then returns a random result from all valid results)
     *
     * Warning: Does not use the internal random system. Be careful, this could cause desyncs.
     */
    = 3
    /**
     * Returns a random valid hook result. (Calls the hook on all mods, then returns a random result from all valid results)
     *
     * Warning: Does not use the internal random system. Be careful, this could cause desyncs.
     */
}
export declare type IReduceStrategy<R> = ReduceStrategy | ((newValue: R, lastValue?: R) => R);
export default class HookCallFactory<H extends Hook, R = any> {
    call: Mod[H];
    private readonly hook;
    private resultPredicate?;
    private baseErrorMessage;
    private defaultValue;
    private reduceStrategy;
    private shouldPassCurrentResultToMods;
    private currentResultValue;
    private args;
    constructor(hook: H, defaultValue?: R);
    /**
     * Sets the expected result type.
     * @param result A result type using the `TypeFlag` flags.
     *
     * Example usage:
     * ```ts
     * setExpectedResult(TypeFlag.Undefined | TypeFlag.Number)
     * ```
     */
    setExpectedResult(result: number): this;
    /**
     * Sets the expected result to have to match a predicate
     * @param resultPredicate A predicate with which to match the result.
     *
     * Example usage:
     * ```ts
     * setExpectedResult((result) => result instanceof BaseHumanEntity)
     * ```
     */
    setExpectedResult(resultPredicate: (result: R) => boolean): this;
    /**
     * Sets the "reduce" strategy for this hook call. By default, the strategy is `ReduceStrategy.Last`,
     * wherein all mod hooks are called and the last valid result is returned.
     * @param reduceStrategy A reduce strategy. You can either use a built-in `ReduceStategy` or provide your own reducer method.
     */
    setReduceStrategy(reduceStrategy: IReduceStrategy<R>): this;
    /**
     * Sets the "reduce" strategy for this hook call. By default, the strategy is `ReduceStrategy.Last`,
     * wherein all mod hooks are called and the last valid result is returned.
     * @param reduceStrategy A reduce strategy. You can either use a built-in `ReduceStategy` or provide your own reducer method.
     * @param shouldPassCurrentResultToMods Whether the current result value should be passed as the first
     * argument to the hook methods. Each valid hook result can update the current result value, which will
     * change the argument for the next hook method.
     *
     * Note: Passing the current result to mods replaces the first argument passed to the hook. Make
     * sure the type that will be returned and the type of the first argument of the hook are the same.
     */
    setReduceStrategy(reduceStrategy: IReduceStrategy<R>, shouldPassCurrentResultToMods?: boolean): this;
    /**
     * Sets the default value to return (if no hooks provide a value).
     */
    setDefault(defaultValue: R): this;
    /**
     * This is the internal method for `HookCallFactory.call`. The separation of this method
     * and the `call` field is to allow the `call` field to have the method type of the hook
     * that will be called.
     */
    private _call;
    /**
     * Takes the iterator for hook results and turns it into a single result, based on the `reduceStrategy`.
     *
     * 1. If it's a function:
     *   - The iterator is reduced by the given function, using `defaultValue` as the initial value.
     * 2. If it's `ReduceStrategy.Reduce`:
     *   - The current result value is updated to the new value for every entry in the iterator, using `defaultValue` as the initial value.
     * 3. If it's `ReduceStrategy.First`:
     *   - The first result is returned & iteration breaks.
     * 4. If it's `ReduceStrategy.Last`:
     *   - The last valid result is returned.
     * 5. If it's `ReduceStrategy.Random`:
     *   - A random result in the iterator is returned.
     */
    /**
     * Filters the result of a hook, and returns whether it should be used.
     * This method relies on the value of `resultPredicate`.
     * 1. `undefined` (not set):
     *   - If the result is `undefined`, this method will return false (eg: filtered out)
     *   - If the result is *not* `undefined`, this method will return true.
     *   - No errors will be logged if the result is `undefined`.
     * 2. A custom filter function:
     *   - The result is passed to the filter function. This method will return the result.
     *   - If the filter function returns false, this method will log an error.
     * 3. A number representing the valid types that can be passed.
     *   - Examples: `TypeFlag.Undefined | TypeFlag.Number` will accept either to be passed.
     *   - If the number contains `TypeFlag.Undefined` is this, `undefined` hook results *will not be ignored!*
     *   - Checking whether the result matches the given flags is handled by the method `validateResultByType`
     *   - If the result doesn't match, an error will be logged.
     */
    private filterHookResult;
    /**
     * Returns whether a value matches the `TypeFlag`s in the `resultPredicate`.
     * This method does not first verify that `resultPredicate` is a number.
     */
    private validateResultByType;
    /**
     * Calls the hook on the given mod, with the given arguments.
     */
    private callHookOnHost;
}
