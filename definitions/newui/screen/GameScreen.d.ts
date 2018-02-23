import { UiApi } from "newui/INewUi";
import UiScreen from "newui/util/UiScreen";
export interface GameScreenData {
    backgroundImage: string;
}
export default class GameScreen extends UiScreen<GameScreenData> {
    constructor(uiApi: UiApi);
}
