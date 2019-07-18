/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { Bindable, BindCatcherApi } from "newui/IBindingManager";
import Menu from "newui/screen/screens/menu/component/Menu";
import { HelpArticle } from "newui/screen/screens/menu/menus/help/HelpArticleDescriptions";
export default class HelpMenu extends Menu {
    private readonly searchInput;
    private readonly articles;
    private readonly canShowArticle;
    constructor();
    showArticle(article: HelpArticle): Promise<this>;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    private filterArticles;
}
