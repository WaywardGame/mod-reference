import { Bindable } from "Enums";
import { BindCatcherApi } from "newui/BindingManager";
import Component from "newui/element/Component";
import { IComponent, IComponentOptions, IContextMenu, ITooltipOptionsVague } from "newui/element/IComponent";
import Tooltip from "newui/element/Tooltip";
import { UiApi } from "newui/INewUi";
import { IScreen, ScreenId } from "newui/screen/IScreen";
import Log from "utilities/Log";
export interface ScreenOptions extends IComponentOptions {
    screenId: ScreenId;
    retain?: boolean;
    isSubscreen?: boolean;
}
export default abstract class Screen extends Component implements IScreen {
    readonly retain: boolean;
    readonly isSubscreen: boolean;
    protected lastTooltipSource?: Component;
    protected tooltip: Tooltip;
    protected log: Log;
    private readonly tooltipMousemoveListener;
    private contextMenu;
    constructor(uiApi: UiApi, options: ScreenOptions);
    /**
     * Shows a tooltip
     * @param tooltip The options with which to construct the tooltip
     * @param source
     * 	The source element that the tooltip is for.
     * 	If there currently exists a tooltip for this element, it shows the old instead of creating a new tooltip.
     */
    showTooltip(tooltip: ITooltipOptionsVague, source?: Component): Promise<void>;
    /**
     * Shows a tooltip
     * @param elementWithTooltip
     * 	The element the tooltip is for, that contains the options with which to construct the tooltip.
     */
    showTooltip(elementWithTooltip: Component): Promise<void>;
    showTooltip(): Promise<void>;
    showTooltip(tooltipElementOrOptions: ITooltipOptionsVague | Component, source?: Component): Promise<void>;
    /**
     * Hides the current tooltip
     * @param source The element the tooltip must be for to hide it
     */
    hideTooltip(source?: IComponent): Promise<boolean>;
    /**
     * Removes the current tooltip
     * @param source The element the tooltip must be for to remove it
     */
    dumpTooltip(source?: IComponent): Promise<boolean>;
    /**
     * Remove the context menu from this element
     */
    setContextMenu(): void;
    /**
     * Set the context menu for this element
     */
    setContextMenu(generator: () => IContextMenu): void;
    protected bindLoop(api: BindCatcherApi): Promise<boolean | Bindable>;
}
