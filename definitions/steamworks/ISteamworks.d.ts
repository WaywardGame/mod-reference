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
    publishMod(modIndex: number, callback: (err: string | undefined, publishedFileId?: string) => void): void;
    createArchive(id: string, source: string, callback: (err?: string) => void): void;
    getPublishedItems(callback: (err: string | undefined, items?: IWorkshopItem[]) => void): void;
    openUrl(url: string): void;
    setupMultiplayerLog(): void;
    getMultiplayerLogs(): string;
    multiplayerLog(...args: any[]): void;
    multiplayerLogError(...args: any[]): void;
    openWorkshop(publishId?: string): void;
    openModsFolder(): void;
    openLogsFolder(): void;
    unsubscribe(publishId: string, callback: (err?: string) => void): void;
    sendMessage(name: string, data: string): void;
    toggleDeveloperTools(): void;
    getModPath(name: string, modType: ModType, file?: string, checkIfExists?: boolean): IModPath | undefined;
    createSaveGameMod(name: string, slot: number, callback: (success: boolean) => void): void;
    deleteSaveGameMod(name: string): void;
    debugLog(...args: any[]): void;
    addZoomFactor(change: number): void;
    setDefaultZoomFactor(): void;
    updateZoomFactor(): void;
    onUpdateZoomFactor(): void;
    hasServerToJoin(): boolean;
    onReady(): void;
    setupReporting(): void;
    recordProblem(message: string): void;
    setRichPresence(key: string, value: string): boolean;
    clearRichPresence(): void;
    onUnload(): void;
    createLobby(type: LobbyType): void;
    leaveLobby(): void;
    joinLobby(lobbyId: string): void;
    importFromSaveGameMod(modIndex: number, json: string, callback: (success: boolean) => void): void;
}
export default ISteamworks;
export interface ISteamId {
    accountId: number;
    screenName: string;
    staticAccountId: string;
}
export interface ISteamFriend {
    name?: string;
    steamId: string;
    gameId?: string;
    lobbyId?: string;
}
export interface IWorkshopItem {
    file: string;
    fileName: string;
    isUpdated: boolean;
    timeCreated: number;
    timeUpdated: number;
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
