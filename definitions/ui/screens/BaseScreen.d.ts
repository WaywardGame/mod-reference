/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import { IUiScreen } from "ui/IUi";
export default class BaseScreen implements IUiScreen {
    element: JQuery;
    visible: boolean;
    constructor();
    selector(): string;
    bindElements(): void;
    unbindElements(): void;
    isVisible(): boolean;
    show(data?: any): void;
    doShow(): void;
    hide(): void;
    doHide(): void;
    onMouseDown(event: JQueryEventObject): void;
    onMouseUpOrLeave(event: JQueryEventObject): void;
    onMouseMove(event: JQueryEventObject): void;
    onMouseScroll(event: JQueryEventObject): void;
    onKeyDown(event: JQueryEventObject, keyCode: number, blockable: boolean): boolean | undefined;
    onKeyUp(event: JQueryEventObject, keyCode: number, blockable: boolean): boolean | undefined;
    protected onShow(data?: any): void;
    protected onHide(): void;
}
