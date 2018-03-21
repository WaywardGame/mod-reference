import UiScreen from "newui/element/UiScreen";
import { MenuId, UiApi } from "newui/INewUi";
import { Background, IMenuScreen } from "newui/screen/IMenuScreen";
export interface MenuScreenData {
    backgroundImage: string;
}
export default class MenuScreen extends UiScreen<MenuScreenData> implements IMenuScreen {
    constructor(uiApi: UiApi);
    show(menuId?: MenuId, args?: {
        [key: string]: any;
    }): Promise<void>;
    background: Background;
}
