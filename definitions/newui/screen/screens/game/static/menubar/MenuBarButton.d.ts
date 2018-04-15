import Button from "newui/element/Button";
import { UiApi } from "newui/INewUi";
import { MenuBarButtonType } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
export default class MenuBarButton extends Button {
    constructor(uiApi: UiApi, buttonType: MenuBarButtonType);
    /**
     * Returns the formatted CSS url for the stat icon.
     */
    getStatIcon(): string;
}
