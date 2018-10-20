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
import { TurnMode } from "Enums";
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
    Disconnect = 1
}
export interface IMultiplayer extends Emitter {
    addAfterSyncChecks(packet: IPacket): void;
    addBeforeSyncChecks(packet: IPacket): void;
    addSyncCheck(syncCheck: MultiplayerSyncCheck, value: any): void;
    closeConnection(connection: IConnection): void;
    createServer(serverInfo: ServerInfo, options?: IMultiplayerOptions): void;
    disconnect(reason?: TranslationGenerator, reasonDescription?: TranslationGenerator): Promise<void>;
    disconnectAndResetGameState(reason: TranslationGenerator, reasonDescription?: TranslationGenerator): Promise<void>;
    displayJoinServerRetryDialog(matchmakingInfo: IMatchmakingInfo): void;
    getBannedPlayers(): string[];
    getClients(): IConnection[];
    getConnectedGameCode(): string | undefined;
    getConnectedMatchmakingInfo(): IMatchmakingInfo | undefined;
    getDedicatedServerMatchmakingInfo(matchmakingServer: string, identifier?: string): IMatchmakingInfo;
    getDefaultOptions(): IMultiplayerOptions;
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
    onPlaying(): Promise<void>;
    pausePacketProcessing(pause: boolean): void;
    queueSyncPacket(packet: IPacket, clientSide?: () => any, checkId?: boolean, waitId?: number): void;
    resetSyncPacketsWaiting(): void;
    sendPacket(packet: IPacket, exclude?: PacketTarget): void;
    sendPacketTo(to: PacketTarget, packet: IPacket, force?: boolean): void;
    setBanned(identifier: string, ban: boolean): boolean;
    setOptions(options: IMultiplayerOptions): void;
    suppressSyncChecks(suppress: boolean): void;
    syncGameState(): void;
    syncPacket(packet: IPacket, clientSide?: () => any, checkId?: boolean, waitId?: number): any;
    updateGlobalServerDirectory(): void;
    updateOptions(updates: Partial<IMultiplayerOptions>): void;
    updatePlayerId(oldPid: number, newPid: number): void;
}
export default IMultiplayer;
export declare enum MultiplayerSyncCheck {
    BaseEntityManager = 0,
    CanASeeB = 1,
    Container = 2,
    Creature = 3,
    CreatureIsInFlowField = 4,
    CreatureMoveDirection = 5,
    CreatureNearestPlayer = 6,
    Dismantle = 7,
    FlowFieldHashCode = 8,
    FlowFieldValue = 9,
    HealthChange = 10,
    InventoryCount = 11,
    IsTileEmpty = 12,
    Item = 13,
    ItemCraft = 14,
    ItemDamage = 15,
    ItemOrder = 16,
    LastCreationIds = 17,
    PenaltyFieldHashCode = 18,
    PlaceOnTile = 19,
    PlayerPositions = 20,
    Players = 21,
    Random = 22,
    Seed = 23,
    StaminaChanges = 24,
    Stats = 25,
    Temp = 26,
    Tick = 27,
    Ticks = 28,
    Weight = 29
}
export declare const maxPlayers = 32;
export declare const defaultServerPort = 38740;
export declare const keepAliveInterval = 4000;
export declare const keepAliveTimeout = 15000;
export declare const networkingOptions: IMultiplayerNetworkingOptions;
export declare type PacketTarget = Array<IPlayer | IConnection> | IPlayer | IConnection;
export interface IMultiplayerOptions {
    lobbyType: LobbyType;
    pvp: boolean;
    turnMode: TurnMode;
    maxPlayers: number;
    tickSpeed: number;
    syncChecks: boolean | MultiplayerSyncCheck[];
}
export interface IMultiplayerState {
    enable: boolean;
    options?: IMultiplayerOptions;
}
export interface IMultiplayerNetworkingOptions {
    matchmakingServer: string;
    matchmakingServerPort: number;
    fakeLatency: number;
    syncChecks: boolean | MultiplayerSyncCheck[];
    enablePacketNumberChecks: boolean;
    checkSeedHistory: boolean;
    chunkSize: number;
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
