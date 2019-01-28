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
import { IColorSection } from "language/segment/ColorSegment";
import { IDecoratedSection } from "language/segment/TextDecorationSegments";
import { ISegment } from "utilities/string/Interpolator";
export interface ILinkSection extends IColorSection, IDecoratedSection {
    link: string | [string, string | undefined];
}
declare const linkSegment: ISegment;
export default linkSegment;
