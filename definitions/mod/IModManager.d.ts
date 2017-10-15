import { IPlayOptions } from "game/IGame";
import { ILanguage } from "language/ILanguage";
import { Hook, IModConfig } from "mod/IMod";
import Mod from "mod/Mod";
export declare enum ModState {
    Disabled = 0,
    Enabled = 1,
    Loaded = 2,
    Error = 3,
    ChangingState = 4,
    Temporary = 5,
}
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
    CannnotLoadRequiredMod = 6,
    ReqiredModNotLoaded = 7,
    LocalModPrecedence = 8,
    IncompatibleVersion = 9,
    DisabledInMultiplayer = 10,
}
export declare enum ModType {
    Internal = 0,
    Local = 1,
    Workshop = 2,
}
export interface IModProvides {
    scripts: boolean;
    languages: number;
    stylesheets: number;
    imageOverrides: boolean;
    customizations: boolean;
}
export interface IImageOverrideDescription {
    replace: string;
    imagePath?: string;
    animated?: boolean;
}
export declare type IImageOverrides = Array<string | IImageOverrideDescription>;
export interface ICustomizations {
    hairColors: string[];
    skinColors: string[];
    hairStyles: Array<string | {
        name: string;
        path: string;
    }>;
}
export interface IModInfo {
    config: IModConfig;
    state: ModState;
    path: string;
    folderName: string;
    type: ModType;
    provides: IModProvides;
    instance?: Mod;
    initialized?: boolean;
    publishedFileId?: string;
    steamIDOwner?: string;
    lastUpdated?: string;
    imageOverrides?: IImageOverrides;
    customizations?: ICustomizations;
    stylesheets?: string[];
    languages?: Array<{
        path: string;
        instance?: ILanguage;
    }>;
}
export interface IModManager {
    cacheHooks(): void;
    canLoad(index: number, fromTitleScreen?: boolean, count?: number): CanLoadState;
    canLoadFromIdentifier(identifier: string): ICanLoadInfo;
    getAuthor(index: number): string;
    getDescription(index: number): string;
    getFile(modIndex: number, file: string, callback: (data: string, success: boolean) => void): boolean;
    getFolderName(index: number): string;
    getIdentifier(index: number): string;
    getIndexFromName(name: string): number | undefined;
    getIndexFromPath(path: string): number | undefined;
    getIndexFromPublishId(publishFileId: string): number[];
    getLastUpdatedDate(index: number): string | undefined;
    getLoadedModByName(name: string): IModInfo | undefined;
    getLoadedMods(): IModInfo[];
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
    loadAll(options: IPlayOptions, callback: (err?: string) => void): void;
    reload(index: number): void;
    removeMod(id: number, uninstall?: boolean): void;
    save(index: number): void;
    saveAll(): void;
    setLastUpdated(index: number, lastUpdated: string): void;
    setPublishId(index: number, publishedFileId: string): void;
    setState(index: number, state: ModState, force?: boolean, cacheHooks?: boolean, callback?: () => void): boolean;
    setSteamIdOwner(index: number, steamIdOwner: string): void;
    setupMod(folderName: string, modType: ModType, callback: (id?: number) => void, initialModState?: ModState): void;
    setupMods(callback: () => void): void;
    uninitialize(index: number): void;
    uninitializeAll(): void;
    unload(index: number): void;
    unloadAll(reset?: boolean): void;
    callHook(hook: Hook, ...args: any[]): any;
    callHookWithDefault<T>(hook: Hook, defaultValue: T, ...args: any[]): T;
}
export default IModManager;
