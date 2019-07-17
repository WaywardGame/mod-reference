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
    ServerSideOnNonDedicatedServer = 11
}
export declare enum ModLoadFailureReason {
    IsDisabled = 0,
    NotInstalled = 1,
    NotMultiplayerCompatible = 2,
    UnableToLoad = 3,
    VersionMismatch = 4
}
export interface IModManagerEvents {
    loadAll(): void;
    unloadAll(): void;
}
