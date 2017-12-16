import { CreatureType, DamageType, Defense, FacingDirection, IMessagePack, IModdable, IObject, IPointZ, IRGB, ItemType, ItemTypeGroup, LootGroupType, MoveType, SfxType, StatusType } from "Enums";
import { IItem } from "item/IItem";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
export interface ICreature extends IObject<CreatureType>, IPointZ {
    fromX: number;
    fromY: number;
    direction: FacingDirection;
    ai: AiType;
    anim: number;
    hp: number;
    maxhp: number;
    loot?: ItemType[];
    aberrant?: boolean;
    respawned?: boolean;
    enemy?: number;
    enemyIsPlayer?: boolean;
    enemyAttempts?: number;
    happiness?: number;
    chickenEggCounter?: number;
    goatMilkCounter?: number;
    stopNextMovement?: boolean;
    renamed?: string;
    description(): ICreatureDescription | undefined;
    getTile(): ITile;
    isHidden(): boolean;
    isDefender(): boolean;
    getInspectHealthMessage(player: IPlayer): IMessagePack;
    getInspectResistVulnerabilityMessage(player: IPlayer): IMessagePack | undefined;
    checkForBurn(moveType?: MoveType): boolean;
    damage(damageInfo: IDamageInfo): number | undefined;
    isTamed(): boolean;
    tame(player: IPlayer): boolean;
    release(): boolean;
    pet(): boolean;
    skipNextUpdate(): void;
    onUnserialized(): void;
    offer(items: IItem[]): IItem | undefined;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number): void;
    isInFov(): boolean;
    setInFov(inFov: boolean): void;
    getMoveType(): MoveType;
    setMoveType(moveType: MoveType): void;
    getMovementProgress(): number;
    getMovementFinishTime(): number | undefined;
    update(): boolean;
    moveTo(x: number, y: number, z: number): boolean;
    canSwapWith(player: IPlayer): boolean;
    getOwner(): IPlayer | undefined;
}
export declare enum SpawnGroup {
    Any = 0,
    Guardians = 1,
    Water = 2,
    WaterCave = 3,
    Cave = 4,
    Night = 5,
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
}
export declare enum SpawnableTiles {
    None = 0,
    Default = 1,
    DefaultWithLava = 2,
    DefaultWithWater = 3,
    DeepWater = 4,
    Water = 5,
    Flying = 6,
    Ghost = 7,
    Desert = 8,
    Lava = 9,
}
export interface ICreatureDescription extends IModdable {
    name?: string;
    minhp: number;
    maxhp: number;
    minatk: number;
    maxatk: number;
    defense: Defense;
    damageType: DamageType;
    ai: AiType;
    moveType: MoveType;
    fishable?: boolean;
    blood?: IRGB;
    aberrantBlood?: IRGB;
    loot?: ICreatureLoot[];
    spawnTiles: SpawnableTiles;
    spawnReputation?: number;
    spawnOnBenignity?: boolean;
    spawnGroup?: SpawnGroup[];
    makeNoise?: boolean;
    canCauseStatus?: StatusType[];
    lootGroup?: LootGroupType;
    jumpOver?: boolean;
    noCorpse?: boolean;
    respawn?: boolean;
    reputation: number;
    prefix?: string;
    suffix?: string;
    waterAnimations?: boolean;
    description?: string;
    tamingDifficulty?: number;
    acceptedItems?: [ItemType | ItemTypeGroup];
    lightSource?: boolean;
}
export interface ICreatureLoot {
    item: ItemType;
    chance?: number;
}
export interface IDamageInfo {
    player?: IPlayer;
    amount: number;
    type: DamageType;
    weaponName?: string;
    creature?: ICreature;
    skipMilestones?: boolean;
    legacy?: boolean;
    damageMessage?: string;
    soundDelay?: number;
}
