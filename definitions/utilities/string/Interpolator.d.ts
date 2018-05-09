export interface ISegmentApi {
    interpolate(str: string, ...args: any[]): IStringSection[];
}
export interface ISegment {
    regex: RegExp;
    handle(match: RegExpMatchArray, segment: string, api: ISegmentApi, ...args: any[]): string | IStringSection | IStringSection[];
}
export interface IStringSection {
    content: string;
}
export default class Interpolator {
    private readonly segments;
    constructor(...segments: ISegment[]);
    interpolate(str: string, ...args: any[]): IStringSection[];
}
export declare const argumentSegment: ISegment;
export declare const escapedSegment: ISegment;
export declare function interpolate(str: string, ...args: any[]): string;
