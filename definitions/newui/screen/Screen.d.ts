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
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import Component from "newui/component/Component";
import { IContextMenu } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
import { Background, IScreen, ScreenId } from "newui/screen/IScreen";
import Log from "utilities/Log";
export default abstract class Screen extends Component implements IScreen, IHookHost {
    isOverlayScreen: boolean;
    protected lastTooltipSource?: Component;
    protected log: Log;
    private contextMenu?;
    background: Background;
    constructor(api: UiApi, screenId: ScreenId);
    /**
     * Remove the context menu from this element
     */
    setContextMenu(): void;
    /**
     * Set the context menu for this element
     */
    setContextMenu(generator: () => IContextMenu): void;
    hideContextMenu(contextMenu?: IContextMenu): boolean;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    private onShow;
    private onClick;
    private onDocumentClick;
}
