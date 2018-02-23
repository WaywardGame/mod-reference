import { FacingDirection, FireType, IPoint, IPointZ, MoveType, SfxType } from "Enums";
import { ITile } from "tile/ITerrain";
export interface IBaseEntity extends IPointZ {
    id: number;
    renamed?: string;
    fromX: number;
    fromY: number;
    moveType: MoveType | undefined;
    anim: number;
    stopNextMovement: boolean;
    direction: IPoint;
    facingDirection: FacingDirection;
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
}
