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
    constructor(api: UiApi);
    setGameOptions(gameOptions: Partial<IPlayOptions>): this;
    private randomizeName;
    private randomize;
    private onShow;
    private create;
    private createEditorButton;
    private rotate;
}
