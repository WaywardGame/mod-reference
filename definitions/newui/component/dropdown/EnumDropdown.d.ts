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
import { Dictionary } from "language/Dictionaries";
import Translation from "language/Translation";
import Dropdown, { IDropdownOption } from "newui/component/Dropdown";
export default class EnumDropdown<ENUM_OBJECT, OTHER_OPTIONS extends string, KEYS = keyof ENUM_OBJECT> extends Dropdown<KEYS | OTHER_OPTIONS> {
    protected readonly enumObject: ENUM_OBJECT;
    constructor(enumObject: ENUM_OBJECT, dictionary: Dictionary, defaultOption: KEYS | OTHER_OPTIONS, options: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    protected getTranslation(id: ENUM_OBJECT[keyof ENUM_OBJECT], dictionary: Dictionary): Translation;
    protected filterEnum?(id: ENUM_OBJECT[keyof ENUM_OBJECT]): boolean;
}
