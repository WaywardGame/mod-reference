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
import { ModType } from "mod/IModInfo";
import { IDedicatedServerInfo, IModPath, ISteamFriend, ISteamId, ISteamworks, IWorkshopItem, LobbyType } from "steamworks/ISteamworks";
import Emitter from "utilities/Emitter";
export default class Steamworks extends Emitter implements ISteamworks {
    private steamId;
    private betaName;
    private buildTime;
    private overlayWorks;
    private initializingMods;
    private logsPath;
    private backupPath;
    private logFilePath;
    private modsPath;
    private workshopPath;
    private workshopModsPath;
    private workshopSyncPath;
    private workshopSharePath;
    private readonly loadedMods;
    private publishedMods;
    private readonly workshopUrl;
    private readonly workshopFileUrl;
    private readonly ignoredDirectories;
    private _serverToJoin;
    private _dedicatedServerInfo;
    private _nextBackupTime;
    private _currentLobbyId;
    private _multiplayerLogs;
    private importingSaveGameMod;
    isElectron(): boolean;
    reload(): void;
    closeWindow(): void;
    isOverlayWorking(): boolean;
    isGreenworksEnabled(): boolean;
    isNapiEnabled(): boolean;
    getAbsolutePath(...p: string[]): string;
    getAppPath(...p: string[]): string;
    isUsingAsar(): boolean;
    isTestMode(): boolean;
    isDedicatedServer(): boolean;
    getDedicatedServerInfo(): IDedicatedServerInfo | undefined;
    getMatchmakingServer(): IMatchmakingServer | undefined;
    initialize(): void;
    onUnload(): void;
    setOverlayWorks(overlayWorks: boolean): void;
    setupMods(): Promise<void>;
    getSteamId(): ISteamId | undefined;
    getFriends(): ISteamFriend[] | undefined;
    getScreenName(): string | undefined;
    getBetaName(): string;
    getBuildTime(): number | undefined;
    getPublishedMods(): IWorkshopItem[] | undefined;
    getStatInt(name: string): number | undefined;
    incrementStat(name: string): void;
    getGlobalStatInt(name: string): number | undefined;
    startPlaytimeTracking(): void;
    stopPlaytimeTracking(): void;
    setSteamRichPresence(key: string, value: string): boolean;
    clearSteamRichPresence(): void;
    updateDiscordPresence(): void;
    setDiscordPresence(presenceInfo: INapiDiscordPresenceInfo): void;
    getLobbyId(): string | undefined;
    isInLobby(): boolean;
    createLobby(type: LobbyType): void;
    setLobbyType(type: LobbyType): boolean;
    leaveLobby(): void;
    joinLobby(lobbyId: string): void;
    getLobbyData(name: string): string | undefined;
    setLobbyData(name: string, data: string): boolean;
    getLobbyMembers(): ISteamFriend[] | undefined;
    getPublishedMod(publishFileId: string): IWorkshopItem | undefined;
    fillOutWorkshopMod(index: number, item?: IWorkshopItem): void;
    publishMod(modIndex: number): Promise<string>;
    createArchive(id: string, source: string): Promise<void>;
    getPublishedItems(): Promise<IWorkshopItem[]>;
    openUrl(url: string): void;
    openWorkshop(publishId?: string): Promise<void>;
    openInviteDialog(): void;
    openSaveFolder(): void;
    openModsFolder(): void;
    openLogsFolder(): void;
    unsubscribe(publishId: string): Promise<void>;
    sendMessage(name: string, ...data: any[]): boolean;
    onMessage(name: string, listener: (e: any, ...data: any[]) => any): boolean;
    toggleDeveloperTools(): void;
    getModPath(name: string, modType: ModType, file?: string, checkIfExists?: boolean): IModPath | undefined;
    createSaveGameMod(name: string, slot: number): Promise<boolean>;
    /**
     * Do not remove callback. It's required for compatibility with pre 2.4 saves
     */
    importFromSaveGameMod(modIndex: number, json: string, callback?: (success: boolean) => void): Promise<boolean>;
    deleteSaveGameMod(name: string): void;
    debugLog(...args: any[]): void;
    hasServerToJoin(): boolean;
    onReady(): void;
    processBackups(): boolean;
    setupMultiplayerLog(): void;
    getMultiplayerLogs(): string;
    multiplayerLog(...args: any[]): void;
    multiplayerLogError(...args: any[]): void;
    private initializeGreenworks;
    private initializeNapi;
    private setupAndInitializeWorkshopMods;
    private processDisabledFailures;
    private initializeModsFromFolder;
    private enumerateInstalledWorkshopMods;
    private refreshSetupMods;
    private removeTempFolders;
    private refreshPublishedMods;
    private getIdFromWorkshopItem;
    private syncWorkshopItems;
    private ugcSynchronizeItems;
    private copyFolder;
    private saveFilesToCloud;
    private getFileShareId;
    private publishFileToWorkshop;
    private extractArchive;
    private safeOpenFolder;
    private onGameOverlayActive;
    private onLobbyCreated;
    private onLobbyEntered;
    private onLobbyChatUpdate;
    /**
     * Called when the user tries to join a lobby from their friends list or from an invite. The game client should attempt to connect to specified lobby when this is received. If the game isn't running yet then the game will be automatically launched with the command line parameter +connect_lobby <64-bit lobby Steam ID> instead.
     */
    private onLobbyJoinRequested;
    private showCharacterSelectionForMultiplayer;
    private createFolderIfNotExists;
    private getSyncPath;
    private getSharePathForModZip;
    private getSharePathForModImage;
    private getFilesInFolder;
    private logDebugInfo;
}
