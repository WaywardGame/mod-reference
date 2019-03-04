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
import { IDoodad } from "doodad/IDoodad";
import { ISerializedTranslation } from "language/Translation";
import { IVector2, IVector3 } from "utilities/math/IVector";
export declare enum TerrainMask {
    None = 0,
    Type = 536870911,
    Tilled = 536870912,
    Wall = 1073741824,
    Fence = 2147483648
}
export declare enum SpriteBatchLayer {
    Corpse = 0,
    Item = 1,
    Creature = 2,
    CreatureFlying = 3,
    Overlay = 4,
    OverTrees = 5
}
export declare enum WorldZ {
    Min = 0,
    Cave = 0,
    Overworld = 1,
    Max = 1
}
export declare enum AttackType {
    Melee = 0,
    HandToHand = 1,
    Shoot = 2,
    Sling = 3,
    Fire = 4,
    ThrowItem = 5
}
export declare enum MoveType {
    None = 0,
    Water = 1,
    ShallowWater = 2,
    Land = 4,
    Tree = 8,
    Mountain = 16,
    Fire = 32,
    BreakDoodads = 64,
    WetLand = 128,
    Flying = 15
}
export declare enum DamageType {
    Blunt = 1,
    Slashing = 2,
    Piercing = 4,
    Fire = 8,
    True = 16
}
export declare class Resistances {
    [index: number]: number;
    constructor(...args: any[]);
}
export declare class Vulnerabilities {
    [index: number]: number;
    constructor(...args: any[]);
}
export declare class Defense {
    base: number;
    resist: Resistances;
    vulnerable: Vulnerabilities;
    constructor(base: number, resist: Resistances, vulnerable: Vulnerabilities);
}
export declare enum DoorOrientation {
    Default = 0,
    Vertical = 1
}
export declare enum Direction {
    None = -1,
    East = 0,
    North = 1,
    West = 2,
    South = 3
}
export declare enum SaveType {
    InGame = 0,
    Death = 1,
    Quit = 2,
    BackToMainMenu = 3,
    Multiplayer = 4,
    Challenge = 5
}
export declare enum LootGroupType {
    Low = 0,
    High = 1,
    Treasure = 2,
    SeaTreasure = 3,
    CaveChest = 4,
    FireElemental = 5,
    VeryHigh = 6
}
export declare enum EquipType {
    None = 0,
    Held = 1,
    Legs = 2,
    Chest = 3,
    Head = 4,
    Belt = 5,
    Feet = 6,
    Neck = 7,
    Hands = 8,
    Back = 9,
    LeftHand = 10,
    RightHand = 11
}
export declare enum RecipeLevel {
    Simple = 0,
    Intermediate = 1,
    Advanced = 2,
    Expert = 3
}
export declare enum ItemType {
    None = 0,
    Copal = 1,
    AnimalSkull = 2,
    StoneArrow = 3,
    StoneArrowhead = 4,
    PileOfAsh = 5,
    BarkLeggings = 6,
    BarkShield = 7,
    BarkTunic = 8,
    Bone = 9,
    Branch = 10,
    CactusSpines = 11,
    Charcoal = 12,
    CobblestoneFlooring = 13,
    CookedMeat = 14,
    Earthworm = 15,
    Feather = 16,
    Fertilizer = 17,
    WaterskinOfSeawater = 18,
    FirePlough = 19,
    BeggartickSeeds = 20,
    Fossil = 21,
    GoldCoins = 22,
    GoldenChalice = 23,
    GoldenRing = 24,
    GoldenSword = 25,
    GrassSeeds = 26,
    IronOre = 27,
    WoodenDowels = 28,
    LargeRock = 29,
    LeafBedroll = 30,
    LeatherHide = 31,
    Leaves = 32,
    Limestone = 33,
    Log = 34,
    StoneMortarAndPestle = 35,
    ButtonMushrooms = 36,
    Nopal = 37,
    Peat = 38,
    Sandstone = 39,
    PileOfGravel = 40,
    PileOfBeachSand = 41,
    WoodenArrow = 42,
    StoneAxe = 43,
    Bandage = 44,
    WovenFabric = 45,
    CactusNeedle = 46,
    StoneShovel = 47,
    WoodenSpear = 48,
    Suture = 49,
    Raft = 50,
    RawMeat = 51,
    Raspberries = 52,
    FlyAmanita = 53,
    Rope = 54,
    MapleSeeds = 55,
    Badderlocks = 56,
    SharpGlass = 57,
    SharpRock = 58,
    Skullcap = 59,
    SmoothRock = 60,
    Soil = 61,
    StoneSpear = 62,
    Stones = 63,
    StoneWall = 64,
    String = 65,
    StrippedBark = 66,
    TannedLeather = 67,
    Tannin = 68,
    MilkThistleSeeds = 69,
    TreeBark = 70,
    HoneyFungus = 71,
    ClematisVine = 72,
    Twigs = 73,
    Waterskin = 74,
    WoodenPole = 75,
    PeatBandage = 76,
    Bow = 77,
    BowDrill = 78,
    FishingNet = 79,
    RawCod = 80,
    CookedCod = 81,
    StoneCampfire = 82,
    VineWhip = 83,
    PileOfSnow = 84,
    BarkTorch = 85,
    LitBarkTorch = 86,
    HandDrill = 87,
    SmallBag = 88,
    Shale = 89,
    SharpenedBone = 90,
    Grindstone = 91,
    RawFishSteak = 92,
    CookedFishSteak = 93,
    WaterskinOfDesalinatedWater = 94,
    BoatPaddle = 95,
    BullBoat = 96,
    RefinedSand = 97,
    Spyglass = 98,
    Flask = 99,
    RawClay = 100,
    RawClayBlowpipe = 101,
    ClayBlowpipe = 102,
    LeatherBelt = 103,
    LeatherTunic = 104,
    LeatherBoots = 105,
    LeatherCap = 106,
    LeatherGorget = 107,
    LeatherPants = 108,
    LeatherGloves = 109,
    StoneFurnace = 110,
    SandstoneKiln = 111,
    IronTongs = 112,
    Talc = 113,
    TalcumPowder = 114,
    WoodenSandCastFlask = 115,
    Lens = 116,
    PlantRoots = 117,
    LockPick = 118,
    BoneNeedle = 119,
    Pineapple = 120,
    TatteredMap = 121,
    Coal = 122,
    WroughtIron = 123,
    LimestonePowder = 124,
    IronIngot = 125,
    Backpack = 126,
    RottenMeat = 127,
    StoneHammer = 128,
    RawChicken = 129,
    CookedChicken = 130,
    StoneAnvil = 131,
    WoodenChest = 132,
    IronSword = 133,
    IronBreastplate = 134,
    IronBoots = 135,
    IronHelmet = 136,
    IronGorget = 137,
    IronGreaves = 138,
    IronGauntlets = 139,
    IronShield = 140,
    SandstoneWall = 141,
    SandstoneFlooring = 142,
    SpiderSilk = 143,
    AnimalFat = 144,
    AnimalFatTorch = 145,
    ClayFlakes = 146,
    GreenSand = 147,
    OldInstructionalScroll = 148,
    SlimeGelatin = 149,
    SlimeGlue = 150,
    CookedSpiderMeat = 151,
    SpiderMeat = 152,
    IronLockPick = 153,
    RottingVegetation = 154,
    Chives = 155,
    IronHammer = 156,
    IronSpear = 157,
    IronShovel = 158,
    IronDoubleAxe = 159,
    IronPickaxe = 160,
    Inkstick = 161,
    Coconut = 162,
    PalmLeaf = 163,
    Offal = 164,
    BoneFragments = 165,
    LitPoleTorch = 166,
    Cotton = 167,
    CottonSeeds = 168,
    CottonFabric = 169,
    BonePole = 170,
    Tourniquet = 171,
    WroughtIronPickaxe = 172,
    WroughtIronDoubleAxe = 173,
    WroughtIronShovel = 174,
    WroughtIronSpear = 175,
    WroughtIronHammer = 176,
    WroughtIronLockPick = 177,
    WroughtIronShield = 178,
    WroughtIronGauntlets = 179,
    WroughtIronGreaves = 180,
    WroughtIronGorget = 181,
    WroughtIronHelmet = 182,
    WroughtIronBoots = 183,
    WroughtIronBreastPlate = 184,
    WroughtIronSword = 185,
    WoodenWall = 186,
    WoodenFlooring = 187,
    WoodenDoor = 188,
    FishingRod = 189,
    MessageInABottle = 190,
    CarbonPowder = 191,
    PileOfCompost = 192,
    MeltedCopal = 193,
    WoodenShavings = 194,
    Deadfall = 195,
    Snare = 196,
    WaterskinOfMedicinalWater = 197,
    CharcoalBandage = 198,
    WoodenTongs = 199,
    WroughtIronTongs = 200,
    SheetOfGlass = 201,
    SolarStill = 202,
    StoneWaterStill = 203,
    Sundial = 204,
    LitAnimalFatTorch = 205,
    Sinew = 206,
    ShortBow = 207,
    LongBow = 208,
    CompositeBow = 209,
    WaterskinOfPurifiedFreshWater = 210,
    WaterskinOfUnpurifiedFreshWater = 211,
    GlassBottle = 212,
    Cork = 213,
    GlassBottleOfSeawater = 214,
    GlassBottleOfDesalinatedWater = 215,
    GlassBottleOfMedicinalWater = 216,
    GlassBottleOfPurifiedFreshWater = 217,
    GlassBottleOfUnpurifiedFreshWater = 218,
    WroughtIronArrow = 219,
    IronArrow = 220,
    StoneBullet = 221,
    WroughtIronBullet = 222,
    IronBullet = 223,
    LeatherQuiver = 224,
    Ectoplasm = 225,
    MagicalEssence = 226,
    WoodenFence = 227,
    CreatureIdol = 228,
    CordedSling = 229,
    LeatherSling = 230,
    WroughtIronArrowhead = 231,
    IronArrowhead = 232,
    Hammock = 233,
    CottonBedroll = 234,
    FeatherBedroll = 235,
    RawTaintedMeat = 236,
    CookedTaintedMeat = 237,
    StoneKnife = 238,
    RawBlindfish = 239,
    CookedBlindfish = 240,
    Pemmican = 241,
    PreparedPemmican = 242,
    Sail = 243,
    Sailboat = 244,
    Egg = 245,
    BoiledEgg = 246,
    SheafOfHay = 247,
    Niter = 248,
    Saltpeter = 249,
    BlackPowder = 250,
    FlintlockPistol = 251,
    Giblets = 252,
    ExplosiveTrap = 253,
    SkeletalMageWand = 254,
    RawClayJug = 255,
    ClayJug = 256,
    ClayJugOfSeawater = 257,
    ClayJugOfDesalinatedWater = 258,
    ClayJugOfMedicinalWater = 259,
    ClayJugOfPurifiedFreshWater = 260,
    ClayJugOfUnpurifiedFreshWater = 261,
    RawClayBrick = 262,
    ClayBrick = 263,
    ClayBrickWall = 264,
    ClayBrickFlooring = 265,
    PineappleSeeds = 266,
    RaspberrySeeds = 267,
    PricklyPearSeeds = 268,
    ClematisSeeds = 269,
    PaperSheet = 270,
    PaperMold = 271,
    Beggarticks = 272,
    MilkThistleFlowers = 273,
    DrawnMap = 274,
    TatteredShirt = 275,
    TatteredPants = 276,
    WoodenGate = 277,
    PoisonIvyLeaves = 278,
    PoisonIvySeeds = 279,
    WroughtIronChest = 280,
    IronChest = 281,
    SwitchgrassSeeds = 282,
    Apple = 283,
    SpiderEggs = 284,
    TailFeathers = 285,
    AppleSeeds = 286,
    VenomGland = 287,
    OrnateWoodenChest = 288,
    RollOfRedCarpet = 289,
    OrnateCape = 290,
    FireBladder = 291,
    GoldenKey = 292,
    WoodenSword = 293,
    ClayKiln = 294,
    ClayCampfire = 295,
    ClayFurnace = 296,
    ClayWaterStill = 297,
    SandstoneCampfire = 298,
    SandstoneFurnace = 299,
    SandstoneWaterStill = 300,
    StoneKiln = 301,
    WroughtIronAnvil = 302,
    IronAnvil = 303,
    MageRobe = 304,
    OrbOfInfluence = 305,
    AnimalClaw = 306,
    AnimalPelt = 307,
    AnimalFur = 308,
    Scales = 309,
    SharkFin = 310,
    RawReptileMeat = 311,
    CookedReptileMeat = 312,
    Tentacles = 313,
    CookedTentacles = 314,
    WormMeat = 315,
    CookedWormMeat = 316,
    StonePickaxe = 317,
    WroughtIronAxe = 318,
    IronAxe = 319,
    FertileSoil = 320,
    StoneHoe = 321,
    WroughtIronHoe = 322,
    IronHoe = 323,
    LavaBeetleHelmet = 324,
    SpruceCone = 325,
    SpruceSeeds = 326,
    SpruceNeedles = 327,
    CypressCone = 328,
    CypressSeeds = 329,
    CypressLeaves = 330,
    Lettuce = 331,
    LettuceSeeds = 332,
    ChiveSeeds = 333,
    Potato = 334,
    PotatoSeeds = 335,
    Carrot = 336,
    CarrotSeeds = 337,
    CornEar = 338,
    CornSeeds = 339,
    Cucumber = 340,
    CucumberSeeds = 341,
    Tomato = 342,
    TomatoSeeds = 343,
    Pumpkin = 344,
    PumpkinSeeds = 345,
    PricklyPearFruit = 346,
    SugarCaneStalks = 347,
    SugarCaneSeeds = 348,
    BushelOfWheat = 349,
    Wheat = 350,
    CookedPotato = 351,
    CookedCornCob = 352,
    BundleOfSwitchgrass = 353,
    Cloak = 354,
    WoodenMortarAndPestle = 355,
    SandstoneMortarAndPestle = 356,
    WroughtIronMortarAndPestle = 357,
    IronMortarAndPestle = 358,
    RawClayMortarAndPestle = 359,
    ClayMortarAndPestle = 360,
    CopperOre = 361,
    CopperIngot = 362,
    CopperPickaxe = 363,
    CopperDoubleAxe = 364,
    CopperShovel = 365,
    CopperSpear = 366,
    CopperHammer = 367,
    CopperLockPick = 368,
    CopperShield = 369,
    CopperGauntlets = 370,
    CopperGreaves = 371,
    CopperGorget = 372,
    CopperHelmet = 373,
    CopperBoots = 374,
    CopperBreastPlate = 375,
    CopperSword = 376,
    CopperTongs = 377,
    CopperArrow = 378,
    CopperBullet = 379,
    CopperArrowhead = 380,
    CopperChest = 381,
    CopperAnvil = 382,
    CopperAxe = 383,
    CopperHoe = 384,
    CopperMortarAndPestle = 385,
    WaterskinOfGoatMilk = 386,
    ClayJugOfGoatMilk = 387,
    GlassBottleOfGoatMilk = 388,
    Obsidian = 389,
    OrnateBlueBook = 390,
    Journal = 391,
    MossCoveredBook = 392,
    GildedRedBook = 393,
    ArrowShaft = 394,
    SlitherSucker = 395,
    AberrantSlitherSucker = 396,
    StrawHat = 397,
    BlackplateBoots = 398,
    BlackplateBreastplate = 399,
    BlackplateGauntlets = 400,
    BlackplateGorget = 401,
    BlackplateGreaves = 402,
    BlackplateHelmet = 403,
    DeathKnightAxe = 404,
    Macuahuitl = 405,
    ObsidianArrow = 406,
    ObsidianArrowhead = 407,
    ObsidianAxe = 408,
    ObsidianKnife = 409,
    ObsidianShovel = 410,
    ObsidianSpear = 411,
    TumbleweedSeeds = 412,
    CoconutHusk = 413,
    PeeledCoconut = 414,
    CoconutMeat = 415,
    CoconutContainerOfCoconutWater = 416,
    CoconutContainer = 417,
    CoconutContainerOfSeawater = 418,
    CoconutContainerOfDesalinatedWater = 419,
    CoconutContainerOfMedicinalWater = 420,
    CoconutContainerOfPurifiedFreshWater = 421,
    CoconutContainerOfUnpurifiedFreshWater = 422,
    CoconutContainerOfGoatMilk = 423,
    OldEducationalScroll = 424,
    StrippedLeather = 425,
    ClaySandCastFlask = 426,
    SandstoneSandCastFlask = 427,
    StoneSandCastFlask = 428,
    AnimalGlue = 429,
    CopalResin = 430,
    BoneMeal = 431,
    PileOfDesertSand = 432,
    JoshuaTreeLeaves = 433,
    JoshuaTreeFruit = 434,
    JoshuaTreeSeeds = 435,
    CookedJoshuaTreeFruit = 436,
    JoshuaTreeFlowers = 437,
    SaguaroCactusFruit = 438,
    SaguaroCactusSeeds = 439,
    SaguaroCactusChunk = 440,
    StoneWell = 441,
    SandstoneWell = 442,
    ClayBrickWell = 443,
    AloeVeraLeaves = 444,
    AloeVeraSeeds = 445,
    DeadScorpion = 446,
    DeadAberrantScorpion = 447,
    CookedScorpion = 448,
    CookedAberrantScorpion = 449,
    ScorpionStinger = 450,
    CopperBakingTray = 451,
    WroughtIronBakingTray = 452,
    IronBakingTray = 453,
    Flour = 454,
    Dough = 455,
    Hardtack = 456,
    HitchingPost = 457,
    ShreddedPaper = 458
}
export declare enum ItemTypeGroup {
    Invalid = 800,
    Sharpened = 801,
    Carbon = 802,
    Arrow = 803,
    CookingEquipment = 804,
    Fuel = 805,
    Medicinal = 806,
    Meat = 807,
    Food = 808,
    Bait = 809,
    Liquid = 810,
    Treasure = 811,
    Rock = 812,
    Compost = 813,
    Fabric = 814,
    Needle = 815,
    Cordage = 816,
    SharpenedRock = 817,
    Container = 818,
    Pole = 819,
    LightSource = 820,
    Repair = 821,
    Tongs = 822,
    Hammer = 823,
    Preservative = 824,
    Reinforce = 825,
    GlassBottleOfPotableWater = 826,
    Bullet = 827,
    Transmogrify = 828,
    WaterskinOfPotableWater = 829,
    Pulp = 830,
    ClayJugOfPotableWater = 831,
    Powder = 832,
    Equipment = 833,
    Firemaking = 834,
    Bedding = 835,
    Tool = 836,
    Weapon = 837,
    Health = 838,
    Travel = 839,
    Housing = 840,
    Heating = 841,
    Storage = 842,
    Trap = 843,
    Other = 844,
    RawMeat = 845,
    CookedMeat = 846,
    ContainerOfSeawater = 847,
    ContainerOfDesalinatedWater = 848,
    ContainerOfMedicinalWater = 849,
    ContainerOfPurifiedFreshWater = 850,
    ContainerOfUnpurifiedFreshWater = 851,
    Campfire = 852,
    Furnace = 853,
    Kiln = 854,
    WaterStill = 855,
    Anvil = 856,
    Seed = 857,
    Fruit = 858,
    Vegetable = 859,
    Tinder = 860,
    Bone = 861,
    Kindling = 862,
    MortarAndPestle = 863,
    Milk = 864,
    Book = 865,
    CoconutContainerOfPotableWater = 866,
    SandCastFlask = 867,
    Glue = 868,
    FireStarter = 869,
    Sand = 870,
    Untradable = 871,
    Cookware = 872,
    LitTorch = 873,
    Last = 874
}
export declare enum TerrainType {
    DeepSeawater = 0,
    Seawater = 1,
    ShallowSeawater = 2,
    DeepFreshWater = 3,
    FreshWater = 4,
    ShallowFreshWater = 5,
    Grass = 6,
    Gravel = 7,
    Dirt = 8,
    BeachSand = 9,
    Snow = 10,
    Swamp = 11,
    Clay = 12,
    Ash = 13,
    Rocks = 14,
    RocksWithIron = 15,
    RocksWithTalc = 16,
    RocksWithCoal = 17,
    RocksWithLimestone = 18,
    CobblestoneFlooring = 19,
    Sandstone = 20,
    SandstoneFlooring = 21,
    SandstoneWithIron = 22,
    SandstoneWithNiter = 23,
    WoodenFlooring = 24,
    ClayBrickFlooring = 25,
    CaveEntrance = 26,
    RedCarpet = 27,
    Lava = 28,
    FertileSoil = 29,
    RocksWithCopper = 30,
    SandstoneWithCopper = 31,
    CoolingLava = 32,
    Obsidian = 33,
    DesertSand = 34
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
    AnimalFatTorchStand = 86,
    LitAnimalFatTorchStand = 87,
    Item = 88,
    JoshuaTree = 89,
    SaguaroCactus = 90,
    AloeVera = 91
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
    Last = 409
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
export declare enum BookType {
    RandomEvent = 0,
    IslandPresence = 1,
    Treasure = 2,
    Deities = 3,
    PastCivilizations = 4,
    SandCasting = 5,
    WanderingMerchants = 6,
    TrappersJournal = 7,
    TheForce = 8,
    IslandRiddle = 9,
    Trapped = 10
}
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
    AntelopeJackrabbit = 40
}
export declare enum NPCType {
    Merchant = 0,
    DeathKnight = 1
}
export declare enum HairStyle {
    None = 0,
    Spike = 1,
    Bun = 2,
    Ponytail = 3,
    Afro = 4,
    Bouncy = 5,
    Dreads = 6,
    Shaved = 7,
    Long = 8,
    Mohawk = 9
}
export declare enum HairColor {
    "#e7c978" = 0,
    "#b9793d" = 1,
    "#b84627" = 2,
    "#7f3721" = 3,
    "#7e4b1c" = 4,
    "#422116" = 5,
    "#28222a" = 6,
    "#bfb0a8" = 7,
    "#ffffff" = 8
}
export declare enum SkinColor {
    "#fddcd4" = 0,
    "#d6be93" = 1,
    "#f0ceab" = 2,
    "#c7a077" = 3,
    "#d89a72" = 4,
    "#89623a" = 5,
    "#88563b" = 6,
    "#613429" = 7,
    "#361e1c" = 8
}
export declare enum SkillType {
    Chemistry = 0,
    Anatomy = 1,
    Marksmanship = 2,
    Blacksmithing = 3,
    Botany = 4,
    Camping = 5,
    Cartography = 6,
    Claythrowing = 7,
    Cooking = 8,
    Fishing = 9,
    Fletching = 10,
    Glassblowing = 11,
    Leatherworking = 12,
    LockPicking = 13,
    Lumberjacking = 14,
    Mining = 15,
    Mycology = 16,
    Parrying = 17,
    Stonecrafting = 18,
    Swimming = 19,
    Tactics = 20,
    Tailoring = 21,
    Throwing = 22,
    Tinkering = 23,
    Trapping = 24,
    Woodworking = 25,
    Taming = 26,
    Gardening = 27,
    Bartering = 28
}
export declare enum Music {
    Shipwrecked = 0,
    OpeningTheme = 1,
    DarkerWorld = 2,
    Crux = 3,
    TheFirstSpark = 4,
    HauntingInterlude = 5,
    NomadsHeartBeat = 6,
    LootStep = 7,
    PerilsOfPlunder = 8,
    DreamInterlude = 9,
    TheWildBorn = 10,
    NightOwl = 11,
    SurvivalInstinct = 12,
    Savage = 13,
    Underworld = 14,
    ThirdSunrise = 15,
    WistfulInterlude = 16,
    ShudderSounds = 17
}
export declare enum SfxType {
    Bow = 0,
    Craft = 1,
    Death = 2,
    Eating = 3,
    Exceptional = 4,
    Fail = 5,
    TreeHit = 6,
    Hit = 7,
    Hurt = 8,
    Miss = 9,
    CreatureHit = 10,
    CreatureNoise = 11,
    PickUp = 12,
    RockHit = 13,
    SandstoneHit = 14,
    Swim = 15,
    Throw = 16,
    Trample = 17,
    Walk = 18,
    Water = 19,
    Click = 20,
    Damaged = 21,
    Chat = 22,
    UiSelect = 23,
    UiActivate = 24
}
export declare enum Command {
    Commands = 0,
    Players = 1,
    Ping = 2,
    Kick = 3,
    Banned = 4,
    Ban = 5,
    Unban = 6,
    Pause = 7,
    Save = 8
}
export declare enum PlayerState {
    None = 0,
    Dead = 1,
    Won = 2,
    Traveling = 3,
    Ghost = 4,
    Server = 5
}
export declare enum ObjectContext {
    None = 0,
    Inventory = 1,
    TileItem = 2,
    Doodad = 3,
    TileEvent = 4,
    Corpse = 5
}
/**
 * @deprecated Use the const enum in `entity/IHuman.ts`
 */
