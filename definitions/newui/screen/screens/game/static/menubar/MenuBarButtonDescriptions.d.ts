import { Bindable } from "Enums";
import { ITooltip } from "newui/component/IComponent";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
export declare enum MenuBarButtonType {
    Menu = 0,
    Save = 1,
    Help = 2,
    QuickSettings = 3,
    Milestones = 4,
    Notes = 5,
    Messages = 6,
    Actions = 7,
    Inventory = 8,
    Crafting = 9,
    Equipment = 10,
    Skills = 11,
}
export interface IMenuBarButtonDescription {
    imagePath?: string;
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
     * @returns `false` if the activation was cancelled, `true` or `undefined` otherwise.
     */
    onActivate(api: IGameScreenApi): boolean | undefined | void | Promise<void>;
    tooltip?(tooltip: ITooltip): ITooltip;
}
export declare enum MenuBarButtonGroup {
    Meta = 0,
    World = 1,
}
declare const menuBarButtonDescriptions: Description<IMenuBarButtonDescription>;
export default menuBarButtonDescriptions;
