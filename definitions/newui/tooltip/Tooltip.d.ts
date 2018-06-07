import Component from "newui/component/Component";
import { ITooltip, TooltipLocation } from "newui/component/IComponent";
import Text, { Paragraph } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
export default class Tooltip extends Component implements ITooltip {
    private readonly source;
    readonly location: TooltipLocation;
    cache: boolean;
    constructor(api: UiApi, source: Component);
    setLocation(location: TooltipLocation): this;
    setMaxWidth(maxWidth: number): this;
    setNoCache(): this;
    addText(initializer: (text: Text) => any): this;
    addHeading(initializer: (text: Text) => any): this;
    addParagraph(initializer: (text: Paragraph) => any): this;
    updatePosition(position?: {
        x: number;
        y: number;
    }): this;
    private onShow;
    private onHide;
    private onMouseMove;
}
