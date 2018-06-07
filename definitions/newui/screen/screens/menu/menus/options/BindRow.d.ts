import { Bindable } from "Enums";
import { IBinding } from "newui/BindingManager";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
export declare class BindRow extends Button implements IRefreshable {
    private readonly currentBinds;
    private readonly bind;
    private readonly bindCatcher;
    private readonly modName;
    constructor(api: UiApi, bindable: Bindable, bindCatcher: BindCatcher);
    refresh(): this;
    private getBindableName;
    private getBindTranslations;
    private getBind;
    private onActivate;
}
export declare class BindCatcher extends Component {
    private readonly bindText;
    private resolve;
    constructor(api: UiApi);
    getBind(): Promise<IBinding>;
    setText(text: TranslationGenerator): void;
    private onInput;
}
