import { UiTranslation } from "language/ILanguage";
import { IUiElementOptions, TranslationData } from "newui/element/IUiElement";
import UiElement from "newui/element/UiElement";
import { UiApi } from "newui/INewUi";
import { ISplit } from "utilities/string/Interpolate";
export interface TextOptions extends IUiElementOptions {
    text?: string | UiTranslation | TranslationData;
}
export interface TextData {
    translationData: UiTranslation | TranslationData;
}
export default class UiText<T = any> extends UiElement<T & TextData> {
    constructor(uiApi: UiApi, options?: TextOptions);
    getText(): string | undefined;
    setText(text: string | UiTranslation | TranslationData, refreshTranslations?: boolean): void;
    removeText(): void;
}
export declare class Paragraph<T = any> extends UiText<T> {
    constructor(uiApi: UiApi, options?: TextOptions);
}
export declare class Block<T = any> extends Paragraph<T> {
    constructor(uiApi: UiApi, options?: TextOptions);
}
export declare class Heading<T = any> extends UiText<T> {
    constructor(uiApi: UiApi, options?: TextOptions);
}
export interface SplitTextOptions extends IUiElementOptions {
    splits: ISplit[];
}
export declare class SplitText<T = any> extends UiElement<T> {
    constructor(uiApi: UiApi, options: SplitTextOptions);
}
