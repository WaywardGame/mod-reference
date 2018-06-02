import { Bindable } from "Enums";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import Component from "newui/component/Component";
import { IContextMenu } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
import { IScreen, ScreenId } from "newui/screen/IScreen";
import Log from "utilities/Log";
export default abstract class Screen extends Component implements IScreen, IHookHost {
    isOverlayScreen: boolean;
    protected lastTooltipSource?: Component;
    protected log: Log;
    private contextMenu?;
    constructor(api: UiApi, screenId: ScreenId);
    /**
     * Remove the context menu from this element
     */
    setContextMenu(): void;
    /**
     * Set the context menu for this element
     */
    setContextMenu(generator: () => IContextMenu): void;
    hideContextMenu(contextMenu?: IContextMenu): void;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    private onShow();
    private onClick();
    private onDocumentClick();
}
