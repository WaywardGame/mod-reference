import { UiApi } from "newui/INewUi";
import { ScreenId } from "newui/screen/IScreen";
import Screen from "newui/screen/Screen";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
import Menu from "newui/screen/screens/menu/component/Menu";
export default abstract class MenuScreen extends Screen {
    protected menus: {
        [key: number]: Menu;
    };
    protected menuChain: number[];
    constructor(api: UiApi, screenId: ScreenId);
    /**
     * Returns the visible menu (top of the chain)
     */
    readonly visibleMenu: Menu<string | number | undefined>;
    showMenu<M extends Menu = Menu>(menu: MenuId | M, menuInitializer?: (menu: M) => any): this;
    backOneMenu(): this;
    backToFirstMenu(): this;
    /**
     * Gets the menu by the given ID, initializing it if it does not already exist.
     */
    getMenu<M extends Menu = Menu>(menuId: MenuId): M;
    private onHide();
}
