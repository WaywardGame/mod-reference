import { UiTranslation } from "language/ILanguage";
import Component from "newui/component/Component";
import { IComponentOptions, TranslationData } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
import { IStringSection } from "utilities/string/Interpolator";
export interface TextOptions extends IComponentOptions {
    text?: string | UiTranslation | TranslationData;
}
export interface TextData {
    translationData: UiTranslation | TranslationData;
}
export default class Text extends Component {
    static createText(uiApi: UiApi, options: TextOptions | SectionTextOptions): Text | SectionText;
    constructor(uiApi: UiApi, options?: TextOptions);
    getText(): string | undefined;
    setText(text: string | UiTranslation | TranslationData, refreshTranslations?: boolean): this;
    removeText(): this;
}
export declare class Paragraph extends Text {
    constructor(uiApi: UiApi, options?: TextOptions);
}
export declare class Block extends Paragraph {
    constructor(uiApi: UiApi, options?: TextOptions);
}
export declare class Heading extends Text {
    constructor(uiApi: UiApi, options?: TextOptions);
}
export interface SectionTextOptions extends IComponentOptions {
    sections: IStringSection[];
}
export declare class SectionText extends Component {
    constructor(uiApi: UiApi, ...sections: ArrayOfTOrIterablesOfT<IStringSection>);
}
