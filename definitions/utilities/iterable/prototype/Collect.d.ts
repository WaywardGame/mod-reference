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
declare global {
    interface IterableIterator<T> {
        /**
         * Returns a value of type X, generated with the given collector function.
         * @param collector A function that takes the iterable, and returns type X
         * @see `utilities/Collectors` for premade collectors
         */
        collect<X>(collector: (val: IterableIterator<T>) => X): X;
        /**
         * Returns an iterable of type X, generated with the given collector function.
         * @param collector A function that takes the iterable, and returns type X
         * @see `utilities/Collectors` for premade collectors
         */
        collect<X>(iterable: true, collector: (val: IterableIterator<T>) => X): IterableIterator<X>;
        /**
         * Returns a value of type X, generated with the given collector function.
         * @param collector A function that takes the iterable, and returns type X
         * @see `utilities/Collectors` for premade collectors
         */
        collect<X, A extends any[]>(collector: (val: IterableIterator<T>, ...args: A) => X, ...args: A): X;
        /**
         * Returns an iterable of type X, generated with the given collector function.
         * @param collector A function that takes the iterable, and returns type X
         * @see `utilities/Collectors` for premade collectors
         */
        collect<X, A extends any[]>(iterable: true, collector: (val: IterableIterator<T>, ...args: A) => X, ...args: A): IterableIterator<X>;
    }
}
export declare function collect(this: IterableOf<any>, iterable: boolean | ((val: any) => any), collector: any, ...args: any[]): any;
