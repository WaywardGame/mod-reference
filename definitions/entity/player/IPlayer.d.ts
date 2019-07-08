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
import { IDoodad } from "doodad/IDoodad";
import { CreatureType, ICreature } from "entity/creature/ICreature";
import { EntityType } from "entity/IEntity";
import IHuman, { EquipType, HairColor, HairStyle, IRestData, RestType, SkinColor } from "entity/IHuman";
import { IStat, Stat } from "entity/IStats";
import { INPC } from "entity/npc/INPC";
import { IMessage } from "entity/player/IMessageManager";
import MessageManager from "entity/player/MessageManager";
import NoteManager from "entity/player/note/NoteManager";
import QuestManager from "entity/player/quest/QuestManager";
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import { Milestone } from "game/milestones/IMilestone";
import { IContainer, IItem, ItemType } from "item/IItem";
import Message from "language/dictionary/Message";
import IClientStore from "save/clientStore/IClientStore";
import { IOptions } from "save/data/ISaveDataGlobal";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
export interface IPlayer extends IHuman {
    event: IEventEmitter<this, IPlayerEvents>;
    entityType: EntityType.Player;
    absentLastUsedTime: number;
    containerSortInfo: {
        [index: string]: IContainerSortInfo;
    };
    dialogContainerInfo: IDialogInfo[];
    dialogInfo: {
        [index: string]: IDialogInfo;
    };
    fromX: number;
    fromY: number;
    isConnecting: boolean;
    isMoving: boolean;
    isMovingClientside: boolean;
    lastAttackedBy: Human | ICreature | undefined;
    lightBonus: number;
    messages: MessageManager;
    movementComplete: boolean;
    movementCompleteZ: number | undefined;
    movementProgress: number;
    name: string;
    nextMoveDirection: Direction | undefined;
    nextMoveTime: number;
    nextX: number;
    nextY: number;
    noInputReceived: boolean;
    notes: NoteManager;
    quests: QuestManager;
    quickSlotInfo: IQuickSlotInfo[];
    revealedItems: {
        [index: number]: boolean;
    };
    spawnPoint: IVector3 | undefined;
    tamedCreatures: number[];
    travelData: IPlayerTravelData | undefined;
    turns: number;
    walkSoundCounter: number;
    wasAbsentPlayer: boolean;
    x: number;
    y: number;
    z: number;
    readonly clientStore: IClientStore;
    readonly walkPath: IVector2[] | undefined;
    movementFinishTime: number;
    setStatChangeTimerIgnoreDifficultyOptions(stat: Stat | IStat, timer: number, amt?: number): void;
    checkForGather(): IDoodad | undefined;
    checkForStill(): boolean;
    checkForWell(): boolean;
    checkReputationMilestones(): void;
    checkSkillMilestones(): void;
    checkWeight(): void;
    equip(item: IItem, slot: EquipType, internal?: boolean, switchingHands?: boolean): void;
    /**
     * Returns true if the player changed their facing direction.
     */
    faceDirection(direction: Direction, turnDelay?: number): boolean;
    getDefaultCarveTool(): IItem | undefined;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    getDisplayCreature(): CreatureType | undefined;
    getMaxWeight(): number;
    getMovementIntent(): IMovementIntent;
    getNextPosition(): IVector3;
    getWeightMovementPenalty(): number;
    getWeightStatus(): WeightStatus;
    hasTamedCreature(creature: ICreature): boolean;
    hasWalkPath(): boolean;
    healthSyncCheck(): void;
    hurtHands(damageMessage: Message, toolMessage?: Message, hurtHandsMessage?: Message): boolean;
    isFacingCarvableTile(): boolean;
    isServer(): boolean;
    kill(): void;
    passTurn(turnType?: TurnType): void;
    processInput(): void;
    resetMovementStates(): void;
    revealItem(itemType: ItemType): void;
    setId(id: number): void;
    setTamedCreatureEnemy(enemy: IPlayer | ICreature): void;
    setup(): void;
    showRestInterrupt(restType: RestType): void;
    staminaCheck(): boolean;
    tick(isPassTurn?: boolean): void;
    unequip(item: IItem, internal?: boolean, skipMessage?: boolean, switchingHands?: boolean): void;
    unequipAll(): void;
    updateDialogInfo(dialogIndex: string | number): void;
    updateHandToUse(): void;
    updateMovementIntent(intent: IMovementIntent): void;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction): void;
    updateStatuses(): void;
    updateStrength(): void;
    updateTables(): void;
    updateTablesAndWeight(): void;
    walkAlongPath(path: IVector2[] | undefined): void;
}
export default IPlayer;
interface IPlayerEvents extends Events<IHuman> {
    /**
     * Called when the player is spawned. (At the end of `Player.setup`)
     */
    spawn(): void;
    /**
     * @param milestone The milestone that is being updated
     * @param value The new value for this milestone
     * @param max The max value for this milestone
     */
    milestoneUpdate(milestone: Milestone, value: number, max: number): void;
    /**
     * @param key The key of `IOptions` that was changed on this player
     * @param value The value this key was set to
     */
    updateOption<O extends keyof IOptions>(key: O, value: IOptions[O]): void;
    /**
     * Called when an item is added to the player's inventory
     * @param item The item object
     * @param container The container object the item was added to. This container might be inventory or a container within the inventory.
     */
    inventoryItemAdd(item: IItem, container: IContainer): void;
    /**
     * Called when an item is removed from the players inventory
     * @param item The item object
     * @param container The container object the item was moved to.
     */
    inventoryItemRemove(item: IItem, container: IContainer): void;
    /**
     * Called when an item is moved from one container to another, while still in the players inventory.
     * @param item The item object
     * @param container The container object the item was moved to. This container might be inventory or a container within the inventory.
     * @param previousContainer The container object the item was moved from. This container might be inventory or a container within the inventory.
     */
    inventoryItemUpdate(item: IItem, container: IContainer, previousContainer?: IContainer): void;
    /**
     * Called when the players x / y position changes
     * @param x The players x position
     * @param y The players y position
     */
    processMovement(x: number, y: number): void;
    /**
     * Called when the player starts resting
     * @param restData The data related to the rest event
     */
    restStart(restData: IRestData): void;
    /**
     * Called when the player stops resting
     * @param restData The data related to the rest event
     */
    restEnd(restData: IRestData): void;
    /**
     * Called when a message is being disaplyed for a player
     * @param message The message that will be displayed
     */
    displayMessage(message: IMessage): void;
}
export declare enum TurnType {
    CheckUnderPlayer = 0,
    DontEnterCaves = 1,
    ForcePickUp = 2
}
export interface IAttackHand {
    leftHand: number;
    rightHand: number;
}
export declare type IPlayerOld = Partial<IPlayer> & {
    gender: 0 | 1;
    talent: number;
    stamina: number;
    staminaRegen: number;
    staminaTimer: number;
    thirst: number;
    thirstRegen: number;
    thirstTimer: number;
    hunger: number;
    hungerRegen: number;
    hungerTimer: number;
    health: number;
    healthRegen: number;
    healthTimer: number;
    malignityPlus: number;
    malignityNegative: number;
    customization: {
        hairStyle: HairStyle;
        hairColor: HairColor;
        skinColor: SkinColor;
    };
    stats: IStatsOld;
    strength: number;
    dexterity: number;
    starvation: number;
    dehydration: number;
    weight: number;
    attack: number;
    benignity: number;
    malignity: number;
    exploredMapEncodedData: number[][];
    messages: MessageManager;
};
export interface IStatsOld {
    health: IStatOld;
    stamina: IStatOld;
    hunger: IStatOld;
    thirst: IStatOld;
}
export interface IStatOld {
    value: number;
    timer: number;
    regen: number;
    regenBase: number;
}
export interface IMobCheck {
    x: number;
    y: number;
    z: number;
    creature?: ICreature;
    player?: IPlayer;
    npc?: INPC;
    obstacle?: boolean;
    water?: boolean;
    freshWater?: boolean;
}
export declare const setupSpawnItems: ItemType[];
export declare const setupWaterItems: ItemType[];
export declare const setupToolItems: ItemType[];
export declare const setupMiscItems: ItemType[];
export declare const setupHealthItems: ItemType[];
export declare const setupLightItems: ItemType[];
export declare const setupBookItems: ItemType[];
export declare function getDirectionFromMovement(x: number, y: number): Direction.East | Direction.North | Direction.West | Direction.South;
export interface IInputMovement extends IVector2 {
    moveBind: Direction;
    direction: Direction;
}
export declare const gameMovement: IInputMovement[];
export declare type MovementIntent = Direction | "idle" | undefined;
export declare const movementIntents: MovementIntent[];
export interface IMovementIntent {
    /**
     * A cardinal direction, the tile location of a tile to move to, to idle, or undefined to do nothing.
     */
    intent?: MovementIntent;
    turnDelay?: number;
}
export interface IPlayerTravelData {
    starvation: number;
    dehydration: number;
    originalHealth: number;
    itemId: number | undefined;
    state: PlayerState;
}
export declare enum PlayerState {
    None = 0,
    Dead = 1,
    Won = 2,
    Traveling = 3,
    Ghost = 4,
    Server = 5
}
export declare enum WeightStatus {
    None = 0,
    Overburdened = 1,
    Encumbered = 2
}
/**
 * The amount of extra weight the player can hold (added to max health)
 */
export declare const STRENGTH_BONUS = 25;
