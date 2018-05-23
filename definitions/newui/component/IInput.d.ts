import { TextOrTranslationData } from "newui/component/IComponent";
export interface InputOptions {
    placeholder?: TextOrTranslationData;
    default?: TextOrTranslationData;
    maxLength?: number;
    canBeEmpty?: boolean;
    clearTo?: TextOrTranslationData;
    /**
     * Defaults to true
     */
    shouldBlurWhenEnterPressedAndEmpty?: boolean;
}
