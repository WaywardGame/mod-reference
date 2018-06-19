import { IPlayOptions } from "game/IGame";
import { ModType } from "mod/IModInfo";
import Emitter from "utilities/Emitter";
export interface ISteamworks extends Emitter {
    clearRichPresence(): void;
    createArchive(id: string, source: string, callback: (err?: string) => void): void;
    createLobby(type: LobbyType): void;
    createSaveGameMod(name: string, slot: number): Promise<boolean>;
    debugLog(...args: any[]): void;
    deleteSaveGameMod(name: string): void;
    fillOutWorkshopMod(index: number, item?: IWorkshopItem): void;
    getAbsolutePath(...p: string[]): string;
    getAppPath(...p: string[]): string;
    getBetaName(): string;
    getBuildTime(): number | undefined;
    getDedicatedServerInfo(): IDedicatedServerInfo | undefined;
    getFriends(): ISteamFriend[] | undefined;
    getLobbyData(name: string): string | undefined;
    getLobbyMembers(): ISteamFriend[] | undefined;
    getMatchmakingServer(): IMatchmakingServer | undefined;
    getModPath(name: string, modType: ModType, file?: string, checkIfExists?: boolean): IModPath | undefined;
    getMultiplayerLogs(): string;
    getPublishedMod(publishFileId: string): IWorkshopItem | undefined;
    getPublishedMods(): IWorkshopItem[] | undefined;
    getScreenName(): string | undefined;
    getSteamId(): ISteamId | undefined;
    processBackups(): boolean;
    hasServerToJoin(): boolean;
    importFromSaveGameMod(modIndex: number, json: string, callback: (success: boolean) => void): void;
    initialize(): void;
    isDedicatedServer(): boolean;
    isElectron(): boolean;
    isUsingAsar(): boolean;
    isGreenworksEnabled(): boolean;
    isInLobby(): boolean;
    isOverlayWorking(): boolean;
    isTestMode(): boolean;
    joinLobby(lobbyId: string): void;
    leaveLobby(): void;
    multiplayerLog(...args: any[]): void;
    multiplayerLogError(...args: any[]): void;
    onMessage(name: string, listener: (event: any, ...data: any[]) => any): boolean;
    onReady(): void;
    onUnload(): void;
    openSaveFolder(): void;
    openLogsFolder(): void;
    openModsFolder(): void;
    openUrl(url: string): void;
    openWorkshop(publishId?: string): Promise<void>;
    publishMod(modIndex: number): Promise<string>;
    sendMessage(name: string, ...data: any[]): boolean;
    setLobbyData(name: string, data: string): boolean;
    setLobbyType(type: LobbyType): boolean;
    setOverlayWorks(ipg: boolean): void;
    setRichPresence(key: string, value: string): boolean;
    setupMods(callback: () => void): void;
    setupMultiplayerLog(): void;
    toggleDeveloperTools(): void;
    unsubscribe(publishId: string): Promise<void>;
}
export default ISteamworks;
export interface ISteamId {
    accountId: number;
    screenName: string;
    steamId: string;
    staticAccountId: string;
}
export interface ISteamFriend {
    name?: string;
    steamId: string;
    staticAccountId: string;
    gameId?: string;
    lobbyId?: string;
}
export interface IWorkshopItem {
    file: string;
    fileName: string;
    isUpdated: boolean;
    timeCreated: number;
    timeUpdated: number;
    timeAddedToUserList: number;
    title: string;
    description: string;
    banned: boolean;
    acceptedForUse: boolean;
    publishedFileId: string;
    steamIDOwner: string;
}
export interface IModPath {
    path: string;
    uriEncodedPath: string;
}
export declare enum LobbyType {
    Private = 0,
    FriendsOnly = 1,
    Public = 2,
    Invisible = 3
}
export declare enum SteamworksEvent {
    OverlayShown = 0,
    OverlayHidden = 1
}
export interface IDedicatedServerInfo {
    name: string;
    port: number;
    backup: boolean;
    backupInterval: number;
    maxBackups: number;
    load: string | undefined;
    console: boolean;
    newGameOptions?: IPlayOptions;
}
