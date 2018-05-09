import { ISegment, IStringSection } from "utilities/string/Interpolator";
export interface IColorSection extends IStringSection {
    color: string;
}
export declare const colorSegment: ISegment;
export declare const bindSegment: ISegment;
