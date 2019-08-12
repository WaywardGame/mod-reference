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
import { DoodadType, DoodadTypeGroup } from "doodad/IDoodad";
import { IDropdownOption } from "newui/component/Dropdown";
import GroupDropdown from "newui/component/GroupDropdown";
export declare class DoodadDropdown<OTHER_OPTIONS extends string = never> extends GroupDropdown<typeof DoodadType, OTHER_OPTIONS, DoodadTypeGroup> {
    constructor(defaultOption: OTHER_OPTIONS | keyof typeof DoodadType, options: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    protected filterEnum(id: DoodadType): boolean;
    protected getGroupName(group: DoodadTypeGroup): string;
    protected isInGroup(doodad: DoodadType, group: DoodadTypeGroup): boolean;
    protected getGroups(): import("../../../utilities/stream/Stream").default<DoodadTypeGroup>;
}
