import { CaseStyle } from "Enums";
import { ILanguage } from "language/ILanguage";
import Language from "language/Language";
export interface SerializedLanguage {
    name: string;
    alternateFontStyle?: boolean;
    shouldPluralize?: boolean;
    dictionaries: {
        [key: string]: {
            [key: string]: string | string[];
        };
    };
}
export declare function deserialize(serialized: SerializedLanguage): Language;
export declare function serialize(language: ILanguage, caseStyle?: CaseStyle): SerializedLanguage;
