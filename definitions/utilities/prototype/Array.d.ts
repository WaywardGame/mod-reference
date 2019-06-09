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
import Stream from "utilities/stream/Stream";
declare global {
    interface Array<T> {
        /**
         * Returns a Stream for the values of this array.
         * @param step If not provided, walks through the array one item at a time. If a positive number, walks forwards, every
         * `step` entries. If a negative number, walks backwards through the array.
         */
        stream(step?: number): Stream<T>;
        /**
         * Returns a Stream for the index-value tuple entries of this array.
         * @param step If not provided, walks through the array one item at a time. If a positive number, walks forwards, every
         * `step` entries. If a negative number, walks backwards through the array.
         */
        entryStream(step?: number): Stream<[number, T]>;
        /**
         * Returns the last item in this array, or `undefined` if there are no items in this array.
         */
        last(): T | undefined;
        /**
         * Removes the values from this array that match the given predicate function.
         */
        removeIf(predicate: (val: T, index: number) => boolean): this;
        /**
         * Returns a value of type X, generated with the given collector function.
         * @param collector A function that takes the iterable, and returns type X
         * @see `utilities/Collectors` for premade collectors
         */
        collect<X>(collector: (val: T[]) => X): X;
        /**
         * Returns a value of type X, generated with the given collector function.
         * @param collector A function that takes the iterable, and returns type X
         * @see `utilities/Collectors` for premade collectors
         */
        collect<X, A extends any[]>(collector: (val: T[], ...args: A) => X, ...args: A): X;
        /**
         * Returns a value of type X, generated with the given collector function.
         * @param collector A function that takes the values of the array, and returns type X
         */
        splat<X>(collector: (...val: T[]) => X): X;
        /**
         * Returns a value of type X, generated with the given collector function.
         * @param collector A function that takes the values of the array, and returns type X
         */
        splat<X>(collector: (...val: T[]) => X, ...args: T[]): X;
        flat<U>(this: U[][]): U[];
    }
    interface ReadonlyArray<T> {
        /**
         * Returns a Stream for the values of this array.
         * @param step If not provided, walks through the array one item at a time. If a positive number, walks forwards, every
         * `step` entries. If a negative number, walks backwards through the array.
         */
        stream(step?: number): Stream<T>;
        /**
         * Returns a Stream for the index-value tuple entries of this array.
         * @param step If not provided, walks through the array one item at a time. If a positive number, walks forwards, every
         * `step` entries. If a negative number, walks backwards through the array.
         */
        entryStream(step?: number): Stream<[number, T]>;
        /**
         * Returns the last item in this array, or `undefined` if there are no items in this array.
         */
        last(): T | undefined;
        /**
         * Returns a value of type X, generated with the given collector function.
         * @param collector A function that takes the iterable, and returns type X
         */
        collect<X>(collector: (val: T[]) => X): X;
        /**
         * Returns a value of type X, generated with the given collector function.
         * @param collector A function that takes the iterable, and returns type X
         */
        collect<X, A extends any[]>(collector: (val: T[], ...args: A) => X, ...args: A): X;
        /**
         * Returns a value of type X, generated with the given collector function.
         * @param collector A function that takes the values of the array, and returns type X
         */
        splat<X>(collector: (...val: T[]) => X): X;
        /**
         * Returns a value of type X, generated with the given collector function.
         * @param collector A function that takes the values of the array, and returns type X
         */
        splat<X>(collector: (...val: T[]) => X, ...args: T[]): X;
        flat<U>(this: U[][]): U[];
    }
}
export default function (): void;
