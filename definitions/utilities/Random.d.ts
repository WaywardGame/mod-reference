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
    nextFloat(max?: number): number;
    /**
     * Generates a random integer between 0 (inclusive) and max (exclusive)
     */
    nextInt(max: number): number;
    /**
     * Generates a random integer between min and max (inclusive)
     */
    nextIntInRange(min: number, max: number): number;
    /**
     * Generates a random boolean
     */
    nextBool(): boolean;
    /**
     * Get the chance for something
     * Returns a number between 1 and 100 (inclusive)
     */
    nextChance(minChance?: number, chanceOutOf?: number): number;
    /**
     * Chooses a random entry in an array and returns it
     */
    nextChoice(from: any[]): any;
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
