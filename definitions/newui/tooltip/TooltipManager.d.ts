import { IUiElement, TooltipOptionsVague } from "newui/element/IUiElement";
import UiElement from "newui/element/UiElement";
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
    showTooltip(tooltip: TooltipOptionsVague, source?: UiElement): Promise<void>;
    /**
     * Shows a tooltip
     * @param elementWithTooltip
     * 	The element the tooltip is for, that contains the options with which to construct the tooltip.
     */
    showTooltip(elementWithTooltip: UiElement): Promise<void>;
    /**
     * Hides the current tooltip
     * @param source The element the tooltip must be for to hide it
     */
    hideTooltip(source?: IUiElement): Promise<void>;
    /**
     * Removes the current tooltip
     * @param source The element the tooltip must be for to remove it
     */
    dumpTooltip(source?: IUiElement): Promise<void>;
}
