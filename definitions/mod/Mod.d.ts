import { IActionArgument, IActionResult } from "action/IAction";
import { ICreature, IDamageInfo, SpawnGroup } from "creature/ICreature";
import { IDoodad, IDoodadOptions } from "doodad/IDoodad";
import { ActionType, AttackType, Bindable, Command, CreatureType, DoodadType, EquipType, FacingDirection, IInspect, ItemQuality, ItemType, MoveType, RenderFlag, SfxType, SpriteBatchLayer, WeightStatus } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { Message, MessageType } from "language/IMessages";
import BaseMod from "mod/BaseMod";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import IPlayer from "player/IPlayer";
import IWorld from "renderer/IWorld";
import { ITile } from "tile/ITerrain";
export declare abstract class Mod extends BaseMod implements IHookHost {
    /**
     * Called when the mod is initialized (when it's enabled via the Mod Manager)
     * @param saveDataGlobal The save data object you previously saved via onUninitialize()
     */
    onInitialize(saveDataGlobal: any): void;
    /**
     * Called before the mod is uninitialized (when it's disabled via the Mod Manager)
     * @returns An object containing the data you want to save (saved globally, not per slot)
     */
    onUninitialize(): any;
    /**
     * Called after the mod is uninitialized
     */
    onUninitialized(): any;
    /**
     * Called when the mod is loaded.
     * This will be called after a player starts a game (ran before resources & the world are setup)
     * @param saveData The save data object you previously saved via onSave()
     */
    onLoad(saveData: any): void;
    /**
     * Called when the mod is unloaded
     */
    onUnload(): void;
    /**
     * Called when the game is saved or the mod is unloaded
     * This will be called before onUnload
     * @returns An object containing the data you want to save
     */
    onSave(): any;
    getAmbientColor(colors: number[]): number[] | undefined;
    getAmbientColorCave(): number[] | undefined;
    getAmbientColorDay(): number[] | undefined;
    getAmbientColorNight(): number[] | undefined;
    getAmbientLightLevel(ambientLight: number, z: number): number | undefined;
    canConsumeItem(player: IPlayer, itemType: ItemType, actionType: ActionType): boolean | undefined;
    canCreatureAttack(creature: ICreature, enemy: IPlayer | ICreature): boolean | undefined;
    canCreatureMove(creature: ICreature, tile: ITile, moveType: MoveType): boolean | undefined;
    canCreatureSpawn(type: CreatureType, x: number, y: number, z: number, aberrant: boolean): boolean | undefined;
    canDoodadSpawn(type: DoodadType, x: number, y: number, z: number, options: IDoodadOptions): boolean | undefined;
    canDropItem(player: IPlayer, item: IItem, tile: ITile, dropAll: boolean, dropAllQuality: ItemQuality | undefined): boolean | undefined;
    canPickupDoodad(player: IPlayer, doodad: IDoodad): boolean | undefined;
    canPlayerAttack(player: IPlayer, weapon: IItem | undefined, attackType: AttackType): boolean | undefined;
    canClientMove(api: BindCatcherApi): false | undefined;
    canSeeCreature(creature: ICreature, tile: ITile): boolean | undefined;
    getCreatureSpriteBatchLayer(creature: ICreature, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    getPlayerFieldOfViewRadius(player: IPlayer): number | undefined;
    getPlayerMaxHealth(player: IPlayer): number | undefined;
    getPlayerMovementIntent(player: IPlayer): Bindable | undefined;
    getPlayerStrength(strength: number, player: IPlayer): number;
    getPlayerSpriteBatchLayer(player: IPlayer, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    getPlayerWeightMovementPenalty(player: IPlayer): number | undefined;
    getPlayerWeightStatus(player: IPlayer): WeightStatus | undefined;
    getTileLightLevel(tile: ITile, x: number, y: number, z: number): number | undefined;
    isPlayerSwimming(player: IPlayer, isSwimming: boolean): boolean | undefined;
    isTileInspectable(tile: ITile): boolean | undefined;
    onBuild(player: IPlayer, item: IItem, tile: ITile, doodad: IDoodad): void;
    onButtonBarClick(button: JQuery): void;
    onContainerItemAdd(item: IItem, container: IContainer): void;
    onContainerItemRemove(item: IItem, container: IContainer): void;
    onContainerItemUpdate(item: IItem, containerFrom: IContainer | undefined, containerTo: IContainer): void;
    onCraft(player: IPlayer, item: IItem): void;
    onCreateWorld(world: IWorld): void;
    onDisplayMessage(message: string | Message, messageType?: MessageType, ...args: any[]): boolean | undefined;
    onDoodadSpawn(doodad: IDoodad): void;
    onGameEnd(): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onGameTickStart(): void;
    onGameTickEnd(): void;
    onInspectTile(player: IPlayer, tile: ITile): IInspect[] | undefined;
    onInventoryItemAdd(player: IPlayer, item: IItem, container: IContainer): void;
    onInventoryItemRemove(player: IPlayer, item: IItem, container: IContainer): void;
    onInventoryItemUpdate(player: IPlayer, item: IItem, container: IContainer): void;
    onItemDamage(item: IItem, modifier?: number): number | undefined;
    onItemEquip(player: IPlayer, item: IItem, slot: EquipType): void;
    onItemQuickslot(item: IItem, player: IPlayer, quickSlot: number | undefined): void;
    onCreatureDamage(creature: ICreature, damageInfo: IDamageInfo): number | undefined;
    onCreatureDeath(creature: ICreature): void;
    onCreatureSpawn(creature: ICreature): void;
    onBindLoop(bindPressed: true | undefined, api: BindCatcherApi): true | undefined;
    onMove(player: IPlayer, nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean | undefined;
    onMoveComplete(player: IPlayer): void;
    onMoveDirectionUpdate(player: IPlayer, direction: FacingDirection): void;
    onNoInputReceived(player: IPlayer): void;
    onPickupDoodad(player: IPlayer, doodad: IDoodad): void;
    onPlayerDamage(player: IPlayer, damageInfo: IDamageInfo): number | undefined;
    onPlayerDeath(player: IPlayer): boolean | undefined;
    onPlayerJoin(player: IPlayer): void;
    onPlayerLeave(player: IPlayer): void;
    onPlayerTickEnd(player: IPlayer): void;
    onPlayerTickStart(player: IPlayer): void;
    onQueueSoundEffect(type: SfxType, x: number, y: number, z: number): SfxType | boolean | undefined;
    onGameScreenVisible(): void;
    onSpawnCreatureFromGroup(creatureGroup: SpawnGroup, creaturePool: CreatureType[], x: number, y: number, z: number): boolean | undefined;
    onTileUpdate(tile: ITile, x: number, y: number, z: number): void;
    onTurnEnd(player: IPlayer): void;
    onTurnStart(player: IPlayer): void;
    onUpdateWeight(player: IPlayer, newWeight: number): number | undefined;
    postExecuteAction(player: IPlayer, actionType: ActionType, actionArgument: IActionArgument, actionResult: IActionResult): void;
    postGenerateWorld(generateNewWorld: boolean): void;
    postRender(): void;
    postRenderPostProcess(): void;
    postRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
    preExecuteAction(player: IPlayer, actionType: ActionType, actionArgument: IActionArgument): boolean | undefined;
    preLoadWorldDifferences(generateNewWorld: boolean): void;
    preExecuteCommand(player: IPlayer, command: Command, args: string): boolean | undefined;
    preRender(): void;
    preRenderPostProcess(): void;
    preRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
    processInput(player: IPlayer): boolean | undefined;
    shouldRender(): RenderFlag | undefined;
}
export default Mod;
