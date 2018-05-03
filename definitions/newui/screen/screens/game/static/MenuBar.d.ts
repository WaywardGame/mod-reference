import { UiTranslation } from "language/ILanguage";
import { UiApi } from "newui/INewUi";
import QuadrantElement, { Quadrant } from "newui/screen/screens/game/element/QuadrantElement";
import MenuBarButton from "newui/screen/screens/game/static/menubar/MenuBarButton";
import { MenuBarButtonType } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
export default class MenuBar extends QuadrantElement {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    private _buttons;
    readonly buttons: Map<MenuBarButtonType, MenuBarButton>;
    constructor(uiApi: UiApi);
    refresh(): void;
    protected getID(): string;
    protected getName(): UiTranslation;
}
