export interface ISegmentApi {
    interpolate(str: string, ...args: any[]): IStringSection[];
}
export interface ISegment {
    regex: RegExp;
    handle(match: RegExpMatchArray, segment: string, api: ISegmentApi, ...args: any[]): string | IStringSection | IterableOf<IStringSection>;
}
export interface IStringSection {
    content: string;
}
export default class Interpolator {
    private readonly segments;
    constructor(...segments: ISegment[]);
    interpolate(str: string, ...args: any[]): IStringSection[];
    static combineLikeSections(sections: IStringSection[], ignoreKeys?: string[]): void;
}
/**
 * Prints values from the arguments passed to the interpolator. If the keys don't map to a provided argument,
 * an empty string is returned.
 *
 * - `"{0}" => args[0]`
 * - `"{test}" => args[0]["test"]`
 * - `"{3.test.4.wow}" => args[3]["test"][4]["wow"]`
 */
export declare const argumentSegment: ISegment;
export declare const escapedSegment: ISegment;
export declare function interpolate(str: string, ...args: any[]): string;
