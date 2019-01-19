/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import { IPlayOptions } from "game/IGame";
import { ModType } from "mod/IModInfo";
import Emitter from "utilities/Emitter";
export interface ISteamworks extends Emitter {
    clearSteamRichPresence(): void;
    closeWindow(): void;
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
    getGlobalStatInt(name: string): number | undefined;
    getLobbyData(name: string): string | undefined;
    getLobbyId(): string | undefined;
    getLobbyMembers(): ISteamFriend[] | undefined;
    getMatchmakingServer(): IMatchmakingServer | undefined;
    getModPath(name: string, modType: ModType, file?: string, checkIfExists?: boolean): IModPath | undefined;
    getMultiplayerLogs(): string;
    getPublishedMod(publishFileId: string): IWorkshopItem | undefined;
    getPublishedMods(): IWorkshopItem[] | undefined;
    getScreenName(): string | undefined;
    getStatInt(name: string): number | undefined;
    getSteamId(): ISteamId | undefined;
    hasServerToJoin(): boolean;
    importFromSaveGameMod(modIndex: number, json: string, callback: (success: boolean) => void): void;
    incrementStat(name: string): void;
    initialize(): void;
    isDedicatedServer(): boolean;
    isElectron(): boolean;
    isGreenworksEnabled(): boolean;
    isInLobby(): boolean;
    isOverlayWorking(): boolean;
    isTestMode(): boolean;
    isUsingAsar(): boolean;
    joinLobby(lobbyId: string): void;
    leaveLobby(): void;
    multiplayerLog(...args: any[]): void;
    multiplayerLogError(...args: any[]): void;
    onMessage(name: string, listener: (event: any, ...data: any[]) => any): boolean;
    onReady(): void;
    onUnload(): void;
    openLogsFolder(): void;
    openModsFolder(): void;
    openSaveFolder(): void;
    openUrl(url: string): void;
    openInviteDialog(): void;
    openWorkshop(publishId?: string): Promise<void>;
    processBackups(): boolean;
    publishMod(modIndex: number): Promise<string>;
    reload(): void;
    sendMessage(name: string, ...data: any[]): boolean;
    setDiscordPresence(presenceInfo: INapiDiscordPresenceInfo): void;
    setLobbyData(name: string, data: string): boolean;
    setLobbyType(type: LobbyType): boolean;
    setOverlayWorks(ipg: boolean): void;
    setSteamRichPresence(key: string, value: string): boolean;
    setupMods(): Promise<void>;
    setupMultiplayerLog(): void;
    startPlaytimeTracking(): void;
    stopPlaytimeTracking(): void;
    toggleDeveloperTools(): void;
    unsubscribe(publishId: string): Promise<void>;
    updateDiscordPresence(): void;
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
    newGameOptions?: Partial<IPlayOptions> & {
        dailyChallenge?: boolean;
    };
}
