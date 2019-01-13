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
import Translation, { ISerializedTranslation } from "language/Translation";
import Component from "newui/component/Component";
import { IComponent } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
import QuadrantComponent from "newui/screen/screens/game/component/QuadrantComponent";
import { DialogId } from "newui/screen/screens/game/Dialogs";
import { RequirementInstance } from "player/quest/quest/Quest";
import { QuestInstance } from "player/quest/QuestManager";
import Emitter from "utilities/Emitter";
import { IStringSection } from "utilities/string/Interpolator";
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
interface IGameScreenApi {
    readonly uiApi: UiApi;
    readonly messages: IMessages;
    openDialog<D extends IDialog = IDialog>(id: DialogId): D;
    closeDialog(id: DialogId): void;
    toggleDialog(id: DialogId): void;
    getQuadrantComponent<C extends QuadrantComponent<boolean> = QuadrantComponent<boolean>>(id: string | number): C | undefined;
    getQuadrantContainer(): Component;
    isMouseWithin(): boolean;
    wasMouseStartWithin(): boolean;
    on(event: GameScreenEvent.ShowDialog, handler: (api: IGameScreenApi, dialog: IDialog) => any): void;
    on(event: GameScreenEvent.HideDialog, handler: (api: IGameScreenApi, id: DialogId) => any): void;
}
export default IGameScreenApi;
export declare enum PinType {
    Note = 0,
    QuestRequirement = 1,
    Misc = 2
}
export interface IMessages extends Emitter {
    pinNotesAutomatically: boolean;
    getPins(): IterableIterator<IPinnedMessage>;
    pinQuestRequirement(quest: QuestInstance, requirement: RequirementInstance): IPinnedMessage | undefined;
}
export declare const enum MessagesEvent {
    PinQuestRequirement = 0,
    UnpinQuestRequirement = 1
}
export interface IPinnedMessage extends Component {
    type: PinType;
    id: any;
}
export interface IDialog extends IComponent {
    id: DialogId;
    getName(): IterableOf<IStringSection> | Translation | UiTranslation | ISerializedTranslation | undefined;
}
