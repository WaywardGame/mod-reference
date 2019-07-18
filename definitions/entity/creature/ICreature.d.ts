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
import Creature from "entity/creature/Creature";
import Human from "entity/Human";
import { AiType, DamageType, Defense, MoveType, StatusType } from "entity/IEntity";
import { ItemType, ItemTypeGroup } from "item/IItem";
import { LootGroupType } from "item/LootGroups";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IModdable } from "mod/ModRegistry";
import { TileEventType } from "tile/ITileEvent";
import { IRGB } from "utilities/Color";
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
    ClawWorm = 29,
    Drake = 30,
    Sandcat = 31,
    LavaBeetle = 32,
    Goat = 33,
    SlitherSucker = 34,
    Mudskipper = 35,
    Scorpion = 36,
    Rattlesnake = 37,
    AntelopeJackrabbit = 38,
    RedSnapper = 39,
    Walleye = 40,
    Wisp = 41
}
export interface ICreatureOld extends Creature {
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
    creature?: Creature;
    skipMilestones?: boolean;
    legacy?: boolean;
    damageMessage?: Message | Translation;
    soundDelay?: number;
}
