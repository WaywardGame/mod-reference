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
export declare enum HelpArticle {
    Welcome = 0,
    Controls = 1,
    Doodads = 2,
    FastPickup = 3,
    Death = 4,
    Milestones = 5,
    Bugs = 6,
    HeldItems = 7,
    Crafting = 8,
    Encumberance = 9,
    MovingItems = 10,
    Interface = 11,
    Quickslots = 12,
    Multiplayer = 13,
    ResourceGathering = 14
}
export default class HelpArticleMenu extends Menu {
    constructor(api: UiApi, article: HelpArticle);
}
