import { ICreature, IDamageInfo, SpawnGroup } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { ActionType, AttackType, CreatureType, EquipType, FacingDirection, IInspect, ItemQuality, ItemType, KeyBind, MoveType, PlayerState, SpriteBatchLayer } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { Message, MessageType } from "language/Messages";
import { Hook } from "mod/IMod";
import { CanLoadState, ICanLoadInfo, IModInfo, IModManager, IModProvides, ModState, ModType } from "mod/IModManager";
import { IPlayer } from "player/IPlayer";
import { IWorld } from "renderer/IWorld";
import { ITile } from "tile/ITerrain";
export default class ModManager implements IModManager {
    private mods;
    private internalMods;
    private internalModsElectron;
    private cachedHooks;
    private cachedHookNames;
    private onLanguageLoadCallbacks;
    constructor();
    loadAll(callback: () => void): void;
    unloadAll(reset?: boolean): void;
    setupMods(callback: () => void): void;
    saveAll(): void;
    getFile(modIndex: number, file: string, callback: (data: string, success: boolean) => void): boolean;
    setupMod(folderName: string, modType: ModType, callback: (id?: number) => void, initialModState?: ModState): void;
    removeMod(id: number, uninstall?: boolean): void;
    getMods(): IModInfo[];
    getLoadedMods(): IModInfo[];
    getLoadedModByName(name: string): IModInfo | undefined;
    callHook(hook: Hook.CanConsumeItem, itemType: ItemType, actionType: ActionType): boolean | undefined;
    callHook(hook: Hook.CanCreatureAttack, creatureId: number, creature: ICreature): boolean | undefined;
    callHook(hook: Hook.CanCreatureMove, creatureId: number, creature: ICreature, tile: ITile, moveType: MoveType): boolean | undefined;
    callHook(hook: Hook.CanCreatureSpawn, type: CreatureType, x: number, y: number, z: number, aberrant: boolean): boolean | undefined;
    callHook(hook: Hook.CanDropItem, item: IItem, tile: ITile, dorpAll: boolean, dropAllQuality: ItemQuality | undefined): boolean | undefined;
    callHook(hook: Hook.CanPlayerAttack, weapon: IItem | undefined, attackType: AttackType): boolean | undefined;
    callHook(hook: Hook.CanSeeCreature, creatureId: number, creature: ICreature, tile: ITile): boolean | undefined;
    callHook(hook: Hook.GetCreatureSpriteBatchLayer, creatureId: number, creature: ICreature, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    callHook(hook: Hook.GetPlayerMaxHealth, player: IPlayer): number | undefined;
    callHook(hook: Hook.GetPlayerSpriteBatchLayer, player: IPlayer, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    callHook(hook: Hook.IsPlayerSwimming, player: IPlayer, isSwimming: boolean): boolean | undefined;
    callHook(hook: Hook.IsTileInspectable, tile: ITile): boolean | undefined;
    callHook(hook: Hook.OnBuild, item: IItem, tile: ITile, doodad: IDoodad): void;
    callHook(hook: Hook.OnContainerItemAdd, item: IItem, container: IContainer): void;
    callHook(hook: Hook.OnContainerItemRemove, item: IItem, container: IContainer): void;
    callHook(hook: Hook.OnContainerItemUpdate, item: IItem, containerFrom: IContainer | undefined, containerTo: IContainer): void;
    callHook(hook: Hook.OnCraft, item: IItem): void;
    callHook(hook: Hook.OnCreateWorld, world: IWorld): void;
    callHook(hook: Hook.OnCreatureDamage, creatureId: number, creature: ICreature, damageInfo: IDamageInfo): number | undefined;
    callHook(hook: Hook.OnCreatureDeath, creatureId: number, creature: ICreature): void;
    callHook(hook: Hook.OnDisplayMessage, message: Message, messageType?: MessageType, ...args: any[]): boolean | undefined;
    callHook(hook: Hook.OnGameEnd, playerState: PlayerState): void;
    callHook(hook: Hook.OnGameStart, isLoadingSave: boolean, playedCount: number): void;
    callHook(hook: Hook.OnInspectTile, tile: ITile): IInspect[] | undefined;
    callHook(hook: Hook.OnInventoryItemAdd, item: IItem, container: IContainer): void;
    callHook(hook: Hook.OnInventoryItemRemove, item: IItem, container: IContainer): void;
    callHook(hook: Hook.OnInventoryItemUpdate, item: IItem, container: IContainer): void;
    callHook(hook: Hook.OnItemEquip, item: IItem, slot: EquipType): void;
    callHook(hook: Hook.OnKeyBindPress, keybind: KeyBind): boolean | undefined;
    callHook(hook: Hook.OnKeyDown, event: JQueryEventObject): boolean | undefined;
    callHook(hook: Hook.OnKeyUp, event: JQueryEventObject): boolean | undefined;
    callHook(hook: Hook.OnMouseDown, event: JQueryEventObject): boolean | undefined;
    callHook(hook: Hook.OnMouseMove, event: JQueryEventObject): boolean | undefined;
    callHook(hook: Hook.OnMouseScroll, event: JQueryEventObject): boolean | undefined;
    callHook(hook: Hook.OnMouseUpOrLeave, event: JQueryEventObject): boolean | undefined;
    callHook(hook: Hook.OnMove, nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean | undefined;
    callHook(hook: Hook.OnMoveDirectionUpdate, direction: FacingDirection): void;
    callHook(hook: Hook.OnNoInputReceived): void;
    callHook(hook: Hook.OnPlayerDamage, amount: number, damageMessage: string): boolean | undefined;
    callHook(hook: Hook.OnShowInGameScreen): void;
    callHook(hook: Hook.OnSpawnCreatureFromGroup, creatureGroup: SpawnGroup, creaturePool: CreatureType[], x: number, y: number, z: number): boolean | undefined;
    callHook(hook: Hook.OnTurnComplete): void;
    callHook(hook: Hook.OnTurnStart): void;
    callHook(hook: Hook.OnUpdateWeight, newWeight: number): number | undefined;
    callHook(hook: Hook.PostGenerateWorld, generateWorld: boolean): void;
    callHook(hook: Hook.PostRender): void;
    callHook(hook: Hook.PreRender): void;
    callHook(hook: Hook.PreRenderWorld, tileScale: number, viewWidth: number, viewHeight: number): void;
    callHook(hook: Hook.ProcessInput, player: IPlayer): boolean | undefined;
    callHook(hook: Hook, ...args: any[]): any;
    callHookWithDefault<T>(hook: Hook, defaultValue: T, ...args: any[]): T;
    load(index: number): void;
    unload(index: number): void;
    save(index: number): void;
    reload(index: number): void;
    isValid(index: number): boolean;
    isEnabled(index: number): boolean;
    isLoaded(index: number): boolean;
    getIdentifier(index: number): string;
    getName(index: number): string;
    getDescription(index: number): string;
    getVersion(index: number): string;
    getLastUpdatedDate(index: number): string | undefined;
    getAuthor(index: number): string;
    getType(index: number): ModType;
    getRequiredMods(index: number): string[];
    getPath(index: number): string;
    getFolderName(index: number): string;
    getPublishFileId(index: number): string | undefined;
    getSteamIdOwner(index: number): string | undefined;
    getProvided(index: number): IModProvides;
    canLoad(index: number, fromTitleScreen?: boolean, count?: number): CanLoadState;
    canLoadFromIdentifier(identifier: string): ICanLoadInfo;
    getIndexFromName(name: string): number | undefined;
    getIndexFromPublishId(publishFileId: string): number[];
    getIndexFromPath(path: string): number | undefined;
    isEnabledByName(name: string): boolean;
    isLoadedByName(name: string): boolean;
    setPublishId(index: number, publishedFileId: string): void;
    setSteamIdOwner(index: number, steamIdOwner: string): void;
    setLastUpdated(index: number, lastUpdated: string): void;
    getState(index: number): ModState;
    isInitializing(index: number): ModState;
    setState(index: number, state: ModState, force?: boolean, callback?: () => void): boolean;
    uninitialize(index: number): void;
    uninitializeAll(): void;
    cacheHooks(): void;
    private onLanguageLoad(languageName, callback);
}
