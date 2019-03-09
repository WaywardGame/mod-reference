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
import { IModConfig } from "mod/IMod";
import { IModInfo, IModProvides, ModState, ModType } from "mod/IModInfo";
import { CanLoadState, ICanLoadInfo, IModManager } from "mod/IModManager";
import Emitter from "utilities/Emitter";
import Log from "utilities/Log";
export default class ModManager extends Emitter implements IModManager {
    private readonly mods;
    private readonly internalMods;
    private readonly internalModsElectron;
    private readonly onModInitializedCallbacks;
    constructor();
    loadAll(options: Partial<IPlayOptions>): Promise<string | undefined>;
    isMultiplayerCompatible(index: number): boolean;
    isMultiplayerClientSide(index: number): boolean;
    isUnloadable(index: number): boolean;
    unloadAll(reset?: boolean): Promise<void>;
    setupMods(): Promise<void>;
    saveAll(): void;
    getFile(modIndex: number, file: string, callback: (data: string, success: boolean) => void): boolean;
    setupMod(folderName: string, modType: ModType, initialModState?: ModState): Promise<number | undefined>;
    removeMod(id: number, uninstall?: boolean): void;
    getMods(): IModInfo[];
    getLoadedMods(): IModInfo[];
    getLoadedModByName(name: string): IModInfo | undefined;
    getModFromIndex(i: number): IModInfo;
    getEnabledMods(): number[];
    getHook<H extends Hook, R = any>(hook: H, defaultValue?: R): HookCallFactory<H, R>;
    load(index: number, loadOrder: number): Promise<void>;
    unload(index: number, cacheHooks?: boolean): Promise<void>;
    save(index: number): void;
    /**
     * Used by pro developers
     */
    reloadByName(name: string, cacheHooks?: boolean): Promise<boolean>;
    /**
     * Used by pro developers
     */
    reload(index: number, cacheHooks?: boolean): Promise<boolean>;
    isValid(index: number): boolean;
    isEnabled(index: number): boolean;
    isLoaded(index: number): boolean;
    getIdentifier(index: number): string;
    getConfig(mod: number | IModInfo): IModConfig | undefined;
    getName(index: number): string;
    getLog(index: number): Log;
    getDescription(index: number): string;
    getTags(index: number): Set<string>;
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
    getIndexFromIdentifier(identifier: string): number[];
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
    setState(index: number, state: ModState, force?: boolean, cacheHooks?: boolean, callback?: () => any, unloaded?: boolean): Promise<boolean>;
    uninitialize(index: number): boolean;
    uninitializeAll(): void;
    /**
     * Loads all of the stylesheets from the given mod.
     */
    private initializeStylesheets;
    /**
     * Initializes the languages for the given mod.
     */
    private initializeLanguages;
    /**
     * Initializes the customizations for the given mod.
     */
    private initializeCustomizations;
}
