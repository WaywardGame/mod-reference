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
         * Loops the values of this iterable and calls the given function with each value.
         * @param user A function that takes a value. If the function returns `false`, iteration will not continue.
         */
        forEach(user: (val: T, index: number) => any, continueGenerate?: false): void;
        /**
         * Loops the values of this iterable and calls the given function with each value.
         * @param user A function that takes a value. If the function returns `false`, iteration will not continue.
         */
        forEach(user: (val: T, index: number) => any, continueGenerate: true): IterableIterator<T>;
    }
}
export declare function forEach(this: IterableIterator<any>, user: (val: any, index: number) => boolean | undefined, continueGeneration: boolean): IterableIterator<any> | undefined;
