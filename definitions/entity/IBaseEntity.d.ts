import { IStat, IStatBase, IStatFactory, IStats, Stat } from "entity/IStats";
import { FacingDirection, FireType, MoveType, SfxType, StatusType } from "Enums";
import { ITile } from "tile/ITerrain";
import Emitter from "utilities/Emitter";
import { IPoint, IPointZ } from "utilities/math/IPoint";
export default interface IBaseEntity extends IPointZ, Emitter {
    id: number;
    renamed?: string;
    fromX: number;
    fromY: number;
    moveType: MoveType | undefined;
    anim: number;
    stopNextMovement: boolean;
    direction: IPoint;
    facingDirection: FacingDirection;
    stats: IStats;
    status: IStatus;
    getFacingPoint(): IPointZ;
    getFacingTile(): ITile;
    getMovementFinishTime(): number | undefined;
    getMovementProgress(): number;
    getPoint(): IPointZ;
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
     * Sets the given `Stat`'s value to the given amount. Triggers `EntityEvent.StatChange`
     * @param stat The `Stat` to set.
     * @param amount The amount to set the value to.
     * @param reason Why this stat is changing.
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    setStat(stat: Stat | IStat, amount: number): boolean;
    /**
     * Reduces the given `Stat` by the given amount. Triggers `EntityEvent.StatChange`
     * @param stat The `Stat` to reduce.
     * @param amount The amount to reduce by.
     *
     * An alias for `increaseStat`, negating the given amount.
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    reduceStat(stat: Stat | IStat, amount: number): boolean;
    /**
     * Increases the given `Stat` by the given amount. Triggers `EntityEvent.StatChange`
     * @param stat The `Stat` to increase.
     * @param amount The amount to increase by.
     *
     * An alias for `setStat(stat, stat.value + amount)`
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    increaseStat(stat: Stat | IStat, amount: number): boolean;
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
    hasProperty(property: Property): boolean;
    addProperty(property: Property, value: any): void;
    getProperty<T>(property: Property): T | undefined;
    removeProperty(property: Property): boolean;
    on(event: EntityEvent.StatChanged, handler: (_: this, stat: IStat, oldValue: number, reason: StatChangeReason) => any): this;
    on(event: EntityEvent.StatTimerChanged, handler: (_: this, stat: IStat, oldValue: number) => any): this;
    on(event: EntityEvent.StatMaxChanged, handler: (_: this, stat: IStat, oldValue: number) => any): this;
    on(event: EntityEvent.StatusChange, handler: (_: this, status: StatusType, hasStatus: boolean) => any): this;
}
export declare enum EntityEvent {
    StatChanged = 0,
    StatTimerChanged = 1,
    StatMaxChanged = 2,
    StatusChange = 3,
}
export declare enum StatChangeReason {
    Normal = 0,
    ChangeTimer = 1,
}
export declare type IStatus = Writable<{
    [key in keyof typeof StatusType]: boolean;
}, keyof typeof StatusType>;
export declare enum Property {
    Credit = 0,
}
export declare type IProperties = Map<Property, any>;
