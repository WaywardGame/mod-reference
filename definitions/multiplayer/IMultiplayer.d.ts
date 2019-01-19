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
import { PlayerState, TurnMode } from "Enums";
import { Difficulty, IDifficultyOptions } from "game/Difficulty";
import { ICrafted } from "game/IGame";
import { IMatchmakingInfo } from "multiplayer/matchmaking/IMatchmaking";
import { IConnection } from "multiplayer/networking/IConnection";
import { IPacket } from "multiplayer/packets/IPacket";
import { TextOrTranslationData, TranslationGenerator } from "newui/component/IComponent";
import { ICharacter, IPlayer } from "player/IPlayer";
import { SaveObject } from "save/ISaveManager";
import { LobbyType } from "steamworks/ISteamworks";
import Emitter from "utilities/Emitter";
export declare enum MultiplayerEvent {
    Connect = 0,
    Disconnect = 1,
    JoinLobby = 2,
    LeaveLobby = 3
}
export interface IMultiplayer extends Emitter {
    addAfterSyncChecks(packet: IPacket): void;
    addBeforeSyncChecks(packet: IPacket): void;
    addSyncCheck(syncCheck: MultiplayerSyncCheck, value: any): void;
    clearSyncPacketsWaiting(waitId?: string): void;
    clearSyncPacketWaiting(packet: IPacket, wait: number): void;
    closeConnection(reason: DisconnectReason, connection: IConnection): void;
    convertGameCodeToServerInfo(gameCode: string): ServerInfo;
    createServer(serverInfo: ServerInfo, options?: IMultiplayerOptions): void;
    disconnect(reason?: DisconnectReason, reasonDescription?: TranslationGenerator, unloading?: boolean): Promise<void>;
    disconnectAndResetGameState(reason: DisconnectReason, reasonDescription?: TranslationGenerator): Promise<void>;
    displayJoinServerRetryDialog(matchmakingInfo: IMatchmakingInfo): void;
    getBannedPlayers(): string[];
    getClients(): IConnection[];
    getConnectedGameCode(): string | undefined;
    getConnectedMatchmakingInfo(): IMatchmakingInfo | undefined;
    getDedicatedServerMatchmakingInfo(matchmakingServer: string, identifier?: string): IMatchmakingInfo;
    getOptions(): IMultiplayerOptions;
    getPlayerIdentifier(): string;
    isClient(): boolean;
    isConnected(): boolean;
    isProcessingPacket(): boolean;
    isReady(): boolean;
    isServer(): boolean;
    joinServer(info: ServerInfo, character?: ICharacter): void;
    kick(player: IPlayer, message: TextOrTranslationData): void;
    onLobbyEntered(success: boolean, lobbyId: string): void;
    onLobbyExited(lobbyId: string): void;
    onPlaying(): Promise<void>;
    pausePacketProcessing(pause: boolean): void;
    sendPacket(packet: IPacket, exclude?: PacketTarget): void;
    sendPacketTo(to: PacketTarget, packet: IPacket, force?: boolean): void;
    setBanned(identifier: string, ban: boolean): boolean;
    setOptions(options: IMultiplayerOptions): void;
    suppressSyncChecks(suppress: boolean): void;
    syncGameState(): void;
    /**
     * Sends a packet in a synchronized way to the server or clients
     *
     * When ran as a server, clientSide() is called and the packet data is sent to all the clients.
     *
     * When ran as a client, the packet is sent to the server. The server is expected to call this method, which in turn sends the packet back to the client. When the client receives the packet, this method a second time and clientSide() is called.
     *
     * @param packet The packet
     * @param clientSide The method to run for the client or server.
     * @param checkId When true, this packet will not be sent to the server/client if the same packet is already being processed. When false, this packet will not be sent if any packet is already being processed. Useful when dealing with methods that could end up sending multiple packets while a packet is already being processed.
     * @param wait When true, the client will keep track of what packets it sent to the server. If the client calls this method again before the server responds, it will not send a duplicate packet. It will wait for the server to send the packet back before allowing another one to be sent. When true, it will keep track of duplicate packets based on the packet type. When it's a number, it will keep track of duplicate packets based on the packet type + the number.
     */
    syncPacket(packet: IPacket, clientSide?: () => any, checkId?: boolean, wait?: number | true): any;
    updateGlobalServerDirectory(): void;
    updateOptions(updates: Partial<IMultiplayerOptions>): void;
    updatePlayerId(oldPid: number, newPid: number): void;
}
export default IMultiplayer;
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
export declare const networkingOptions: IMultiplayerNetworkingOptions;
export declare function getDefaultMultiplayerOptions(): IMultiplayerOptions;
export declare type PacketTarget = Array<IPlayer | IConnection> | IPlayer | IConnection;
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
    difficulty: Difficulty;
    difficultyOptions: IDifficultyOptions;
    saveObject: SaveObject;
    initialFlowFieldPids: number[];
    crafted: {
        [index: number]: ICrafted;
    };
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
    UnableToLoadMods = 8
}
