import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class NewsMenu extends Menu {
    private readonly newsContainer;
    constructor(uiApi: UiApi);
    private refreshNews();
    private getNews();
    private parseArticle(article);
}
