import { UiApi } from "newui/INewUi";
import MenuScreen from "newui/screen/MenuScreen";
import { Background, IMenuScreen } from "newui/screen/screens/IMenuScreen";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
export default class MainMenuScreen extends MenuScreen implements IMenuScreen {
    constructor(uiApi: UiApi);
    show(menuId?: MenuId, args?: {
        [key: string]: any;
    }): Promise<void>;
    background: Background;
}
