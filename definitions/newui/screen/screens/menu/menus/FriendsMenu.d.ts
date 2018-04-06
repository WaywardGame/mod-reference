import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/element/Menu";
export default class FriendsMenu extends Menu {
    constructor(uiApi: UiApi);
    create(): Promise<void>;
}
