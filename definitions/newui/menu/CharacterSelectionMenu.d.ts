import { UiApi } from "newui/INewUi";
import { CharacterSort } from "newui/util/Character";
import Menu from "newui/util/Menu";
import { SortDirection } from "save/ISaveManager";
export default class CharacterSelectionMenu extends Menu {
    private gameOptions;
    private characterRows;
    constructor(uiApi: UiApi);
    refresh(): Promise<void>;
    sortCharacters(sort: CharacterSort, direction: SortDirection): void;
}
