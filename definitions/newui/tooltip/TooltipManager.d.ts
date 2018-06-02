import { IComponent } from "newui/component/IComponent";
import Tooltip from "newui/component/Tooltip";
import { ITooltipManager, UiApi } from "newui/INewUi";
export default class TooltipManager implements ITooltipManager {
    private readonly api;
    private host;
    private tooltip;
    constructor(api: UiApi);
    show(host: IComponent): Tooltip;
    hide(host: IComponent, forceRemove?: boolean): void;
    private onScreenResize();
}
