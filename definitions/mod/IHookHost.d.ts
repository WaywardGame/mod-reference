/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
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
import { IContainer, IItem } from "item/IItem";
import { Hook } from "mod/IHookManager";
import { BindCatcherApi } from "newui/BindingManager";
import { INPC } from "npc/INPC";
import { IMessage } from "player/IMessageManager";
import IPlayer, { IMovementIntent } from "player/IPlayer";
import { INote } from "player/note/NoteManager";
import ISpriteBatch from "renderer/ISpriteBatch";
import IWorld from "renderer/IWorld";
import { ITile } from "tile/ITerrain";
import { IVector2 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
import { IStringSection } from "utilities/string/Interpolator";
/**
 * A decorator for registering a hook method on an `IHookHost`.
 * @param priority The priority of this hook method. Defaults to `HookPriority.Normal`
 *
 * Example Usage:
 * ```ts
 * @HookMethod(HookPriority.High)
 * public onGameStart(isLoadingSave: boolean) {
 * 	console.log("hello world!");
 * }
 * ```
 */
export declare function HookMethod(priority: number): <K extends keyof IHookHost>(hook: IHookHost, property: K, descriptor: TypedPropertyDescriptor<Exclude<IHookHost[K], undefined>>) => void;
/**
 * A decorator for registering a hook method on a `IHookHost`.
 * Uses `HookPriority.Normal`
 *
 * Example Usage:
 * ```ts
 * @HookMethod
 * public onGameStart(isLoadingSave: boolean) {
 * 	console.log("hello world!");
 * }
 * ```
 */
export declare function HookMethod<K extends keyof IHookHost>(host: IHookHost, property: K, descriptor: TypedPropertyDescriptor<Exclude<IHookHost[K], undefined>>): void;
export declare const SYMBOL_HOOKS: unique symbol;
export declare const SYMBOL_HOST_NAME: unique symbol;
export declare module IHookHost {
    function createHost(obj: IHookHost): IHookHost;
}
export interface IHookHost {
    [SYMBOL_HOOKS]?: {
        [hook in Hook]?: number;
    };
    [SYMBOL_HOST_NAME]?: string[];
    /**
     * Get the ambient color
     * @param colors The current ambient colors
     * @returns the ambient color channels (3 numbers) or undefined to use the default color
     */
    getAmbientColor?(colors: [number, number, number]): [number, number, number] | undefined;
    /**
     * Get the ambient color while in caves
     * @returns the ambient color channels (3 numbers) or undefined to use the default color
     */
    getAmbientColorCave?(): [number, number, number] | undefined;
    /**
     * Get the ambient color while its day time
     * @returns the ambient color channels (3 numbers) or undefined to use the default color
     */
    getAmbientColorDay?(): [number, number, number] | undefined;
    /**
     * Get the ambient color while its night time
     * @returns the ambient color channels (3 numbers) or undefined to use the default color
     */
    getAmbientColorNight?(): [number, number, number] | undefined;
    /**
     * Get the fog color
     * @param colors The current fog colors
     * @returns the ambient color channels (3 numbers) or undefined to use the default color
     */
    getFogColor?(colors: [number, number, number]): [number, number, number] | undefined;
    /**
     * Get the ambient light level
     * @param ambientLight The current ambient light level
     * @param z The world z index
     * @returns the ambient light level or undefined to use the default light level
     */
    getAmbientLightLevel?(ambientLight: number, z: number): number | undefined;
    /**
     * Called before consuming an item
     * @param human The human object
     * @param itemType The item type
     * @param actionType The action type
     * @returns True if the human can consume the item (default logic isn't called, should use your own code for consumption), false if the human cannot consume the item, or undefined to use the default logic
     */
    canConsumeItem?(human: Human, itemType: ItemType, actionType: ActionType): boolean | undefined;
    /**
     * Called before a creature attacks
     * @param creature The creature object
     * @param enemy The enemy (player or creature)
     * @returns False if the creature cannot attack, or undefined to use the default logic
     */
    canCreatureAttack?(creature: ICreature, enemy: IPlayer | ICreature): boolean | undefined;
    /**
     * Called when a creature tries to move
     * @param creature The creature object
     * @param tile The tile the creature is trying to move to
     * @param x The x coordinate of the tile
     * @param y The y coordinate of the tile
     * @param z The z coordinate of the tile
     * @param moveType The creatures move type
     * @returns True if the creature can move, false if the creature cannot move, or undefined to use the default logic
     */
    canCreatureMove?(creature: ICreature, tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined;
    /**
     * Called when a creature is about to be spawned
     * @param type The type of creature
     * @param x The x coordinate where the creature will be spawned
     * @param y The y coordinate where the creature will be spawned
     * @param z The z coordinate where the creature will be spawned
     * @param aberrant True if the creature is an aberrant
     * @returns False if the creature cannot spawn, or undefined to use the default logic
     */
    canCreatureSpawn?(type: CreatureType, x: number, y: number, z: number, aberrant: boolean): boolean | undefined;
    /**
     * Called when a doodad is about to be spawned
     * @param type The type of doodad
     * @param x The x coordinate where the doodad will be spawned
     * @param y The y coordinate where the doodad will be spawned
     * @param z The z coordinate where the doodad will be spawned
     * @param options The doodad spawn options
     * @returns False if the dooodad cannot spawn, or undefined to use the default logic
     */
    canDoodadSpawn?(type: DoodadType, x: number, y: number, z: number, options: IDoodadOptions): boolean | undefined;
    /**
     * Called when an item is being dropped
     * @param human The human object
     * @param item The item to be dropped
     * @param tile The tile the item will be dropped on
     * @param dropAll True if all items of this type will be dropped
     * @param dropAllQuality If not undefined, all items of this quality will be dropped
     * @returns True if the item can be dropped, false if the item can not be dropped, or undefined to use the default logic
     */
    canDropItem?(human: Human, item: IItem, tile: ITile, dropAll: boolean, dropAllQuality: ItemQuality | undefined): boolean | undefined;
    /**
     * Called before an npc attacks
     * @param npc The npc object
     * @param weapon The weapon used to attack
     * @param attackType The attack type
     * @returns False if the npc cannot attack, or undefined to use the default logic
     */
    canNPCAttack?(npc: INPC, weapon: IItem | undefined, attackType: AttackType): boolean | undefined;
    /**
     * Called when a npc tries to move
     * @param npc The npc object
     * @param tile The tile the npc is trying to move to
     * @param x The x coordinate of the tile
     * @param y The y coordinate of the tile
     * @param z The z coordinate of the tile
     * @param moveType The npcs move type
     * @returns True if the npc can move, false if the npc cannot move, or undefined to use the default logic
     */
    canNPCMove?(npc: INPC, tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined;
    /**
     * Called when a npc is about to be spawned
     * @param type The type of npc
     * @param x The x coordinate where the npc will be spawned
     * @param y The y coordinate where the npc will be spawned
     * @param z The z coordinate where the npc will be spawned
     * @returns False if the npc cannot spawn, or undefined to use the default logic
     */
    canNPCSpawn?(type: NPCType, x: number, y: number, z: number): boolean | undefined;
    /**
     * Called when an doodad is being picked up
     * @param human The human object
     * @param doodad The doodad object
     * @returns False if the doodad cannot be picked up, or undefined to use the default logic
     */
    canPickupDoodad?(human: Human, doodad: IDoodad): boolean | undefined;
    /**
     * Called before a player attacks
     * @param player The player object
     * @param weapon The weapon used to attack
     * @param attackType The attack type
     * @returns False if the player cannot attack, or undefined to use the default logic
     */
    canPlayerAttack?(player: IPlayer, weapon: IItem | undefined, attackType: AttackType): boolean | undefined;
    /**
     * Called every frame where the mouse is not hovering over an item
     * @param api The bind catcher api
     * @returns False if the player can't move, undefined otherwise
     */
    canClientMove?(api: BindCatcherApi): false | undefined;
    /**
     * Called when calculating creatures in the viewport
     * @param creature The creature object
     * @param tile The tile the creature is on
     * @returns False if the player should not see the creature or undefined to use the default logic
     */
    canSeeCreature?(creature: ICreature, tile: ITile): boolean | undefined;
    /**
     * Called when calculating npcs in the viewport
     * @param npc The npc object
     * @param tile The tile the npc is on
     * @returns False if the player should not see the npc or undefined to use the default logic
     */
    canSeeNPC?(npc: INPC, tile: ITile): boolean | undefined;
    /**
     * Called when rendering creatures in the viewport
     * @param creature The creature object
     * @param batchLayer The batch layer the creature will render in
     * @returns The batch layer the creature should render in or undefined to use the default logic
     */
    getCreatureSpriteBatchLayer?(creature: ICreature, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    /**
     * Called when initializing each sprite batch layer.
     * @param layer The SpriteBatchLayer that is being initialized
     * @param maxSprites The default number of sprites that can be rendered at one time on this layer
     * @returns The number of sprites that can be rendered at one time on this layer
     */
    getMaxSpritesForLayer?(layer: SpriteBatchLayer, maxSprites: number): number | undefined;
    /**
     * Called when getting the field of view radius for a player
     * @param player The player object
     * @returns The field of view radius for the player or undefined to use the default logic
     */
    getPlayerFieldOfViewRadius?(player: IPlayer): number | undefined;
    /**
     * Called when getting the player's maximum health
     * @param maxHealth The current max health of the player (after any other previous mods)
     * @param player The player object
     * @returns The maximum health of the player
     */
    getPlayerMaxHealth?(maxHealth: number, player: IPlayer): number;
    /**
     * Called when getting the player's maximum weight
     * @param strength The current max health of the player (after any other previous mods)
     * @param player The player object
     * @returns The maximum health of the player
     */
    getPlayerMaxWeight?(maxWeight: number, player: IPlayer): number;
    /**
     * Called when getting the players movement intent
     * @param player The player object
     * @returns The movement intent of the player or undefined to use the default logic
     */
    getPlayerMovementIntent?(player: IPlayer): IMovementIntent | undefined;
    /**
     * Called when rendering the player in the viewport
     * @param player The player object
     * @param batchLayer The batch layer the player will render in
     * @returns The batch layer the player should render in or undefined to use the default logic
     */
    getPlayerSpriteBatchLayer?(player: IPlayer, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    /**
     * Called when getting the players weight movement penalty
     * @param player The player object
     * @returns The weight movement penalty for the player or undefined to use the default logic
     */
    getPlayerWeightMovementPenalty?(player: IPlayer): number | undefined;
    /**
     * Called when getting the players weight status
     * @param player The player object
     * @returns The weight status of the player or undefined to use the default logic
     */
    getPlayerWeightStatus?(player: IPlayer): WeightStatus | undefined;
    /**
     * Called when getting the position to render at. By default, this is the player's location.
     * @param position The player's location
     * @returns The new position to render at, or undefined to use the player's location
     */
    getCameraPosition?(position: IVector2): IVector2 | undefined;
    /**
     * Called when retrieving the light level of a tile
     * @param tile The tile that was updated
     * @param x The x position of the tile
     * @param y The y position of the tile
     * @param z The z position of the tile
     * @returns The light level of the tile or undefined to use the default logic
     */
    getTileLightLevel?(tile: ITile, x: number, y: number, z: number): number | undefined;
    /**
     * Called when calculating the movement penalty of a tile.
     * @param penalty The current penalty of the tile
     * @param tile The tile to get the movement penalty of
     */
    getTilePenalty?(penalty: number, tile: ITile): number | undefined;
    /**
     * Called when setting the zoom level.
     */
    getZoomLevel?(): number | undefined;
    /**
     * Called when checking if a human is swimming
     * @param human The human
     * @param isSwimming True if the human is swimming
     * @returns True if the human should be swimming, false if they should not be swimming, or undefined to use the default logic
     */
    isHumanSwimming?(human: Human, isSwimming: boolean): boolean | undefined;
    /**
     * Called when checking if a tile is blocked, used for pathing.
     * @param tile The tile to check
     */
    isTileBlocked?(tile: ITile): true | undefined;
    /**
     * Called when something is built on a tile
     * @param human The human object
     * @param item The item used to build the object
     * @param tile The tile something was built on
     * @param doodad The doodad that was created on the tile
     */
    onBuild?(human: Human, item: IItem, tile: ITile, doodad: IDoodad): void;
    /**
     * Called when a button on the button bar is clicked
     * @param button The button element
     */
    onButtonBarClick?(button: JQuery): void;
    /**
     * Called when an item is added to a container.
     * @param item The item object
     * @param container The container object the item was added to. This container might be inventory or a container within the inventory.
     */
    onContainerItemAdd?(item: IItem, container: IContainer): void;
    /**
     * Called when an item is removed from a container.
     * @param item The item object
     * @param container The container object the item was removed from.
     */
    onContainerItemRemove?(item: IItem, container: IContainer): void;
    /**
     * Called when an item is moved from one container to another.
     * @param item The item object
     * @param containerFrom The container object the item was moved to. This container might be inventory or a container within the inventory.
     * @param containerTo The container object the item was moved to. This container might be inventory or a container within the inventory.
     */
    onContainerItemUpdate?(item: IItem, containerFrom: IContainer | undefined, containerTo: IContainer): void;
    /**
     * Called when an item is crafted
     * @param human The human object
     * @param item The item that was crafted
     */
    onCraft?(human: Human, item: IItem): void;
    /**
     * Called right after the world is created, but before the renderer
     * @param world The world object
     */
    onCreateWorld?(world: IWorld): void;
    /**
     * Called when a message is displayed to the player
     * @param player The player object
     * @param message The message data
     */
    onDisplayMessage?(player: IPlayer, message: IMessage): void;
    /**
     * Called when a doodad spawns
     * @param doodad The doodad object
     */
    onDoodadSpawn?(doodad: IDoodad): void;
    /**
     * Called when the game is ending
     * @param state The state of the player (why the game is ending)
     */
    onGameEnd?(state: PlayerState): void;
    /**
     * Called when the game is starting
     * @param isLoadingSave True if a save game was loaded
     * @param playedCount The number of times the player has played the game (globally, not per slot)
     */
    onGameStart?(isLoadingSave: boolean, playedCount: number): void;
    /**
     * Called when the game tick starts
     */
    onGameTickStart?(): void;
    /**
     * Called when the game tick ends
     */
    onGameTickEnd?(): void;
    /**
     * Called whenever a translation is resolved.
     */
    onGetTranslation?(result: IStringSection[]): IStringSection[];
    /**
     * Called when an entity is killed by another entity.
     */
    onEntityKill?(attacker: IEntity | IDoodad, target: IEntity): void;
    /**
     * Called when a human's skill changes.
     * @param human The human whose skill changed
     * @param skill The skill that changed
     * @param currentSkill The new value of the skill
     */
    onHumanSkillChange?(human: IHuman, skill: SkillType, currentSkill: number): void;
    /**
     * Called when an item is added to the players inventory
     * @param player The player object
     * @param item The item object
     * @param container The container object the item was added to. This container might be inventory or a container within the inventory.
     */
    onInventoryItemAdd?(player: IPlayer | undefined, item: IItem, container: IContainer): void;
    /**
     * Called when an item is removed from the players inventory
     * @param player The player object
     * @param item The item object
     * @param container The container object the item was moved to.
     */
    onInventoryItemRemove?(player: IPlayer | undefined, item: IItem, container: IContainer): void;
    /**
     * Called when an item is moved from one container to another, while still in the players inventory.
     * @param player The player object
     * @param item The item object
     * @param container The container object the item was moved to. This container might be inventory or a container within the inventory.
     */
    onInventoryItemUpdate?(player: IPlayer | undefined, item: IItem, container: IContainer): void;
    /**
     * Called when an item is damaged
     * @param player The player object
     * @param item The item being damaged
     * @param modifier The damage modifier
     * @returns The amount of damage the item shouldd take or undefined to use the default logic
     */
    onItemDamage?(item: IItem, modifier?: number): number | undefined;
    /**
     * Called when the player equips an item to a slot
     * @param player The player object
     * @param item The item being equipped
     * @param slot The slot
     */
    onItemEquip?(player: IPlayer, item: IItem, slot: EquipType): void;
    /**
     * Called when the player quickslots an item
     * @param item The item being quickslotted
     * @param player The player object
     * @param quickSlot The quickslot number
     */
    onItemQuickslot?(item: IItem, player: IPlayer, quickSlot: number | undefined): void;
    /**
     * Called when a creature is damaged
     * @param creature The creature object
     * @param damageInfo The damage info object
     * @returns The amount of damage the creature should take (the creature will take this damage) or undefined to use the default logic
     */
    onCreatureDamage?(creature: ICreature, damageInfo: IDamageInfo): number | undefined;
    /**
     * Called when a creature dies
     * @param creature The creature object
     */
    onCreatureDeath?(creature: ICreature): void;
    /**
     * Called when a creature spawns
     * @param creature The creature object
     */
    onCreatureSpawn?(creature: ICreature): void;
    /**
     * Called when a creature becomes tamed
     * @param creature The creature object
     * @param owner The human which the creature is tamed for
     */
    onCreatureTamed?(creature: ICreature, owner: IPlayer): void;
    /**
     * Called when in-game, on the bind catcher loop (once per frame).
     * @param bindPressed Whether a bind has been pressed. Use this as a final check before processing a bind, and set it to true when a bind was pressed.
     * @param api The bind catcher api, allowing you to check whether binds are pressed
     * @returns Whether a bind was pressed.
     *
     * To use this hook, we recommend writing your method similarly to the following:
     *
     * ```ts
     * onBindLoop(bindPressed: Bindable | boolean | undefined, api: BindCatcherApi) {
     * 	if (api.wasPressed(<the bind you want to check> && !bindPressed)) {
     * 		// do things with that info
     * 		bindPressed = <the bind you just checked>;
     * 	}
     *
     * 	return bindPressed;
     * }
     * ```
     *
     * The reason we call `wasPressed` even if a bind has already been pressed is that the `wasPressed`
     * method is not greedy, and does not check all possible binds every single frame. This being the
     * case, any binds that you need to know if they become pressed in a frame need to be checked
     * *every frame*. By putting the `wasPressed` before the `!bindPressed` check, you check the bind
     * every frame regardless of whether another bind has been pressed. (And the `wasPressed` call
     * won't be short-circuited out)
     *
     * At the end you return the updated status of whether a bind has been pressed.
     */
    onBindLoop?(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    /**
     * Called when a human digs up treasure.
     * @param human The human that dug up treasure
     * @param treasureTile The tile the human dug up treasure at
     */
    onDigTreasure?(human: Human, treasureTile: Vector3): void;
    /**
     * Called when the language is changed
     * @param languageName The name of the newly selected language
     */
    onLanguageChange?(languageName: string): void;
    /**
     * Called when the player is moving
     * @param player The player object
     * @param nextX The x position the player is moving to
     * @param nextY The y position the player is moving to
     * @param tile The tile the player is moving to
     * @param direction The direction the player is facing
     * @returns False to cancel the move or undefined to use the default logic
     */
    onMove?(player: IPlayer, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined;
    /**
     * Called when the player completes a movement
     * @param player The player object
     */
    onMoveComplete?(player: IPlayer): void;
    /**
     * Called when the human faces a different direction
     * @param human The human object
     * @param direction The direction the player is now facing
     */
    onMoveDirectionUpdate?(human: Human, direction: Direction): void;
    /**
     * Called when no input is received
     * @param player The player object
     */
    onNoInputReceived?(player: IPlayer): void;
    /**
     * Called when an npc is damaged
     * @param npc The npc object
     * @param damageInfo The damage info object
     * @returns The amount of damage the npc should take (the npc will take this damage) or undefined to use the default logic
     */
    onNPCDamage?(npc: INPC, damageInfo: IDamageInfo): number | undefined;
    /**
     * Called when an npc is killed
     * @param player The npc object
     * @returns False to stop the npc from dying or undefined to use the default logic
     */
    onNPCDeath?(npc: INPC): boolean | undefined;
    /**
     * Called when an npc spawns
     * @param npc The npc object
     */
    onNPCSpawn?(npc: INPC): void;
    /**
     * Called when a book is opened by a player
     * @param human The human that opened a book
     * @param book The book that was opened
     */
    onOpenBook?(human: Human, book: BookType): void;
    /**
     * Called when an doodad is picked up
     * @param player The player object
     * @param doodad The doodad object
     */
    onPickupDoodad?(player: IPlayer, doodad: IDoodad): void;
    /**
     * Called when a player is damaged
     * @param player The player object
     * @param damageInfo The damage info object
     * @returns The amount of damage the player should take (the player will take this damage) or undefined to use the default logic
     */
    onPlayerDamage?(player: IPlayer, damageInfo: IDamageInfo): number | undefined;
    /**
     * Called when a player is killed
     * @param player The player object
     * @returns False to stop the player from dying or undefined to use the default logic
     */
    onPlayerDeath?(player: IPlayer): boolean | undefined;
    /**
     * Called when a player joins the server
     * @param player The player object
     */
    onPlayerJoin?(player: IPlayer): void;
    /**
     * Called when a player leaves the server
     * Note: This hook is not called for the player who left the server (player will never be localPlayer)
     * @param player The player object
     */
    onPlayerLeave?(player: IPlayer): void;
    /**
     * Called when the player tick ends
     * @param player The player object
     */
    onPlayerTickEnd?(player: IPlayer): void;
    /**
     * Called when the player tick starts
     * @param player The player object
     */
    onPlayerTickStart?(player: IPlayer): void;
    /**
     * Called when the players walk to tile path is set
     * @param player The player object
     * @param path The path
     */
    onPlayerWalkToTilePath?(player: IPlayer, path: IVector2[] | undefined): void;
    /**
     * Called when a sound effect is queued
     * @param type The sound effect type
     * @param x The x location in the world for the effect
     * @param y The y location in the world for the effect
     * @param z The z location in the world for the effect
     * @returns False to cancel the sound effect, a sound effect to play instead of the given one, or undefined to use the default logic
     */
    onQueueSoundEffect?(type: SfxType, x: number, y: number, z: number): SfxType | boolean | undefined;
    /**
     * Called when the game screen becomes visible. Messages sent before this point will not be displayed.
     */
    onGameScreenVisible?(): void;
    /**
     * Called when a map is read
     * @param player The player that read the map
     * @param mapRequest Information describing how to render the map.
     */
    onReadMap?(human: Human, mapRequest: IMapRequest): void;
    /**
     * Called when rendering the overlay
     * @param spriteBatch The overlay sprite batch
     */
    onRenderOverlay?(spriteBatch: ISpriteBatch): void;
    /**
     * Called when a player sails to civilization.
     * @param player The player that sailed to civilization
     */
    onSailToCivilization?(player: IPlayer): void;
    /**
     * Called when a creature is spawned from a creature group
     * @param creatureGroup The creature group
     * @param creaturePool The pool of creatures that can be spawned
     * @param x The x position to spawn the creature
     * @param y The y position to spawn the creature
     * @param z The z position to spawn the creature
     * @returns False to cancel spawning the creature or undefined to use the default logic
     */
    onSpawnCreatureFromGroup?(creatureGroup: SpawnGroup, creaturePool: CreatureType[], x: number, y: number, z: number): boolean | undefined;
    /**
     * Called when a tile is updated (tile type changed, doodad created on it, etc)
     * @param tile The tile that was updated
     * @param x The x position to spawn the creature
     * @param y The y position to spawn the creature
     * @param z The z position to spawn the creature
     */
    onTileUpdate?(tile: ITile, x: number, y: number, z: number): void;
    /**
     * Called when a turn is ending
     * @param player The player object
     */
    onTurnEnd?(player: IPlayer): void;
    /**
     * Called when a turn is starting
     * @param player The player object
     */
    onTurnStart?(player: IPlayer): void;
    /**
     * Called when the players weight is being updated
     * @param player The player object
     * @param newWeight The new weight of the player
     * @returns A number to set the player weight to or undefined to use the default logic
     */
    onUpdateWeight?(player: IPlayer, newWeight: number): number | undefined;
    /**
     * Called when the player will write a note.
     * @param player The player object
     * @param note The note that will be written.
     * @returns `false` if the note should be cancelled, or `undefined` to use the default logic
     */
    onWriteNote?(player: IPlayer, note: INote): false | undefined;
    /**
     * Called when the player has written a note.
     * @param player The player object
     * @param id The id of the note that was written.
     */
    onWrittenNote?(player: IPlayer, id: number): void;
    /**
     * Called after an action has been executed
     * This is called after the action result is used
     */
    postExecuteAction?(api: IActionApi, action: IActionDescription, args: any[]): void;
    /**
     * Called after the field of view has initialized
     */
    postFieldOfView?(): void;
    /**
     * Called after the world is generating
     * @param generateNewWorld True if a new world is being generated
     */
    postGenerateWorld?(generateNewWorld: boolean): void;
    /**
     * Called after rendering everything
     */
    postRender?(): void;
    /**
     * Caller after post processing the world render
     */
    postRenderPostProcess?(): void;
    /**
     * Caller after rendering the world
     * @param tileScale The tile scale
     * @param viewWidth The width of the view port
     * @param viewHeight The height of the view port
     */
    postRenderWorld?(tileScale: number, viewWidth: number, viewHeight: number): void;
    /**
     * Called after the game is saved
     */
    postSaveGame?(): void;
    /**
     * Called before an action is executed
     * This is called before the action result is used
     * @returns False to cancel the action or undefined to use the default logic
     */
    preExecuteAction?(api: IActionApi, action: IActionDescription, args: any[]): boolean | undefined;
    /**
     * Called before loading world differences
     * Loading differences involving setting up corpses, creatures, doodads, and related things onto the world
     * @param generateNewWorld True if a new world is being generated
     */
    preLoadWorldDifferences?(generateNewWorld: boolean): void;
    /**
     * Called before a command is executed
     * @param player The player object
     * @param command The command
     * @param args The arguments
     * @returns False to cancel the command or undefined to use the default logic
     */
    preExecuteCommand?(player: IPlayer, command: Command, args: string | undefined): boolean | undefined;
    /**
     * Called before rendering everything
     */
    preRender?(): void;
    /**
     * Caller before post processing the world render
     */
    preRenderPostProcess?(): void;
    /**
     * Called before rendering the world
     * @param tileScale The tile scale
     * @param viewWidth The width of the view port
     * @param viewHeight The height of the view port
     */
    preRenderWorld?(tileScale: number, viewWidth: number, viewHeight: number): void;
    /**
     * Called before the game is saved
     */
    preSaveGame?(): void;
    /**
     * Called when input is being processed
     * @param player The player object
     * @returns False to prevent input processing or undefined to use the default logic
     */
    processInput?(player: IPlayer): boolean | undefined;
    /**
     * Called when different object types are rendered
     * @returns A bitwise list of render flags or undefined to use the default logic
     */
    shouldRender?(): RenderFlag | undefined;
    /**
     * Called when a message is about to be displayed
     * @param player The player object
     * @param message The message that will be displayed
     * @param messageId The `Message`, or `-1` if the message being displayed isn't a `Message`
     * @returns False to not display the message or undefined to use the default logic
     */
    shouldDisplayMessage?(player: IPlayer, message: IMessage, messageId: number): boolean | undefined;
    /**
     * Called when determining if the player should stop walking to the tile
     * @returns True to stop walk to tile movement, False to continue walk to tile movement, or undefined to use the default logic
     */
    shouldStopWalkToTileMovement?(): boolean | undefined;
}
