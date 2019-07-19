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
    interface Function {
        dropFirst<A extends any[], R>(this: (...args: A) => R): (a: any, ...args: A) => R;
        dropParams<A extends any[], R>(this: (...args: A) => R, amt: 1): (a: any, ...args: A) => R;
        dropParams<A extends any[], R>(this: (...args: A) => R, amt: 2): (a: any, b: any, ...args: A) => R;
        dropParams<A extends any[], R>(this: (...args: A) => R, amt: 3): (a: any, b: any, c: any, ...args: A) => R;
        dropParams<A extends any[], R>(this: (...args: A) => R, amt: 4): (a: any, b: any, c: any, d: any, ...args: A) => R;
        dropParams<A extends any[], R>(this: (...args: A) => R, amt: 5): (a: any, b: any, c: any, d: any, e: any, ...args: A) => R;
    }
}
export default function (): void;
