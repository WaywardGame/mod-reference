import Screen from "newui/screen/Screen";
import { IMenu, MenuId } from "newui/screen/screens/menu/component/IMenu";
import Menu from "newui/screen/screens/menu/component/Menu";
import { InterruptOptions } from "newui/util/IInterrupt";
export default abstract class MenuScreen extends Screen {
    protected menus: {
        [key: number]: Menu;
    };
    protected _visibleMenu: MenuId;
    protected menuChain: number[];
    /**
     * Returns the visible menu (top of the chain)
     */
    readonly visibleMenu: MenuId;
    readonly hasMenu: boolean;
    show(menuId?: MenuId, ...args: any[]): Promise<void>;
    hide(...args: any[]): Promise<void>;
    getMenu(menuId: MenuId): Menu;
    getVisibleMenu<M extends IMenu>(): M | undefined;
    showMenu(menuId: MenuId, args?: {
        [key: string]: any;
    }, transition?: boolean, loadingInterrupt?: InterruptOptions): Promise<void>;
    hideMenu(menuId?: MenuId): Promise<void>;
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
     * Initializes a menu by its ID
     */
    protected initMenu(menuId: MenuId): Menu;
    private _showMenu(menu, args, loadingInterrupt?);
}
