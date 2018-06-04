import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabVideo extends Tab implements IRefreshable {
    private readonly checkButtonDitherFOW;
    private readonly checkButtonPixelFont;
    private readonly checkButtonFullscreen;
    private readonly inputUiScale;
    constructor(api: UiApi);
    refresh(): this;
    private onFullscreen(_, fullscreen);
    private onPixelFont(_, pixelFont);
    private onDitherFOW(_, ditherFOW);
    private onInterfaceScaleChangeFinish(_, val);
    private onViewportResize();
    private getUiScaleTooltip(tooltip);
}
