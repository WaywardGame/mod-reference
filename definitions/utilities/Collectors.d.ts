/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
declare module Collectors {
    function toArray<T>(iterable: IterableIterator<T>): T[];
    function toString(join: string): (iterable: IterableIterator<any>) => string;
    /**
     * Creates a collector function where all the values in the iterable are passed to the given function,
     * and returns the result of that function.
     * @param fn The function that takes any number of `T`.
     * @param strategy `PassStrategy.Splat`
     */
    function passTo<T, X>(fn: (...args: T[]) => X, strategy: PassStrategy.Splat): (iterable: IterableIterator<T>) => X;
    /**
     * Creates a collector function where a value in the iterable is passed to the given function,
     * and returns the result of that function.
     * @param fn The function that takes the type of `T`.
     * @param strategy The strategy with which to choose which value in the iterable to return.
     * Defaults to `PassStrategy.First`
     */
    function passTo<T, X>(fn: (arg: T) => X, strategy?: PassStrategy): (iterable: IterableIterator<T>) => X;
}
export declare enum PassStrategy {
    First = 0,
    Last = 1,
    Random = 2,
    Splat = 3
}
export default Collectors;
