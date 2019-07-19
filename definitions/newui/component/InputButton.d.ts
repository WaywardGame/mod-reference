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
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import Button from "newui/component/Button";
import Input from "newui/component/Input";
interface IInputButtonEvents extends Events<Button> {
    change(text: string): any;
    done(text: string): any;
}
export default class InputButton extends Button {
    event: IEventEmitter<this, IInputButtonEvents>;
    private readonly inputElement;
    private _editMode;
    editMode: boolean;
    constructor(inputInitializer: (input: Input) => any);
    getInputText(): string;
    setInputText(text: string): void;
    focus(): void;
    private onInputChange;
    private onInputDone;
}
export {};
