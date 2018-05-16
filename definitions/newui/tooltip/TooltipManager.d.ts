import Component from "newui/component/Component";
import { IComponent, ITooltipOptionsVague } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
export default class TooltipManager {
    private readonly uiApi;
    constructor(uiApi: UiApi);
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
    /**
     * Hides the current tooltip
     * @param source The element the tooltip must be for to hide it
     */
    hideTooltip(source?: IComponent): Promise<void>;
    /**
     * Removes the current tooltip
     * @param source The element the tooltip must be for to remove it
     */
    dumpTooltip(source?: IComponent): Promise<void>;
}
