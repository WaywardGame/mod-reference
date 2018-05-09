import { UiTranslation } from "language/ILanguage";
import Component from "newui/element/Component";
import { IComponentOptions, TranslationData } from "newui/element/IComponent";
import { UiApi } from "newui/INewUi";
import { IStringSection } from "utilities/string/Interpolator";
export interface TextOptions extends IComponentOptions {
    text?: string | UiTranslation | TranslationData;
}
export interface TextData {
    translationData: UiTranslation | TranslationData;
}
export default class Text extends Component {
    static createText(uiApi: UiApi, options: TextOptions | SplitTextOptions): Text | SplitText;
    constructor(uiApi: UiApi, options?: TextOptions);
    getText(): string | undefined;
    setText(text: string | UiTranslation | TranslationData, refreshTranslations?: boolean): void;
    removeText(): void;
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
export interface SplitTextOptions extends IComponentOptions {
    splits: IStringSection[];
}
export declare class SplitText extends Component {
    constructor(uiApi: UiApi, options: SplitTextOptions);
}
