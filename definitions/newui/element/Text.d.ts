import { UiTranslation } from "language/ILanguage";
import Component from "newui/element/Component";
import { IComponentOptions, TranslationData } from "newui/element/IComponent";
import { UiApi } from "newui/INewUi";
import { ISplit } from "utilities/string/Interpolate";
export interface TextOptions extends IComponentOptions {
    text?: string | UiTranslation | TranslationData;
}
export interface TextData {
    translationData: UiTranslation | TranslationData;
}
export default class UiText extends Component {
    constructor(uiApi: UiApi, options?: TextOptions);
    getText(): string | undefined;
    setText(text: string | UiTranslation | TranslationData, refreshTranslations?: boolean): void;
    removeText(): void;
}
export declare class Paragraph extends UiText {
    constructor(uiApi: UiApi, options?: TextOptions);
}
export declare class Block extends Paragraph {
    constructor(uiApi: UiApi, options?: TextOptions);
}
export declare class Heading extends UiText {
    constructor(uiApi: UiApi, options?: TextOptions);
}
export interface SplitTextOptions extends IComponentOptions {
    splits: ISplit[];
}
export declare class SplitText extends Component {
    constructor(uiApi: UiApi, options: SplitTextOptions);
}
