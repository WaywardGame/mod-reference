import Button from "newui/element/Button";
import Component from "newui/element/Component";
import { IComponent, IContextMenu, TextOrTranslationData } from "newui/element/IComponent";
import { UiApi } from "newui/INewUi";
export interface IOptionDescription<T extends IComponent = IComponent> {
    text: TextOrTranslationData;
    submenu?(uiApi: UiApi, host: T): IContextMenu;
}
export default class ContextMenu<OptionType extends number | string = number | string> extends Component implements IContextMenu<OptionType> {
    private readonly descriptions;
    private readonly options;
    constructor(uiApi: UiApi, descriptions: Description<IOptionDescription>);
    addAllDescribedOptions(): this;
    addOptions(...options: ArrayOfTOrIterablesOfT<OptionType>): this;
    disableOptions(...options: ArrayOfTOrIterablesOfT<OptionType>): this;
    setPosition(x: number, y: number): this;
}
export declare class ContextMenuOption extends Button {
    constructor(uiApi: UiApi, description: IOptionDescription);
}
