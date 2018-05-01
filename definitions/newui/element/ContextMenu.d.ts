import Button from "newui/element/Button";
import Component from "newui/element/Component";
import { IContextMenu, TextOrTranslationData } from "newui/element/IComponent";
import { UiApi } from "newui/INewUi";
export interface IOptionDescription {
    text: TextOrTranslationData;
}
export default class ContextMenu<OptionType extends number | string = number | string> extends Component implements IContextMenu<OptionType> {
    private readonly descriptions;
    private readonly options;
    constructor(uiApi: UiApi, descriptions: Description<IOptionDescription>);
    addOption(id: OptionType): void;
    addOptions(...options: VarArgsOfTOrIterable<OptionType>): void;
    setPosition(x: number, y: number): this;
}
export declare class ContextMenuOption extends Button {
    constructor(uiApi: UiApi, description: IOptionDescription);
}
