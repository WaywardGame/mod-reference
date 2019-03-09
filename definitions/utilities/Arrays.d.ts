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
declare module Arrays {
    /**
     * Produces an array of the numbers @param min (inclusive) to @param max (exclusive), in steps of @param step
     * @param min A number, inclusive
     * @param max A number, exclusive
     * @param step The difference between each step between min and max, defaulting to 1
     */
    function range(min: number, max: number, step: number): number[];
    /**
     * Produces an array of the numbers @param min (inclusive) to @param max (exclusive)
     * @param min A number, inclusive
     * @param max A number, exclusive
     */
    function range(min: number, max: number): number[];
    /**
     * Produces an array of the numbers 0 through @param max (exclusive)
     * @param max A number, exclusive
     */
    function range(max: number): number[];
    function equals(array1: any[] | undefined, array2: any[] | undefined): boolean;
    /**
     * Returns a new array containing random choices from a given array.
     * @param arr The array to return items from
     * @param count The number of items to return in the array
     * @param seeded Whether the random choices should be seeded. Defaults to true.
     *
     * Note: Be careful. This method can be very slow if used on a big array with a high count.
     */
    function random<T = any>(arr: T[], count: number, seeded?: boolean): T[];
    /**
     * Shuffles the contents of the given array using the Fisher-Yates Shuffle: https://bost.ocks.org/mike/shuffle/
     * @returns The given array after shuffling its contents.
     */
    function shuffle<T>(arr: T[], r?: import("./Random").Random<{
        get: () => number;
    }>): T[];
    function toggle(arr: any[], value: any, includes?: boolean): number;
}
export default Arrays;
