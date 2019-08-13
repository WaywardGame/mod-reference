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
import Component from "newui/component/Component";
import { IDropdownOption } from "newui/component/Dropdown";
import EnumDropdown from "newui/component/dropdown/EnumDropdown";
import { BindCatcherApi } from "newui/IBindingManager";
import Tooltip from "newui/tooltip/Tooltip";
import { IVector2 } from "utilities/math/IVector";
export default abstract class GroupDropdown<ENUM_OBJECT, OTHER_OPTIONS extends string, GROUP extends number, VALUES = ENUM_OBJECT[keyof ENUM_OBJECT]> extends EnumDropdown<ENUM_OBJECT, OTHER_OPTIONS, VALUES> {
    private groups;
    private tooltip?;
    private lastGroupText?;
    private readonly wordToGroups;
    constructor(enumObject: ENUM_OBJECT, dictionary: Dictionary, defaultOption: VALUES | OTHER_OPTIONS, options: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    protected optionMatchesFilterWord(word: string, option: VALUES | OTHER_OPTIONS, text: string): boolean;
    protected abstract getGroups(): Iterable<GROUP>;
    protected abstract getGroupName(group: GROUP): string;
    protected abstract isInGroup(option: ENUM_OBJECT[keyof ENUM_OBJECT], group: GROUP): boolean;
    protected isMouseWithin(api: BindCatcherApi): boolean;
    protected onOpen(): void;
    protected onClose(): void;
    protected onFilterChange(): void;
    protected updateTooltip(): GroupDropdownTooltip;
    protected onRegenerateBox(): void;
    private getTooltip;
    private getGroupMap;
    private addGroup;
}
declare class GroupDropdownTooltip extends Tooltip {
    constructor(source: Component);
    updatePosition(position?: IVector2, force?: boolean): this;
    protected onShow(): void;
}
export {};
