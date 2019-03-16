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
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { IContextMenu, TranslationGenerator } from "newui/component/IComponent";
export declare type IOptionDescription = {
    translation: TranslationGenerator;
    create?(option: Button): Button;
} & ({
    submenu(): IContextMenu;
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
    constructor(...descriptions: Array<ContextMenuOptionKeyValuePair<O> | undefined>);
    addAllDescribedOptions(): this;
    addOptions(...options: ArrayOfIterablesOr<O>): this;
    disableOptions(...options: ArrayOfIterablesOr<O>): this;
    removeOptions(...options: ArrayOfIterablesOr<O>): this;
    setPosition(x: number, y: number, right?: boolean): this;
    hideAndRemove(): Promise<void>;
    private getDescription;
}
export declare class ContextMenuOption extends Button {
    private submenu?;
    private readonly submenuDescription?;
    private isActive;
    constructor(description: IOptionDescription);
    hideSubmenu(): void;
    hideAndRemove(): Promise<void>;
    onSelected(): void;
    onUnselected(): void;
    protected showSubmenu(generator: () => IContextMenu): void;
}
