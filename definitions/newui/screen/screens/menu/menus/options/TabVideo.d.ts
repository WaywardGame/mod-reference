import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabVideo extends Tab implements IRefreshable {
    private readonly refreshables;
    private readonly checkButtonFullscreen;
    private readonly inputUiScale;
    constructor(api: UiApi);
    refresh(): this;
    private addRefreshable;
    private onFullscreen;
    private onPixelFont;
    private onDitherFOW;
    private onInterfaceScaleChangeFinish;
    private onViewportResize;
    private getUiScaleTooltip;
}
