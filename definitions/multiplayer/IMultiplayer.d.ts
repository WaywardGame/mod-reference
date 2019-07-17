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
import { PlayerState } from "entity/player/IPlayer";
import Player from "entity/player/Player";
import { GameMode, IGameOptions } from "game/GameMode";
import { TurnMode } from "game/IGame";
import { IMatchmakingInfo } from "multiplayer/matchmaking/IMatchmaking";
import { IConnection } from "multiplayer/networking/IConnection";
import { ISaveObject } from "save/ISaveManager";
import { LobbyType } from "steamworks/ISteamworks";
export interface IMultiplayerEvents {
    connect(): any;
    disconnect(): any;
    joinLobby(lobbyId: string): any;
    leaveLobby(lobbyId: string): any;
    stateChange(): any;
    checkConnection(webRtcWorks: boolean, webSocketWorks: boolean): any;
}
export declare enum MultiplayerSyncCheck {
    ActionAttack = 0,
    ActionMove = 1,
    BaseEntityManager = 2,
    CanASeeB = 3,
    Container = 4,
    Creature = 5,
    CreatureIsInFlowField = 6,
    CreatureMoveDirection = 7,
    CreatureNearestPlayer = 8,
    Dismantle = 9,
    FlowFieldHashCode = 10,
    FlowFieldValue = 11,
    HandToUse = 12,
    HealthChange = 13,
    InventoryCount = 14,
    IsTileEmpty = 15,
    Item = 16,
    ItemCraft = 17,
    ItemDamage = 18,
    ItemOrder = 19,
    LastCreationIds = 20,
    PenaltyFieldHashCode = 21,
    PlaceOnTile = 22,
    PlayerPositions = 23,
    Players = 24,
    Random = 25,
    Seed = 26,
    StaminaChanges = 27,
    Stats = 28,
    Temp = 29,
    Tick = 30,
    Ticks = 31,
    Weight = 32
}
export declare const maxPlayers = 32;
export declare const defaultServerPort = 38740;
export declare const keepAliveInterval = 4000;
export declare const keepAliveTimeout = 15000;
export declare const steamLobbyPrefix = "steam:";
export declare const checkConnectionMatchmakingId = "check";
export declare const defaultSyncChecks: MultiplayerSyncCheck[];
export declare const networkingOptions: IMultiplayerNetworkingOptions;
export declare function getDefaultMultiplayerOptions(): IMultiplayerOptions;
export declare type PacketTarget = Array<Player | IConnection> | Player | IConnection;
export interface IMultiplayerOptions {
    lobbyType: LobbyType;
    pvp: boolean;
    turnMode: TurnMode;
    maxPlayers: number;
    tickSpeed: number;
    syncChecks: boolean | MultiplayerSyncCheck[];
    newPlayerState?: PlayerState;
    description?: string;
}
export interface IMultiplayerState {
    enable: boolean;
    options?: IMultiplayerOptions;
}
export interface IMultiplayerNetworkingOptions {
    matchmakingServer: string;
    matchmakingServerPort: number;
    syncChecks: boolean | MultiplayerSyncCheck[];
    enablePacketNumberChecks: boolean;
    checkSeedHistory: boolean;
    chunkSize: number;
    logPackets: boolean;
    stopWebRtc: boolean;
    fakeRoundTripTime: number;
    recentPacketTracking: number;
}
export declare type ServerInfo = string | IMatchmakingInfo;
export declare enum PacketAcceptType {
    Serverside = 1,
    Clientside = 2,
    All = 3
}
export interface IMultiplayerWorldData {
    pid: number;
    playerCount: number;
    mods: IMultiplayerMod[];
    multiplayerOptions: IMultiplayerOptions;
    difficulty: GameMode;
    difficultyOptions?: IGameOptions;
    saveObject: ISaveObject;
    initialFlowFieldPids: number[];
}
export interface IMultiplayerMod {
    name: string;
    version: string;
    publishedFileId: string | undefined;
}
export declare enum DisconnectReason {
    ConnectionTimeout = 0,
    Desync = 1,
    KeepAliveTimeout = 2,
    Kick = 3,
    Left = 4,
    LostConnection = 5,
    ServerShutdown = 6,
    UnableToJoinGame = 7,
    UnableToLoadMods = 8,
    Banned = 9,
    CheckConnection = 10
}
export declare enum UnableToJoinReason {
    BuildMismatch = 0,
    DuplicateIdentifier = 1,
    FriendsOnly = 2,
    ServerFull = 3,
    SteamRequired = 4,
    UnknownError = 5,
    VersionMismatch = 6,
    Banned = 7,
    FailedToLoadMods = 8
}
export declare enum JoinServerRetryReason {
    Timeout = 0,
    UnableToJoinSteamLobby = 1,
    UnableToConnectToGlobalMatchmakingServer = 2,
    UnableToConnectToDedicatedMatchmakingServer = 3,
    WebRTCTimeout = 4
}
