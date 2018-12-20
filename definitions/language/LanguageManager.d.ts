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
import { CaseStyle } from "Enums";
import { Dictionary } from "language/Dictionaries";
import UiTranslation from "language/dictionary/UiTranslation";
import Language from "language/Language";
import LanguageExtension from "language/LanguageExtension";
import Translation from "language/Translation";
import TranslationsProvider from "language/TranslationsProvider";
export interface ISerializedTranslationsProvider {
    dictionaries: {
        [key: string]: {
            [key: string]: string | string[];
        };
    };
    pluralizationRules?: {
        pluralRules?: {
            [key: string]: string;
        };
        singularRules?: {
            [key: string]: string;
        };
        uncountables?: string[];
        irregularRules?: Array<[string, string]>;
        articleRules?: Array<[number, string, string]>;
    };
}
export interface ISerializedLanguage extends ISerializedTranslationsProvider {
    name: string;
    alternateFontStyle?: boolean;
}
export interface ISerializedLanguageExtension extends ISerializedTranslationsProvider {
    extends: string;
}
export declare enum NounType {
    Singular = 0,
    Plural = 1,
    Uncountable = 2,
    Unknown = 3
}
export default class LanguageManager {
    language: string;
    private readonly translationProviders;
    readonly providers: ReadonlyArray<TranslationsProvider>;
    private orderedTranslationProviders?;
    readonly orderedProviders: ReadonlyArray<TranslationsProvider>;
    constructor();
    initialize(): void;
    getTranslation(dictionary: Dictionary, entry: number | string, ignoreInvalid?: boolean): string[] | undefined;
    add(provider: TranslationsProvider): void;
    remove(provider: TranslationsProvider): void;
    serialize(languageName?: string, caseStyle?: CaseStyle): ISerializedLanguage | undefined;
    serializeLanguageToFile(language?: string, caseStyle?: CaseStyle): void;
    deserialize(serialized: ISerializedLanguage | ISerializedLanguageExtension): Language | LanguageExtension;
    generateSchema(): void;
    reformatSingularNoun(noun: string, count: number, article?: boolean): string;
    private getNounType;
    private plural;
    private getEntryNameFromEntryId;
    private readonly uiTranslationsToSelector;
    private setup;
    private addTranslateSelector;
    private addTranslateSelectors;
    refreshUiTranslations(v: UiTranslation | string): void;
}
export interface ISelector {
    selector: string | string[];
    html?: boolean;
    attribute?: string;
    func?(translation: Translation): string;
}
export interface ISelectorArray {
    [index: number]: ISelector;
}
