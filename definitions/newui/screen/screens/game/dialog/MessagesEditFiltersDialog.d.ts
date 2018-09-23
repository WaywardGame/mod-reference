/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import UiTranslation from "language/dictionary/UiTranslation";
import Dialog from "newui/screen/screens/game/component/Dialog";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
export declare enum MessagesEditFiltersDialogEvent {
    Edit = "Edit",
    Reset = "Reset"
}
export default class MessagesEditFiltersDialog extends Dialog {
    filters: {
        [key: string]: string[];
    };
    private editingFilter;
    private readonly name;
    private readonly sourceButtons;
    private readonly filterContainer;
    constructor(api: IGameScreenApi);
    initializeFilters(filters: {
        [key: string]: string[];
    }): this;
    getName(): UiTranslation;
    private editFilter;
    private isFilteredIn;
    private deleteFilter;
    private saveFilter;
    private onEditName;
    private resetFilters;
}
