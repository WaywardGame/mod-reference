import { TooltipLocation, TooltipOptionsVague, UiApi } from "../INewUi";
import UiText, { Paragraph, TextOptions } from "./Text";
import UiElement from "./UiElement";
export interface TooltipOptions extends TooltipOptionsVague {
    create?(tooltip: Tooltip): Promise<void>;
}
export interface TooltipData {
    tooltipLocation: keyof typeof TooltipLocation;
}
export default class Tooltip<T = {}> extends UiElement<TooltipData & T> {
    private source;
    location: TooltipLocation;
    constructor(uiApi: UiApi, source: UiElement, tooltipOptions: TooltipOptions);
    addText(options: TextOptions): UiText<{}>;
    addHeading(options: TextOptions): UiText<{}>;
    addParagraph(...textOptionsArr: TextOptions[]): Paragraph<{}>;
    update(): void;
    updatePosition(position?: {
        x: number;
        y: number;
    }): void;
}
