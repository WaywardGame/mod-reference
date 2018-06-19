import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { IContextMenu, TranslationGenerator } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
export declare type IOptionDescription = {
    translation: TranslationGenerator;
} & ({
    submenu(uiApi: UiApi): IContextMenu;
} | {
    onActivate(): any;
});
export declare enum ContextMenuEvent {
    Chosen = "Chosen",
    BecomeActive = "ShowSubmenu"
}
export default class ContextMenu<OptionType extends number | string = number | string> extends Component implements IContextMenu<OptionType> {
    private activeOption;
    private readonly descriptions;
    private readonly options;
    constructor(uiApi: UiApi, ...descriptions: Array<[OptionType, IOptionDescription]>);
    addAllDescribedOptions(): this;
    addOptions(...options: ArrayOfTOrIterablesOfT<OptionType>): this;
    disableOptions(...options: ArrayOfTOrIterablesOfT<OptionType>): this;
    removeOptions(...options: ArrayOfTOrIterablesOfT<OptionType>): this;
    setPosition(x: number, y: number, right?: boolean): this;
    hideAndRemove(): Promise<void>;
    private getDescription;
}
export declare class ContextMenuOption extends Button {
    private submenu?;
    private readonly submenuDescription?;
    private isActive;
    constructor(uiApi: UiApi, description: IOptionDescription);
    hideSubmenu(): void;
    hideAndRemove(): Promise<void>;
    onSelected(): void;
    onUnselected(): void;
    protected showSubmenu(generator: (uiApi: UiApi) => IContextMenu): void;
}
