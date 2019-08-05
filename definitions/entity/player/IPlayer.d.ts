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
import Creature from "entity/creature/Creature";
import Human from "entity/Human";
import { HairColor, HairStyle, IRestData, SkinColor } from "entity/IHuman";
import NPC from "entity/npc/NPC";
import { IMessage } from "entity/player/IMessageManager";
import MessageManager from "entity/player/MessageManager";
import Player from "entity/player/Player";
import { Events } from "event/EventBuses";
import { Milestone } from "game/milestones/IMilestone";
import { IContainer, ItemType } from "item/IItem";
import Item from "item/Item";
import { IOptions } from "save/data/ISaveDataGlobal";
import { Direction } from "utilities/math/Direction";
import { IVector2 } from "utilities/math/IVector";
export interface IPlayerEvents extends Events<Human> {
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
    inventoryItemAdd(item: Item, container: IContainer): void;
    /**
     * Called when an item is removed from the players inventory
     * @param item The item object
     * @param container The container object the item was moved to.
     */
    inventoryItemRemove(item: Item, container: IContainer): void;
    /**
     * Called when an item is moved from one container to another, while still in the players inventory.
     * @param item The item object
     * @param container The container object the item was moved to. This container might be inventory or a container within the inventory.
     * @param previousContainer The container object the item was moved from. This container might be inventory or a container within the inventory.
     */
    inventoryItemUpdate(item: Item, container: IContainer, previousContainer?: IContainer): void;
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
export declare type IPlayerOld = Partial<Player> & {
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
    creature?: Creature;
    player?: Player;
    npc?: NPC;
    obstacle?: boolean;
    water?: boolean;
    freshWater?: boolean;
}
export declare const setupSpawnItems: ItemType[];
export declare const setupWaterItems: ItemType[];
export declare const setupToolItems: ItemType[];
export declare const setupMiscItems: ItemType[];
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
