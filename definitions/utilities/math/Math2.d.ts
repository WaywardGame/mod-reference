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
    function roundNumber(num: number, dec: number): number;
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
    function mod(n1: number, n2: number): number;
}
export default Math2;
