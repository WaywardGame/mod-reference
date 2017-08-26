import { ICreature, IDamageInfo, SpawnGroup } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { ActionType, AttackType, CreatureType, EquipType, FacingDirection, IInspect, ItemQuality, ItemType, KeyBind, MoveType, Music, PlayerState, RenderFlag, SfxType, SpriteBatchLayer } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { Message, MessageType } from "language/Messages";
import BaseMod from "mod/BaseMod";
import IPlayer from "player/IPlayer";
import IWorld from "renderer/IWorld";
import { ITile } from "tile/ITerrain";
export declare abstract class Mod extends BaseMod {
    /**
     * Called when the mod is initialized (when it's enabled via the Mod Manager)
     * @param saveDataGlobal The save data object you previously saved via onUninitialize()
     */
    onInitialize(saveDataGlobal: any): void;
    /**
     * Called when the mod is uninitialized (when it's disabled via the Mod Manager)
     * @returns An object containing the data you want to save (saved globally, not per slot)
     */
    onUninitialize(): any;
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
    /**
     *  Get the ambient color while in caves
     * @returns the ambient color channels (3 numbers) or undefined to use the default color
     */
    getAmbientColorCave(): number[] | undefined;
    /**
     *  Get the ambient color while its day time
     * @returns the ambient color channels (3 numbers) or undefined to use the default color
     */
    getAmbientColorDay(): number[] | undefined;
    /**
     *  Get the ambient color while its night time
     * @returns the ambient color channels (3 numbers) or undefined to use the default color
     */
    getAmbientColorNight(): number[] | undefined;
    /**
     * Get the ambient light level
     * @param ambientLight The current ambient light level	 *
     * @param z The world z index
     * @returns the ambient light level or undefined to use the default light level
     */
    getAmbientLightLevel(ambientLight: number, z: number): number | undefined;
    /**
     * Called before consuming an item
     * @param itemType The item type
     * @param actionType The action type
     * @returns True if the player can consume the item (default logic isn't called, should use your own code for consumption), false if the player cannot consume the item, or undefined to use the default logic
     */
    canConsumeItem(itemType: ItemType, actionType: ActionType): boolean | undefined;
    /**
     * Called before a creature attacks
     * @param creatureId The creature id
     * @param creature The creature object
     * @returns False if the creature cannot attack, or undefined to use the default logic
     */
    canCreatureAttack(creatureId: number, creature: ICreature): boolean | undefined;
    /**
     * Called when a creature tries to move
     * @param creatureId The creature id
     * @param creature The creature object
     * @param tile The tile the creature is trying to move to
     * @param moveType The creatures move type
     * @returns True if the creature can move, false if the creature cannot move, or undefined to use the default logic
     */
    canCreatureMove(creatureId: number, creature: ICreature, tile: ITile, moveType: MoveType): boolean | undefined;
    /**
     * Called when a creature is about to be spawned
     * @param type The type of creature
     * @param x The x coordinate where the creature will be spawned
     * @param y The y coordinate where the creature will be spawned
     * @param z The z coordinate where the creature will be spawned
     * @param aberrant True if the creature is an aberrant
     * @returns False if the creature cannot spawn, or undefined to use the default logic
     */
    canCreatureSpawn(type: CreatureType, x: number, y: number, z: number, aberrant: boolean): boolean | undefined;
    /**
     * Called when an item is being dropped
     * @param item The item to be dropped
     * @param tile The tile the item will be dropped on
     * @param dropAll True if all items of this type will be dropped
     * @param dropAllQuality If not undefined, all items of this quality will be dropped
     * @returns True if the item can be dropped, false if the item can not be dropped, or undefined to use the default logic
     */
    canDropItem(item: IItem, tile: ITile, dropAll: boolean, dropAllQuality: ItemQuality | undefined): boolean | undefined;
    /**
     * Called before a player attacks
     * @param weapon The weapon used to attack
     * @param attackType The attack type
     * @returns False if the player cannot attack, or undefined to use the default logic
     */
    canPlayerAttack(weapon: IItem | undefined, attackType: AttackType): boolean | undefined;
    /**
     * Called when calculating creatures in the viewport
     * @param creatureId The creature id
     * @param creature The creature object
     * @param tile The tile the creature is on
     * @returns False if the player should not see the creature or undefined to use the default logic
     */
    canSeeCreature(creatureId: number, creature: ICreature, tile: ITile): boolean | undefined;
    /**
     * Called when the next music track is requested
     * @param currentMusicTrack The current music track
     * @returns The music track that should be played next or undefined to use the default logic
     */
    getNextMusicTrack(currentMusicTrack: Music): Music | undefined;
    /**
     * Called when rendering creatures in the viewport
     * @param creatureId The creature id
     * @param creature The creature object
     * @param batchLayer The batch layer the creature will render in
     * @returns The batch layer the creature should render in or undefined to use the default logic
     */
    getCreatureSpriteBatchLayer(creatureId: number, creature: ICreature, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    /**
     * Called when getting the players maximum health
     * @param player The player object
     * @returns The maximum health of the player or undefined to use the default logic
     */
    getPlayerMaxHealth(player: IPlayer): number | undefined;
    /**
     * Called when rendering the player in the viewport
     * @param player The player object
     * @param batchLayer The batch layer the player will render in
     * @returns The batch layer the player should render in or undefined to use the default logic
     */
    getPlayerSpriteBatchLayer(player: IPlayer, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    /**
     * Called when checking if a player is swimming
     * @param player The player object
     * @param isSwimming True if the player is swimming
     * @returns True if the player should be swimming, false if the player should not be swimming, or undefined to use the default logic
     */
    isPlayerSwimming(player: IPlayer, isSwimming: boolean): boolean | undefined;
    /**
     * Called when checking if a tile is inspectable (used for showing custom world tooltips over tiles)
     * Normally used in conjunction with the OnInspectTile hook
     * @param tile The tile object
     * @returns True if you want to show a custom inspect message, false to display no messages, or undefined to use the default logic
     */
    isTileInspectable(tile: ITile): boolean | undefined;
    /**
     * Called when something is built on a tile
     * @param item The item used to build the object
     * @param tile The tile something was built on
     * @param doodad The doodad that was created on the tile
     */
    onBuild(item: IItem, tile: ITile, doodad: IDoodad): void;
    /**
     * Called when a button on the button bar is clicked
     * @param buttonName The button name
     */
    onButtonBarClick(button: JQuery): void;
    /**
     * Called when an item is added to a container.
     * @param item The item object
     * @param container The container object the item was added to. This container might be inventory or a container within the inventory.
     */
    onContainerItemAdd(item: IItem, container: IContainer): void;
    /**
     * Called when an item is removed from a container.
     * @param item The item object
     * @param container The container object the item was removed from.
     */
    onContainerItemRemove(item: IItem, container: IContainer): void;
    /**
     * Called when an item is moved from one container to another.
     * @param item The item object
     * @param containerFrom The container object the item was moved to. This container might be inventory or a container within the inventory.
     * @param containerTo The container object the item was moved to. This container might be inventory or a container within the inventory.
     */
    onContainerItemUpdate(item: IItem, containerFrom: IContainer | undefined, containerTo: IContainer): void;
    /**
     * Called when an item is crafted
     * @param item The item that was crafted
     */
    onCraft(item: IItem): void;
    /**
     * Called right after the world is created, but before the renderer
     * @param world The world object
     */
    onCreateWorld(world: IWorld): void;
    /**
     * Called when a message is about to be displayed to the player
     * @param message The message
     * @param messageType The message type
     * @param args The message arguments
     * @returns False to not display the message or undefined to use the default logic
     */
    onDisplayMessage(message: Message, messageType?: MessageType, ...args: any[]): boolean | undefined;
    /**
     * Called when the game is ending
     * @param playerState The ending player state
     */
    onGameEnd(playerState: PlayerState): void;
    /**
     * Called when the game is starting
     * @param isLoadingSave True if a save game was loaded
     * @param playedCount The number of times the player has played the game (globally, not per slot)
     */
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    /**
     * Called when a tile is being inspected
     * @param tile The tile being inspected
     * @returns The inspects to be shown or undefined to use the default logic
     */
    onInspectTile(tile: ITile): IInspect[] | undefined;
    /**
     * Called when an item is added to the players inventory
     * @param item The item object
     * @param container The container object the item was added to. This container might be inventory or a container within the inventory.
     */
    onInventoryItemAdd(item: IItem, container: IContainer): void;
    /**
     * Called when an item is removed from the players inventory
     * @param item The item object
     * @param container The container object the item was moved to.
     */
    onInventoryItemRemove(item: IItem, container: IContainer): void;
    /**
     * Called when an item is moved from one container to another, while still in the players inventory.
     * @param item The item object
     * @param container The container object the item was moved to. This container might be inventory or a container within the inventory.
     */
    onInventoryItemUpdate(item: IItem, container: IContainer): void;
    /**
     * Called when the player equips an item to a slot
     * @param item The item being equipped
     * @param slot The slot
     */
    onItemEquip(item: IItem, slot: EquipType): void;
    /**
     * Called when a keybind is pressed
     * @param keyBind The keybind
     * @returns False to cancel the keybind press or undefined to use the default logic
     */
    onKeyBindPress(keyBind: KeyBind): boolean | undefined;
    /**
     * Called when a key is pressed down
     * @param event The event object
     * @returns False to cancel the event or undefined to use the default logic
     */
    onKeyDown(event: JQueryEventObject): boolean | undefined;
    /**
     * Called when a key is let go
     * @param event The event object
     * @returns False to cancel the event or undefined to use the default logic
     */
    onKeyUp(event: JQueryEventObject): boolean | undefined;
    /**
     * Called when a creature is damaged
     *
     * @param creatureId The creature id
     * @param creature The creature object
     * @param damageInfo The damage info object
     * @returns The amount of damage the creature should take (the creature will take this damage) or undefined to use the default logic
     */
    onCreatureDamage(creatureId: number, creature: ICreature, damageInfo: IDamageInfo): number | undefined;
    /**
     * Called when a creature dies
     * @param creatureId The creature id
     * @param creature The creature object
     */
    onCreatureDeath(creatureId: number, creature: ICreature): void;
    /**
     * Called when a creature spawns
     * @param creatureId The creature id
     * @param creature The creature object
     * @param aberrant True if the creature is an aberrant
     */
    onCreatureSpawn(creatureId: number, creature: ICreature): void;
    /**
     * Called when a mouse button is pressed
     * @param event The mouse event object
     * @returns False to cancel the mouse event or undefined to use the default logic
     */
    onMouseDown(event: JQueryEventObject): boolean | undefined;
    /**
     * Called when a mouse button is pressed
     * @param event The mouse event object
     * @returns False to cancel the mouse event or undefined to use the default logic
     */
    onMouseMove(event: JQueryEventObject): boolean | undefined;
    /**
     * Called when a mouse button is pressed
     * @param event The mouse event object
     * @returns False to cancel the mouse event or undefined to use the default logic
     */
    onMouseScroll(event: JQueryEventObject): boolean | undefined;
    /**
     * Called when a mouse button is let go or if the mouse leaves the screen
     * @param event The mouse event object
     * @returns False to cancel the event or undefined to use the default logic
     */
    onMouseUpOrLeave(event: JQueryEventObject): boolean | undefined;
    /**
     * Called when the player is moving
     * @param nextX The x position the player is moving to
     * @param nextY The y position the player is moving to
     * @param tile The tile the player is moving to
     * @param direction The direction the player is facing
     * @returns False to cancel the move or undefined to use the default logic
     */
    onMove(nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean | undefined;
    /**
     * Called when the player faces a different direction
     * @param direction The direction the player is now facing
     */
    onMoveDirectionUpdate(direction: FacingDirection): void;
    /**
     * Called when no input is received
     * @param player The player object
     */
    onNoInputReceived(player: IPlayer): void;
    /**
     * Called when the player takes damage
     * @param amount The amount of damage taken
     * @param damageMessage The message associated with the damaged
     * @returns False to stop the player from taking damage or undefined to use the default logic
     */
    onPlayerDamage(amount: number, damageMessage: string): boolean | undefined;
    /**
     * Called when the player is killed
     * @param player The player object
     * @returns False to stop the player from dieing or undefined to use the default logic
     */
    onPlayerDeath(player: IPlayer): boolean | undefined;
    /**
     * Called when a sound effect is queued
     * @param type The sound effect type
     * @param x The x location in the world for the effect
     * @param y The y location in the world for the effect
     * @param z The z location in the world for the effect
     * @returns False to cancel the sound effect, a sound effect to play instead of the given one, or undefined to use the default logic
     */
    onQueueSoundEffect(type: SfxType, x: number, y: number, z: number): SfxType | boolean | undefined;
    /**
     * Called when the in game screen is shown
     */
    onShowInGameScreen(): void;
    /**
     * Called when a creature is spawned from a creature group
     * @param creatureGroup The creature group
     * @param creaturePool The pool of creatures that can be spawned
     * @param x The x position to spawn the creature
     * @param y The y position to spawn the creature
     * @param z The z position to spawn the creature
     * @returns False to cancel spawning the creature or undefined to use the default logic
     */
    onSpawnCreatureFromGroup(creatureGroup: SpawnGroup, creaturePool: CreatureType[], x: number, y: number, z: number): boolean | undefined;
    /**
     * Called when a turn is completing
     * @param player The player object
     */
    onTurnComplete(player: IPlayer): void;
    /**
     * Called when a turn is starting
     */
    onTurnStart(): void;
    /**
     * Called when the players weight is being updated
     * @param newWeight The new weight of the player
     * @returns A number to set the player weight to or undefined to use the default logic
     */
    onUpdateWeight(newWeight: number): number | undefined;
    /**
     * Called after the world is generating
     * @param generateNewWorld True if a new world is being generated
     */
    postGenerateWorld(generateNewWorld: boolean): void;
    /**
     * Called after rendering everything
     */
    postRender(): void;
    /**
     * Caller after post processing the world render
     */
    postRenderPostProcess(): void;
    /**
     * Caller after rendering the world
     * @param tileScale The tile scale
     * @param viewWidth The width of the view port
     * @param viewHeight The height of the view port
     */
    postRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
    /**
     * Called before rendering everything
     */
    preRender(): void;
    /**
     * Caller before post processing the world render
     */
    preRenderPostProcess(): void;
    /**
     * Called before rendering the world
     * @param tileScale The tile scale
     * @param viewWidth The width of the view port
     * @param viewHeight The height of the view port
     */
    preRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
    /**
     * Called when input is being processed
     * @param player The player object
     * @returns False to prevent input processing or undefined to use the default logic
     */
    processInput(player: IPlayer): boolean | undefined;
    /**
     * Called when different object types are rendered
     * @returns A bitwise list of render flags or undefined to use the default logic
     */
    shouldRender(): RenderFlag | undefined;
}
export default Mod;
