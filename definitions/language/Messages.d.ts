/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { DamageType } from "Enums";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
export declare const equipTypeToMessage: Message[];
export declare const damageTypeToMessage: Message[];
/**
 * Damage types are bit flags, so multiple can be stored in one `DamageType`.
 * This method returns a translated list of damage types.
 */
export declare function fullDamageType(damageTypes: DamageType[], reformatter?: (type: DamageType) => Translation): Translation;
export declare const recipeLevelToMessage: Message[];
