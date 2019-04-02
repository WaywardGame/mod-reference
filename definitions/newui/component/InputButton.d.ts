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
import { ExtendedEvents } from "event/EventEmitter";
import Button from "newui/component/Button";
import Input from "newui/component/Input";
export interface IInputButtonEvents {
    change(text: string): any;
    done(text: string): any;
}
export default class InputButton extends Button {
    event: ExtendedEvents<this, Button, IInputButtonEvents>;
    private readonly inputElement;
    private _editMode;
    editMode: boolean;
    constructor(inputInitializer: (input: Input) => any);
    private onInputChange;
    private onInputDone;
}
