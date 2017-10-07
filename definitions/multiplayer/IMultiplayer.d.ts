import { ConnectionState, Difficulty } from "Enums";
import { ICrafted, IPlayerOptions } from "game/IGame";
import { UiMessage } from "language/ILanguage";
import { IPacket } from "multiplayer/packets/IPacket";
import { IPlayer } from "player/IPlayer";
import { LobbyType } from "steamworks/ISteamworks";
export interface IMultiplayer {
    addAfterSyncChecks(packet: IPacket): void;
    addBeforeSyncChecks(packet: IPacket): void;
    addSyncCheck(syncCheck: MultiplayerSyncCheck, value: any): void;
    createServer(serverId: string | undefined, options?: IMultiplayerOptions): void;
    disconnect(message?: string): void;
    disconnectAndResetGameState(uiMessage: UiMessage): void;
    getBannedPlayers(): string[];
    getClients(): IConnection[];
    getOptions(): IMultiplayerOptions;
    isClient(): boolean;
    isConnected(): boolean;
    isProcessingPacket(): boolean;
    isReady(): boolean;
    isServer(): boolean;
    joinServer(serverId: string, playerOptions?: IPlayerOptions): void;
    kick(player: IPlayer, uiMessage: UiMessage): void;
    onLobbyEntered(success: boolean, lobbyId: string): void;
    onPlaying(): void;
    sendPacket(packet: IPacket, exclude?: IPlayer | IConnection): void;
    sendPacketTo(to: IPlayer | IConnection, packet: IPacket, force?: boolean): void;
    setBanned(identifier: string, ban: boolean): boolean;
    setOptions(options: IMultiplayerOptions): void;
    suppressSyncChecks(suppress: boolean): void;
    syncPacket(packet: IPacket, clientSide?: () => any, checkId?: boolean, waitId?: number): any;
    updatePlayerId(oldPid: number, newPid: number): void;
}
export default IMultiplayer;
export interface IMultiplayerOptions {
    lobbyType: LobbyType;
    difficulty: Difficulty;
    pvp: boolean;
    maxPlayers: number | undefined;
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
    CanASeeBLightSource = 1,
    Container = 2,
    Creature = 3,
    CreatureIsInFlowField = 4,
    CreatureMoveDirection = 5,
    CreatureMoveTypesInFov = 6,
    CreatureNearestPlayer = 7,
    FlowFieldHashCode = 8,
    FlowFieldValue = 9,
    HealthChange = 10,
    InventoryCount = 11,
    IsTileEmpty = 12,
    ItemOrder = 13,
    ItemWeight = 14,
    LastCreationIds = 15,
    PenaltyFieldHashCode = 16,
    PlayerPositions = 17,
    Players = 18,
    Seed = 19,
    StaminaChanges = 20,
    Stats = 21,
    Temp = 22,
    Ticks = 23,
    Weight = 24,
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
