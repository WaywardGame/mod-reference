import { Dictionary } from "language/ILanguage";
import { ISplit } from "utilities/string/Interpolate";
export interface ITranslationData {
    dictionary: Dictionary;
    entry: number;
    shouldTrim?: boolean;
}
export interface ILanguageEntryProvider {
    get(dictionary: Dictionary, entry: number): string | undefined;
}
export default class Translation<R extends string | ISplit[] = string> {
    static provider: ILanguageEntryProvider;
    static ui: any;
    private readonly translationData;
    private readonly baseTranslation;
    private colorsAllowed;
    /**
     * Creates from a dictionary and entry
     */
    constructor(dictionary: Dictionary, entry: number);
    /**
     * Creates from a translation id
     */
    constructor(translationId: string);
    /**
     * Creates from an `ITranslationData`
     */
    constructor(translationData: ITranslationData);
    /**
     * Vague constructor
     */
    constructor(dictionary: number | string | ITranslationData, entry?: number | string);
    setColorsAllowed(): Translation<ISplit[]>;
    setNoTrim(): this;
    has(): boolean;
    get(...args: any[]): R;
    private getFakeTranslation(translationData);
    private parseTranslationId(translationId);
    private getDictionaryId(dictionaryName);
    private getEntryId(dictionaryName, entryName);
}
