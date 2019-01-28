/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
export declare type PluralRule = [RegExp, string];
export declare type SingularRule = [RegExp, string];
export declare type UncountableRule = RegExp;
export declare type IrregularRule = [string, string];
export declare type NameRule = [CountMatcher, RegExp, string];
export declare type CountMatcher = number | {
    min: number;
    max?: number;
} | null;
export interface IPluralizationRules {
    pluralRules: PluralRule[];
    singularRules: SingularRule[];
    uncountables: UncountableRule[];
    irregularRules: IrregularRule[];
    articleRules: NameRule[];
}
export default abstract class TranslationsProvider {
    readonly dictionaries: Map<string, Map<string, string[]>>;
    readonly language: string;
    readonly pluralizationRules: IPluralizationRules;
    constructor(language: string);
    getTranslation(dictionaryName: string, entry: string): string[] | undefined;
    setDictionary(dictionary: string, translations: {
        [key: string]: string | string[];
    }): this;
    setIrregularRules(...rules: IrregularRule[]): this;
    setPluralizationRules(...rules: Array<PluralRule | [string, string]>): this;
    setSingularizationRules(...rules: Array<SingularRule | [string, string]>): this;
    setUncountableRules(...rules: Array<RegExp | string>): this;
    setArticleRules(...rules: Array<NameRule | [CountMatcher, string, string]>): this;
    private getEntryName;
}
