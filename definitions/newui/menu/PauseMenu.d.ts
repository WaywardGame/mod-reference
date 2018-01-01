import { UiApi } from "newui/INewUi";
import Menu from "newui/util/Menu";
export default class PauseMenu extends Menu {
    constructor(uiApi: UiApi);
    create(): Promise<void>;
}
