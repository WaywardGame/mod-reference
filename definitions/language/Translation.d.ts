import { Dictionary, UiTranslation } from "language/ILanguage";
import { TranslationType } from "language/ILanguageManager";
import { Message } from "language/IMessages";
import Interpolator, { IStringSection } from "utilities/string/Interpolator";
export interface ITranslationData {
    dictionary: Dictionary;
    entry: number | [number, TranslationType];
}
export interface ILanguageEntryProvider {
    get(dictionary: Dictionary, entry: number | [number, TranslationType]): string | undefined;
}
export default class Translation {
    static readonly defaultInterpolator: Interpolator;
    static convertMakeStringToInterpolation(makeString: string): string;
    static formatList(entries: IterableOf<string | IStringSection[]>): IStringSection[];
    static getString(entries: IterableOf<string | IStringSection>): string;
    /**
     * DO NOT USE THIS METHOD
     *
     * Unless the text is PRE-GENERATED and there is NO WAY TO TRANSLATE IT.
     *
     * Example uses include text the user inputs, and text from other sites (steam/trello)
     */
    static createTranslationGenerator(pregeneratedText: string | IStringSection[]): () => IStringSection[];
    static provider: ILanguageEntryProvider;
    static ui: (entry: string | UiTranslation) => Translation;
    static message: (entry: string | Message) => Translation;
    private readonly translationData;
    private baseTranslation;
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
    has(): boolean;
    /**
     * Returns this translation as a list of string sections
     */
    get(...args: any[]): IStringSection[];
    /**
     * Returns the translation as a string
     */
    getString(...args: any[]): string;
    /**
     * Returns the translation ID
     */
    getId(translationData: ITranslationData): string;
    private parseTranslationId(translationId);
    private getDictionaryId(dictionaryName);
    private getEntryId(dictionaryName, entryName);
}
