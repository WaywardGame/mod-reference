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
    const clamp1: (_2: number) => number;
    /**
     * Clamps the given number in the range 0-255
     */
    const clamp255: (_2: number) => number;
    function roundNumber(num: number, dec: number): number;
    /**
     * Return a number between `from` and `to`, using the decimal `t`
     *
     * Example: `lerp(1, 2, .5): 1.5`
     */
    function lerp(from: number, to: number, t: number): number;
    function mod(n1: number, n2: number): number;
}
export default Math2;
