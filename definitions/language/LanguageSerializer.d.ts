/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { CaseStyle } from "Enums";
import { ILanguage } from "language/ILanguage";
import Language from "language/Language";
export interface ISerializedLanguage {
    name?: string;
    extends?: string;
    alternateFontStyle?: boolean;
    shouldPluralize?: boolean;
    dictionaries: {
        [key: string]: {
            [key: string]: string | string[];
        };
    };
}
export declare const dictionaryEnums: any;
export declare function deserialize(serialized: ISerializedLanguage, into?: ILanguage): Language | undefined;
export declare function serialize(language: ILanguage, caseStyle?: CaseStyle): ISerializedLanguage;
