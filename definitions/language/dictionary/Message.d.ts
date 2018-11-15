/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
declare enum Message {
    None = 0,
    Aberrant = 1,
    AboutHours = 2,
    AddedFuelToFire = 3,
    AddedFuelToTorch = 4,
    AddFuel = 5,
    AddToQuickslot = 6,
    Advanced = 7,
    All = 8,
    AllEquipmentUnEquipped = 9,
    AlreadyDesalinatedWaterInStill = 10,
    AlreadyFullyRepaired = 11,
    AlreadyPreserved = 12,
    AlreadyWaterInStill = 13,
    AnUnknownItem = 14,
    AppearedNotEffectiveForGathering = 15,
    AppearsToBeAberrant = 16,
    ArmorAppeared = 17,
    ArmorProtectedFromInjuryAgainst = 18,
    Attack = 19,
    AttemptedToDropAllIntoFire = 20,
    AttemptedToPlaceAllOnGround = 21,
    AttemptToTill = 22,
    Back = 23,
    BadlyBurnedLostHealth = 24,
    BarteringSkillsProvided = 25,
    BasedOnItSeems = 26,
    BeenPoisoned = 27,
    BeginSleeping = 28,
    BeginUsingRaft = 29,
    Belt = 30,
    Best = 31,
    BleedingHasStopped = 32,
    BleedingProfusely = 33,
    BleedingToDeathLostHealth = 34,
    Blunt = 35,
    BookBlank = 36,
    BookContains = 37,
    BookCrumbles = 38,
    BookDiagrams = 39,
    BookEmpty = 40,
    BookNothing = 41,
    BookOpen = 42,
    BookScribbles = 43,
    BothEffectiveIneffective = 44,
    BothHands = 45,
    BrokeIntoPieces = 46,
    BrokenOnImpact = 47,
    BrokenWhileFiring = 48,
    Build = 49,
    Burned = 50,
    CannotAddAnyMoreFuel = 51,
    CannotBePerformedOverWater = 52,
    CannotBePreserved = 53,
    CannotBeReinforced = 54,
    CannotBeRepaired = 55,
    CannotBeTamed = 56,
    CannotBuildHere = 57,
    CannotDoThatHere = 58,
    CannotDropHere = 59,
    CannotEquipThatThere = 60,
    CannotFishFor = 61,
    CannotHere = 62,
    CannotInWater = 63,
    CannotLeave = 64,
    CannotPickupWhenFull = 65,
    CannotPickUpWhileLit = 66,
    CannotPickUpWithItemsInside = 67,
    CannotPlaceContainerInItself = 68,
    CannotPlaceHere = 69,
    CannotPlaceThatFromHere = 70,
    CannotPlaceThatHere = 71,
    CannotPlantHereTilled = 72,
    CannotRepairWhileLit = 73,
    CannotRestHere = 74,
    CannotSeeHere = 75,
    CannotSleepHere = 76,
    CannotStartFireHere = 77,
    CannotToTellTime = 78,
    CarryingTooMuchWeight = 79,
    CartographyDirection = 80,
    CartographyDirectionUnsure = 81,
    CarvedUpCorpse = 82,
    CarveWithTool = 83,
    Carving = 84,
    CastYourLine = 85,
    Category = 86,
    CaughtFish = 87,
    ChatBanCommand = 88,
    ChatBannedCommand = 89,
    ChatCommandsCommand = 90,
    ChatPingCommand = 91,
    ChatPlayerMessage = 92,
    ChatPlayersCommand = 93,
    ChatServerMessage = 94,
    ChatUnbanCommand = 95,
    ChatUnknownCommand = 96,
    Chest = 97,
    ClearMessages = 98,
    Clockwise = 99,
    CloseContainer = 100,
    CloseDoor = 101,
    CloseToBeingDestroyed = 102,
    CollectObjectWithHands = 103,
    Consumed = 104,
    Container = 105,
    Cook = 106,
    Cooked = 107,
    CopySelectedText = 108,
    CorpseOf = 109,
    CorpseOfNamed = 110,
    CouldNotDecipher = 111,
    Counterclockwise = 112,
    Craft = 113,
    Crafted = 114,
    Crafts = 115,
    CreatureAngered = 116,
    CreatureAppears = 117,
    CreatureAppeased = 118,
    CreatureIdolAttractedCreature = 119,
    CreatureUntamed = 120,
    CuredYourPoison = 121,
    Cut = 122,
    DamageAppeared = 123,
    DamagedByPouring = 124,
    DayQuarter1 = 125,
    DayQuarter2 = 126,
    DayQuarter3 = 127,
    DayQuarter4 = 128,
    DealtNoDamageToYou = 129,
    DeathBy = 130,
    DeathByBleeding = 131,
    DeathByBurning = 132,
    DeathByConsumption = 133,
    DeathByDrowning = 134,
    DeathByExhaustion = 135,
    DeathByFistByPlayer = 136,
    DeathByPoison = 137,
    DeathBySteppingOn = 138,
    DeathByTrap = 139,
    DeathByWeaponByPlayer = 140,
    Decay = 141,
    DestroyedFromUse = 142,
    Dexterity = 143,
    DexterityIncreasing = 144,
    DidNotSeemToBeHurting = 145,
    Dig = 146,
    DigAway = 147,
    Digging = 148,
    DigWithHands = 149,
    Disabled = 150,
    Disassemble = 151,
    DisassembleAction = 152,
    Disassembling = 153,
    DiscoveredCaveEntrance = 154,
    DiscoveredInTheBottle = 155,
    DiscoveredLavaPassage = 156,
    Dismantle = 157,
    DismantleAction = 158,
    DismantleLabel = 159,
    Dismantling = 160,
    DismantlingRequires = 161,
    DoNotHaveTreasureMaps = 162,
    DoNotProduceAnyResources = 163,
    DoodadAppearsDamaged = 164,
    DoodadAppearsOnVergeOfBreaking = 165,
    DoodadAppearsUnscathed = 166,
    DoodadCauseStatus = 167,
    DoodadShowsSignsOfWear = 168,
    DrewSurroundings = 169,
    Drink = 170,
    Drop = 171,
    DropAll = 172,
    DropAllIntoFire = 173,
    DropAllOfSameQuality = 174,
    DroppedAllIntoDepths = 175,
    DroppedIntoDepths = 176,
    DroppedIntoFire = 177,
    DueToDehydration = 178,
    DueToStarvation = 179,
    DugTreasureOut = 180,
    DumpContentsOfContainerInInventory = 181,
    Durability = 182,
    DyingOfDehydration = 183,
    EarnedMilestone = 184,
    East = 185,
    EastNortheast = 186,
    EastSoutheast = 187,
    Effective = 188,
    Enabled = 189,
    EquipmentPreventedStatusEffects = 190,
    EquipTo = 191,
    ErrorHasOccured = 192,
    Expert = 193,
    ExtinguishedFire = 194,
    ExtinguishedTorch = 195,
    FailedToAddFuelToTorch = 196,
    FailedToCatchFish = 197,
    FailedToCauseDamage = 198,
    FailedToCauseYouDamage = 199,
    FailedToDrawMap = 200,
    FailedToIgniteTorch = 201,
    FailedToPickLock = 202,
    FailedToPlant = 203,
    FailedToPreserve = 204,
    FailedToReinforce = 205,
    FailedToRepair = 206,
    FailedToStartFire = 207,
    FailedToTame = 208,
    FailedToTransmogrify = 209,
    FarAwayFromTreasure = 210,
    Feet = 211,
    FeltBurningPainLostHealth = 212,
    FewMinutes = 213,
    Filled = 214,
    FilledFrom = 215,
    Fire = 216,
    FireAlmostExtinguished = 217,
    FireAroundYouIsWarm = 218,
    FiredIntoObstacle = 219,
    FireIsHealthy = 220,
    FireIsRaging = 221,
    FireIsStruggling = 222,
    FireOverflowed = 223,
    FireReducedToEmbers = 224,
    FireSource = 225,
    FishingWithNoBait = 226,
    FullyDecodedMap = 227,
    GainedHealth = 228,
    GainedHunger = 229,
    GainedStamina = 230,
    GainedThirst = 231,
    GameHasBeenSavedIsTakingUpMB = 232,
    Gather = 233,
    GatherDestroy = 234,
    Gathering = 235,
    GatherWithHands = 236,
    GhostNoActions = 237,
    GhostOf = 238,
    GoatHasNoMilk = 239,
    GrabAll = 240,
    Group = 241,
    HackAway = 242,
    HandProtectionPreventedInjury = 243,
    Hands = 244,
    HandsNotEffectiveForDigging = 245,
    Harvest = 246,
    Harvesting = 247,
    HarvestWithHands = 248,
    HasBeenHurtByATrap = 249,
    HasDecayed = 250,
    HasHitYouForDamage = 251,
    HasNoEffect = 252,
    HasSetTrapOffNoDamage = 253,
    HasSplit = 254,
    Head = 255,
    Held = 256,
    Help = 257,
    HelpGrow = 258,
    Here = 259,
    Hints = 260,
    HintsDisabled = 261,
    HintsEnabled = 262,
    Hitch = 263,
    HitchAttempt = 264,
    HitchCreature = 265,
    HitchDisabled = 266,
    HitchInUse = 267,
    HitForDamage = 268,
    HitYouForDamage = 269,
    Hour = 270,
    Hours = 271,
    HurtHandsHittingWithoutWeapons = 272,
    HurtHandsWithNoTool = 273,
    Ignite = 274,
    IgnitedTorch = 275,
    Ineffective = 276,
    InjuredFromTrap = 277,
    InNeedOfRepair = 278,
    Intermediate = 279,
    Inventory = 280,
    InVicinityOfTreasure = 281,
    IsInTheWayOfPickingUp = 282,
    It = 283,
    ItAlsoReveals = 284,
    ItAlsoSeems = 285,
    ItContains = 286,
    ItsWeightCapacity = 287,
    JoinedAServer = 288,
    Jump = 289,
    Killed = 290,
    KnowledgeHasIncreased = 291,
    LabelAdditionalRequirements = 292,
    LabelAttackFromTactics = 293,
    LabelBase = 294,
    LabelCanIncrease = 295,
    LabelCraftingReputation = 296,
    LabelCraftingSkillReputation = 297,
    LabelDecay = 298,
    LabelDefense = 299,
    LabelDurability = 300,
    LabelEquip = 301,
    LabelGrouping = 302,
    LabelHave = 303,
    LabelLeftHandAttack = 304,
    LabelLevel = 305,
    LabelLightSourceWhenLit = 306,
    LabelOnCure = 307,
    LabelOnDrink = 308,
    LabelOnEat = 309,
    LabelOnEquip = 310,
    LabelOnHeal = 311,
    LabelOnOtherHeal = 312,
    LabelProtected = 313,
    LabelRange = 314,
    LabelRanged = 315,
    LabelRangedAttack = 316,
    LabelRangedDamage = 317,
    LabelReputationImpact = 318,
    LabelRequires = 319,
    LabelResists = 320,
    LabelRightHandAttack = 321,
    LabelSkill = 322,
    LabelStokeFireStrength = 323,
    LabelThrowDamageType = 324,
    LabelTrapDamage = 325,
    LabelUse = 326,
    LabelUses = 327,
    LabelVulnerabilities = 328,
    LabelWeight = 329,
    LabelWeightCapacity = 330,
    LabelWeightReduction = 331,
    LabelWorth = 332,
    LastPlaceYouLeftOff = 333,
    LearnedHowToCreate = 334,
    LeftHand = 335,
    LeftHandEquip = 336,
    Legs = 337,
    LikelyFailures = 338,
    LostHealth = 339,
    LostHunger = 340,
    LostStamina = 341,
    LostThirst = 342,
    MapNotOfThisArea = 343,
    MaterialsDestroyed = 344,
    Metabolism = 345,
    MetabolismSlowed = 346,
    Milk = 347,
    Milking = 348,
    MissedWith = 349,
    MissedYouWith = 350,
    MoreInformation = 351,
    MoveAllOfSameQualityToFacingContainer = 352,
    MoveAllOfSameQualityToInventory = 353,
    MoveAllOfSameQualityToLastOpenedContainer = 354,
    MoveAllOfSameQualityToOpenedContainer = 355,
    MoveAllToFacingContainer = 356,
    MoveAllToInventory = 357,
    MoveAllToLastOpenedContainer = 358,
    MoveAllToOpenedContainer = 359,
    MovedItem = 360,
    MovedItems = 361,
    MoveOverTrapButDoNotSetOff = 362,
    MoveToFacingContainer = 363,
    MoveToInventory = 364,
    MoveToLastOpenedContainer = 365,
    MoveToOpenedContainer = 366,
    MultiplayerGamePaused = 367,
    MultiplayerGameResumed = 368,
    MultiplayerPlayerConnected = 369,
    MultiplayerPlayerDied = 370,
    MultiplayerPlayerDisconnected = 371,
    MultiplayerPlayerJoined = 372,
    MustBeEquippedToIgnite = 373,
    MustCastIntoWater = 374,
    Mysteriously = 375,
    Name = 376,
    NearlyBurnedEquipmentProtectedYou = 377,
    Neck = 378,
    NeedAShovelToDigTreasure = 379,
    NeedFishingNetForTreasure = 380,
    NeedFreeHandToShoot = 381,
    NeedToEquipToShoot = 382,
    NeedToStartTravelsOutside = 383,
    NeedWaterForRaft = 384,
    Negatively = 385,
    NightQuarter1 = 386,
    NightQuarter2 = 387,
    NightQuarter3 = 388,
    NightQuarter4 = 389,
    NoAmmunitionForThatWeapon = 390,
    NoBlackPowderToFireWeapon = 391,
    NoFireToStokeWith = 392,
    NoFishAtLocation = 393,
    NoGroundWater = 394,
    NoInkToDrawMap = 395,
    NoKindlingOrFuelItemsToStartFire = 396,
    NoKindlingToStartFire = 397,
    NoLongerFeelPainOfBeingBurned = 398,
    NoLongerHostile = 399,
    NoMoreRoomInContainer = 400,
    NoNeedToStokeFire = 401,
    NoRoomForImprovement = 402,
    NoRoomToDrop = 403,
    North = 404,
    Northeast = 405,
    NorthNortheast = 406,
    NorthNorthwest = 407,
    Northwest = 408,
    NotAvailable = 409,
    NotEnoughPurifiedWaterYet = 410,
    NotEnoughTreasureToReturn = 411,
    NotFacingCreatureToOfferThisTo = 412,
    NotFacingLockedObject = 413,
    NotFacingOtherToHeal = 414,
    NotFacingValidItem = 415,
    NothingHereToCarve = 416,
    NothingHereToFill = 417,
    NothingHereToGrasp = 418,
    NothingToGetFromThis = 419,
    NothingToHarvestFromThisGather = 420,
    NothingToSmother = 421,
    NothingUsefulToHarvestYet = 422,
    NoTinderToStartFire = 423,
    NotInRangeOfTreasure = 424,
    NotSuitableToPlant = 425,
    NoWaterInStill = 426,
    NoWhereNearTreasure = 427,
    NPCStartingDialog1 = 428,
    NPCStartingDialog2 = 429,
    NPCStartingDialog3 = 430,
    NPCStartingDialog4 = 431,
    NPCWelcome = 432,
    NPCWelcomeCredit = 433,
    NumberEight = 434,
    NumberFive = 435,
    NumberFour = 436,
    NumberNine = 437,
    NumberOne = 438,
    NumberSeven = 439,
    NumberSix = 440,
    NumberTen = 441,
    NumberThree = 442,
    NumberTwo = 443,
    ObjectIsLocked = 444,
    ObjectIsLockedAttemptToBreakIt = 445,
    Offer = 446,
    OfferAberrantFail = 447,
    OfferAberrantFailButTamed = 448,
    OpenDoor = 449,
    OverEatingLostStamina = 450,
    OverHydratingLostStamina = 451,
    Pack = 452,
    PaperTurnedToMush = 453,
    PartiallyDecodedMap = 454,
    PastExperiencesProvideBenefits = 455,
    PenultimateAnd = 456,
    PetCreature = 457,
    PickAway = 458,
    PickupAllItems = 459,
    PickupItem = 460,
    Piercing = 461,
    Place = 462,
    PlaceAllOnGround = 463,
    PlacedOnGround = 464,
    Plant = 465,
    PlantedInGround = 466,
    PlantGatheringWillDestroy = 467,
    PlantHasResourcesToGather = 468,
    PlantHasResourcesToHarvest = 469,
    PlantHighlyFertile = 470,
    Planting = 471,
    PlantIsDead = 472,
    PlantIsFertile = 473,
    PlantIsInStage = 474,
    PlantIsNotFertile = 475,
    PlantNotReadyToHarvest = 476,
    PlantReadyToHarvest = 477,
    PlantReadyToHarvestNotMaximal = 478,
    Player = 479,
    Poisoned = 480,
    PoisonedLostHealth = 481,
    PoisonWorkedItsCourse = 482,
    Positively = 483,
    PouredOut = 484,
    PouredOutOnYourself = 485,
    PouredWaterIntoStill = 486,
    Preservation = 487,
    Preserve = 488,
    PreservedFood = 489,
    PurifiedWaterInStill = 490,
    Quality = 491,
    Recent = 492,
    ReduceLength = 493,
    RefusedToBeTamed = 494,
    Reinforce = 495,
    Reinforcement = 496,
    Release = 497,
    RemovedBlood = 498,
    RemoveFromQuickslot = 499,
    Repair = 500,
    RequiredForDisassembleLabel = 501,
    RequiredForDisassembly = 502,
    RequiresFireToBeLit = 503,
    RequiresYouFacingFireSource = 504,
    RequiresYouToBeAround = 505,
    Resistant = 506,
    ResistOrVuln = 507,
    ResistOrVulnAll = 508,
    Rest = 509,
    Rested = 510,
    Resting = 511,
    RestingOnGroundNotEffective = 512,
    RestInterrupted = 513,
    RestInterruptedDamage = 514,
    RestInterruptedLoudNoise = 515,
    RestInterruptedPain = 516,
    RestInterruptedStirring = 517,
    RestLongTime = 518,
    RestModerateTime = 519,
    RestOnGround = 520,
    RestShortTime = 521,
    RestTime = 522,
    ReturnedToCivilization = 523,
    ReturningToCivilizationSetOffAgain = 524,
    ReturnsToLife = 525,
    Reveals = 526,
    RevealsEntityAppearsHurt = 527,
    RevealsEntityAppearsUnharmed = 528,
    RevealsEntityAppearsVeryHurt = 529,
    RevealsEntityIsAtPercentHealth = 530,
    RevealsEntityIsInjured = 531,
    RevealsEntityIsMostlyUninjured = 532,
    RevealsEntityIsOnTheVergeOfDeath = 533,
    RevealsEntityIsSeverelyInjured = 534,
    RevealsEntitySeemsInjured = 535,
    RevealsEntitySeemsUninjured = 536,
    RevealsNumberOfResistancesAndVulnerabilities = 537,
    RevealsResistancesAndVulnerabilities = 538,
    RevealsSomeResistancesAndVulnerabilities = 539,
    RightHand = 540,
    RightHandEquip = 541,
    ScrollProvidedNoUsefulInsight = 542,
    SeaweedFromWater = 543,
    SeemsToHaveDrawnEnergy = 544,
    SetTrapOffButNoDamage = 545,
    SetUp = 546,
    ShadowInTheWater = 547,
    Simple = 548,
    Skill = 549,
    SkillHasRaised = 550,
    Skills = 551,
    Slashing = 552,
    Sleep = 553,
    Sleeping = 554,
    Slept = 555,
    SlitherSuckerConstricts = 556,
    SlitherSuckerJumpedOnHead = 557,
    Some = 558,
    SomethingInTheWayOf = 559,
    SomethingInTheWayOfCarveFirst = 560,
    SomethingInTheWayOfFire = 561,
    SomethingInTheWayOfFishing = 562,
    SomethingInTheWayOfPerforming = 563,
    SomethingInTheWayOfPlacing = 564,
    SomethingInTheWayOfPlanting = 565,
    SomethingInWayOfClosingDoor = 566,
    SoothedTheirBurnInjuries = 567,
    SoothedYourBurnInjuries = 568,
    Sort = 569,
    SortedByBest = 570,
    SortedByCategory = 571,
    SortedByDecay = 572,
    SortedByDurability = 573,
    SortedByGroup = 574,
    SortedByName = 575,
    SortedByQuality = 576,
    SortedByRecent = 577,
    SortedBySkill = 578,
    SortedByUnlockedTime = 579,
    SortedByWeight = 580,
    South = 581,
    Southeast = 582,
    SouthSoutheast = 583,
    SouthSouthwest = 584,
    Southwest = 585,
    StaminaIsFull = 586,
    StartedFire = 587,
    StartTravelInWater = 588,
    StarvingToDeath = 589,
    SteppingOnHasInjuredYouForDamage = 590,
    StillHasNoWaterToPurify = 591,
    StirredUpClawWorm = 592,
    StirredUpCreature = 593,
    StoppedYourBleeding = 594,
    StopUsingRaft = 595,
    Strength = 596,
    StrengthIncreasing = 597,
    SummonedGuardiansByDiggingTreasure = 598,
    SunNotBrightEnoughToStartFire = 599,
    TakenFromGroundBecomeTamed = 600,
    Tame = 601,
    TamedAppearsAngered = 602,
    TamedAppearsContended = 603,
    TamedAppearsHappy = 604,
    TamedAppearsUpset = 605,
    TamedCreature = 606,
    TeleportBlocked = 607,
    Teleported = 608,
    ThanksBuying = 609,
    ThanksSelling = 610,
    The = 611,
    TheCreature = 612,
    TheirFist = 613,
    ThePlant = 614,
    ThereIsNoSunToStartFire = 615,
    ThereIsNothingToMilk = 616,
    ThisCannotBeMilked = 617,
    Throw = 618,
    ThrownIntoDepths = 619,
    ThrownIntoObstacle = 620,
    Till = 621,
    Tilling = 622,
    TimeIs = 623,
    TimeIsDawn = 624,
    TimeIsDaytime = 625,
    TimeIsDusk = 626,
    TimeIsNighttime = 627,
    TimeIsSunrise = 628,
    TimeIsSunset = 629,
    ToDamageAChest = 630,
    ToFight = 631,
    TooDamaged = 632,
    TooExhaustedToJump = 633,
    TradeBarterCreditForItem = 634,
    TradeItemForBarterCredit = 635,
    TradingWith = 636,
    TrampledFire = 637,
    TrampledIntoGround = 638,
    TrampleIntoGround = 639,
    Trampling = 640,
    Transmogrification = 641,
    Transmogrified = 642,
    TrapStoppedYou = 643,
    TravelToFarOffLands = 644,
    TreasureIsBlocked = 645,
    True = 646,
    UnEquip = 647,
    UnEquipAll = 648,
    Unhitch = 649,
    UnhitchCreature = 650,
    Unknown = 651,
    UnknownItem = 652,
    UnlockedChest = 653,
    UnlockedTime = 654,
    UnpurifiedWaterInStill = 655,
    UsingBareHands = 656,
    Vulnerable = 657,
    WaitUntilFireCooledToGetWater = 658,
    WalkingDistanceOfTreasure = 659,
    Water = 660,
    WaterGathering = 661,
    WaterPutOutFire = 662,
    Weight = 663,
    WeightCapacity = 664,
    WellIsDry = 665,
    WellIsFull = 666,
    West = 667,
    WestNorthwest = 668,
    WestSouthwest = 669,
    WildGoatRefusedToBeMilked = 670,
    WillNotTrade = 671,
    With = 672,
    WithYouSee = 673,
    WorkingYourselfIntoExhaustion = 674,
    WorkingYourselfIntoExhaustionAndDrowning = 675,
    YouApplied = 676,
    YouAte = 677,
    YouBeginResting = 678,
    YouCannotDoThatYet = 679,
    YouCooledLava = 680,
    YouCrafted = 681,
    YouDied = 682,
    YouDisassembled = 683,
    YouDismantled = 684,
    YouDrank = 685,
    YouDropTheTorch = 686,
    YouEquip = 687,
    YouFailedTo = 688,
    YouFailedToExtinguishedFireFully = 689,
    YouFailedToHeal = 690,
    YouFailedToHealOther = 691,
    YouFire = 692,
    YouGathered = 693,
    YouGatheredAndDropped = 694,
    YouHardenedCooledLava = 695,
    YouHarvested = 696,
    YouHarvestedAndDropped = 697,
    YouHaveDied = 698,
    YouHaveEnabledDisabled = 699,
    YouHaveHealedOther = 700,
    YouHaveKilled = 701,
    YouHaveReleased = 702,
    YouHaveTamed = 703,
    YouNeedMoreCredit = 704,
    YouNoticeBecomeEnraged = 705,
    YouNoticeDying = 706,
    YouNoticeFertilityDecreasing = 707,
    YouNoticeFertilityIncreasing = 708,
    YouNoticeGrowing = 709,
    YouNoticeLavaCooling = 710,
    YouNoticeLavaHardening = 711,
    YouNoticePerish = 712,
    YouNoticeStumbleInjureItself = 713,
    YouNoticeTakeFromGround = 714,
    YouNoticeWoundsClosing = 715,
    YouNoticeZombieHorde = 716,
    YouOfferedToCreature = 717,
    YouOpen = 718,
    YouPacked = 719,
    YouPickedUp = 720,
    YouRepair = 721,
    YourFist = 722,
    YourHands = 723,
    YourHighSkill = 724,
    YourInventory = 725,
    YourLowSkill = 726,
    YourModerateSkill = 727,
    YourRubbingNoEffect = 728,
    YouRub = 729,
    YouSalvaged = 730,
    YouSee = 731,
    YouSeeAnAberrant = 732,
    YouSeeDrop = 733,
    YouSeeEngulfFire = 734,
    YouSeeHelpingPlant = 735,
    YouSeeLay = 736,
    YouSeeLayingTrap = 737,
    YouSeeSpewLava = 738,
    YouSeeSpitAcid = 739,
    YouSeeSpringForth = 740,
    YouSeeSummon = 741,
    YouSeeSwampFlood = 742,
    YouSeeTrampling = 743,
    YouSeparate = 744,
    YouSetTheTrapOff = 745,
    YouThrew = 746,
    YouTilled = 747,
    YouUnequip = 748,
    YouUsed = 749
}
export default Message;
