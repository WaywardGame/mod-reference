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
import { Bindable } from "Enums";
import { BindCatcherApi } from "newui/BindingManager";
import Button from "newui/component/Button";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
import { MenuBarButtonType } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
export default class MenuBarButton extends Button {
    private readonly onActivate;
    private readonly bindable;
    private readonly gsapi;
    constructor(gsapi: IGameScreenApi, buttonType: MenuBarButtonType);
    /**
     * Returns the formatted CSS url for the stat icon.
     */
    getStatIcon(): string;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    private getTooltip;
}
