import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
export declare class RangeInputValueDisplay extends Component {
    private readonly text;
    constructor(uiApi: UiApi);
    setText(text: TranslationGenerator): this;
    refresh(): this;
}
