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
    disconnect(): void;
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
    Stats = 0,
    Creature = 1,
    CanASeeB = 2,
    CanASeeBLightSource = 3,
    Weight = 4,
    StaminaChanges = 5,
    InventoryCount = 6,
    ItemWeight = 7,
    Ticks = 8,
    Seed = 9,
    PlayerPositions = 10,
    Container = 11,
    ItemOrder = 12,
    LastCreationIds = 13,
    IsTileEmpty = 14,
    CreatureNearestPlayer = 15,
    CreatureIsInFlowField = 16,
    CreatureMoveDirection = 17,
    FlowFieldValue = 18,
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
