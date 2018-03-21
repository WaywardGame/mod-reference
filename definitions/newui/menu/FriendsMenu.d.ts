import Menu from "newui/element/Menu";
import { UiApi } from "newui/INewUi";
export default class FriendsMenu extends Menu {
    constructor(uiApi: UiApi);
    create(): Promise<void>;
}
