import { IDoodad } from "doodad/IDoodad";
import { ActionType, AttackType, EquipType, FacingDirection, IPoint, ItemQuality, ItemType, KeyBind, RestType } from "Enums";
import { ICrafted, IPlayerOptions } from "game/IGame";
import { IContainer, IContainerReference, IItem } from "item/IItem";
import { UiMessage } from "language/ILanguage";
import { IMultiplayerOptions } from "multiplayer/IMultiplayer";
import { IDialogInfo, IQuickSlotInfo } from "ui/IUi";
import * as Utilities from "Utilities";
import { ICreature } from "../creature/ICreature";
export declare enum PacketType {
    Connect = 0,
    World = 1,
    Connected = 2,
    Loaded = 3,
    Action = 4,
    Tick = 5,
    ReorderItems = 6,
    AddPlayer = 7,
    ReadyPlayer = 8,
    RemovePlayer = 9,
    ShowLoadingScreen = 10,
    HideLoadingScreen = 11,
    SynchronizeFlowFields = 12,
    UpdateOption = 13,
    KeyBindBindState = 14,
    UpdateDirection = 15,
    DisplayConfirmDialog = 16,
    ConfirmDialogSelection = 17,
    ChatMessage = 18,
    SetPlayerZ = 19,
    Pause = 20,
    UpdateItemOrder = 21,
    UpdateQuickSlotInfo = 22,
    UpdateDialogInfo = 23,
    MergedPackets = 24,
    Logs = 25,
}
export interface IPacketPlayerTarget {
    pid: number;
}
export interface IPacketPlayersTarget {
    pids: number[];
}
export interface IPacketSynchronizationCheck {
    type: PacketType;
    packetId?: number;
    afterRandomHistory?: Utilities.IRandomHistory[];
    beforeSyncChecks?: ISyncCheck;
    afterSyncChecks?: ISyncCheck;
}
export interface IConnectPacketData {
    type: PacketType.Connect;
    playerOptions: IPlayerOptions;
}
export interface IWorldPacketData extends IPacketPlayerTarget {
    type: PacketType.World;
    playerCount: number;
    multiplayerOptions: IMultiplayerOptions;
    saveObjectString: string;
    initialFlowFieldPids: number[];
    crafted: {
        [index: number]: ICrafted;
    };
}
export interface IConnectedPacketData {
    type: PacketType.Connected;
}
export interface ILoadedPacketData {
    type: PacketType.Loaded;
}
export interface ITickPacketData {
    type: PacketType.Tick;
}
export interface IActionPacketData extends IPacketPlayerTarget, IPacketSynchronizationCheck {
    type: PacketType.Action;
    action: IActionArgumentPacketData;
}
export interface IReorderItemsPacketData {
    type: PacketType.ReorderItems;
    container: IPacketObject<IContainer>;
    itemIdOrder: number[];
}
export interface IAddPlayerPacketData {
    type: PacketType.AddPlayer;
    playerOptions: IPlayerOptions;
}
export interface IReadyPlayerPacketData extends IPacketPlayerTarget {
    type: PacketType.ReadyPlayer;
}
export interface IRemovePlayerPacketData extends IPacketPlayerTarget {
    type: PacketType.RemovePlayer;
}
export interface ISynchronizeFlowFieldsPacketData extends IPacketPlayersTarget {
    type: PacketType.SynchronizeFlowFields;
}
export interface IShowLoadingScreenPacketData {
    type: PacketType.ShowLoadingScreen;
}
export interface IHideLoadingScreenPacketData {
    type: PacketType.HideLoadingScreen;
}
export interface IUpdateOptionPacketData extends IPacketPlayerTarget {
    type: PacketType.UpdateOption;
    id: string;
    value: boolean | number;
}
export interface IKeyBindStatePacketData {
    type: PacketType.KeyBindBindState;
    bind?: KeyBind;
    value?: number;
}
export interface IUpdateDirectionPacketData {
    type: PacketType.UpdateDirection;
    mouseDirection?: FacingDirection;
    touchDirection?: FacingDirection;
}
export interface IDisplayConfirmDialogPacketData {
    type: PacketType.DisplayConfirmDialog;
    id: UiMessage;
    message: string;
    buttons: UiMessage[];
}
export interface IConfirmDialogSelectionPacketData {
    type: PacketType.ConfirmDialogSelection;
    id: UiMessage;
    selection: UiMessage;
}
export interface IChatMessagePacketData extends IPacketPlayerTarget {
    type: PacketType.ChatMessage;
    message: string;
}
export interface ISetPlayerZPacketData extends IPacketPlayerTarget {
    type: PacketType.SetPlayerZ;
    z: number;
}
export interface IPausePacketData {
    type: PacketType.Pause;
    paused?: boolean;
}
export interface IUpdateItemOrderPacketData {
    type: PacketType.UpdateItemOrder;
    container: IContainerReference;
    itemOrder: number[] | undefined;
}
export interface IUpdateQuickSlotInfoPacketData {
    type: PacketType.UpdateQuickSlotInfo;
    quickSlot: number;
    quickSlotInfo?: IQuickSlotInfo;
}
export interface IUpdateDialogInfoPacketData {
    type: PacketType.UpdateDialogInfo;
    index: string | number;
    info: IDialogInfo;
}
export interface IMergedPacketsPacketData {
    type: PacketType.MergedPackets;
    data: PacketData[];
}
export interface ILogsPacketData {
    type: PacketType.Logs;
    logs: string;
}
export declare type PacketData = IConnectPacketData | IWorldPacketData | IConnectedPacketData | ILoadedPacketData | ITickPacketData | IActionPacketData | IReorderItemsPacketData | IAddPlayerPacketData | IReadyPlayerPacketData | IRemovePlayerPacketData | IShowLoadingScreenPacketData | IHideLoadingScreenPacketData | ISynchronizeFlowFieldsPacketData | IUpdateOptionPacketData | IKeyBindStatePacketData | IUpdateDirectionPacketData | IDisplayConfirmDialogPacketData | IConfirmDialogSelectionPacketData | IChatMessagePacketData | ISetPlayerZPacketData | IPausePacketData | IUpdateItemOrderPacketData | IUpdateQuickSlotInfoPacketData | IUpdateDialogInfoPacketData | IMergedPacketsPacketData | ILogsPacketData;
export declare enum PacketObjectType {
    Array = 0,
    Item = 1,
    Doodad = 2,
    Creature = 3,
    Player = 4,
    Container = 5,
}
export interface IPacketObject<T> {
    type: PacketObjectType;
    data: T;
}
export interface IActionArgumentPacketData {
    all?: boolean;
    attackType?: AttackType;
    bypass?: boolean;
    container?: IPacketObject<IContainer>;
    containerName?: string;
    creature?: IPacketObject<ICreature>;
    direction?: FacingDirection;
    doodad?: IPacketObject<IDoodad>;
    equipSlot?: EquipType;
    item?: IPacketObject<IItem>;
    itemComponentsConsumed?: IPacketObject<IItem[]>;
    itemComponentsRequired?: IPacketObject<IItem[]>;
    itemQuality?: ItemQuality;
    itemType?: ItemType;
    name?: string;
    point?: IPoint;
    preservee?: IPacketObject<IItem>;
    reinforcee?: IPacketObject<IItem>;
    repairee?: IPacketObject<IItem | IDoodad>;
    restType?: RestType;
    silent?: boolean;
    switchingHands?: boolean;
    targetContainer?: IPacketObject<IContainer>;
    torch?: IPacketObject<IItem>;
    transmogrifee?: IPacketObject<IItem>;
    type?: ActionType;
    useActionType?: ActionType;
}
export interface ISyncCheck {
    [index: number]: string[];
}
