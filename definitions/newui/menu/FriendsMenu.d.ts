import { UiApi } from "../INewUi";
import Menu from "../util/Menu";
export default class FriendsMenu extends Menu {
    constructor(uiApi: UiApi);
    create(): Promise<void>;
}
