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
import IEntity, { AiType, DamageType, Defense, EntityType, MoveType, StatusType } from "entity/IEntity";
import { IPlayer } from "entity/player/IPlayer";
import { IInspectable } from "game/inspection/Inspections";
import { IObject } from "game/IObject";
import { IItem, ItemType, ItemTypeGroup } from "item/IItem";
import { LootGroupType } from "item/LootGroups";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IModdable } from "mod/ModRegistry";
import { TileEventType } from "tile/ITileEvent";
import { IRGB } from "utilities/Color";
import { ISafeFn } from "utilities/FromDescription";
export declare enum CreatureType {
    Slime = 0,
    JellyCube = 1,
    GiantSpider = 2,
    Bear = 3,
    Rabbit = 4,
    Snake = 5,
    GiantRat = 6,
    Rat = 7,
    VampireBat = 8,
    GreyWolf = 9,
    Imp = 10,
    Bogling = 11,
    LivingRock = 12,
    Shark = 13,
    Zombie = 14,
    Skeleton = 15,
    PirateGhost = 16,
    TimeSkitter = 17,
    Chicken = 18,
    TrapdoorSpider = 19,
    FireElemental = 20,
    Cod = 21,
    Hobgoblin = 22,
    LivingMushroom = 23,
    Kraken = 24,
    Blindfish = 25,
    Harpy = 26,
    AcidSpitterDemon = 27,
    SkeletalMage = 28,
    Blood = 29,
    ClawWorm = 30,
    Drake = 31,
    Sandcat = 32,
    WaterBlood = 33,
    LavaBeetle = 34,
    Goat = 35,
    SlitherSucker = 36,
    Mudskipper = 37,
    Scorpion = 38,
    Rattlesnake = 39,
    AntelopeJackrabbit = 40,
    RedSnapper = 41,
    Walleye = 42,
    Wisp = 43
}
export interface ICreature extends IEntity, IObject<CreatureType>, IInspectable {
    entityType: EntityType.Creature;
    fromDescription: ISafeFn<ICreatureDescription, undefined>;
    ai: AiType;
    anim: number;
    loot?: ItemType[];
    aberrant?: boolean;
    respawned?: boolean;
    enemy?: number;
    enemyIsPlayer?: boolean;
    enemyAttempts?: number;
    hitchedTo?: number;
    /**
     * @param article Whether to include an article for the name of the creature. Uses the article rules on the language. Defaults to `true`.
     * @param count The number of this creature that you're getting the name of. Defaults to `1`.
     *
     * Examples:
     * - `creature.getName()` // "an acid spitter demon"
     * - `creature.getName(false)` // "acid spitter demon"
     * - `creature.getName(undefined, 3)` // "acid spitter demons"
     */
    getName(article?: boolean, count?: number): Translation;
    description(): ICreatureDescription | undefined;
    isHidden(): boolean;
    isDefender(): boolean;
    isValid(): boolean;
    checkForBurn(moveType?: MoveType): boolean;
    damage(damageInfo: IDamageInfo): number | undefined;
    isTamed(): boolean;
    tame(player: IPlayer): boolean;
    release(): boolean;
    increaseTamedCount(): void;
    skipNextUpdate(): void;
    onUnserialized(): void;
    offer(items: IItem[]): IItem | undefined;
    hasAi(aiType: AiType): boolean;
    setMoveType(moveType: MoveType): void;
    getMovementFinishTime(): number | undefined;
    update(): boolean;
    moveTo(x: number, y: number, z: number): boolean;
    checkUnder(checkX?: number, checkY?: number): boolean;
    canSwapWith(player: IPlayer): boolean;
    getOwner(): IPlayer | undefined;
    processSpecialAbilities(enemy: IPlayer | ICreature | undefined, bypass?: boolean): boolean;
    increaseWaste(item: IItem): void;
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
    Seawater = 2,
    CaveWater = 3,
    Cave = 4,
    Night = 5,
    StrongGuardians = 6,
    FreshWater = 7,
    EasyNight = 8
}
export declare enum TileGroup {
    None = 0,
    Default = 1,
    DefaultWithLava = 2,
    DefaultWithWater = 3,
    DeepSeawater = 4,
    DeepWater = 5,
    ShallowWater = 6,
    Water = 7,
    Flying = 8,
    Ghost = 9,
    Desert = 10,
    Lava = 11,
    Wet = 12,
    Ground = 13,
    All = 14,
    Seawater = 15,
    FreshWater = 16,
    Swamp = 17
}
export interface ICreatureDescription extends IModdable {
    minhp: number;
    maxhp: number;
    minatk: number;
    maxatk: number;
    defense: Defense;
    damageType: DamageType;
    ai: AiType;
    moveType: MoveType;
    /**
     * A percentage number for the amount of time the creature should skip movement
     * 100 means the creature always skips their movement
     */
    skipMovementChance?: number;
    fishable?: boolean;
    blood?: IRGB;
    aberrantBlood?: IRGB;
    loot?: ICreatureLoot[];
    aberrantLoot?: ICreatureLoot[];
    spawnTiles: TileGroup;
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
    waterAnimations?: boolean;
    tamingDifficulty?: number;
    acceptedItems?: Array<ItemType | ItemTypeGroup>;
    lightSource?: boolean;
    lightColor?: IRGB;
    noStumble?: boolean;
    particlesOnMove?: boolean;
    providesFire?: boolean;
    canTrample?: boolean;
    helpPlants?: boolean;
    speed?: number;
    disableHitching?: boolean;
    tileMissChance?: OptionalDescriptions<TileGroup, number>;
    waste?: IWaste;
}
export interface ICreatureLoot {
    item: ItemType;
    chance?: number;
}
export interface IWaste {
    event: TileEventType;
    timer: number;
}
export interface IDamageInfo {
    human?: Human;
    amount: number;
    type: DamageType;
    weaponName?: Message | Translation;
    creature?: ICreature;
    skipMilestones?: boolean;
    legacy?: boolean;
    damageMessage?: Message | Translation;
    soundDelay?: number;
}
