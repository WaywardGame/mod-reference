import { UiApi } from "newui/INewUi";
import { Background, IMainMenuScreen } from "newui/screen/screens/IMainMenuScreen";
import MenuScreen from "newui/screen/screens/menu/component/MenuScreen";
export default class MainMenuScreen extends MenuScreen implements IMainMenuScreen {
    constructor(uiApi: UiApi);
    background: Background;
}
