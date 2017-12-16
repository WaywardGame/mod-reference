import { UiApi } from "newui/INewUi";
import Menu from "newui/util/Menu";
export default class NewsMenu extends Menu {
    private newsContainer;
    constructor(uiApi: UiApi);
    private refreshNews();
    private getNews();
    private parseArticle(article);
}
