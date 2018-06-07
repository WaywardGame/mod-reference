import { IPlayOptions } from "game/IGame";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class CharacterSelectionMenu extends Menu {
    gameOptions: Partial<IPlayOptions>;
    private sortRow;
    private headingNoCharacters;
    private characterRows;
    private characterCreationMenu;
    constructor(uiApi: UiApi);
    create(): void;
    refresh(): void;
    private onShow;
    private sortCharacters;
    private getCharacterCreationMenu;
}
