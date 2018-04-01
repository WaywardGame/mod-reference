import Menu from "newui/element/Menu";
import { UiApi } from "newui/INewUi";
import { IPlayerCustomization } from "player/IPlayer";
export interface CharacterCreationArgs {
    customization: IPlayerCustomization;
}
export default class CharacterCreationMenu extends Menu {
    private startButton;
    private inputName;
    private elementCharacterPreview;
    private swatchesHair;
    private swatchesSkin;
    private hairstyleList;
    private rotation;
    private gameOptions;
    private readonly customization;
    private defaultName;
    constructor(uiApi: UiApi);
    randomize(update?: boolean): void;
    private create();
    private addEditorButton(button, buttonOptions?);
    private rotate(direction);
}
