import Component from "newui/component/Component";
import { UiApi } from "newui/INewUi";
import Dialog from "newui/screen/screens/game/component/Dialog";
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
    openDialog<D extends Dialog = Dialog>(id: DialogId): D;
    closeDialog(id: DialogId): void;
    getQuadrantComponent<C extends QuadrantComponent = QuadrantComponent>(id: string | number): C | undefined;
    getQuadrantContainer(): Component;
}
