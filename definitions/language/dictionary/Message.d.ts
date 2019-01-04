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
    CartographyDistanceHighSkillExactDistance = 82,
    CartographyDistanceHighSkillFarAway = 83,
    CartographyDistanceHighSkillInRegion = 84,
    CartographyDistanceHighSkillNearby = 85,
    CartographyDistanceLowSkillNearby = 86,
    CartographyDistanceLowSkillUnsure = 87,
    CartographyDistanceMedSkillFarAway = 88,
    CartographyDistanceMedSkillNearby = 89,
    CartographyDistanceMedSkillVeryClose = 90,
    CarvedUpCorpse = 91,
    CarveWithTool = 92,
    Carving = 93,
    CastYourLine = 94,
    Category = 95,
    CaughtFish = 96,
    ChatBanCommand = 97,
    ChatBannedCommand = 98,
    ChatCommandsCommand = 99,
    ChatPingCommand = 100,
    ChatPlayerMessage = 101,
    ChatPlayersCommand = 102,
    ChatServerMessage = 103,
    ChatUnbanCommand = 104,
    ChatUnknownCommand = 105,
    Chest = 106,
    ClearMessages = 107,
    Clockwise = 108,
    CloseContainer = 109,
    CloseDoor = 110,
    CloseToBeingDestroyed = 111,
    CollectObjectWithHands = 112,
    Consumed = 113,
    Container = 114,
    Cook = 115,
    Cooked = 116,
    CopySelectedText = 117,
    CorpseOf = 118,
    CorpseOfNamed = 119,
    CouldNotDecipher = 120,
    Counterclockwise = 121,
    Craft = 122,
    Crafted = 123,
    Crafts = 124,
    CreatureAngered = 125,
    CreatureAppears = 126,
    CreatureAppeased = 127,
    CreatureIdolAttractedCreature = 128,
    CreatureUntamed = 129,
    CuredYourPoison = 130,
    Cut = 131,
    DamageAppeared = 132,
    DamagedByPouring = 133,
    DayQuarter1 = 134,
    DayQuarter2 = 135,
    DayQuarter3 = 136,
    DayQuarter4 = 137,
    DealtNoDamageToYou = 138,
    DeathBy = 139,
    DeathByBleeding = 140,
    DeathByBurning = 141,
    DeathByChallengeWinner = 142,
    DeathByConsumption = 143,
    DeathByDrowning = 144,
    DeathByExhaustion = 145,
    DeathByFistByPlayer = 146,
    DeathByPoison = 147,
    DeathBySteppingOn = 148,
    DeathByTrap = 149,
    DeathByWeaponByPlayer = 150,
    Decay = 151,
    DestroyedFromUse = 152,
    Dexterity = 153,
    DexterityIncreasing = 154,
    DidNotSeemToBeHurting = 155,
    Dig = 156,
    DigAway = 157,
    Digging = 158,
    DigWithHands = 159,
    Disabled = 160,
    Disassemble = 161,
    DisassembleAction = 162,
    Disassembling = 163,
    DiscoveredCaveEntrance = 164,
    DiscoveredInTheBottle = 165,
    DiscoveredLavaPassage = 166,
    Dismantle = 167,
    DismantleAction = 168,
    DismantleLabel = 169,
    Dismantling = 170,
    DismantlingRequires = 171,
    DoNotHaveTreasureMaps = 172,
    DoNotProduceAnyResources = 173,
    DoodadAppearsDamaged = 174,
    DoodadAppearsOnVergeOfBreaking = 175,
    DoodadAppearsUnscathed = 176,
    DoodadCauseStatus = 177,
    DoodadShowsSignsOfWear = 178,
    DrewSurroundings = 179,
    Drink = 180,
    Drop = 181,
    DropAll = 182,
    DropAllIntoFire = 183,
    DropAllOfSameQuality = 184,
    DroppedAllIntoDepths = 185,
    DroppedIntoDepths = 186,
    DroppedIntoFire = 187,
    DueToDehydration = 188,
    DueToStarvation = 189,
    DugTreasureOut = 190,
    DumpContentsOfContainerInInventory = 191,
    Durability = 192,
    DyingOfDehydration = 193,
    EarnedMilestone = 194,
    East = 195,
    EastNortheast = 196,
    EastSoutheast = 197,
    Effective = 198,
    Enabled = 199,
    EquipmentPreventedStatusEffects = 200,
    EquipTo = 201,
    ErrorHasOccured = 202,
    Expert = 203,
    ExtinguishedFire = 204,
    ExtinguishedTorch = 205,
    FailedToAddFuelToTorch = 206,
    FailedToCatchFish = 207,
    FailedToCauseDamage = 208,
    FailedToCauseYouDamage = 209,
    FailedToDrawMap = 210,
    FailedToIgniteTorch = 211,
    FailedToPickLock = 212,
    FailedToPlant = 213,
    FailedToPreserve = 214,
    FailedToReinforce = 215,
    FailedToRepair = 216,
    FailedToStartFire = 217,
    FailedToTame = 218,
    FailedToTransmogrify = 219,
    Feet = 220,
    FeltBurningPainLostHealth = 221,
    FewMinutes = 222,
    Filled = 223,
    FilledFrom = 224,
    Fire = 225,
    FireAlmostExtinguished = 226,
    FireAroundYouIsWarm = 227,
    FiredIntoObstacle = 228,
    FireIsHealthy = 229,
    FireIsRaging = 230,
    FireIsStruggling = 231,
    FireOverflowed = 232,
    FireReducedToEmbers = 233,
    FireSource = 234,
    FishingWithNoBait = 235,
    FullyDecodedMap = 236,
    GainedHealth = 237,
    GainedHunger = 238,
    GainedStamina = 239,
    GainedThirst = 240,
    GameHasBeenSavedIsTakingUpMB = 241,
    Gather = 242,
    GatherDestroy = 243,
    Gathering = 244,
    GatherWithHands = 245,
    GhostNoActions = 246,
    GhostOf = 247,
    GoatHasNoMilk = 248,
    GrabAll = 249,
    Group = 250,
    HackAway = 251,
    HandProtectionPreventedInjury = 252,
    Hands = 253,
    HandsNotEffectiveForDigging = 254,
    Harvest = 255,
    Harvesting = 256,
    HarvestWithHands = 257,
    HasBeenHurtByATrap = 258,
    HasDecayed = 259,
    HasHitYouForDamage = 260,
    HasNoEffect = 261,
    HasSetTrapOffNoDamage = 262,
    HasSplit = 263,
    Head = 264,
    Held = 265,
    Help = 266,
    HelpGrow = 267,
    Here = 268,
    Hints = 269,
    HintsDisabled = 270,
    HintsEnabled = 271,
    Hitch = 272,
    HitchAttempt = 273,
    HitchCreature = 274,
    HitchDisabled = 275,
    HitchInUse = 276,
    HitForDamage = 277,
    HitYouForDamage = 278,
    Hour = 279,
    Hours = 280,
    HurtHandsHittingWithoutWeapons = 281,
    HurtHandsWithNoTool = 282,
    Ignite = 283,
    IgnitedTorch = 284,
    Ineffective = 285,
    InjuredFromTrap = 286,
    InNeedOfRepair = 287,
    Intermediate = 288,
    Inventory = 289,
    IsInTheWayOfPickingUp = 290,
    It = 291,
    ItAlsoReveals = 292,
    ItAlsoSeems = 293,
    ItContains = 294,
    ItsWeightCapacity = 295,
    JoinedAServer = 296,
    Jump = 297,
    Killed = 298,
    KnowledgeHasIncreased = 299,
    LabelAdditionalRequirements = 300,
    LabelAttackFromTactics = 301,
    LabelBase = 302,
    LabelCanIncrease = 303,
    LabelCraftingReputation = 304,
    LabelCraftingSkillReputation = 305,
    LabelDecay = 306,
    LabelDefense = 307,
    LabelDurability = 308,
    LabelEquip = 309,
    LabelGrouping = 310,
    LabelHave = 311,
    LabelLeftHandAttack = 312,
    LabelLevel = 313,
    LabelLightSourceWhenLit = 314,
    LabelOnCure = 315,
    LabelOnDrink = 316,
    LabelOnEat = 317,
    LabelOnEquip = 318,
    LabelOnHeal = 319,
    LabelOnOtherHeal = 320,
    LabelProtected = 321,
    LabelRange = 322,
    LabelRanged = 323,
    LabelRangedAttack = 324,
    LabelRangedDamage = 325,
    LabelReputationImpact = 326,
    LabelRequires = 327,
    LabelResists = 328,
    LabelRightHandAttack = 329,
    LabelSkill = 330,
    LabelStokeFireStrength = 331,
    LabelThrowDamageType = 332,
    LabelTrapDamage = 333,
    LabelUse = 334,
    LabelUses = 335,
    LabelVulnerabilities = 336,
    LabelWeight = 337,
    LabelWeightCapacity = 338,
    LabelWeightReduction = 339,
    LabelWorth = 340,
    LastPlaceYouLeftOff = 341,
    LearnedHowToCreate = 342,
    LeftHand = 343,
    LeftHandEquip = 344,
    Legs = 345,
    LikelyFailures = 346,
    LostHealth = 347,
    LostHunger = 348,
    LostStamina = 349,
    LostThirst = 350,
    MapNotOfThisArea = 351,
    MaterialsDestroyed = 352,
    Metabolism = 353,
    MetabolismSlowed = 354,
    Milk = 355,
    Milking = 356,
    MissedWith = 357,
    MissedYouWith = 358,
    MoreInformation = 359,
    MoveAllOfSameQualityToFacingContainer = 360,
    MoveAllOfSameQualityToInventory = 361,
    MoveAllOfSameQualityToLastOpenedContainer = 362,
    MoveAllOfSameQualityToOpenedContainer = 363,
    MoveAllToFacingContainer = 364,
    MoveAllToInventory = 365,
    MoveAllToLastOpenedContainer = 366,
    MoveAllToOpenedContainer = 367,
    MovedItem = 368,
    MovedItems = 369,
    MoveOverTrapButDoNotSetOff = 370,
    MoveToFacingContainer = 371,
    MoveToInventory = 372,
    MoveToLastOpenedContainer = 373,
    MoveToOpenedContainer = 374,
    MultiplayerGamePaused = 375,
    MultiplayerGameResumed = 376,
    MultiplayerPlayerConnected = 377,
    MultiplayerPlayerDied = 378,
    MultiplayerPlayerDisconnected = 379,
    MultiplayerPlayerJoined = 380,
    MustBeEquippedToIgnite = 381,
    MustCastIntoWater = 382,
    Mysteriously = 383,
    Name = 384,
    NearlyBurnedEquipmentProtectedYou = 385,
    Neck = 386,
    NeedAShovelToDigTreasure = 387,
    NeedFishingNetForTreasure = 388,
    NeedFreeHandToShoot = 389,
    NeedToEquipToShoot = 390,
    NeedToStartTravelsOutside = 391,
    NeedWaterForRaft = 392,
    Negatively = 393,
    NightQuarter1 = 394,
    NightQuarter2 = 395,
    NightQuarter3 = 396,
    NightQuarter4 = 397,
    NoAmmunitionForThatWeapon = 398,
    NoBlackPowderToFireWeapon = 399,
    NoFireToStokeWith = 400,
    NoFishAtLocation = 401,
    NoGroundWater = 402,
    NoInkToDrawMap = 403,
    NoKindlingOrFuelItemsToStartFire = 404,
    NoKindlingToStartFire = 405,
    NoLongerFeelPainOfBeingBurned = 406,
    NoLongerHostile = 407,
    NoMoreRoomInContainer = 408,
    NoNeedToStokeFire = 409,
    NoReturnWithoutCompletingChallenges = 410,
    NoRoomForImprovement = 411,
    NoRoomToDrop = 412,
    North = 413,
    Northeast = 414,
    NorthNortheast = 415,
    NorthNorthwest = 416,
    Northwest = 417,
    NotAvailable = 418,
    NotEnoughPurifiedWaterYet = 419,
    NotEnoughTreasureToReturn = 420,
    NotFacingCreatureToOfferThisTo = 421,
    NotFacingLockedObject = 422,
    NotFacingOtherToHeal = 423,
    NotFacingValidItem = 424,
    NothingHereToCarve = 425,
    NothingHereToFill = 426,
    NothingHereToGrasp = 427,
    NothingToGetFromThis = 428,
    NothingToHarvestFromThisGather = 429,
    NothingToSmother = 430,
    NothingUsefulToHarvestYet = 431,
    NoTinderToStartFire = 432,
    NotInRangeOfTreasure = 433,
    NotSuitableToPlant = 434,
    NoWaterInStill = 435,
    NPCStartingDialog1 = 436,
    NPCStartingDialog2 = 437,
    NPCStartingDialog3 = 438,
    NPCStartingDialog4 = 439,
    NPCWelcome = 440,
    NPCWelcomeCredit = 441,
    NumberEight = 442,
    NumberFive = 443,
    NumberFour = 444,
    NumberNine = 445,
    NumberOne = 446,
    NumberSeven = 447,
    NumberSix = 448,
    NumberTen = 449,
    NumberThree = 450,
    NumberTwo = 451,
    ObjectIsLocked = 452,
    ObjectIsLockedAttemptToBreakIt = 453,
    Offer = 454,
    OfferAberrantFail = 455,
    OfferAberrantFailButTamed = 456,
    OpenDoor = 457,
    OverEatingLostStamina = 458,
    OverHydratingLostStamina = 459,
    Pack = 460,
    PaperTurnedToMush = 461,
    PartiallyDecodedMap = 462,
    PastExperiencesProvideBenefits = 463,
    PenultimateAnd = 464,
    PetCreature = 465,
    PickAway = 466,
    PickupAllItems = 467,
    PickupItem = 468,
    Piercing = 469,
    Place = 470,
    PlaceAllOnGround = 471,
    PlacedOnGround = 472,
    Plant = 473,
    PlantCouldBeHarvested = 474,
    PlantedInGround = 475,
    PlantGatheringWillDestroy = 476,
    PlantHasResourcesToGather = 477,
    PlantHasResourcesToHarvest = 478,
    PlantHighlyFertile = 479,
    Planting = 480,
    PlantIsDead = 481,
    PlantIsFertile = 482,
    PlantIsInStage = 483,
    PlantIsNotFertile = 484,
    PlantNotReadyToHarvest = 485,
    PlantReadyToGather = 486,
    PlantReadyToGatherNotMaximal = 487,
    PlantReadyToHarvest = 488,
    PlantReadyToHarvestNotMaximal = 489,
    Player = 490,
    PlayerHasCompletedChallengeRequirement = 491,
    PlayerHasWonChallenge = 492,
    Poisoned = 493,
    PoisonedLostHealth = 494,
    PoisonWorkedItsCourse = 495,
    Positively = 496,
    PouredOut = 497,
    PouredOutOnYourself = 498,
    PouredWaterIntoStill = 499,
    PourHarmedPlant = 500,
    PourHealedPlant = 501,
    PourHealedPlantFully = 502,
    PourHealedPlantPartially = 503,
    PourIncreasedFertility = 504,
    Preservation = 505,
    Preserve = 506,
    PreservedFood = 507,
    PurifiedWaterInStill = 508,
    Quality = 509,
    Recent = 510,
    ReduceLength = 511,
    RefusedToBeTamed = 512,
    Reinforce = 513,
    Reinforcement = 514,
    Release = 515,
    RemovedBlood = 516,
    RemoveFromQuickslot = 517,
    Repair = 518,
    RequiredForDisassembleLabel = 519,
    RequiredForDisassembly = 520,
    RequiresFireToBeLit = 521,
    RequiresYouFacingFireSource = 522,
    RequiresYouToBeAround = 523,
    Resistant = 524,
    ResistOrVuln = 525,
    ResistOrVulnAll = 526,
    Rest = 527,
    Rested = 528,
    Resting = 529,
    RestingOnGroundNotEffective = 530,
    RestInterrupted = 531,
    RestInterruptedDamage = 532,
    RestInterruptedLoudNoise = 533,
    RestInterruptedPain = 534,
    RestInterruptedStirring = 535,
    RestLongTime = 536,
    RestModerateTime = 537,
    RestOnGround = 538,
    RestShortTime = 539,
    RestTime = 540,
    ReturnedToCivilization = 541,
    ReturningToCivilizationSetOffAgain = 542,
    ReturnsToLife = 543,
    Reveals = 544,
    RevealsEntityAppearsHurt = 545,
    RevealsEntityAppearsUnharmed = 546,
    RevealsEntityAppearsVeryHurt = 547,
    RevealsEntityIsAtPercentHealth = 548,
    RevealsEntityIsInjured = 549,
    RevealsEntityIsMostlyUninjured = 550,
    RevealsEntityIsOnTheVergeOfDeath = 551,
    RevealsEntityIsSeverelyInjured = 552,
    RevealsEntitySeemsInjured = 553,
    RevealsEntitySeemsUninjured = 554,
    RevealsNumberOfResistancesAndVulnerabilities = 555,
    RevealsResistancesAndVulnerabilities = 556,
    RevealsSomeResistancesAndVulnerabilities = 557,
    RightHand = 558,
    RightHandEquip = 559,
    ScrollMaster = 560,
    ScrollProvidedNoUsefulInsight = 561,
    SeaweedFromWater = 562,
    SeemsToHaveDrawnEnergy = 563,
    SetTrapOffButNoDamage = 564,
    SetUp = 565,
    ShadowInTheWater = 566,
    Simple = 567,
    Skill = 568,
    SkillHasRaised = 569,
    Skills = 570,
    Slashing = 571,
    Sleep = 572,
    Sleeping = 573,
    Slept = 574,
    SlitherSuckerConstricts = 575,
    SlitherSuckerJumpedOnHead = 576,
    Some = 577,
    SomethingInTheWayOf = 578,
    SomethingInTheWayOfCarveFirst = 579,
    SomethingInTheWayOfFire = 580,
    SomethingInTheWayOfFishing = 581,
    SomethingInTheWayOfPerforming = 582,
    SomethingInTheWayOfPlacing = 583,
    SomethingInTheWayOfPlanting = 584,
    SomethingInWayOfClosingDoor = 585,
    SoothedTheirBurnInjuries = 586,
    SoothedYourBurnInjuries = 587,
    Sort = 588,
    SortedByBest = 589,
    SortedByCategory = 590,
    SortedByDecay = 591,
    SortedByDurability = 592,
    SortedByGroup = 593,
    SortedByName = 594,
    SortedByQuality = 595,
    SortedByRecent = 596,
    SortedBySkill = 597,
    SortedByUnlockedTime = 598,
    SortedByWeight = 599,
    South = 600,
    Southeast = 601,
    SouthSoutheast = 602,
    SouthSouthwest = 603,
    Southwest = 604,
    StaminaIsFull = 605,
    StartedFire = 606,
    StartTravelInWater = 607,
    StarvingToDeath = 608,
    SteppingOnHasInjuredYouForDamage = 609,
    StillHasNoWaterToPurify = 610,
    StirredUpClawWorm = 611,
    StirredUpCreature = 612,
    StoppedYourBleeding = 613,
    StopUsingRaft = 614,
    Strength = 615,
    StrengthIncreasing = 616,
    SummonedGuardiansByDiggingTreasure = 617,
    SunNotBrightEnoughToStartFire = 618,
    TakenFromGroundBecomeTamed = 619,
    Tame = 620,
    TamedAppearsAngered = 621,
    TamedAppearsContended = 622,
    TamedAppearsHappy = 623,
    TamedAppearsUpset = 624,
    TamedCreature = 625,
    TeleportBlocked = 626,
    Teleported = 627,
    ThanksBuying = 628,
    ThanksSelling = 629,
    The = 630,
    TheCreature = 631,
    TheirFist = 632,
    ThePlant = 633,
    ThereIsNoSunToStartFire = 634,
    ThereIsNothingToMilk = 635,
    ThisCannotBeMilked = 636,
    Throw = 637,
    ThrownIntoDepths = 638,
    ThrownIntoObstacle = 639,
    Till = 640,
    Tilling = 641,
    TimeIs = 642,
    TimeIsDawn = 643,
    TimeIsDaytime = 644,
    TimeIsDusk = 645,
    TimeIsNighttime = 646,
    TimeIsSunrise = 647,
    TimeIsSunset = 648,
    ToDamageAChest = 649,
    ToFight = 650,
    TooDamaged = 651,
    TooExhaustedToJump = 652,
    TradeBarterCreditForItem = 653,
    TradeItemForBarterCredit = 654,
    TradingWith = 655,
    TrampledFire = 656,
    TrampledIntoGround = 657,
    TrampleIntoGround = 658,
    Trampling = 659,
    Transmogrification = 660,
    Transmogrified = 661,
    TrapMissed = 662,
    TrapStoppedYou = 663,
    TravelToFarOffLands = 664,
    TreasureIsBlocked = 665,
    True = 666,
    UnEquip = 667,
    UnEquipAll = 668,
    Unhitch = 669,
    UnhitchCreature = 670,
    Unknown = 671,
    UnknownItem = 672,
    UnlockedChest = 673,
    UnlockedTime = 674,
    UnpurifiedFreshWater = 675,
    UnpurifiedWaterInStill = 676,
    UsingBareHands = 677,
    Vulnerable = 678,
    WaitUntilFireCooledToGetWater = 679,
    Water = 680,
    WaterGathering = 681,
    WaterPutOutFire = 682,
    Weight = 683,
    WeightCapacity = 684,
    WellIsDry = 685,
    WellIsFull = 686,
    West = 687,
    WestNorthwest = 688,
    WestSouthwest = 689,
    WildGoatRefusedToBeMilked = 690,
    WillNotTrade = 691,
    With = 692,
    WithYouSee = 693,
    WorkingYourselfIntoExhaustion = 694,
    WorkingYourselfIntoExhaustionAndDrowning = 695,
    YouApplied = 696,
    YouAte = 697,
    YouBeginResting = 698,
    YouCannotDoThatYet = 699,
    YouCooledLava = 700,
    YouCrafted = 701,
    YouDied = 702,
    YouDisassembled = 703,
    YouDismantled = 704,
    YouDrank = 705,
    YouDropTheTorch = 706,
    YouEquip = 707,
    YouFailedTo = 708,
    YouFailedToExtinguishedFireFully = 709,
    YouFailedToHeal = 710,
    YouFailedToHealOther = 711,
    YouFire = 712,
    YouGathered = 713,
    YouGatheredAndDropped = 714,
    YouHardenedCooledLava = 715,
    YouHarvested = 716,
    YouHarvestedAndDropped = 717,
    YouHaveAlreadyLearned = 718,
    YouHaveDied = 719,
    YouHaveEnabledDisabled = 720,
    YouHaveHealedOther = 721,
    YouHaveKilled = 722,
    YouHaveReleased = 723,
    YouHaveTamed = 724,
    YouNeedMoreCredit = 725,
    YouNoticeBecomeEnraged = 726,
    YouNoticeDying = 727,
    YouNoticeFertilityDecreasing = 728,
    YouNoticeFertilityIncreasing = 729,
    YouNoticeGrowing = 730,
    YouNoticeLavaCooling = 731,
    YouNoticeLavaHardening = 732,
    YouNoticePerish = 733,
    YouNoticeStumbleInjureItself = 734,
    YouNoticeTakeFromGround = 735,
    YouNoticeWoundsClosing = 736,
    YouNoticeZombieHorde = 737,
    YouOfferedToCreature = 738,
    YouOpen = 739,
    YouPacked = 740,
    YouPickedUp = 741,
    YouRepair = 742,
    YourFist = 743,
    YourHands = 744,
    YourHighSkill = 745,
    YourInventory = 746,
    YourLowSkill = 747,
    YourModerateSkill = 748,
    YourRubbingNoEffect = 749,
    YouRub = 750,
    YouSalvaged = 751,
    YouSee = 752,
    YouSeeAnAberrant = 753,
    YouSeeDrop = 754,
    YouSeeEngulfFire = 755,
    YouSeeHelpingPlant = 756,
    YouSeeLay = 757,
    YouSeeLayingTrap = 758,
    YouSeeSpewLava = 759,
    YouSeeSpitAcid = 760,
    YouSeeSpringForth = 761,
    YouSeeSummon = 762,
    YouSeeSwampFlood = 763,
    YouSeeTrampling = 764,
    YouSeparate = 765,
    YouSetTheTrapOff = 766,
    YouThrew = 767,
    YouTilled = 768,
    YouUnequip = 769,
    YouUsed = 770
}
export default Message;
