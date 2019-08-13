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
import { ItemType, ItemTypeGroup } from "item/IItem";
import { IDropdownOption } from "newui/component/Dropdown";
import GroupDropdown from "newui/component/GroupDropdown";
export default class ItemDropdown<OTHER_OPTIONS extends string = never> extends GroupDropdown<typeof ItemType, OTHER_OPTIONS, ItemTypeGroup, Exclude<ItemType, ItemType.None>> {
    constructor(defaultOption: OTHER_OPTIONS | Exclude<ItemType, ItemType.None>, options?: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    protected filterEnum(value: ItemType): boolean;
    protected getGroupName(group: ItemTypeGroup): string;
    protected isInGroup(item: ItemType, group: ItemTypeGroup): boolean;
    protected getGroups(): import("../../../utilities/stream/Stream").default<ItemTypeGroup>;
}
