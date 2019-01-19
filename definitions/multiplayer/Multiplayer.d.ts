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
import { DisconnectReason, IMultiplayer, IMultiplayerOptions, MultiplayerSyncCheck, PacketTarget, ServerInfo } from "multiplayer/IMultiplayer";
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
    private _syncCheckStack;
    private _activeSyncCheck;
    private _syncChecksSuppressed;
    private _recentPackets;
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
    disconnect(reason?: DisconnectReason, reasonDescription?: TranslationGenerator, unloading?: boolean): Promise<void>;
    displayJoinServerRetryDialog(matchmakingInfo: IMatchmakingInfo): Promise<void>;
    disconnectAndResetGameState(reason?: DisconnectReason, reasonDescription?: TranslationGenerator): Promise<void>;
    kick(player: IPlayer, reason: UiTranslation): void;
    onPlaying(): Promise<void>;
    onLobbyEntered(success: boolean, lobbyId: string): void;
    onLobbyExited(lobbyId: string): void;
    getClients(): IConnection[];
    closeConnection(reason: DisconnectReason, connection: IConnection): void;
    sendPacket(packet: IPacket, exclude?: PacketTarget): void;
    sendPacketTo(to: PacketTarget, packet: IPacket, force?: boolean): void;
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
    clearSyncPacketWaiting(packet: IPacket, wait: number): void;
    clearSyncPacketsWaiting(waitId?: string): void;
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
    private getSyncPacketWaitId;
}
