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
import { SfxType } from "audio/IAudio";
import { Command } from "command/ICommand";
import Doodad from "doodad/Doodad";
import { DoodadType, IDoodadOptions } from "doodad/IDoodad";
import { ActionType, IActionApi, IActionDescription } from "entity/action/IAction";
import Creature from "entity/creature/Creature";
import { CreatureType, IDamageInfo, SpawnGroup } from "entity/creature/ICreature";
import Entity from "entity/Entity";
import Human from "entity/Human";
import { AttackType, MoveType } from "entity/IEntity";
import { EquipType, SkillType } from "entity/IHuman";
import NPC from "entity/npc/NPC";
import { NPCType } from "entity/npc/NPCS";
import { IMessage } from "entity/player/IMessageManager";
import { IMovementIntent, PlayerState, WeightStatus } from "entity/player/IPlayer";
import { INote } from "entity/player/note/NoteManager";
import Player from "entity/player/Player";
import { IMapRequest, TileUpdateType } from "game/IGame";
import { IInspectionSection } from "game/inspection/IInspection";
import { Quality } from "game/IObject";
import { BookType, IContainer, ItemType } from "item/IItem";
import Item from "item/Item";
import ItemRecipeRequirementChecker from "item/ItemRecipeRequirementChecker";
import BaseMod from "mod/BaseMod";
import { IHookHost } from "mod/IHookHost";
import { Bindable, BindCatcherApi } from "newui/BindingManager";
import ISpriteBatch from "renderer/ISpriteBatch";
import IWorld from "renderer/IWorld";
import { RenderFlag, SpriteBatchLayer } from "renderer/IWorldRenderer";
import { ITile } from "tile/ITerrain";
import Log from "utilities/Log";
import { Direction } from "utilities/math/Direction";
import { IVector2 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
declare abstract class Mod extends BaseMod implements IHookHost {
    /**
     * Called when the mod is initialized (when it's enabled via the Mod Manager)
     */
    onInitialize(): void;
    /**
     * Called before the mod is uninitialized (when it's disabled via the Mod Manager)
     */
    onUninitialize(): void;
    /**
     * Called after the mod is uninitialized
     */
    onUninitialized(): void;
    /**
     * Called when the mod is loaded.
     * This will be called after a player starts a game (ran before resources & the world are setup)
     */
    onLoad(): void;
    /**
     * Called when the mod is unloaded
     */
    onUnload(): void;
    canConsumeItem(human: Human, itemType: ItemType, actionType: ActionType): boolean | undefined;
    canCreatureAttack(creature: Creature, enemy: Player | Creature): boolean | undefined;
    canCreatureMove(creature: Creature, tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined;
    canCreatureSpawn(type: CreatureType, x: number, y: number, z: number, aberrant: boolean): boolean | undefined;
    canDoodadSpawn(type: DoodadType, x: number, y: number, z: number, options: IDoodadOptions): boolean | undefined;
    canDropItem(human: Human, item: Item, tile: ITile, dropAll: boolean, dropAllQuality: Quality | undefined): boolean | undefined;
    canNPCAttack(npc: NPC, weapon: Item | undefined, attackType: AttackType): boolean | undefined;
    canNPCMove(npc: NPC, tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined;
    canNPCSpawn(type: NPCType, x: number, y: number, z: number): boolean | undefined;
    canPickupDoodad(human: Human, doodad: Doodad): boolean | undefined;
    canPlayerAttack(player: Player, weapon: Item | undefined, attackType: AttackType): boolean | undefined;
    canClientMove(api: BindCatcherApi): false | undefined;
    canSeeCreature(creature: Creature, tile: ITile): boolean | undefined;
    canSeeNPC(npc: NPC, tile: ITile): boolean | undefined;
    getCreatureSpriteBatchLayer(creature: Creature, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    getMaxSpritesForLayer(layer: SpriteBatchLayer, maxSprites: number): number | undefined;
    getPlayerFieldOfViewRadius(player: Player): number | undefined;
    getPlayerMaxHealth(maxHealth: number, player: Player): number;
    getPlayerMaxWeight(maxWeight: number, player: Player): number;
    getPlayerMovementIntent(player: Player): IMovementIntent | undefined;
    getPlayerSpriteBatchLayer(player: Player, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    getPlayerWeightMovementPenalty(player: Player): number | undefined;
    getPlayerWeightStatus(player: Player): WeightStatus | undefined;
    getCameraPosition(position: IVector2): IVector2 | undefined;
    getTilePenalty(penalty: number, tile: ITile): number;
    getZoomLevel(): number | undefined;
    isHumanSwimming(human: Human, isSwimming: boolean): boolean | undefined;
    isPlayerSwimming(human: Human, isSwimming: boolean): boolean | undefined;
    isTileBlocked(tile: ITile): true | undefined;
    onBuild(human: Human, item: Item, tile: ITile, doodad: Doodad): void;
    onContainerItemAdd(item: Item, container: IContainer): void;
    onContainerItemRemove(item: Item, container: IContainer): void;
    onContainerItemUpdate(item: Item, containerFrom: IContainer | undefined, containerTo: IContainer): void;
    onCraft(human: Human, item: Item): void;
    onCreateWorld(world: IWorld): void;
    onDisplayMessage(player: Player, message: IMessage): void;
    shouldDisplayMessage(player: Player, message: IMessage, messageId: number): boolean | undefined;
    onDoodadSpawn(doodad: Doodad): void;
    onGameEnd(state: PlayerState): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onGameTickStart(): void;
    onGameTickEnd(): void;
    onEntityKill(attacker: Entity | Doodad, target: Entity): void;
    onHumanSkillChange(human: Human, skill: SkillType, currentSkill: number): void;
    onInventoryItemAdd(player: Player | undefined, item: Item, container: IContainer): void;
    onInventoryItemRemove(player: Player | undefined, item: Item, container: IContainer): void;
    onInventoryItemUpdate(player: Player | undefined, item: Item, container: IContainer): void;
    onInspectionSection(section: IInspectionSection): void;
    shouldCraft(requirementsMet: boolean, item: ItemType, checker: ItemRecipeRequirementChecker): boolean | undefined;
    onItemDamage(item: Item, modifier?: number): number | undefined;
    onItemEquip(player: Player, item: Item, slot: EquipType): void;
    onItemQuickslot(item: Item, player: Player, quickSlot: number | undefined): void;
    onCreatureDamage(creature: Creature, damageInfo: IDamageInfo): number | undefined;
    onCreatureDeath(creature: Creature): void;
    onCreatureSpawn(creature: Creature): void;
    onCreatureTamed(creature: Creature, owner: Player): void;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    onDigTreasure(human: Human, treasureTile: Vector3): void;
    onLanguageChange(languageName: string): void;
    onMove(player: Player, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined;
    onMoveComplete(player: Player): void;
    onMoveDirectionUpdate(human: Human, direction: Direction): void;
    onNoInputReceived(player: Player): void;
    onNPCDamage(npc: NPC, damageInfo: IDamageInfo): number | undefined;
    onNPCDeath(npc: NPC): boolean | undefined;
    onNPCSpawn(npc: NPC): void;
    onOpenBook(human: Human, book: BookType): void;
    onPickupDoodad(player: Player, doodad: Doodad): void;
    onPlayerDamage(player: Player, damageInfo: IDamageInfo): number | undefined;
    onPlayerDeath(player: Player): boolean | undefined;
    onPlayerJoin(player: Player): void;
    onPlayerLeave(player: Player): void;
    onPlayerTickEnd(player: Player): void;
    onPlayerTickStart(player: Player): void;
    onPlayerWalkToTilePath(player: Player, path: IVector2[] | undefined): void;
    onQueueSoundEffect(type: SfxType, x: number, y: number, z: number): SfxType | boolean | undefined;
    onGameScreenVisible(): void;
    onReadMap(human: Human, mapRequest: IMapRequest): void;
    onRenderOverlay(spriteBatch: ISpriteBatch): void;
    onSailToCivilization(player: Player): void;
    onSpawnCreatureFromGroup(creatureGroup: SpawnGroup, creaturePool: CreatureType[], x: number, y: number, z: number): boolean | undefined;
    onTileUpdate(tile: ITile, x: number, y: number, z: number, updateTile: TileUpdateType): void;
    onTurnEnd(player: Player): void;
    onTurnStart(player: Player): void;
    onUpdateWeight(player: Player, newWeight: number): number | undefined;
    onWriteNote(player: Player, note: INote): false | undefined;
    onWrittenNote(player: Player, id: number): void;
    postExecuteAction(api: IActionApi, action: IActionDescription, args: any[]): void;
    postFieldOfView(): void;
    postGenerateWorld(generateNewWorld: boolean): void;
    postRender(): void;
    postRenderPostProcess(): void;
    postRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
    postSaveGame(): void;
    preExecuteAction(api: IActionApi, action: IActionDescription, args: any[]): boolean | undefined;
    preLoadWorldDifferences(generateNewWorld: boolean): void;
    preExecuteCommand(player: Player, command: Command, args: string | undefined): boolean | undefined;
    preRender(): void;
    preRenderPostProcess(): void;
    preRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
    preSaveGame(): void;
    processInput(player: Player): boolean | undefined;
    shouldRender(): RenderFlag | undefined;
    shouldStopWalkToTileMovement(): boolean | undefined;
}
declare module Mod {
    /**
     * Injects the decorated field with a mod instance.
     * @param name Given a mod name, the decorated field will be injected with the enabled/loaded instance of the mod by that name.
     */
    function instance<M extends Mod>(name: string): <K extends string | number | symbol, T extends { [k in K]: M extends new (index: number) => infer I ? I : Mod; }>(target: T, key: K) => void;
    /**
     * Injects the decorated field with a mod's log.
     * @param name Given a mod name, the decorated field will be injected with the log of the enabled/loaded mod by that name.
     */
    function log(name: string): <K extends string | number | symbol, T extends { [k in K]: Log; }>(target: T, key: K) => void;
    /**
     * Injects the save data for a mod by its name or class.
     * @param name Given a mod name, the decorated field will be injected with save data from the enabled/loaded instance of
     * the mod by that name.
     */
    function saveData<M extends Mod = Mod>(name: string): <K extends string | number | symbol, T extends { [k in K]: M extends {
        initializeSaveData(data?: infer D | undefined): infer D;
    } ? D : never; }>(target: T, key: K) => void;
    /**
     * Injects the global data for a mod by its name or class.
     * @param name Given a mod name, the decorated field will be injected with global data from the enabled/loaded instance of
     * the mod by that name.
     */
    function globalData<M extends Mod = Mod>(name: string): <K extends string | number | symbol, T extends { [k in K]: M extends {
        initializeGlobalData(data?: infer D | undefined): infer D;
    } ? D : never; }>(target: T, key: K) => void;
}
export default Mod;
