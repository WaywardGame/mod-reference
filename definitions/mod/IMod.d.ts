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
export interface IModConfig {
    readonly name: string;
    readonly description: string;
    readonly version: string;
    readonly author: string;
    readonly file: string;
    readonly unloadable?: boolean;
    readonly tags?: string[];
    readonly dependencies?: string[];
    readonly compatibleMinorVersions: number[];
    readonly multiplayerCompatible?: boolean;
    readonly multiplayerClientside?: boolean;
    readonly languages?: string[];
    readonly stylesheets?: string[];
    readonly imageOverrides?: boolean;
    readonly customizations?: boolean;
    readonly publishedFileId?: string;
}
export declare enum ModEvent {
    Unload = 0,
    Uninitialize = 1,
    /**
     * Asynchronously triggered before a mod is initialized.
     *
     * Internally, this is used for mod registrations.
     */
    PreInitialize = 2,
    /**
     * Asynchronously triggered before a mod is loaded (when a world is loaded).
     *
     * Internally, this is used for mod registrations.
     */
    PreLoad = 3,
    /**
     * Called after a mod is unloaded. (A world is exited)
     *
     * Internally, this is used to clean up some mod registrations.
     */
    Unallocate = 4,
    /**
     * Called when a mod is setup. (Modders — Don't use this, just run code in your constructor.)
     *
     * Internally, this is used for some mod registrations.
     */
    Setup = 5
}
