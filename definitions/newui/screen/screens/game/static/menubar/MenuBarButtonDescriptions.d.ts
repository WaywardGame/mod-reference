import { ITooltipOptions } from "newui/element/Tooltip";
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
    onActivate(): any;
}
declare const menuBarButtonDescriptions: Description<IMenuBarButtonDescription>;
export default menuBarButtonDescriptions;
