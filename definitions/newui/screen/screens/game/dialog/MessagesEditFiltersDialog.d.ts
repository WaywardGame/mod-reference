/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import UiTranslation from "language/dictionary/UiTranslation";
import { ThreeStateButtonState } from "newui/component/ThreeStateButton";
import Dialog from "newui/screen/screens/game/component/Dialog";
interface IMessagesEditFiltersDialogEvents extends Events<Dialog> {
    edit(): any;
    reset(): any;
}
export interface IFilters {
    [key: string]: IFilter;
}
export interface IFilter {
    [key: string]: ThreeStateButtonState;
}
export default class MessagesEditFiltersDialog extends Dialog {
    event: IEventEmitter<this, IMessagesEditFiltersDialogEvents>;
    filters: IFilters;
    private editingFilter;
    private readonly name;
    private readonly sourceButtons;
    private readonly filterContainer;
    constructor();
    initializeFilters(filters: IFilters): this;
    getName(): UiTranslation;
    private editFilter;
    private getSourceState;
    private deleteFilter;
    private saveFilter;
    private onEditName;
    private resetFilters;
}
export {};
