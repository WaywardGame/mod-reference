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
export declare const π: number;
export declare const τ: number;
declare module Math2 {
    /**
     * Clamps the given number in the given range
     */
    function clamp(min: number, max: number, value: number): number;
    /**
     * Clamps the given number in the range 0-1
     */
    const clamp1: (value: number) => number;
    /**
     * Clamps the given number in the range 0-255
     */
    const clamp255: (value: number) => number;
    /**
     * Returns a number rounded to a certain number of decimal places.
     *
     * Example: `roundNumber(1.24999999, 2): 1.25`
     */
    function roundNumber(num: number, places: number): number;
    /**
     * Returns a number rounded to a multiple
     *
     * Example: `roundNumberToMultiple(97, 10): 100`
     */
    function roundNumberToMultiple(num: number, multiple: number): number;
    /**
     * Return a number between `from` and `to`, using the decimal `t`
     *
     * Example: `lerp(1, 2, .5): 1.5`
     */
    function lerp(from: number, to: number, t: number): number;
    /**
     * Given a number between `from` and `to`, returns a decimal how far it is, `t`.
     */
    function unlerp(from: number, to: number, lerped: number): number;
    function mod(n1: number, n2: number): number;
    function average(...ns: number[]): number;
    function sum(...ns: number[]): number;
    /**
     * Takes an any number of `[weight, number]` tuples, and returns the "weighted average".
     * @param ns Any number of `[weight, number]` tuples.
     *
     * **For example**:
     * `weightedAverage([1, 0], [3, 1])` returns `0.75`.
     * - One part `0`, three parts `1`. That adds up to four parts, which means each part is worth `0.25`.
     * - Three parts `1` means `0.25 * 3`, one part `0` means `0 * 1`.
     * - `0.75 + 0` is `0.75`.
     */
    function weightedAverage(...ns: Array<[number, number]>): number;
}
export default Math2;
