export interface IRandomPushed {
    seed: number;
    history?: IRandomHistory[];
}
export interface IRandomHistory {
    stack: string;
    seeds: number[];
}
declare module Random {
    let debug: boolean;
    let seed: number;
    let pushedSeeds: IRandomPushed[];
    let history: IRandomHistory[] | undefined;
    function getSeed(): number;
    function setSeed(newSeed: number): void;
    function generateSeed(): void;
    function nextFloat(max?: number): number;
    function setDebug(value: boolean): void;
    function startHistory(): void;
    function stopHistory(): IRandomHistory[];
    /**
     * Generates a random integer between 0 (inclusive) and max (exclusive)
     */
    function nextInt(max: number): number;
    /**
     * Generates a random integer between min and max (inclusive)
     */
    function nextIntInRange(min: number, max: number): number;
    /**
     * Generates a random boolean
     */
    function nextBool(): boolean;
    /**
     * Get the chance for something
     * Returns a number between 1 and 100 (inclusive)
     */
    function nextChance(minChance?: number, chanceOutOf?: number): number;
    /**
     * Chooses a random entry in an array and returns it
     */
    function nextChoice(from: any[]): any;
    function pushSeed(newSeed?: number): void;
    function popSeed(): number;
    function tickSeed(s: number): number;
    function shuffle<T>(array: T[]): T[];
    function getElement<T>(array: T[]): T;
}
export default Random;
