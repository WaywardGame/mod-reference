import { UiApi } from "newui/INewUi";
import MenuScreen from "newui/screen/MenuScreen";
import { Background, IMenuScreen } from "newui/screen/screens/IMenuScreen";
export default class MainMenuScreen extends MenuScreen implements IMenuScreen {
    constructor(uiApi: UiApi);
    background: Background;
}
