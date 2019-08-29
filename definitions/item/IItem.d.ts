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
import { DoodadType, DoodadTypeGroup } from "doodad/IDoodad";
import { ActionType } from "entity/action/IAction";
import { CreatureType, TileGroup } from "entity/creature/ICreature";
import { DamageType, Defense } from "entity/IEntity";
import { EquipType, SkillType } from "entity/IHuman";
import { Stat } from "entity/IStats";
import { IObjectDescription } from "game/IObject";
import Item from "item/Item";
import Recipe from "item/recipe/Recipe";
import { IModdable } from "mod/ModRegistry";
import { IVector3 } from "utilities/math/IVector";
export interface IItemWeightComponent {
    weightFraction: number;
    type: ItemType;
    tweak?: number;
}
export interface IConstructedInfo {
    disassembly?: Item[];
    additionalItemWeights?: IItemWeightComponent[];
    weightTweak?: number;
}
export interface IItemOld {
    equipped?: EquipType;
    equippedPid?: number;
}
export interface IItemLegendaryOld {
    legendary?: {
        skill: SkillType;
    };
}
export interface IContainable {
    containedWithin?: IContainer;
}
export interface IContainer extends IContainable {
    weightCapacity?: number;
    containedItems: Item[];
    itemOrders?: number[];
    containerType?: ContainerType;
}
export interface IItemDescription extends IObjectDescription, IModdable {
    durability?: number;
    onBurn?: ItemType[];
    onUse?: {
        [index: number]: any;
    };
    equipEffect?: [EquipEffect, ...any[]];
    damageType?: DamageType;
    weight?: number;
    reducedWeight?: number;
    minimumWeight?: number;
    weightRange?: [number, number];
    /**
     * A decimal number between 0 and 1 that will reduce the `weightFraction` of a "raw" item when it's refined.
     */
    refiningReduction?: number;
    lit?: ItemType;
    damageModifier?: number;
    equip?: EquipType;
    returnOnUse?: [ItemType, boolean];
    inheritWeight?: ItemType;
    attack?: number;
    defense?: Defense;
    revert?: ItemType;
    use?: ActionType[];
    ranged?: IRanged;
    recipe?: IRecipe;
    /**
     * A list of recipes that have this item as an output.
     *
     * This helper is intended for simple recipes that don't need to change how many of the item are created, and from what.
     * If you intend to output a number of this item greater than one, or you intend to produce this item by changing another item
     * into it, consider instead registering a recipe directly.
     */
    recipes?: Array<(recipe: Recipe) => Recipe>;
    disassemble?: boolean;
    requiredForDisassembly?: Array<ItemType | ItemTypeGroup>;
    decaysInto?: ItemType;
    twoHanded?: boolean;
    keepDurabilityOnCraft?: boolean;
    craftable?: boolean;
    dismantle?: IDismantleDescription;
    doodadContainer?: DoodadType;
    repairable?: boolean;
    repairAndDisassemblyRequiresFire?: boolean;
    suffix?: string;
    prefix?: string;
    spawnOnDecay?: CreatureType;
    spawnOnBreak?: CreatureType;
    showOverHair?: boolean;
    hasSleepImage?: boolean;
    flammable?: boolean;
    plural?: string;
    hideHelmet?: boolean;
    worth?: number;
    burnsLike?: ItemType[];
    spawnableTiles?: TileGroup;
    gather?: ILiquid;
    placeDownType?: DoodadType;
    /**
     * How good this item is at being an item of an `ItemTypeGroup`.
     *
     * For instance, `ItemType.StoneSpear` has a `ItemTypeGroup.CookingEquipment` tier of 2.
     */
    tier?: OptionalDescriptions<ItemTypeGroup, number>;
    recipeCache?: ItemType[];
    onEquip?(item: Item): void;
    onUnequip?(item: Item): void;
}
export interface IRecipe {
    baseComponent?: (ItemType | ItemTypeGroup);
    components: IRecipeComponent[];
    skill: SkillType;
    level: RecipeLevel;
    requiredDoodad?: DoodadType | DoodadTypeGroup;
    requiresFire?: boolean;
    reputation: number;
}
export interface IRecipeComponent {
    type: ItemType | ItemTypeGroup;
    requiredAmount: number;
    consumedAmount: number;
    disassembleAmount: number;
    ignoreWeight: boolean;
}
export interface IDismantleComponent {
    [index: number]: number;
}
export interface IRanged {
    range: number;
    attack: number;
}
export interface IItemLegendary {
    type: LegendaryType;
    value: number;
    skill?: SkillType;
    stat?: Stat;
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
    ContainerWeight = 14,
    PreservationRate = 15,
    MaxDecay = 16,
    ItemDamage = 17
}
export interface IItemUsed {
    usedBy?: string[];
    recipe?: ItemType;
    skill?: SkillType;
    map?: IVector3;
}
export interface ILiquid {
    milk: ItemType;
    desalinated: ItemType;
    unpurified: ItemType;
    seawater: ItemType;
}
export interface IDismantleDescription {
    items: Array<[ItemType, number]>;
    required?: ItemTypeGroup;
    skill?: SkillType;
    reputation?: number;
}
export interface IItemGroupDescription {
    types: Array<ItemType | ItemTypeGroup>;
    default: ItemType | ItemTypeGroup;
}
export declare enum ContainerReferenceType {
    Invalid = 0,
    PlayerInventory = 1,
    Doodad = 2,
    World = 3,
    Tile = 4,
    Item = 5,
    NPCInventory = 6
}
export interface IBaseContainerReference {
    type: ContainerReferenceType;
}
export interface IPlayerInventoryContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.PlayerInventory;
    pid: number;
    identifier?: string;
}
export interface IInvalidContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.Invalid;
}
export interface IWorldContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.World;
}
export interface ITileContainerReference extends IBaseContainerReference, IVector3 {
    type: ContainerReferenceType.Tile;
}
export interface IDoodadContainerReference extends IBaseContainerReference, IVector3 {
    type: ContainerReferenceType.Doodad;
}
export interface IItemContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.Item;
    id: number;
}
export interface INPCInventoryContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.NPCInventory;
    id: number;
}
export declare type ContainerReference = IInvalidContainerReference | IWorldContainerReference | IPlayerInventoryContainerReference | ITileContainerReference | IDoodadContainerReference | IItemContainerReference | INPCInventoryContainerReference;
export declare enum CraftResult {
    Fail = 0,
    Success = 1,
    CritSuccess = 2
}
export declare enum ContainerType {
    Default = 0,
    Trade = 1
}
export declare enum EquipEffect {
    LightSource = 0,
    Telescopy = 1
}
export declare enum RecipeLevel {
    Simple = 0,
    Intermediate = 1,
    Advanced = 2,
    Expert = 3
}
export declare enum BookType {
    RandomEvent = 0,
    IslandPresence = 1,
    Treasures = 2,
    Deities = 3,
    PastCivilizations = 4,
    SandCasting = 5,
    WanderingMerchants = 6,
    TrappersJournal = 7,
    TheForce = 8,
    IslandRiddle = 9,
    Trapped = 10,
    PowderyCatalog = 11,
    OnWaterAndHydration = 12
}
export interface TatteredMap extends IVector3 {
    reinitialize?: boolean;
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
    GoldSword = 25,
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
    TallowTorch = 145,
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
    LitTallowTorch = 205,
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
    ShreddedPaper = 458,
    RawMudskipper = 459,
    RawAberrantMudskipper = 460,
    CookedMudskipper = 461,
    CookedAberrantMudskipper = 462,
    RawRedSnapper = 463,
    CookedRedSnapper = 464,
    RawWalleye = 465,
    CookedWalleye = 466,
    WoodenShield = 467,
    CopperRefinementTools = 468,
    WroughtIronRefinementTools = 469,
    IronRefinementTools = 470,
    ScaleBelt = 471,
    ScaleVest = 472,
    ScaleBoots = 473,
    ScaleCap = 474,
    ScaleGorget = 475,
    ScaleLeggings = 476,
    ScaleGloves = 477,
    CookedJoshuaTreeFlowers = 478,
    SaguaroCactusRibs = 479,
    BladesOfGrass = 480,
    AnimalDroppings = 481,
    AnimalDung = 482,
    Guano = 483,
    Tallow = 484,
    TallowCandle = 485,
    LitTallowCandle = 486,
    WispDust = 487,
    MagicalAspect = 488,
    GoldenSextant = 489
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
    Pole = 818,
    FireSource = 819,
    Repairing = 820,
    Tongs = 821,
    Hammer = 822,
    Preservative = 823,
    Reinforcement = 824,
    GlassBottleOfPotableWater = 825,
    Bullet = 826,
    Transmogrification = 827,
    WaterskinOfPotableWater = 828,
    Pulp = 829,
    ClayJugOfPotableWater = 830,
    Powder = 831,
    Equipment = 832,
    Firemaking = 833,
    Bedding = 834,
    Tool = 835,
    Weapon = 836,
    Health = 837,
    Travel = 838,
    Housing = 839,
    Heating = 840,
    Storage = 841,
    Trap = 842,
    RawMeat = 843,
    CookedMeat = 844,
    ContainerOfSeawater = 845,
    ContainerOfDesalinatedWater = 846,
    ContainerOfMedicinalWater = 847,
    ContainerOfPurifiedFreshWater = 848,
    ContainerOfUnpurifiedFreshWater = 849,
    Campfire = 850,
    Furnace = 851,
    Kiln = 852,
    WaterStill = 853,
    Anvil = 854,
    Seed = 855,
    Fruit = 856,
    Vegetable = 857,
    Tinder = 858,
    Bone = 859,
    Kindling = 860,
    MortarAndPestle = 861,
    ContainerOfMilk = 862,
    Book = 863,
    CoconutContainerOfPotableWater = 864,
    SandCastFlask = 865,
    Glue = 866,
    FireStarter = 867,
    Sand = 868,
    Untradable = 869,
    Cookware = 870,
    Refinement = 871,
    LitTorch = 872,
    LightDevice = 873,
    Enchantment = 874,
    Other = 875,
    CookedFood = 876,
    All = 877,
    Last = 878
}
