import MenuBar from "newui/game/static/MenuBar";
import Messages from "newui/game/static/Messages";
import Quickslots from "newui/game/static/Quickslots";
import Stats from "newui/game/static/Stats";
import { UiApi } from "newui/INewUi";
import UiScreen from "newui/util/UiScreen";
export interface GameScreenData {
    backgroundImage: string;
}
export default class GameScreen extends UiScreen<GameScreenData> {
    menuBar: MenuBar;
    stats: Stats;
    quickslots: Quickslots;
    messages: Messages;
    private readonly quadrantMap;
    constructor(uiApi: UiApi);
    create(): void;
}
