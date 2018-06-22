import { EntityType } from "entity/IEntity";
import { IStat, IStatBase, IStatFactory, IStats, Stat } from "entity/IStats";
import { Direction, FireType, MoveType, SfxType, StatusType } from "Enums";
import { ITile } from "tile/ITerrain";
import Emitter from "utilities/Emitter";
import { IVector2, IVector3 } from "utilities/math/IVector";
export default interface IBaseEntity extends IVector3, Emitter {
    entityType: EntityType;
    id: number;
    renamed?: string;
    fromX: number;
    fromY: number;
    moveType: MoveType | undefined;
    anim: number;
    stopNextMovement: boolean;
    direction: IVector2;
    facingDirection: Direction;
    stats: IStats;
    status: IStatus;
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
     *
     * Triggers `EntityEvent.StatBonusChanged`, then `EntityEvent.StatChanged`
     */
    setStatBonus(stat: Stat | IStat, bonus: number, info?: IStatChangeInfo): void;
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
     *
     * If the stat already has a timer going, the difference of the new and old timers
     * is subtracted from the time remaining.
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    setStatChangeTimer(stat: Stat | IStat, timer: number, amt?: number): void;
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
     *
     * Triggers `EntityEvent.StatusChange`
     */
    setStatus(status: StatusType, to: boolean): void;
    /**
     * Generator for status effects on the entity.
     */
    statuses(): IterableIterator<StatusType>;
    hasProperty(property: Property): boolean;
    addProperty(property: Property, value: any): void;
    getProperty<T>(property: Property): T | undefined;
    removeProperty(property: Property): boolean;
    on(event: EntityEvent.StatChanged, handler: (_: this, stat: IStat, oldValue: number, info: IStatChangeInfo) => any): this;
    on(event: EntityEvent.StatTimerChanged, handler: (_: this, stat: IStat, oldValue: number) => any): this;
    on(event: EntityEvent.StatMaxChanged, handler: (_: this, stat: IStat, oldValue: number) => any): this;
    on(event: EntityEvent.StatusChange, handler: (_: this, status: StatusType, hasStatus: boolean) => any): this;
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
    StatTimerChanged = 1,
    StatMaxChanged = 2,
    StatBonusChanged = 3,
    StatusChange = 4
}
export declare enum StatChangeReason {
    Normal = 0,
    ChangeTimer = 1,
    BonusChanged = 2
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
    /**
     * Any other data
     */
    extra?: T;
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
