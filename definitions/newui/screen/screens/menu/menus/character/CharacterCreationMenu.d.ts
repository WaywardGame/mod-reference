/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ICustomizations } from "entity/IHuman";
import { IPlayOptions } from "game/IGame";
import Menu from "newui/screen/screens/menu/component/Menu";
export interface CharacterCreationArgs {
    customization: ICustomizations;
}
export default class CharacterCreationMenu extends Menu {
    private gameOptions;
    private inputName;
    private elementCharacterPreview;
    private swatchesHair;
    private swatchesSkin;
    private hairstyleList;
    private rotation;
    private readonly customization;
    private defaultName;
    constructor();
    setGameOptions(gameOptions: Partial<IPlayOptions>): this;
    protected onShow(): void;
    private randomizeName;
    private randomize;
    private create;
    private onStart;
    private getCharacter;
    private createEditorButton;
    private rotate;
}
