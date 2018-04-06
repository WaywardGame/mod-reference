import { IUiElement, TooltipOptionsVague, UiElementOptions } from "newui/element/IUiElement";
import Tooltip from "newui/element/Tooltip";
import UiElement from "newui/element/UiElement";
import { UiApi } from "newui/INewUi";
import { IUiScreen, ScreenId } from "newui/screen/IUiScreen";
import Log from "utilities/Log";
export interface ScreenOptions extends UiElementOptions {
    screenId: ScreenId;
    retain?: boolean;
    isSubscreen?: boolean;
}
export default abstract class UiScreen<T = any> extends UiElement<T> implements IUiScreen {
    readonly retain: boolean;
    readonly isSubscreen: boolean;
    protected lastTooltipSource?: UiElement;
    protected tooltip: Tooltip;
    protected log: Log;
    private readonly tooltipMousemoveListener;
    constructor(uiApi: UiApi, options: ScreenOptions);
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
    showTooltip(): Promise<void>;
    showTooltip(tooltipElementOrOptions: TooltipOptionsVague | UiElement, source?: UiElement): Promise<void>;
    /**
     * Hides the current tooltip
     * @param source The element the tooltip must be for to hide it
     */
    hideTooltip(source?: IUiElement): Promise<boolean>;
    /**
     * Removes the current tooltip
     * @param source The element the tooltip must be for to remove it
     */
    dumpTooltip(source?: IUiElement): Promise<boolean>;
}
