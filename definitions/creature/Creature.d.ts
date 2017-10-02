import { AiType, ICreature, ICreatureDescription, IDamageInfo } from "creature/ICreature";
import { CreatureType, FacingDirection, IMessagePack, ItemType, MoveType, SfxType } from "Enums";
import { IPlayer } from "player/IPlayer";
import { IPropSerializable, IUnserializedCallback } from "save/ISerializer";
export default class Creature implements ICreature, IPropSerializable, IUnserializedCallback {
    aberrant?: boolean;
    ai: AiType;
    anim: number;
    chickenEggCounter?: number;
    goatMilkCounter?: number;
    direction: FacingDirection;
    enemy?: number;
    enemyAttempts?: number;
    fromX: number;
    fromY: number;
    happiness?: number;
    hp: number;
    loot?: ItemType[];
    maxhp: number;
    moveType: MoveType | undefined;
    renamed?: string;
    respawned?: boolean;
    shouldSkipNextUpdate: boolean;
    stopNextMovement?: boolean;
    type: CreatureType;
    x: number;
    y: number;
    z: number;
    id: number;
    private _movementFinishTime;
    private _inFov;
    private _description;
    constructor(creatureType?: CreatureType, x?: number, y?: number, z?: number, aberrant?: boolean);
    description(): ICreatureDescription | undefined;
    isHidden(): boolean;
    isDefender(): boolean;
    getInspectMessage(player: IPlayer): IMessagePack;
    checkForBurn(moveType?: MoveType): boolean;
    isTamed(): boolean;
    tame(player: IPlayer): boolean;
    release(): boolean;
    pet(): boolean;
    skipNextUpdate(): void;
    isInFov(): boolean;
    setInFov(inFov: boolean): void;
    getMoveType(): MoveType;
    setMoveType(moveType: MoveType): void;
    getMovementProgress(): number;
    getMovementFinishTime(): number | undefined;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number): void;
    update(): boolean;
    moveTo(x: number, y: number, z: number): boolean;
    canSwapWith(player: IPlayer): boolean;
    damage(damageInfo: IDamageInfo): number | undefined;
    getSerializationProperties(_: string): string[];
    onUnserialized(): void;
    private findPath(result);
    private checkCreatureMove(tileX, tileY, tileZ, moveType, isFinalMove?, ignorePlayer?);
    private findPlayersWithinRadius(x, y, z, radius);
    private processAttack(description, moveType, enemy);
    private processMovement(description, moveType, enemy, nearestPlayer);
    private processRandomAiChanges();
    private processSpecialAbilities(enemy);
}