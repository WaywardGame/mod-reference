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
import { ICreature } from "entity/creature/ICreature";
import IEntity, { EntityPlayerCreatureNpc, EntityType, IProperties, IStatChangeInfo, IStatus, MoveType, Property, StatChangeReason, StatusEffectChangeReason, StatusType } from "entity/IEntity";
import { IStat, IStatBase, IStats, Stat } from "entity/IStats";
import { INPC } from "entity/npc/INPC";
import IPlayer from "entity/player/IPlayer";
import StatFactory from "entity/StatFactory";
import { FireType } from "game/IGame";
import { ItemType } from "item/IItem";
import Translation from "language/Translation";
import { StatType } from "renderer/INotifier";
import { ITile } from "tile/ITerrain";
import Emitter from "utilities/Emitter";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
export default abstract class Entity extends Emitter implements IEntity {
    static is(entity: IEntity | undefined, entityType: EntityType.NPC): entity is INPC;
    static is(entity: IEntity | undefined, entityType: EntityType.Creature): entity is ICreature;
    static is(entity: IEntity | undefined, entityType: EntityType.Player): entity is IPlayer;
    static isNot(entity: IEntity | undefined, entityType: EntityType.NPC): entity is Exclude<EntityPlayerCreatureNpc, INPC>;
    static isNot(entity: IEntity | undefined, entityType: EntityType.Creature): entity is Exclude<EntityPlayerCreatureNpc, ICreature>;
    static isNot(entity: IEntity | undefined, entityType: EntityType.Player): entity is Exclude<EntityPlayerCreatureNpc, IPlayer>;
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
    getStat<Staty extends IStatBase | undefined = IStat | undefined>(stat: Stat, allowFailure?: boolean): Staty & (Staty extends IStatBase ? {
        base: Staty;
    } : undefined);
    getStatInternal(stat: Stat | IStat): IStatBase;
    getStatInternal(stat: Stat | IStat, allowFailure: true): IStatBase | undefined;
    getStatInternal(stat: Stat | IStat, allowFailure: boolean): IStatBase | undefined;
    getStatValue(stat: Stat | IStat): number;
    setStat(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    reduceStat(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    increaseStat(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    setStatBonus(stat: Stat | IStat, bonus: number, info?: StatChangeReason | IStatChangeInfo): void;
    getStatMax(stat: Stat | IStat): number | undefined;
    setStatMax(stat: Stat | IStat, amount: number): void;
    setStatChangeTimer(stat: Stat | IStat, timer: number, amt?: number): void;
    setStatAndMax(stat: Stat | IStat, max: number, current: number): void;
    updateStats(): void;
    hasStatus(status: StatusType): boolean;
    setStatus(status: StatusType, hasStatusEffect: boolean, reason: StatusEffectChangeReason): void;
    statuses(): IterableIterator<StatusType>;
    getTile(): ITile;
    getPoint(): IVector3;
    getFacingPoint(): IVector3;
    getFacingTile(): ITile;
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
