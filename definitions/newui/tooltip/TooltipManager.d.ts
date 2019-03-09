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
import { IComponent } from "newui/component/IComponent";
import { ITooltipManager, UiApi } from "newui/INewUi";
import Tooltip from "newui/tooltip/Tooltip";
export default class TooltipManager implements ITooltipManager {
    private readonly api;
    private readonly tooltipWrapper;
    private host;
    private tooltip;
    constructor(api: UiApi);
    show(host: IComponent, force?: boolean): Tooltip | undefined;
    hide(host?: IComponent | undefined, forceRemove?: boolean): void;
    private loop;
    private onScreenResize;
}
