import { Dictionary, ILanguage, UiMessageStatic } from "language/ILanguage";
export interface ILanguageManager {
    add(language: ILanguage): void;
    remove(language: ILanguage): void;
    getDefault(): ILanguage;
    getLanguages(): ILanguage[];
    getLanguage(name: string): ILanguage | undefined;
    getLoaded(): ILanguage;
    getTranslation(dictionary: Dictionary, entryIndex: number): string;
    reload(): void;
    refreshUiTranslation(v: UiMessageStatic | string): void;
    load(language: ILanguage): void;
    evalString(str: string): string;
}
export default ILanguageManager;
