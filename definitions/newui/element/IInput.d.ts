import { TextOrTranslationData } from "newui/element/IComponent";
export interface InputOptions {
    placeholder?: TextOrTranslationData;
    default?: TextOrTranslationData;
    maxLength?: number;
    canBeEmpty?: boolean;
    clearTo?: TextOrTranslationData;
}
