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
import { IComponent, IContextMenu } from "newui/component/IComponent";
export declare enum ScreenId {
    None = 0,
    Game = 1,
    Interrupt = 2,
    MainMenu = 3,
    Splash = 4
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
    CanShowTooltip = "AttemptShowTooltip"
}
export declare enum Background {
    Default = 0,
    Win = 1,
    Death = 2
}
export interface IScreen extends IComponent {
    isOverlayScreen?: boolean;
    background?: Background;
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
    /**
     * Hides the currently visible context menu.
     */
    hideContextMenu(): void;
}