export declare enum Delay {
    None = 0,
    LongPause = 25,
    Movement = 10,
    ShortPause = 13,
    Collision = 40,
    TurnDirection = 2,
    ReallyLongPause = 100
}
export declare enum TickSpeed {
    Min = 10,
    Default = 50,
    Max = 80
}
export declare enum StatType {
    EnemyHealth = 0,
    Stat = 1,
    Stamina = 2,
    Metabolism = 3,
    Health = 4,
    Thirst = 5,
    Zero = 6,
    Miss = 7,
    Immune = 8
}
export declare enum StatusType {
    Bleeding = 0,
    Poisoned = 1,
    Burned = 2
}
export declare enum OverlayType {
    WalkDots = 0,
    Arrows = 1,
    FootPrints = 2
}
export declare enum ItemQuality {
    None = 0,
    Random = 1,
    Exceptional = 2,
    Remarkable = 3,
    Legendary = 4
}
export declare enum LegendaryType {
    Attack = 0,
    Defense = 1,
    Illumination = 2,
    WeightCapacity = 3,
    ItemWeight = 4,
    Stat = 5,
    Skill = 6,
    Benignity = 7,
    Malignity = 8,
    Range = 9,
    UseBenefits = 10,
    Worth = 11,
    TrapDamage = 12,
    MaxWeight = 13,
    ContainerWeight = 14
}
export declare enum RenderFlag {
    None = 0,
    Corpse = 1,
    Item = 2,
    Player = 4,
    Creature = 8,
    Terrain = 16,
    Overlay = 32,
    OverTrees = 64,
    All = 65535
}
export declare enum OnEquipType {
    LightSource = 0,
    Telescopy = 1
}
export declare const itemQualitySortOrder: {
    [index: number]: number;
};
export declare const onEquipTypes: IOnEquipType;
export declare enum TurnType {
    CheckUnderPlayer = 0,
    DontEnterCaves = 1,
    ForcePickUp = 2
}
export declare const keyCodes: string[];
export declare enum DialogId {
    Inventory = 0,
    Crafting = 1,
    Equipment = 2,
    Map = 3,
    Container = 4,
    Custom = 5
}
export declare enum SortType {
    Name = 0,
    Group = 1,
    Weight = 2,
    Recent = 3,
    Skill = 4,
    Decay = 5,
    Quality = 6,
    Category = 7,
    Durability = 8,
    DiscoveredTime = 9,
    BestForCraftingRequirements = 10,
    BestForCraftingConsumables = 11
}
export declare enum RestType {
    Resting = 0,
    Sleeping = 1
}
export declare enum LoadingType {
    Normal = 0,
    Rest = 1
}
export declare enum CraftStatus {
    Invalid = 0,
    Failed = 1,
    Success = 2
}
export declare enum InputRecordType {
    KeyDown = 0,
    KeyUp = 1,
    MouseDown = 2,
    MouseUpOrLeave = 3,
    MouseMove = 4,
    MouseScroll = 5
}
export declare enum CaseStyle {
    PascalCase = 0,
    CamelCase = 1,
    SnakeCase = 2,
    KebabCase = 3
}
export interface IOnEquipType {
    [index: number]: {};
}
export interface IObject<T> {
    type: T;
    id: number;
    renamed?: string | ISerializedTranslation;
}
export interface IObjectOptions {
    decay?: number;
    minDur?: number;
    maxDur?: number;
    quality?: ItemQuality;
}
export interface IObjectDescription {
    decayMax?: number;
    skillUse?: SkillType;
    weightCapacity?: number;
    imagePath?: string;
    preservationChance?: number;
}
export interface IModdable {
    modIndex?: number;
}
export interface TatteredMap extends IVector3 {
    reinitialize?: boolean;
}
export interface ISeeds {
    base: number | string;
    saved: number;
}
export interface IRGB {
    r: number;
    g: number;
    b: number;
}
export declare enum WeightType {
    Normal = 0,
    Static = 1,
    Min = 2,
    Max = 3
}
export declare enum RestCancelReason {
    CreatureNearby = 0,
    Damaged = 1,
    FullStamina = 2,
    NearbyCreatureDamagedDoodad = 3,
    CreatureDamaged = 4,
    Canceled = 5
}
export declare enum FireType {
    None = 0,
    Doodad = 1,
    Fire = 2,
    Lava = 3,
    CoolingLava = 4
}
export interface IResourceItem {
    type: ItemType;
    chance?: number;
    chanceOutOf?: number;
}
export interface IDoodadResource {
    [index: number]: IResourceItem[] | undefined;
}
export interface IDoodadParticles {
    [index: number]: IRGB;
}
export interface ITerrainResource {
    items: ITerrainResourceItem[];
    defaultItem?: ItemType;
    disableWaterRouting?: boolean;
}
export interface ITerrainResourceItem extends IResourceItem {
    chance?: number;
    tileChange?: TerrainType;
    tileChangeChance?: number;
}
export declare enum WeightStatus {
    None = 0,
    Overburdened = 1,
    Encumbered = 2
}
export declare enum ConnectionState {
    Connecting = 1,
    Connected = 2,
    QueuingPackets = 4,
    CatchingUp = 8,
    Ready = 16,
    Disconnecting = 32,
    All = 63
}
export interface RequirementInfo extends IVector2, IVector3 {
    requirementsMet: boolean;
    isLava?: boolean;
    doodadRequirementMet: boolean;
    fireRequirementMet: boolean;
    requiredDoodad: IDoodad | undefined;
}
export interface IKeyBind {
    [index: number]: number;
}
export declare enum BindableType {
    Game = 0,
    Dialog = 1,
    Menu = 2,
    Developer = 3,
    Mod = 4
}
/**
 * Note: If you rename a Bindable and don't make a save conversion for it, the old binding will be lost.
 */
