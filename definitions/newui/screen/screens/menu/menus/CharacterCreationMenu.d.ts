import { IPlayOptions } from "game/IGame";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
import { IPlayerCustomization } from "player/IPlayer";
export interface CharacterCreationArgs {
    customization: IPlayerCustomization;
}
export default class CharacterCreationMenu extends Menu {
    private gameOptions;
    private startButton;
    private inputName;
    private elementCharacterPreview;
    private swatchesHair;
    private swatchesSkin;
    private hairstyleList;
    private rotation;
    private readonly customization;
    private defaultName;
    constructor(uiApi: UiApi);
    setGameOptions(gameOptions: IPlayOptions): this;
    private randomize();
    private onShow();
    private create();
    private createEditorButton(button, elementType?);
    private rotate(direction);
}
