import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { IContextMenu, TranslationGenerator } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
export declare type IOptionDescription = {
    translation: TranslationGenerator;
    create?(option: Button): Button;
} & ({
    submenu(uiApi: UiApi): IContextMenu;
} | {
    onActivate(): any;
});
export declare enum ContextMenuEvent {
    Chosen = "Chosen",
    BecomeActive = "ShowSubmenu"
}
export declare type ContextMenuOptionKeyValuePair<O extends number | string | symbol = number | string | symbol> = [O, IOptionDescription];
export default class ContextMenu<O extends number | string | symbol = number | string | symbol> extends Component implements IContextMenu<O> {
    private activeOption;
    private readonly descriptions;
    private readonly options;
    constructor(uiApi: UiApi, ...descriptions: Array<ContextMenuOptionKeyValuePair<O>>);
    addAllDescribedOptions(): this;
    addOptions(...options: ArrayOfTOrIterablesOfT<O>): this;
    disableOptions(...options: ArrayOfTOrIterablesOfT<O>): this;
    removeOptions(...options: ArrayOfTOrIterablesOfT<O>): this;
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
