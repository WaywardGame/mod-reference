import { Dictionary, ILanguage, ILanguageExtension, INameDescription, UiMessageStatic } from "language/ILanguage";
export declare enum LanguageExtensions {
}
export interface ILanguageManager {
    add(language: ILanguage): void;
    remove(language: ILanguage): void;
    getDefault(): ILanguage;
    getLanguages(): ILanguage[];
    getLanguage(name: string): ILanguage | undefined;
    getLoaded(): ILanguage;
    getDefaultTranslation(translationId: string): string;
    getDefaultTranslation(dictionary: Dictionary, entry: number): string;
    getTranslation(translationId: string): INameDescription;
    getTranslation(dictionary: Dictionary, entry: number): INameDescription;
    reload(): void;
    refreshUiTranslations(v: UiMessageStatic | string): void;
    refreshUiTranslation(element: JQuery): void;
    load(language: ILanguage): void;
    evalString(str: string): string;
    shouldWarnOnInvalidOrMissingEntry(entryName?: string): boolean;
    extendLanguage(id: number, languageName: string, extension: ILanguageExtension): void;
    removeExtension(id: number): void;
}
export default ILanguageManager;
