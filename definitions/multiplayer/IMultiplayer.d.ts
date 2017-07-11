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
export declare enum MultiplayerSyncCheck {
    Stats = 0,
    Creature = 1,
    CanASeeB = 2,
    Weight = 3,
    StaminaChanges = 4,
    InventoryCount = 5,
    ItemWeight = 6,
    Ticks = 7,
    Seed = 8,
    PlayerPositions = 9,
    Container = 10,
    ItemOrder = 11,
    LastCreationIds = 12,
    IsTileEmpty = 13,
}
