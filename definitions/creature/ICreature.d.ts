import IBaseEntity from "entity/IBaseEntity";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { AiType, EntityType } from "entity/IEntity";
import { CreatureType, DamageType, Defense, IModdable, IObject, IRGB, ItemType, ItemTypeGroup, LootGroupType, MoveType, StatusType } from "Enums";
import { IItem } from "item/IItem";
import { IMessagePack } from "language/IMessages";
import { IPlayer } from "player/IPlayer";
export interface ICreature extends IBaseEntity, IObject<CreatureType> {
    entityType: EntityType.Creature;
    ai: AiType;
    anim: number;
    loot?: ItemType[];
    aberrant?: boolean;
    respawned?: boolean;
    enemy?: number;
    enemyIsPlayer?: boolean;
    enemyAttempts?: number;
    description(): ICreatureDescription | undefined;
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
    setMoveType(moveType: MoveType): void;
    getMovementFinishTime(): number | undefined;
    update(): boolean;
    moveTo(x: number, y: number, z: number): boolean;
    canSwapWith(player: IPlayer): boolean;
    getOwner(): IPlayer | undefined;
    initializeStats(hp: number, maxhp?: number): void;
}
export interface ICreatureOld extends ICreature {
    hp: number;
    maxhp: number;
    happiness?: number;
    chickenEggCounter?: number;
    goatMilkCounter?: number;
}
export declare enum SpawnGroup {
    Any = 0,
    Guardians = 1,
    Water = 2,
    WaterCave = 3,
    Cave = 4,
    Night = 5
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
    Wet = 10
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
    acceptedItems?: Array<ItemType | ItemTypeGroup>;
    lightSource?: boolean;
    noStumble?: boolean;
    particlesOnMove?: boolean;
}
export interface ICreatureLoot {
    item: ItemType;
    chance?: number;
}
export interface IDamageInfo {
    human?: IBaseHumanEntity;
    amount: number;
    type: DamageType;
    weaponName?: string;
    creature?: ICreature;
    skipMilestones?: boolean;
    legacy?: boolean;
    damageMessage?: string;
    soundDelay?: number;
}
