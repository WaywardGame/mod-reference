/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
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
    constructor(uiApi: UiApi, ...descriptions: Array<ContextMenuOptionKeyValuePair<O> | undefined>);
    addAllDescribedOptions(): this;
    addOptions(...options: ArrayOfIterablesOfOr<O>): this;
    disableOptions(...options: ArrayOfIterablesOfOr<O>): this;
    removeOptions(...options: ArrayOfIterablesOfOr<O>): this;
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
