import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class FriendsMenu extends Menu {
    /**
     * Do you want your friends in a box? Well, here you go! Your friends! In a box!
     */
    private readonly friendContainer;
    private readonly errorHeading;
    constructor(api: UiApi);
    private refresh;
}
