import { IPlayOptions } from "game/IGame";
import HookCallFactory from "mod/HookCallFactory";
import { Hook } from "mod/IMod";
import { IModInfo, IModProvides, ModState, ModType } from "mod/IModInfo";
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
    DisabledInMultiplayer = 10,
}
export interface IModManager {
    cacheHooks(): void;
    canLoad(index: number, fromModsMenu?: boolean): CanLoadState;
    canLoadFromIdentifier(identifier: string): ICanLoadInfo;
    getAuthor(index: number): string;
    getDescription(index: number): string;
    getFile(modIndex: number, file: string, callback: (data: string, success: boolean) => void): boolean;
    getFolderName(index: number): string;
    getIdentifier(index: number): string;
    getIndexFromName(name: string): number[];
    getIndexFromPath(path: string): number | undefined;
    getIndexFromPublishId(publishFileId: string): number[];
    getLastUpdatedDate(index: number): number | undefined;
    getInstallDate(index: number): number | undefined;
    getCreatedDate(index: number): number | undefined;
    getLoadedModByName(name: string): IModInfo | undefined;
    getLoadedMods(): IModInfo[];
    getEnabledMods(): number[];
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
    isValid(index: number): boolean;
    load(index: number): void;
    loadAll(options: Partial<IPlayOptions>, callback: (err: string | undefined, mods: string[]) => void): void;
    reload(index: number): boolean;
    reloadByName(name: string): boolean;
    removeMod(id: number, uninstall?: boolean): void;
    save(index: number): void;
    saveAll(): void;
    setLastUpdated(index: number, lastUpdated: number): void;
    setInstallDate(index: number, installDate: number): void;
    setCreatedDate(index: number, createdDate: number): void;
    setPublishId(index: number, publishedFileId: string): void;
    setState(index: number, state: ModState, force?: boolean, cacheHooks?: boolean, callback?: () => void): boolean;
    setSteamIdOwner(index: number, steamIdOwner: string): void;
    setupMod(folderName: string, modType: ModType, callback: (id?: number) => void, initialModState?: ModState): void;
    setupMods(callback: () => void): void;
    uninitialize(index: number): void;
    uninitializeAll(): void;
    unload(index: number): void;
    unloadAll(reset?: boolean): void;
    /**
     * @deprecated
     * @see `getHook(hookName).call(...args)`
     */
    callHook<T = any>(hook: Hook, ...args: any[]): T;
    /**
     * @deprecated
     * @see `getHook(hookName, defaultValue).call(...args)`
     */
    callHookWithDefault<T = any>(hook: Hook, defaultValue: T, ...args: any[]): T;
    /**
     * Returns a `HookCallFactory` for the given hook name.
     * @param hook A hook name.
     * @see `Mod` or `Hook` for a list of valid hook names.
     */
    getHook<H extends Hook, R = any>(hook: H, defaultValue?: R): HookCallFactory<H, R>;
    /**
     * Returns an iterable iterator of the mods with a given hook.
     * @param hook A hook name.
     * @see `Mod` or `Hook` for a list of valid hook names.
     */
    getModsWithHook(hook: Hook): IterableIterator<number>;
}
export default IModManager;
