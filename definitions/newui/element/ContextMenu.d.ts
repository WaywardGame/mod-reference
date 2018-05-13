import Button from "newui/element/Button";
import Component from "newui/element/Component";
import { IContextMenu, TextOrTranslationData, TextOrTranslationDataOrSectionsOrGenerator } from "newui/element/IComponent";
import { UiApi } from "newui/INewUi";
export declare type IOptionDescription = {
    text: TextOrTranslationData;
} & ({
    submenu(uiApi: UiApi): IContextMenu;
} | {
    onActivate(): any;
});
export declare enum ContextMenuEvent {
    Chosen = "Chosen",
    ShowSubmenu = "ShowSubmenu",
}
export default class ContextMenu<OptionType extends number | string = number | string> extends Component implements IContextMenu<OptionType> {
    private submenuOption;
    private readonly descriptions;
    private readonly options;
    constructor(uiApi: UiApi, ...descriptions: Array<[OptionType, IOptionDescription]>);
    addAllDescribedOptions(): this;
    addOptions(...options: ArrayOfTOrIterablesOfT<OptionType>): this;
    disableOptions(...options: ArrayOfTOrIterablesOfT<OptionType>): this;
    removeOptions(...options: ArrayOfTOrIterablesOfT<OptionType>): this;
    setPosition(x: number, y: number, right?: boolean): this;
    remove(): Promise<void>;
    private getDescription(id);
}
export declare class ContextMenuOption extends Button {
    private submenu?;
    constructor(uiApi: UiApi, description: IOptionDescription);
    setText(text: TextOrTranslationDataOrSectionsOrGenerator): void;
    hideSubmenu(): void;
    protected showSubmenu(generator: (uiApi: UiApi) => IContextMenu): void;
}
