import { Block } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
import { IHighscore } from "save/data/ISaveDataGlobal";
export default class HighscoresMenu extends Menu {
    private filterRow;
    private sortRow;
    private highscores;
    private highscoresWrapper;
    constructor(uiApi: UiApi);
    private create();
    private refresh();
    private sort(sort, direction);
    private filter(filter);
}
export declare class HighscoreRow extends Block {
    private readonly headingPlace;
    private readonly _highscore;
    readonly highscore: IHighscore;
    place: number;
    constructor(uiApi: UiApi, highscore: IHighscore);
}
