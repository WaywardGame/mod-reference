import { Difficulty } from "Enums";
import { IPlayerOptions } from "game/IGame";
import { PacketData, PacketType } from "multiplayer/IPacket";
import { IPlayer } from "player/IPlayer";
import { LobbyType } from "steamworks/ISteamworks";
export interface IMultiplayer {
    addSyncCheck(syncCheck: MultiplayerSyncCheck, value: any): void;
    createServer(serverId: string | undefined, options?: IMultiplayerOptions): void;
    disconnect(): void;
    executeSyncedPacket(packetDataOrType: PacketData | PacketType): number | undefined | void;
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
    sendPacket(player: IPlayer, packetData: PacketData): void;
    syncPacket(packetData: PacketData, clientSide?: () => any, checkPacketType?: boolean): any;
    updatePlayerId(oldPid: number, newPid: number): void;
}
export default IMultiplayer;
export interface IMultiplayerOptions {
    lobbyType: LobbyType;
    difficulty: Difficulty;
    pvp: boolean;
}
export interface IMultiplayerNetworkOptions {
    matchmakingServer: string;
    matchmakingServerPort: number;
    fakeLatency: number;
    enableSyncChecks: boolean;
    enablePacketMerging: boolean;
    enablePacketIdChecks: boolean;
    checkSeedHistory: boolean;
    chunkSize: number;
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
}
