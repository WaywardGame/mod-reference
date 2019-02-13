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
import { ActionType, IActionApi, IActionDescription } from "action/IAction";
import { ICreature, IDamageInfo, SpawnGroup } from "creature/ICreature";
import { IDoodad, IDoodadOptions } from "doodad/IDoodad";
import IEntity from "entity/IEntity";
import IHuman from "entity/IHuman";
import { AttackType, Bindable, BookType, Command, CreatureType, Direction, DoodadType, EquipType, ItemQuality, ItemType, MoveType, NPCType, PlayerState, RenderFlag, SfxType, SkillType, SpriteBatchLayer, WeightStatus } from "Enums";
import { IMapRequest } from "game/IGame";
import { IInspectionSection } from "game/inspection/IInspection";
import { IContainer, IItem } from "item/IItem";
import ItemRecipeRequirementChecker from "item/ItemRecipeRequirementChecker";
import BaseMod from "mod/BaseMod";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import { INPC } from "npc/INPC";
import { IMessage } from "player/IMessageManager";
import IPlayer, { IMovementIntent } from "player/IPlayer";
import { INote } from "player/note/NoteManager";
import ISpriteBatch from "renderer/ISpriteBatch";
import IWorld from "renderer/IWorld";
import { ITile } from "tile/ITerrain";
import Log from "utilities/Log";
import { IVector2 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
import { IStringSection } from "utilities/string/Interpolator";
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
    getAmbientColor(colors: [number, number, number]): [number, number, number] | undefined;
    getAmbientColorCave(): [number, number, number] | undefined;
    getAmbientColorDay(): [number, number, number] | undefined;
    getAmbientColorNight(): [number, number, number] | undefined;
    getFogColor(colors: [number, number, number]): [number, number, number] | undefined;
    getAmbientLightLevel(ambientLight: number, z: number): number | undefined;
    canConsumeItem(human: Human, itemType: ItemType, actionType: ActionType): boolean | undefined;
    canCreatureAttack(creature: ICreature, enemy: IPlayer | ICreature): boolean | undefined;
    canCreatureMove(creature: ICreature, tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined;
    canCreatureSpawn(type: CreatureType, x: number, y: number, z: number, aberrant: boolean): boolean | undefined;
    canDoodadSpawn(type: DoodadType, x: number, y: number, z: number, options: IDoodadOptions): boolean | undefined;
    canDropItem(human: Human, item: IItem, tile: ITile, dropAll: boolean, dropAllQuality: ItemQuality | undefined): boolean | undefined;
    canNPCAttack(npc: INPC, weapon: IItem | undefined, attackType: AttackType): boolean | undefined;
    canNPCMove(npc: INPC, tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined;
    canNPCSpawn(type: NPCType, x: number, y: number, z: number): boolean | undefined;
    canPickupDoodad(human: Human, doodad: IDoodad): boolean | undefined;
    canPlayerAttack(player: IPlayer, weapon: IItem | undefined, attackType: AttackType): boolean | undefined;
    canClientMove(api: BindCatcherApi): false | undefined;
    canSeeCreature(creature: ICreature, tile: ITile): boolean | undefined;
    canSeeNPC(npc: INPC, tile: ITile): boolean | undefined;
    getCreatureSpriteBatchLayer(creature: ICreature, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    getMaxSpritesForLayer(layer: SpriteBatchLayer, maxSprites: number): number | undefined;
    getPlayerFieldOfViewRadius(player: IPlayer): number | undefined;
    getPlayerMaxHealth(maxHealth: number, player: IPlayer): number;
    getPlayerMaxWeight(maxWeight: number, player: IPlayer): number;
    getPlayerMovementIntent(player: IPlayer): IMovementIntent | undefined;
    getPlayerSpriteBatchLayer(player: IPlayer, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    getPlayerWeightMovementPenalty(player: IPlayer): number | undefined;
    getPlayerWeightStatus(player: IPlayer): WeightStatus | undefined;
    getCameraPosition(position: IVector2): IVector2 | undefined;
    getTileLightLevel(tile: ITile, x: number, y: number, z: number): number | undefined;
    getTilePenalty(penalty: number, tile: ITile): number;
    getZoomLevel(): number | undefined;
    isHumanSwimming(human: Human, isSwimming: boolean): boolean | undefined;
    isPlayerSwimming(human: Human, isSwimming: boolean): boolean | undefined;
    isTileBlocked(tile: ITile): true | undefined;
    onBuild(human: Human, item: IItem, tile: ITile, doodad: IDoodad): void;
    onButtonBarClick(button: JQuery): void;
    onContainerItemAdd(item: IItem, container: IContainer): void;
    onContainerItemRemove(item: IItem, container: IContainer): void;
    onContainerItemUpdate(item: IItem, containerFrom: IContainer | undefined, containerTo: IContainer): void;
    onCraft(human: Human, item: IItem): void;
    onCreateWorld(world: IWorld): void;
    onDisplayMessage(player: IPlayer, message: IMessage): void;
    shouldDisplayMessage(player: IPlayer, message: IMessage, messageId: number): boolean | undefined;
    onDoodadSpawn(doodad: IDoodad): void;
    onGameEnd(state: PlayerState): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onGameTickStart(): void;
    onGameTickEnd(): void;
    onGetTranslation(translation: IStringSection[]): IStringSection[];
    onEntityKill(attacker: IEntity | IDoodad, target: IEntity): void;
    onHumanSkillChange(human: IHuman, skill: SkillType, currentSkill: number): void;
    onInventoryItemAdd(player: IPlayer | undefined, item: IItem, container: IContainer): void;
    onInventoryItemRemove(player: IPlayer | undefined, item: IItem, container: IContainer): void;
    onInventoryItemUpdate(player: IPlayer | undefined, item: IItem, container: IContainer): void;
    onInspectionSection(section: IInspectionSection): void;
    shouldCraft(requirementsMet: boolean, item: ItemType, checker: ItemRecipeRequirementChecker): boolean | undefined;
    onItemDamage(item: IItem, modifier?: number): number | undefined;
    onItemEquip(player: IPlayer, item: IItem, slot: EquipType): void;
    onItemQuickslot(item: IItem, player: IPlayer, quickSlot: number | undefined): void;
    onCreatureDamage(creature: ICreature, damageInfo: IDamageInfo): number | undefined;
    onCreatureDeath(creature: ICreature): void;
    onCreatureSpawn(creature: ICreature): void;
    onCreatureTamed(creature: ICreature, owner: IPlayer): void;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    onDigTreasure(human: Human, treasureTile: Vector3): void;
    onLanguageChange(languageName: string): void;
    onMove(player: IPlayer, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined;
    onMoveComplete(player: IPlayer): void;
    onMoveDirectionUpdate(human: Human, direction: Direction): void;
    onNoInputReceived(player: IPlayer): void;
    onNPCDamage(npc: INPC, damageInfo: IDamageInfo): number | undefined;
    onNPCDeath(npc: INPC): boolean | undefined;
    onNPCSpawn(npc: INPC): void;
    onOpenBook(human: Human, book: BookType): void;
    onPickupDoodad(player: IPlayer, doodad: IDoodad): void;
    onPlayerDamage(player: IPlayer, damageInfo: IDamageInfo): number | undefined;
    onPlayerDeath(player: IPlayer): boolean | undefined;
    onPlayerJoin(player: IPlayer): void;
    onPlayerLeave(player: IPlayer): void;
    onPlayerTickEnd(player: IPlayer): void;
    onPlayerTickStart(player: IPlayer): void;
    onPlayerWalkToTilePath(player: IPlayer, path: IVector2[] | undefined): void;
    onQueueSoundEffect(type: SfxType, x: number, y: number, z: number): SfxType | boolean | undefined;
    onGameScreenVisible(): void;
    onReadMap(human: Human, mapRequest: IMapRequest): void;
    onRenderOverlay(spriteBatch: ISpriteBatch): void;
    onSailToCivilization(player: IPlayer): void;
    onSpawnCreatureFromGroup(creatureGroup: SpawnGroup, creaturePool: CreatureType[], x: number, y: number, z: number): boolean | undefined;
    onTileUpdate(tile: ITile, x: number, y: number, z: number): void;
    onTurnEnd(player: IPlayer): void;
    onTurnStart(player: IPlayer): void;
    onUpdateWeight(player: IPlayer, newWeight: number): number | undefined;
    onWriteNote(player: IPlayer, note: INote): false | undefined;
    onWrittenNote(player: IPlayer, id: number): void;
    postExecuteAction(api: IActionApi, action: IActionDescription, args: any[]): void;
    postFieldOfView(): void;
    postGenerateWorld(generateNewWorld: boolean): void;
    postRender(): void;
    postRenderPostProcess(): void;
    postRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
    postSaveGame(): void;
    preExecuteAction(api: IActionApi, action: IActionDescription, args: any[]): boolean | undefined;
    preLoadWorldDifferences(generateNewWorld: boolean): void;
    preExecuteCommand(player: IPlayer, command: Command, args: string | undefined): boolean | undefined;
    preRender(): void;
    preRenderPostProcess(): void;
    preRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
    preSaveGame(): void;
    processInput(player: IPlayer): boolean | undefined;
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
