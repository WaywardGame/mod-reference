import Component from "newui/component/Component";
import { IComponentOptions } from "newui/component/IComponent";
import { Refreshable } from "newui/component/Refreshable";
import { TextOptions } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
export interface IDropdownOptions<OptionId = string | number> extends Partial<IComponentOptions> {
    defaultOption?: OptionId | (() => OptionId);
    options?: GeneratorOf<IDropdownOption<OptionId>>;
    refresh?(): OptionId | undefined;
}
export interface IDropdownOption<OptionId> {
    id: OptionId;
    options: TextOptions;
}
export declare enum DropdownEvent {
    Selection = "Selection",
}
export default class Dropdown<OptionId = string | number> extends Component implements Refreshable {
    protected optionsWrapper: Component;
    private readonly inputButton;
    private options;
    private defaultOption?;
    private optionsSource?;
    private optionsRefreshable;
    private open;
    private isFirstSelection;
    private _selection;
    readonly selection: OptionId;
    private _bindLoop;
    constructor(uiApi: UiApi, options?: IDropdownOptions<OptionId>);
    /**
     * Adds an option permanently to the dropdown. When options are added this way, the dropdown list is not refreshable.
     * @param optionId The ID of the option, a string or number.
     * @param options The option display information.
     */
    addOption(optionId: OptionId, options: TextOptions): Promise<void>;
    /**
     * Sets the options to an iterable. The iterable is saved to allow the options to be refreshed.
     * Any existing options are retained. If called multiple times, the options are no longer refreshable.
     * @param options An iterable of dropdown options.
     */
    setOptions(options: GeneratorOf<IDropdownOption<OptionId>>): Promise<void>;
    dumpOptions(): Promise<void>;
    showDropdown(): void;
    hideDropdown(): void;
    select(optionId: OptionId | undefined): Promise<void>;
    selectDefault(): Promise<void>;
    refresh(): Promise<void>;
    private addOptionInternal(optionId, options);
    private filter(filterBy?);
    private onBindLoop(_, api);
}
