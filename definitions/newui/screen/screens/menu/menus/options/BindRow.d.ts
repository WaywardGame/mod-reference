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
import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import { IRefreshable } from "newui/component/Refreshable";
import { Bindable, IBinding } from "newui/IBindingManager";
export declare class BindRow extends Button implements IRefreshable {
    private readonly currentBinds;
    private readonly bind;
    private readonly bindCatcher;
    private readonly modName;
    constructor(bindable: Bindable, bindCatcher: BindCatcher);
    refresh(): this;
    protected onActivate(): Promise<void>;
    private getBindableName;
    private getBindTranslations;
    private getBind;
}
export declare class BindCatcher extends Component {
    private readonly bindText;
    private resolve;
    constructor();
    getBind(): Promise<IBinding>;
    setText(text: TranslationGenerator): void;
    private onInput;
}
