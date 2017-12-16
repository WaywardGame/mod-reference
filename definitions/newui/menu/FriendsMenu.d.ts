import { UiApi } from "newui/INewUi";
import Menu from "newui/util/Menu";
export default class FriendsMenu extends Menu {
    constructor(uiApi: UiApi);
    create(): Promise<void>;
}
