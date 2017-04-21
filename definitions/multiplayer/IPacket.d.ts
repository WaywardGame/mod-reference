import { IDoodad } from "doodad/IDoodad";
import { ActionType, AttackType, EquipType, FacingDirection, IPoint, ItemQuality, ItemType, KeyBind, RestType } from "Enums";
import { IPlayerOptions } from "game/IGame";
import { IContainer, IContainerReference, IItem } from "item/IItem";
import { UiMessage } from "language/ILanguage";
import { IMultiplayerOptions } from "multiplayer/IMultiplayer";
import { IDialogInfo, IQuickSlotInfo } from "ui/IUi";
import { IRandomHistory } from "Utilities";
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
    afterRandomHistory?: IRandomHistory[];
    beforeSyncChecks?: ISyncCheck;
    afterSyncChecks?: ISyncCheck;
}
export interface IConnectPacket {
    type: PacketType.Connect;
    playerOptions: IPlayerOptions;
}
export interface IWorldPacket extends IPacketPlayerTarget {
    type: PacketType.World;
    playerCount: number;
    multiplayerOptions: IMultiplayerOptions;
    saveObjectString: string;
    initialFlowFieldPids: number[];
    crafted: {
        [index: number]: boolean;
    };
    newCrafted: {
        [index: number]: boolean;
    };
}
export interface IConnectedPacket {
    type: PacketType.Connected;
}
export interface ILoadedPacket {
    type: PacketType.Loaded;
}
export interface ITickPacket {
    type: PacketType.Tick;
}
export interface IActionPacket extends IPacketPlayerTarget, IPacketSynchronizationCheck {
    type: PacketType.Action;
    action: IActionArgumentPacket;
}
export interface IReorderItemsPacket {
    type: PacketType.ReorderItems;
    container: IPacketObject<IContainer>;
    itemIdOrder: number[];
}
export interface IAddPlayerPacket {
    type: PacketType.AddPlayer;
    playerOptions: IPlayerOptions;
}
export interface IReadyPlayerPacket extends IPacketPlayerTarget {
    type: PacketType.ReadyPlayer;
}
export interface IRemovePlayerPacket extends IPacketPlayerTarget {
    type: PacketType.RemovePlayer;
}
export interface ISynchronizeFlowFieldsPacket extends IPacketPlayersTarget {
    type: PacketType.SynchronizeFlowFields;
}
export interface IShowLoadingScreenPacket {
    type: PacketType.ShowLoadingScreen;
}
export interface IHideLoadingScreenPacket {
    type: PacketType.HideLoadingScreen;
}
export interface IUpdateOptionPacket extends IPacketPlayerTarget {
    type: PacketType.UpdateOption;
    id: string;
    value: boolean;
}
export interface IKeyBindStatePacket {
    type: PacketType.KeyBindBindState;
    bind?: KeyBind;
    value?: number;
}
export interface IUpdateDirectionPacket {
    type: PacketType.UpdateDirection;
    mouseDirection?: FacingDirection;
    touchDirection?: FacingDirection;
}
export interface IDisplayConfirmDialogPacket {
    type: PacketType.DisplayConfirmDialog;
    id: UiMessage;
    message: string;
    buttons: UiMessage[];
}
export interface IConfirmDialogSelectionPacket {
    type: PacketType.ConfirmDialogSelection;
    id: UiMessage;
    selection: UiMessage;
}
export interface IChatMessagePacket extends IPacketPlayerTarget {
    type: PacketType.ChatMessage;
    message: string;
}
export interface ISetPlayerZPacket extends IPacketPlayerTarget {
    type: PacketType.SetPlayerZ;
    z: number;
}
export interface IPausePacket {
    type: PacketType.Pause;
    paused?: boolean;
}
export interface IUpdateItemOrderPacket {
    type: PacketType.UpdateItemOrder;
    container: IContainerReference;
    itemOrder: number[] | undefined;
}
export interface IUpdateQuickSlotInfoPacket {
    type: PacketType.UpdateQuickSlotInfo;
    quickSlot: number;
    quickSlotInfo?: IQuickSlotInfo;
}
export interface IUpdateDialogInfoPacket {
    type: PacketType.UpdateDialogInfo;
    index: string | number;
    info: IDialogInfo;
}
export declare type Packet = IConnectPacket | IWorldPacket | IConnectedPacket | ILoadedPacket | ITickPacket | IActionPacket | IReorderItemsPacket | IAddPlayerPacket | IReadyPlayerPacket | IRemovePlayerPacket | IShowLoadingScreenPacket | IHideLoadingScreenPacket | ISynchronizeFlowFieldsPacket | IUpdateOptionPacket | IKeyBindStatePacket | IUpdateDirectionPacket | IDisplayConfirmDialogPacket | IConfirmDialogSelectionPacket | IChatMessagePacket | ISetPlayerZPacket | IPausePacket | IUpdateItemOrderPacket | IUpdateQuickSlotInfoPacket | IUpdateDialogInfoPacket;
export declare enum PacketObjectType {
    Array = 0,
    Item = 1,
    Doodad = 2,
    Container = 3,
}
export interface IPacketObject<T> {
    type: PacketObjectType;
    data: T;
}
export interface IActionArgumentPacket {
    all?: boolean;
    attackType?: AttackType;
    bypass?: boolean;
    container?: IPacketObject<IContainer>;
    containerName?: string;
    direction?: FacingDirection;
    doodad?: IPacketObject<IDoodad>;
    equipSlot?: EquipType;
    item?: IPacketObject<IItem>;
    itemComponentsConsumed?: IPacketObject<IItem[]>;
    itemComponentsRequired?: IPacketObject<IItem[]>;
    itemComponentsToBeSalvaged?: IPacketObject<IItem[]>;
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
