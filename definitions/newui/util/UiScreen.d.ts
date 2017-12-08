import { IUiElement, IUiScreen, MenuId, ScreenId, TooltipOptionsVague, UiApi, UiElementOptions } from "newui/INewUi";
import { InterruptOptions } from "newui/menu/InterruptMenu";
import Menu from "newui/util/Menu";
import Tooltip from "newui/util/Tooltip";
import UiElement from "newui/util/UiElement";
export interface ScreenOptions extends UiElementOptions {
    screenId: ScreenId;
    retain?: boolean;
    isSubscreen?: boolean;
}
export default class UiScreen<T = {}> extends UiElement<T> implements IUiScreen {
    readonly retain: boolean;
    readonly isSubscreen: boolean;
    protected menus: {
        [key: number]: Menu;
    };
    protected _visibleMenu: MenuId;
    protected menuChain: number[];
    protected lastTooltipSource?: UiElement;
    protected tooltip: Tooltip;
    private tooltipMousemoveListener;
    private bindId;
    readonly visibleMenu: MenuId;
    readonly hasMenu: boolean;
    readonly bindingManagerId: number;
    constructor(uiApi: UiApi, options: ScreenOptions);
    show(menuId?: MenuId, ...args: any[]): Promise<void>;
    getMenu(): Menu;
    getMenu(menuId: MenuId): Menu;
    getMenu(menuId?: MenuId): Menu;
    showMenu(menuId: MenuId, args?: {
        [key: string]: any;
    }, transition?: boolean, loadingInterrupt?: InterruptOptions): Promise<void>;
    /**
     * Hides the current menu and resets the menu chain
     */
    hideMenu(menuId?: MenuId): Promise<void>;
    /**
     * Returns to the previous menu
     */
    backOneMenu(args?: {
        [key: string]: any;
    }, transition?: boolean): Promise<void>;
    /**
     * Returns to the first menu in the menuChain
     */
    backToFirstMenu(args?: {
        [key: string]: any;
    }, transition?: boolean): Promise<void>;
    /**
     * Shows a tooltip
     * @param tooltip The options with which to construct the tooltip
     * @param source
     * 	The source element that the tooltip is for.
     * 	If there currently exists a tooltip for this element, it shows the old instead of creating a new tooltip.
     */
    showTooltip(tooltip: TooltipOptionsVague, source?: UiElement): Promise<void>;
    /**
     * Shows a tooltip
     * @param elementWithTooltip
     * 	The element the tooltip is for, that contains the options with which to construct the tooltip.
     */
    showTooltip(elementWithTooltip: UiElement): Promise<void>;
    showTooltip(): Promise<void>;
    showTooltip(tooltipElementOrOptions: TooltipOptionsVague | UiElement, source?: UiElement): Promise<void>;
    /**
     * Hides the current tooltip
     * @param source The element the tooltip must be for to hide it
     */
    hideTooltip(source?: IUiElement): Promise<boolean>;
    /**
     * Removes the current tooltip
     * @param source The element the tooltip must be for to remove it
     */
    dumpTooltip(source?: IUiElement): Promise<boolean>;
    /**
     * Initializes a menu by its ID
     */
    protected initMenu(menuId: MenuId): Menu;
    private _showMenu(menu, args, loadingInterrupt?);
}
