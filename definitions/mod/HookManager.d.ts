import { IHookHost } from "mod/IHookHost";
import IHookManager, { Hook, ICachedHook, IEmitterHostRegistrationChain } from "mod/IHookManager";
import IModManager from "mod/IModManager";
import Emitter from "utilities/Emitter";
export default class HookManager implements IHookManager {
    private readonly hookHosts;
    private readonly modManager;
    private cachedHooks;
    constructor(modManager: IModManager);
    register<H extends IHookHost>(host: H): H extends Emitter ? IEmitterHostRegistrationChain : void;
    deregister(host: IHookHost, cacheHooks?: boolean): void;
    getHostsWithHook(hook: Hook): IterableIterator<IHookHost>;
    getCachedHook(hook: Hook): ICachedHook | undefined;
    cacheHooks(): void;
    /**
     * Sort cached hooks by priority
     */
    private sortHooks();
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
    private cacheHooksForHost(host, hostLog?, canCacheHook?);
}
