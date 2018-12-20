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
export interface ISegmentApi {
    interpolate(str: string, ...args: any[]): IStringSection[];
    interpolateString(str: string, ...args: any[]): string;
}
export interface ISegment {
    startChar?: string;
    endChar?: string;
    regex: RegExp;
    handle(match: RegExpMatchArray, segment: string, api: ISegmentApi, ...args: any[]): string | IStringSection | IterableOf<IStringSection>;
}
export interface IStringSection {
    content: string;
}
declare class Interpolator {
    private readonly _segments;
    readonly segments: ISegment[];
    constructor(...segments: ISegment[]);
    interpolate(str: string, ...args: any[]): IStringSection[];
    interpolateString(str: string, ...args: any[]): string;
    private handleChar;
    static combineLikeSections(sections: IStringSection[], ignoreKeys?: string[]): void;
}
declare module Interpolator {
    function getArgument(keyMap: string, ...args: any[]): string | undefined;
    /**
     * Returns the index of the first occurrence of character in the provided string which is not inside a segment `{}`.
     * Returns `-1` if there is no occurrence.
     */
    function getIndexOfTopLevel(character: string, segment: string): number;
}
export default Interpolator;
/**
 * Prints values from the arguments passed to the interpolator. If the keys don't map to a provided argument,
 * an empty string is returned.
 *
 * - `"{0}" => args[0]`
 * - `"{test}" => args[0]["test"]`
 * - `"{3.test.4.wow}" => args[3]["test"][4]["wow"]`
 */
export declare const argumentSegment: ISegment;
/**
 * Uses an argument to determine whether to show one of two segments. If the argument is truthy, returns
 * any content in the segment after the `?` and before the `:`. If the argument is falsey, returns any
 * content in the segment after the `:`. The colon is optional; if not provided, falsey = empty string.
 *
 * - `"{0?hi}"`
 * 	- When given `[true]`, `=> "hi"`
 * 	- When given `[false]`, `=> ""`
 * 	- When given `[]`, `=> ""`
 * - `"{test?hi:bye}"
 * 	- When given `[{test: true}]`, `=> "hi"`
 * 	- When given `[{test: false}]`, `=> "bye"`
 * 	- When given `[]`, `=> "bye"`
 */
export declare const conditionalSegment: ISegment;
export declare const escapedSegment: ISegment;
export declare const basicInterpolator: Interpolator;
export declare function interpolateSectioned(str: string, ...args: any[]): IStringSection[];
export declare function interpolate(str: string, ...args: any[]): string;
