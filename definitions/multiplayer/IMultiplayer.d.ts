import { ConnectionState } from "Enums";
import { ICrafted } from "game/IGame";
import { IPacket } from "multiplayer/packets/IPacket";
import { TextOrTranslationData } from "newui/INewUi";
import { ICharacter } from "newui/util/Character";
import { IPlayer } from "player/IPlayer";
import { LobbyType } from "steamworks/ISteamworks";
export interface IMultiplayer {
    addAfterSyncChecks(packet: IPacket): void;
    addBeforeSyncChecks(packet: IPacket): void;
    addSyncCheck(syncCheck: MultiplayerSyncCheck, value: any): void;
    createServer(serverInfo: ServerInfo, options?: IMultiplayerOptions): void;
    disconnect(reason?: TextOrTranslationData, reasonDescription?: TextOrTranslationData): Promise<void>;
    disconnectAndResetGameState(reason: TextOrTranslationData, reasonDescription?: TextOrTranslationData): Promise<void>;
    getBannedPlayers(): string[];
    getMatchmakingInfo(): IMatchmakingInfo | undefined;
    getDedicatedServerMatchmakingInfo(matchmakingServer: string): IMatchmakingInfo;
    getClients(): IConnection[];
    getOptions(): IMultiplayerOptions;
    isClient(): boolean;
    isConnected(): boolean;
    isProcessingPacket(): boolean;
    isReady(): boolean;
    isServer(): boolean;
    joinServer(info: ServerInfo, character?: ICharacter): void;
    kick(player: IPlayer, message: TextOrTranslationData): void;
    onLobbyEntered(success: boolean, lobbyId: string): void;
    onPlaying(): void;
    sendPacket(packet: IPacket, exclude?: IPlayer | IConnection): void;
    sendPacketTo(to: IPlayer | IConnection, packet: IPacket, force?: boolean): void;
    setBanned(identifier: string, ban: boolean): boolean;
    setOptions(options: IMultiplayerOptions): void;
    updateOptions(updates: Partial<IMultiplayerOptions>): void;
    suppressSyncChecks(suppress: boolean): void;
    syncPacket(packet: IPacket, clientSide?: () => any, checkId?: boolean, waitId?: number): any;
    resetSyncPacketsWaiting(): void;
    pausePacketProcessing(pause: boolean): void;
    updatePlayerId(oldPid: number, newPid: number): void;
}
export default IMultiplayer;
export declare const maxPlayers = 32;
export interface IMultiplayerOptions {
    lobbyType: LobbyType;
    pvp: boolean;
    maxPlayers: number;
    realTimeTickSpeed: number;
}
export interface IMultiplayerNetworkingOptions {
    matchmakingServer: string;
    matchmakingServerPort: number;
    fakeLatency: number;
    enableSyncChecks: boolean;
    enablePacketNumberChecks: boolean;
    checkSeedHistory: boolean;
    chunkSize: number;
}
export declare type ServerInfo = string | IMatchmakingInfo;
export interface IMatchmakingInfo {
    channel: string;
    matchmakingServer: string;
    isDedicatedServer: boolean;
}
export declare enum PacketAcceptType {
    Serverside = 1,
    Clientside = 2,
    All = 3,
}
export interface IConnection {
    state: ConnectionState;
    pid?: number;
    playerIdentifier?: string;
}
export declare enum MultiplayerSyncCheck {
    CanASeeB = 0,
    Container = 1,
    Creature = 2,
    CreatureIsInFlowField = 3,
    CreatureMoveDirection = 4,
    CreatureMoveTypesInFov = 5,
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
    Weight = 29,
}
export interface IMultiplayerWorldData {
    pid: number;
    playerCount: number;
    mods: IMultiplayerMod[];
    multiplayerOptions: IMultiplayerOptions;
    saveObjectString: string;
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
