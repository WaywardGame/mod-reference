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
import Component from "newui/component/Component";
import { IComponent, TranslationGenerator } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
import QuadrantComponent from "newui/screen/screens/game/component/QuadrantComponent";
import { DialogId } from "newui/screen/screens/game/Dialogs";
export declare enum QuadrantComponentId {
    Messages = 0,
    Stats = 1,
    Quickslots = 2,
    MenuBar = 3
}
export declare enum GameScreenEvent {
    HideDialog = "ShowDialog",
    ShowDialog = "HideDialog"
}
export default interface IGameScreenApi {
    readonly uiApi: UiApi;
    openDialog<D extends IDialog = IDialog>(id: DialogId): D;
    closeDialog(id: DialogId): void;
    toggleDialog(id: DialogId): void;
    getQuadrantComponent<C extends QuadrantComponent = QuadrantComponent>(id: string | number): C | undefined;
    getQuadrantContainer(): Component;
    on(event: GameScreenEvent.ShowDialog, handler: (api: IGameScreenApi, dialog: IDialog) => any): void;
    on(event: GameScreenEvent.HideDialog, handler: (api: IGameScreenApi, id: DialogId) => any): void;
}
export interface IDialog extends IComponent {
    getID(): DialogId;
    getName(): TranslationGenerator;
}
