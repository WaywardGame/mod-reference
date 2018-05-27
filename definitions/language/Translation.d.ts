import { Dictionary, UiTranslation } from "language/ILanguage";
import { TranslationType } from "language/ILanguageManager";
import { Message } from "language/IMessages";
import Interpolator, { IStringSection } from "utilities/string/Interpolator";
export interface ITranslationData {
    dictionary: Dictionary;
    entry: number | [number, TranslationType];
    shouldTrim?: boolean;
}
export interface ILanguageEntryProvider {
    get(dictionary: Dictionary, entry: number | [number, TranslationType]): string | undefined;
}
export declare type TranslationString = Translation & string;
export declare type SplitTranslationString = Translation<IStringSection[]> & IStringSection[];
export default class Translation<R extends string | IStringSection[] = string> {
    static readonly defaultInterpolator: Interpolator;
    static convertMakeStringToInterpolation(makeString: string): string;
    static provider: ILanguageEntryProvider;
    static ui: (entry: string | UiTranslation) => TranslationString;
    static message: (entry: string | Message) => TranslationString;
    private readonly translationData;
    private baseTranslation;
    private keepData;
    private usingOldSystem;
    /**
     * Creates from a dictionary and entry
     */
    constructor(dictionary: Dictionary, entry: number | string | [number, TranslationType]);
    /**
     * Creates from a translation id. Entry matching is done by changing the case-style of the inputted
     * translation id, so if you provide an all lower-case string it will not work!
     *
     * Examples that do work:
     *
     * - `Ui.MenuMainButtonContinueGame`
     * - `ui.menu-main-button-continue-game`
     * - `Ui.Menu-Main-Button-Continue-Game`
     *
     * Examples that don't work:
     *
     * - `UI.MENU-MAIN-BUTTON-CONTINUE-GAME`
     * - `Ui.menumainbuttoncontinuegame`
     * - `UI.MENUMAINBUTTONCONTINUEGAME`
     */
    constructor(translationId: string);
    /**
     * Creates from an `ITranslationData`
     */
    constructor(translationData: ITranslationData);
    /**
     * Vague constructor
     */
    constructor(dictionary: number | string | ITranslationData, entry?: number | string | [number, TranslationType]);
    setUsingOldSystem(): this;
    setKeepData(): Translation<IStringSection[]> & IStringSection[];
    setNoTrim(): this;
    has(): boolean;
    /**
     * Returns this translation with arguments interpolated
     */
    get(...args: any[]): R;
    /**
     * Returns the translation ID
     */
    getId(translationData: ITranslationData): string;
    /**
     * Returns the translated string with no arguments.
     */
    toString(): R;
    private parseTranslationId(translationId);
    private getDictionaryId(dictionaryName);
    private getEntryId(dictionaryName, entryName);
}
