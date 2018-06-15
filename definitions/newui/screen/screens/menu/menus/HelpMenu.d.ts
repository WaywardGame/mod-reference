import { Bindable } from "Enums";
import { BindCatcherApi } from "newui/BindingManager";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
import { HelpArticle } from "newui/screen/screens/menu/menus/HelpArticle";
export default class HelpMenu extends Menu {
    /**
     * A list of articles that are "important", which makes them take up the full row (instead of sharing
     * with another article). If the last article doesn't have a partner to share a row with, it appears
     * as though it's an important article as well.
     */
    static importantArticles: HelpArticle[];
    constructor(api: UiApi);
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
}
