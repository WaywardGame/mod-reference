import { ConnectionState, Difficulty } from "Enums";
import { ICrafted, IPlayerOptions } from "game/IGame";
import { IPacket } from "multiplayer/packets/IPacket";
import { IPlayer } from "player/IPlayer";
import { LobbyType } from "steamworks/ISteamworks";
export interface IMultiplayer {
    addAfterSyncChecks(packet: IPacket): void;
    addBeforeSyncChecks(packet: IPacket): void;
    addSyncCheck(syncCheck: MultiplayerSyncCheck, value: any): void;
    createServer(serverId: string | undefined, options?: IMultiplayerOptions): void;
    disconnect(message?: string): void;
    getBannedPlayers(): string[];
    setBanned(identifier: string, ban: boolean): boolean;
    getClients(): IConnection[];
    getOptions(): IMultiplayerOptions;
    isClient(): boolean;
    isConnected(): boolean;
    isProcessingPacket(): boolean;
    isReady(): boolean;
    isServer(): boolean;
    joinServer(serverId: string, playerOptions?: IPlayerOptions): void;
    kick(player: IPlayer): void;
    onLobbyEntered(success: boolean, lobbyId: string): void;
    onPlaying(): void;
    sendPacket(packet: IPacket, exclude?: IPlayer | IConnection): void;
    sendPacketTo(to: IPlayer | IConnection, packet: IPacket, force?: boolean): void;
    setOptions(options: IMultiplayerOptions): void;
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
    InventoryCount = 10,
    IsTileEmpty = 11,
    ItemOrder = 12,
    ItemWeight = 13,
    LastCreationIds = 14,
    PenaltyFieldHashCode = 15,
    PlayerPositions = 16,
    Seed = 17,
    StaminaChanges = 18,
    Stats = 19,
    Ticks = 20,
    Weight = 21,
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
