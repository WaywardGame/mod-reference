import { Bindable } from "Enums";
import { IBinding } from "newui/BindingManager";
import { TextOrTranslationData, UiApi } from "newui/INewUi";
import Button from "newui/util/Button";
import { Refreshable } from "newui/util/Refreshable";
import UiElement from "newui/util/UiElement";
export declare class BindCatcher extends UiElement {
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
