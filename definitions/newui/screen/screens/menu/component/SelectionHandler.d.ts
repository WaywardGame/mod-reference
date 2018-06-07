import { Bindable } from "Enums";
import { BindCatcherApi } from "newui/BindingManager";
import { UiApi } from "newui/INewUi";
import { IMenu, ISelectionHandler } from "newui/screen/screens/menu/component/IMenu";
export default class SelectionHandler implements ISelectionHandler {
    private readonly api;
    private readonly menu;
    private selection;
    constructor(api: UiApi, menu: IMenu);
    select(element: HTMLElement): void;
    getSelection(): HTMLElement;
    selectNext(sound?: boolean): void;
    selectPrevious(sound?: boolean): void;
    handleBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    private getSelectables;
    private changeSelection;
    private selectUp;
    private selectDown;
    private selectLeft;
    private selectRight;
    private selectDirection;
    private selectEnter;
}
