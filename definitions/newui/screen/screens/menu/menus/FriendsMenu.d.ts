/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class FriendsMenu extends Menu {
    private readonly serversContainer;
    /**
     * Do you want your friends in a box? Well, here you go! Your friends! In a box!
     */
    private readonly friendsContainer;
    private readonly friendsErrorHeading;
    constructor(api: UiApi);
    private refresh;
    private refreshServers;
}
