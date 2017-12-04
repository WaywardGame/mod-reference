import { ModType } from "mod/IModManager";
export interface ISteamworks {
    isElectron(): boolean;
    isOverlayWorking(): boolean;
    isGreenworksEnabled(): boolean;
    getAbsolutePath(p: string): any;
    isLinux(): boolean;
    isMac(): boolean;
    initialize(): void;
    setOverlayWorks(ipg: boolean): void;
    setupMods(callback: () => void): void;
    getSteamId(): ISteamId | undefined;
    getScreenName(): string | undefined;
    getFriends(): ISteamFriend[] | undefined;
    getBetaName(): string;
    getPublishedMods(): IWorkshopItem[] | undefined;
    getPublishedMod(publishFileId: string): IWorkshopItem | undefined;
    fillOutWorkshopMod(index: number, item?: IWorkshopItem): void;
    publishMod(modIndex: number): Promise<string>;
    createArchive(id: string, source: string, callback: (err?: string) => void): void;
    openUrl(url: string): void;
    setupMultiplayerLog(): void;
    getMultiplayerLogs(): string;
    multiplayerLog(...args: any[]): void;
    multiplayerLogError(...args: any[]): void;
    openWorkshop(publishId?: string): Promise<void>;
    openModsFolder(): void;
    openLogsFolder(): void;
    unsubscribe(publishId: string): Promise<void>;
    sendMessage(name: string, ...data: any[]): boolean;
    onMessage(name: string, listener: (event: any, ...data: any[]) => any): boolean;
    toggleDeveloperTools(): void;
    getModPath(name: string, modType: ModType, file?: string, checkIfExists?: boolean): IModPath | undefined;
    createSaveGameMod(name: string, slot: number): Promise<boolean>;
    deleteSaveGameMod(name: string): void;
    debugLog(...args: any[]): void;
    hasServerToJoin(): boolean;
    onReady(): void;
    setupReporting(): void;
    recordProblem(message: string): void;
    setRichPresence(key: string, value: string): boolean;
    clearRichPresence(): void;
    onUnload(): void;
    createLobby(type: LobbyType): void;
    setLobbyType(type: LobbyType): void;
    leaveLobby(): void;
    joinLobby(lobbyId: string): void;
    getLobbyMembers(): ISteamFriend[] | undefined;
    importFromSaveGameMod(modIndex: number, json: string, callback: (success: boolean) => void): void;
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
    Invisible = 3,
}
