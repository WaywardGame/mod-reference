import ILanguageManager from "ILanguageManager";
import { Dictionary, ILanguage, UiMessageStatic } from "language/ILanguage";
export default class LanguageManager implements ILanguageManager {
    private languages;
    private loaded;
    private uiTranslationsToSelector;
    constructor();
    add(language: ILanguage): void;
    remove(language: ILanguage): void;
    getDefault(): ILanguage;
    addTranslateSelector(id: UiMessageStatic, selector: string | string[], attribute?: string, html?: boolean, func?: (translation: string) => string): void;
    addTranslateSelectors(...translateSelectors: Array<([UiMessageStatic, string | string[]] | [UiMessageStatic, string | string[], string] | [UiMessageStatic, string | string[], string, boolean] | [UiMessageStatic, string | string[], string, boolean, (translation: string) => string])>): void;
    getLanguages(): ILanguage[];
    getLanguage(name: string): ILanguage | undefined;
    getLoaded(): ILanguage;
    getTranslation(dictionary: Dictionary, entryIndex: number): string;
    reload(): void;
    refreshUiTranslation(v: UiMessageStatic | string): void;
    evalString(str: string): string;
    serialize(language: ILanguage): any;
    load(language: ILanguage): void;
    shouldWarnOnInvalidOrMissingEntry(str?: string): boolean;
    private setup();
}
