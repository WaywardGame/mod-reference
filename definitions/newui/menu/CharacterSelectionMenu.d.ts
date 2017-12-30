import { UiApi } from "newui/INewUi";
import Menu from "newui/util/Menu";
export default class CharacterSelectionMenu extends Menu {
    private sortRow;
    private headingNoCharacters;
    private gameOptions;
    private characterRows;
    constructor(uiApi: UiApi);
    create(): Promise<void>;
    refresh(): Promise<void>;
    sortCharacters(): void;
}
