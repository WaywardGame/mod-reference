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
import Creature from "entity/creature/Creature";
import { EntityPlayerCreatureNpc, EntityType, IEntityEvents, IProperties, IStatChangeInfo, IStatus, MoveType, Property, StatChangeReason, StatusEffectChangeReason, StatusType } from "entity/IEntity";
import { IStat, IStatBase, IStats, Stat } from "entity/IStats";
import NPC from "entity/npc/NPC";
import Player from "entity/player/Player";
import StatFactory from "entity/StatFactory";
import EventEmitter from "event/EventEmitter";
import { FireType, TileUpdateType } from "game/IGame";
import { ItemType } from "item/IItem";
import Translation, { ISerializedTranslation } from "language/Translation";
import { StatType } from "renderer/INotifier";
import { ITile } from "tile/ITerrain";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
import Stream from "utilities/stream/Stream";
export default abstract class Entity extends EventEmitter.Host<IEntityEvents> {
    static is(entity: Entity | undefined, entityType: EntityType.NPC): entity is NPC;
    static is(entity: Entity | undefined, entityType: EntityType.Creature): entity is Creature;
    static is(entity: Entity | undefined, entityType: EntityType.Player): entity is Player;
    static isNot(entity: Entity | undefined, entityType: EntityType.NPC): entity is Exclude<EntityPlayerCreatureNpc, NPC>;
    static isNot(entity: Entity | undefined, entityType: EntityType.Creature): entity is Exclude<EntityPlayerCreatureNpc, Creature>;
    static isNot(entity: Entity | undefined, entityType: EntityType.Player): entity is Exclude<EntityPlayerCreatureNpc, Player>;
    entityType: EntityType;
    id: number;
    renamed?: string | ISerializedTranslation;
    z: number;
    x: number;
    y: number;
    fromX: number;
    fromY: number;
    moveType: MoveType | undefined;
    anim: number;
    stopNextMovement: boolean;
    direction: IVector2;
    facingDirection: Direction;
    stats: IStats;
    status: IStatus;
    properties: IProperties | undefined;
    private _movementFinishTime;
    private _inFov;
    constructor();
    abstract getName(): Translation;
    toString(): string;
    /**
     * Initializes the given stat from the given `StatFactory` instance.
     * @param factory The factory to initialize the stat from.
     *
     * This method will replace existing stats.
     */
    initStat(factory: StatFactory): void;
    /**
     * Returns whether the given stat exists on this entity.
     */
    hasStat(stat: Stat): boolean;
    /**
     * Removes the given stat from this entity.
     */
    removeStat(stat: Stat): void;
    /**
     * Returns the stat object of a given `Stat`. The return type is a vague `IStat`, but can be
     * passed a type which extends `IStatBase` for automatic narrowing.
     * @param stat The `Stat` to get
     */
    getStat<Staty extends IStatBase | undefined = IStat | undefined>(stat: Stat, allowFailure?: boolean): Staty & (Staty extends IStatBase ? {
        base: Staty;
    } : undefined);
    getStatInternal(stat: Stat | IStat): IStatBase;
    getStatInternal(stat: Stat | IStat, allowFailure: true): IStatBase | undefined;
    getStatInternal(stat: Stat | IStat, allowFailure: boolean): IStatBase | undefined;
    /**
     * Returns the value of the given stat, or `undefined` if the stat does not exist.
     */
    getStatValue(stat: Stat | IStat): number | undefined;
    /**
     * Sets the given `Stat`'s value to the given amount. Triggers `EntityEvent.StatChange`
     * @param stat The `Stat` to set.
     * @param amount The amount to set the value to.
     * @param reason Why this stat is changing.
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    setStat(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    /**
     * Reduces the given `Stat` by the given amount. Triggers `EntityEvent.StatChange`
     * @param stat The `Stat` to reduce.
     * @param amount The amount to reduce by.
     * @param reason Why this stat is changing.
     *
     * An alias for `increaseStat`, negating the given amount.
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    reduceStat(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    /**
     * Increases the given `Stat` by the given amount. Triggers `EntityEvent.StatChange`
     * @param stat The `Stat` to increase.
     * @param amount The amount to increase by.
     * @param reason Why this stat is changing.
     *
     * An alias for `setStat(stat, stat.value + amount, reason)`
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    increaseStat(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    /**
     * Change the bonus for a stat.
     * @param stat The `Stat` to set the bonus of.
     * @param bonus The amount to increase/decrease the stat.
     * @param reason Why this stat is changing.
     *
     * Triggers `EntityEvent.StatBonusChanged`, then `EntityEvent.StatChanged`
     */
    setStatBonus(stat: Stat | IStat, bonus: number, info?: StatChangeReason | IStatChangeInfo): void;
    /**
     * Returns the `max` of the given stat, or undefined if the stat isn't an `IStatMax`.
     */
    getStatMax(stat: Stat | IStat): number | undefined;
    /**
     * Sets the given `Stat`'s `max` to the given amount. Triggers `EntityEvent.StatMaxChange`
     * @param stat The `Stat` to set.
     * @param amount The amount to set the value to.
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    setStatMax(stat: Stat | IStat, amount: number): void;
    /**
     * Sets how frequently the stat should change. Triggers `EntityEvent.StatTimerChange`
     * @param stat The `Stat` that should change.
     * @param timer How many turns should pass between changes.
     * @param amount The amount the stat will change whenever the timer completes. Defaults to increase by `1`.
     *
     * If the stat already has a timer going, the difference of the new and old timers
     * is subtracted from the time remaining.
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    setStatChangeTimer(stat: Stat | IStat, timer: number, amt?: number): void;
    setStatAndMax(stat: Stat | IStat, max: number, current: number): void;
    /**
     * Passes the "turn" for stats, decrements their `changeTimer`s. If a stat's timer reaches `0`,
     * the stat value is changed by `changeAmount` and the `changeTimer` is reset to `nextChangeTimer`
     */
    updateStats(): void;
    /**
     * Returns whether the entity has the given `StatusType`
     * @param status The status to check
     */
    hasStatus(status: StatusType): boolean;
    /**
     * Sets whether the entity has the given `StatusType`
     * @param status The status to change
     * @param to Whether the entity will have the status
     * @param reason The reason for the change
     *
     * Triggers `EntityEvent.StatusChange`
     */
    setStatus(status: StatusType, hasStatusEffect: boolean, reason: StatusEffectChangeReason): void;
    /**
     * Generator for status effects on the entity.
     */
    statuses(): Stream<StatusType>;
    getTileUpdateType(): TileUpdateType;
    getTile(): ITile;
    getPoint(): IVector3;
    getFacingPoint(): IVector3;
    getFacingTile(): ITile;
    moveTo(x: number, y: number, z: number): boolean;
    getMovementPoint(): IVector2;
    getMovementProgress(): number;
    getMovementFinishTime(): number | undefined;
    getMoveType(): MoveType;
    setMoveType(moveType: MoveType): void;
    isInFov(): boolean;
    setInFov(inFov: boolean): void;
    isOnFire(): FireType;
    canSeePosition(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    notifyItem(itemType: ItemType): void;
    notifyStat(type: StatType, value: number): void;
    hasProperty(property: Property): boolean;
    addProperty(property: Property, value: any): void;
    getProperty<T>(property: Property): T | undefined;
    removeProperty(property: Property): boolean;
}
