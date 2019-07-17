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
import { IHookHost } from "mod/IHookHost";
import { Hook, ICachedHook, IEmitterHostRegistrationChain } from "mod/IHookManager";
import ModManager from "mod/ModManager";
import Emitter from "utilities/Emitter";
export default class HookManager {
    private readonly hookHosts;
    private readonly modManager;
    private cachedHooks;
    constructor(modManager: ModManager);
    register<H extends IHookHost>(host: H, name?: string): H extends Emitter ? IEmitterHostRegistrationChain : void;
    /**
     * Deregisters the given `IHookHost` if it is registered.
     */
    deregister(host: IHookHost): void;
    /**
     * Deregisters the given `IHookHost` if it is registered under the given name.
     */
    deregister(host: IHookHost, name?: string): void;
    getHostsWithHook(hook: Hook): IterableIterator<IHookHost>;
    /**
     * Returns the internal list of mods with a hook and their priorities.
     * @param hook A hook name.
     * @see `Mod` or `Hook` for a list of valid hook names.
     */
    getCachedHook(hook: Hook): ICachedHook | undefined;
    /**
     * Caches the hooks used by each mod, sorted by priority.
     *
     * 1. For every valid mod, cache the hooks for that mod using `cacheHooksForMod`
     * 2. For all cached hooks, sort the cached list of priorities that all the cached hook methods use.
     */
    cacheHooks(): void;
    /**
     * Sort cached hooks by priority
     */
    private sortHooks;
    /**
     * Cache the hooks for a given host.
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
    private cacheHooksForHost;
}
