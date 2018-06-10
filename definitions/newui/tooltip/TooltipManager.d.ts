import { IComponent } from "newui/component/IComponent";
import { ITooltipManager, UiApi } from "newui/INewUi";
import Tooltip from "newui/tooltip/Tooltip";
export default class TooltipManager implements ITooltipManager {
    private readonly api;
    private host;
    private tooltip;
    constructor(api: UiApi);
    show(host: IComponent): Tooltip | undefined;
    hide(host?: IComponent | undefined, forceRemove?: boolean): void;
    private hideLoop;
    private onScreenResize;
}
