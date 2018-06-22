import Button from "newui/component/Button";
import { TranslationGenerator } from "newui/component/IComponent";
import { IRefreshableValue } from "newui/component/Refreshable";
import { Paragraph } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
export declare enum CheckButtonEvent {
    Change = "Change"
}
export declare class CheckButton extends Button implements IRefreshableValue<boolean> {
    private refreshMethod;
    private _checked;
    readonly checked: boolean;
    constructor(uiApi: UiApi);
    setChecked(checked: boolean, triggerEvent?: boolean): boolean;
    toggleChecked(): void;
    refresh(): this;
    setRefreshMethod(refreshMethod: () => boolean): this;
    setText(text: TranslationGenerator): this;
    addDescription(initializer: (paragraph: Paragraph) => any): this;
}
