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
export declare enum TranslationType {
    all = "all",
    name = "name",
    description = "description",
    prefix = "prefix",
    suffix = "suffix"
}
export declare enum LanguageExtensions {
}
export interface ILanguageManager {
    add(language: ILanguage): void;
    remove(language: ILanguage): void;
    getDefault(): ILanguage;
    getLanguages(): ILanguage[];
    getLanguage(name: string): ILanguage | undefined;
    getLoaded(): ILanguage;
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
    load(language: ILanguage): void;
    evalString(str: string): string;
    shouldWarnOnInvalidOrMissingEntry(entryName?: string): boolean;
    extendLanguage(id: number, languageName: string, extension: ILanguageExtension): void;
    removeExtension(id: number): void;
}
export default ILanguageManager;
