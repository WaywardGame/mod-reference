import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class LoadGameMenu extends Menu {
    private readonly slots;
    private slotsWrapper;
    private sort;
    private sortDirection;
    private slotsRemainingHeading;
    private newGameButton;
    private importButton;
    constructor(uiApi: UiApi);
    protected onBeforeShow(): Promise<void> | undefined;
    private refresh();
    private onImport(component, inputEvent);
    private updateNewGameButton();
    private addSlot(slot);
    private deleteSlot(slot);
    private sortSlots(sort?, sortDirection?);
}
