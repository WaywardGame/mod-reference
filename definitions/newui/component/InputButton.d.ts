/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Button from "newui/component/Button";
import Input from "newui/component/Input";
import { UiApi } from "newui/INewUi";
export declare enum InputButtonEvent {
    Change = "Change",
    Done = "Done"
}
export default class InputButton extends Button {
    private readonly inputElement;
    private _editMode;
    editMode: boolean;
    constructor(uiApi: UiApi, inputInitializer: (input: Input) => any);
    private onInputChange;
    private onInputDone;
}
