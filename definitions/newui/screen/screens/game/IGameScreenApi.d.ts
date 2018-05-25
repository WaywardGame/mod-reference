import Component from "newui/component/Component";
import { TextOrTranslationData } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
import QuadrantComponent from "newui/screen/screens/game/component/QuadrantComponent";
import { DialogId } from "newui/screen/screens/game/Dialogs";
export declare enum QuadrantComponentId {
    Messages = 0,
    Stats = 1,
    Quickslots = 2,
    MenuBar = 3,
}
export default interface IGameScreenApi {
    readonly uiApi: UiApi;
    openDialog<D extends IDialog = IDialog>(id: DialogId): D;
    closeDialog(id: DialogId): void;
    toggleDialog(id: DialogId): void;
    getQuadrantComponent<C extends QuadrantComponent = QuadrantComponent>(id: string | number): C | undefined;
    getQuadrantContainer(): Component;
}
export interface IDialog {
    /**
     * The ID is used for `Switch With` context menu options
     */
    getID(): DialogId;
    /**
     * The name is displayed in the `Move To` context menu option, and in the `Switch With` options
     */
    getName(): TextOrTranslationData;
}
