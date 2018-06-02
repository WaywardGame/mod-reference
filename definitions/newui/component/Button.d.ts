import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import Text from "newui/component/Text";
import { UiApi } from "newui/INewUi";
export declare enum ButtonEvent {
    Activate = "Activate",
}
export default class Button extends Component {
    playSound: boolean;
    protected readonly text: Text;
    private buttons;
    private _disabled;
    readonly disabled: boolean;
    constructor(api: UiApi, elementType?: string);
    setDisabled(val: boolean): this;
    activate(playSound?: boolean): void;
    addButton(callback: (button: Button) => any): this;
    setText(text?: TranslationGenerator): this;
    getText(): TranslationGenerator | undefined;
    getTextAsString(): string;
    refreshText(): this;
    private _onActivate(event?);
}
