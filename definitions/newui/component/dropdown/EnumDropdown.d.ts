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
export default class EnumDropdown<ENUM_OBJECT, OTHER_OPTIONS extends string, VALUES = ENUM_OBJECT[keyof ENUM_OBJECT]> extends Dropdown<VALUES | OTHER_OPTIONS> {
    protected readonly enumObject: ENUM_OBJECT;
    readonly selectionName: keyof ENUM_OBJECT | undefined;
    constructor(enumObject: ENUM_OBJECT, dictionary: Dictionary, defaultOption: VALUES | OTHER_OPTIONS, options: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    protected getTranslation(id: VALUES, dictionary: Dictionary): Translation;
    protected filterEnum?(id: VALUES): boolean;
}
