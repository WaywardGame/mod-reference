import Button from "newui/component/Button";
import { UiApi } from "newui/INewUi";
import { ISavedCharacter } from "newui/screen/screens/menu/menus/character/Character";
export declare enum CharacterEvent {
    Delete = "Delete",
    Customize = "Customize",
}
export default class CharacterButton extends Button {
    private readonly preview;
    private readonly _character;
    readonly character: ISavedCharacter;
    constructor(api: UiApi, character: ISavedCharacter);
}
