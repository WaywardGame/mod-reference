import { Bindable } from "Enums";
import { ITooltipOptions } from "newui/component/Tooltip";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
export declare enum MenuBarButtonType {
    Menu = 0,
    Save = 1,
    Help = 2,
    Milestones = 3,
    Messages = 4,
    QuickSettings = 5,
    Actions = 6,
    Inventory = 7,
    Crafting = 8,
    Equipment = 9,
    Skills = 10,
}
export interface IMenuBarButtonDescription {
    imagePath?: string;
    imageWidth?: number;
    imageHeight?: number;
    tooltip?: Partial<ITooltipOptions>;
    /**
     * Sorts this menu bar button into a group of other similar menu bar buttons.
     *
     * Internally, `MenuBarButtonGroup.Meta` and `MenuBarButtonGroup.World` are used. Not providing a group
     * adds it to an unsorted group.
     */
    group?: string | number;
    /**
     * Adds the bindable's current bind translation to the tooltip automatically.
     *
     * Note: Does not watch for the bind being pressed!
     */
    bindable?: Bindable;
    /**
     * What should happen when this button is clicked.
     * @returns `false` if the activation was cancelled, `true` or `undefined` otherwise.
     */
    onActivate(api: IGameScreenApi): boolean | undefined | void | Promise<void>;
}
export declare enum MenuBarButtonGroup {
    Meta = 0,
    World = 1,
}
declare const menuBarButtonDescriptions: Description<IMenuBarButtonDescription>;
export default menuBarButtonDescriptions;
