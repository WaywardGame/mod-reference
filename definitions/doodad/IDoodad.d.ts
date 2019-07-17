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
import { StatusType } from "entity/IEntity";
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
export interface IGroupDescription {
    name: string;
    prefix?: string;
    suffix?: string;
}
export interface IDoodadDoor extends Doodad {
    orientation: DoorOrientation;
}
export interface IDoodadDescription extends IObjectDescription, IModdable {
    actionTypes?: ActionType[];
    allowedTiles?: TerrainType[];
    blockDig?: boolean;
    blockJump?: boolean;
    blockLos?: boolean;
    blockMove?: boolean;
    burnsLike?: ItemType[];
    canBreak?: boolean;
    canGrow?: boolean;
    canGrowInCaves?: boolean;
    canStoke?: boolean;
    canTrampleWhenMature?: boolean;
    causesStatus?: StatusType[];
    damage?: number;
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
    Acid = 40,
    CaveEntrance = 41,
    WoodenDoorOpen = 42,
    WoodenGate = 43,
    WoodenGateOpen = 44,
    PoisonIvy = 45,
    WroughtIronChest = 46,
    IronChest = 47,
    OrnateWoodenChest = 48,
    SkeletalRemains = 49,
    ClayKiln = 50,
    LitClayKiln = 51,
    ClayCampfire = 52,
    LitClayCampfire = 53,
    ClayFurnace = 54,
    LitClayFurnace = 55,
    ClayWaterStill = 56,
    LitClayWaterStill = 57,
    SandstoneCampfire = 58,
    LitSandstoneCampfire = 59,
    SandstoneFurnace = 60,
    LitSandstoneFurnace = 61,
    SandstoneWaterStill = 62,
    LitSandstoneWaterStill = 63,
    StoneKiln = 64,
    LitStoneKiln = 65,
    WroughtIronAnvil = 66,
    IronAnvil = 67,
    MapleTree = 68,
    AppleTree = 69,
    SpruceTree = 70,
    CypressTree = 71,
    CoconutTree = 72,
    Lettuce = 73,
    PotatoPlant = 74,
    Carrots = 75,
    CornStalks = 76,
    CucumberPlant = 77,
    TomatoPlant = 78,
    Pumpkin = 79,
    SugarCaneStalks = 80,
    Wheat = 81,
    CopperChest = 82,
    CopperAnvil = 83,
    BarkTorchStand = 84,
    LitBarkTorchStand = 85,
    TallowTorchStand = 86,
    LitTallowTorchStand = 87,
    Item = 88,
    JoshuaTree = 89,
    SaguaroCactus = 90,
    AloeVera = 91,
    TallowCandle = 92,
    LitTallowCandle = 93,
    CottonBedroll = 94,
    FeatherBedroll = 95,
    Hammock = 96,
    LeafBedroll = 97,
    HitchingPost = 98,
    ClayBrickWell = 99,
    SandstoneWell = 100,
    StoneWell = 101
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
    Last = 413
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
