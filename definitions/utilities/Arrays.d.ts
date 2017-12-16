/**
 * Produces an array of the numbers @param min (inclusive) to @param max (exclusive), in steps of @param step
 * @param min A number, inclusive
 * @param max A number, exclusive
 * @param step The difference between each step between min and max, defaulting to 1
 */
export declare function range(min: number, max: number, step: number): number[];
/**
 * Produces an array of the numbers @param min (inclusive) to @param max (exclusive)
 * @param min A number, inclusive
 * @param max A number, exclusive
 */
export declare function range(min: number, max: number): number[];
/**
 * Produces an array of the numbers 0 through @param max (exclusive)
 * @param max A number, exclusive
 */
export declare function range(max: number): number[];
