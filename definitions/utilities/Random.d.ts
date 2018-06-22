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
export declare class Random<G extends IRandomGenerator> {
    generator: G;
    constructor(generator: G);
    float(max?: number): number;
    /**
     * Generates a random integer between 0 (inclusive) and max (exclusive)
     */
    int(max: number): number;
    /**
     * Generates a random integer between min and max (inclusive)
     */
    intInRange(min: number, max: number): number;
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
    choice(from: any[]): any;
    shuffle<T>(array: T[]): T[];
    getElement<T>(array: T[]): T;
}
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
declare const globalRandom: Random<SeededGenerator>;
export declare const generalRandom: Random<{
    get: () => number;
}>;
export default globalRandom;
