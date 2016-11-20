declare namespace Utilities {
    module Console {
        function log(source: Source, ...args: any[]): void;
        function info(source: Source, ...args: any[]): void;
        function debug(source: Source, ...args: any[]): void;
        function warn(source: Source, ...args: any[]): void;
        function error(source: Source, ...args: any[]): void;
    }
    module Random {
        var seed: number;
        var saved: number;
        function randomFromInterval(min: any, max: any): number;
        function nextFloat(): number;
        function nextInt(max: number): number;
        function getSeed(): number;
        function setSeed(newSeed: any): void;
    }
    module TileHelpers {
        var maskGfx: number;
        var maskType: number;
        function getGfx(tile: Terrain.ITile): number;
        function getGfxRaw(data: number): number;
        function setGfx(tile: Terrain.ITile, value: number): void;
        function setGfxRaw(data: number, value: number): number;
        function getType(tile: Terrain.ITile): TerrainType;
        function getTypeRaw(data: number): TerrainType;
        function setType(tile: Terrain.ITile, value: TerrainType): void;
        function setTypeRaw(data: number, value: TerrainType): number;
    }
    module WebWorkerHelpers {
        function create(workerFunction: (data: any) => void, messageCallbackFunction: (evt: any) => void): Worker;
        function enumToString(name: string, values: any, withStrings?: boolean): string;
        function moduleToString(moduleName: string, name: string, moduleToConvert: any, globalVariables?: string[]): string;
    }
    module ItemImageCache {
        function initialize(): void;
        function getItemImageUrl(itemType: ItemType, itemImage: ItemImage): string;
        function queueCreateItemImageOutlines(image: HTMLImageElement, itemType: ItemType): void;
        function cacheAllItemImageOutlines(): void;
    }
    module Enums {
        interface IEnumInfo {
            enumName: string;
            name: string;
            enumNumber: number;
            object?: any;
            onUnallocate: ((index: number) => void) | null;
        }
        interface IEnumInfoInternal extends IEnumInfo {
            objectValue?: any;
            windowKeys: string[] | null;
        }
        var allocatedEnums: {
            [index: string]: IEnumInfoInternal;
        };
        function initializeGameState(): void;
        function setup(enumObject: any, modStart: number, max: number): void;
        function isValid(enumObject: any, index: number): boolean;
        function getMax(enumObject: any): number;
        function getOfficialMax(enumObject: any): number;
        function isModdable(enumObject: any): boolean;
        function restore(): void;
        function reset(): void;
        function allocate(enumName: string, name: string, windowKeys?: string[] | null, objectValue?: ((enumNumber: number) => any) | null, onAllocate?: ((enumNumber: number) => void) | null, onUnallocate?: ((enumNumber: number) => void) | null): IEnumInfo | null;
        function unallocate(enumInfo: Utilities.Enums.IEnumInfo): void;
        function getValues(e: any): number[];
        function toString(e: any, n: number): string;
    }
    module String {
        function formatCase(text: string, textCase: TextCase): string;
    }
    module Math2 {
        function clamp255(value: number): number;
        function clamp01(value: number): number;
        function roundNumber(num: any, dec: any): number;
        function lerp(from: number, to: number, t: number): number;
        function easeInQuad(time: number, start: number, change: number, duration: number): number;
        function easeInCubic(time: number, start: number, change: number, duration: number): number;
        function isInBound2Wrapped(bound: Bound2, x: number, y: number): boolean;
        function shuffle(array: number[]): number[];
    }
    function loadImage(src: any, callback: any): void;
    function copyPointZ(pointZ: IPointZ | undefined): IPointZ | undefined;
    function getTileVariation(x: number, y: number): number;
    class Queue<T> {
        private queue;
        private offset;
        constructor(initial?: T[] | null);
        getLength(): number;
        isEmpty(): boolean;
        enqueue(value: T): void;
        dequeue(): T | null;
        isInQueue(item: T, equals?: (item1: T, item2: T) => boolean): boolean;
    }
    function debounce(id: string, callback: () => void, timeout: number): void;
    function windowKeysToObject(keys: string[]): any;
    function windowKeysToParentObject(keys: string[]): any;
    function arrayEquals(arr1: any[], arr2: any[]): boolean;
}
interface IMessages {
    [index: number]: string;
}
declare const messages: IMessages;
declare function makeString(msg: Message, ...variables: any[]): string;
declare enum MessageType {
    None = 0,
    Bad = 1,
    Good = 2,
    Miss = 3,
    Attack = 4,
    Stat = 5,
    Skill = 6,
}
declare enum Message {
    None = 0,
    AberrantCreatureDroppedItem = 1,
    AboutHours = 2,
    AddedFuelToFire = 3,
    AddedFuelToTorch = 4,
    AddFuel = 5,
    AddToQuickslot = 6,
    Advanced = 7,
    AlreadyFullyRepaired = 8,
    AlreadyWaterInStill = 9,
    AppearsToBeAberrant = 10,
    AppearsToBeDawn = 11,
    AppearsToBeDusk = 12,
    AppearsToBeMidDay = 13,
    AppearsToBeNight = 14,
    AreYouSureYouWantToSail = 15,
    AreYouSureYouWantToStepOn = 16,
    ArmorAppearedResistant = 17,
    ArmorAppearedVulnerable = 18,
    ArmorProtectedFromInjuryAgainst = 19,
    Attack = 20,
    AttemptedToDropAllIntoFire = 21,
    AttemptToPlaceAllOnGround = 22,
    AutomaticallySavingGame = 23,
    AwakeToFindYourself = 24,
    Back = 25,
    BadlyBurnedLostHealth = 26,
    BeenPoisoned = 27,
    BeginSleeping = 28,
    BeginUsingRaft = 29,
    Belt = 30,
    BleedingHasStopped = 31,
    BleedingProfusely = 32,
    BleedingToDeathLostHealth = 33,
    Blunt = 34,
    BrokeIntoPieces = 35,
    BrokenOnImpact = 36,
    BrokenWhileFiring = 37,
    Build = 38,
    Burned = 39,
    By = 40,
    ByBleedingOut = 41,
    ByBurnInjuries = 42,
    ByEatingSomethingBad = 43,
    ByPoisoning = 44,
    BySteppingOnA = 45,
    BySteppingOnTrap = 46,
    ByWorkingYourselfIntoExhaustion = 47,
    Cancel = 48,
    CannotAddAnyMoreFuel = 49,
    CannotBePerformedOverWater = 50,
    CannotBePreserved = 51,
    CannotBeReinforced = 52,
    CannotBeRepaired = 53,
    CannotBeTamed = 54,
    CannotBeTransmogrified = 55,
    CannotBuildHere = 56,
    CannotDigHere = 57,
    CannotDropHere = 58,
    CannotEquipThatThere = 59,
    CannotFishFor = 60,
    CannotGatherFromWhileOnFire = 61,
    CannotGatherHere = 62,
    CannotImproveGrowingSpeed = 63,
    CannotInWater = 64,
    CannotPickupWhenFull = 65,
    CannotPickUpWhileLit = 66,
    CannotPickUpWithItemsInside = 67,
    CannotPlaceContainerInItself = 68,
    CannotPlaceHere = 69,
    CannotPlaceThatFromHere = 70,
    CannotPlaceThatHere = 71,
    CannotPlantHere = 72,
    CannotRepairWhileLit = 73,
    CannotRestHere = 74,
    CannotSeeHere = 75,
    CannotSleepHere = 76,
    CannotStartFireHere = 77,
    CannotToTellTime = 78,
    CarryingTooMuchWeight = 79,
    CarvedUpCorpse = 80,
    CarveWithTool = 81,
    CastYourLine = 82,
    Category = 83,
    CaughtFish = 84,
    Chest = 85,
    ClearMessages = 86,
    Clockwise = 87,
    CloseDoor = 88,
    CollectObjectWithHands = 89,
    Consumed = 90,
    Container = 91,
    Cook = 92,
    Cooked = 93,
    Corpse = 94,
    CorruptSaveDetected = 95,
    CouldNotDecipher = 96,
    Counterclockwise = 97,
    Craft = 98,
    Crafted = 99,
    Crafts = 100,
    CreatureAlreadyFullHealth = 101,
    CreatureAngered = 102,
    CreatureAppears = 103,
    CreatureAppearsHealthy = 104,
    CreatureAppearsUnhealthy = 105,
    CreatureAppeased = 106,
    CreatureIdolAttractedCreature = 107,
    CreatureIsAtPercentHealth = 108,
    CreatureLooksBarelyHurt = 109,
    CreatureLooksHealthyAndUndamaged = 110,
    CreatureLooksInjured = 111,
    CreatureLooksSeverelyDamaged = 112,
    CreatureSeemsHurt = 113,
    CreatureSeemsInjured = 114,
    CreatureSeemsUnimpaired = 115,
    CreatureUntamed = 116,
    CuredYourPoison = 117,
    Cut = 118,
    DailyChallengeMode = 119,
    DamageAppearedEffective = 120,
    DamageAppearedIneffective = 121,
    DamagedByPouringWater = 122,
    DealtNoDamageToYou = 123,
    Decay = 124,
    DefaultGameName = 125,
    DependencyIssue = 126,
    DestroyedFromUse = 127,
    DestroyedGrowingByPickingItUp = 128,
    DexterityIncreasing = 129,
    DidNotSeemToBeHurting = 130,
    Dig = 131,
    Digging = 132,
    DigWithHands = 133,
    Disassemble = 134,
    DisassembleAction = 135,
    DiscoveredCaveEntrance = 136,
    DiscoveredInTheBottle = 137,
    Dismantle = 138,
    DismantleAction = 139,
    DismantleLabel = 140,
    DismantlingRequires = 141,
    DoNotForgetToAddRequiredModsOnWorkshop = 142,
    DoNotHaveTreasureMaps = 143,
    DoodadAppearsDamaged = 144,
    DoodadAppearsOnVergeOfBreaking = 145,
    DoodadAppearsUnscathed = 146,
    DoodadCauseStatus = 147,
    DoodadShowsSignsOfWear = 148,
    DrewSurroundings = 149,
    Drink = 150,
    Drop = 151,
    DropAll = 152,
    DropAllOfSameQuality = 153,
    DroppedAllIntoDepths = 154,
    DroppedIntoDepths = 155,
    DroppedIntoFire = 156,
    DueToDehydration = 157,
    DueToStarvation = 158,
    DugTreasureOut = 159,
    DumpContentsOfContainerInInventory = 160,
    Durability = 161,
    DyingOfDehydration = 162,
    EarnedMilestone = 163,
    EquipTo = 164,
    ErrorHasOccured = 165,
    Expert = 166,
    ExtinguishedFire = 167,
    ExtinguishedTorch = 168,
    FailedToAddFuelToTorch = 169,
    FailedToCatchFish = 170,
    FailedToCauseDamage = 171,
    FailedToDrawMap = 172,
    FailedToPickLock = 173,
    FailedToPlant = 174,
    FailedToPreserve = 175,
    FailedToReinforce = 176,
    FailedToRepair = 177,
    FailedToStartFire = 178,
    FailedToTame = 179,
    FailedToTransmogrify = 180,
    FarAwayFromTreasure = 181,
    Feet = 182,
    FeltBurningPainLostHealth = 183,
    FewMinutes = 184,
    Filled = 185,
    FilledFrom = 186,
    FinalizingWorld = 187,
    Fire = 188,
    FireAlmostExtinguished = 189,
    FiredIntoObstacle = 190,
    FireFacingYouIsWarm = 191,
    FireIsHealthy = 192,
    FireIsRaging = 193,
    FireIsStruggling = 194,
    FireSource = 195,
    FirstQuarterOfDay = 196,
    FirstQuarterOfNight = 197,
    Food = 198,
    FoodAlreadyPreserved = 199,
    FourthQuarterOfDay = 200,
    FourthQuarterOfNight = 201,
    FullyDecodedMap = 202,
    GainedHealth = 203,
    GainedHunger = 204,
    GainedStamina = 205,
    GainedThirst = 206,
    GameHasBeenSavedIsTakingUpMB = 207,
    Gather = 208,
    Gathering = 209,
    GatherWithHands = 210,
    GeneratingWorld = 211,
    GrabAll = 212,
    Group = 213,
    Hands = 214,
    HasBeenHurtByATrap = 215,
    HasBeenHurtByYourTrap = 216,
    HasDecayed = 217,
    HasHitYouForDamage = 218,
    HasSplit = 219,
    Head = 220,
    Held = 221,
    Help = 222,
    Hints = 223,
    HintsDisabled = 224,
    HintsEnabled = 225,
    HitForDamage = 226,
    Hour = 227,
    Hours = 228,
    HowDoYouWantToExportSave = 229,
    HurtHandsHittingWithoutWeapons = 230,
    HurtHandsWithNoTool = 231,
    IncompatibleVersion = 232,
    InExactLocationOfTreasure = 233,
    InjuredFromTrap = 234,
    InNeedOfRepair = 235,
    Inspect = 236,
    Intermediate = 237,
    Inventory = 238,
    ItContains = 239,
    ItemInCraftWillBeDestroyed = 240,
    ItsWeightCapacity = 241,
    Jump = 242,
    Killed = 243,
    LabelAttackFromTactics = 244,
    LabelAuthor = 245,
    LabelBase = 246,
    LabelBaseAttack = 247,
    LabelBaseDefense = 248,
    LabelBluntResist = 249,
    LabelDecay = 250,
    LabelDefense = 251,
    LabelDefenseFromParrying = 252,
    LabelDoodadRequired = 253,
    LabelDurability = 254,
    LabelEquip = 255,
    LabelFireResist = 256,
    LabelGrouping = 257,
    LabelHave = 258,
    LabelHp = 259,
    LabelLastUpdated = 260,
    LabelLeftHandAttack = 261,
    LabelLevel = 262,
    LabelLightSourceWhenLit = 263,
    LabelMalignityNegative = 264,
    LabelMalignityPlus = 265,
    LabelOnEquip = 266,
    LabelPiercingResist = 267,
    LabelRange = 268,
    LabelRanged = 269,
    LabelRangedAttack = 270,
    LabelRangedDamage = 271,
    LabelRequiredMods = 272,
    LabelRequires = 273,
    LabelResists = 274,
    LabelRightHandAttack = 275,
    LabelScore = 276,
    LabelSkill = 277,
    LabelSlashingResist = 278,
    LabelStokeFireStrength = 279,
    LabelUse = 280,
    LabelUses = 281,
    LabelVersion = 282,
    LabelVulnerabilities = 283,
    LabelWeight = 284,
    LabelWeightCapacity = 285,
    LabelWeightReduction = 286,
    LastPlaceYouLeftOff = 287,
    LearnedHowToCreate = 288,
    LeftHand = 289,
    Legs = 290,
    LikelyFailures = 291,
    LoadingMods = 292,
    LoadingSprites = 293,
    LoadingWorld = 294,
    LocalFile = 295,
    LocalVersionOfModDetected = 296,
    LoseBonesLayBleaching = 297,
    LoseEndIsBeginning = 298,
    LoseSadlyNoTrace = 299,
    LostHealth = 300,
    LostHunger = 301,
    LostStamina = 302,
    LostThirst = 303,
    MapNotOfThisArea = 304,
    MaterialsDestroyedDisassembly = 305,
    MaterialsDestroyedDismantle = 306,
    MetabolismSlowed = 307,
    MilestoneIsHidden = 308,
    MilestoneIsInvisible = 309,
    MissedWith = 310,
    MissingRequiredMods = 311,
    ModImportedSaveGame = 312,
    ModLoadError = 313,
    ModRequiresItself = 314,
    ModWithNameAlreadyExists = 315,
    MouseButton = 316,
    MoveAllOfSameQualityToInventory = 317,
    MoveAllOfSameQualityToLastOpenedContainer = 318,
    MoveAllOfSameQualityToOpenedContainer = 319,
    MoveAllToInventory = 320,
    MoveAllToLastOpenedContainer = 321,
    MoveAllToOpenedContainer = 322,
    MoveOverTrapButDoNotSetOff = 323,
    MoveToInventory = 324,
    MoveToLastOpenedContainer = 325,
    MoveToOpenedContainer = 326,
    MustBeEquippedToIgnite = 327,
    MustCastIntoWater = 328,
    Mysteriously = 329,
    Name = 330,
    NearlyBurnedEquipmentProtectedYou = 331,
    Neck = 332,
    NeedAShovelToDigTreasure = 333,
    NeedDeepWaterForRaft = 334,
    NeedFishingNetForTreasure = 335,
    NeedToEquipToShoot = 336,
    NeedToStartTravelsOutside = 337,
    No = 338,
    NoAmmunitionForThatWeapon = 339,
    NoBlackPowderToFireWeapon = 340,
    NoFireToStokeWith = 341,
    NoFishAtLocation = 342,
    NoFuelItemsToStartFire = 343,
    NoInkToDrawMap = 344,
    NoKindlingToStartFire = 345,
    NoLongerFeelPainOBeingfBurned = 346,
    NoMoreRoomInContainer = 347,
    NoNeedToStokeFire = 348,
    NoRoomForImprovement = 349,
    NoRoomToDrop = 350,
    NotAvailable = 351,
    NotEnoughFoodToTravel = 352,
    NotEnoughPurifiedWaterYet = 353,
    NotEnoughStrengthToThrow = 354,
    NotEnoughTreasureToReturn = 355,
    NotFacingCreatureToHeal = 356,
    NotFacingLockedObject = 357,
    NotFacingValidFoodForPreservation = 358,
    NotFacingValidItemForReinforcement = 359,
    NotFacingValidItemForRepair = 360,
    NotFacingValidItemToTransmogrify = 361,
    NothingHereToCarve = 362,
    NothingHereToFill = 363,
    NothingHereToGardenWith = 364,
    NoTinderToStartFire = 365,
    NotInRangeOfTreasure = 366,
    NoWaterInStill = 367,
    NoWhereNearTreasure = 368,
    NumberEight = 369,
    NumberFive = 370,
    NumberFour = 371,
    NumberNine = 372,
    NumberOne = 373,
    NumberSeven = 374,
    NumberSix = 375,
    NumberTen = 376,
    NumberThree = 377,
    NumberTwo = 378,
    ObjectIsLocked = 379,
    Offer = 380,
    Ok = 381,
    OpenDoor = 382,
    OpenFolderFailed = 383,
    OverEatingLostStamina = 384,
    OverHydratingLostStamina = 385,
    PaperTurnedToMush = 386,
    PartiallyDecodedMap = 387,
    PastExperiencesProvideBenefits = 388,
    PenultimateAnd = 389,
    PetCreature = 390,
    PickupAllItems = 391,
    PickupItem = 392,
    Piercing = 393,
    Place = 394,
    PlacedOnGround = 395,
    Plant = 396,
    PlantedInGround = 397,
    PlantIsFertile = 398,
    PlantIsNotFertile = 399,
    PlantVeryHealthy = 400,
    Poisoned = 401,
    PoisonedLostHealth = 402,
    PoisonWorkedItsCourse = 403,
    PouredOutWater = 404,
    PouredOutWaterOnYourself = 405,
    PouredWaterIntoStill = 406,
    PreservedFood = 407,
    PublishingMod = 408,
    PurifiedWaterInStill = 409,
    Quality = 410,
    Recent = 411,
    RefreshingMods = 412,
    Reinforce = 413,
    Release = 414,
    RemovedBlood = 415,
    RemoveFromQuickslot = 416,
    Rename = 417,
    Repair = 418,
    RequiredForDisassembleLabel = 419,
    RequiredForDisassembly = 420,
    RequiredModsMissingWantToContinue = 421,
    RequiredModsNotLoaded = 422,
    RequiresFireToBeLit = 423,
    RequiresYouAroundFireSource = 424,
    RequiresYouToBeAround = 425,
    Rest = 426,
    Rested = 427,
    Resting = 428,
    RestInterrupted = 429,
    RestOnGround = 430,
    ReturnedToCivilization = 431,
    ReturningToCivilizationSetOffAgain = 432,
    ReturnsToLife = 433,
    ReturnToTitleScreenNoSaveInDailyChallenge = 434,
    ReturnToTitleScreenProgressWillBeSaved = 435,
    RightHand = 436,
    SailedToCivilization = 437,
    SavingGame = 438,
    Score = 439,
    ScrollProvidedNoUsefulInsight = 440,
    SeaweedFromWater = 441,
    SecondQuarterOfDay = 442,
    SecondQuarterOfNight = 443,
    SeeGrowing = 444,
    SeemsToHaveDrawnEnergy = 445,
    SetTrapOffButNoDamage = 446,
    SetUp = 447,
    ShadowInTheWater = 448,
    Simple = 449,
    Skill = 450,
    SkillHasRaised = 451,
    Slashing = 452,
    Sleeping = 453,
    SleepInterrupted = 454,
    Slept = 455,
    Soil = 456,
    SoilWouldHaveNoEffect = 457,
    SomethingInTheWayOfCarving = 458,
    SomethingInTheWayOfDigging = 459,
    SomethingInTheWayOfDiggingCarveFirst = 460,
    SomethingInTheWayOfFishing = 461,
    SomethingInTheWayOfGatheringCarveFirst = 462,
    SomethingInTheWayOfPerforming = 463,
    SomethingInTheWayOfPlacing = 464,
    SomethingInWayOfClosingDoor = 465,
    SoothedYourBurnInjuries = 466,
    Sort = 467,
    SortedByCategory = 468,
    SortedByDecay = 469,
    SortedByDurability = 470,
    SortedByGroup = 471,
    SortedByName = 472,
    SortedByQuality = 473,
    SortedByRecent = 474,
    SortedBySkill = 475,
    SortedByWeight = 476,
    StaminaIsFull = 477,
    StartedFire = 478,
    StartTravelInWater = 479,
    StarvingToDeath = 480,
    SteamWorkshop = 481,
    SteppingOnHasInjuredYouForDamage = 482,
    StillHasNoWaterToPurify = 483,
    StirredUpClawWorm = 484,
    StirredUpCreature = 485,
    StoppedYourBleeding = 486,
    StopUsingRaft = 487,
    StrengthIncreasing = 488,
    SummonedGuardiansByDiggingTreasure = 489,
    SunIsRising = 490,
    SunIsSetting = 491,
    SunNotBrightEnoughToStartFire = 492,
    Tame = 493,
    TamedAppearsAngered = 494,
    TamedAppearsContended = 495,
    TamedAppearsHappy = 496,
    TamedAppearsUpset = 497,
    TamedCreature = 498,
    TeleportBlocked = 499,
    Teleported = 500,
    ThereIsNoSunToStartFire = 501,
    ThirdQuarterOfDay = 502,
    ThirdQuarterOfNight = 503,
    Throw = 504,
    ThrownIntoDepths = 505,
    ThrownIntoObstacle = 506,
    TooDamaged = 507,
    TooExhaustedToJump = 508,
    ToolAppearedEffectiveForGathering = 509,
    TrampledFire = 510,
    TrampledIntoGround = 511,
    TrampleIntoGround = 512,
    Trampling = 513,
    Transmogrified = 514,
    TravelAway = 515,
    TravelToFarOffLands = 516,
    TreasureIsBlocked = 517,
    True = 518,
    UnableToImportSave = 519,
    UnableToLoadRequiredMods = 520,
    UnEquip = 521,
    Unknown = 522,
    UnknownItem = 523,
    UnlockedChest = 524,
    UnpurifiedWaterInStill = 525,
    UpdatingMod = 526,
    URLHasOpenedInWebBrowser = 527,
    UsedSoilToIncreaseFertility = 528,
    UsedToSpeedUpGrowing = 529,
    UsingBareFistsToFight = 530,
    UsingBareHands = 531,
    VersionWarning = 532,
    WaitUntilFireCooledToGetWater = 533,
    WalkingDistanceOfTreasure = 534,
    WantToDeleteAllSavedData = 535,
    WantToDeleteThisGame = 536,
    WantToPublishThisMod = 537,
    WantToPublishUpdateToMod = 538,
    WantToUninstallThisMod = 539,
    Water = 540,
    WaterDoesNotNeedDesalination = 541,
    WaterIncreaseFertilityOfPlant = 542,
    WaterPutOutFire = 543,
    WaterWouldHaveNoEffect = 544,
    Weight = 545,
    WeightCapacity = 546,
    WelcomeToWayward22 = 547,
    WhatWouldYouLikeToNameItem = 548,
    WinFindWayBackToCivilization = 549,
    WinSailBackWithRiches = 550,
    WinTravelledBackToCivilization = 551,
    With = 552,
    WorkingYourselfIntoExhaustion = 553,
    WorkshopHasBeenOpenedPressOkAfter = 554,
    Yes = 555,
    YouAte = 556,
    YouBeginResting = 557,
    YouCollected = 558,
    YouCrafted = 559,
    YouDied = 560,
    YouDisassembled = 561,
    YouDismantled = 562,
    YouDrank = 563,
    YouEquip = 564,
    YouFailedTo = 565,
    YouFailedToHeal = 566,
    YouFailedToHealCreature = 567,
    YouFire = 568,
    YouGathered = 569,
    YouHaveHealedCreature = 570,
    YouHaveKilled = 571,
    YouHaveReleased = 572,
    YouHaveTamed = 573,
    YouNoticeBecomeEnraged = 574,
    YouNoticeDying = 575,
    YouNoticeFertilityDecreasing = 576,
    YouNoticeFertilityIncreasing = 577,
    YouNoticeGrowing = 578,
    YouNoticePerish = 579,
    YouNoticeStumbleInjureItself = 580,
    YouNoticeTreeBecameLush = 581,
    YouNoticeTreeRegrown = 582,
    YouNoticeWoundsClosing = 583,
    YouNoticeZombieHorde = 584,
    YouOfferedToCreature = 585,
    YouOpen = 586,
    YouPickedUp = 587,
    YouRepair = 588,
    YourFist = 589,
    YouRub = 590,
    YouSalvaged = 591,
    YouSee = 592,
    YouSeeAnAberrant = 593,
    YouSeeSpringForth = 594,
    YouSeparate = 595,
    YouThrew = 596,
    YouUnequip = 597,
    YouUsed = 598,
}
declare var Z_MIN: number;
declare var Z_CAVE: number;
declare var Z_NORMAL: number;
declare var Z_MAX: number;
declare enum Source {
    Actions = 0,
    Audio = 1,
    FlowField = 2,
    Game = 3,
    Item = 4,
    Languages = 5,
    MapGen = 6,
    Mod = 7,
    Mods = 8,
    ResourceLoader = 9,
    SaveLoad = 10,
    Shaders = 11,
    Steamworks = 12,
    Ui = 13,
    Utilities = 14,
}
declare enum AttackType {
    Melee = 0,
    HandToHand = 1,
    Shoot = 2,
    Sling = 3,
    Fire = 4,
    ThrowItem = 5,
}
declare enum InspectType {
    None = 0,
    Tile = 1,
    Doodad = 2,
    Creature = 3,
    Items = 4,
    Quality = 5,
}
declare enum MoveType {
    None = 0,
    Water = 1,
    ShallowWater = 2,
    Land = 4,
    Tree = 8,
    Mountain = 16,
    Fire = 32,
    BreakWalls = 64,
    Flying = 15,
}
declare enum DamageType {
    Blunt = 1,
    Slashing = 2,
    Piercing = 4,
    Fire = 8,
    True = 16,
    Last = 32,
}
declare function fullDamageType(damageType: DamageType): string;
declare class Resistances {
    [index: number]: any;
    constructor(...args: any[]);
}
declare class Vulnerabilities {
    [index: number]: any;
    constructor(...args: any[]);
}
declare class Defense {
    base: number;
    resist: Resistances;
    vulnerable: Vulnerabilities;
    constructor(base: number, resist: Resistances, vulnerable: Vulnerabilities);
}
declare enum DoorOrientation {
    Default = 0,
    Vertical = 1,
}
declare enum FacingDirection {
    None = -1,
    East = 0,
    North = 1,
    West = 2,
    South = 3,
}
declare enum Gender {
    Male = 0,
    Female = 1,
}
declare enum SaveType {
    InGame = 0,
    Quit = 1,
    BackToMainMenu = 2,
}
declare enum LootGroupType {
    Low = 0,
    High = 1,
    Treasure = 2,
    SeaTreasure = 3,
    CaveChest = 4,
}
declare enum EquipType {
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
    RightHand = 11,
}
declare enum RecipeLevel {
    Advanced = 0,
    Simple = 1,
    Intermediate = 2,
    Expert = 3,
}
declare enum ActionType {
    Disassemble = 0,
    Pickup = 1,
    Throw = 2,
    Attack = 3,
    StartFire = 4,
    Carve = 5,
    SetDown = 6,
    Eat = 7,
    Drink = 8,
    Rest = 9,
    Sleep = 10,
    Heal = 11,
    Dig = 12,
    Paddle = 13,
    GatherWater = 14,
    Shoot = 15,
    Cast = 16,
    TraverseTheSea = 17,
    LockPick = 18,
    Sling = 19,
    Repair = 20,
    Decode = 21,
    Read = 22,
    Reinforce = 23,
    Gather = 24,
    StokeFire = 25,
    Garden = 26,
    Pour = 27,
    Plant = 28,
    GatherTreasure = 29,
    Ignite = 30,
    Build = 31,
    OpenContainer = 32,
    Preserve = 33,
    Open = 34,
    DrinkCure = 35,
    TellTime = 36,
    SailToCivilization = 37,
    Transmogrify = 38,
    Fire = 39,
    Teleport = 40,
    Extinguish = 41,
    DrawMap = 42,
    Dismantle = 43,
    PourOnYourself = 44,
    Squeeze = 45,
    Pet = 46,
    Tame = 47,
    Release = 48,
    HealCreature = 49,
    RubClockwise = 50,
    RubCounterclockwise = 51,
}
declare enum ItemType {
    None = 0,
    Amber = 1,
    AnimalSkull = 2,
    Arrow = 3,
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
    FertileSoil = 17,
    WaterskinOfSeawater = 18,
    FirePlough = 19,
    FlowerSeeds = 20,
    Fossil = 21,
    GoldCoins = 22,
    GoldenChalice = 23,
    GoldenRing = 24,
    GoldenSword = 25,
    GrassSeeds = 26,
    IronOre = 27,
    Kindling = 28,
    LargeRock = 29,
    LeafBedroll = 30,
    LeatherHide = 31,
    Leaves = 32,
    Limestone = 33,
    Log = 34,
    MortarAndPestle = 35,
    WhiteMushrooms = 36,
    Nopal = 37,
    Peat = 38,
    Sandstone = 39,
    PileOfGravel = 40,
    PileOfSand = 41,
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
    RedBerries = 52,
    SpottedRedMushroom = 53,
    Rope = 54,
    Sapling = 55,
    Seaweed = 56,
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
    ThistleSeeds = 69,
    TreeBark = 70,
    TreeFungus = 71,
    Vine = 72,
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
    SandCastFlask = 115,
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
    Glue = 150,
    CookedSpiderMeat = 151,
    SpiderMeat = 152,
    IronLockPick = 153,
    RottingVegetation = 154,
    WildOnion = 155,
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
    MeltedAmber = 193,
    Tinder = 194,
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
    GrassBlades = 247,
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
    BerrySeeds = 267,
    CactiSeeds = 268,
    VineSeeds = 269,
    PaperSheet = 270,
    PaperMold = 271,
    FlowerPetals = 272,
    Thistles = 273,
    DrawnMap = 274,
    TatteredShirt = 275,
    TatteredPants = 276,
    WoodenGate = 277,
    PoisonIvyLeaves = 278,
    PoisonIvySeeds = 279,
    WroughtIronChest = 280,
    IronChest = 281,
    TallGrassSeeds = 282,
    Acorn = 283,
    SpiderEggs = 284,
    TailFeathers = 285,
    BigRedBerry = 286,
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
    MageCloak = 304,
    OrbOfMalign = 305,
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
}
declare enum ItemTypeGroup {
    Invalid = 800,
    Sharpened = 801,
    Carbon = 802,
    Arrow = 803,
    Skewer = 804,
    Fuel = 805,
    Medicinal = 806,
    Meat = 807,
    Food = 808,
    Insect = 809,
    Water = 810,
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
    Gardening = 834,
    Firemaking = 835,
    Bedding = 836,
    Tool = 837,
    Weapon = 838,
    Health = 839,
    Travel = 840,
    Housing = 841,
    Heating = 842,
    Storage = 843,
    Trap = 844,
    Other = 845,
    RawMeat = 846,
    CookedMeat = 847,
    ContainerOfSeawater = 848,
    ContainerOfDesalinatedWater = 849,
    ContainerOfMedicinalWater = 850,
    ContainerOfPurifiedFreshWater = 851,
    ContainerOfUnpurifiedFreshWater = 852,
    Campfire = 853,
    Furnace = 854,
    Kiln = 855,
    WaterStill = 856,
    Anvil = 857,
    Seed = 858,
    Fruit = 859,
    Vegetable = 860,
    Tinder = 861,
    Last = 862,
}
declare enum TerrainType {
    DeepSeawater = 0,
    Seawater = 1,
    ShallowSeawater = 2,
    DeepFreshWater = 3,
    FreshWater = 4,
    ShallowFreshWater = 5,
    Grass = 6,
    Tree = 7,
    BareTree = 8,
    TreeWithVines = 9,
    TreeWithBerries = 10,
    TreeWithFungus = 11,
    PalmTree = 12,
    BarePalmTree = 13,
    PalmTreeWithCoconuts = 14,
    Gravel = 15,
    Dirt = 16,
    Sand = 17,
    Snow = 18,
    Swamp = 19,
    Clay = 20,
    Ash = 21,
    Rocks = 22,
    RocksWithIron = 23,
    RocksWithTalc = 24,
    RocksWithCoal = 25,
    RocksWithLimestone = 26,
    CobblestoneFlooring = 27,
    Sandstone = 28,
    SandstoneFlooring = 29,
    SandstoneWithIron = 30,
    SandstoneWithNiter = 31,
    WoodenFlooring = 32,
    ClayBrickFlooring = 33,
    CaveEntrance = 34,
    RedCarpet = 35,
    Lava = 36,
}
declare enum DoodadType {
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
    GrowingGrass = 14,
    Vines = 15,
    Thistles = 16,
    GrowingMushroom = 17,
    WhiteMushrooms = 18,
    SpottedRedMushroom = 19,
    TallGrass = 20,
    Seaweed = 21,
    WildOnion = 22,
    PineapplePlant = 23,
    PileOfRocks = 24,
    BerryBush = 25,
    YellowFlowers = 26,
    Sapling = 27,
    GrowingPlant = 28,
    Cotton = 29,
    Tree = 30,
    TreeWithVines = 31,
    TreeWithBerries = 32,
    TreeWithFungus = 33,
    BareTree = 34,
    PalmTreeWithCoconuts = 35,
    PalmTree = 36,
    BarePalmTree = 37,
    Cacti = 38,
    DeadBush = 39,
    StoneWaterStill = 40,
    LitStoneWaterStill = 41,
    StoneCampfire = 42,
    LitStoneCampfire = 43,
    SandstoneKiln = 44,
    LitSandstoneKiln = 45,
    StoneFurnace = 46,
    LitStoneFurnace = 47,
    TorchStand = 48,
    LitTorchStand = 49,
    StoneAnvil = 50,
    Acid = 51,
    CaveEntrance = 52,
    WoodenDoorOpen = 53,
    WoodenGate = 54,
    WoodenGateOpen = 55,
    PoisonIvy = 56,
    WroughtIronChest = 57,
    IronChest = 58,
    OrnateWoodenChest = 59,
    SkeletalRemains = 60,
    ClayKiln = 61,
    LitClayKiln = 62,
    ClayCampfire = 63,
    LitClayCampfire = 64,
    ClayFurnace = 65,
    LitClayFurnace = 66,
    ClayWaterStill = 67,
    LitClayWaterStill = 68,
    SandstoneCampfire = 69,
    LitSandstoneCampfire = 70,
    SandstoneFurnace = 71,
    LitSandstoneFurnace = 72,
    SandstoneWaterStill = 73,
    LitSandstoneWaterStill = 74,
    StoneKiln = 75,
    LitStoneKiln = 76,
    WroughtIronAnvil = 77,
    IronAnvil = 78,
}
declare enum DoodadTypeGroup {
    Invalid = 400,
    LitCampfire = 401,
    LitFurnace = 402,
    LitKiln = 403,
    LitWaterStill = 404,
    Anvil = 405,
    Last = 406,
}
declare enum CreatureType {
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
}
declare enum SkillType {
    Chemistry = 0,
    Anatomy = 1,
    Archery = 2,
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
}
declare enum SfxType {
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
}
declare const equipTypeToMessage: Message[];
declare const recipeLevelToMessage: Message[];
declare const damageTypeToMessage: Message[];
declare enum PlayerState {
    None = 0,
    Dead = 1,
    Won = 2,
    Traveling = 3,
}
declare enum ObjectContext {
    None = 0,
    Inventory = 1,
    TileItem = 2,
    Doodad = 3,
    TileEvent = 4,
    Corpse = 5,
}
declare enum Delay {
    None = 0,
    LongPause = 25,
    Movement = 11,
    ShortPause = 13,
    Collision = 40,
    HotKey = 20,
}
declare enum StatType {
    EnemyHealth = 0,
    Stat = 1,
    Stamina = 2,
    Hunger = 3,
    Health = 4,
    Thirst = 5,
}
declare enum StatusType {
    Bleeding = 0,
    Poisoned = 1,
    Burned = 2,
}
declare enum ItemQuality {
    None = 0,
    Random = 1,
    Exceptional = 2,
    Remarkable = 3,
    Legendary = 4,
}
declare enum ItemImage {
    Default = 0,
    Exceptional = 1,
    Remarkable = 2,
    Legendary = 3,
    Damaged = 4,
    Selected = 5,
    Highlighted = 6,
}
declare enum RenderFlag {
    None = 0,
    Corpse = 1,
    Item = 2,
    Player = 4,
    Creature = 8,
    Terrain = 16,
    All = 65535,
}
declare enum OnEquipType {
    LightSource = 0,
    Telescopy = 1,
}
interface IOnEquipType {
    [index: number]: {};
}
declare const itemQualitySortOrder: {
    [index: number]: number;
};
declare const onEquipTypes: IOnEquipType;
declare enum KeyBind {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3,
    Idle = 4,
    One = 5,
    Two = 6,
    Three = 7,
    Four = 8,
    Five = 9,
    Six = 10,
    Seven = 11,
    Eight = 12,
    Nine = 13,
    Escape = 14,
    Inventory = 15,
    Help = 16,
    Skills = 17,
    Messages = 18,
    Options = 19,
    Alt = 20,
    Shift = 21,
    Equipment = 22,
    Crafting = 23,
    Actions = 24,
    Milestones = 25,
    Enter = 26,
    Ten = 27,
    Eleven = 28,
    Twelve = 29,
    PrimaryMouse = 30,
    SecondaryMouse = 31,
    Touch = 32,
}
declare enum BindType {
    Keyboard = 0,
    Mouse = 1,
    Other = 2,
}
interface IBindArray {
    [index: number]: IBind;
}
interface IModBindArray {
    [index: string]: IBind;
}
interface IBind {
    value: number;
    type: BindType;
}
interface IKeyBind {
    [index: number]: number;
}
declare const keybindOrder: KeyBind[];
declare const defaultBinds: IBindArray;
declare function addDefaultBind(key: KeyBind, value: number, type?: BindType, bindable?: boolean): void;
declare function removeDefaultKeybind(key: KeyBind): void;
declare var hotKeyNumbers: KeyBind[];
declare enum TurnType {
    Resting = 0,
    CheckUnderPlayer = 1,
    DontEnterCaves = 2,
    ForcePickUp = 3,
}
declare enum HintType {
    First = 0,
    WelcomeToWayward = 1,
    Controls = 2,
    CorpseCarving = 3,
    Doodads = 4,
    Caves = 5,
    Nightfall = 6,
    StaminaReplenishment = 7,
    HealthProblems = 8,
    Bleeding = 9,
    Poisoned = 10,
    Dehydration = 11,
    UseATool = 12,
    Durability = 13,
    Death = 14,
    ConsumingBadThings = 15,
    FastPickup = 16,
    Bugs = 17,
    HeldItems = 18,
    Milestones = 19,
    Burned = 20,
    Crafting = 21,
    Encumberance = 22,
    DailyChallengeMode = 23,
    MovingItems = 24,
    CraftingFailure = 25,
    Malignity = 26,
    Interface = 27,
    Last = 28,
}
interface IHint {
    name?: string;
    description?: string;
    highlightElementSelector?: string[];
}
declare const hints: IHint[];
declare const keyCodes: string[];
declare enum ScreenId {
    None = 0,
    Cover = 1,
    Title = 2,
    Game = 3,
}
declare enum TitleScreenId {
    Default = 0,
    EndGame = 1,
}
declare enum DialogId {
    Inventory = 0,
    Crafting = 1,
    Equipment = 2,
    Messages = 3,
    Skills = 4,
    Milestones = 5,
    Map = 6,
    Container = 7,
    Custom = 8,
}
declare enum SortType {
    Name = 0,
    Group = 1,
    Weight = 2,
    Recent = 3,
    Skill = 4,
    Decay = 5,
    Quality = 6,
    Category = 7,
    Durability = 8,
}
declare enum RestType {
    Resting = 0,
    Sleeping = 1,
}
declare enum LoadingType {
    Normal = 0,
    Rest = 1,
}
declare enum InputRecordType {
    KeyDown = 0,
    KeyUp = 1,
    MouseDown = 2,
    MouseUpOrLeave = 3,
    MouseMove = 4,
    MouseScroll = 5,
}
declare enum TextCase {
    None = 0,
    Title = 1,
    Sentence = 2,
}
declare namespace Terrain {
    interface ITile {
        creatureId?: number;
        doodadId?: number;
        corpseIds?: number[];
        eventId?: number;
        data: number;
    }
    interface ITileArray {
        [index: number]: ITile;
    }
    interface ITileContainer extends Item.IContainer, IPointZ {
    }
    interface ITileData {
        type: TerrainType;
        strength?: number;
        minDur?: number;
        maxDur?: number;
        quality?: string;
        gfx?: number;
    }
    interface ITerrainResource {
        items: ITerrainResourceItem[];
        defaultItem?: ItemType;
    }
    interface ITerrainResourceItem {
        type: ItemType;
        chance: number;
        chanceOutOf?: number;
        tileChange?: TerrainType;
        tileChangeChance?: number;
    }
    enum TileTemplateType {
        House = 0,
        Pond = 1,
        CavePond = 2,
        Desert = 3,
        Beach = 4,
        Boat = 5,
        Lava = 6,
    }
    interface ITemplate {
        w: number;
        h: number;
        terrainTypes: {
            [id: string]: TerrainType;
        };
        terrain: Array<string>;
        doodadTypes?: {
            [id: string]: DoodadType;
        };
        doodad?: Array<string>;
        degrade: number;
    }
    const resource: ITerrainResource[];
    const templates: {
        [id: number]: {
            [id: string]: ITemplate;
        };
    };
}
import Vec2 = TSM.vec2;
declare enum TileType {
    Top = 0,
    TopLeft = 1,
    Left = 2,
    BottomLeft = 3,
    Bottom = 4,
    BottomRight = 5,
    Right = 6,
    TopRight = 7,
    InnerTopLeft = 8,
    InnerBottomLeft = 9,
    InnerBottomRight = 10,
    InnerTopRight = 11,
    CenterTopLeft = 12,
    CenterBottomLeft = 13,
    CenterBottomRight = 14,
    CenterTopRight = 15,
}
declare function rotateTileType90Deg(tileType: TileType, times: number): TileType;
declare function getTileLoc(tileType: TileType, tileInfo: TerrainTileInfo, variation: number): Vec2;
declare class Bound2 {
    min: Vec2;
    max: Vec2;
    constructor(min: Vec2, max: Vec2);
}
declare class TerrainTileInfo {
    top: Vec2[];
    left: Vec2[];
    right: Vec2[];
    bottom: Vec2[];
    topLeft: Vec2;
    topRight: Vec2;
    bottomLeft: Vec2;
    bottomRight: Vec2;
    innerTopLeft: Vec2;
    innerTopRight: Vec2;
    innerBottomLeft: Vec2;
    innerBottomRight: Vec2;
    centerTopLeft: Vec2[];
    centerTopRight: Vec2[];
    centerBottomLeft: Vec2[];
    centerBottomRight: Vec2[];
    animated: boolean;
    constructor(xOffset: number, yOffset: number, animated: boolean);
    getCenterTopLeft(variation: number): Vec2;
    getCenterTopRight(variation: number): Vec2;
    getCenterBottomLeft(variation: number): Vec2;
    getCenterBottomRight(variation: number): Vec2;
    getLeft(variation: number): Vec2;
    getRight(variation: number): Vec2;
    getTop(variation: number): Vec2;
    getBottom(variation: number): Vec2;
}
declare class MountainTileInfo extends TerrainTileInfo {
    extendedInfo: TerrainTileInfo;
    constructor(xOffset: number, yOffset: number, animated: boolean);
}
declare class TileAtlas {
    static terrain: {
        [index: number]: TerrainTileInfo;
    };
    static doodads: {
        [index: number]: Doodad.DoodadInfo;
    };
    static isMountain(type: TerrainType): boolean;
    static isOre(type: TerrainType): boolean | undefined;
    static isWater(type: TerrainType): boolean;
    static isFloor(type: TerrainType): boolean;
}
declare namespace Creature {
    enum SpawnGroup {
        Any = 0,
        Guardians = 1,
        Water = 2,
        WaterCave = 3,
        Cave = 4,
        Night = 5,
    }
    enum AiType {
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
    enum SpawnableTiles {
        None = 0,
        Default = 1,
        DefaultWithLava = 2,
        DefaultWithWater = 3,
        DeepWater = 4,
        Water = 5,
        Flying = 6,
        Ghost = 7,
        Desert = 8,
    }
    const spawnableTiles: TerrainType[][];
    interface ICreatureDescription {
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
        blood?: number[];
        aberrantBlood?: number[];
        loot?: ICreatureLoot[];
        spawnTiles: SpawnableTiles;
        spawnMalignity?: number;
        spawnOnNegativeMalignity?: boolean;
        spawnGroup?: SpawnGroup[];
        makeNoise?: boolean;
        canCauseStatus?: StatusType[];
        lootGroup?: LootGroupType;
        jumpOver?: boolean;
        mod?: number;
        noCorpse?: boolean;
        respawn?: boolean;
        malignity: number;
        prefix?: string;
        suffix?: string;
        waterAnimations?: boolean;
        description?: string;
        tamingDifficulty?: number;
        acceptedItems?: [ItemType | ItemTypeGroup];
    }
    interface ICreatureLoot {
        item: ItemType;
        chance?: number;
    }
    const defines: (ICreatureDescription | undefined)[];
}
declare class SkillLevel {
    percent: number;
    bonus: number;
    core: number;
}
interface ISkillSet extends Array<SkillLevel> {
}
interface ISkillDescription {
    name?: string;
    attribute: StatType;
    description?: string;
    malignity?: number;
}
declare function skillSet(): ISkillSet;
declare function skillChance(level: number): number;
declare const skillDescriptions: ISkillDescription[];
declare namespace Corpse {
    const defines: (ICorpseDescription | undefined)[];
}
declare namespace Pathing {
    interface IPathfindingNode extends IPoint {
    }
    interface IPathfindingResult {
        start: IPathfindingNode;
        end: IPathfindingNode;
        path: IPathfindingNode[];
    }
    function findPath(canMoveCheck: (x: number, y: number) => boolean, result: IPathfindingResult, ignoreSpecifics?: boolean): boolean;
}
declare namespace Creature {
    interface ICreature extends IPointZ {
        readonly type: CreatureType;
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
        enemyAttempts?: number;
        happiness?: number;
        description(): ICreatureDescription | undefined;
        id(): number | undefined;
        isHidden(): boolean;
        isDefender(): boolean;
        getInspectMessage(): UI.IMessagePack;
        checkForBurn(): boolean;
        damage(hitDamage: number, damageType: DamageType, weaponName: string | null, skipMilestones: boolean): number | null;
        isTamed(): boolean;
        tame(): boolean;
        release(): boolean;
        pet(): boolean;
        skipNextTurn(): void;
        update(creatureId: number): boolean;
        moveTo(x: number, y: number): boolean;
    }
    class ActualCreature implements ICreature, IPropSerializable, IUnserializedCallback {
        x: number;
        y: number;
        z: number;
        fromX: number;
        fromY: number;
        direction: FacingDirection;
        ai: AiType;
        type: CreatureType;
        anim: number;
        hp: number;
        maxhp: number;
        loot?: ItemType[];
        aberrant?: boolean;
        enemy?: number;
        enemyAttempts?: number;
        respawned?: boolean;
        happiness?: number;
        private shouldSkipNextTurn;
        private _description;
        constructor(creatureType?: CreatureType, x?: number, y?: number, z?: number, bypass?: boolean, aberrant?: boolean);
        description(): ICreatureDescription | undefined;
        id(): number | undefined;
        isHidden(): boolean;
        isDefender(): boolean;
        getInspectMessage(): UI.IMessagePack;
        checkForBurn(): boolean;
        isTamed(): boolean;
        tame(): boolean;
        release(): boolean;
        pet(): boolean;
        skipNextTurn(): void;
        update(creatureId: number): boolean;
        moveTo(x: number, y: number): boolean;
        damage(hitDamage: number, damageType: DamageType, weaponName: string | null, skipMilestones: boolean): number | null;
        getSerializationProperties(_: string): string[];
        onUnserialized(): void;
        private findPath(result);
        private checkCreatureMove(tileX, tileY, tileZ, moveType, isFinalMove?);
    }
    function getHappinessLevel(creatureDesc: ICreatureDescription): number;
    function spawn(creatureType: CreatureType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean): number | null;
    function spawnFromGroup(creatureGroup: SpawnGroup, x: number, y: number, z: number, bypass?: boolean): number | null;
    function spawnClawWorm(): void;
    function remove(creature: ICreature): void;
    function updateAll(turnType?: TurnType): void;
    function getMoveTypesInFov(): MoveType[];
    function getMovePenalty(moveType: MoveType, tile: Terrain.ITile, isFinalMove?: boolean): number;
    function checkSpawnMalignity(creatureDescription: ICreatureDescription, bypass?: boolean): boolean;
    function getCreaturesWithSpawnGroup(group?: SpawnGroup, checkMalignity?: boolean): CreatureType[];
}
declare type ActionCallback = (item: Item.IItem | null) => void;
declare namespace Actions {
    function add(use: ActionType, callback: ActionCallback): void;
    function remove(use: ActionType): void;
    function execute(use: ActionType, item: Item.IItem | null, itemBypass?: boolean): void;
    function preserve(preserver: Item.IItem, preservee?: Item.IItem | null): void;
    function addFuel(fuel: Item.IItem, torch: Item.IItem): void;
    function consume(itemType: ItemType, actionType: ActionType): boolean;
    function consumeItem(item: Item.IItem, actionType: ActionType): void;
    function openContainer(container: Item.IContainer, containerName: string, silent?: boolean): void;
    function reinforce(reinforcer: Item.IItem, reinforcee?: Item.IItem | null): void;
    function repair(repairer: Item.IItem, repairee?: Item.IItem | Doodad.IDoodad | null): void;
    function transmogrify(transmogrifier: Item.IItem, transmogrifee?: Item.IItem | null): void;
    function inspect(tileX: any, tileY: number): void;
    function canTryCarve(): boolean;
    function hurtTerrain(x: number, y: number, z: number, tile: Terrain.ITile): boolean;
    function openDoor(): boolean;
    function closeDoor(): boolean;
    function squeeze(item: Item.IItem): void;
    function rub(item: Item.IItem, clockwise: boolean): void;
}
declare class WAudio {
    musicSpeed: number;
    fadingOut: boolean;
    fadingIn: boolean;
    private sfx;
    private music;
    private soundList;
    private soundDelay;
    private musicPlaylist;
    private musicTrack;
    private fileFormat;
    constructor();
    setUpMusic(track: HTMLAudioElement): void;
    playMusic(): void;
    updateMusicSpeed(speed: number): void;
    fadeOut(): void;
    fadeIn(): void;
    nextTrack(): void;
    playEffect(sound: SfxType, speed?: number): void;
    updateVolume(): void;
    queueEffect(soundEffect: SfxType, delay?: number, speed?: number): void;
    processEffects(): void;
    private play(mediaElement);
}
declare namespace Corpse {
    interface ICorpseDescription {
        name?: string;
        decay?: number;
        resource?: ICorpseResourceDrop[];
        carve?: boolean;
        skill?: SkillType;
        damage?: number;
        prefix?: string;
        blood?: boolean;
    }
    interface ICorpseResourceDrop {
        item: ItemType;
        chance?: number;
    }
    interface ICorpse extends IPointZ {
        type: CreatureType;
        decay?: number;
        aberrant?: boolean;
    }
    function create(corpse: ICorpse): void;
    function updateAll(): void;
    function getResources(corpse: Corpse.ICorpse): ItemType[];
    function remove(corpse: ICorpse): void;
    function createBlood(x: number, y: number, z: number): void;
}
declare namespace Doodad {
    interface IDoodadDescription extends Item.IObjectDescription {
        allowedTiles?: TerrainType[];
        animated?: boolean;
        blockDig?: boolean;
        blockJump?: boolean;
        blockMove?: boolean;
        canPickupWithoutTool?: boolean;
        caveGrow?: boolean;
        damage?: number;
        fire?: boolean;
        flammable?: boolean;
        garden?: boolean;
        graphicVariation?: boolean;
        growing?: boolean;
        growth?: DoodadType;
        isLocked?: boolean;
        lit?: DoodadType;
        mod?: number;
        onBurn?: ItemType;
        resource?: IDoodadResource[];
        revert?: DoodadType;
        spreadMax?: number;
        tall?: boolean;
        trample?: boolean;
        trap?: boolean;
        variation?: boolean;
        waterSource?: boolean;
        causesStatus?: Array<StatusType>;
        repairable?: boolean;
        stokable?: boolean;
        particles: number[];
        lightSource?: number;
        group?: DoodadTypeGroup;
        waterStill?: boolean;
    }
    interface IDoodadResource {
        item: ItemType;
        chance?: number;
    }
    const defines: (IDoodadDescription | undefined)[];
    const groups: (IGroupDescription | undefined)[];
}
declare namespace Doodad {
    class DoodadInfo {
        type: DoodadType;
        tall: boolean;
        animated: boolean;
        topLeft: Vec2;
        topRight: Vec2;
        bottomLeft: Vec2;
        bottomRight: Vec2;
        constructor(type: DoodadType, tall: boolean, xOffset: number, yOffset: number, animated: boolean);
    }
    interface IDoodad extends Item.IObject, IPointZ {
        type: DoodadType;
        spread?: number;
        growInto?: DoodadType;
        gatherReady?: boolean;
        torch?: any;
        weight?: number;
        treasure?: boolean;
    }
    interface IGroupDescription {
        name: string;
        prefix?: string;
        suffix?: string;
    }
    interface IDoodadDoor extends IDoodad {
        orientation: DoorOrientation;
    }
    function create(type: DoodadType, x: number, y: number, z: number, spread?: number, decay?: number, minDur?: number, maxDur?: number, weight?: number): IDoodad | undefined;
    function remove(doodad: IDoodad): void;
    function updateAll(): void;
    function update(doodad: IDoodad): void;
    function canGrowInCaves(doodad: IDoodad): boolean;
    function gather(doodad: IDoodad): void;
    function canPickup(doodad: IDoodad, message?: boolean): boolean;
    function pickup(x: number, y: number, z: number): void;
    function checkForTrampling(doodad: IDoodad, creatureId?: number | null): boolean;
    function getGardenFertilityMessage(spread: number): Message;
    function getDurabilityMessage(doodad: IDoodad): Message;
    function messageGardenFertility(spread: number): void;
    function inspect(doodad: IDoodad): IInspect[];
    function causeStatus(doodadDesc: IDoodadDescription): void;
    function damage(doodad: IDoodad, forceBreak?: boolean): void;
    function addTreasureChestLoot(doodad: IDoodad): void;
    function isDoodadTypeGroup(doodadType: (DoodadType | DoodadTypeGroup)): boolean;
}
declare namespace Item {
    var lootGroup: (ItemType[] | undefined)[];
    var groups: (IGroupDescription | undefined)[];
    var actionDescriptions: (IActionDescription | undefined)[];
    var defines: (IItemDescription | undefined)[];
    function RecipeComponent(type: (ItemType | ItemTypeGroup), requiredAmount: number, consumedAmount: number, disassembleAmount?: number, ignoreWeight?: boolean): IRecipeComponent;
    function generateLookups(): void;
}
declare namespace Terrain {
    interface ITerrainDescription {
        name?: string;
        passable?: boolean;
        particles: number[];
        durability?: number;
        water?: boolean;
        regathered?: boolean;
        shallowWater?: boolean;
        freshWater?: boolean;
        gather?: boolean;
        noGfxSwitch?: boolean;
        noLos?: boolean;
        flammable?: boolean;
        skill?: SkillType;
        sound?: SfxType;
        strength?: number;
        leftOver?: TerrainType;
        terrainType?: TerrainType;
        doodad?: DoodadType;
        isMountain?: boolean;
        background?: TerrainType;
        noBackground?: boolean;
        mod?: number;
        isOre?: boolean;
        suffix?: string;
        prefix?: string;
        animated?: boolean;
    }
    const defines: (ITerrainDescription | undefined)[];
}
declare enum MilestoneType {
    Abnormalizer = 0,
    Chef = 1,
    Extincteur = 2,
    Crafter = 3,
    Gardener = 4,
    Gatherer = 5,
    Hunter = 6,
    Locksmith = 7,
    ReaperOfSouls = 8,
    Survivor = 9,
    Thrower = 10,
    Trapper = 11,
    TreasureHunter = 12,
    Collector = 13,
    Explorer = 14,
    Grandmaster = 15,
    Prepared = 16,
    Doctor = 17,
    Artificer = 18,
    Seafarer = 19,
    Navigator = 20,
    DragonSlayer = 21,
    Treasurer = 22,
    Pulchritudinous = 23,
}
declare enum MilestoneVisibilityType {
    Visible = 0,
    Invisibile = 1,
    Hidden = 2,
}
declare enum MilestoneDataType {
    Counter = 0,
    Check = 1,
}
interface IMilestone {
    name?: string;
    description?: string;
    amount: number;
    skills?: SkillType[];
    dataType?: MilestoneDataType;
    visibility?: MilestoneVisibilityType;
}
interface IMilestoneData {
    amount: number;
    data?: any[];
}
declare const milestones: IMilestone[];
declare var milestoneData: IMilestoneData[];
declare module Languages {
    var saveData: {
        language: string | null;
    };
    enum UiTranslation {
        Bleeding = 0,
        Burned = 1,
        Dehydrated = 2,
        DisableHints = 3,
        EnableHints = 4,
        Encumbered = 5,
        EquipmentBack = 6,
        EquipmentBelt = 7,
        EquipmentChest = 8,
        EquipmentFeet = 9,
        EquipmentHands = 10,
        EquipmentHead = 11,
        EquipmentLeftHand = 12,
        EquipmentLegs = 13,
        EquipmentNeck = 14,
        EquipmentRightHand = 15,
        Exhausted = 16,
        Health = 17,
        Healthy = 18,
        HudActions = 19,
        HudCrafting = 20,
        HudEquipment = 21,
        HudFilter = 22,
        HudHelp = 23,
        HudInventory = 24,
        HudMessages = 25,
        HudMilestones = 26,
        HudOptions = 27,
        HudSave = 28,
        HudSkills = 29,
        HudTitleScreen = 30,
        Hunger = 31,
        Malignity = 32,
        MenuAbout = 33,
        MenuAboutCredits = 34,
        MenuAboutDonators = 35,
        MenuAboutIntro = 36,
        MenuAboutLibraries = 37,
        MenuAboutLibrariesIntro = 38,
        MenuAboutMessage = 39,
        MenuAboutThanks = 40,
        MenuAboutThanksIntro = 41,
        MenuDailyChallenge = 42,
        MenuDeleteAllGameData = 43,
        MenuDeleteGame = 44,
        MenuEditGame = 45,
        MenuEndGameDead = 46,
        MenuEndGameWon = 47,
        MenuExportGame = 48,
        MenuExportSave = 49,
        MenuImportGame = 50,
        MenuImportSave = 51,
        MenuManageMods = 52,
        MenuManageModsInternal = 53,
        MenuManageModsLocal = 54,
        MenuManageModsMessage = 55,
        MenuManageModsPublishMod = 56,
        MenuManageModsUninstallMod = 57,
        MenuManageModsViewInSteamWorkshop = 58,
        MenuManageModsWorkshop = 59,
        MenuModdingGuide = 60,
        MenuNews = 61,
        MenuNoHighscores = 62,
        MenuNoMods = 63,
        MenuOpenLogsFolder = 64,
        MenuOpenModsFolder = 65,
        MenuOptions = 66,
        MenuOptionsMessage = 67,
        MenuPlayGame = 68,
        MenuPlayGameMessage = 69,
        MenuPlayGameNewGame = 70,
        MenuPostATweet = 71,
        MenuQuitGame = 72,
        MenuReloadGame = 73,
        MenuShareOnFacebook = 74,
        MenuToggleDeveloperTools = 75,
        MenuViewHighscores = 76,
        MenuViewHighscoresMessage = 77,
        MenuVisitSteamWorkshop = 78,
        NearDeath = 79,
        NextHint = 80,
        OptionsAlternateContextMenu = 81,
        OptionsAlternateContextMenuTooltip = 82,
        OptionsAlternateFont = 83,
        OptionsAudio = 84,
        OptionsAutoGather = 85,
        OptionsAutoGatherTooltip = 86,
        OptionsAutoPickup = 87,
        OptionsAutoPickupTooltip = 88,
        OptionsBindDefault = 89,
        OptionsBinds = 90,
        OptionsDeveloper = 91,
        OptionsDialogOpacity = 92,
        OptionsDropOnGather = 93,
        OptionsDropOnGatherTooltip = 94,
        OptionsDropUnderYourself = 95,
        OptionsDropUnderYourselfTooltip = 96,
        OptionsEffects = 97,
        OptionsEnableHints = 98,
        OptionsEnableHintsTooltip = 99,
        OptionsFullscreenMode = 100,
        OptionsGame = 101,
        OptionsGraphics = 102,
        OptionsKeepSortActive = 103,
        OptionsKeepSortActiveTooltip = 104,
        OptionsKeyBindRebinding = 105,
        OptionsLanguage = 106,
        OptionsMouseClickMovement = 107,
        OptionsMouseClickMovementTooltip = 108,
        OptionsMusic = 109,
        OptionsMute = 110,
        OptionsNextSong = 111,
        OptionsPixelFont = 112,
        OptionsProtectedCraftingItems = 113,
        OptionsProtectedCraftingItemsTooltip = 114,
        OptionsSaveData = 115,
        OptionsScaleDefault = 116,
        OptionsScaleIn = 117,
        OptionsScaleOut = 118,
        OptionsSkipIntro = 119,
        OptionsSkipIntroTooltip = 120,
        OptionsVisionDither = 121,
        OptionsVisionFade = 122,
        OptionsWarnOnDangerousActions = 123,
        OptionsWarnOnDangerousActionsTooltip = 124,
        OptionsWarnWhenBreakingItems = 125,
        OptionsWarnWhenBreakingItemsTooltip = 126,
        OptionsWindowedMode = 127,
        OptionsWorldTooltips = 128,
        OptionsWorldTooltipsTooltip = 129,
        OptionsZoomIn = 130,
        OptionsZoomOnScroll = 131,
        OptionsZoomOnScrollTooltip = 132,
        OptionsZoomOut = 133,
        Overburdened = 134,
        Poisoned = 135,
        PreviousHint = 136,
        QuickSlot1 = 137,
        QuickSlot2 = 138,
        QuickSlot3 = 139,
        QuickSlot4 = 140,
        QuickSlot5 = 141,
        QuickSlot6 = 142,
        QuickSlot7 = 143,
        QuickSlot8 = 144,
        QuickSlot9 = 145,
        ReturnToTitleScreen = 146,
        Stamina = 147,
        Starving = 148,
        TabCrafting = 149,
        TabDismantle = 150,
        Thirst = 151,
        Version = 152,
        Weight = 153,
        WindowTitleContainer = 154,
        WindowTitleCrafting = 155,
        WindowTitleEquipment = 156,
        WindowTitleHighscores = 157,
        WindowTitleInventory = 158,
        WindowTitleMap = 159,
        WindowTitleMessages = 160,
        WindowTitleMilestones = 161,
        WindowTitleOptions = 162,
        WindowTitleSkills = 163,
    }
    enum Dictionary {
        ItemTypes = 0,
        Doodads = 1,
        ActionTypes = 2,
        Ui = 3,
        Messages = 4,
        Terrains = 5,
        Creatures = 6,
        Skills = 7,
        Corpses = 8,
        Hints = 9,
        Milestones = 10,
        OnEquipTypes = 11,
        TileEvents = 12,
    }
    interface IStringArray {
        [index: number]: string;
    }
    interface INameDescription {
        name: string;
        description?: string;
        prefix?: string;
        suffix?: string;
    }
    interface INameDescriptionArray {
        [index: number]: INameDescription | null;
    }
    class Language {
        private name;
        private alternateFontStyle;
        private shouldPluralize;
        private dictionary;
        constructor(name: string, alternateFontStyle?: boolean, shouldPluralize?: boolean);
        getName(): string;
        useAlternateFontStyle(): boolean;
        plural(str: string): string;
        addPluralRule(from: string, to: string): void;
        item(key: ItemType, prefix: string, name: string, description?: string): void;
        itemGroup(key: ItemTypeGroup, prefix: string, name: string, suffix?: string): void;
        doodad(key: DoodadType, prefix: string, name: string, description?: string): void;
        doodadGroup(key: DoodadTypeGroup, prefix: string, name: string): void;
        use(key: ActionType, name: string, description: string): any;
        ui(key: UiTranslation, value: string): void;
        message(key: Message, value: string): void;
        terrain(key: TerrainType, prefix: string, name: string): void;
        creature(key: CreatureType, prefix: string, name: string, description: string): void;
        creatureCorpse(key: CreatureType, prefix: string, name: string): void;
        skill(key: SkillType, name: string, description: string): any;
        milestone(key: MilestoneType, name: string, description: string): void;
        hint(key: HintType, name: string, description: string): void;
        tileEvent(key: TileEvent.Type, name: string, description?: string): void;
        onEquipType(key: OnEquipType, value: string): void;
        getDictionary(dictionary: Dictionary): INameDescriptionArray;
    }
    function add(language: Language): void;
    function remove(name: string): void;
    function addTranslateSelector(id: UiTranslation, selector: string | string[], attribute?: string, html?: boolean, func?: (translation: string) => string): void;
    function getLanguages(): Language[];
    function getLoaded(): Language;
    function reload(): void;
    function refreshUiTranslation(id: UiTranslation): void;
    function evalString(str: string): string;
    function load(name: string): boolean;
}
declare namespace TileEvent {
    interface ITileEventDescription extends Item.IObjectDescription {
        spreadMax: number;
        decayMax: number;
    }
    interface ITileEvent extends IPointZ {
        type: Type;
        spread: number;
        decay: number;
    }
    const defines: (ITileEventDescription | undefined)[];
    enum Type {
        None = 0,
        Fire = 1,
    }
    function create(type: Type, x: number, y: number, z: number): ITileEvent | undefined;
    function remove(tileEventId: number): void;
    function updateAll(): void;
}
declare const english: Languages.Language;
declare class ByteGrid {
    width: number;
    height: number;
    size: number;
    data: Uint8Array;
    constructor(width: number, height?: number);
    get(x: number, y: number): number;
    set(x: number, y: number, value: number): void;
    rawSet(i: number, value: number): void;
    clear(): void;
}
declare class FieldOfView {
    private gl;
    radius: number;
    private subdivisions;
    static hBlurProgram: CompiledProgram;
    static vBlurProgram: CompiledProgram;
    private static shaderProgram;
    maxRadius: number;
    texLight: WebGLTexture;
    texLightOld: WebGLTexture;
    disabled: boolean;
    blurEnabled: boolean;
    computeOffset: Vec2;
    private renderer;
    private texLight01;
    private texLight02;
    private texBlurStorage;
    private framebuffer1;
    private framebuffer2;
    private viewQuadBuffer;
    static compileShaders(gl: WebGLRenderingContext): void;
    constructor(gl: WebGLRenderingContext, radius: number, subdivisions?: number);
    getTextureSize(): number;
    getSubdivisions(): number;
    compute(lightBlocking?: boolean): void;
    createDebugRenderer(): FieldOfViewDebugRenderer;
    getRadiusModifier(tileX: number, tileY: number): number;
    canSeeTile(tileX: number, tileY: number): boolean;
    computeLights(): void;
    getBounds(): Bound2;
    private updateExplored();
    private bresenham(x0, y0, x1, y1);
}
interface ITextureDebugRenderer {
    renderDebug(): void;
}
declare class FieldOfViewDebugRenderer implements ITextureDebugRenderer {
    private fov;
    private gl;
    private viewQuadBuffer;
    private viewQuadBuffer2;
    private shaderProgramAlphaDebug;
    constructor(gl: WebGLRenderingContext, fov: FieldOfView);
    renderDebug(): void;
}
import Queue = Utilities.Queue;
declare class FlowFieldManager {
    static readonly blockedPenalty: number;
    delegate: DebugRendererDelegate;
    flowFields: {
        [index: number]: FlowField;
    };
    private size;
    private tileX;
    private tileY;
    private offsetX;
    private offsetY;
    constructor(radius: number);
    setDelegate(delegate: DebugRendererDelegate): void;
    getWidth(): number;
    getHeight(): number;
    isInFlowField(worldX: number, worldY: number): boolean;
    getMoveDirection(worldX: number, worldY: number, moveType: MoveType): FacingDirection;
    getOpposingMoveDirection(worldX: number, worldY: number, moveType: MoveType): FacingDirection;
    updateTile(tileX: number, tileY: number): void;
    setCenter(worldX: number, worldY: number): void;
    update(): void;
    fullUpdate(): void;
    private updateTileInternal(gridIndex, tile);
    private getDirection(field, localX, localY, toward);
    private flowFieldFromMoveType(moveType);
}
declare class FlowField {
    readonly flowField: ByteGrid;
    private penaltyField;
    private size;
    private tileX;
    private tileY;
    private offsetX;
    private offsetY;
    private moveType;
    private updateQueue;
    constructor(size: number, tileX: number, tileY: number, moveType: MoveType);
    updateField(tileX: number, tileY: number, offsetX: number, offsetY: number): void;
    updateTile(gridIndex: number, tile: Terrain.ITile): void;
    updatePenaltyField(): void;
}
interface DebugRendererDelegate {
    update(): void;
}
declare class FlowFieldDebugRenderer implements ITextureDebugRenderer {
    private ff;
    private gl;
    private viewQuadBuffer;
    private shaderProgramAlphaDebug;
    private tex;
    private field;
    constructor(gl: WebGLRenderingContext, ff: FlowFieldManager);
    update(): void;
    renderDebug(): void;
}
declare namespace UI {
    interface IUiScreen {
        selector(): string;
        bindElements(): void;
        unbindElements(): void;
        show(data?: any): void;
        hide(): void;
        onGameEnd(showBlocker: boolean): void;
        isVisible(): void;
        onMouseDown(event: JQueryEventObject): void;
        onMouseUpOrLeave(event: JQueryEventObject): void;
        onMouseMove(event: JQueryEventObject): void;
        onMouseScroll(event: JQueryEventObject): void;
        onKeyDown(event: JQueryEventObject, keyCode: number, blockable: boolean): boolean | null;
        onKeyUp(event: JQueryEventObject): boolean | null;
    }
    interface IDialogInfo {
        id?: string;
        title?: string;
        open?: boolean;
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        minWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        maxWidth?: number;
        canResizeHeight?: boolean;
        onOpen?: () => void;
        onClose?: () => void;
        onResizeStop?: () => void;
    }
    interface IQuickSlotInfo {
        itemType: ItemType;
        action: IContextMenuAction | null | undefined;
    }
    interface IContainerSortInfo {
        sortType: SortType;
        reverse?: boolean;
    }
    interface IContextMenuAction {
        action: string;
        text: string;
        keybind?: number;
        data?: any;
    }
    interface IMessagePack {
        message: Message | null;
        type?: MessageType;
        args?: any[];
        argTitleCase?: boolean;
    }
    class Ui implements IPropSerializable {
        dialogInfo: {
            [index: string]: IDialogInfo;
        };
        dialogContainerInfo: IDialogInfo[];
        quickSlotInfo: IQuickSlotInfo[];
        containerSortInfo: {
            [index: string]: IContainerSortInfo;
        };
        currentHint: HintType;
        private bindState;
        private rebindingKey;
        private rebindingKeyElement;
        private mousePlayerDirection;
        private touchPlayerDirection;
        private highlightTimeout;
        private elementDocument;
        private elementWindow;
        private elementBody;
        private screen;
        private screenId;
        private screenLoading;
        private screenOptions;
        private screenConfirm;
        private screenInput;
        private screenHelp;
        private screenInGame;
        private screenTitle;
        private objectUrl;
        constructor();
        initialize(): void;
        initializeGameState(): void;
        getBody(): JQuery;
        getWidth(): number;
        getHeight(): number;
        appendStyle(id: string, styleContent: string): void;
        setRangeValue(id: string, value: number): void;
        playClickSound(): void;
        switchToScreen(screenId: ScreenId, titleScreenId?: TitleScreenId): void;
        showLoadingScreen(loadingType?: LoadingType): void;
        setLoadingMessage(message: Message): void;
        showLoadingScreenAround(func: () => void): void;
        hideLoadingScreen(): void;
        toggleOptions(): void;
        showOptionsScreen(): void;
        hideOptionsScreen(): void;
        onWindowResize(): void;
        updateWindowMode(): void;
        onUpdateWindowMode(): void;
        launchFullScreen(): void;
        cancelFullscreen(): void;
        isInGameScreenShown(): boolean;
        onMouseDown(event: JQueryEventObject): void;
        onMouseUpOrLeave(event: JQueryEventObject): void;
        onMouseMove(event: JQueryEventObject): void;
        onMouseScroll(event: JQueryEventObject): void;
        onKeyDown(event: JQueryEventObject): void;
        onKeyUp(event: JQueryEventObject): void;
        setRebindingKey(key: KeyBind | null, element: JQuery | null): void;
        getRebindingKeyElement(): JQuery | null;
        isBindDown(key: KeyBind): boolean;
        getBindDownTime(key: KeyBind): number;
        isBindPressed(key: KeyBind, pressedBind: IBind): boolean;
        getBind(key: KeyBind): IBind;
        getKeyBind(key: KeyBind): number | null;
        getMouseBind(key: KeyBind): number | null;
        setBind(key: KeyBind, value: number, type: BindType): void;
        clearBind(key: KeyBind): void;
        updateBindTranslation(key: KeyBind): void;
        getStringForKeyBind(key: KeyBind): string;
        getMousePositionFromMouseEvent(event: any): {
            x: number;
            y: number;
        };
        getMousePlayerDirection(): FacingDirection;
        setMousePlayerDirection(playerDirection: FacingDirection): void;
        getTouchPlayerDirection(): FacingDirection | null;
        setTouchPlayerDirection(playerDirection: FacingDirection | null): void;
        setupItemBackgrounds(): void;
        refreshStats(): void;
        refreshAttributes(): void;
        loadQuickSlots(): void;
        isOverlayShown(): boolean;
        isConfirmOverlayShown(): boolean;
        isInputOverlayShown(): boolean;
        isOptionsOverlayShown(): boolean;
        isHelpOverlayShown(): boolean;
        isConfirmOverlayEnabled(): boolean;
        isInputOverlayEnabled(): boolean;
        isHelpOverlayEnabled(): boolean;
        isOptionsOverlayEnabled(): boolean;
        showTitleScreen(): void;
        refreshSlots(): void;
        displayConfirmDialog(message: string, buttons: Message[], callback?: (selection: Message) => void): void;
        displayInputDialog(message: Message, buttonText: Message, inputText: string, placeholder: string, callback?: (input: string) => void): void;
        displayHint(hintType: HintType, force?: boolean): void;
        getCurrentHint(): HintType;
        setCurrentHint(hintType: HintType): void;
        isMouseMovementBlockerVisible(): boolean;
        toggleHelp(): void;
        hideHelpScreen(): void;
        tooltipRefresh(): void;
        refreshWorldTooltips(): void;
        messageIdToText(message: Message): string;
        getMessageHtml(messagePack: IMessagePack, tag?: string, textCase?: TextCase, log?: boolean, addedClass?: string): string;
        displayMessage(message: Message, messageType?: MessageType, ...args: any[]): void;
        displayMessagePack(messagePack: IMessagePack): void;
        getMessageCount(): number;
        removeOldestMessage(): void;
        updateMilestonesDialog(): void;
        updateSkillsDialog(): void;
        updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
        updateDismantleTab(dismantleItems: Item.IDismantleComponent): void;
        getInventoryItemOrder(): any[];
        updateItem(item: Item.IItem): void;
        hideActionsMenu(): void;
        openMapDialog(): void;
        closeMapDialog(): void;
        setFontStyle(): void;
        setOpacity(): void;
        updateKeybind(key: KeyBind, element: JQuery): void;
        addOptionsSection(elementId: string, sectionName: string): JQuery;
        removeOptionsSection(sectionName: string): void;
        createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
        toggleDialog(dialog: JQuery): boolean;
        openDialog(dialog: JQuery): boolean;
        closeDialog(dialog: JQuery): boolean;
        setEquipSlot(equip: EquipType, itemId: number, internal?: boolean): void;
        setQuickSlot(quickSlot: number, itemId: number, internal?: boolean): void;
        refreshQuickSlots(): void;
        removeItemFromQuickSlot(itemId: number): void;
        removeItemFromEquipSlot(itemId: number, internal?: boolean): void;
        isManageModsVisible(): boolean;
        refreshModManager(): any;
        setObjectUrl(objectUrl: string): void;
        runHotKeys(): void;
        pressHotKey(hotKeyNumber: number): boolean;
        onGameEnd(showBlocker: boolean): void;
        highlight(selector?: string[] | null, onlyFirstElement?: boolean, timeout?: number): void;
        removeHighlights(): void;
        getSerializationProperties(_: string): string[];
        onMove(): void;
        openContainer(container: Item.IContainer, containerName?: string | null): void;
        closeContainer(container: Item.IContainer): void;
        isContainerOpen(container: Item.IContainer): boolean;
        addItemToContainer(item: Item.IItem, container: Item.IContainer, internal?: boolean, isAddingMultipleItems?: boolean): void;
        afterAddingMultipleItemsToContainer(container: Item.IContainer): void;
        removeItemFromContainer(item: Item.IItem, container: Item.IContainer): void;
        updateInventorySort(): void;
        getDialogInfo(dialogId: DialogId): IDialogInfo;
        setVersionExtra(msg: string): void;
        openDialogs(): void;
    }
}
interface JQuery {
    functionalTooltip(data: string, ...args: any[]): void;
    functionalTooltip(data: ITooltipOptions): ITooltip;
}
interface ITooltipOptions {
    selector: string;
    disabled?: boolean;
    trackMouse?: boolean;
    position?: ITooltipPosition;
    onOpen?: (target: JQuery) => void;
    onClose?: (target: JQuery) => void;
    onPosition?: (target: JQuery) => ITooltipPosition;
    content: (target: JQuery) => void;
}
interface ITooltip extends ITooltipOptions {
    visible: HTMLElement | null;
    lastEvent: string;
    element: HTMLElement;
    width: number;
    height: number;
    show: (event: MouseEvent) => void;
    updateTooltipPosition: (left: number, top: number, mouseX: number, mouseY: number) => void;
}
interface ITooltipPosition {
    startAtRight?: boolean;
    startAtBottom?: boolean;
    centerX?: boolean;
    centerY?: boolean;
    leftOffset?: number;
    topOffset?: number;
    clampRight?: boolean;
}
declare let tooltips: {
    [index: number]: ITooltip;
};
declare let tooltipsMap: {
    [index: string]: number;
};
declare let globalTooltipId: number;
interface JQuery {
    filterByData(name: string, value: any): JQuery;
    contextmenu(p: any, p2?: any, p3?: any): any;
    isSorting(): boolean;
    isVisible(): boolean;
    quickShow(): void;
    quickHide(): void;
    preload(): void;
    getItemType(): ItemType;
    getQuickSlot(): number;
    getEquipSlot(): number;
}
declare class MapGen200 implements MapGen.IMapGen {
    generateWorld(generateNewWorld: boolean): void;
    private setupTiles(tileGenArray, templateSpawns, caveSpawns, generateNewWorld);
}
declare class MapGen210 implements MapGen.IMapGen {
    generateWorld(generateNewWorld: boolean): void;
    private setupTiles(tileGenArray, templateSpawns, caveSpawns, generateNewWorld);
}
declare class MapGen220 implements MapGen.IMapGen {
    generateWorld(generateNewWorld: boolean): void;
    private setupTiles(game, tileGenArray, templateSpawns, caveSpawns, generateNewWorld);
}
declare module MapGen {
    interface IMapGen {
        generateWorld(generateNewWorld: boolean): void;
    }
    function generateWorld(generateNewWorld: boolean, callback: () => void): void;
    function setFinishedLoading(): void;
    function spawnHouseItem(x: number, y: number, z: number): void;
    function spawnShoreItem(x: number, y: number, z: number): void;
    function spawnDoodad(tileType: TerrainType, x: number, y: number, z: number, afterMapGen?: boolean): void;
    function spawnTemplate(templateType: Terrain.TileTemplateType, x: number, y: number, z: number): void;
}
declare let installDir: string;
declare module Steamworks {
    interface ISteamId {
        accountId: number;
        screenName: string;
        staticAccountId: string;
    }
    interface IWorkshopItem {
        file: string;
        fileName: string;
        isUpdated: boolean;
        timeCreated: number;
        timeUpdated: number;
        title: string;
        description: string;
        banned: boolean;
        acceptedForUse: boolean;
        publishedFileId: string;
        steamIDOwner: string;
    }
    function isElectron(): boolean;
    function isOverlayWorking(): boolean;
    function isGreenworksEnabled(): boolean;
    function getAbsolutePath(p: string): any;
    function isLinux(): boolean;
    function initialize(): void;
    function setupOverlayAndLinks(ipg: boolean): void;
    function initializeMods(callback: () => void): void;
    function getSteamId(): ISteamId;
    function getBetaName(): string;
    function getPublishedMods(): IWorkshopItem[];
    function getPublishedMod(publishFileId: string): IWorkshopItem | null;
    function fillOutMod(index: number, item?: IWorkshopItem | null): void;
    function publishMod(modIndex: number, callback: (err: string | null, publishedFileId: string | null) => void): void;
    function createArchive(id: string, source: string, callback: (err: string | null) => void): void;
    function getPublishedItems(callback: (err: string | null, items: IWorkshopItem[] | null) => void): void;
    function openUrl(url: string): void;
    function openWorkshop(publishId?: string | null): void;
    function openModsFolder(): void;
    function openLogsFolder(): void;
    function unsubscribe(publishId: string, callback: (err: string | null) => void): void;
    function sendMessage(name: string, data: string): void;
    function toggleDeveloperTools(): void;
    function getModPath(name: string, modType: Mods.Type, file?: string | null, checkIfExists?: boolean): string | null;
    function createSaveGameMod(name: string, slot: number, callback: (success: boolean) => void): void;
    function deleteSaveGameMod(name: string): void;
    function debugLog(...args: any[]): void;
    function addZoomFactor(change: number): void;
    function setDefaultZoomFactor(): void;
    function updateZoomFactor(): void;
    function onUpdateZoomFactor(): void;
    function setupReporting(): void;
    function recordProblem(message: string): void;
}
declare module Mods {
    abstract class BaseMod {
        private index;
        private optionSectionId;
        private allocatedEnums;
        constructor(index: number);
        getIndex(): number | null;
        getName(): string | null;
        getPath(): string | null;
        createOptionsSection(sectionName: string): JQuery;
        removeOptionsSection(sectionName: string): void;
        createDialog(container: JQuery, dialogInfo: UI.IDialogInfo): JQuery;
        getDialog(title: string): JQuery;
        addActionType(name: string, description: string, callback: ActionCallback): number;
        addItem(description: Item.IItemDescription): number;
        addCreature(description: Creature.ICreatureDescription): number;
        addTerrain(description: Terrain.ITerrainDescription, terrainType?: number | null): number;
        addTerrainResource(terrainType: number, terrainResource: Terrain.ITerrainResourceItem[], defaultItem?: ItemType): void;
        addDoodad(description: Doodad.IDoodadDescription): number;
        addMessage(name: string, message: string): number;
        addKeyBind(name: string, defaultKeyCode: number): number;
        itemNameToObjectType(name: string): ItemType | null;
        getItemByType(itemType: ItemType): Item.IItemDescription | undefined;
        getItemByName(name: string): Item.IItemDescription | undefined;
        /**
         * This is called internally after unloading a mod
         */
        unallocateEnums(): void;
        private allocateEnum(enumName, name, windowKeys?, objectValue?, onAllocate?, onUnallocate?);
    }
    abstract class Mod extends BaseMod {
        /**
         * Called when the mod is initialized (mod files are read/loaded when the title screen loads)
         * @param saveDataGlobal The save data object you previously saved via onInitialize()
         * @returns An object containing the data you want to save (saved globally, not per slot)
         */
        abstract onInitialize(saveDataGlobal: any): any;
        /**
         * Called when the mod is loaded.
         * This will be called after a player starts a game (ran before resources & the world are setup)
         * @param saveData The save data object you previously saved via onSave()
         */
        abstract onLoad(saveData: any): void;
        /**
         * Called when the mod is unloaded
         */
        abstract onUnload(): void;
        /**
         * Called when the game is saved or the mod is unloaded
         * This will be called before onUnload
         * @returns An object containing the data you want to save
         */
        abstract onSave(): any;
        /**
         * Called when the game is calculating the move type of a creature
         * @param creatureId The creature id
         * @param creature The creature object
         * @param moveType The creatures move type
         * @returns The move type the creature should use or undefined to use the default logic
         */
        calculateCreatureMoveType(creatureId: number, creature: Creature.ICreature, moveType: MoveType): MoveType | undefined;
        /**
         * Called before consuming an item
         * @param itemType The item type
         * @param actionType The action type
         * @returns True if the player can consume the item (default logic isn't called, should use your own code for consumption), false if the player cannot consume the item, or undefined to use the default logic
         */
        canConsumeItem(itemType: ItemType, actionType: ActionType): boolean | undefined;
        /**
         * Called before a creature attacks
         * @param creatureId The creature id
         * @param creature The creature object
         * @returns False if the creature cannot attack, or undefined to use the default logic
         */
        canCreatureAttack(creatureId: number, creature: Creature.ICreature): boolean | undefined;
        /**
         * Called when a creature tries to move
         * @param creatureId The creature id
         * @param creature The creature object
         * @param tile The tile the creature is trying to move to
         * @param moveType The creatures move type
         * @returns True if the creature can move, false if the creature cannot move, or undefined to use the default logic
         */
        canCreatureMove(creatureId: number, creature: Creature.ICreature, tile: Terrain.ITile, moveType: MoveType): boolean | undefined;
        /**
         * Called before a player attacks
         * @param weapon The weapon used to attack
         * @param attackType The attack type
         * @returns False if the player cannot attack, or undefined to use the default logic
         */
        canPlayerAttack(weapon: Item.IItem | null, attackType: AttackType): boolean | undefined;
        /**
         * Called when calculating creatures in the viewport
         * @param creatureId The creature id
         * @param creature The creature object
         * @param tile The tile the creature is on
         * @returns False if the player should not see the creature or undefined to use the default logic
         */
        canSeeCreature(creatureId: number, creature: Creature.ICreature, tile: Terrain.ITile): boolean | undefined;
        /**
         * Called when rendering creatures in the viewport
         * @param creatureId The creature id
         * @param creature The creature object
         * @param batchLayer The batch layer the creature will render in
         * @returns The batch layer the creature should render in or undefined to use the default logic
         */
        getCreatureSpriteBatchLayer(creatureId: number, creature: Creature.ICreature, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
        /**
         * Called when getting the players maximum health
         * @param player The player object
         * @returns The maximum health of the player or undefined to use the default logic
         */
        getPlayerMaxHealth(player: Player): number | undefined;
        /**
         * Called when rendering the player in the viewport
         * @param player The player object
         * @param batchLayer The batch layer the player will render in
         * @returns The batch layer the player should render in or undefined to use the default logic
         */
        getPlayerSpriteBatchLayer(player: Player, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
        /**
         * Called when checking if a player is swimming
         * @param player The player object
         * @param isSwimming True if the player is swimming
         * @returns True if the player should be swimming, false if the player should not be swimming, or undefined to use the default logic
         */
        isPlayerSwimming(player: Player, isSwimming: boolean): boolean | undefined;
        /**
         * Called when checking if a tile is inspectable (used for showing custom world tooltips over tiles)
         * Normally used in conjunction with the OnInspectTile hook
         * @param tile The tile object
         * @returns True if you want to show a custom inspect message, false to display no messages, or undefined to use the default logic
         */
        isTileInspectable(tile: Terrain.ITile): boolean | undefined;
        /**
         * Called when an item is added or updated in the players inventory
         * @param item The item object
         * @param container The container object the item was added to
         */
        onAddOrUpdateInventoryItem(item: Item.IItem, container: Item.IContainer): void;
        /**
         * Called when something is built on a tile
         * @param item The item used to build the object
         * @param tile The tile something was built on
         * @param doodad The doodad that was created on the tile
         */
        onBuild(item: Item.IItem, tile: Terrain.ITile, doodad: Doodad.IDoodad): void;
        /**
         * Called when an item is crafted
         * @param item The item that was crafted
         */
        onCraft(item: Item.IItem): void;
        /**
         * Called right after the world is created, but before the renderer
         * @param world The world object
         */
        onCreateWorld(world: World): void;
        /**
         * Called when a message is about to be displayed to the player
         * @param message The message
         * @param messageType The message type
         * @param args The message arguments
         * @returns False to not display the message or undefined to use the default logic
         */
        onDisplayMessage(message: Message, messageType?: MessageType, ...args: any[]): boolean | undefined;
        /**
         * Called when the game is ending
         * @param playerState The ending player state
         */
        onGameEnd(playerState: PlayerState): void;
        /**
         * Called when the game is starting
         * @param isLoadingSave True if a save game was loaded
         * @param playedCount The number of times the player has played the game (globally, not per slot)
         */
        onGameStart(isLoadingSave: boolean, playedCount: number): void;
        /**
         * Called when a tile is being inspected
         * @param tile The tile being inspected
         * @returns The inspects to be shown or undefined to use the default logic
         */
        onInspectTile(tile: Terrain.ITile): IInspect[] | undefined;
        /**
         * Called when the player equips an item to a slot
         * @param item The item being equipped
         * @param slot The slot
         */
        onItemEquip(item: Item.IItem, slot: EquipType): void;
        /**
         * Called when a keybind is pressed
         * @param keyBind The keybind
         * @returns False to cancel the keybind press or undefined to use the default logic
         */
        onKeyBindPress(keyBind: KeyBind): boolean | undefined;
        /**
         * Called when a key is pressed down
         * @param event The event object
         * @returns False to cancel the event or undefined to use the default logic
         */
        onKeyDown(event: JQueryEventObject): boolean | undefined;
        /**
         * Called when a key is let go
         * @param event The event object
         * @returns False to cancel the event or undefined to use the default logic
         */
        onKeyUp(event: JQueryEventObject): boolean | undefined;
        /**
         * Called when a creature is damaged
         *
         * @param creatureId The creature id
         * @param creature The creature object
         * @returns undefined to use the default logic or the amount of damage done to the creature, or null if the creature was not damaged
         */
        onCreatureDamage(creatureId: number, creature: Creature.ICreature, hitDamage: number, damageType: DamageType, weaponName: string): number | null | undefined;
        /**
         * Called when a creature dies
         * @param creatureId The creature id
         * @param creature The creature object
         */
        onCreatureDeath(creatureId: number, creature: Creature.ICreature): void;
        /**
         * Called when a mouse button is pressed
         * @param event The mouse event object
         * @returns False to cancel the mouse event or undefined to use the default logic
         */
        onMouseDown(event: JQueryEventObject): boolean | undefined;
        /**
         * Called when a mouse button is pressed
         * @param event The mouse event object
         * @returns False to cancel the mouse event or undefined to use the default logic
         */
        onMouseMove(event: JQueryEventObject): boolean | undefined;
        /**
         * Called when a mouse button is pressed
         * @param event The mouse event object
         * @returns False to cancel the mouse event or undefined to use the default logic
         */
        onMouseScroll(event: JQueryEventObject): boolean | undefined;
        /**
         * Called when a mouse button is let go or if the mouse leaves the screen
         * @param event The mouse event object
         * @returns False to cancel the event or undefined to use the default logic
         */
        onMouseUpOrLeave(event: JQueryEventObject): boolean | undefined;
        /**
         * Called when the player is moving
         * @param nextX The x position the player is moving to
         * @param nextY The y position the player is moving to
         * @param tile The tile the player is moving to
         * @param direction The direction the player is facing
         * @returns False to cancel the move or undefined to use the default logic
         */
        onMove(nextX: number, nextY: number, tile: Terrain.ITile, direction: FacingDirection): boolean | undefined;
        /**
         * Called when the player faces a different direction
         * @param direction The direction the player is now facing
         */
        onMoveDirectionUpdate(direction: FacingDirection): void;
        /**
         * Called when no input is received
         */
        onNoInputReceived(): void;
        /**
         * Called when the player takes damage
         * @param amount The amount of damage taken
         * @param damageMessage The message associated with the damaged
         * @preturns False to stop the player from taking damage or undefined to use the default logic
         */
        onPlayerDamage(amount: number, damageMessage: string): boolean | undefined;
        /**
         * Called when the in game screen is shown
         */
        onShowInGameScreen(): void;
        /**
         * Called when a creature is spawned from a creature group
         * @param creatureGroup The creature group
         * @param creaturePool The pool of creatures that can be spawned
         * @param x The x position to spawn the creature
         * @param y The y position to spawn the creature
         * @param z The z position to spawn the creature
         * @returns False to cancel spawning the creature or undefined to use the default logic
         */
        onSpawnCreatureFromGroup(creatureGroup: Creature.SpawnGroup, creaturePool: CreatureType[], x: number, y: number, z: number): boolean | undefined;
        /**
         * Called when a turn is completing
         */
        onTurnComplete(): void;
        /**
         * Called when a turn is starting
         */
        onTurnStart(): void;
        /**
         * Called when the players weight is being updated
         * @param newWeight The new weight of the player
         * @returns A number to set the player weight to or undefined to use the default logic
         */
        onUpdateWeight(newWeight: number): number | undefined;
        /**
         * Called after the world is generating
         * @param generateNewWorld True if a new world is being generated
         */
        postGenerateWorld(generateNewWorld: boolean): void;
        /**
         * Called after rendering
         */
        postRender(): void;
        /**
         * Called before rendering
         */
        preRender(): void;
        /**
         * Called before rendering the world
         * @param tileScale The tile scale
         * @param viewWidth The width of the view port
         * @param viewHeight The height of the view port
         */
        preRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
        /**
         * Called when input is being processed
         */
        processInput(): void;
        /**
         * Called when different object types are rendered
         * @returns A bitwise list of render flags or undefined to use the default logic
         */
        shouldRender(): RenderFlag | undefined;
    }
}
declare module Mods {
    enum Hook {
        CalculateCreatureMoveType = 0,
        CanConsumeItem = 1,
        CanCreatureAttack = 2,
        CanCreatureMove = 3,
        CanPlayerAttack = 4,
        CanSeeCreature = 5,
        GetAmbientColorCave = 6,
        GetAmbientColorDay = 7,
        GetAmbientColorNight = 8,
        GetAmbientLightLevel = 9,
        GetCreatureSpriteBatchLayer = 10,
        GetPlayerMaxHealth = 11,
        GetPlayerSpriteBatchLayer = 12,
        IsPlayerSwimming = 13,
        IsTileInspectable = 14,
        OnAddOrUpdateInventoryItem = 15,
        OnBuild = 16,
        OnCraft = 17,
        OnCreateWorld = 18,
        OnCreatureDamage = 19,
        OnCreatureDeath = 20,
        OnDisplayMessage = 21,
        OnGameEnd = 22,
        OnGameStart = 23,
        OnInspectTile = 24,
        OnItemEquip = 25,
        OnKeyBindPress = 26,
        OnKeyDown = 27,
        OnKeyUp = 28,
        OnMouseDown = 29,
        OnMouseMove = 30,
        OnMouseScroll = 31,
        OnMouseUpOrLeave = 32,
        OnMove = 33,
        OnMoveDirectionUpdate = 34,
        OnNoInputReceived = 35,
        OnPlayerDamage = 36,
        OnShowInGameScreen = 37,
        OnSpawnCreatureFromGroup = 38,
        OnTurnComplete = 39,
        OnTurnStart = 40,
        OnUpdateWeight = 41,
        PostGenerateWorld = 42,
        PostRender = 43,
        PostRenderPostProcess = 44,
        PostRenderWorld = 45,
        PreRender = 46,
        PreRenderPostProcess = 47,
        PreRenderWorld = 48,
        ProcessInput = 49,
        ShouldRender = 50,
    }
    enum State {
        Disabled = 0,
        Enabled = 1,
        Loaded = 2,
        Error = 3,
    }
    enum CanLoadState {
        Loadable = 0,
        Disabled = 1,
        ModLoadError = 2,
        DependencyIssue = 3,
        ModRequiresItself = 4,
        MissingRequiredMod = 5,
        CannnotLoadRequiredMod = 6,
        ReqiredModNotLoaded = 7,
        LocalModPrecedence = 8,
        IncompatibleVersion = 9,
    }
    enum Type {
        Internal = 0,
        Local = 1,
        Workshop = 2,
    }
    interface IModInfo {
        object: Mod | null;
        info: {
            [index: string]: any;
        };
        state: State;
        path: string;
        folderName: string;
        type: Type;
        publishedFileId: string | null;
        steamIDOwner: string | null;
        lastUpdated: string | null;
    }
    var modState: {
        [index: string]: Mods.State;
    };
    var saveData: {
        [index: string]: any;
    };
    var saveDataGlobal: {
        [index: string]: any;
    };
    var unloadable: {
        [index: string]: {
            name: string;
            unloadable: boolean;
        };
    };
    interface ICanLoadInfo {
        name: string;
        loadable: boolean;
    }
    function loadAll(callback: () => void): void;
    function unloadAll(reset?: boolean): void;
    function initializeMods(callback: () => void): void;
    function saveAll(): void;
    function initializeMod(folderName: string, modType: Type, callback: (id: number | null) => void, skipOnInitialize?: boolean): void;
    function removeMod(id: number, uninstall?: boolean): void;
    function getMods(): IModInfo[];
    function getLoadedMods(): IModInfo[];
    function getLoadedModByName(name: string): IModInfo | null;
    function callHook(hook: Mods.Hook, ...args: any[]): any;
    function callHookWithDefault(hook: Mods.Hook, defaultValue: any, ...args: any[]): any;
    function load(index: number): void;
    function unload(index: number): void;
    function save(index: number): void;
    function reload(index: number): void;
    function isValid(index: number): boolean;
    function isEnabled(index: number): boolean;
    function isLoaded(index: number): boolean;
    function getIdentifier(index: number): string;
    function getName(index: number): string;
    function getDescription(index: number): string;
    function getVersion(index: number): string;
    function getLastUpdatedDate(index: number): string | null;
    function getAuthor(index: number): string;
    function getType(index: number): Type;
    function getRequiredMods(index: number): string[];
    function getPath(index: number): string;
    function getFolderName(index: number): string;
    function getPublishFileId(index: number): string | null;
    function getSteamIdOwner(index: number): string | null;
    function canLoad(index: number, fromTitleScreen?: boolean, count?: number): CanLoadState;
    function canLoadFromIdentifier(identifier: string): ICanLoadInfo;
    function getIndexFromName(name: string): number | null;
    function getIndexFromPublishId(publishFileId: string): number[];
    function getIndexFromPath(path: string): number | null;
    function isEnabledByName(name: string): boolean;
    function isLoadedByName(name: string): boolean;
    function setPublishId(index: number, publishedFileId: string): void;
    function setSteamIdOwner(index: number, steamIdOwner: string): void;
    function setLastUpdated(index: number, lastUpdated: string): void;
    function getState(index: number): State;
    function setState(index: number, state: State, force?: boolean): boolean;
}
declare type TerrainData = number;
declare enum TerrainMask {
    Type = 63,
    Wall = 64,
    Fence = 128,
}
declare class ExploreMap extends ByteGrid {
    private encodedData;
    encode(): void;
    decode(): void;
    getSerializationProperties(version: string): string[];
}
declare class World implements ISerializable {
    width: number;
    height: number;
    layers: WorldLayer[];
    private loaded;
    constructor(width: number, height: number);
    toLocal(world: number, local: number): number;
    addLayer(level: number): void;
    load(game: Game): void;
    isLoaded(): boolean;
    updateAll(game: Game): void;
    resetExploredMap(): void;
    updateTile(x: number, y: number, z: number, tile: Terrain.ITile): void;
    serializeObject(serializer: Serializer): void;
    deserializeObject(serializer: Serializer): void;
}
declare type onTileUpdateDelegate = (x: number, y: number, flushImmediate: boolean) => void;
declare type onDoodadUpdateDelegate = (x: number, y: number, doodadType: DoodadType | null, doodadVariation: number, flushImmediate: boolean) => void;
declare class WorldLayer {
    width: number;
    height: number;
    level: number;
    lightLevelMap: ByteGrid;
    lightBlockMap: ByteGrid;
    exploredMap: ExploreMap;
    onTileUpdate: onTileUpdateDelegate;
    onDoodadUpdate: onDoodadUpdateDelegate;
    private terrainMap;
    constructor(width: number, height: number, level: number);
    resetExploredMap(): void;
    getTileType(x: number, y: number): TerrainType;
    getTile(x: number, y: number): TerrainData;
    isWall(terrain: TerrainData): boolean;
    isFence(terrain: TerrainData): boolean;
    setTile(x: number, y: number, terrainType: TerrainType | undefined, isWall?: boolean, isFence?: boolean): void;
    updateAll(game: Game): void;
    updateTile(x: number, y: number, tile: Terrain.ITile, shouldUpdate?: boolean): void;
    private mapIndex(x, y);
    private updateLightBlockValue(x, y, oldValue);
    private setTileInteral(x, y, tile);
}
declare module TileAdaptor {
    interface ITileAdaptation {
        TLFG: Vec2;
        TRFG: Vec2;
        BLFG: Vec2;
        BRFG: Vec2;
        TLBG: Vec2;
        TRBG: Vec2;
        BLBG: Vec2;
        BRBG: Vec2;
    }
    interface ITileAdaptor {
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
    }
    interface IDoodadAdaptor {
        adapt(world: WorldLayer, x: number, y: number, doodadType: DoodadType, result: ITileAdaptation): void;
    }
    function setDefaultBackground(tileInfo: TerrainTileInfo): void;
    class Default implements ITileAdaptor {
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
    }
    class Mountain extends Default {
        private mountainTopFlag;
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
        private getTileType(tileMask);
    }
    function getWaterType(terrainType: TerrainType): number;
    class Water extends Default {
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
    }
    class Dirt implements ITileAdaptor {
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
    }
    class Fence implements IDoodadAdaptor {
        adaptGate(world: WorldLayer, x: number, y: number, doodadType: DoodadType, vertical: boolean, result: ITileAdaptation): void;
        adapt(world: WorldLayer, x: number, y: number, doodadType: DoodadType, result: ITileAdaptation): void;
    }
    class Wall implements IDoodadAdaptor {
        adaptDoor(world: WorldLayer, x: number, y: number, doodadType: DoodadType, vertical: boolean, result: ITileAdaptation): void;
        adapt(world: WorldLayer, x: number, y: number, doodadType: DoodadType, result: ITileAdaptation): void;
    }
    class Floor extends Default {
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
    }
}
declare module Shaders {
    function loadShaders(callback: () => void): void;
    function compileShaders(): void;
    class CompiledProgram {
        private gl;
        private vertexName;
        private fragmentName;
        program: WebGLProgram;
        uniforms: {
            [index: string]: number;
        };
        attribs: {
            [index: string]: number;
        };
        constructor(gl: WebGLRenderingContext, vertexName: string, fragmentName: string);
        compileProgram(): void;
    }
}
import CompiledProgram = Shaders.CompiledProgram;
declare class WorldRenderer {
    private gl;
    private world;
    static positionTextureBuffer: WebGLBuffer;
    static positionBuffer: WebGLBuffer;
    static ditherTexture: WebGLTexture;
    static emptyUint8Array: Uint8Array | undefined;
    private static subTileSize;
    private static textureShaderProgram;
    private static worldShaderProgram;
    private static fogShaderProgram;
    layers: WorldLayerRenderer[];
    dirtAdaptor: TileAdaptor.Dirt;
    waterAdaptor: TileAdaptor.Water;
    fenceAdaptor: TileAdaptor.Fence;
    mountainAdaptor: TileAdaptor.Mountain;
    wallAdaptor: TileAdaptor.Wall;
    defaultAdaptor: TileAdaptor.Default;
    floorAdaptor: TileAdaptor.Floor;
    private ambientIntensity;
    private ambientColorDay;
    private ambientColorDawn;
    private ambientColorNight;
    private ambientColorCave;
    private screenspaceViewport;
    private worldspaceViewport;
    private tileScale;
    private zoom;
    private compositeFramebuffer;
    private compositeTexture;
    private layerFramebuffer;
    private layerTexture;
    private depthBuffer;
    private fogFramebuffer;
    private fogTexture;
    private fogTextureStorage;
    private itemBatch;
    private corpseBatch;
    private creatureBatch;
    private creaturesInViewport;
    private viewportSpritesDirty;
    static getSubTileSize(): number;
    static compileShaders(gl: WebGLRenderingContext): void;
    constructor(gl: WebGLRenderingContext, world: World);
    updateAll(): void;
    setSpriteTexture(texture: WebGLTexture, textureSizeInversed: Vec2): any;
    getPixelSize(): number;
    getZoom(): number;
    getTileScale(): number;
    setZoom(zoom: number): void;
    setViewport(view: Vec2): void;
    getViewport(): Vec2;
    getTileViewport(): Vec2;
    getAmbientColor(): number[];
    renderWorld(x: number, y: number, z: number): void;
    render(): void;
    screenToTile(screenX: number, screenY: number): Vec2;
    getViewportBounds(): {
        min: Vec2;
        max: Vec2;
    };
    computeSpritesInViewport(): void;
    batchCreatures(game: Game): void;
    private batchShadow(fromX, fromY, toX, toY, t, anim);
    private batchPlayer(batchLayer);
    private spriteBatchForLayer(layer);
    private computeSpritesInViewportInternal(game);
}
declare class WorldLayerRenderer {
    private gl;
    private renderer;
    private worldLayer;
    private width;
    private height;
    terrainLayer: TileLayer;
    doodadLayer: TileLayer;
    doodadOverLayer: TileLayer;
    texLightBlock: WebGLTexture;
    texLightLevel: WebGLTexture;
    texExplored: WebGLTexture;
    private dirty;
    constructor(gl: WebGLRenderingContext, renderer: WorldRenderer, worldLayer: WorldLayer, width: number, height: number);
    updateAll(): void;
    setDoodad(x: number, y: number, doodad: DoodadType | null, variation: number, flushImmediate?: boolean): void;
    renderFullbright(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): void;
    postRenderFullbright(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): void;
    private computeTile(x, y, flushImmediate?);
    private updateTileLightBlock(x, y, value);
    private flush();
}
/**
 * Each tile in the wayward world is rendered as 4 subtiles (topleft, topright, bottomleft, bottomright).
 * The world consists of 3 tile layers (terrain, doodad, doodadOver).
 * Each subtile is a RGBA 32bit pixel representing a foreground and background tile.
 * Red,Green make up the x,y coordinate in the tilesheet of the foreground tile.
 * Blue,Alpha make up the x,y coordinate in the tilesheet of the background tile.
 * If Red and Green are both 0, the subtile foreground is not rendered.
 * If Blue and Alpha are both 0, the subtile background is not rendered.
 */
declare class TileLayer {
    private width;
    private height;
    private static texTileSprites;
    private static inverseTileSpriteTextureSize;
    private static tileShaderProgram;
    private singleTileData;
    private singleTileDataU8;
    private singleTileDataU32;
    private tileData;
    private tileDataU8;
    private tileDataU32;
    private texTiles;
    private inverseTileDataTextureSize;
    static setTileTexture(texture: WebGLTexture, textureSizeInversed: Vec2): any;
    static compileShaders(gl: WebGLRenderingContext): void;
    constructor(width: number, height: number, gl: WebGLRenderingContext);
    setTileTLFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTRFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBLFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBRFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTLBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTRBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBLBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBRBG(dataIndex: number, tileX: number, tileY: number): void;
    sendTileToGPU(x: number, y: number, gl: WebGLRenderingContext): void;
    sendToGPU(gl: WebGLRenderingContext): void;
    render(gl: WebGLRenderingContext, x: number, y: number, subTileSize: number, tileScale: number, viewWidth: number, viewHeight: number, fixedDepth?: boolean): void;
    clear(): void;
}
interface IVersionInfo {
    str: string;
    major: number;
    minor: number;
    patch: number;
}
interface IPoint {
    x: number;
    y: number;
}
interface IPointZ extends IPoint {
    z: number;
}
interface IInputMovement extends IPoint {
    keyBind: KeyBind;
    direction: FacingDirection;
}
interface IHighscore {
    name: string;
    message: string;
    score: number;
    dailyChallenge: boolean;
    date: number;
    talent?: number;
}
interface IInspect {
    type?: InspectType;
    onlyShowInTooltip?: boolean;
    messagePack: UI.IMessagePack;
}
interface IGameOld {
    monsters: Creature.ICreature[];
}
declare class Game implements IPropSerializable {
    private static gameMovement;
    interval: number;
    mapSize: number;
    mapSizeSq: number;
    halfMapSize: number;
    slot: number;
    loadedResources: boolean;
    version: string;
    saveVersion: string | null;
    isLoadingSave: boolean;
    slotName: string;
    tile: Terrain.ITileArray;
    tileData: Terrain.ITileData[][][][];
    tileContainers: Terrain.ITileContainer[];
    items: Item.IItemArray;
    creatures: Creature.ICreature[];
    tamedCreatures: number[];
    doodads: Doodad.IDoodad[];
    tileEvents: TileEvent.ITileEvent[];
    corpses: Corpse.ICorpse[];
    time: number;
    nextProcessInput: number;
    turnFinishTime: number;
    turnProgress: number;
    turnProgressCompleted: boolean;
    healthRegen: number;
    hintIndex: number;
    hungerRegen: number;
    moveAnim: number;
    messageTimer: number;
    saveClear: boolean;
    playing: boolean;
    savedHighscore: boolean;
    wonGame: boolean;
    autoSaveTimer: number;
    staminaRegen: number;
    thirstRegen: number;
    updateRender: boolean;
    walkSoundCounter: number;
    dailyChallenge: boolean;
    raft: number | null;
    fillCount: number;
    fillTile: boolean[][];
    unloading: boolean;
    spawnCoords: any;
    contaminatedWater: Array<IPointZ>;
    dayNight: number;
    dayNightSwitch: number;
    fadeInAmount: number;
    lastPlayedVersion: string | null;
    crafted: {
        [index: number]: boolean;
    };
    newCrafted: {
        [index: number]: boolean;
    };
    highscores: IHighscore[];
    seeds: {
        base: number;
        saved: number;
    };
    options: {
        alternateContextMenu: boolean;
        autoGather: boolean;
        autoPickup: boolean;
        binds: IBindArray;
        currentGame: number;
        dialogOpacity: number;
        dropOnGather: boolean;
        dropUnderYourself: boolean;
        effects: number;
        fontStyle: boolean;
        hints: boolean;
        keepSortActive: boolean;
        modBinds: IModBindArray;
        mouseMovement: boolean;
        music: number;
        mute: boolean;
        protectedCraftingItems: boolean;
        skipIntro: boolean;
        visionMode: boolean;
        warnOnDangerousActions: boolean;
        warnWhenBreakingItems: boolean;
        windowMode: boolean;
        worldTooltips: boolean;
        zoomFactor: number;
        zoomLevel: number;
        zoomOnScroll: boolean;
        keyBinds: IKeyBind;
    };
    playedCount: number;
    glContext: WebGLRenderingContext;
    mapContext: CanvasRenderingContext2D;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
    particleSystem: ParticleSystem;
    flowFieldManager: FlowFieldManager;
    fov: FieldOfView;
    debugRenderer: ITextureDebugRenderer;
    notifier: Notifier.Notifier;
    cartographyTexture: WebGLTexture;
    private loadedWorld;
    private shouldUpdateCraftTableAndWeight;
    static getVersionInfo(version: string | null, defaultVerison?: string): IVersionInfo;
    constructor();
    createWorld(): void;
    createWorldRenderer(): void;
    resizeRenderer(): void;
    setupWorldResources(): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    consumeWaterTile(x: number, y: number, z: number): void;
    checkForHiddenMob(x: number, y: number, z: number): void;
    animateSkeletalRemains(x: number, y: number, z: number): void;
    getWrappedCoord(x: number): number;
    getTileInFrontOfPlayer(): Terrain.ITile;
    getTile(x: number, y: number, z?: number): Terrain.ITile;
    getTileUnsafe(x: number, y: number, z?: number): Terrain.ITile;
    setTile(x: number, y: number, z: number, tile: Terrain.ITile): Terrain.ITile;
    getOrCreateTile(x: number, y: number, z: number): Terrain.ITile;
    gameLoop: (timeStamp: any) => void;
    nullFilter(element: any): boolean;
    saveGame(saveType: SaveType): void;
    addZoomLevel(amount: number): void;
    setZoomLevel(): void;
    getFireMessage(decay: number): Message;
    outputFireMessage(decay: number): void;
    play(saveSlot: number): void;
    loadResources(): void;
    postLoadResources(): void;
    postGenerateWorld(): void;
    playGame(): void;
    enableFlowFieldDebug(): void;
    resetGameState(): void;
    initializeGameState(isTravelling?: boolean): void;
    checkUnderPlayer(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean): void;
    setPlayerZ(z: number): void;
    shouldRender(): number;
    inspect(x: any, y: number, z?: number): IInspect[];
    inspectTile(tile: Terrain.ITile): IInspect[];
    blockMove(): void;
    makeCaveEntrance(): TerrainType | null;
    findUnique(a: any, b: any): any[];
    updateCraftTableAndWeightNextTurn(): void;
    hasDelay(): boolean;
    addDelay(delay: Delay, replace?: boolean): void;
    createParticles(tileX: number, tileY: number, r: number, g: number, b: number, count?: number): void;
    makeMiniMap(offsetX: number, offsetY: number, offsetZ: number, skillCheck?: boolean): void;
    getBlackness(): number;
    getAmbientLightLevel(): number;
    getLightSourceAt(worldX: number, worldY: number): number;
    isOnScreen(x: number, y: number, z: number): boolean;
    changeTile(newTile: any, changeX: number, changeY: number, changeZ: number, stackTiles: boolean): void;
    isTileFull(x: number, y: number, z?: number): boolean;
    isTileFullEx(tile: Terrain.ITile): boolean;
    isTileEmpty(x: number, y: number, z?: number): boolean;
    contaminateWater(): void;
    passTurn(turnType?: TurnType): void;
    updateGame(resting?: boolean): void;
    checkAndRemoveBlood(): boolean;
    checkForMobInRange(range: number): {
        id: number;
        x: number;
        y: number;
        z: number;
        found: boolean;
        obstacle: boolean;
        water: boolean;
    };
    /**
     * AVOID USING THIS. USE updateCraftTableAndWeightNextTurn INSTEAD!
     * For most cases you don't need this
     */
    updateCraftTableAndWeight(): void;
    rangeFinder(weaponRange: number, playerSkillLevel: number): number;
    getHeight(z0: number, z1: number, d: number): number;
    setupSave(_: number): void;
    onGlobalSlotLoaded(_: number, success: boolean): void;
    onSaveLoaded(): void;
    upgradeSave(saveVersion: IVersionInfo): void;
    upgradeGlobalSave(saveVersion: IVersionInfo): void;
    setRaft(itemId: number | null): void;
    getSerializationProperties(_: string): string[];
    getBurned(bypassMessages?: boolean): number | null;
    getName(object: Item.IItem | Creature.ICreature | Doodad.IDoodad | undefined, textCase?: TextCase, withPrefix?: boolean): string;
    getNameFromDescription(description: Item.IObjectDescription | undefined, textCase?: TextCase, withPrefix?: boolean): string;
    fireBreath(x: number, y: number, z: number, facingDirection: FacingDirection, itemName?: string): void;
    private youNotice(x, y, messageType, messageArg?);
    private upgradeToClasses<T>(arr, c, onUpdate?);
    private processInput();
    private processMessages();
    private prePlay(mapSeed, isLoadingSave);
    private playPostSeed(seed);
    private render(delta);
    private move(direction);
    private showStatsHint();
    private stats();
    private getPotentialRecipesInContainer(container, typesChecked, potentialRecipes);
    private swimCheck();
}
declare namespace Item {
    interface IRecipe {
        baseComponent?: (ItemType | ItemTypeGroup);
        components: IRecipeComponent[];
        skill: SkillType;
        level: RecipeLevel;
        requiredDoodad?: DoodadType | DoodadTypeGroup;
        requiresFire?: boolean;
        malignity: number;
    }
    interface IRecipeComponent {
        type: ItemType | ItemTypeGroup;
        requiredAmount: number;
        consumedAmount: number;
        disassembleAmount: number;
        ignoreWeight: boolean;
    }
    interface IDismantleComponent {
        [index: number]: number;
    }
    interface IRanged {
        range: number;
        attack: number;
    }
    interface IItemArray extends Array<IItem> {
    }
    interface IItemLegendary {
        skill: SkillType;
        value: number;
    }
    interface IItem extends IObject, IContainable {
        readonly id: number;
        readonly type: ItemType;
        weight: number;
        equipped?: EquipType;
        quickSlot?: number;
        tatteredMap?: IPointZ;
        legendary?: IItemLegendary;
        disassembly?: IItemArray;
        order?: number;
        description(): IItemDescription | undefined;
        getDecayMax(): number;
        getTotalWeight(): number;
        getDisassemblyWeight(): number;
        setDisassemblyAndWeight(): void;
        use(actionType: ActionType): boolean;
        damage(modifier?: number): void;
        isDamaged(): boolean;
        isDecayed(): boolean;
        changeInto(itemType: ItemType): void;
        returns(): void;
        spawnOnBreak(): number | null;
        spawnOnDecay(): number | null;
        spawnCreatureOnItem(creatureType: CreatureType | undefined): number | null;
        getLocation(): IPointZ | undefined;
        offer(): void;
        drop(dropAll: boolean, dropAllQuality?: ItemQuality | null): void;
        dropInWater(): void;
        placeOnTile(x: number, y: number, z: number, bypass?: boolean): void;
        initializeMap(): void;
        setQuality(quality?: ItemQuality): void;
        acquireNotify(): void;
        rename(): void;
    }
    interface IContainable {
        containedWithin: IContainer | null;
    }
    interface IContainer extends IContainable {
        weightCapacity: number;
        containedItems: IItemArray;
    }
    interface IObject {
        type: number;
        decay?: number;
        minDur?: number;
        maxDur?: number;
        quality?: ItemQuality;
        renamed?: string;
    }
    interface IObjectDescription {
        name?: string;
        description?: string;
        suffix?: string;
        prefix?: string;
        decayMax?: number;
        skillUse?: SkillType;
        weightCapacity?: number;
    }
    interface IItemDescription extends IObjectDescription {
        durability?: number;
        doodadType?: DoodadType;
        onBurn?: ItemType;
        onUse?: any[];
        onEquip?: (item: IItem) => void;
        onUnequip?: (item: IItem) => void;
        onEquipEffect?: any[];
        damageType?: DamageType | number;
        group?: ItemTypeGroup[];
        torch?: any;
        weight?: number;
        reducedWeight?: number;
        lit?: ItemType;
        damageModifier?: number;
        isTorch?: boolean;
        equip?: EquipType;
        returnOnUse?: [ItemType, boolean];
        inheritWeight?: ItemType;
        attack?: number;
        defense?: Defense;
        revert?: ItemType;
        use?: ActionType[];
        ranged?: IRanged;
        recipe?: IRecipe;
        disassemble?: boolean;
        requiredForDisassembly?: [ItemType | ItemTypeGroup];
        mod?: number;
        decaysInto?: ItemType;
        twoHanded?: boolean;
        recipes?: ItemType[];
        keepDurabilityOnCraft?: boolean;
        craftable?: boolean;
        dismantle?: IDismantleDescription;
        doodadContainer?: DoodadType;
        repairable?: boolean;
        suffix?: string;
        prefix?: string;
        spawnOnDecay?: CreatureType;
        spawnOnBreak?: CreatureType;
        showOverHair?: boolean;
    }
    interface IDismantleDescription {
        items: [ItemType, number][];
        required?: ItemTypeGroup;
    }
    interface IGroupDescription {
        name: string;
        types: ItemType[];
        suffix?: string;
        prefix?: string;
    }
    interface IActionDescription {
        name?: string;
        description?: string;
    }
    enum ContainerReferenceType {
        Null = 0,
        Inventory = 1,
        Doodad = 2,
        World = 3,
        Tile = 4,
        Item = 5,
    }
    interface IInventoryContainerReference extends IContainerReference {
    }
    interface IWorldContainerReference extends IContainerReference {
    }
    interface ITileContainerReference extends IContainerReference, IPointZ {
    }
    interface IDoodadContainerReference extends IContainerReference, IPointZ {
    }
    interface IItemContainerReference extends IContainerReference {
        id: number;
    }
    interface IContainerReference {
        type: ContainerReferenceType;
    }
    function getContainerReference(container: IContainer | null): IContainerReference;
    function derefenceContainerReference(containerRef: IContainerReference): Object | null;
    function removeContainerItems(container: IContainer): void;
    function remove(item: IItem): void;
    function getDisassemblyComponents(recipe: IRecipe, quality: ItemQuality): IItemArray;
    function getComponentWeight(recipe: IRecipe): number;
    function getWeight(itemType: ItemType): number;
    class ActualItem implements IItem, IContainer, IContainable, IPropSerializable, IUnserializedCallback {
        id: number;
        type: ItemType;
        equipped: EquipType;
        quickSlot: number;
        tatteredMap: IPointZ;
        legendary: IItemLegendary;
        disassembly: IItemArray;
        order: number;
        weight: number;
        decay: number;
        minDur: number;
        maxDur: number;
        quality: ItemQuality;
        renamed: string;
        weightCapacity: number;
        containedItems: IItemArray;
        containedWithin: IContainer;
        private _description;
        constructor(itemType?: ItemType | undefined, quality?: ItemQuality);
        description(): IItemDescription | undefined;
        getDecayMax(): number;
        getTotalWeight(): number;
        use(actionType: ActionType): boolean;
        getDisassemblyWeight(): number;
        setDisassemblyAndWeight(): void;
        damage(modifier?: number): void;
        isDamaged(): boolean;
        isDecayed(): boolean;
        changeInto(type: ItemType): void;
        returns(): boolean;
        spawnOnBreak(): number | null;
        spawnOnDecay(): number | null;
        spawnCreatureOnItem(creatureType: CreatureType | undefined): number | null;
        getLocation(): IPointZ | undefined;
        offer(): void;
        drop(dropAll?: boolean, dropAllQuality?: ItemQuality | null, bypass?: boolean): void;
        dropInWater(): void;
        placeOnTile(x: number, y: number, z: number, bypass?: boolean): boolean;
        initializeMap(): void;
        setQuality(quality?: ItemQuality): void;
        acquireNotify(): void;
        rename(): void;
        getSerializationProperties(_: string): string[];
        onUnserialized(): void;
    }
    function create(itemType: ItemType, quality?: ItemQuality, container?: IContainer, fake?: boolean): IItem;
    function isContainer(obj: any): boolean;
    function moveAllFromContainerToInventory(container: IContainer, ofQuality?: ItemQuality | null): void;
    function computeContainerWeight(container: IContainer): number;
    function moveAllFromContainerToContainer(fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType | null, ofQuality?: ItemQuality | null, checkWeight?: boolean, onMoveItem?: (item: IItem) => void): void;
    function moveToContainer(item: IItem, container: IContainer): void;
    function hasRoomInContainer(extraWeight: number, container: IContainer): boolean;
    function breakContainerOnTile(itemContainer: IItem, x: number, y: number, z: number): void;
    function spawn(itemTypes: Array<ItemType> | null, x: number, y: number, z: number): void;
    function resetMapsInContainer(container: IContainer): void;
    function getTileContainer(x: number, y: number, z: number): IContainer;
    function getRandomQuality(itemType: ItemType, bonusQuality?: number): ItemQuality;
    function hasRequiredDoodad(craftType: ItemType, message?: Message): boolean;
    class ItemRecipeRequirementChecker {
        private recipe;
        private trackItems;
        itemBaseComponent: IItem;
        itemComponentsRequired: IItemArray;
        itemComponentsConsumed: IItemArray;
        itemComponentsToBeSalvaged: IItemArray;
        numComponentsNeeded: number;
        private baseComponent;
        private components;
        constructor(recipe: IRecipe, trackItems: boolean);
        amountNeededForComponent(componentIndex: number): number;
        requirementsMet(): boolean;
        /**
         * Looks inside the container and its subcontainers.
         * @param container
         * @returns true if the recipe's requirements are satisfied by items in the container.
         */
        process(container: IContainer): boolean;
        isDiscovered(): boolean;
        private processItem(item);
    }
    function isItemTypeGroup(itemType: (ItemType | ItemTypeGroup)): boolean;
    function getItemTypeGroupName(itemType: (ItemType | ItemTypeGroup), prefix?: boolean): string;
    function isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup): boolean;
    function craft(itemType: ItemType, itemsToRequire: IItemArray, itemsToConsume: IItemArray, itemsToBeSalvaged: IItemArray, baseItem?: IItem): boolean;
    function decayItems(): boolean;
    function isItemTypeInGroup(itemType: ItemType, itemGroupSearch: ItemTypeGroup): boolean;
    function countItemsInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): number;
    function countItemsInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: IItem): number;
    function getItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): IItem | null;
    function getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: number): IItem | null;
    function getItemsInContainer(container: IContainer, includeSubContainers?: boolean): IItemArray;
    function getItemsInContainerByType(container: IContainer, itemType: ItemType, includeSubContainers?: boolean): IItemArray;
    function getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, includeSubContainers?: boolean): IItemArray;
    function getItemInInventoryByGroup(itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: number): IItem | null;
    function isItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): boolean;
    function isItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignore?: number): boolean;
    function isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    function isInInventory(containable: IContainable): boolean;
    function isTileContainer(container: IContainer | null): boolean;
    function getItemsString(items: IItemArray): string;
    function loadReferences(): void;
    function saveTileReferences(tileContainers: Terrain.ITileContainer[]): void;
    function loadTileReferences(): void;
    function getDefaultItemFromItemGroup(itemGroup: ItemTypeGroup): ItemType;
}
declare namespace Notifier {
    class Notifier {
        private capacity;
        private mostRecent;
        private mostRecentLife;
        private count;
        private notifications;
        private spriteBatch;
        private nextUpdate;
        constructor(gl: WebGLRenderingContext, capacity: number);
        setTexture(texture: WebGLTexture, inverseTextureSize: Vec2): void;
        clear(): void;
        addItem(x: number, y: number, type: ItemType): void;
        addStat(x: number, y: number, type: StatType, value: number): void;
        update(): void;
        render(x: number, y: number, tileSize: number, tileScale: number, viewWidth: number, viewHeight: number): void;
        private addNote(x, y, type);
        private renderNote(note);
    }
}
declare class ParticleSystem {
    private static shaderProgram;
    private count;
    private capacity;
    private positionSizeBuf;
    private colorBuf;
    private gl;
    private particles;
    private positionSizeData;
    private colorData;
    private particleSize;
    private lastUsedParticle;
    constructor(gl: WebGLRenderingContext, maxParticles?: number);
    spawn(tileX: number, tileY: number, r: number, g: number, b: number, count: number): void;
    clear(): void;
    simulate(dt: number): boolean;
    render(x: any, y: any): void;
    private findUnusedParticle();
}
declare class PlayerDefense extends Defense {
    base: number;
    resist: Resistances;
    vulnerable: Vulnerabilities;
    constructor(base: number, resist: Resistances, vulnerable: Vulnerabilities);
}
declare class Player implements IPropSerializable, IPointZ {
    moveType: MoveType;
    attack: number;
    attackFromEquip: number;
    deathBy: string;
    defense: PlayerDefense;
    defenses: number[];
    dehydration: number;
    dexterity: number;
    dialog: any;
    direction: IPoint;
    facingDirection: FacingDirection;
    isMoving: boolean;
    gender: Gender;
    health: number;
    hintSeen: boolean[];
    hunger: number;
    inventory: Item.IContainer;
    lightBonus: number;
    creatureSpawnTimer: number;
    state: PlayerState;
    skills: ISkillSet;
    stamina: number;
    starvation: number;
    status: {
        bleeding: boolean;
        burned: boolean;
        poisoned: boolean;
    };
    swimming: boolean;
    stepCounter: number;
    /**
     * Player strength !== max health
     */
    strength: number;
    thirst: number;
    turns: number;
    weight: number;
    x: number;
    y: number;
    z: number;
    thirstTimer: number;
    staminaTimer: number;
    healthTimer: number;
    hungerTimer: number;
    fromX: number;
    fromY: number;
    nextX: number;
    nextY: number;
    malignityPlus: number;
    malignityNegative: number;
    score: number;
    weightBonus: number;
    talent: number;
    movement: IInputMovement;
    constructor();
    attributes(): void;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    staminaCheck(): boolean;
    checkWeight(): void;
    addMilestone(milestone: MilestoneType, data?: number | null): void;
    damage(amount: number, damageMessage: string, soundDelay?: number): void;
    calculateEquipmentStats(): void;
    updateDirection(direction: FacingDirection): void;
    directionToMovement(direction: FacingDirection): IPoint;
    canCarve(): Item.IItem | null;
    canJump(): boolean;
    jump(): void;
    unequip(item: Item.IItem): void;
    equip(item: Item.IItem, slot: EquipType, internal?: boolean): void;
    damageEquipment(): void;
    drink(): void;
    getMaxHealth(): number;
    getSerializationProperties(_: string): string[];
    staminaReduction(skillType: SkillType): void;
    updateMalignity(malignity: number): void;
    getMalignity(): number;
    hurtHands(message: Message, damageMessage: Message): void;
    pickUpAllItems(): void;
    private statGain(stat, bypass);
    private resetDefense();
}
declare class SpriteAtlas {
    static creatures: Array<SpriteUtil.SpriteInfo>;
    static corpses: Array<SpriteUtil.SpriteInfo>;
    static tileEvents: Array<SpriteUtil.SpriteInfo>;
    static items: Array<SpriteUtil.SpriteInfo>;
    static itemsSmall: Array<SpriteUtil.SpriteInfo>;
    static equips: {
        [index: number]: SpriteUtil.SpriteInfo;
    };
    static shadow: SpriteUtil.SpriteInfo;
    static player: SpriteUtil.SpriteInfo;
    static playerHairMan: SpriteUtil.SpriteInfo;
    static playerHairWoman: SpriteUtil.SpriteInfo;
    static raft: SpriteUtil.SpriteInfo;
    static text: SpriteUtil.SpriteInfo;
}
declare module ResourceLoader {
    enum PathType {
        Creature = 0,
        Corpse = 1,
        Item = 2,
        Equip = 3,
        Terrain = 4,
        Doodad = 5,
    }
    interface IResourceContainer {
        spriteTexture: WebGLTexture;
        spriteTextureSizeInversed: Vec2;
        tileTexture: WebGLTexture;
        tileTextureSizeInversed: Vec2;
    }
    function initialize(gl: WebGLRenderingContext): void;
    function loadResources(container: IResourceContainer): void;
    function continueLoading(): void;
    function takeLoadingSlot(callback: () => void): void;
    function releaseLoadingSlot(): void;
    function getPath(pathType: PathType, index: number): string;
    function getImageOverride(src: string): string;
}
declare module SaveLoad {
    var maxSlots: number;
    var saveTime: number;
    class SaveObject {
        version: string;
        data: any;
    }
    function isEnabled(): boolean;
    function useLocalStorage(): void;
    function initialize(): void;
    function getSaveSlots(callback: (slot: number, isUsed: boolean) => void): void;
    function isSlotUsed(slot: number, callback: (slot: number, isUsed: boolean) => void): void;
    function getSaveCount(callback: (usedCount: number, usedSlots: number[]) => void, callbackPerSlot?: (slot: number, isUsed: boolean) => void): void;
    function getFirstFreeSlot(callback: (slot: number | null) => void): void;
    function save(slot: number, callback: (slot: number, bytes: number) => void): void;
    function load(slot: number, callback: (slot: number, success: boolean) => void): void;
    function loadPartial(slot: number, callback: (slot: number, success: boolean, saveObject: SaveObject) => void): void;
    function loadPartialData(saveObject: SaveObject, object: any, key: string, saveObjectKey?: string, skipCompression?: boolean): void;
    function loadPartialDataInside(saveObject: SaveObject, saveObjectKey: string, key?: string | undefined): any;
    function savePartialData(slot: number, object: any, key: string, saveObjectKey: string, callback: (slot: number, bytes: number) => void): void;
    function savePartialDataInside(slot: number, saveObjectKey: string, key: string, value: any, callback: (slot: number, bytes: number) => void): void;
    function exportSave(slot: number, callback: (slot: number, success: boolean, json: string) => void): void;
    function importSave(slot: number, data: string, callback: (slot: number | null, bytes: number | null) => void): void;
    function deleteSlot(slot: number, callback: (slot: number, success: boolean) => void): void;
    function deleteAll(callback: () => void): void;
    function transferSaves(): void;
}
interface ISerializable {
    serializeObject(serializer: Serializer, version: string): void;
    deserializeObject(serializer: Serializer, version: string): void;
}
interface IUnserializedCallback {
    onUnserialized(): void;
}
interface IPropSerializable {
    getSerializationProperties(version: string): string[];
}
declare enum Types {
    Invalid = 0,
    Undefined = 1,
    Null = 2,
    Boolean = 3,
    ByteSigned = 4,
    ByteUnsigned = 5,
    ShortSigned = 6,
    ShortUnsigned = 7,
    IntegerSigned = 8,
    IntegerUnsigned = 9,
    Float32 = 10,
    Float64 = 11,
    String = 12,
    Array = 13,
    Object = 14,
    ArrayBuffer = 15,
    Item = 16,
    Creature = 17,
}
declare let concreteTypeMap: {
    [index: number]: any;
};
declare let concreteTypeKeys: number[];
declare class Serializer {
    static serializeAllProperties: string[];
    maxBytes: number;
    private buffer;
    private dataView;
    private byteOffset;
    private object;
    private objectKey;
    private version;
    constructor(object: any, objectKey: any, version: string);
    saveToString(): string;
    loadToObject(data: string): void;
    readProperty(object: any, key: any): void;
    writeProperty(object: any, key: any): void;
    private getSerializationProperties(object, version);
    private readObject(object, key);
    private readString();
    private readArrayBuffer();
    private writeObject(object, properties?);
    private writeString(value);
    private writeArrayBuffer(object);
    private isInteger(nVal);
    private isByteSigned(num);
    private isByteUnsigned(num);
    private isShortSigned(num);
    private isShortUnsigned(num);
    private isIntegerSigned(num);
    private isIntegerUnsigned(num);
}
declare enum SpriteBatchLayer {
    Corpse = 0,
    Item = 1,
    Creature = 2,
}
declare class SpriteBatch {
    private static shaderProgram;
    private static spriteLength;
    capacity: number;
    texSprites: WebGLTexture;
    inverseSpriteTextureSize: Vec2;
    private count;
    private buffer;
    private colorBuffer;
    private array;
    private colorArray;
    private gl;
    private begun;
    constructor(gl: WebGLRenderingContext, maxSprites: number);
    clear(): void;
    begin(): void;
    add(tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number, offsetY?: number, red?: number, green?: number, blue?: number, alpha?: number): void;
    end(): void;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number): void;
}
declare module SpriteUtil {
    class SpriteInfo {
        texCoord: Vec2;
        texSize: number;
        texOffsetY: number;
        constructor(texCoord: Vec2, texSize: number, texOffsetY: number);
    }
    class TexturePacker {
        private gl;
        width: number;
        height: number;
        texture: WebGLTexture;
        inverseTextureSize: Vec2;
        private spriteLoadCount;
        private sprites;
        private rootNode;
        private padding;
        private loadedSprites;
        constructor(gl: WebGLRenderingContext, width: number, height: number, nullSprite: boolean, padding: number);
        load(callback: () => void): void;
        addSprite(src: string, callback: (si: SpriteInfo, imageElement: HTMLImageElement | null) => void): void;
        private loadSprite(sprite, callback, retry?);
        private spriteLoaded(callback);
        private checkFinished(callback);
        private pack();
        private packSprite(gl, image);
    }
}
declare namespace UI {
    class BaseScreen implements IUiScreen {
        element: JQuery;
        visible: boolean;
        constructor();
        selector(): string;
        bindElements(): void;
        unbindElements(): void;
        onGameEnd(showBlocker: boolean): void;
        isVisible(): boolean;
        show(data?: any): void;
        doShow(): void;
        hide(): void;
        doHide(): void;
        protected onShow(data?: any): void;
        protected onHide(): void;
        onMouseDown(event: JQueryEventObject): void;
        onMouseUpOrLeave(event: JQueryEventObject): void;
        onMouseMove(event: JQueryEventObject): void;
        onMouseScroll(event: JQueryEventObject): void;
        onKeyDown(event: JQueryEventObject, keyCode: number, blockable: boolean): boolean | null;
        onKeyUp(event: JQueryEventObject): boolean | null;
    }
}
declare namespace UI {
    interface ConfirmOptions {
        message: string;
        buttons: Message[];
        callback?: (id: number | undefined) => void;
    }
    class ConfirmScreen extends BaseScreen {
        options: ConfirmOptions;
        elementOverlay: JQuery;
        elementMessage: JQuery;
        elementButtonRow: JQuery;
        selector(): string;
        bindElements(): void;
        onShow(options: ConfirmOptions): void;
        onHide(): void;
        onKeyUp(event: JQueryEventObject): boolean | null;
    }
}
declare namespace UI {
    class CoverScreen extends BaseScreen {
        private fadingOut;
        selector(): string;
        bindElements(): void;
        doShow(): void;
        onShow(): void;
        onHide(): void;
        private fadeOut();
        private createParticles();
    }
}
declare namespace UI {
    class HelpScreen extends BaseScreen {
        elementOverlay: JQuery;
        elementTitle: JQuery;
        elementHeader: JQuery;
        elementContent: JQuery;
        elementButtonRow: JQuery;
        selector(): string;
        bindElements(): void;
        setHeight(): void;
        onShow(data: any): void;
        onHide(): void;
        displayHint(hintType: HintType): void;
        onButtonClick(id: string): void;
        reloadToggleHintsState(): void;
    }
}
declare namespace UI {
    enum TextElementId {
        Weight = 0,
        Attack = 1,
        Defense = 2,
        Malignity = 3,
    }
    class InGameScreen extends BaseScreen {
        elementVisibleInGame: JQuery;
        elementBlocker: JQuery;
        elementBlockerMouse: JQuery;
        elementStatHealth: JQuery;
        elementStatStamina: JQuery;
        elementStatHunger: JQuery;
        elementStatThirst: JQuery;
        elementStatBurn: JQuery;
        elementStatBleed: JQuery;
        elementStatPoison: JQuery;
        elementAttributeWeight: JQuery;
        elementAttributeAttack: JQuery;
        elementAttributeDefense: JQuery;
        elementAttributeMalignity: JQuery;
        elementButtons: JQuery;
        elementQuickSlotsContainer: JQuery;
        elementMessagesOverlay: JQuery;
        elementActions: JQuery;
        elementDialogs: JQuery;
        elementDialogInventory: JQuery;
        elementDialogInventoryContainer: JQuery;
        elementDialogCrafting: JQuery;
        elementDialogCraftingContainer: JQuery;
        elementDialogDismantleContainer: JQuery;
        elementDialogEquipment: JQuery;
        elementDialogEquipmentContainer: JQuery;
        elementDialogSkills: JQuery;
        elementDialogSkillsContainer: JQuery;
        elementDialogMilestones: JQuery;
        elementDialogMilestonesContainer: JQuery;
        elementDialogMessages: JQuery;
        elementDialogMessagesContainer: JQuery;
        elementDialogMap: JQuery;
        elementContainers: JQuery;
        elementContainerDialogs: JQuery[];
        elementOtherDialogs: JQuery[];
        private mouseEvent;
        private touchEvent;
        private hasTouchScreen;
        private mouseX;
        private mouseY;
        private lastText;
        private lastStats;
        private contextMenu;
        private contextMenuTarget;
        private contextMenuOpen;
        private closingContextMenu;
        private contextMenuBlocking;
        private lastContextMenuPosition;
        private actionsMenuOpen;
        private activeContainer;
        private multipleContainersOpened;
        private sortableElement;
        private sortableElementPosition;
        private sortingCancelled;
        private craftableItemTypes;
        private nonCraftableItemTypes;
        private messages;
        private messageLoadIndex;
        private worldTooltip;
        selector(): string;
        bindElements(): void;
        unbindElements(): void;
        bindSortable(element: JQuery): void;
        onKeyDown(_: JQueryEventObject, keyCode: number, blockable: boolean): boolean | null;
        onKeyUp(event: JQueryEventObject): boolean | null;
        runBind(bind: IBind): boolean | null;
        pressHotKey(hotKeyNumber: number): boolean;
        useQuickSlot(slot: number): boolean;
        isSorting(): boolean;
        cancelSorting(): void;
        cancelSortingAndRemoveItems(): void;
        setupContextMenu(): any;
        onShow(): void;
        onHide(): void;
        initializeGameState(): void;
        onGameEnd(showBlocker: boolean): void;
        getDialogIndex(dialogId: DialogId, customDialogInfo?: IDialogInfo | null): string;
        setupDialog(dialogId: DialogId, highlightItemId?: number | null, customDialogInfo?: IDialogInfo | null): JQueryUI.DialogOptions;
        onMouseDown(event: JQueryEventObject): void;
        onMouseUpOrLeave(event: JQueryEventObject): void;
        onOtherClick(event: JQueryEventObject): void;
        onMouseMove(event: JQueryEventObject): void;
        onBlockerMouseMove(event: JQueryEventObject): void;
        completeBlockerMouseMovement(): void;
        isMouseMovementBlockerVisible(): boolean;
        highlightItemElementByItemId(itemId: number, highlight: boolean, force?: boolean, skipCount?: boolean): void;
        highlightItemElementByItemType(itemType: ItemType, highlight: boolean, force?: boolean, skipCount?: boolean): void;
        highlightItemElementByItemTypeWithNoItemId(itemType: ItemType, highlight: boolean, force?: boolean, skipCount?: boolean): void;
        highlightItemElementBySelector(selector: string, highlight: boolean, force?: boolean, skipCount?: boolean): void;
        getMovementDirection(event: any): FacingDirection;
        onMouseScroll(event: JQueryEventObject): void;
        canUseHotkeys(): boolean;
        refreshStats(): void;
        refreshAttributes(): void;
        updateTextIfChanged(id: TextElementId, element: JQuery, text: string): void;
        onButtonBarClick(button: string): void;
        blurFilters(): void;
        toggleDialog(dialog: JQuery): boolean;
        openDialog(dialog: JQuery): boolean;
        closeDialog(dialog: JQuery): boolean;
        openMapDialog(): void;
        closeMapDialog(): void;
        closeAllDialogs(): boolean;
        autoOpenDialog(index: string | number, element: JQuery): boolean;
        openDialogs(): void;
        clampDialogs(): void;
        getItemClass(item: Item.IItem | null, itemType?: ItemType | null): string;
        createItemElementByItemType(itemType: ItemType, item?: Item.IItem | null): JQuery;
        createItemElementByItem(item: Item.IItem): JQuery | null;
        syncItemElements(itemId: number, selector?: JQuery | null): void;
        syncDamagedDecayed(item: Item.IItem, element: JQuery): void;
        addItemToContainer(item: Item.IItem, container: Item.IContainer, internal?: boolean, isAddingMultipleItems?: boolean): void;
        onAddItemsToContainer(containerElement: JQuery, containerDialogElement: JQuery | null, isInventoryContainer: boolean): void;
        afterAddingMultipleItemsToContainer(container: Item.IContainer): void;
        removeItemFromContainer(item: Item.IItem, container: Item.IContainer): void;
        refreshQuickSlots(): void;
        getInventoryItemsInOrder(): any[];
        loadQuickSlots(): void;
        saveItemOrder(containerElement: JQuery): void;
        showItemContextMenu(element: JQuery, isContainer?: boolean): void;
        onContextMenuAction(element: JQuery, action: IContextMenuAction, toElement: JQuery | null): boolean;
        runContextMenuAction(itemId: number, containerId: number | null, action: IContextMenuAction): boolean;
        onInventoryItemRightClick(element: JQuery): void;
        onContainerItemRightClick(element: JQuery): void;
        onCraftingItemClick(element: JQuery): void;
        onDismantleItemClick(element: JQuery): void;
        onDismantleHover(element: JQuery, hover: boolean): void;
        onQuickSlotItemRightClick(element: JQuery): void;
        onEquipmentItemRightClick(element: JQuery): void;
        getTooltipHtml(element: JQuery): string | undefined;
        tooltipEnable(): void;
        tooltipRefresh(): void;
        tooltipDisable(): void;
        tooltipHide(): void;
        onTooltipClose(): void;
        getTooltipHtmlForItem(item: Item.IItem, itemType: ItemType, isQuickSlot: boolean): string;
        getTooltipHtmlForTile(tile: Terrain.ITile): string;
        displayMessagePack(messagePack: IMessagePack): void;
        createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
        getMessageCount(): number;
        removeOldestMessage(): void;
        getUsedQuickSlots(): number[];
        getFreeQuickSlots(): number[];
        getQuickSlotItemElement(quickSlot: number): JQuery;
        getItemIdInQuickSlot(quickSlot: number): number | null;
        setQuickSlot(quickSlot: number, itemId: number | null, internal?: boolean): boolean;
        setQuickSlotByItemType(quickSlot: number, itemType: ItemType, disabled: boolean): JQuery;
        addItemToFreeQuickSlot(itemId: number): void;
        clearQuickSlot(quickSlot: number, internal?: boolean): void;
        removeItemFromQuickSlot(itemId: number | null): void;
        updateQuickSlotItem(quickSlot: number): boolean;
        onUpdateQuickSlotsOrEquips(): void;
        onSortableItemReceive(event: JQueryEventObject, uiObject: JQueryUI.SortableUIParams): void;
        getEquipSlotItemElement(equip: EquipType): JQuery;
        getItemIdInEquipSlot(equip: EquipType): number | null;
        setEquipSlot(equip: EquipType, itemId: number | null, internal?: boolean): void;
        removeItemFromEquipSlot(itemId: number, internal?: boolean): void;
        updateSkillsDialog(): void;
        updateMilestonesDialog(): void;
        updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
        generateDismantleItems(): void;
        updateDismantleTab(dismantleItems: Item.IDismantleComponent): void;
        createCraftItemElements(sortType: SortType): void;
        updateItem(item: Item.IItem): void;
        onMove(): void;
        refreshWorldTooltips(): void;
        getDialogElementForContainer(container: Item.IContainer): JQuery | null;
        isContainerOpen(container: Item.IContainer): boolean;
        openContainer(container: Item.IContainer, containerName?: string | null): void;
        closeContainer(container: Item.IContainer): void;
        closeContainerDialog(containerDialog: JQuery | null): void;
        onContainerClose(container: Item.IContainer): JQuery | null;
        closeStaticContainers(): void;
        closeAllContainers(): boolean;
        updateContainerName(containerDialogElement: JQuery): void;
        updateActiveContainer(): void;
        hideContextMenu(): boolean;
        hideActionsMenu(): boolean;
        toggleActionsMenu(center?: boolean): void;
        onClearMessages(): void;
        onFilterInput(containerElement: JQuery): void;
        showSortContextMenu(element: JQuery, container: JQuery, messageType: Message): void;
        sortItems(containerElement: JQuery, sortType: SortType, messageType: Message | null): void;
        sortItemElements(itemElements: JQuery, containerSortInfo: IContainerSortInfo): void;
        updateInventorySort(): void;
        onUpdateContainer(containerElement: JQuery, activeSort: boolean): void;
        updateSort(container: JQuery, activeSort: boolean): void;
        isContainerDialogOver(x: number, y: number): boolean;
        private onOpenMessages();
        private getMessagesHtml();
        private onCloseMessages();
    }
}
declare namespace UI {
    interface InputOptions {
        message: string;
        buttonText: string;
        inputText: string;
        placeholder: string;
        callback?: (input: string | undefined) => void;
    }
    class InputScreen extends BaseScreen {
        options: InputOptions;
        elementOverlay: JQuery;
        elementMessage: JQuery;
        elementControlRow: JQuery;
        selector(): string;
        bindElements(): void;
        onShow(options: InputOptions): void;
        onHide(): void;
        onKeyUp(event: JQueryEventObject): boolean | null;
        private onButtonClick(inputOverride?);
    }
}
declare namespace UI {
    class LoadingScreen extends BaseScreen {
        visible: boolean;
        elementMessage: JQuery;
        elementNormal: JQuery;
        elementRest: JQuery;
        selector(): string;
        bindElements(): void;
        onShow(data?: any): void;
        onHide(): void;
        setMessage(message: Message): void;
    }
}
declare namespace UI {
    class OptionsScreen extends BaseScreen {
        elementOverlay: JQuery;
        elementTitleScreenOptions: JQuery;
        elementLanguageSelect: JQuery;
        elementBindList: JQuery;
        elementBindDefault: JQuery;
        elementBindDefaultParent: JQuery;
        bindDefaultWidth: number;
        selector(): string;
        bindElements(): void;
        onShow(): void;
        onHide(): void;
        setCheckboxValue(id: string, checked: boolean): void;
        setButtonChoiceValue(id: string, firstSelected: boolean): void;
        onClickKeybind(element: JQuery, id: KeyBind): void;
        onClickKeyBindDefault(): void;
        resetBindState(setDefault?: boolean): KeyBind | null;
        updateBind(key: KeyBind, element: JQuery): void;
        onClickCheckbox(element: JQuery, id: string): void;
        onClickButton(element: JQuery, id: string): void;
        onClickButtonChoice(element: JQuery, id: string): void;
        onRangeChange(element: JQuery, id: string, value: number): void;
        addOptionsSection(elementId: string, sectionName: string): JQuery;
        removeOptionsSection(sectionName: string): void;
    }
}
declare namespace UI {
    class TitleScreen extends BaseScreen {
        openedMenu: string;
        elementPlayGameContainer: JQuery;
        elementNewGame: JQuery;
        elementPlayGameSeparater: JQuery;
        elementSavedGameTemplate: JQuery;
        elementNoMods: JQuery;
        elementModContainer: JQuery;
        elementLocalMods: JQuery;
        elementLocalModsContainer: JQuery;
        elementWorkshopMods: JQuery;
        elementWorkshopModsContainer: JQuery;
        elementInternalMods: JQuery;
        elementInternalModsContainer: JQuery;
        elementModTemplate: JQuery;
        elementImportGameInput: JQuery;
        elementHighscoresContainer: JQuery;
        elementHighscoresNoHighscores: JQuery;
        elementHighscoreTemplate: JQuery;
        elementAboutContainer: JQuery;
        elementEndGameHeaderBottom: JQuery;
        elementEndGameHighscore: JQuery;
        selector(): string;
        bindElements(): void;
        unbindElements(): void;
        onShow(data?: any): void;
        onHide(): void;
        onKeyDown(event: JQueryEventObject, keyCode: number, blockable: boolean): boolean | null;
        showMainMenuId(mainMenuId: string): void;
        refreshSlots(): void;
        refreshMods(): void;
        refreshHighscores(): void;
        updateModState(element: JQuery, id: number): void;
        postUpdateModState(): void;
        onAction(actionId: string, element: JQuery): void;
        actionNewGame(): void;
        actionEditGame(slot: number, inputElement: JQuery): void;
        actionContinueGame(slot: number): void;
        playSlot(slot: number): void;
        actionDeleteGame(slot: number): void;
        getTooltipHtml(element: JQuery): string;
        onImportGame(e: Event): any;
        onSlotNameChange(slot: number, inputElement: JQuery): void;
        refreshEndGame(): void;
        exportToFile(slot: number): void;
        exportToSteamWorkshop(name: string, slot: number): void;
    }
}
