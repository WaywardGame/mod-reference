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
import { DamageType } from "Enums";
import { Message } from "language/IMessages";
export declare function makeString(msg: Message | string, ...variables: any[]): string;
export declare const messages: {
    [key in Message]: string;
};
export default messages;
export declare const equipTypeToMessage: Message[];
export declare const damageTypeToMessage: Message[];
export declare function fullDamageType(...damageTypes: DamageType[]): string;
export declare const recipeLevelToMessage: Message[];
