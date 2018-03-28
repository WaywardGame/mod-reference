import { IPlayOptions } from "game/IGame";
import HookCallFactory from "mod/HookCallFactory";
import { Hook, IModConfig } from "mod/IMod";
import { IModInfo, IModProvides, ModState, ModType } from "mod/IModInfo";
import { CanLoadState, ICachedHook, ICanLoadInfo, IModManager } from "mod/IModManager";
import Log from "utilities/Log";
export default class ModManager implements IModManager {
    private readonly mods;
    private modsToSetup;
    private readonly internalMods;
    private readonly internalModsElectron;
    private cachedHooks;
    private readonly onLanguageLoadCallbacks;
    constructor();
    loadAll(options: Partial<IPlayOptions>): Promise<string | undefined>;
    unloadAll(reset?: boolean): void;
    setupMods(callback: () => void): void;
    saveAll(): void;
    getFile(modIndex: number, file: string, callback: (data: string, success: boolean) => void): boolean;
    setupMod(folderName: string, modType: ModType, callback: (id?: number) => void, initialModState?: ModState): Promise<void>;
    removeMod(id: number, uninstall?: boolean): void;
    getMods(): IModInfo[];
    getLoadedMods(): IModInfo[];
    getLoadedModByName(name: string): IModInfo | undefined;
    getModFromIndex(i: number): IModInfo;
    getEnabledMods(): number[];
    getHook<H extends Hook, R = any>(hook: H, defaultValue?: R): HookCallFactory<H, R>;
    getModsWithHook(hook: Hook): IterableIterator<number>;
    getCachedHook(hook: Hook): ICachedHook | undefined;
    /**
     * @deprecated
     * @see `getHook(hookName).call(...args)`
     */
    callHook(hook: Hook, ...args: any[]): any;
    /**
     * @deprecated
     * @see `getHook(hookName, defaultValue).call(...args)`
     */
    callHookWithDefault<T>(hook: Hook, defaultValue: T, ...args: any[]): T;
    load(index: number): void;
    unload(index: number): void;
    save(index: number): void;
    reloadByName(name: string): boolean;
    reload(index: number): boolean;
    isValid(index: number): boolean;
    isEnabled(index: number): boolean;
    isLoaded(index: number): boolean;
    getIdentifier(index: number): string;
    getConfig(mod: number | IModInfo): IModConfig | undefined;
    getName(index: number): string;
    getLog(index: number): Log;
    getDescription(index: number): string;
    getVersion(index: number): string;
    getLastUpdatedDate(index: number): number | undefined;
    getInstallDate(index: number): number | undefined;
    getCreatedDate(index: number): number | undefined;
    getAuthor(index: number): string;
    getType(index: number): ModType;
    getRequiredMods(index: number): string[];
    getPath(index: number): string;
    getFolderName(index: number): string;
    getPublishFileId(index: number): string | undefined;
    getSteamIdOwner(index: number): string | undefined;
    getProvided(index: number): IModProvides;
    canLoad(index: number, fromModsMenu?: boolean, count?: number): CanLoadState;
    canLoadFromIdentifier(identifier: string): ICanLoadInfo;
    getIndexFromName(name: string): number[];
    getIndexFromPublishId(publishFileId: string): number[];
    getIndexFromPath(path: string): number | undefined;
    isEnabledByName(name: string): boolean;
    isLoadedByName(name: string): boolean;
    setPublishId(index: number, publishedFileId: string): void;
    setSteamIdOwner(index: number, steamIdOwner: string): void;
    setLastUpdated(index: number, lastUpdated: number): void;
    setInstallDate(index: number, installDate: number): void;
    setCreatedDate(index: number, createdDate: number): void;
    getState(index: number): ModState;
    isInitializing(index: number): ModState;
    setState(index: number, state: ModState, force?: boolean, cacheHooks?: boolean, callback?: () => void, unloaded?: boolean): boolean;
    uninitialize(index: number): void;
    uninitializeAll(): void;
    /**
     * Caches the hooks used by each mod, sorted by priority.
     *
     * 1. For every valid mod, cache the hooks for that mod using `cacheHooksForMod`
     * 2. For all cached hooks, sort the cached list of priorities that all the cached hook methods use.
     */
    cacheHooks(): void;
    /**
     * Cache the hooks for a given mod.
     *
     * 1. If the mod doesn't have an instance, return.
     * 2. Filter all the registered hooks on the mod by whether they're actually hook methods. Log errors for
     *    any invalid methods.
     * 3. Filter by check if the mod is loaded or enabled and the hook is global.
     *   - This is to verify that this hook should be cached right now. Global hooks are always cached if the mod
     * 	   is enabled, while non-global hooks are only cached if the mod is loaded (which is only if you're in-game)
     * 4. Cache each hook by priority.
     * 5. Log registered hooks, formatted as `hookName[priority]`
     */
    private cacheHooksForMod(index);
    private onLanguageLoad(languageName, callback);
}
