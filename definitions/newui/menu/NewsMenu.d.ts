import Menu from "newui/element/Menu";
import { UiApi } from "newui/INewUi";
export default class NewsMenu extends Menu {
    private readonly newsContainer;
    constructor(uiApi: UiApi);
    private refreshNews();
    private getNews();
    private parseArticle(article);
}
