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
import Component from "newui/component/Component";
import { IDisableable, TranslationGenerator } from "newui/component/IComponent";
import Text, { Paragraph } from "newui/component/Text";
interface IButtonEvents extends Events<Component> {
    activate(): void;
    toggleDisabled(disabled: boolean): any;
}
export default class Button extends Component implements IDisableable {
    event: IEventEmitter<this, IButtonEvents>;
    playSound: boolean;
    protected readonly text: Text;
    private buttons;
    private description;
    private _activated;
    private _disabled;
    readonly disabled: boolean;
    constructor(elementType?: string, listen?: boolean);
    setDisabled(val?: boolean): this;
    activate(playSound?: boolean): void;
    addButton(initializer: (button: Button) => Button): this;
    addDescription(initializer: (description: Paragraph) => any): this;
    setText(text?: TranslationGenerator): this;
    getText(): TranslationGenerator | undefined;
    getTextAsString(): string;
    refreshText(): this;
    private _onActivate;
}
export {};
