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
import { IColorSection } from "language/segment/ColorSegment";
import { IFontSizeSection } from "language/segment/HeadingSegment";
import { ILinkSection } from "language/segment/LinkSegment";
import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
import { ISegment, IStringSection } from "utilities/string/Interpolator";
export default class Text extends Component {
    static resolve(translation: TranslationGenerator | undefined, additionalSegments?: ISegment[]): IStringSection[];
    private static areIdenticalSections;
    static toString(translation: TranslationGenerator | undefined, additionalSegments?: ISegment[]): string;
    private segments;
    private text;
    constructor(uiApi: UiApi, elementType?: string);
    setSegments(...segments: ISegment[]): this;
    setText(text?: TranslationGenerator): this;
    getText(): TranslationGenerator | undefined;
    getTextAsString(): string;
    refresh(): void;
}
export declare class Paragraph extends Text {
    constructor(uiApi: UiApi);
}
export declare class Heading extends Text {
    constructor(uiApi: UiApi);
}
export declare class BasicText extends Component {
    private _link;
    private linkHandler;
    constructor(uiApi: UiApi);
    setText(text: IStringSection | IColorSection | ILinkSection | IFontSizeSection): this;
    setLinkHandler(handler?: (link: string | [string, string | undefined]) => boolean): void;
    private onClick;
}
