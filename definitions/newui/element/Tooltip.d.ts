import { ITooltipOptionsVague, TooltipLocation } from "newui/element/IUiElement";
import UiText, { Paragraph, SplitText, SplitTextOptions, TextOptions } from "newui/element/Text";
import UiElement from "newui/element/UiElement";
import { UiApi } from "newui/INewUi";
export interface ITooltipOptions extends ITooltipOptionsVague {
    create?(tooltip: Tooltip): Promise<void>;
}
export interface TooltipData {
    tooltipLocation: keyof typeof TooltipLocation;
}
export default class Tooltip<T = any> extends UiElement<TooltipData & T> {
    private readonly source;
    location: TooltipLocation;
    cache: boolean;
    constructor(uiApi: UiApi, source: UiElement, tooltipOptions: ITooltipOptions);
    addText(options: TextOptions | SplitTextOptions): UiText<any> | SplitText<any>;
    addHeading(options: TextOptions): UiText<any>;
    addParagraph(...textOptionsArr: Array<TextOptions | SplitTextOptions>): Paragraph<any>;
    update(): void;
    updatePosition(position?: {
        x: number;
        y: number;
    }): void;
    private createText(options);
}
