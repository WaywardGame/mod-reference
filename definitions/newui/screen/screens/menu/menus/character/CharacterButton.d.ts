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
import Button from "newui/component/Button";
import { UiApi } from "newui/INewUi";
import { ISavedCharacter } from "newui/screen/screens/menu/menus/character/Character";
export declare enum CharacterEvent {
    Delete = "Delete",
    Customize = "Customize"
}
export default class CharacterButton extends Button {
    private readonly preview;
    private readonly _character;
    readonly character: ISavedCharacter;
    constructor(api: UiApi, character: ISavedCharacter);
}
