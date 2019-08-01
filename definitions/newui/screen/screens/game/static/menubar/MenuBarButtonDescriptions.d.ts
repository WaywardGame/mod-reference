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
import { IHasImagePath } from "game/IObject";
import { IModdable } from "mod/ModRegistry";
import Button from "newui/component/Button";
import { ITooltip } from "newui/component/IComponent";
import { Bindable } from "newui/IBindingManager";
export declare enum MenuBarButtonType {
    Menu = 0,
    Save = 1,
    Help = 2,
    QuickSettings = 3,
    Milestones = 4,
    Notes = 5,
    Quests = 6,
    Messages = 7,
    Actions = 8,
    Inventory = 9,
    Crafting = 10,
    Equipment = 11,
    Skills = 12
}
export interface IMenuBarButtonDescription extends IModdable, IHasImagePath {
    imageWidth?: number;
    imageHeight?: number;
    /**
     * Sorts this menu bar button into a group of other similar menu bar buttons.
     *
     * Internally, `MenuBarButtonGroup.Meta` and `MenuBarButtonGroup.World` are used. Not providing a group
     * adds it to an unsorted group.
     */
    group?: string | number;
    /**
     * Adds the bindable's current bind translation to the tooltip automatically.
     */
    bindable?: Bindable;
    /**
     * What should happen when this button is clicked.
     */
    onActivate(): any;
    onCreate?(button: Button): any;
    tooltip?(tooltip: ITooltip, button: Button): ITooltip;
}
export declare enum MenuBarButtonGroup {
    Meta = 0,
    World = 1
}
declare const menuBarButtonDescriptions: Descriptions<MenuBarButtonType, IMenuBarButtonDescription>;
export default menuBarButtonDescriptions;
