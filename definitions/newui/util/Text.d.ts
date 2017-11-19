import { UiTranslation } from "language/ILanguage";
import { TranslationData, UiApi, UiElementOptions } from "newui/INewUi";
import UiElement from "newui/util/UiElement";
export interface TextOptions extends UiElementOptions {
    text?: string | UiTranslation | TranslationData;
}
export interface TextData {
    translationData: UiTranslation | TranslationData;
}
export default class UiText<T = {}> extends UiElement<T & TextData> {
    constructor(uiApi: UiApi, options?: TextOptions);
    getText(): string | undefined;
    setText(text: string | UiTranslation | TranslationData, refreshTranslations?: boolean): void;
    removeText(): void;
}
export declare class Paragraph<T = {}> extends UiText<T> {
    constructor(uiApi: UiApi, options?: TextOptions);
}
export declare class Block<T = {}> extends Paragraph<T> {
    constructor(uiApi: UiApi, options?: TextOptions);
}
export declare class Heading<T = {}> extends UiText<T> {
    constructor(uiApi: UiApi, options?: TextOptions);
}
