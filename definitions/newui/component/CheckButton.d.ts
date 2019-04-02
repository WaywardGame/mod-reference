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
import { TranslationGenerator } from "newui/component/IComponent";
import { IRefreshableValue } from "newui/component/Refreshable";
import { Paragraph } from "newui/component/Text";
export interface ICheckButtonEvents {
    /**
     * @returns `false` to cancel the change.
     */
    willToggle(checked: boolean): boolean | void;
    toggle(checked: boolean): void;
}
export declare class CheckButton extends Button implements IRefreshableValue<boolean> {
    event: ExtendedEvents<this, Button, ICheckButtonEvents>;
    protected refreshMethod: () => boolean;
    private _checked;
    readonly checked: boolean;
    constructor();
    setChecked(checked: boolean, triggerEvent?: boolean): this;
    trySetChecked(checked: boolean, triggerEvent?: boolean): boolean;
    toggleChecked(): void;
    refresh(): this;
    setRefreshMethod(refreshMethod: () => boolean): this;
    setText(text: TranslationGenerator): this;
    addDescription(initializer: (paragraph: Paragraph) => any): this;
}
