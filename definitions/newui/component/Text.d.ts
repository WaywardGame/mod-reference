import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
import { IStringSection } from "utilities/string/Interpolator";
export default class Text extends Component {
    static resolve(translation: TranslationGenerator | undefined): IStringSection[];
    static toString(translation: TranslationGenerator | undefined): string;
    private text;
    constructor(uiApi: UiApi, elementType?: string);
    setText(text?: TranslationGenerator): this;
    getText(): TranslationGenerator | undefined;
    getTextAsString(): string;
    refresh(): void;
}
export declare class Paragraph extends Text {
    constructor(uiApi: UiApi);
}
export declare class Heading extends Text {
    constructor(uiApi: UiApi);
}
