import { Block } from "newui/component/Block";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
import { IHighscore } from "save/data/ISaveDataGlobal";
export default class HighscoresMenu extends Menu {
    private filterRow;
    private sortRow;
    private highscores;
    private highscoresWrapper;
    constructor(uiApi: UiApi);
    private create;
    private refresh;
    private sort;
    private filter;
}
export declare class HighscoreRow extends Block {
    private readonly headingPlace;
    private readonly _highscore;
    readonly highscore: IHighscore;
    place: number;
    constructor(api: UiApi, highscore: IHighscore);
}
