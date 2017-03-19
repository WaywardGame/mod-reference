import { KeyBind } from "Enums";
import BaseScreen from "ui/screens/BaseScreen";
export default class OptionsScreen extends BaseScreen {
    elementOverlay: JQuery;
    elementTitleScreenOptions: JQuery;
    elementLanguageSelect: JQuery;
    elementBindList: JQuery;
    elementBindDefault: JQuery;
    elementBindDefaultParent: JQuery;
    selector(): string;
    bindElements(): void;
    onShow(): void;
    onHide(): void;
    setButtonChoiceValue(id: string, firstSelected: boolean): void;
    onClickKeybind(element: JQuery, id: KeyBind): void;
    onClickKeyBindDefault(): void;
    resetBindState(setDefault?: boolean): KeyBind | null;
    updateBind(key: KeyBind, element: JQuery): void;
    onClickCheckbox(element: JQuery, id: string): void;
    onClickButton(element: JQuery, id: string): void;
    onClickButtonChoice(element: JQuery, id: string): void;
    onRangeChange(element: JQuery, id: string, value: number): void;
    addOptionsSection(elementId: string, sectionName: string): JQuery;
    removeOptionsSection(sectionName: string): void;
}
