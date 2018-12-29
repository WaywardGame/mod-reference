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
import { ICreature } from "creature/ICreature";
import { IStat, IStatBase, IStatFactory, IStats, Stat } from "entity/IStats";
import { Direction, FireType, MoveType, SfxType, StatusType } from "Enums";
import Translation, { ISerializedTranslation } from "language/Translation";
import { INPC } from "npc/INPC";
import IPlayer from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import Emitter from "utilities/Emitter";
import { IVector2, IVector3 } from "utilities/math/IVector";
export default interface IEntity extends IVector3, Emitter {
    entityType: EntityType;
    id: number;
    renamed?: string | ISerializedTranslation;
    fromX: number;
    fromY: number;
    readonly moveType: MoveType | undefined;
    anim: number;
    stopNextMovement: boolean;
    direction: IVector2;
    facingDirection: Direction;
    stats: IStats;
    status: IStatus;
    getName(): Translation;
    getFacingPoint(): IVector3;
    getFacingTile(): ITile;
    getMovementFinishTime(): number | undefined;
    getMovementProgress(): number;
    getPoint(): IVector3;
    getTile(): ITile;
    getMoveType(): MoveType;
    setMoveType(moveType: MoveType): void;
    isInFov(): boolean;
    setInFov(inFov: boolean): void;
    isOnFire(): FireType;
    canSeePosition(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    /**
     * Initializes the given stat from the given `StatFactory` instance.
     * @param factory The factory to initialize the stat from.
     *
     * This method will replace existing stats.
     */
    initStat(factory: IStatFactory): void;
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
    getStat<StatType extends IStatBase | undefined = IStat | undefined>(stat: Stat): StatType;
    /**
     * Returns the value of the given stat, or `undefined` if the stat does not exist.
     */
    getStatValue(stat: Stat): number | undefined;
    /**
     * Sets the given `Stat`'s value to the given amount. Triggers `EntityEvent.StatChange`
     * @param stat The `Stat` to set.
     * @param amount The amount to set the value to.
     * @param reason Why this stat is changing.
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    setStat(stat: Stat | IStat, amount: number, reason?: StatChangeReason | IStatChangeInfo): boolean;
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
    reduceStat(stat: Stat | IStat, amount: number, reason?: StatChangeReason | IStatChangeInfo): boolean;
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
    increaseStat(stat: Stat | IStat, amount: number, reason?: StatChangeReason | IStatChangeInfo): boolean;
    /**
     * Change the bonus for a stat.
     * @param stat The `Stat` to set the bonus of.
     * @param bonus The amount to increase/decrease the stat.
     * @param reason Why this stat is changing.
     *
     * Triggers `EntityEvent.StatBonusChanged`, then `EntityEvent.StatChanged`
     */
    setStatBonus(stat: Stat | IStat, bonus: number, reason?: StatChangeReason | IStatChangeInfo): void;
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
     * Returns the `max` of the given stat, or undefined if the stat isn't an `IStatMax`.
     */
    getStatMax(stat: Stat): number | undefined;
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
    setStatChangeTimer(stat: Stat | IStat, timer: number, amount?: number): void;
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
    setStatus(status: StatusType, to: boolean, reason: StatusEffectChangeReason): void;
    /**
     * Generator for status effects on the entity.
     */
    statuses(): IterableIterator<StatusType>;
    hasProperty(property: Property): boolean;
    addProperty(property: Property, value: any): void;
    getProperty<T>(property: Property): T | undefined;
    removeProperty(property: Property): boolean;
}
export declare enum EntityEvent {
    /**
     * Called when a stat changes, for any reason
     * @param emitter The object this event is emitted from
     * @param stat An IStat object, the stat that was affected
     * @param oldValue The value that the stat changed from
     * @param info An IStatChangeInfo object describing why the change occurred. It will always be passed with a `reason`
     */
    StatChanged = 0,
    /**
     * Called when a stat changes, for any reason
     * @param emitter The object this event is emitted from
     * @param stat An IStat object, the stat that was affected
     * @param oldValue The value that the stat changed from
     */
    StatTimerChanged = 1,
    /**
     * Called when a stat changes, for any reason
     * @param emitter The object this event is emitted from
     * @param stat An IStat object, the stat that was affected
     * @param oldValue The value that the stat changed from
     * @param info An IStatChangeInfo object describing why the change occurred. It will always be passed with a `reason`
     */
    StatMaxChanged = 2,
    /**
     * Called when a stat changes, for any reason
     * @param emitter The object this event is emitted from
     * @param stat An IStat object, the stat that was affected
     * @param oldValue The value that the stat changed from
     * @param info An IStatChangeInfo object describing why the change occurred. It will always be passed with a `reason`
     */
    StatBonusChanged = 3,
    /**
     * Called when this entity gets or loses a status effect
     * @param emitter The object this event is emitted from
     * @param status The type of status effect that was gained or lost
     * @param hasStatus Whether the entity now has the status effect
     * @param reason The reason for the change
     */
    StatusChange = 4
}
export declare enum StatusEffectChangeReason {
    Gained = 0,
    Passed = 1,
    Treated = 2
}
export declare enum StatChangeReason {
    Normal = 0,
    ChangeTimer = 1,
    BonusChanged = 2,
    Upgrade = 3
}
export interface IStatChangeInfo<T = any> {
    /**
     * Uses `StatChangeReason.Normal` when not provided
     */
    reason?: StatChangeReason;
    /**
     * Whether this change is "important" (for example, used when actions affect stats)
     */
    important?: boolean;
}
export declare module IStatChangeInfo {
    /**
     * Creates a stat change info object
     * @param important Marked as "important" if true
     */
    function get<T = any>(important: boolean): IStatChangeInfo<T>;
    /**
     * Creates a stat change info object
     * @param reasonOrInfo A `StatChangeReason`, or an already created `IStatChangeInfo` object.
     * @param important Whether this change should be marked as important
     */
    function get<T = any>(reasonOrInfo: StatChangeReason | IStatChangeInfo, important?: boolean): IStatChangeInfo<T>;
}
export declare type IStatus = Writable<{
    [key in keyof typeof StatusType]: boolean;
}, keyof typeof StatusType>;
export declare enum Property {
    Credit = 0,
    Talked = 1
}
export declare type IProperties = Map<Property, any>;
export declare type EntityPlayerCreatureNpc = IPlayer | ICreature | INPC;
export declare enum EntityType {
    Player = 0,
    Creature = 1,
    NPC = 2
}
export declare enum AiType {
    Neutral = 0,
    Hostile = 1,
    Scared = 2,
    Random = 4,
    Hidden = 8,
    Fearless = 16,
    Tamed = 32,
    Follower = 64,
    Defender = 128,
    Fleeing = 256,
    Waiting = 512
}
