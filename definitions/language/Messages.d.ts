export declare const messages: Description<string>;
export default messages;
export declare function makeString(msg: Message | string, ...variables: any[]): string;
export declare enum MessageType {
    None = 0,
    Bad = 1,
    Good = 2,
    Miss = 3,
    Attack = 4,
    Stat = 5,
    Skill = 6,
}
export declare enum Message {
    None = 0,
    AberrantCreatureDroppedItem = 1,
    AboutHours = 2,
    AddedFuelToFire = 3,
    AddedFuelToTorch = 4,
    AddFuel = 5,
    AddToQuickslot = 6,
    Advanced = 7,
    All = 8,
    AllEquipmentUnEquipped = 9,
    AlreadyFullyRepaired = 10,
    AlreadyPreserved = 11,
    AlreadyWaterInStill = 12,
    AppearedNotEffectiveForGathering = 13,
    AppearsInjured = 14,
    AppearsToBeAberrant = 15,
    AppearsUninjured = 16,
    ArmorAppeared = 17,
    ArmorProtectedFromInjuryAgainst = 18,
    Attack = 19,
    AttemptedToDropAllIntoFire = 20,
    AttemptedToPlaceAllOnGround = 21,
    AttemptToTill = 22,
    AwakeToFindYourself = 23,
    Back = 24,
    BadlyBurnedLostHealth = 25,
    BeenPoisoned = 26,
    BeginSleeping = 27,
    BeginUsingRaft = 28,
    Belt = 29,
    BleedingHasStopped = 30,
    BleedingProfusely = 31,
    BleedingToDeathLostHealth = 32,
    Blunt = 33,
    BookBlank = 34,
    BookContains = 35,
    BookCrumbles = 36,
    BookDiagrams = 37,
    BookEmpty = 38,
    BookNothing = 39,
    BookOpen = 40,
    BookScribbles = 41,
    BrokeIntoPieces = 42,
    BrokenOnImpact = 43,
    BrokenWhileFiring = 44,
    Build = 45,
    Burned = 46,
    CannotAddAnyMoreFuel = 47,
    CannotBePerformedOverWater = 48,
    CannotBePreserved = 49,
    CannotBeReinforced = 50,
    CannotBeRepaired = 51,
    CannotBeTamed = 52,
    CannotBeTransmogrified = 53,
    CannotBuildHere = 54,
    CannotDoThatHere = 55,
    CannotDropHere = 56,
    CannotEquipThatThere = 57,
    CannotFishFor = 58,
    CannotGatherHere = 59,
    CannotInWater = 60,
    CannotLeave = 61,
    CannotPickupWhenFull = 62,
    CannotPickUpWhileLit = 63,
    CannotPickUpWithItemsInside = 64,
    CannotPlaceContainerInItself = 65,
    CannotPlaceHere = 66,
    CannotPlaceThatFromHere = 67,
    CannotPlaceThatHere = 68,
    CannotPlantHereTilled = 69,
    CannotRepairWhileLit = 70,
    CannotRestHere = 71,
    CannotSeeHere = 72,
    CannotSleepHere = 73,
    CannotStartFireHere = 74,
    CannotToTellTime = 75,
    CarryingTooMuchWeight = 76,
    CarvedUpCorpse = 77,
    CarveWithTool = 78,
    Carving = 79,
    CastYourLine = 80,
    Category = 81,
    CaughtFish = 82,
    ChatBanCommand = 83,
    ChatBannedCommand = 84,
    ChatCommandsCommand = 85,
    ChatPingCommand = 86,
    ChatPlayerMessage = 87,
    ChatPlayersCommand = 88,
    ChatUnbanCommand = 89,
    ChatUnknownCommand = 90,
    Chest = 91,
    ClearMessages = 92,
    Clockwise = 93,
    CloseDoor = 94,
    CollectObjectWithHands = 95,
    Consumed = 96,
    Container = 97,
    Cook = 98,
    Cooked = 99,
    CopySelectedText = 100,
    Corpse = 101,
    CorruptSaveDetected = 102,
    CouldNotDecipher = 103,
    Counterclockwise = 104,
    Craft = 105,
    Crafted = 106,
    Crafts = 107,
    CreatureAlreadyFullHealth = 108,
    CreatureAngered = 109,
    CreatureAppears = 110,
    CreatureAppeased = 111,
    CreatureIdolAttractedCreature = 112,
    CreatureResistanceVulnerableHigh = 113,
    CreatureResistanceVulnerableLow = 114,
    CreatureResistanceVulnerableModerate = 115,
    CreatureUntamed = 116,
    CuredYourPoison = 117,
    Cut = 118,
    DailyChallengeMode = 119,
    Damage = 120,
    DamageAppeared = 121,
    DamagedByPouring = 122,
    DayQuarter1 = 123,
    DayQuarter2 = 124,
    DayQuarter3 = 125,
    DayQuarter4 = 126,
    DealtNoDamageToYou = 127,
    DeathBy = 128,
    DeathByBleeding = 129,
    DeathByBurning = 130,
    DeathByConsumption = 131,
    DeathByDrowning = 132,
    DeathByExhaustion = 133,
    DeathByFistByPlayer = 134,
    DeathByPoison = 135,
    DeathBySteppingOn = 136,
    DeathByTrap = 137,
    DeathByWeaponByPlayer = 138,
    Decay = 139,
    DefaultGameName = 140,
    DefaultPlayerName = 141,
    DestroyedFromUse = 142,
    DestroyedGrowingByPickingItUp = 143,
    DestroyedGrowingGrassByPickingItUp = 144,
    Dexterity = 145,
    DexterityIncreasing = 146,
    DidNotSeemToBeHurting = 147,
    DifficultyEasy = 148,
    DifficultyHard = 149,
    DifficultyInsane = 150,
    DifficultyMedium = 151,
    DifficultySimple = 152,
    DifficultyVeryEasy = 153,
    DifficultyVeryHard = 154,
    Dig = 155,
    DigAway = 156,
    Digging = 157,
    DigWithHands = 158,
    Disabled = 159,
    Disassemble = 160,
    DisassembleAction = 161,
    Disassembling = 162,
    DiscoveredCaveEntrance = 163,
    DiscoveredInTheBottle = 164,
    Dismantle = 165,
    DismantleAction = 166,
    DismantleLabel = 167,
    Dismantling = 168,
    DismantlingRequires = 169,
    DoNotHaveTreasureMaps = 170,
    DoNotProduceAnyResources = 171,
    DoodadAppearsDamaged = 172,
    DoodadAppearsOnVergeOfBreaking = 173,
    DoodadAppearsUnscathed = 174,
    DoodadCauseStatus = 175,
    DoodadShowsSignsOfWear = 176,
    DrewSurroundings = 177,
    Drink = 178,
    Drop = 179,
    DropAll = 180,
    DropAllIntoFire = 181,
    DropAllOfSameQuality = 182,
    DroppedAllIntoDepths = 183,
    DroppedIntoDepths = 184,
    DroppedIntoFire = 185,
    DueToDehydration = 186,
    DueToStarvation = 187,
    DugTreasureOut = 188,
    DumpContentsOfContainerInInventory = 189,
    Durability = 190,
    DyingOfDehydration = 191,
    EarnedMilestone = 192,
    Effective = 193,
    Enabled = 194,
    EquipTo = 195,
    ErrorHasOccured = 196,
    Expert = 197,
    ExtinguishedFire = 198,
    ExtinguishedTorch = 199,
    FailedToAddFuelToTorch = 200,
    FailedToCatchFish = 201,
    FailedToCauseDamage = 202,
    FailedToCauseYouDamage = 203,
    FailedToDrawMap = 204,
    FailedToPickLock = 205,
    FailedToPlant = 206,
    FailedToPreserve = 207,
    FailedToReinforce = 208,
    FailedToRepair = 209,
    FailedToStartFire = 210,
    FailedToTame = 211,
    FailedToTransmogrify = 212,
    FarAwayFromTreasure = 213,
    Feet = 214,
    FeltBurningPainLostHealth = 215,
    FewMinutes = 216,
    Filled = 217,
    FilledFrom = 218,
    Fire = 219,
    FireAlmostExtinguished = 220,
    FireAroundYouIsWarm = 221,
    FiredIntoObstacle = 222,
    FireIsHealthy = 223,
    FireIsRaging = 224,
    FireIsStruggling = 225,
    FireOverflowed = 226,
    FireReducedToEmbers = 227,
    FireSource = 228,
    Food = 229,
    FullyDecodedMap = 230,
    GainedHealth = 231,
    GainedHunger = 232,
    GainedStamina = 233,
    GainedThirst = 234,
    GameHasBeenSavedIsTakingUpMB = 235,
    Gather = 236,
    GatherDestroy = 237,
    Gathering = 238,
    GatherWithHands = 239,
    GhostNoActions = 240,
    GoatHasNoMilk = 241,
    GrabAll = 242,
    Group = 243,
    HackAway = 244,
    HandProtectionPreventedInjury = 245,
    Hands = 246,
    HandsNotEffectiveForDigging = 247,
    Harvest = 248,
    Harvesting = 249,
    HarvestWithHands = 250,
    HasBeenHurtByATrap = 251,
    HasDecayed = 252,
    HasHitYouForDamage = 253,
    HasNoEffect = 254,
    HasSetTrapOffNoDamage = 255,
    HasSplit = 256,
    Head = 257,
    Held = 258,
    Help = 259,
    HelpGrow = 260,
    HighscoreTurns = 261,
    Hints = 262,
    HintsDisabled = 263,
    HintsEnabled = 264,
    HitForDamage = 265,
    HitYouForDamage = 266,
    Hour = 267,
    Hours = 268,
    HurtHandsHittingWithoutWeapons = 269,
    HurtHandsWithNoTool = 270,
    Ineffective = 271,
    InExactLocationOfTreasure = 272,
    InjuredFromTrap = 273,
    InNeedOfRepair = 274,
    Inspect = 275,
    Intermediate = 276,
    Inventory = 277,
    IsAtPercentHealth = 278,
    IsBarelyHurt = 279,
    IsInjured = 280,
    IsSeverelyDamaged = 281,
    IsUninjured = 282,
    ItContains = 283,
    ItsWeightCapacity = 284,
    Jump = 285,
    Killed = 286,
    LabelAdditionalRequirements = 287,
    LabelAttackFromTactics = 288,
    LabelAuthor = 289,
    LabelBase = 290,
    LabelBaseDefense = 291,
    LabelBenignity = 292,
    LabelBluntResist = 293,
    LabelCanIncrease = 294,
    LabelCraftingReputation = 295,
    LabelDecay = 296,
    LabelDefense = 297,
    LabelDefenseFromParrying = 298,
    LabelDifficulty = 299,
    LabelDurability = 300,
    LabelEquip = 301,
    LabelFireResist = 302,
    LabelGrouping = 303,
    LabelHave = 304,
    LabelHp = 305,
    LabelLastUpdated = 306,
    LabelLeftHandAttack = 307,
    LabelLevel = 308,
    LabelLightSourceWhenLit = 309,
    LabelMalignity = 310,
    LabelOnCure = 311,
    LabelOnDrink = 312,
    LabelOnEat = 313,
    LabelOnEquip = 314,
    LabelOnHeal = 315,
    LabelPiercingResist = 316,
    LabelRange = 317,
    LabelRanged = 318,
    LabelRangedAttack = 319,
    LabelRangedDamage = 320,
    LabelReputationImpact = 321,
    LabelRequiredMods = 322,
    LabelRequires = 323,
    LabelResists = 324,
    LabelRightHandAttack = 325,
    LabelScore = 326,
    LabelSkill = 327,
    LabelSlashingResist = 328,
    LabelStokeFireStrength = 329,
    LabelThrowDamageType = 330,
    LabelTicks = 331,
    LabelTrapDamage = 332,
    LabelTurns = 333,
    LabelUse = 334,
    LabelUses = 335,
    LabelVersion = 336,
    LabelVulnerabilities = 337,
    LabelWeight = 338,
    LabelWeightCapacity = 339,
    LabelWeightReduction = 340,
    LastPlaceYouLeftOff = 341,
    LearnedHowToCreate = 342,
    LeftHand = 343,
    LeftHandEquip = 344,
    Legs = 345,
    LikelyFailures = 346,
    LoseBonesLayBleaching = 347,
    LoseEndIsBeginning = 348,
    LoseSadlyNoTrace = 349,
    LostHealth = 350,
    LostHunger = 351,
    LostStamina = 352,
    LostThirst = 353,
    MapNotOfThisArea = 354,
    MaterialsDestroyed = 355,
    Metabolism = 356,
    MetabolismSlowed = 357,
    MilestoneIsHidden = 358,
    MilestoneIsInvisible = 359,
    Milk = 360,
    Milking = 361,
    MissedWith = 362,
    MissedYouWith = 363,
    ModFailedToImportSaveGame = 364,
    ModImportedSaveGame = 365,
    ModImportedSaveGameV2 = 366,
    MoreInformation = 367,
    MouseButton = 368,
    MoveAllOfSameQualityToInventory = 369,
    MoveAllOfSameQualityToLastOpenedContainer = 370,
    MoveAllOfSameQualityToOpenedContainer = 371,
    MoveAllToInventory = 372,
    MoveAllToLastOpenedContainer = 373,
    MoveAllToOpenedContainer = 374,
    MoveOverTrapButDoNotSetOff = 375,
    MoveToInventory = 376,
    MoveToLastOpenedContainer = 377,
    MoveToOpenedContainer = 378,
    MultiplayerGamePaused = 379,
    MultiplayerGameResumed = 380,
    MultiplayerPlayerConnected = 381,
    MultiplayerPlayerDied = 382,
    MultiplayerPlayerDisconnected = 383,
    MultiplayerPlayerJoined = 384,
    MustBeEquippedToIgnite = 385,
    MustCastIntoWater = 386,
    Mysteriously = 387,
    Name = 388,
    NearlyBurnedEquipmentProtectedYou = 389,
    Neck = 390,
    NeedAShovelToDigTreasure = 391,
    NeedFishingNetForTreasure = 392,
    NeedFreeHandToShoot = 393,
    NeedToEquipToShoot = 394,
    NeedToStartTravelsOutside = 395,
    NeedWaterForRaft = 396,
    NightQuarter1 = 397,
    NightQuarter2 = 398,
    NightQuarter3 = 399,
    NightQuarter4 = 400,
    No = 401,
    NoAmmunitionForThatWeapon = 402,
    NoBlackPowderToFireWeapon = 403,
    NoFireToStokeWith = 404,
    NoFishAtLocation = 405,
    NoInkToDrawMap = 406,
    NoKindlingOrFuelItemsToStartFire = 407,
    NoKindlingToStartFire = 408,
    NoLongerFeelPainOfBeingBurned = 409,
    NoMoreRoomInContainer = 410,
    NoNeedToStokeFire = 411,
    NoRoomForImprovement = 412,
    NoRoomToDrop = 413,
    NotAvailable = 414,
    NotEnoughPurifiedWaterYet = 415,
    NotEnoughTreasureToReturn = 416,
    NotFacingCreatureToHeal = 417,
    NotFacingCreatureToOfferThisTo = 418,
    NotFacingLockedObject = 419,
    NotFacingValidItem = 420,
    NothingHereToCarve = 421,
    NothingHereToFill = 422,
    NothingToGetFromThis = 423,
    NothingToHarvestFromThisGather = 424,
    NothingUsefulToHarvestYet = 425,
    NoTinderToStartFire = 426,
    NotInRangeOfTreasure = 427,
    NotSuitableToPlant = 428,
    NoWaterInStill = 429,
    NoWhereNearTreasure = 430,
    NumberEight = 431,
    NumberFive = 432,
    NumberFour = 433,
    NumberNine = 434,
    NumberOne = 435,
    NumberSeven = 436,
    NumberSix = 437,
    NumberTen = 438,
    NumberThree = 439,
    NumberTwo = 440,
    ObjectIsLocked = 441,
    ObjectIsLockedAttemptToBreakIt = 442,
    Offer = 443,
    OfferAberrantFail = 444,
    OpenDoor = 445,
    OpenFolderFailed = 446,
    OverEatingLostStamina = 447,
    OverHydratingLostStamina = 448,
    Pack = 449,
    PaperTurnedToMush = 450,
    PartiallyDecodedMap = 451,
    PastExperiencesProvideBenefits = 452,
    PenultimateAnd = 453,
    PetCreature = 454,
    PickAway = 455,
    PickupAllItems = 456,
    PickupItem = 457,
    Piercing = 458,
    Place = 459,
    PlaceAllOnGround = 460,
    PlacedOnGround = 461,
    Plant = 462,
    PlantedInGround = 463,
    PlantHighlyFertile = 464,
    PlantIsFertile = 465,
    PlantIsNotFertile = 466,
    Poisoned = 467,
    PoisonedLostHealth = 468,
    PoisonWorkedItsCourse = 469,
    PouredOut = 470,
    PouredOutOnYourself = 471,
    PouredWaterIntoStill = 472,
    Preservation = 473,
    Preserve = 474,
    PreservedFood = 475,
    PurifiedWaterInStill = 476,
    Quality = 477,
    Recent = 478,
    RefusedToBeTamed = 479,
    Reinforce = 480,
    Reinforcement = 481,
    Release = 482,
    RemovedBlood = 483,
    RemoveFromQuickslot = 484,
    Repair = 485,
    RequiredForDisassembleLabel = 486,
    RequiredForDisassembly = 487,
    RequiresFireToBeLit = 488,
    RequiresYouFacingFireSource = 489,
    RequiresYouToBeAround = 490,
    Resistant = 491,
    Rest = 492,
    Rested = 493,
    RestingOnGroundNotEffective = 494,
    RestInterrupted = 495,
    RestInterruptedDamage = 496,
    RestInterruptedLoudNoise = 497,
    RestInterruptedPain = 498,
    RestInterruptedStirring = 499,
    RestOnGround = 500,
    ReturnedToCivilization = 501,
    ReturningToCivilizationSetOffAgain = 502,
    ReturnsToLife = 503,
    RightHand = 504,
    RightHandEquip = 505,
    SailedToCivilization = 506,
    Score = 507,
    ScrollProvidedNoUsefulInsight = 508,
    SeaweedFromWater = 509,
    SeemsHurt = 510,
    SeemsQuiteInjured = 511,
    SeemsToHaveDrawnEnergy = 512,
    SeemsUnharmed = 513,
    SetTrapOffButNoDamage = 514,
    SetUp = 515,
    ShadowInTheWater = 516,
    Simple = 517,
    Skill = 518,
    SkillHasRaised = 519,
    Slashing = 520,
    Sleep = 521,
    Slept = 522,
    Soil = 523,
    Some = 524,
    SomethingInTheWayOf = 525,
    SomethingInTheWayOfCarveFirst = 526,
    SomethingInTheWayOfFire = 527,
    SomethingInTheWayOfFishing = 528,
    SomethingInTheWayOfPerforming = 529,
    SomethingInTheWayOfPlacing = 530,
    SomethingInTheWayOfPlanting = 531,
    SomethingInWayOfClosingDoor = 532,
    SoothedYourBurnInjuries = 533,
    Sort = 534,
    SortedByCategory = 535,
    SortedByDecay = 536,
    SortedByDurability = 537,
    SortedByGroup = 538,
    SortedByName = 539,
    SortedByQuality = 540,
    SortedByRecent = 541,
    SortedBySkill = 542,
    SortedByUnlockedTime = 543,
    SortedByWeight = 544,
    StaminaIsFull = 545,
    StartedFire = 546,
    StartTravelInWater = 547,
    StarvingToDeath = 548,
    SteppingOnHasInjuredYouForDamage = 549,
    StillHasNoWaterToPurify = 550,
    StirredUpClawWorm = 551,
    StirredUpCreature = 552,
    StoppedYourBleeding = 553,
    StopUsingRaft = 554,
    Strength = 555,
    StrengthIncreasing = 556,
    SummonedGuardiansByDiggingTreasure = 557,
    SunNotBrightEnoughToStartFire = 558,
    TakenFromGroundBecomeTamed = 559,
    Tame = 560,
    TamedAppearsAngered = 561,
    TamedAppearsContended = 562,
    TamedAppearsHappy = 563,
    TamedAppearsUpset = 564,
    TamedCreature = 565,
    TeleportBlocked = 566,
    Teleported = 567,
    TheirFist = 568,
    ThereIsNoSunToStartFire = 569,
    ThereIsNothingToMilk = 570,
    ThisCannotBeMilked = 571,
    Throw = 572,
    ThrownIntoDepths = 573,
    ThrownIntoObstacle = 574,
    Till = 575,
    Tilling = 576,
    TimeIs = 577,
    TimeIsDawn = 578,
    TimeIsDaytime = 579,
    TimeIsDusk = 580,
    TimeIsNighttime = 581,
    TimeIsSunrise = 582,
    TimeIsSunset = 583,
    TooDamaged = 584,
    TooExhaustedToJump = 585,
    TrampledFire = 586,
    TrampledIntoGround = 587,
    TrampleIntoGround = 588,
    Trampling = 589,
    Transmogrification = 590,
    Transmogrified = 591,
    TrapStoppedYou = 592,
    TravelToFarOffLands = 593,
    TreasureIsBlocked = 594,
    True = 595,
    UnEquip = 596,
    UnEquipAll = 597,
    Unknown = 598,
    UnknownItem = 599,
    UnlockedChest = 600,
    UnlockedTime = 601,
    UnpurifiedWaterInStill = 602,
    URLHasOpenedInWebBrowser = 603,
    UsingBareFistsToFight = 604,
    UsingBareHands = 605,
    Vulnerable = 606,
    WaitUntilFireCooledToGetWater = 607,
    WalkingDistanceOfTreasure = 608,
    Water = 609,
    WaterGathering = 610,
    WaterPutOutFire = 611,
    Weight = 612,
    WeightCapacity = 613,
    WildGoatRefusedToBeMilked = 614,
    WinFindWayBackToCivilization = 615,
    WinSailBackWithRiches = 616,
    WinTravelledBackToCivilization = 617,
    With = 618,
    WorkingYourselfIntoExhaustion = 619,
    WorkingYourselfIntoExhaustionAndDrowning = 620,
    WorkshopHasBeenOpenedPressOkAfter = 621,
    YouAte = 622,
    YouBeginResting = 623,
    YouCannotDoThatYet = 624,
    YouCollected = 625,
    YouCooledLava = 626,
    YouCrafted = 627,
    YouDied = 628,
    YouDisassembled = 629,
    YouDismantled = 630,
    YouDrank = 631,
    YouEquip = 632,
    YouFailedTo = 633,
    YouFailedToHeal = 634,
    YouFailedToHealCreature = 635,
    YouFire = 636,
    YouGathered = 637,
    YouHardenedCooledLava = 638,
    YouHarvested = 639,
    YouHaveDied = 640,
    YouHaveEnabledDisabled = 641,
    YouHaveHealedCreature = 642,
    YouHaveKilled = 643,
    YouHaveReleased = 644,
    YouHaveTamed = 645,
    YouNoticeBecomeEnraged = 646,
    YouNoticeDying = 647,
    YouNoticeFertilityDecreasing = 648,
    YouNoticeFertilityIncreasing = 649,
    YouNoticeGrowing = 650,
    YouNoticeLavaCooling = 651,
    YouNoticeLavaHardening = 652,
    YouNoticePerish = 653,
    YouNoticeStumbleInjureItself = 654,
    YouNoticeTakeFromGround = 655,
    YouNoticeWoundsClosing = 656,
    YouNoticeZombieHorde = 657,
    YouOfferedToCreature = 658,
    YouOpen = 659,
    YouPacked = 660,
    YouPickedUp = 661,
    YouRepair = 662,
    YourFist = 663,
    YourHands = 664,
    YourRubbingNoEffect = 665,
    YouRub = 666,
    YouSalvaged = 667,
    YouSee = 668,
    YouSeeAnAberrant = 669,
    YouSeeDrop = 670,
    YouSeeEngulfFire = 671,
    YouSeeLay = 672,
    YouSeeLayingTrap = 673,
    YouSeeSpewLava = 674,
    YouSeeSpitAcid = 675,
    YouSeeSpringForth = 676,
    YouSeeSummon = 677,
    YouSeeSwampFlood = 678,
    YouSeparate = 679,
    YouSetTheTrapOff = 680,
    YouThrew = 681,
    YouTilled = 682,
    YouUnequip = 683,
    YouUsed = 684,
}
