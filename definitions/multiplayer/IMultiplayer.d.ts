import { ConnectionState } from "Enums";
import { ICrafted } from "game/IGame";
import { IPacket } from "multiplayer/packets/IPacket";
import { ICharacter } from "newui/util/Character";
import { IPlayer } from "player/IPlayer";
import { LobbyType } from "steamworks/ISteamworks";
import { TextOrTranslationData } from "../newui/INewUi";
export interface IMultiplayer {
    addAfterSyncChecks(packet: IPacket): void;
    addBeforeSyncChecks(packet: IPacket): void;
    addSyncCheck(syncCheck: MultiplayerSyncCheck, value: any): void;
    createServer(channel: string | undefined, options?: IMultiplayerOptions): void;
    disconnect(reason?: TextOrTranslationData, reasonDescription?: TextOrTranslationData): Promise<void>;
    disconnectAndResetGameState(reason: TextOrTranslationData, reasonDescription?: TextOrTranslationData): Promise<void>;
    getBannedPlayers(): string[];
    getChannel(): string | undefined;
    getClients(): IConnection[];
    getOptions(): IMultiplayerOptions;
    isClient(): boolean;
    isConnected(): boolean;
    isProcessingPacket(): boolean;
    isReady(): boolean;
    isServer(): boolean;
    joinServer(channel: string, character?: ICharacter): void;
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
    Dismantle = 8,
    FlowFieldHashCode = 9,
    FlowFieldValue = 10,
    HealthChange = 11,
    InventoryCount = 12,
    IsTileEmpty = 13,
    Item = 14,
    ItemCraft = 15,
    ItemDamage = 16,
    ItemOrder = 17,
    LastCreationIds = 18,
    PenaltyFieldHashCode = 19,
    PlaceOnTile = 20,
    PlayerPositions = 21,
    Players = 22,
    Seed = 23,
    StaminaChanges = 24,
    Stats = 25,
    Temp = 26,
    Ticks = 27,
    Weight = 28,
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