export declare enum Bindable {
    /**
     * Safe for `if` statements. Falsey!
     */
    None = 0,
    GameMoveDirection = 1,
    GameMoveToTile = 2,
    GameMoveToTilePreview = 3,
    GameMoveDown = 4,
    GameMoveLeft = 5,
    GameMoveRight = 6,
    GameMoveUp = 7,
    GameFaceDirection = 8,
    GameFaceDown = 9,
    GameFaceLeft = 10,
    GameFaceRight = 11,
    GameFaceUp = 12,
    GameIdle = 13,
    GameActions = 14,
    GameItemMove = 15,
    GameItemMenu = 16,
    GameItemQuickMove = 17,
    GameItemQuickMoveAll = 18,
    GameItemDrop = 19,
    GameItemDropAll = 20,
    GameItemEquipToggle = 21,
    GameHandToggleLeft = 22,
    GameHandToggleRight = 23,
    GameInspect = 24,
    GameMoreInformation = 25,
    GameZoomIn = 26,
    GameZoomOut = 27,
    GamePause = 28,
    GameSave = 29,
    GameFullscreen = 30,
    GameScreenshotMode = 31,
    GameQuickSlotClear = 32,
    GameQuickSlot1 = 33,
    GameQuickSlot2 = 34,
    GameQuickSlot3 = 35,
    GameQuickSlot4 = 36,
    GameQuickSlot5 = 37,
    GameQuickSlot6 = 38,
    GameQuickSlot7 = 39,
    GameQuickSlot8 = 40,
    GameQuickSlot9 = 41,
    GameQuickSlotToggle1 = 42,
    GameQuickSlotToggle2 = 43,
    GameQuickSlotToggle3 = 44,
    GameQuickSlotToggle4 = 45,
    GameQuickSlotToggle5 = 46,
    GameQuickSlotToggle6 = 47,
    GameQuickSlotToggle7 = 48,
    GameQuickSlotToggle8 = 49,
    GameQuickSlotToggle9 = 50,
    GameContextMenu1 = 51,
    GameContextMenu2 = 52,
    GameContextMenu3 = 53,
    GameContextMenu4 = 54,
    GameContextMenu5 = 55,
    GameContextMenu6 = 56,
    GameContextMenu7 = 57,
    GameContextMenu8 = 58,
    GameContextMenu9 = 59,
    GameContextMenu10 = 60,
    GameContextMenu11 = 61,
    GameContextMenu12 = 62,
    GameContextMenu13 = 63,
    GameContextMenu14 = 64,
    GameContextMenu15 = 65,
    GameContextMenu16 = 66,
    GameContextMenu17 = 67,
    GameContextMenu18 = 68,
    GameContextMenu19 = 69,
    GameContextMenu20 = 70,
    GameContextMenu21 = 71,
    GameContextMenu22 = 72,
    GameContextMenu23 = 73,
    GameContextMenu24 = 74,
    DialogCloseAll = 75,
    DialogOptions = 76,
    DialogHelp = 77,
    DialogMilestones = 78,
    DialogNotes = 79,
    DialogMessages = 80,
    DialogMessagesChatFocus = 81,
    DialogInventory = 82,
    DialogCrafting = 83,
    DialogDismantle = 84,
    DialogEquipment = 85,
    DialogSkills = 86,
    DialogQuests = 87,
    MenuEnter = 88,
    MenuNext = 89,
    MenuPrevious = 90,
    MenuUp = 91,
    MenuDown = 92,
    MenuLeft = 93,
    MenuRight = 94,
    MenuCancel = 95,
    MenuContextMenu = 96,
    DeveloperToggleDeveloperMode = 97,
    DeveloperToggleDeveloperTools = 98,
    DeveloperReloadGame = 99,
    DeveloperReloadAndContinueGame = 100
}
export declare enum DropLocation {
    Facing = 0,
    Feet = 1,
    FeetWhenFacingBlocked = 2
}
export declare enum TurnMode {
    Manual = 0,
    Simulated = 1,
    RealTime = 2
}
