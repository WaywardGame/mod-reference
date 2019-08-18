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
import Doodad from "doodad/Doodad";
import { ActionType } from "entity/action/IAction";
import { ICausesDamage, ICausesStatusEffect } from "entity/IEntity";
import { SkillType } from "entity/IHuman";
import { ILootItem } from "game/ILoot";
import { IObjectDescription, IObjectOptions } from "game/IObject";
import { IItemLegendary, ItemType } from "item/IItem";
import Item from "item/Item";
import { IModdable } from "mod/ModRegistry";
import { TerrainType } from "tile/ITerrain";
import { IRGB } from "utilities/Color";
export interface IDoodadOptions extends IObjectOptions {
    gatherReady?: boolean;
    stillContainer?: Item;
    gfx?: number;
    spread?: number;
    treasure?: boolean;
    weight?: number;
    legendary?: IItemLegendary;
    disassembly?: Item[];
    ownerIdentifier?: string;
    step?: number;
    hitchedCreature?: number;
}
export declare type IDoodadOld = Partial<Doodad> & {
    growInto?: DoodadType;
};
export interface IDoodadGroupDescription {
    name: string;
    prefix?: string;
    suffix?: string;
}
export interface IDoodadDoor extends Doodad {
    orientation: DoorOrientation;
}
export interface IDoodadDescription extends IObjectDescription, IModdable, ICausesStatusEffect, ICausesDamage {
    actionTypes?: ActionType[];
    allowedTiles?: TerrainType[];
    blockJump?: boolean;
    blockLos?: boolean;
    blockMove?: boolean;
    burnsLike?: ItemType[];
    canBreak?: boolean;
    canGrow?: boolean;
    canGrowInCaves?: boolean;
    canStoke?: boolean;
    canTrampleWhenMature?: boolean;
    disableDrop?: boolean;
    gather?: IDoodadLoot;
    gatherCanHurtHands?: boolean;
    gatherSkillUse?: SkillType;
    graphicVariation?: boolean;
    group?: DoodadTypeGroup[];
    growthCycle?: boolean;
    growthParticles?: IDoodadParticles;
    harvest?: IDoodadLoot;
    isAnimated?: boolean;
    isClosedDoor?: boolean;
    isDoor?: boolean;
    isFence?: boolean;
    isFlammable?: boolean;
    isFungi?: boolean;
    isGate?: boolean;
    isLocked?: boolean;
    isTall?: boolean;
    isTrap?: boolean;
    isTree?: boolean;
    isWall?: boolean;
    isWaterSource?: boolean;
    lightColor?: IRGB;
    lit?: DoodadType;
    particles?: IRGB;
    pickUp?: ItemType[];
    providesFire?: boolean;
    providesLight?: number;
    reduceDurabilityOnGather?: boolean;
    repairItem?: ItemType;
    revert?: DoodadType;
    spawnOnTerrain?: TerrainType[];
    spreadMax?: number;
    tier?: OptionalDescriptions<DoodadTypeGroup, number>;
    trapDamage?: number;
    waterStill?: boolean;
    durability?: number;
}
export interface IDoodadParticles {
    [index: number]: IRGB;
}
export interface IDoodadLoot {
    [index: number]: ILootItem[] | undefined;
}
export declare enum DoodadType {
    WoodenDoor = 0,
    WoodenFence = 1,
    WoodenWall = 2,
    ClayBrickWall = 3,
    SandstoneWall = 4,
    StoneWall = 5,
    SetExplosiveTrap = 6,
    SetDeadfall = 7,
    SetSnare = 8,
    SetHobgoblinSnare = 9,
    SolarStill = 10,
    WoodenChest = 11,
    LockedWoodenChest = 12,
    CreatureIdol = 13,
    Grass = 14,
    Clematis = 15,
    MilkThistles = 16,
    ButtonMushrooms = 17,
    FlyAmanita = 18,
    Switchgrass = 19,
    Badderlocks = 20,
    Chives = 21,
    Pineapple = 22,
    PileOfRocks = 23,
    RaspberryBush = 24,
    Beggarticks = 25,
    Cotton = 26,
    PricklyPears = 27,
    Tumbleweed = 28,
    StoneWaterStill = 29,
    LitStoneWaterStill = 30,
    StoneCampfire = 31,
    LitStoneCampfire = 32,
    SandstoneKiln = 33,
    LitSandstoneKiln = 34,
    StoneFurnace = 35,
    LitStoneFurnace = 36,
    PoleTorchStand = 37,
    LitPoleTorchStand = 38,
    StoneAnvil = 39,
    CaveEntrance = 40,
    WoodenDoorOpen = 41,
    WoodenGate = 42,
    WoodenGateOpen = 43,
    PoisonIvy = 44,
    WroughtIronChest = 45,
    IronChest = 46,
    OrnateWoodenChest = 47,
    SkeletalRemains = 48,
    ClayKiln = 49,
    LitClayKiln = 50,
    ClayCampfire = 51,
    LitClayCampfire = 52,
    ClayFurnace = 53,
    LitClayFurnace = 54,
    ClayWaterStill = 55,
    LitClayWaterStill = 56,
    SandstoneCampfire = 57,
    LitSandstoneCampfire = 58,
    SandstoneFurnace = 59,
    LitSandstoneFurnace = 60,
    SandstoneWaterStill = 61,
    LitSandstoneWaterStill = 62,
    StoneKiln = 63,
    LitStoneKiln = 64,
    WroughtIronAnvil = 65,
    IronAnvil = 66,
    MapleTree = 67,
    AppleTree = 68,
    SpruceTree = 69,
    CypressTree = 70,
    CoconutTree = 71,
    Lettuce = 72,
    PotatoPlant = 73,
    Carrots = 74,
    CornStalks = 75,
    CucumberPlant = 76,
    TomatoPlant = 77,
    Pumpkin = 78,
    SugarCaneStalks = 79,
    Wheat = 80,
    CopperChest = 81,
    CopperAnvil = 82,
    BarkTorchStand = 83,
    LitBarkTorchStand = 84,
    TallowTorchStand = 85,
    LitTallowTorchStand = 86,
    Item = 87,
    JoshuaTree = 88,
    SaguaroCactus = 89,
    AloeVera = 90,
    TallowCandle = 91,
    LitTallowCandle = 92,
    CottonBedroll = 93,
    FeatherBedroll = 94,
    Hammock = 95,
    LeafBedroll = 96,
    HitchingPost = 97,
    ClayBrickWell = 98,
    SandstoneWell = 99,
    StoneWell = 100
}
export declare enum DoodadTypeGroup {
    Invalid = 400,
    LitCampfire = 401,
    LitFurnace = 402,
    LitKiln = 403,
    LitWaterStill = 404,
    Anvil = 405,
    Well = 406,
    Hitch = 407,
    GatheredPlant = 408,
    FireSource = 409,
    LitTorch = 410,
    LightDevice = 411,
    LightSource = 412,
    LitStructure = 413,
    Last = 414
}
export declare enum DoorOrientation {
    Default = 0,
    Vertical = 1
}
export declare enum GrowingStage {
    Germinating = 0,
    Seedling = 1,
    Vegetative = 2,
    Budding = 3,
    Flowering = 4,
    Ripening = 5,
    Dead = 6
}
