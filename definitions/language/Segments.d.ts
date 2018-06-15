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
import { ISegment, IStringSection } from "utilities/string/Interpolator";
export interface IColorSection extends IStringSection {
    color: string;
}
export declare const colorSegment: ISegment;
export declare const bindSegment: ISegment;
export interface ILinkSection extends IColorSection, IDecoratedSection {
    link: string | [string, string | undefined];
}
export declare const linkSegment: ISegment;
export interface IFontSizeSection extends IStringSection {
    fontSize: "heading" | undefined;
}
export declare const headingSegment: ISegment;
export declare enum TextDecoration {
    Underline = 1,
    Bold = 2,
    Italicized = 4
}
export interface IDecoratedSection extends IStringSection {
    decoration: TextDecoration;
}
export declare function getDecorations(section: IStringSection): IterableIterator<[number, number]>;
export declare const italicizedSegment: ISegment;
export declare const boldSegment: ISegment;
export declare const underlineSegment: ISegment;
