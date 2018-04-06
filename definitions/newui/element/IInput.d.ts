import { TextOrTranslationData } from "newui/element/IUiElement";
export interface InputOptions {
    placeholder?: TextOrTranslationData;
    default?: TextOrTranslationData;
    maxLength?: number;
    canBeEmpty?: boolean;
    clearTo?: TextOrTranslationData;
}
