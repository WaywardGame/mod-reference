import { Bindable } from "Enums";
import { IBinding } from "newui/BindingManager";
import Button from "newui/element/Button";
import Component from "newui/element/Component";
import { TextOrTranslationData } from "newui/element/IComponent";
import { Refreshable } from "newui/element/Refreshable";
import { UiApi } from "newui/INewUi";
export declare class BindCatcher extends Component {
    private readonly bindText;
    private resolve;
    constructor(uiApi: UiApi);
    getBind(): Promise<IBinding>;
    setText(text: TextOrTranslationData): void;
    private onInput(evt);
}
export declare class BindRow extends Button implements Refreshable {
    private readonly currentBinds;
    private readonly bind;
    private readonly bindCatcher;
    constructor(uiApi: UiApi, bindable: Bindable, bindCatcher: BindCatcher);
    refresh(): Promise<void>;
    private getBind(message);
}
