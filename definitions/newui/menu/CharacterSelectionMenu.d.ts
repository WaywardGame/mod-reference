import { SortDirection } from "../../save/ISaveManager";
import { UiApi } from "../INewUi";
import { CharacterSort } from "../util/Character";
import Menu from "../util/Menu";
export default class CharacterSelectionMenu extends Menu {
    private gameOptions;
    private characterRows;
    constructor(uiApi: UiApi);
    refresh(): Promise<void>;
    sortCharacters(sort: CharacterSort, direction: SortDirection): void;
}
