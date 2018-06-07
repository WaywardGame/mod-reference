import { Bindable } from "Enums";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { IRefreshableValue } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
export declare enum DropdownEvent {
    Selection = "Selection"
}
export declare type IDropdownOption<OptionId = string | number> = [OptionId, (option: Button) => any];
export interface IDropdownData<OptionId = string | number> {
    defaultOption: OptionId;
    options: IterableOf<IDropdownOption<OptionId>>;
}
export default class Dropdown<OptionId = string | number> extends Component implements IRefreshableValue<IDropdownData<OptionId>>, IHookHost {
    protected optionsWrapper: Component;
    private readonly inputButton;
    private options;
    private refreshMethod;
    private defaultOption?;
    private open;
    private isFirstSelection;
    private _selection;
    readonly selection: OptionId;
    constructor(uiApi: UiApi);
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    showDropdown(): void;
    hideDropdown(): void;
    select(optionId: OptionId | undefined): void;
    selectDefault(): void;
    setRefreshMethod(refresh: () => IDropdownData<OptionId>): this;
    refresh(): this;
    private filter;
}
