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
import { IHookHost } from "mod/IHookHost";
import { Bindable, BindCatcherApi } from "newui/BindingManager";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { IRefreshableValue } from "newui/component/Refreshable";
export declare enum DropdownEvent {
    /**
     * @param optionId The new option which is selected.
     */
    Selection = "Selection"
}
export declare type IDropdownOption<OptionId = string | number> = [OptionId, (option: Button) => any];
export interface IDropdownData<OptionId = string | number> {
    defaultOption: OptionId;
    options: Iterable<IDropdownOption<OptionId>>;
}
export default class Dropdown<OptionId = string | number> extends Component implements IRefreshableValue<IDropdownData<OptionId>>, IHookHost {
    protected optionsWrapper: Component;
    private readonly optionsWrapperWrapper;
    private readonly inputButton;
    private readonly options;
    private refreshMethod;
    private visibleOptions;
    private defaultOption?;
    private open;
    private isFirstSelection;
    private _selection;
    readonly selection: OptionId;
    private hovered;
    constructor();
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    showDropdown(): void;
    hideDropdown(): void;
    select(optionId: OptionId | undefined): void;
    selectDefault(): void;
    setRefreshMethod(refresh: () => IDropdownData<OptionId>): this;
    refresh(): this;
    private selectNext;
    private selectPrevious;
    private selectionMove;
    private updateWrapperPosition;
    private filter;
}
