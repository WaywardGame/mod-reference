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
import { Dictionary, ILanguage, ILanguageExtension, ITranslation, UiTranslation } from "language/ILanguage";
import ILanguageManager, { TranslationType } from "language/ILanguageManager";
export default class LanguageManager implements ILanguageManager {
    private readonly languages;
    private loaded;
    private readonly uiTranslationsToSelector;
    constructor();
    add(language: ILanguage): void;
    remove(language: ILanguage): void;
    extendLanguage(id: number, languageName: string, extension: ILanguageExtension): void;
    removeExtension(id: number): void;
    getDefault(): ILanguage;
    addTranslateSelector(id: UiTranslation, selector: string | string[], attribute?: string, html?: boolean, func?: (translation: string) => string): void;
    addTranslateSelectors(...translateSelectors: Array<([UiTranslation, string | string[]] | [UiTranslation, string | string[], string] | [UiTranslation, string | string[], string, boolean] | [UiTranslation, string | string[], string, boolean, (translation: string) => string])>): void;
    getLanguages(): ILanguage[];
    getLanguage(name: string): ILanguage | undefined;
    getLoaded(): ILanguage;
    getDictionary(dictionaryName: string): Dictionary;
    getEntry(dictionaryName: string, entryName: string): number;
    getDictionaryId(dictionaryName: string): Dictionary;
    getEntryId(dictionaryName: string, entryName: string): number;
    parseTranslationId(translationId: string): [number, number, TranslationType] | undefined;
    createTranslationId(dictionary: number, entry: number, translationType?: TranslationType): string;
    getTranslation(translationId: string): string | ITranslation;
    getTranslation(dictionary: Dictionary, entry: number): ITranslation;
    getTranslation(dictionary: Dictionary, entry: number, translationType: TranslationType.all): ITranslation;
    getTranslation(dictionary: Dictionary, entry: number, translationType: TranslationType): string;
    getTranslationString(translationId: string): string;
    getTranslationString(dictionary: Dictionary.BindPress, entry: string): string;
    getTranslationString(dictionary: Dictionary, entry: number): string;
    getTranslationString(dictionary: Dictionary, entry: number, translationType: TranslationType.all): string;
    getTranslationString(dictionary: Dictionary, entry: number, translationType: TranslationType): string;
    getTranslationString(translation: ITranslation): string;
    getUiTranslation(translation: UiTranslation): string;
    reload(): void;
    refreshUiTranslations(v: UiTranslation | string): void;
    refreshUiTranslation(element: JQuery): void;
    evalString(str: string): string;
    serialize(language: ILanguage): any;
    load(language: ILanguage): void;
    shouldWarnOnInvalidOrMissingEntry(str?: string): boolean;
    serializeLanguageToFile(): void;
    private warnOnInvalidOrMissingEntries;
    private setup;
}
