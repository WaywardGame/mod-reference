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
import { IDropdownOption } from "newui/component/Dropdown";
import EnumDropdown from "newui/component/dropdown/EnumDropdown";
import { TerrainType } from "tile/ITerrain";
export default class TerrainDropdown<OTHER_OPTIONS extends string = never> extends EnumDropdown<typeof TerrainType, OTHER_OPTIONS> {
    constructor(defaultOption: OTHER_OPTIONS | TerrainType, options: Iterable<IDropdownOption<OTHER_OPTIONS>>);
}
