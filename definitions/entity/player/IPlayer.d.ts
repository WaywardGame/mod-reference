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
import { ICreature } from "entity/creature/ICreature";
import { EntityType, IEntityEvents } from "entity/IEntity";
import IHuman, { EquipType, HairColor, HairStyle, IHumanEvents, RestType, SkinColor } from "entity/IHuman";
import { IStat, Stat } from "entity/IStats";
import { INPC } from "entity/npc/INPC";
import { MilestoneType } from "entity/player/IMilestone";
import MessageManager from "entity/player/MessageManager";
import NoteManager from "entity/player/note/NoteManager";
import QuestManager from "entity/player/quest/QuestManager";
import EventEmitter from "event/EventEmitter";
import { IContainer, IItem, ItemType } from "item/IItem";
import Message from "language/dictionary/Message";
import IClientStore from "save/clientStore/IClientStore";
import { IOptions } from "save/data/ISaveDataGlobal";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
export interface IPlayer extends IHuman {
    event: EventEmitter<IPlayerEvents<this>> & EventEmitter<IHumanEvents<this>> & EventEmitter<IEntityEvents<this>>;
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
    getMovementIntent(): IMovementIntent;
    getMaxWeight(): number;
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
    setup(completedMilestones: number): void;
    showRestInterrupt(restType: RestType): void;
    staminaCheck(): boolean;
    tick(isPassTurn?: boolean): void;
    unequip(item: IItem, internal?: boolean, skipMessage?: boolean, switchingHands?: boolean): void;
    unequipAll(): void;
    updateDialogInfo(dialogIndex: string | number): void;
    updateHandToUse(): void;
    updateMilestones(): void;
    updateMovementIntent(intent: IMovementIntent): void;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction): void;
    updateStatuses(): void;
    updateStrength(): void;
    updateTables(): void;
    updateTablesAndWeight(): void;
    walkAlongPath(path: IVector2[] | undefined): void;
}
export default IPlayer;
export interface IPlayerEvents<P extends IPlayer = IPlayer> extends IHumanEvents<P> {
    /**
     * @param milestone The milestone that is being updated
     * @param value The new value for this milestone
     * @param max The max value for this milestone
     */
    milestoneUpdate(player: P, milestone: MilestoneType, value: number, max: number): void;
    /**
     * @param key The key of `IOptions` that was changed on this player
     * @param value The value this key was set to
     */
    updateOption<O extends keyof IOptions>(player: P, key: O, value: IOptions[O]): void;
    /**
     * Called when an item is added to the player's inventory
     * @param player The player object
     * @param item The item object
     * @param container The container object the item was added to. This container might be inventory or a container within the inventory.
     */
    inventoryItemAdd(player: P, item: IItem, container: IContainer): void;
    /**
     * Called when an item is removed from the players inventory
     * @param player The player object
     * @param item The item object
     * @param container The container object the item was moved to.
     */
    inventoryItemRemove(player: P, item: IItem, container: IContainer): void;
    /**
     * Called when an item is moved from one container to another, while still in the players inventory.
     * @param player The player object
     * @param item The item object
     * @param container The container object the item was moved to. This container might be inventory or a container within the inventory.
     * @param previousContainer The container object the item was moved from. This container might be inventory or a container within the inventory.
     */
    inventoryItemUpdate(player: P, item: IItem, container: IContainer, previousContainer?: IContainer): void;
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
