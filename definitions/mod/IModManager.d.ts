import { ICreature, IDamageInfo, SpawnGroup } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { ActionType, AttackType, CreatureType, EquipType, FacingDirection, IInspect, ItemQuality, ItemType, KeyBind, MoveType, PlayerState, SpriteBatchLayer } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { ILanguage } from "language/ILanguage";
import { Message, MessageType } from "language/Messages";
import { Hook, IModConfig } from "mod/IMod";
import Mod from "mod/Mod";
import { IPlayer } from "player/IPlayer";
import { IWorld } from "renderer/IWorld";
import { ITile } from "tile/ITerrain";
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
    loadAll(callback: () => void): void;
    reload(index: number): void;
    removeMod(id: number, uninstall?: boolean): void;
    save(index: number): void;
    saveAll(): void;
    setLastUpdated(index: number, lastUpdated: string): void;
    setPublishId(index: number, publishedFileId: string): void;
    setState(index: number, state: ModState, force?: boolean, callback?: () => void): boolean;
    setSteamIdOwner(index: number, steamIdOwner: string): void;
    setupMod(folderName: string, modType: ModType, callback: (id?: number) => void, initialModState?: ModState): void;
    setupMods(callback: () => void): void;
    uninitialize(index: number): void;
    uninitializeAll(): void;
    unload(index: number): void;
    unloadAll(reset?: boolean): void;
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
    callHook(hook: Hook.OnButtonBarClick, buttonName: string): void;
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
    callHook(hook: Hook.OnTurnComplete, player: IPlayer): void;
    callHook(hook: Hook.OnTurnStart): void;
    callHook(hook: Hook.OnUpdateWeight, newWeight: number): number | undefined;
    callHook(hook: Hook.PostGenerateWorld, generateWorld: boolean): void;
    callHook(hook: Hook.PostRender): void;
    callHook(hook: Hook.PreRender): void;
    callHook(hook: Hook.PreRenderWorld, tileScale: number, viewWidth: number, viewHeight: number): void;
    callHook(hook: Hook.ProcessInput, player: IPlayer): boolean | undefined;
    callHook(hook: Hook, ...args: any[]): any;
    callHookWithDefault<T>(hook: Hook, defaultValue: T, ...args: any[]): T;
}
export default IModManager;
