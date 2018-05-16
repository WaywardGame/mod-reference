import Component from "newui/component/Component";
import { ITooltipOptionsVague, TextOrTranslationDataOrSectionsOrGenerator, TooltipLocation } from "newui/component/IComponent";
import Text, { Paragraph, SectionText, SectionTextOptions, TextOptions } from "newui/component/Text";
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
    addText(text: TextOrTranslationDataOrSectionsOrGenerator): Text | SectionText;
    addHeading(options: TextOptions): Text;
    addParagraph(...textOptionsArr: Array<TextOptions | SectionTextOptions>): Paragraph;
    update(): void;
    updatePosition(position?: {
        x: number;
        y: number;
    }): void;
}
