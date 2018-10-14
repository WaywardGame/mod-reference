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
import IBaseEntity, { IProperties, IStatChangeInfo, IStatus, Property, StatChangeReason } from "entity/IBaseEntity";
import { EntityType } from "entity/IEntity";
import { IStat, IStatBase, IStats, Stat } from "entity/IStats";
import StatFactory from "entity/StatFactory";
import { Direction, FireType, MoveType, SfxType, StatusType } from "Enums";
import Translation from "language/Translation";
import { ITile } from "tile/ITerrain";
import Emitter from "utilities/Emitter";
import { IVector2, IVector3 } from "utilities/math/IVector";
export default abstract class BaseEntity extends Emitter implements IBaseEntity {
    entityType: EntityType;
    id: number;
    renamed?: string;
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
    protected _movementFinishTime: number | undefined;
    private _inFov;
    constructor();
    abstract getName(): Translation;
    initStat(factory: StatFactory): void;
    hasStat(stat: Stat): boolean;
    removeStat(stat: Stat): void;
    getStat<StatType extends IStatBase | undefined = IStat | undefined>(stat: Stat, allowFailure?: boolean): StatType & (StatType extends IStatBase ? {
        base: StatType;
    } : undefined);
    getStatInternal(stat: Stat | IStat): IStatBase;
    getStatInternal(stat: Stat | IStat, allowFailure: true): IStatBase | undefined;
    getStatInternal(stat: Stat | IStat, allowFailure: boolean): IStatBase | undefined;
    getStatValue(stat: Stat | IStat): number;
    setStat(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    reduceStat(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    increaseStat(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    setStatBonus(stat: Stat | IStat, bonus: number, info?: IStatChangeInfo): void;
    getStatMax(stat: Stat | IStat): number | undefined;
    setStatMax(stat: Stat | IStat, amount: number): void;
    setStatChangeTimer(stat: Stat | IStat, timer: number, amt?: number): void;
    setStatAndMax(stat: Stat | IStat, max: number, current: number): void;
    updateStats(): void;
    hasStatus(status: StatusType): boolean;
    setStatus(status: StatusType, to: boolean): void;
    statuses(): IterableIterator<StatusType>;
    getTile(): ITile;
    getPoint(): IVector3;
    getFacingPoint(): IVector3;
    getFacingTile(): ITile;
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
    hasProperty(property: Property): boolean;
    addProperty(property: Property, value: any): void;
    getProperty<T>(property: Property): T | undefined;
    removeProperty(property: Property): boolean;
}
