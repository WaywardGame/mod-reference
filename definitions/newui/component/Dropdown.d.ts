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
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import { IHookHost } from "mod/IHookHost";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { IRefreshableValue } from "newui/component/Refreshable";
import { Bindable, BindCatcherApi } from "newui/IBindingManager";
interface IDropdownEvents<O = string | number> extends Events<Component> {
    /**
     * @param optionId The new option which is selected.
     */
    selection(optionId: O, isFirstSelection: boolean): any;
}
export declare type IDropdownOption<OptionId = string | number> = [OptionId, (option: Button) => any];
export interface IDropdownData<OptionId = string | number> {
    defaultOption: OptionId;
    options: Iterable<IDropdownOption<OptionId>>;
}
export default class Dropdown<O = string | number> extends Component implements IRefreshableValue<IDropdownData<O>>, IHookHost {
    event: IEventEmitter<this, IDropdownEvents<O>>;
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
    readonly selection: O;
    private hovered;
    constructor();
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    showDropdown(): void;
    hideDropdown(): void;
    select(optionId: O | undefined): void;
    selectDefault(): void;
    setRefreshMethod(refresh: () => IDropdownData<O>): this;
    refresh(): this;
    protected selectNext(): void;
    protected selectPrevious(): void;
    protected selectionMove(direction: "next" | "prev"): void;
    protected filter(filterBy?: string): void;
    protected optionMatchesFilter(filter: string, filterWords: string[], option: O, button: Button): boolean;
    protected optionMatchesFilterWord(word: string, option: O, text: string): boolean;
    private updateWrapperPosition;
}
export {};
