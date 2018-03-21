import Menu from "newui/element/Menu";
import { UiApi } from "newui/INewUi";
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
