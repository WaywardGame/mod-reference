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
import UiTranslation from "language/dictionary/UiTranslation";
import { IHookHost } from "mod/IHookHost";
import { IMultiplayer, IMultiplayerOptions, MultiplayerSyncCheck, PacketTarget, ServerInfo } from "multiplayer/IMultiplayer";
import { IMatchmakingInfo } from "multiplayer/matchmaking/IMatchmaking";
import { IConnection } from "multiplayer/networking/IConnection";
import { IPacket } from "multiplayer/packets/IPacket";
import { TranslationGenerator } from "newui/component/IComponent";
import IPlayer, { ICharacter } from "player/IPlayer";
import Emitter from "utilities/Emitter";
export default class Multiplayer extends Emitter implements IMultiplayer, IHookHost {
    private readonly _playerIdentifier;
    private _isServer;
    private _server;
    private readonly _clients;
    private _joinServerTimeoutId;
    private _joinedMatchmakingInfo;
    private _connectedMatchmakingInfo;
    private _globalMatchmaking;
    private _globalMatchmakingRetryTimeoutId;
    private _dedicatedMatchmaking;
    private _dedicatedMatchmakingRetryTimeoutId;
    private _options;
    private _character;
    private _incomingPacketQueue;
    private _incomingPacketProcessingPaused;
    private _packetTickIntervalId;
    private _currentPacketProcessing;
    private _currentSyncPacketsWaiting;
    private _currentSyncPacketsProcessing;
    private _queuedSyncPackets;
    private _syncCheckStack;
    private _activeSyncCheck;
    private _syncChecksSuppressed;
    private _disconnectingFromSyncIssue;
    private _ipAddress;
    private readonly _matchmakingSecret;
    constructor();
    isConnected(): boolean;
    isReady(): boolean;
    isServer(): boolean;
    isClient(): boolean;
    isProcessingPacket(): boolean;
    getPlayerIdentifier(): string;
    getDefaultOptions(): IMultiplayerOptions;
    getOptions(): IMultiplayerOptions;
    setOptions(options: IMultiplayerOptions): void;
    updateOptions(updates: Partial<IMultiplayerOptions>): void;
    getConnectedMatchmakingInfo(): IMatchmakingInfo | undefined;
    /**
     * Three types of game codes:
     * 1. Dedicated server code - ex. home.spacetech.us:1234
     * 2. Steam lobby code - ex. steam:109775241017071190
     * 3. Global matchmaking server id - ex. 87287724-49aa-e556-4145-3ed96c649a20
     */
    getConnectedGameCode(): string | undefined;
    convertGameCodeToServerInfo(gameCode: string): ServerInfo;
    getDedicatedServerMatchmakingInfo(matchmakingServer: string, identifier?: string): IMatchmakingInfo;
    getBannedPlayers(): string[];
    setBanned(identifier: string, ban: boolean): boolean;
    createServer(serverInfo: ServerInfo, options?: IMultiplayerOptions): void;
    joinServer(serverInfo: ServerInfo, character?: ICharacter): void;
    disconnect(reason?: TranslationGenerator, reasonDescription?: TranslationGenerator, unloading?: boolean): Promise<void>;
    displayJoinServerRetryDialog(matchmakingInfo: IMatchmakingInfo): Promise<void>;
    disconnectAndResetGameState(reason?: TranslationGenerator, reasonDescription?: TranslationGenerator): Promise<void>;
    kick(player: IPlayer, reason: UiTranslation): void;
    onPlaying(): Promise<void>;
    onLobbyEntered(success: boolean, lobbyId: string): void;
    getClients(): IConnection[];
    closeConnection(connection: IConnection): void;
    sendPacket(packet: IPacket, exclude?: PacketTarget): void;
    sendPacketTo(to: PacketTarget, packet: IPacket, force?: boolean): void;
    syncPacket(packet: IPacket, clientSide?: () => any, checkId?: boolean, waitId?: number): any;
    queueSyncPacket(packet: IPacket, clientSide?: () => any, checkId?: boolean, waitId?: number): void;
    resetSyncPacketsWaiting(): void;
    pausePacketProcessing(pause: boolean): void;
    updatePlayerId(oldPid: number, newPid: number): void;
    suppressSyncChecks(suppress: boolean): void;
    syncGameState(): void;
    preSaveGame(): void;
    postSaveGame(): void;
    updateGlobalServerDirectory(): void;
    isSyncCheckEnabled(syncCheck: MultiplayerSyncCheck): boolean;
    addSyncCheck(syncCheck: MultiplayerSyncCheck, value: any): void;
    addBeforeSyncChecks(packet: IPacket): void;
    addAfterSyncChecks(packet: IPacket): void;
    private addDefaultSyncChecks;
    private getPacketSyncChecks;
    private clearJoinServerRetryTimeout;
    private startMatchmakingServer;
    private stopMatchmakingServer;
    private connectGlobalMatchmakingServer;
    private disconnectGlobalMatchmakingServer;
    private connectDedicatedMatchmakingServer;
    private disconnectDedicatedMatchmakingServer;
    private onMatchmakingMessage;
    private _onConnected;
    private onConnectionData;
    private packetTick;
    private processIncomingPackets;
    private processOutgoingPackets;
    private processPacket;
    private synchronizationCheck;
    private desync;
    private sendPacketInternal;
    private _sendData;
    private onStateChange;
    private convertToMatchmakingInfo;
}
