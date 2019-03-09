/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IPlayOptions } from "game/IGame";
import HookCallFactory from "mod/HookCallFactory";
import { Hook } from "mod/IHookManager";
import { IModInfo, IModProvides, ModState, ModType } from "mod/IModInfo";
import Emitter from "utilities/Emitter";
import Log from "utilities/Log";
export interface ICanLoadInfo {
    name: string;
    loadable: boolean;
}
export declare enum CanLoadState {
    Loadable = 0,
    Disabled = 1,
    ModLoadError = 2,
    DependencyIssue = 3,
    ModRequiresItself = 4,
    MissingRequiredMod = 5,
    CannotLoadRequiredMod = 6,
    ReqiredModNotLoaded = 7,
    LocalModPrecedence = 8,
    IncompatibleVersion = 9,
    DisabledInMultiplayer = 10
}
export declare const enum ModManagerEvent {
    LoadAll = "LoadAll",
    UnloadAll = "UnloadAll"
}
export interface IModManager extends Emitter {
    canLoad(index: number, fromModsMenu?: boolean): CanLoadState;
    canLoadFromIdentifier(identifier: string): ICanLoadInfo;
    getAuthor(index: number): string;
    getCreatedDate(index: number): number | undefined;
    getDescription(index: number): string;
    getTags(index: number): Set<string>;
    getEnabledMods(): number[];
    getFile(modIndex: number, file: string, callback: (data: string, success: boolean) => void): boolean;
    getFolderName(index: number): string;
    getIdentifier(index: number): string;
    getIndexFromIdentifier(identifier: string): number[];
    getIndexFromName(name: string): number[];
    getIndexFromPath(path: string): number | undefined;
    getIndexFromPublishId(publishFileId: string): number[];
    getInstallDate(index: number): number | undefined;
    getLastUpdatedDate(index: number): number | undefined;
    getLoadedModByName(name: string): IModInfo | undefined;
    getLoadedMods(): IModInfo[];
    getLog(index: number): Log;
    getModFromIndex(i: number): IModInfo;
    getMods(): IModInfo[];
    getName(index: number): string;
    getPath(index: number): string;
    getProvided(index: number): IModProvides;
    getPublishFileId(index: number): string | undefined;
    getRequiredMods(index: number): string[];
    getState(index: number): ModState;
    getSteamIdOwner(index: number): string | undefined;
    getType(index: number): ModType;
    getVersion(index: number): string;
    isEnabled(index: number): boolean;
    isEnabledByName(name: string): boolean;
    isLoaded(index: number): boolean;
    isLoadedByName(name: string): boolean;
    isMultiplayerClientSide(index: number): boolean;
    isMultiplayerCompatible(index: number): boolean;
    isUnloadable(index: number): boolean;
    isValid(index: number): boolean;
    loadAll(options: Partial<IPlayOptions>): Promise<string | undefined>;
    reload(index: number): Promise<boolean>;
    reloadByName(name: string): Promise<boolean>;
    removeMod(id: number, uninstall?: boolean): void;
    save(index: number): void;
    saveAll(): void;
    setCreatedDate(index: number, createdDate: number): void;
    setInstallDate(index: number, installDate: number): void;
    setLastUpdated(index: number, lastUpdated: number): void;
    setPublishId(index: number, publishedFileId: string): void;
    setState(index: number, state: ModState, force?: boolean, cacheHooks?: boolean, callback?: () => void): Promise<boolean>;
    setSteamIdOwner(index: number, steamIdOwner: string): void;
    setupMod(folderName: string, modType: ModType, initialModState?: ModState): Promise<number | undefined>;
    setupMods(): Promise<void>;
    uninitialize(index: number): boolean;
    uninitializeAll(): void;
    unload(index: number): Promise<void>;
    unloadAll(reset?: boolean): Promise<void>;
    /**
     * Returns a `HookCallFactory` for the given hook name.
     * @param hook A hook name.
     * @param defaultValue The default value to return
     * @see `Mod` or `Hook` for a list of valid hook names.
     */
    getHook<H extends Hook, R = any>(hook: H, defaultValue?: R): HookCallFactory<H, R>;
}
export default IModManager;
