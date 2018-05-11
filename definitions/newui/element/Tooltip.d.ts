import Component from "newui/element/Component";
import { ITooltipOptionsVague, TextOrTranslationDataOrSplitsOrGenerator, TooltipLocation } from "newui/element/IComponent";
import Text, { Paragraph, SplitText, SplitTextOptions, TextOptions } from "newui/element/Text";
import { UiApi } from "newui/INewUi";
export interface ITooltipOptions extends ITooltipOptionsVague {
    create?(tooltip: Tooltip): Promise<void>;
}
export interface TooltipData {
    tooltipLocation: keyof typeof TooltipLocation;
}
export default class Tooltip extends Component {
    private readonly source;
    location: TooltipLocation;
    cache: boolean;
    constructor(uiApi: UiApi, source: Component, tooltipOptions: ITooltipOptions);
    addText(text: TextOrTranslationDataOrSplitsOrGenerator): Text | SplitText;
    addHeading(options: TextOptions): Text;
    addParagraph(...textOptionsArr: Array<TextOptions | SplitTextOptions>): Paragraph;
    update(): void;
    updatePosition(position?: {
        x: number;
        y: number;
    }): void;
}
