import { UiApi, UiElementOptions } from "newui/INewUi";
import { Refreshable } from "newui/util/Refreshable";
import { TextOptions } from "newui/util/Text";
import UiElement from "newui/util/UiElement";
export interface DropdownOptions<IdType = string | number> extends Partial<UiElementOptions> {
    defaultOption?: IdType;
    refresh?(): IdType | undefined;
}
export declare type AddOptionsOptions<IdType> = Array<{
    id: IdType;
    options: TextOptions;
}>;
export declare enum DropdownEvent {
    Selection = "Selection",
}
export default class Dropdown<IdType = string | number, T = {}> extends UiElement<T> implements Refreshable {
    protected optionsWrapper: UiElement;
    private _selection;
    private inputButton;
    private defaultOption?;
    private _refresh;
    private options;
    private open;
    private bindLoop;
    readonly selection: IdType;
    constructor(uiApi: UiApi, options?: DropdownOptions<IdType>);
    addOption(optionId: IdType, options: TextOptions): this;
    addOptions(options: AddOptionsOptions<IdType>): this;
    dumpOptions(): Promise<void>;
    showDropdown(): void;
    hideDropdown(): void;
    select(optionId: IdType | undefined): void;
    selectDefault(): void;
    refresh(): void;
    private filter(filterBy?);
}
