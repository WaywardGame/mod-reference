interface Math {
    clamp255(value: number): number;
    clamp01(value: number): number;
}
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
        function getGfx(tile: ITile): number;
        function getGfxRaw(data: number): number;
        function setGfx(tile: ITile, value: number): void;
        function setGfxRaw(data: number, value: number): number;
        function getType(tile: ITile): TerrainType;
        function getTypeRaw(data: number): TerrainType;
        function setType(tile: ITile, value: TerrainType): void;
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
    }
    module String {
        function formatCase(text: string, textCase: TextCase): string;
    }
    function roundNumber(num: any, dec: any): number;
    function loadImage(src: any, callback: any): void;
    function getTileVariation(x: number, y: number): number;
    function lerp(from: number, to: number, t: number): number;
    function easeInQuad(time: number, start: number, change: number, duration: number): number;
    function easeInCubic(time: number, start: number, change: number, duration: number): number;
    function isInBound2Wrapped(bound: Bound2, x: number, y: number): boolean;
    function shuffle(array: number[]): number[];
    class Queue<T> {
        private queue;
        private offset;
        constructor();
        getLength(): number;
        isEmpty(): boolean;
        enqueue(value: T): void;
        dequeue(): T | null;
    }
    function debounce(id: string, callback: () => void, timeout: number): void;
    function windowKeysToObject(keys: string[]): any;
    function windowKeysToParentObject(keys: string[]): any;
}
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
declare function ArrayEquals(arr1: any[], arr2: any[]): boolean;
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
    AppearsToBeDawn = 10,
    AppearsToBeDusk = 11,
    AppearsToBeMidDay = 12,
    AppearsToBeNight = 13,
    AreYouSureYouWantToSail = 14,
    ArmorAppearedResistant = 15,
    ArmorAppearedVulnerable = 16,
    ArmorProtectedFromInjuryAgainst = 17,
    Attack = 18,
    AttemptedToDropAllIntoFire = 19,
    AttemptToPlaceAllOnGround = 20,
    AutomaticallySavingGame = 21,
    AwakeToFindYourself = 22,
    Back = 23,
    BadlyBurnedLostHealth = 24,
    BeenPoisoned = 25,
    BeginSleeping = 26,
    BeginUsingRaft = 27,
    Belt = 28,
    BleedingHasStopped = 29,
    BleedingProfusely = 30,
    BleedingToDeathLostHealth = 31,
    Blunt = 32,
    BrokeIntoPieces = 33,
    BrokenOnImpact = 34,
    BrokenWhileFiring = 35,
    Build = 36,
    Burned = 37,
    By = 38,
    ByBleedingOut = 39,
    ByBurnInjuries = 40,
    ByEatingSomethingBad = 41,
    ByPoisoning = 42,
    BySteppingOnA = 43,
    BySteppingOnTrap = 44,
    ByWorkingYourselfIntoExhaustion = 45,
    Cancel = 46,
    CannotAddAnyMoreFuel = 47,
    CannotBePerformedOverWater = 48,
    CannotBePreserved = 49,
    CannotBeReinforced = 50,
    CannotBeRepaired = 51,
    CannotBeTransmogrified = 52,
    CannotBuildHere = 53,
    CannotDigHere = 54,
    CannotDropHere = 55,
    CannotEquipThatThere = 56,
    CannotFishFor = 57,
    CannotGatherFromWhileOnFire = 58,
    CannotGatherHere = 59,
    CannotImproveGrowingSpeed = 60,
    CannotInWater = 61,
    CannotPickupWhenFull = 62,
    CannotPickUpWhileLit = 63,
    CannotPickUpWithItemsInside = 64,
    CannotPlaceContainerInItself = 65,
    CannotPlaceHere = 66,
    CannotPlaceThatFromHere = 67,
    CannotPlaceThatHere = 68,
    CannotPlantHere = 69,
    CannotRepairWhileLit = 70,
    CannotRestHere = 71,
    CannotSeeHere = 72,
    CannotSleepHere = 73,
    CannotStartFireHere = 74,
    CannotToTellTime = 75,
    CarryingTooMuchWeight = 76,
    CarvedUpCorpse = 77,
    CastYourLine = 78,
    Category = 79,
    CaughtFish = 80,
    Chest = 81,
    ClearMessages = 82,
    CloseDoor = 83,
    CollectObject = 84,
    Consumed = 85,
    Container = 86,
    Cook = 87,
    Cooked = 88,
    Corpse = 89,
    CorruptSaveDetected = 90,
    CouldNotDecipher = 91,
    Craft = 92,
    Crafted = 93,
    Crafts = 94,
    CreatureAppears = 95,
    CreatureAppearsHealthy = 96,
    CreatureAppearsUnhealthy = 97,
    CreatureIsAtPercentHealth = 98,
    CreatureLooksBarelyHurt = 99,
    CreatureLooksHealthyAndUndamaged = 100,
    CreatureLooksInjured = 101,
    CreatureLooksSeverelyDamaged = 102,
    CreatureSeemsHurt = 103,
    CreatureSeemsInjured = 104,
    CreatureSeemsUnimpaired = 105,
    CuredYourPoison = 106,
    Cut = 107,
    DailyChallengeMode = 108,
    DamageAppearedEffective = 109,
    DamageAppearedIneffective = 110,
    DamagedByPouringWater = 111,
    DealtNoDamageToYou = 112,
    Decay = 113,
    DefaultGameName = 114,
    DependencyIssue = 115,
    DestroyedFromUse = 116,
    DestroyedGrowingByPickingItUp = 117,
    DexterityIncreasing = 118,
    DidNotSeemToBeHurting = 119,
    Disassemble = 120,
    DisassembleAction = 121,
    DiscoveredCaveEntrance = 122,
    DiscoveredInTheBottle = 123,
    Dismantle = 124,
    DismantleAction = 125,
    DismantleLabel = 126,
    DismantlingRequires = 127,
    DoNotForgetToAddRequiredModsOnWorkshop = 128,
    DoNotHaveTreasureMaps = 129,
    DoodadAppearsDamaged = 130,
    DoodadAppearsOnVergeOfBreaking = 131,
    DoodadAppearsUnscathed = 132,
    DoodadCauseStatus = 133,
    DoodadShowsSignsOfWear = 134,
    DrewSurroundings = 135,
    Drink = 136,
    Drop = 137,
    DropAll = 138,
    DropAllOfSameQuality = 139,
    DroppedAllIntoDepths = 140,
    DroppedIntoDepths = 141,
    DroppedIntoFire = 142,
    DueToDehydration = 143,
    DueToStarvation = 144,
    DugTreasureOut = 145,
    DumpContentsOfContainerInInventory = 146,
    Durability = 147,
    DyingOfDehydration = 148,
    EarnedMilestone = 149,
    EquipTo = 150,
    ErrorHasOccured = 151,
    Expert = 152,
    ExtinguishedFire = 153,
    ExtinguishedTorch = 154,
    FailedToAddFuelToTorch = 155,
    FailedToCatchFish = 156,
    FailedToCauseDamage = 157,
    FailedToDrawMap = 158,
    FailedToPickLock = 159,
    FailedToPlant = 160,
    FailedToPreserve = 161,
    FailedToReinforce = 162,
    FailedToRepair = 163,
    FailedToStartFire = 164,
    FailedToTransmogrify = 165,
    FarAwayFromTreasure = 166,
    Feet = 167,
    FeltBurningPainLostHealth = 168,
    FewMinutes = 169,
    Filled = 170,
    FilledFrom = 171,
    FinalizingWorld = 172,
    Fire = 173,
    FireAlmostExtinguished = 174,
    FiredIntoObstacle = 175,
    FireFacingYouIsWarm = 176,
    FireIsHealthy = 177,
    FireIsRaging = 178,
    FireIsStruggling = 179,
    FireSource = 180,
    FirstQuarterOfDay = 181,
    FirstQuarterOfNight = 182,
    Food = 183,
    FoodAlreadyPreserved = 184,
    FourthQuarterOfDay = 185,
    FourthQuarterOfNight = 186,
    FullyDecodedMap = 187,
    GainedHealth = 188,
    GainedHunger = 189,
    GainedStamina = 190,
    GainedThirst = 191,
    GameHasBeenSavedIsTakingUpMB = 192,
    Gather = 193,
    GeneratingWorld = 194,
    GrabAll = 195,
    Group = 196,
    Hands = 197,
    HasBeenHurtByATrap = 198,
    HasBeenHurtByYourTrap = 199,
    HasDecayed = 200,
    HasHitYouForDamage = 201,
    HasSplit = 202,
    Head = 203,
    Held = 204,
    Help = 205,
    Hints = 206,
    HintsDisabled = 207,
    HintsEnabled = 208,
    HitForDamage = 209,
    Hour = 210,
    Hours = 211,
    HowDoYouWantToExportSave = 212,
    HurtHandsByGatheringWithNoTool = 213,
    HurtHandsHittingWithoutWeapons = 214,
    IncompatibleVersion = 215,
    InExactLocationOfTreasure = 216,
    InjuredFromTrap = 217,
    InNeedOfRepair = 218,
    Inspect = 219,
    Intermediate = 220,
    Inventory = 221,
    ItContains = 222,
    ItsWeightCapacity = 223,
    Jump = 224,
    Killed = 225,
    LabelAttackFromTactics = 226,
    LabelAuthor = 227,
    LabelBase = 228,
    LabelBaseAttack = 229,
    LabelBaseDefense = 230,
    LabelBluntResist = 231,
    LabelDecay = 232,
    LabelDefense = 233,
    LabelDefenseFromParrying = 234,
    LabelDoodadRequired = 235,
    LabelDurability = 236,
    LabelEquip = 237,
    LabelFireResist = 238,
    LabelGrouping = 239,
    LabelHave = 240,
    LabelHp = 241,
    LabelLastUpdated = 242,
    LabelLeftHandAttack = 243,
    LabelLevel = 244,
    LabelMalignityNegative = 245,
    LabelMalignityPlus = 246,
    LabelOnEquip = 247,
    LabelPiercingResist = 248,
    LabelRange = 249,
    LabelRanged = 250,
    LabelRangedAttack = 251,
    LabelRangedDamage = 252,
    LabelRequiredMods = 253,
    LabelRequires = 254,
    LabelResists = 255,
    LabelRightHandAttack = 256,
    LabelScore = 257,
    LabelSkill = 258,
    LabelSlashingResist = 259,
    LabelStokeFireStrength = 260,
    LabelUse = 261,
    LabelUses = 262,
    LabelVersion = 263,
    LabelVulnerabilities = 264,
    LabelWeight = 265,
    LabelWeightCapacity = 266,
    LabelWeightReduction = 267,
    LastPlaceYouLeftOff = 268,
    LearnedHowToCreate = 269,
    LeftHand = 270,
    Legs = 271,
    LikelyFailures = 272,
    LoadingMods = 273,
    LoadingSprites = 274,
    LoadingWorld = 275,
    LocalFile = 276,
    LocalVersionOfModDetected = 277,
    LoseBonesLayBleaching = 278,
    LoseEndIsBeginning = 279,
    LoseSadlyNoTrace = 280,
    LostHealth = 281,
    LostHunger = 282,
    LostStamina = 283,
    LostThirst = 284,
    MapNotOfThisArea = 285,
    MaterialsDestroyedDisassembly = 286,
    MaterialsDestroyedDismantle = 287,
    MetabolismSlowed = 288,
    MilestoneIsHidden = 289,
    MilestoneIsInvisible = 290,
    MissedWith = 291,
    MissingRequiredMods = 292,
    ModImportedSaveGame = 293,
    ModLoadError = 294,
    ModRequiresItself = 295,
    ModWithNameAlreadyExists = 296,
    MonsterIdolAttractedCreature = 297,
    MouseButton = 298,
    MoveAllOfSameQualityToInventory = 299,
    MoveAllOfSameQualityToOpenedContainer = 300,
    MoveAllToInventory = 301,
    MoveAllToOpenedContainer = 302,
    MoveOverTrapButDoNotSetOff = 303,
    MoveToInventory = 304,
    MoveToOpenedContainer = 305,
    MustCastIntoWater = 306,
    Mysteriously = 307,
    Name = 308,
    NearlyBurnedEquipmentProtectedYou = 309,
    Neck = 310,
    NeedAShovelToDigTreasure = 311,
    NeedDeepWaterForRaft = 312,
    NeedFishingNetForTreasure = 313,
    NeedToBuildUpLandAround = 314,
    NeedToEquipToShoot = 315,
    NeedToStartTravelsOutside = 316,
    No = 317,
    NoAmmunitionForThatWeapon = 318,
    NoBlackPowderToFireWeapon = 319,
    NoFireToStokeWith = 320,
    NoFishAtLocation = 321,
    NoFuelItemsToStartFire = 322,
    NoInkToDrawMap = 323,
    NoKindlingToStartFire = 324,
    NoLongerFeelPainOBeingfBurned = 325,
    NoMoreRoomInContainer = 326,
    NoNeedToStokeFire = 327,
    NoRoomToDrop = 328,
    NotAvailable = 329,
    NotEnoughFoodToTravel = 330,
    NotEnoughPurifiedWaterYet = 331,
    NotEnoughStrengthToThrow = 332,
    NotEnoughTreasureToReturn = 333,
    NotFacingLockedObject = 334,
    NotFacingValidFoodForPreservation = 335,
    NotFacingValidItemForReinforcement = 336,
    NotFacingValidItemForRepair = 337,
    NotFacingValidItemToTransmogrify = 338,
    NothingHereToCarve = 339,
    NothingHereToFill = 340,
    NothingHereToGardenWith = 341,
    NoTinderToStartFire = 342,
    NotInRangeOfTreasure = 343,
    NoWaterInStill = 344,
    NoWhereNearTreasure = 345,
    NumberEight = 346,
    NumberFive = 347,
    NumberFour = 348,
    NumberNine = 349,
    NumberOne = 350,
    NumberSeven = 351,
    NumberSix = 352,
    NumberTen = 353,
    NumberThree = 354,
    NumberTwo = 355,
    ObjectIsLocked = 356,
    Ok = 357,
    OpenDoor = 358,
    OpenFolderFailed = 359,
    OverEatingLostStamina = 360,
    OverHydratingLostStamina = 361,
    PaperTurnedToMush = 362,
    PartiallyDecodedMap = 363,
    PastExperiencesProvideBenefits = 364,
    PenultimateAnd = 365,
    PickupItem = 366,
    Piercing = 367,
    Place = 368,
    PlacedOnGround = 369,
    Plant = 370,
    PlantedInGround = 371,
    PlantIsFertile = 372,
    PlantIsNotFertile = 373,
    PlantVeryHealthy = 374,
    Poisoned = 375,
    PoisonedLostHealth = 376,
    PoisonWorkedItsCourse = 377,
    PouredOutWater = 378,
    PouredOutWaterOnYourself = 379,
    PouredWaterIntoStill = 380,
    PreservedFood = 381,
    PublishingMod = 382,
    PurifiedWaterInStill = 383,
    Quality = 384,
    Recent = 385,
    RefreshingMods = 386,
    Reinforce = 387,
    RemovedBlood = 388,
    RemoveFromQuickslot = 389,
    Repair = 390,
    RequiredForDisassembly = 391,
    RequiredModsMissingWantToContinue = 392,
    RequiredModsNotLoaded = 393,
    RequiresFacingFireSource = 394,
    RequiresFireToBeLit = 395,
    RequiresYouToBeFacingTo = 396,
    Rest = 397,
    Rested = 398,
    Resting = 399,
    RestInterrupted = 400,
    ReturnedToCivilization = 401,
    ReturningToCivilizationSetOffAgain = 402,
    ReturnsToLife = 403,
    ReturnToTitleScreenNoSaveInDailyChallenge = 404,
    ReturnToTitleScreenProgressWillBeSaved = 405,
    RightHand = 406,
    SailedToCivilization = 407,
    SavingGame = 408,
    Score = 409,
    ScrollProvidedNoUsefulInsight = 410,
    SeaweedFromWater = 411,
    SecondQuarterOfDay = 412,
    SecondQuarterOfNight = 413,
    SeeGrowing = 414,
    SeemsToHaveDrawnEnergy = 415,
    SetTrapOffButNoDamage = 416,
    SetUp = 417,
    ShadowInTheWater = 418,
    Simple = 419,
    Skill = 420,
    SkillHasRaised = 421,
    Slashing = 422,
    Sleeping = 423,
    SleepInterrupted = 424,
    Slept = 425,
    Soil = 426,
    SoilWouldHaveNoEffect = 427,
    SomethingInTheWayOfCarving = 428,
    SomethingInTheWayOfDigging = 429,
    SomethingInTheWayOfDiggingCarveFirst = 430,
    SomethingInTheWayOfFishing = 431,
    SomethingInTheWayOfGatheringCarveFirst = 432,
    SomethingInTheWayOfPerforming = 433,
    SomethingInTheWayOfPlacing = 434,
    SomethingInWayOfClosingDoor = 435,
    SoothedYourBurnInjuries = 436,
    Sort = 437,
    SortedByCategory = 438,
    SortedByDecay = 439,
    SortedByDurability = 440,
    SortedByGroup = 441,
    SortedByName = 442,
    SortedByQuality = 443,
    SortedByRecent = 444,
    SortedBySkill = 445,
    SortedByWeight = 446,
    StaminaIsFull = 447,
    StartedFire = 448,
    StartTravelInWater = 449,
    StarvingToDeath = 450,
    SteamWorkshop = 451,
    SteppingOnHasInjuredYouForDamage = 452,
    StillHasNoWaterToPurify = 453,
    StirredUpClawWorm = 454,
    StirredUpCreature = 455,
    StoppedYourBleeding = 456,
    StopUsingRaft = 457,
    StrengthIncreasing = 458,
    SummonedGuardiansByDiggingTreasure = 459,
    SunIsRising = 460,
    SunIsSetting = 461,
    SunNotBrightEnoughToStartFire = 462,
    TeleportBlocked = 463,
    Teleported = 464,
    ThereIsNoSunToStartFire = 465,
    ThirdQuarterOfDay = 466,
    ThirdQuarterOfNight = 467,
    Throw = 468,
    ThrownIntoDepths = 469,
    ThrownIntoObstacle = 470,
    TooDamaged = 471,
    TooExhaustedToJump = 472,
    ToolAppearedEffectiveForGathering = 473,
    TrampledFire = 474,
    TrampledIntoGround = 475,
    TrampleIntoGround = 476,
    Trampling = 477,
    Transmogrified = 478,
    TravelAway = 479,
    TravelToFarOffLands = 480,
    TreasureIsBlocked = 481,
    True = 482,
    UnableToImportSave = 483,
    UnableToLoadRequiredMods = 484,
    UnEquip = 485,
    Unknown = 486,
    UnknownItem = 487,
    UnlockedChest = 488,
    UnpurifiedWaterInStill = 489,
    UpdatingMod = 490,
    URLHasOpenedInWebBrowser = 491,
    UsedSoilToIncreaseFertility = 492,
    UsedToSpeedUpGrowing = 493,
    UsingBareFistsToFight = 494,
    UsingBareHandsToGather = 495,
    WaitUntilFireCooledToGetWater = 496,
    WalkingDistanceOfTreasure = 497,
    WantToDeleteAllSavedData = 498,
    WantToDeleteThisGame = 499,
    WantToPublishThisMod = 500,
    WantToPublishUpdateToMod = 501,
    WantToUninstallThisMod = 502,
    Water = 503,
    WaterDoesNotNeedDesalination = 504,
    WaterIncreaseFertilityOfPlant = 505,
    WaterPutOutFire = 506,
    WaterWouldHaveNoEffect = 507,
    Weight = 508,
    WeightCapacity = 509,
    WelcomeToWayward21 = 510,
    WinFindWayBackToCivilization = 511,
    WinSailBackWithRiches = 512,
    WinTravelledBackToCivilization = 513,
    With = 514,
    WorkingYourselfIntoExhaustion = 515,
    WorkshopHasBeenOpenedPressOkAfter = 516,
    Yes = 517,
    YouAte = 518,
    YouBeginResting = 519,
    YouCollected = 520,
    YouCrafted = 521,
    YouDied = 522,
    YouDisassembled = 523,
    YouDismantled = 524,
    YouDrank = 525,
    YouEquip = 526,
    YouFailedTo = 527,
    YouFailedToHeal = 528,
    YouFire = 529,
    YouGathered = 530,
    YouHaveKilled = 531,
    YouOpen = 532,
    YouPickedUp = 533,
    YouRepair = 534,
    YourFist = 535,
    YouSalvaged = 536,
    YouSee = 537,
    YouSeparate = 538,
    YouThrew = 539,
    YouUnequip = 540,
    YouUsed = 541,
}
declare var Z_MIN: number;
declare var Z_CAVE: number;
declare var Z_NORMAL: number;
declare var Z_MAX: number;
declare enum Source {
    Actions = 0,
    Audio = 1,
    Game = 2,
    Item = 3,
    Languages = 4,
    MapGen = 5,
    Mods = 6,
    ResourceLoader = 7,
    SaveLoad = 8,
    Shaders = 9,
    Steamworks = 10,
    Ui = 11,
    Utilities = 12,
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
    Monster = 3,
    Items = 4,
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
    Campfire = 82,
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
    Furnace = 110,
    Kiln = 111,
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
    ForgeAndAnvil = 131,
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
    CookedSpider = 151,
    DeadSpider = 152,
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
    Bones = 165,
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
    MonsterIdol = 228,
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
}
declare enum ItemTypeGroup {
    Invalid = 800,
    Sharpened = 801,
    Carbon = 802,
    Arrow = 803,
    Skewer = 804,
    Bone = 805,
    Fuel = 806,
    Medicinal = 807,
    Meat = 808,
    Food = 809,
    Insect = 810,
    Water = 811,
    Treasure = 812,
    Rock = 813,
    Compost = 814,
    Fabric = 815,
    Needle = 816,
    Cordage = 817,
    SharpenedRock = 818,
    Container = 819,
    Pole = 820,
    LightSource = 821,
    Repair = 822,
    Tongs = 823,
    Hammer = 824,
    Preservative = 825,
    Reinforce = 826,
    GlassBottleOfPotableWater = 827,
    Bullet = 828,
    Transmogrify = 829,
    WaterskinOfPotableWater = 830,
    Pulp = 831,
    ClayJugOfPotableWater = 832,
    Powder = 833,
    Equipment = 834,
    Gardening = 835,
    Firemaking = 836,
    Bedding = 837,
    Tool = 838,
    Weapon = 839,
    Health = 840,
    Travel = 841,
    Housing = 842,
    Heating = 843,
    Storage = 844,
    Trap = 845,
    Other = 846,
    RawMeat = 847,
    CookedMeat = 848,
    ContainerOfSeawater = 849,
    ContainerOfDesalinatedWater = 850,
    ContainerOfMedicinalWater = 851,
    ContainerOfPurifiedFreshWater = 852,
    ContainerOfUnpurifiedFreshWater = 853,
    Last = 854,
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
    MonsterIdol = 13,
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
    Campfire = 42,
    LitCampfire = 43,
    Kiln = 44,
    LitKiln = 45,
    Furnace = 46,
    LitFurnace = 47,
    TorchStand = 48,
    LitTorchStand = 49,
    ForgeAndAnvil = 50,
    LitForgeAndAnvil = 51,
    Acid = 52,
    CaveEntrance = 53,
    WoodenDoorOpen = 54,
    WoodenGate = 55,
    WoodenGateOpen = 56,
    PoisonIvy = 57,
    WroughtIronChest = 58,
    IronChest = 59,
    OrnateWoodenChest = 60,
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
    MonsterHit = 10,
    MonsterNoise = 11,
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
    Monster = 8,
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
    CaveDarkness = 5,
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
    Encumbered = 22,
    DailyChallengeMode = 23,
    MovingItems = 24,
    CraftingFailure = 25,
    Malignity = 26,
    Last = 27,
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
interface ITile {
    monsterId: number;
    doodadId: number;
    corpseIds: number[];
    eventId: number;
    data: number;
}
interface ITileArray {
    [index: number]: ITile;
}
interface ITileContainer extends Item.IContainer {
    x: number;
    y: number;
    z: number;
}
interface ITileData {
    type: TerrainType;
    strength?: number;
    minDur?: number;
    maxDur?: number;
    quality?: string;
    gfx?: number;
}
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
}
declare const terrains: ITerrainDescription[];
declare const resource: ITerrainResource[];
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
declare enum TileTemplateType {
    House = 0,
    Pond = 1,
    CavePond = 2,
    Desert = 3,
    Beach = 4,
    Boat = 5,
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
declare const templates: {
    [id: number]: {
        [id: string]: ITemplate;
    };
};
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
    constructor(xOffset: number, yOffset: number);
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
    constructor(xOffset: number, yOffset: number);
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
interface IMonster {
    x: number;
    y: number;
    z: number;
    fromX: number;
    fromY: number;
    direction: FacingDirection;
    ai: MonsterAiType;
    type: MonsterType;
    anim: number;
    aberrant: boolean;
    hp: number;
    maxhp: number;
    loot: ItemType[];
    respawned?: boolean;
}
declare enum MoveType {
    None = 0,
    Water = 1,
    ShallowWater = 2,
    Land = 4,
    Tree = 8,
    Mountain = 16,
    Flying = 15,
}
declare enum MonsterType {
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
}
declare enum MonsterSpawnGroup {
    Any = 0,
    Guardians = 1,
    Water = 2,
}
declare enum MonsterAiType {
    Neutral = 0,
    Hostile = 1,
    Scared = 2,
    Random = 4,
    Hidden = 8,
    Fearless = 16,
}
declare enum MonsterSpawnableTiles {
    None = 0,
    Default = 1,
    DefaultWithWater = 2,
    DeepWater = 3,
    Water = 4,
    Flying = 5,
    Ghost = 6,
}
declare const spawnableTiles: TerrainType[][];
interface IMonsterDescription {
    name?: string;
    minhp: number;
    maxhp: number;
    minatk: number;
    maxatk: number;
    defense: Defense;
    damageType: DamageType;
    ai: MonsterAiType;
    moveType: MoveType;
    fishable?: boolean;
    blood?: number[];
    aberrantBlood?: number[];
    loot?: IMonsterLoot[];
    spawnTiles: MonsterSpawnableTiles;
    spawnMalignity?: number;
    spawnOnNegativeMalignity?: boolean;
    makeNoise?: boolean;
    canCauseStatus?: StatusType[];
    lootGroup?: LootGroupType;
    breaksWalls?: boolean;
    jumpOver?: boolean;
    mod?: number;
    noCorpse?: boolean;
    respawn?: boolean;
    malignity: number;
    prefix?: string;
    suffix?: string;
    waterAnimations?: boolean;
}
interface IMonsterLoot {
    item: ItemType;
    chance?: number;
}
declare const monsters: IMonsterDescription[];
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
interface IMonsterCorpses {
    name?: string;
    decay?: number;
    resource?: IMonsterResource[];
    carve?: boolean;
    skill?: SkillType;
    damage?: number;
    prefix?: string;
}
interface IMonsterResource {
    item: ItemType;
    chance?: number;
}
interface ICorpse {
    x: number;
    y: number;
    z: number;
    type: MonsterType;
    decay?: number;
    aberrant?: boolean;
}
declare const corpses: IMonsterCorpses[];
declare type ActionCallback = (item: Item.IItem | null) => void;
declare namespace Actions {
    function add(use: ActionType, callback: ActionCallback): void;
    function remove(use: ActionType): void;
    function execute(use: ActionType, item: Item.IItem | null): void;
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
    function hurtTerrain(x: number, y: number, z: number, tile: ITile): boolean;
    function openDoor(): boolean;
    function closeDoor(): boolean;
    function squeeze(item: Item.IItem): void;
}
declare class WAudio {
    musicSpeed: number;
    fadingOut: boolean;
    fadingIn: boolean;
    private sfx;
    private music;
    private soundList;
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
    interface IDoodad extends Item.IObject {
        type: DoodadType;
        spread?: number;
        growInto?: DoodadType;
        gatherReady?: boolean;
        torch?: any;
        weight?: number;
        x: number;
        y: number;
        z: number;
        treasure?: boolean;
    }
    interface IDoodadFurnace extends IDoodad {
        lit: boolean;
    }
    interface IDoodadDoor extends IDoodad {
        orientation: DoorOrientation;
    }
    function create(type: DoodadType, x: number, y: number, z: number, spread?: number, decay?: number, minDur?: number, maxDur?: number, weight?: number): IDoodad;
    function remove(doodad: IDoodad): void;
    function updateAll(doodads: IDoodad[]): void;
    function update(doodad: IDoodad): void;
    function canGrowInCaves(doodad: IDoodad): boolean;
    function gather(doodad: IDoodad): void;
    function canPickup(doodad: IDoodad, message?: boolean): boolean;
    function pickup(x: number, y: number, z: number): void;
    function checkForTrampling(doodad: IDoodad, monsterId?: number | null): boolean;
    function getGardenFertilityMessage(spread: number): Message;
    function getDurabilityMessage(doodad: IDoodad): Message;
    function messageGardenFertility(spread: number): void;
    function inspect(doodad: IDoodad): IInspect[];
    function causeStatus(doodadDesc: IDoodadDescription): void;
    function damage(doodad: IDoodad, forceBreak?: boolean): void;
    function addTreasureChestLoot(doodad: IDoodad): void;
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
        particles?: number[];
    }
    interface IDoodadResource {
        item: ItemType;
        chance?: number;
    }
    var defines: IDoodadDescription[];
}
declare namespace Item {
    var lootGroup: ItemType[][];
    var groups: IGroupDescription[];
    var actionDescriptions: IActionDescription[];
    var defines: IItemDescription[];
    function RecipeComponent(type: (ItemType | ItemTypeGroup), requiredAmount: number, consumedAmount: number, disassembleAmount?: number, ignoreWeight?: boolean): IRecipeComponent;
    function generateLookups(): void;
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
declare const milestoneData: IMilestoneData[];
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
        MenuNoHighscores = 61,
        MenuNoMods = 62,
        MenuOpenLogsFolder = 63,
        MenuOpenModsFolder = 64,
        MenuOptions = 65,
        MenuOptionsMessage = 66,
        MenuPlayGame = 67,
        MenuPlayGameMessage = 68,
        MenuPlayGameNewGame = 69,
        MenuPostATweet = 70,
        MenuQuitGame = 71,
        MenuReloadGame = 72,
        MenuShareOnFacebook = 73,
        MenuToggleDeveloperTools = 74,
        MenuViewHighscores = 75,
        MenuViewHighscoresMessage = 76,
        MenuVisitSteamWorkshop = 77,
        NearDeath = 78,
        NextHint = 79,
        OptionsAlternateContextMenu = 80,
        OptionsAlternateContextMenuTooltip = 81,
        OptionsAlternateFont = 82,
        OptionsAudio = 83,
        OptionsAutoGather = 84,
        OptionsAutoGatherTooltip = 85,
        OptionsAutoPickup = 86,
        OptionsAutoPickupTooltip = 87,
        OptionsDeveloper = 88,
        OptionsDialogOpacity = 89,
        OptionsDropOnGather = 90,
        OptionsDropOnGatherTooltip = 91,
        OptionsEffects = 92,
        OptionsEnableHints = 93,
        OptionsEnableHintsTooltip = 94,
        OptionsFullscreenMode = 95,
        OptionsGame = 96,
        OptionsGraphics = 97,
        OptionsKeepSortActive = 98,
        OptionsKeepSortActiveTooltip = 99,
        OptionsBindDefault = 100,
        OptionsKeyBindRebinding = 101,
        OptionsBinds = 102,
        OptionsLanguage = 103,
        OptionsMouseClickMovement = 104,
        OptionsMouseClickMovementTooltip = 105,
        OptionsMusic = 106,
        OptionsMute = 107,
        OptionsNextSong = 108,
        OptionsPixelFont = 109,
        OptionsSaveData = 110,
        OptionsScaleDefault = 111,
        OptionsScaleIn = 112,
        OptionsScaleOut = 113,
        OptionsSkipIntro = 114,
        OptionsSkipIntroTooltip = 115,
        OptionsVisionDither = 116,
        OptionsVisionFade = 117,
        OptionsWindowedMode = 118,
        OptionsWorldTooltips = 119,
        OptionsWorldTooltipsTooltip = 120,
        OptionsZoomIn = 121,
        OptionsZoomOnScroll = 122,
        OptionsZoomOnScrollTooltip = 123,
        OptionsZoomOut = 124,
        Overburdened = 125,
        Poisoned = 126,
        PreviousHint = 127,
        QuickSlot1 = 128,
        QuickSlot2 = 129,
        QuickSlot3 = 130,
        QuickSlot4 = 131,
        QuickSlot5 = 132,
        QuickSlot6 = 133,
        QuickSlot7 = 134,
        QuickSlot8 = 135,
        QuickSlot9 = 136,
        ReturnToTitleScreen = 137,
        Stamina = 138,
        Starving = 139,
        Thirst = 140,
        Version = 141,
        Weight = 142,
        WindowTitleContainer = 143,
        WindowTitleCrafting = 144,
        WindowTitleEquipment = 145,
        WindowTitleHighscores = 146,
        WindowTitleInventory = 147,
        WindowTitleMap = 148,
        WindowTitleMessages = 149,
        WindowTitleMilestones = 150,
        WindowTitleOptions = 151,
        WindowTitleSkills = 152,
    }
    enum Dictionary {
        ItemTypes = 0,
        Doodads = 1,
        ActionTypes = 2,
        Ui = 3,
        Messages = 4,
        Terrains = 5,
        Monsters = 6,
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
        item(key: ItemType, name: string, description?: string, prefix?: string): void;
        itemGroup(key: ItemTypeGroup, name: string, prefix?: string, suffix?: string): void;
        doodad(key: DoodadType, name: string, prefix?: string): void;
        use(key: ActionType, name: string, description: string): any;
        ui(key: UiTranslation, value: string): void;
        message(key: Message, value: string): void;
        terrain(key: TerrainType, name: string, prefix?: string): void;
        monster(key: MonsterType, name: string, prefix?: string): void;
        monsterCorpse(key: MonsterType, name: string, prefix?: string): void;
        skill(key: SkillType, name: string, description: string): any;
        milestone(key: MilestoneType, name: string, description: string): void;
        hint(key: HintType, name: string, description: string): void;
        tileEvent(key: TileEvent.Type, value: string): void;
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
    }
    interface ITileEvent {
        type: Type;
        spread: number;
        decay: number;
        x: number;
        y: number;
        z: number;
    }
    var tileEvents: ITileEventDescription[];
    enum Type {
        None = 0,
        Fire = 1,
    }
    function create(type: Type, x: number, y: number, z: number): ITileEvent;
    function remove(tileEventId: number): void;
    function updateAll(tileEvents2: ITileEvent[]): void;
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
declare class FlowField {
    private static blockedPenalty;
    delegate: DebugRendererDelegate;
    fieldWater: ByteGrid;
    fieldLand: ByteGrid;
    fieldFlying: ByteGrid;
    fieldLandWater: ByteGrid;
    private updateQueue;
    private penaltyFieldWater;
    private penaltyFieldLand;
    private penaltyFieldFlying;
    private tileX;
    private tileY;
    private size;
    constructor(radius: number);
    setDelegate(delegate: DebugRendererDelegate): void;
    getWidth(): number;
    getHeight(): number;
    isInFlowField(worldX: number, worldY: number): boolean;
    getMoveDirection(worldX: number, worldY: number, moveType: MoveType): FacingDirection;
    getOpposingMoveDirection(worldX: number, worldY: number, moveType: MoveType): FacingDirection;
    setCenter(worldX: number, worldY: number): void;
    update(): void;
    private flowFieldFromMoveType(moveType);
    private getMovePenaltyForFlying(tile);
    private getMovePenaltyForLand(tile);
    private getMovePenaltyForWater(tile);
    private updatePenaltyField(field, cost);
    private updateField(field, moveType);
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
    constructor(gl: WebGLRenderingContext, ff: FlowField);
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
        data?: any;
    }
    interface IMessagePack {
        message: Message | null;
        type?: MessageType;
        args?: any[];
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
        isOptionsOverlayShown(): boolean;
        isHelpOverlayShown(): boolean;
        isHelpOverlayEnabled(): boolean;
        isOptionsOverlayEnabled(): boolean;
        showTitleScreen(): void;
        refreshSlots(): void;
        displayConfirmDialog(message: Message, buttons: Message[], callback: (selection: Message) => void): void;
        displayHint(hintType: HintType, force?: boolean): void;
        getCurrentHint(): HintType;
        setCurrentHint(hintType: HintType): void;
        isMouseMovementBlockerVisible(): boolean;
        toggleHelp(): void;
        hideHelpScreen(): void;
        tooltipRefresh(): void;
        refreshWorldTooltips(): void;
        messageIdToText(message: Message): string;
        getMessageHtml(messagePack: IMessagePack, tag?: string, textCase?: TextCase, log?: boolean): string;
        displayMessage(message: Message, messageType?: MessageType, ...args: any[]): void;
        displayMessagePack(messagePack: IMessagePack): void;
        getMessageCount(): number;
        removeOldestMessage(): void;
        updateMilestonesDialog(): void;
        updateSkillsDialog(): void;
        updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
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
declare class MapGen200 implements MapGen.IMapGen {
    generateWorld(generateNewWorld: boolean): void;
    private setupTiles(tileGenArray, templateSpawns, caveSpawns, generateNewWorld);
}
declare class MapGen210 implements MapGen.IMapGen {
    generateWorld(generateNewWorld: boolean): void;
    private setupTiles(tileGenArray, templateSpawns, caveSpawns, generateNewWorld);
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
    function spawnTemplate(templateType: TileTemplateType, templateX: number, templateY: number, templateZ: number): void;
}
declare let globalRequire: ((path: string) => any) | undefined;
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
    function recordEvent(categorySuffix: string, action: string): void;
    function recordProblem(message: string): void;
}
declare module Mods {
    enum Hook {
        CalculateMonsterMoveType = 0,
        CanConsumeItem = 1,
        CanMonsterAttack = 2,
        CanMonsterMove = 3,
        CanSeeMonster = 4,
        GetAmbientColorCave = 5,
        GetAmbientColorDay = 6,
        GetAmbientColorNight = 7,
        GetAmbientLightLevel = 8,
        GetMonsterSpriteBatchLayer = 9,
        GetPlayerSpriteBatchLayer = 10,
        IsPlayerSwimming = 11,
        OnAddOrUpdateInventoryItem = 12,
        OnBuild = 13,
        OnCraft = 14,
        OnCreateWorld = 15,
        OnDisplayMessage = 16,
        OnGameEnd = 17,
        OnGameStart = 18,
        OnItemEquip = 19,
        OnKeyBindPress = 20,
        OnKeyDown = 21,
        OnKeyUp = 22,
        OnMonsterDamage = 23,
        OnMonsterDeath = 24,
        OnMouseDown = 25,
        OnMouseMove = 26,
        OnMouseScroll = 27,
        OnMouseUpOrLeave = 28,
        OnMove = 29,
        OnMoveDirectionUpdate = 30,
        OnNoInputReceived = 31,
        OnPlayerDamage = 32,
        OnShowInGameScreen = 33,
        OnSpawnMonsterFromGroup = 34,
        OnTurnComplete = 35,
        OnTurnStart = 36,
        OnUpdateWeight = 37,
        PostGenerateWorld = 38,
        PostRender = 39,
        PostRenderWorld = 40,
        PostRenderPostProcess = 41,
        PreRender = 42,
        PreRenderWorld = 43,
        PreRenderPostProcess = 44,
        ProcessInput = 45,
        ShouldRender = 46,
    }
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
        addMonster(description: IMonsterDescription): number;
        addTerrain(description: ITerrainDescription, terrainType?: number | null): number;
        addTerrainResource(terrainType: number, terrainResource: ITerrainResourceItem[], defaultItem?: ItemType): void;
        addDoodad(description: Doodad.IDoodadDescription): number;
        addMessage(name: string, message: string): number;
        addKeyBind(name: string, defaultKeyCode: number): number;
        itemNameToObjectType(name: string): ItemType | null;
        getItemByType(itemType: ItemType): Item.IItemDescription;
        getItemByName(name: string): Item.IItemDescription | null;
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
         * Called when the mod is loaded called after a player starts/loads a world.
         * Called before the world is loaded
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
         * Called when the game is calculating the move type of a monster
         * @param monsterId The monster id
         * @param monster The monster object
         * @param moveType The monsters move type
         * @returns The move type the monster should use or undefined to use the default logic
         */
        calculateMonsterMoveType(monsterId: number, monster: IMonster, moveType: MoveType): MoveType | undefined;
        /**
         * Called before consuming an item
         * @param itemType The item type
         * @param actionType The action type
         * @returns True if the player can consume the item, false if the player cannot consume the item, or undefined to use the default logic
         */
        canConsumeItem(itemType: ItemType, actionType: ActionType): boolean | undefined;
        /**
         * Called before a monster attacks
         * @param monsterId The monster id
         * @param monster The monster object
         * @returns False if the monster cannot attack, or undefined to use the default logic
         */
        canMonsterAttack(monsterId: number, monster: IMonster): boolean | undefined;
        /**
         * Called when a monster tries to move
         * @param monsterId The monster id
         * @param monster The monster object
         * @param tile The tile the monster is trying to move to
         * @param moveType The monsters move type
         * @returns True if the monster can move, false if the monster cannot move, or undefined to use the default logic
         */
        canMonsterMove(monsterId: number, monster: IMonster, tile: ITile, moveType: MoveType): boolean | undefined;
        /**
         * Called when calculating monsters in the viewport
         * @param monsterId The monster id
         * @param monster The monster object
         * @param tile The tile the monster is on
         * @returns False if the player should not see the monster or undefined to use the default logic
         */
        canSeeMonster(monsterId: number, monster: IMonster, tile: ITile): boolean | undefined;
        /**
         * Called when rendering monsters in the viewport
         * @param monsterId The monster id
         * @param monster The monster object
         * @param batchLayer The batch layer the monster will render in
         * @returns The batch layer the monster should render in or undefined to use the default logic
         */
        getMonsterSpriteBatchLayer(monsterId: number, monster: IMonster, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
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
        onBuild(item: Item.IItem, tile: ITile, doodad: Doodad.IDoodad): void;
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
         * Called when a monster is damaged
         *
         * @param monsterId The monster id
         * @param monster The monster object
         * @returns undefined to use the default logic or the amount of damage done to the monster, or null if the monster was not damaged
         */
        onMonsterDamage(monsterId: number, monster: IMonster, hitDamage: number, damageType: DamageType, weaponName: string): number | null | undefined;
        /**
         * Called when a monster dies
         * @param monsterId The monster id
         * @param monster The monster object
         */
        onMonsterDeath(monsterId: number, monster: IMonster): void;
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
        onMove(nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean | undefined;
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
         * Called when a monster is spawned from a monster group
         * @param monsterGroup The monster group
         * @param monsterPool The pool of monsters that can be spawned
         * @param x The x position to spawn the monster
         * @param y The y position to spawn the monster
         * @param z The z position to spawn the monster
         * @returns False to cancel spawning the monster or undefined to use the default logic
         */
        onSpawnMonsterFromGroup(monsterGroup: MonsterSpawnGroup, monsterPool: MonsterType[], x: number, y: number, z: number): boolean | undefined;
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
    function initializeMods(callback: () => void): void;
    function unloadAll(reset?: boolean): void;
    function saveAll(): void;
    function initializeMod(folderName: string, modType: Type, callback: (id: number | null) => void, skipOnInitialize?: boolean): void;
    function removeMod(id: number, uninstall?: boolean): void;
    function getMods(): IModInfo[];
    function getLoadedMods(): IModInfo[];
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
    load(): void;
    isLoaded(): boolean;
    updateAll(): void;
    resetExploredMap(): void;
    updateTile(x: number, y: number, z: number, tile: ITile): void;
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
    updateAll(): void;
    updateTile(x: number, y: number, tile: ITile, shouldUpdate?: boolean): void;
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
    private static subTileSize;
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
    private ambientColorNight;
    private ambientColorCave;
    private textureShaderProgram;
    private worldShaderProgram;
    private fogShaderProgram;
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
    private monsterBatch;
    private monstersInViewport;
    static getSubTileSize(): number;
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
    renderWorld(x: number, y: number, z: number): void;
    render(): void;
    screenToTile(screenX: number, screenY: number): Vec2;
    getViewportBounds(): {
        min: Vec2;
        max: Vec2;
    };
    computeSpritesInViewport(): void;
    batchMonsters(): void;
    private batchShadow(fromX, fromY, toX, toY, t, anim);
    private batchPlayer(batchLayer);
    private spriteBatchForLayer(layer);
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
interface IInputMovement {
    keyBind: KeyBind;
    direction: FacingDirection;
    x: number;
    y: number;
}
interface IPoint {
    x: number;
    y: number;
}
interface IPointZ {
    x: number;
    y: number;
    z: number;
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
    messagePack: UI.IMessagePack;
    type?: InspectType;
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
    saveVersion: string;
    isLoadingSave: boolean;
    slotName: string;
    tile: ITileArray;
    tileData: ITileData[][][][];
    tileContainers: ITileContainer[];
    items: Item.IItemArray;
    monsters: IMonster[];
    doodads: Doodad.IDoodad[];
    tileEvents: TileEvent.ITileEvent[];
    corpses: ICorpse[];
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
        effects: number;
        fontStyle: boolean;
        hints: boolean;
        keepSortActive: boolean;
        mouseMovement: boolean;
        music: number;
        mute: boolean;
        skipIntro: boolean;
        visionMode: boolean;
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
    flowField: FlowField;
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
    isMonsterHidden(monster: IMonster): boolean;
    checkForHiddenMob(x: number, y: number, z: number): void;
    getWrappedCoord(x: number): number;
    getTileInFrontOfPlayer(): ITile;
    getTile(x: number, y: number, z?: number): ITile;
    getTileUnsafe(x: number, y: number, z?: number): ITile;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    getOrCreateTile(x: number, y: number, z: number): ITile;
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
    deleteMonsters(id: number): void;
    resetGameState(): void;
    initializeGameState(isTravelling?: boolean): void;
    checkUnderPlayer(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean): void;
    setPlayerZ(z: number): void;
    shouldRender(): number;
    inspect(x: any, y: number, z?: number): IInspect[];
    inspectTile(tile: ITile): IInspect[];
    getMonsterInspectMessage(monster: IMonster): UI.IMessagePack;
    placeCorpse(corpse: ICorpse): void;
    placeTileEvent(tileEvent: TileEvent.ITileEvent): void;
    damageMonster(monsterId: number, hitDamage: number, damageType: DamageType, weaponName: string, skipMilestones: boolean): number | null;
    blockMove(): void;
    makeCaveEntrance(): TerrainType | null;
    findUnique(a: any, b: any): any[];
    updateCraftTableAndWeightNextTurn(): void;
    hasDelay(): boolean;
    addDelay(delay: Delay, replace?: boolean): void;
    createParticles(tileX: number, tileY: number, r: number, g: number, b: number, count?: number): void;
    spawnMonsterFromGroup(monsterGroup: MonsterSpawnGroup, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean): number | null;
    spawnMonster(monsterType: MonsterType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean): number | null;
    makeMiniMap(offsetX: number, offsetY: number, offsetZ: number, skillCheck?: boolean): void;
    getBlackness(): number;
    getAmbientLightLevel(): number;
    getLightSourceAt(worldX: number, worldY: number): number;
    isOnScreen(x: number, y: number, z: number): boolean;
    changeTile(newTile: any, changeX: number, changeY: number, changeZ: number, stackTiles: boolean): void;
    checkMonsterMove(monsterId: number, monster: IMonster, tileX: number, tileY: number, tileZ: number, moveType: MoveType): number;
    isTileFull(x: number, y: number, z?: number): boolean;
    isTileFullEx(tile: ITile): boolean;
    isTileEmpty(x: number, y: number, z?: number): boolean;
    contaminateWater(): void;
    passTurn(turnType?: TurnType): void;
    updateGame(resting?: boolean): void;
    removeCorpse(corpseId: number): void;
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
    spawnClawWorm(): void;
    getName(desc: Doodad.IDoodadDescription | IMonsterDescription | ITerrainDescription | Item.IItemDescription | Item.IGroupDescription, textCase?: TextCase, withPrefix?: boolean): string;
    fireBreath(x: number, y: number, z: number, facingDirection: FacingDirection, itemName?: string): void;
    private processInput();
    private processMessages();
    private prePlay(mapSeed, isLoadingSave);
    private playPostSeed(seed);
    private render(delta);
    private move(direction);
    private showStatsHint();
    private stats();
    private getPotentialRecipesInContainer(container, typesChecked, potentialRecipes);
    private corpsesUpdate();
    private monsterBurn(monster);
    private monsterMove(turnType?);
    private swimCheck();
}
declare namespace Item {
    interface IRecipe {
        baseComponent?: (ItemType | ItemTypeGroup);
        components: IRecipeComponent[];
        skill: SkillType;
        level: RecipeLevel;
        requiredDoodadType?: DoodadType;
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
    interface IRanged {
        range: number;
        attack: number;
    }
    interface IItemArray extends Array<IItem> {
    }
    interface IItem extends IObject, IContainable {
        id: number;
        type: ItemType;
        equipped?: EquipType;
        quickSlot?: number;
        tatteredMap?: IPointZ;
        legendary?: any;
        disassembly?: IItemArray;
        order?: number;
        weight: number;
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
        damageType?: DamageType;
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
        decaySpawn?: MonsterType;
    }
    interface IDismantleDescription {
        items: ItemType[];
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
    interface ITileContainerReference extends IContainerReference {
        x: number;
        y: number;
        z: number;
    }
    interface IDoodadContainerReference extends IContainerReference {
        x: number;
        y: number;
        z: number;
    }
    interface IItemContainerReference extends IContainerReference {
        id: number;
    }
    interface IContainerReference {
        type: ContainerReferenceType;
    }
    function getContainerReference(container: IContainer | null): IContainerReference;
    function derefenceContainerReference(containerRef: IContainerReference): Object | null;
    function acquireNotify(item: IItem): void;
    function changeInto(item: IItem, type: ItemType): void;
    function removeContainerItems(container: IContainer): void;
    function remove(item: IItem): void;
    function getDisassemblyComponents(recipe: IRecipe): IItemArray;
    function getComponentWeight(recipe: IRecipe): number;
    function getWeight(itemType: ItemType): number;
    function getDisassemblyWeight(item: IItem): number;
    function setDisassemblyAndWeight(item: IItem): void;
    function initialize(itemType: ItemType, quality?: ItemQuality): IItem;
    function create(itemType: ItemType, quality?: ItemQuality, container?: IContainer): IItem;
    function getDecayMax(item: IItem): number;
    function isContainer(obj: any): boolean;
    function moveAllFromContainerToInventory(container: IContainer, ofQuality?: ItemQuality | null): void;
    function computeItemWeight(item: IItem): number;
    function computeContainerWeight(container: IContainer): number;
    function moveAllFromContainerToContainer(fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType | null, ofQuality?: ItemQuality | null): void;
    function moveToContainer(item: IItem, container: IContainer): void;
    function hasRoomInContainer(extraWeight: number, container: IContainer): boolean;
    function unequip(item: IItem): void;
    function equip(item: IItem, slot: EquipType, internal?: boolean): void;
    function use(item: IItem, use: ActionType): boolean;
    function breakContainerOnTile(itemContainer: IItem, x: number, y: number, z: number): void;
    function drop(item: IItem, dropAll?: boolean, dropAllQuality?: ItemQuality | null): void;
    function dropInWater(item: IItem, itemType: ItemType): void;
    function spawn(itemTypes: Array<ItemType> | null, x: number, y: number, z: number): void;
    function initializeMap(map: IItem): void;
    function resetMapsInContainer(container: IContainer): void;
    function getTileContainer(x: number, y: number, z: number): IContainer;
    function placeOnTile(item: IItem, x: number, y: number, z: number, bypass?: boolean): boolean;
    function damageEquipment(): void;
    function damage(item: IItem, mod?: number): void;
    function isDamaged(item: IItem): boolean;
    namespace Quality {
        function update(item: IItem, quality?: ItemQuality): void;
        function createRandom(legendable: boolean, bonusQuality?: number): ItemQuality;
    }
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
    function getItemTypeGroupName(itemType: (ItemType | ItemTypeGroup)): string;
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
    function saveTileReferences(tileContainers: ITileContainer[]): void;
    function loadTileReferences(): void;
    function returns(item: IItem): boolean;
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
declare class Player implements IPropSerializable {
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
    monsterSpawner: number;
    monsterSpawnTimer: number;
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
    skillGain(skillType: SkillType, mod: any, bypass: any): void;
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
    drink(): void;
    getSerializationProperties(_: string): string[];
    staminaReduction(skillType: SkillType): void;
    updateMalignity(malignity: number): void;
    getMalignity(): number;
    private statGain(stat, bypass);
    private resetDefense();
}
declare class SpriteAtlas {
    static monsters: Array<SpriteUtil.SpriteInfo>;
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
        Monster = 0,
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
    ComplexObject = 16,
}
declare class Serializer {
    static SerializeAllProperties: string[];
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
    Monster = 2,
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
        message: Message;
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
        elementDialogEquipment: JQuery;
        elementDialogEquipmentContainer: JQuery;
        elementDialogSkills: JQuery;
        elementDialogSkillsContainer: JQuery;
        elementDialogMilestones: JQuery;
        elementDialogMilestonesContainer: JQuery;
        elementDialogMessages: JQuery;
        elementDialogMessagesContainer: JQuery;
        elementDialogMap: JQuery;
        elementContainerDialogs: JQuery[];
        elementOtherDialogs: JQuery[];
        private mouseEvent;
        private touchEvent;
        private hasTouchScreen;
        private mouseX;
        private mouseY;
        private lastMouseTarget;
        private lastText;
        private lastStats;
        private contextMenu;
        private contextMenuTarget;
        private contextMenuOpen;
        private closingContextMenu;
        private contextMenuBlocking;
        private lastContextMenuPosition;
        private actionsMenuOpen;
        private openedContainer;
        private sortableElement;
        private sortableElementPosition;
        private quickSlotSortableEnabled;
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
        enableQuickslotSortable(enable: boolean): void;
        updateQuickslotSortable(event: any, pageX: number, pageY: number): void;
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
        syncDamaged(item: Item.IItem, element: JQuery): void;
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
        onQuickSlotItemRightClick(element: JQuery): void;
        onEquipmentItemRightClick(element: JQuery): void;
        getTooltipHtml(element: JQuery): string | undefined;
        tooltipEnable(): void;
        tooltipRefresh(): void;
        tooltipDisable(): void;
        tooltipHide(): void;
        onTooltipClose(): void;
        getTooltipHtmlForItem(item: Item.IItem, itemType: ItemType, isQuickSlot: boolean): string;
        getTooltipHtmlForTile(tile: ITile): string;
        displayMessagePack(messagePack: IMessagePack): void;
        createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
        getMessageCount(): number;
        removeOldestMessage(): void;
        getUsedQuickSlots(): number[];
        getFreeQuickSlots(): number[];
        getQuickSlotItemElement(quickSlot: number): JQuery;
        getItemIdInQuickSlot(quickSlot: number): number | null;
        setQuickSlot(quickSlot: number, itemId: number | null, internal?: boolean): void;
        setQuickSlotByItemType(quickSlot: number, itemType: ItemType, disabled: boolean): JQuery;
        addItemToFreeQuickSlot(itemId: number): void;
        clearQuickSlot(quickSlot: number, internal?: boolean): void;
        removeItemFromQuickSlot(itemId: number | null): void;
        updateQuickSlotItem(quickSlot: number): void;
        onSortableItemReceive(event: JQueryEventObject, uiObject: JQueryUI.SortableUIParams): void;
        getEquipSlotItemElement(equip: EquipType): JQuery;
        getItemIdInEquipSlot(equip: EquipType): number | null;
        setEquipSlot(equip: EquipType, itemId: number | null, internal?: boolean): void;
        removeItemFromEquipSlot(itemId: number, internal?: boolean): void;
        updateSkillsDialog(): void;
        updateMilestonesDialog(): void;
        updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
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
        updateOpenedContainer(): void;
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
