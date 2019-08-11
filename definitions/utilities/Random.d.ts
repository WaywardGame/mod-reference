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
import { IRange } from "utilities/math/Range";
export interface IRandomPushed {
    seed: number;
    history?: IRandomHistory[];
}
export interface IRandomHistory {
    stack: string;
    seeds: number[];
}
export interface IRandomGenerator {
    get(): number;
}
export declare class Random<G extends IRandomGenerator = IRandomGenerator> {
    generator: G;
    constructor(generator: G);
    /**
     * Generates a random number between 0 (inclusive) and 1 (exclusive)
     */
    float(): number;
    /**
     * Generates a random number between 0 (inclusive) and max (exclusive)
     */
    float(max: number): number;
    /**
     * Generates a random number between min (inclusive) and max (exclusive)
     */
    float(min: number, max: number): number;
    /**
     * Generates a random number from the given range.
     */
    float(range: IRange): number;
    /**
     * Generates a random integer between 0 (inclusive) and max (exclusive)
     */
    int(max: number): number;
    /**
     * Generates a random integer between min (inclusive) and max (exclusive)
     */
    int(min: number, max: number): number;
    /**
     * Generates a random integer from the given range.
     */
    int(range: IRange): number;
    /**
     * Generates a random integer between min and max (inclusive)
     */
    intInRange(min: number, max: number): number;
    intInRange(range: IRange): number;
    /**
     * Generates a random boolean
     */
    bool(): boolean;
    /**
     * Get a percentage for something
     * Returns a number between 1 and 100 (inclusive)
     */
    percent(minChance?: number, chanceOutOf?: number, ceil?: boolean): number;
    /**
     * Returns whether a chance passes, given a decimal number.
     *
     * Example: `chance(0.1)` is a `1/10` chance, `chance(0.8)` is a `4/5` chance
     */
    chance(decimal: number): boolean;
    /**
     * Chooses a random entry in an array and returns it
     */
    choice<A extends any[]>(...from: A): A[number];
    shuffle<T>(array: T[]): T[];
    getElement<T>(array: T[]): T;
    /**
     * Returns a random T from the given choices, where each choice is weighted by a number. Higher numbers = higher chance.
     */
    weightedChoice<T>(choices: Array<[number, T]>): T;
    withGenerator<T>(generator: G, execute: () => T): T;
}
export declare function convertStringToSeed(seed: string | number): number;
export declare class SeededGenerator implements IRandomGenerator {
    private debug;
    private seed;
    private readonly pushedSeeds;
    private history;
    constructor();
    tickSeed(s: number): number;
    getSeed(): number;
    setSeed(newSeed: number): void;
    generateSeed(): void;
    setDebug(value: boolean): void;
    pushSeed(newSeed?: number): void;
    popSeed(): number;
    get(): number;
    startHistory(): void;
    stopHistory(): IRandomHistory[];
}
export declare const generalRandom: Random<{
    get: () => number;
}>;
declare const seededRandom: Random<SeededGenerator>;
export default seededRandom;
export declare const randomMilestoneModifiers: Random<SeededGenerator>;
export declare enum RandomInstance {
    Seeded = 0,
    MilestoneModifiers = 1
}
export declare const randoms: {
    [RandomInstance.Seeded]: Random<SeededGenerator>;
    [RandomInstance.MilestoneModifiers]: Random<SeededGenerator>;
};
