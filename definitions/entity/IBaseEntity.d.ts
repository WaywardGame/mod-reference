import { FacingDirection, FireType, MoveType, SfxType, StatusType } from "Enums";
import { ITile } from "tile/ITerrain";
import { IPoint, IPointZ } from "utilities/math/IPoint";
export default interface IBaseEntity extends IPointZ {
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
    initStat(factory: StatFactory): void;
    hasStat(stat: Stat): boolean;
    removeStat(stat: Stat): void;
    getStat<StatType extends IStatBase | undefined = IStat | undefined>(stat: Stat): StatType;
    setStat(stat: Stat | IStat, amount: number): boolean;
    setStatChangeTimer(stat: Stat | IStat, timer: number, amt?: number): void;
    setStatMax(stat: Stat | IStat, amount: number): void;
    reduceStat(stat: Stat | IStat, amount: number): boolean;
    increaseStat(stat: Stat | IStat, amount: number): boolean;
    hasStatus(status: StatusType): boolean;
    setStatus(status: StatusType, to: boolean): void;
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
    canSeeTile(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    on(event: EntityEvent.StatChanged, handler: (_: this, stat: IStat, oldValue: number, reason: StatChangeReason) => any): void;
    on(event: EntityEvent.StatTimerChanged, handler: (_: this, stat: IStat, oldValue: number) => any): void;
    on(event: EntityEvent.StatMaxChanged, handler: (_: this, stat: IStat, oldValue: number) => any): void;
    on(event: EntityEvent.StatusChange, handler: (_: this, status: StatusType, hasStatus: boolean) => any): void;
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
export declare enum Stat {
    Health = 0,
    Stamina = 1,
    Hunger = 2,
    Thirst = 3,
    /**
     * Used for chicken eggs and goat milk
     */
    Produce = 4,
    /**
     * Used for tamed animals
     */
    Happiness = 5,
}
export declare const STAT_COLOR: {
    readonly Health: string;
    readonly Stamina: string;
    readonly Hunger: string;
    readonly Thirst: string;
    readonly Produce: string;
    readonly Happiness: string;
};
export interface IStats {
    [key: string]: IStat;
}
export declare class StatFactory {
    private result;
    constructor(type: Stat, value?: number);
    /**
     * Sets the max value this stat can be
     */
    setMax(max: number): this;
    /**
     * Sets the stat to change over time.
     * @param timer The number of turns that should pass before the stat should change.
     * @param amt The amount the stat should change, whenever the timer completes.
     *
     * Stat timers are managed by their parent Entity. Currently, only players support `changeTimer`
     */
    setChangeTimer(timer: number, amt?: number): this;
    /**
     * Initializes the `IStat` constructed by this factory on the given entity.
     */
    initializeOn(entity: IBaseEntity): void;
    get(): IStatBase;
}
export declare module StatFactory {
    /**
     * Stats are stored by their names, not their ordinal. Therefore, to access a stat, you must first
     * get the name of the stat. `entity.stats[Stat[<your stat here>]]`. This is unweildy especially
     * for `IStats` construction. This function is provided to alleviate that.
     * @param stats A list of `StatFactory` instances to construct the `IStats` instance from.
     *
     * When passing multiple `StatFactory`s of the same `Stat`, the latter will replace the former.
     */
    function getStats(...stats: Array<StatFactory | undefined>): IStats;
}
export interface IStatBase {
    type: Stat;
    value: number;
    max?: number;
    /**
     * The number of turns remaining until the stat changes.
     */
    changeTimer?: number;
    /**
     * The value `changeTimer` will be reset to when it reaches `0`.
     */
    nextChangeTimer?: number;
    /**
     * The amount the value should change by when the `changeTimer` reaches `0`.
     * When not provided, defaults to `1`.
     */
    changeAmount?: number;
}
export interface IStatMax extends IStatBase {
    max: number;
}
export interface IStatChanging extends IStatBase {
    changeAmount: number;
    changeTimer: number;
    nextChangeTimer: number;
}
export declare type IStat = IStatBase | IStatMax | IStatChanging;
export declare type IStatus = {
    [key in keyof typeof StatusType]: boolean;
};
