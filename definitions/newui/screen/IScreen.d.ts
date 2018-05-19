import { IComponent, IContextMenu, ITooltipOptionsVague } from "newui/component/IComponent";
import { IMenu, MenuId } from "newui/screen/screens/menu/component/IMenu";
export declare enum ScreenId {
    None = 0,
    Game = 1,
    Interrupt = 2,
    MainMenu = 3,
    Splash = 4,
}
export declare enum ScreenEvent {
    ShowMenu = "ShowMenu",
    HideMenu = "HideMenu",
    GoBackMenu = "GoBackMenu",
    /**
     * Triggered when a tooltip is to be shown on this screen.
     *
     * @param tooltipElementOrOptions `TooltipOptionsVague | UiElement | undefined`
     * @param source `UiElement | undefined`
     * @returns Whether or not the tooltip should be shown. If any event handlers return `false`, the tooltip will not be shown.
     */
    CanShowTooltip = "AttemptShowTooltip",
}
export interface IScreen extends IComponent {
    retain?: boolean;
    /**
     * Shows a tooltip
     * @param tooltip The options with which to construct the tooltip
     * @param source
     * 	The source element that the tooltip is for.
     * 	If there currently exists a tooltip for this element, it shows the old instead of creating a new tooltip.
     */
    showTooltip(tooltip: ITooltipOptionsVague, source?: IComponent): Promise<void>;
    /**
     * Shows a tooltip
     * @param elementWithTooltip
     * 	The element the tooltip is for, that contains the options with which to construct the tooltip.
     */
    showTooltip(elementWithTooltip: IComponent): Promise<void>;
    showTooltip(): Promise<void>;
    showTooltip(tooltipElementOrOptions: ITooltipOptionsVague | IComponent, source?: IComponent): Promise<void>;
    /**
     * Hides the current tooltip
     * @param source The element the tooltip must be for to hide it
     * @returns Whether a tooltip was hidden.
     */
    hideTooltip(source?: IComponent): Promise<boolean>;
    /**
     * Removes the current tooltip
     * @param source The element the tooltip must be for to remove it
     */
    dumpTooltip(source?: IComponent): Promise<boolean>;
    /**
     * Remove the context menu from this element
     */
    setContextMenu(): void;
    /**
     * Set the context menu for this element
     */
    setContextMenu(generator: () => IComponent): void;
    /**
     * Remove any current context menu and set the visible context menu for this screen to the given context menu
     */
    setContextMenu(contextMenu: IContextMenu): void;
}
export interface IMenuScreen extends IScreen {
    /**
     * Returns a menu instance, or `undefined` if the menu is not initialized.
     * @param menuId The ID of the menu to return.
     */
    getMenu(menuId: MenuId): IMenu | undefined;
    /**
     * Returns the visible menu, or `undefined` if there is no menu visible.
     */
    getVisibleMenu(): IMenu | undefined;
    /**
     * Shows a menu
     * @param menuId The id of the menu to show
     * @param transition Whether or not to transition the menu in
     * @param args Any arguments to provide the menu before it shows
     */
    showMenu(menuId: MenuId, args?: {
        [key: string]: any;
    }, transition?: boolean): Promise<void>;
    /**
     * Hides the current menu and resets the menu chain
     */
    hideMenu(): Promise<void>;
    /**
     * Returns to the previous menu
     */
    backOneMenu(): Promise<void>;
}
