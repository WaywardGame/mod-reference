/**
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IHookHost } from "mod/IHookHost";
import Emitter from "utilities/Emitter";
export declare enum Hook {
    CanClientMove = "canClientMove",
    CanConsumeItem = "canConsumeItem",
    CanCreatureAttack = "canCreatureAttack",
    CanCreatureMove = "canCreatureMove",
    CanCreatureSpawn = "canCreatureSpawn",
    CanDoodadSpawn = "canDoodadSpawn",
    CanDropItem = "canDropItem",
    CanPickupDoodad = "canPickupDoodad",
    CanPlayerAttack = "canPlayerAttack",
    CanSeeCreature = "canSeeCreature",
    GetAmbientColor = "getAmbientColor",
    GetAmbientColorCave = "getAmbientColorCave",
    GetAmbientColorDay = "getAmbientColorDay",
    GetAmbientColorNight = "getAmbientColorNight",
    GetAmbientLightLevel = "getAmbientLightLevel",
    GetCreatureSpriteBatchLayer = "getCreatureSpriteBatchLayer",
    GetPlayerFieldOfViewRadius = "getPlayerFieldOfViewRadius",
    GetPlayerMaxHealth = "getPlayerMaxHealth",
    GetPlayerMovementIntent = "getPlayerMovementIntent",
    GetPlayerSpriteBatchLayer = "getPlayerSpriteBatchLayer",
    GetPlayerStrength = "getPlayerStrength",
    GetPlayerWeightMovementPenalty = "getPlayerWeightMovementPenalty",
    GetPlayerWeightStatus = "getPlayerWeightStatus",
    GetTileLightLevel = "getTileLightLevel",
    IsPlayerSwimming = "isPlayerSwimming",
    IsTileInspectable = "isTileInspectable",
    OnBindLoop = "onBindLoop",
    OnBuild = "onBuild",
    OnContainerItemAdd = "onContainerItemAdd",
    OnContainerItemRemove = "onContainerItemRemove",
    OnContainerItemUpdate = "onContainerItemUpdate",
    OnCraft = "onCraft",
    OnCreateWorld = "onCreateWorld",
    OnCreatureDamage = "onCreatureDamage",
    OnCreatureDeath = "onCreatureDeath",
    OnCreatureSpawn = "onCreatureSpawn",
    OnDisplayMessage = "onDisplayMessage",
    OnDoodadSpawn = "onDoodadSpawn",
    OnGameEnd = "onGameEnd",
    OnGameStart = "onGameStart",
    OnGameTickEnd = "onGameTickEnd",
    OnGameTickStart = "onGameTickStart",
    OnInspectTile = "onInspectTile",
    OnInventoryItemAdd = "onInventoryItemAdd",
    OnInventoryItemRemove = "onInventoryItemRemove",
    OnInventoryItemUpdate = "onInventoryItemUpdate",
    OnItemDamage = "onItemDamage",
    OnItemEquip = "onItemEquip",
    OnItemQuickslot = "onItemQuickslot",
    OnMove = "onMove",
    OnMoveComplete = "onMoveComplete",
    OnMoveDirectionUpdate = "onMoveDirectionUpdate",
    OnNoInputReceived = "onNoInputReceived",
    OnPickupDoodad = "onPickupDoodad",
    OnPlayerDamage = "onPlayerDamage",
    OnPlayerDeath = "onPlayerDeath",
    OnPlayerJoin = "onPlayerJoin",
    OnPlayerLeave = "onPlayerLeave",
    OnPlayerTickEnd = "onPlayerTickEnd",
    OnPlayerTickStart = "onPlayerTickStart",
    OnQueueSoundEffect = "onQueueSoundEffect",
    OnShowInGameScreen = "onShowInGameScreen",
    OnSpawnCreatureFromGroup = "onSpawnCreatureFromGroup",
    OnTileUpdate = "onTileUpdate",
    OnTurnEnd = "onTurnEnd",
    OnTurnStart = "onTurnStart",
    OnUpdateWeight = "onUpdateWeight",
    PostExecuteAction = "postExecuteAction",
    PostGenerateWorld = "postGenerateWorld",
    PostRender = "postRender",
    PostRenderPostProcess = "postRenderPostProcess",
    PostRenderWorld = "postRenderWorld",
    PreExecuteAction = "preExecuteAction",
    PreExecuteCommand = "preExecuteCommand",
    PreLoadWorldDifferences = "preLoadWorldDifferences",
    PreRender = "preRender",
    PreRenderPostProcess = "preRenderPostProcess",
    PreRenderWorld = "preRenderWorld",
    ProcessInput = "processInput",
    ShouldRender = "shouldRender",
}
export declare const globalHooks: Hook[];
export declare enum HookPriority {
    Lowest = -2000,
    Low = -1000,
    Normal = 0,
    High = 1000,
    Highest = 2000,
}
/**
 * A list of all mods that cache a hook indexed by hook priority.
 */
export interface ICachedHook {
    [index: number]: IHookHost[];
    priorities: number[];
}
/**
 * A list of all cached hooks indexed by `Hook`
 */
export declare type ICachedHooks = {
    [hook in Hook]?: ICachedHook;
};
export interface IEmitterHostRegistrationChain {
    until(deregistrationEvent: string | number): void;
}
export default interface IHookManager {
    register<H extends IHookHost>(host: H): H extends Emitter ? IEmitterHostRegistrationChain : void;
    deregister(host: IHookHost): void;
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
}
