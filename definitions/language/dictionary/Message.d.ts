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
declare enum Message {
    None = 0,
    Aberrant = 1,
    AboutHours = 2,
    ActionAttachContainerAlreadyHasContainer = 3,
    ActionAttachContainerAttachedContainer = 4,
    ActionAttachContainerAttachingContainer = 5,
    ActionAttachContainerNothingToAttachContainerTo = 6,
    ActionDetachContainerDetachContainer = 7,
    AddedFuelToFire = 8,
    AddedFuelToTorch = 9,
    AddFuel = 10,
    AddToQuickslot = 11,
    Advanced = 12,
    All = 13,
    AllEquipmentUnEquipped = 14,
    AlreadyDesalinatedWaterInStill = 15,
    AlreadyFullyRepaired = 16,
    AlreadyPreserved = 17,
    AlreadyWaterInStill = 18,
    AnUnknownItem = 19,
    AppearedNotEffectiveForGathering = 20,
    AppearsToBeAberrant = 21,
    ArmorAppeared = 22,
    ArmorProtectedFromInjuryAgainst = 23,
    Attack = 24,
    AttemptedToDropAllIntoFire = 25,
    AttemptedToPlaceAllOnGround = 26,
    AttemptToTill = 27,
    Back = 28,
    BadlyBurnedLostHealth = 29,
    BarteringSkillsProvided = 30,
    BasedOnItSeems = 31,
    BeenPoisoned = 32,
    BeginSleeping = 33,
    BeginUsingRaft = 34,
    Belt = 35,
    BestForCraftingConsumables = 36,
    BestForCraftingRequirements = 37,
    BleedingHasStopped = 38,
    BleedingProfusely = 39,
    BleedingToDeathLostHealth = 40,
    Blunt = 41,
    BookBlank = 42,
    BookContains = 43,
    BookCrumbles = 44,
    BookDiagrams = 45,
    BookEmpty = 46,
    BookNothing = 47,
    BookOpen = 48,
    BookScribbles = 49,
    BothEffectiveIneffective = 50,
    BothHands = 51,
    BrokeIntoPieces = 52,
    BrokenOnImpact = 53,
    BrokenWhileFiring = 54,
    Build = 55,
    Burned = 56,
    CannotAddAnyMoreFuel = 57,
    CannotBePerformedOverWater = 58,
    CannotBePreserved = 59,
    CannotBeReinforced = 60,
    CannotBeRepaired = 61,
    CannotBeTamed = 62,
    CannotBuildHere = 63,
    CannotDoThatHere = 64,
    CannotDropHere = 65,
    CannotEquipThatThere = 66,
    CannotFishFor = 67,
    CannotHere = 68,
    CannotInWater = 69,
    CannotLeave = 70,
    CannotPickupWhenFull = 71,
    CannotPickUpWhileLit = 72,
    CannotPickUpWithItemsInside = 73,
    CannotPlaceContainerInItself = 74,
    CannotPlaceHere = 75,
    CannotPlaceThatFromHere = 76,
    CannotPlaceThatHere = 77,
    CannotPlantHereTilled = 78,
    CannotRepairWhileLit = 79,
    CannotRestHere = 80,
    CannotSeeHere = 81,
    CannotSleepHere = 82,
    CannotStartFireHere = 83,
    CannotToTellTime = 84,
    CarryingTooMuchWeight = 85,
    CartographyDirection = 86,
    CartographyDirectionUnsure = 87,
    CartographyDistanceHighSkillExactDistance = 88,
    CartographyDistanceHighSkillFarAway = 89,
    CartographyDistanceHighSkillInRegion = 90,
    CartographyDistanceHighSkillNearby = 91,
    CartographyDistanceLowSkillNearby = 92,
    CartographyDistanceLowSkillUnsure = 93,
    CartographyDistanceMedSkillFarAway = 94,
    CartographyDistanceMedSkillNearby = 95,
    CartographyDistanceMedSkillVeryClose = 96,
    CarvedUpCorpse = 97,
    CarveWithTool = 98,
    Carving = 99,
    CastYourLine = 100,
    Category = 101,
    CaughtFish = 102,
    ChatBanCommand = 103,
    ChatBannedCommand = 104,
    ChatCommandsCommand = 105,
    ChatCommandsCommandCommand = 106,
    ChatPingCommand = 107,
    ChatPlayerMessage = 108,
    ChatPlayersCommand = 109,
    ChatServerMessage = 110,
    ChatUnbanCommand = 111,
    ChatUnknownCommand = 112,
    Chest = 113,
    ClearMessages = 114,
    Clockwise = 115,
    CloseContainer = 116,
    CloseDoor = 117,
    CloseToBeingDestroyed = 118,
    CollectObjectWithHands = 119,
    Consumed = 120,
    Container = 121,
    Cook = 122,
    Cooked = 123,
    CopySelectedText = 124,
    CorpseOf = 125,
    CorpseOfNamed = 126,
    CouldNotDecipher = 127,
    Counterclockwise = 128,
    Craft = 129,
    Crafted = 130,
    Crafts = 131,
    CreatureAngered = 132,
    CreatureAppears = 133,
    CreatureAppeased = 134,
    CreatureIdolAttractedCreature = 135,
    CreatureUntamed = 136,
    CuredYourPoison = 137,
    Cut = 138,
    DamageAppeared = 139,
    DamagedByPouring = 140,
    DayQuarter1 = 141,
    DayQuarter2 = 142,
    DayQuarter3 = 143,
    DayQuarter4 = 144,
    DealtNoDamageToYou = 145,
    DeathBy = 146,
    DeathByBleeding = 147,
    DeathByBurning = 148,
    DeathByChallengeWinner = 149,
    DeathByConsumption = 150,
    DeathByDrowning = 151,
    DeathByExhaustion = 152,
    DeathByFistByPlayer = 153,
    DeathByPoison = 154,
    DeathBySteppingOn = 155,
    DeathByTrap = 156,
    DeathByWeaponByPlayer = 157,
    Decay = 158,
    DestroyedFromUse = 159,
    DetachContainer = 160,
    Dexterity = 161,
    DexterityIncreasing = 162,
    DidNotSeemToBeHurting = 163,
    Dig = 164,
    DigAway = 165,
    Digging = 166,
    DigWithHands = 167,
    Disabled = 168,
    Disassemble = 169,
    DisassembleAction = 170,
    Disassembling = 171,
    DiscoveredCaveEntrance = 172,
    DiscoveredInTheBottle = 173,
    DiscoveredLavaPassage = 174,
    Dismantle = 175,
    DismantleAction = 176,
    DismantleLabel = 177,
    Dismantling = 178,
    DismantlingRequires = 179,
    DoNotHaveTreasureMaps = 180,
    DoNotProduceAnyResources = 181,
    DoodadAppearsDamaged = 182,
    DoodadAppearsOnVergeOfBreaking = 183,
    DoodadAppearsUnscathed = 184,
    DoodadCauseStatus = 185,
    DoodadShowsSignsOfWear = 186,
    DrewSurroundings = 187,
    Drink = 188,
    Drop = 189,
    DropAll = 190,
    DropAllOfSameQuality = 191,
    DroppedIntoDepths = 192,
    DroppedIntoFire = 193,
    DueToDehydration = 194,
    DueToStarvation = 195,
    DugTreasureOut = 196,
    DumpContentsOfContainerInInventory = 197,
    Durability = 198,
    DyingOfDehydration = 199,
    EarnedMilestone = 200,
    East = 201,
    EastNortheast = 202,
    EastSoutheast = 203,
    Effective = 204,
    Enabled = 205,
    EquipmentPreventedStatusEffects = 206,
    EquipTo = 207,
    ErrorHasOccured = 208,
    Expert = 209,
    ExtinguishedFire = 210,
    ExtinguishedTorch = 211,
    FailedToAddFuelToTorch = 212,
    FailedToCatchFish = 213,
    FailedToCauseDamage = 214,
    FailedToCauseYouDamage = 215,
    FailedToDrawMap = 216,
    FailedToIgniteTorch = 217,
    FailedToPickLock = 218,
    FailedToPlant = 219,
    FailedToPreserve = 220,
    FailedToReinforce = 221,
    FailedToRepair = 222,
    FailedToStartFire = 223,
    FailedToTame = 224,
    FailedToTransmogrify = 225,
    Feet = 226,
    FeltBurningPainLostHealth = 227,
    FewMinutes = 228,
    Filled = 229,
    FilledFrom = 230,
    Fire = 231,
    FireAlmostExtinguished = 232,
    FireAroundYouIsWarm = 233,
    FiredIntoObstacle = 234,
    FireIsHealthy = 235,
    FireIsRaging = 236,
    FireIsStruggling = 237,
    FireOverflowed = 238,
    FireOverflowedFireElemental = 239,
    FireReducedToEmbers = 240,
    FireSource = 241,
    FishingWithNoBait = 242,
    FromTheStill = 243,
    FullyDecodedMap = 244,
    GainedHealth = 245,
    GainedHunger = 246,
    GainedStamina = 247,
    GainedThirst = 248,
    GameHasBeenSavedIsTakingUpMB = 249,
    Gather = 250,
    GatherDestroy = 251,
    Gathering = 252,
    GatherWithHands = 253,
    GhostNoActions = 254,
    GhostOf = 255,
    GoatHasNoMilk = 256,
    GrabAll = 257,
    Group = 258,
    HackAway = 259,
    HandProtectionPreventedInjury = 260,
    Hands = 261,
    HandsNotEffectiveForDigging = 262,
    Harvest = 263,
    Harvesting = 264,
    HarvestWithHands = 265,
    HasBeenHurtByATrap = 266,
    HasDecayed = 267,
    HasHitYouForDamage = 268,
    HasNoEffect = 269,
    HasSetTrapOffNoDamage = 270,
    HasSplit = 271,
    Head = 272,
    Held = 273,
    Help = 274,
    HelpGrow = 275,
    Here = 276,
    Hints = 277,
    HintsDisabled = 278,
    HintsEnabled = 279,
    Hitch = 280,
    HitchAttempt = 281,
    HitchCreature = 282,
    HitchDisabled = 283,
    HitchInUse = 284,
    HitForDamage = 285,
    HitYouForDamage = 286,
    Hour = 287,
    Hours = 288,
    HurtHandsHittingWithoutWeapons = 289,
    HurtHandsWithNoTool = 290,
    Ignite = 291,
    IgnitedTorch = 292,
    Ineffective = 293,
    InjuredFromTrap = 294,
    InNeedOfRepair = 295,
    Intermediate = 296,
    Inventory = 297,
    IsInTheWayOfPickingUp = 298,
    It = 299,
    ItAlsoReveals = 300,
    ItAlsoSeems = 301,
    ItContains = 302,
    ItsWeightCapacity = 303,
    JoinedAServer = 304,
    Jump = 305,
    Killed = 306,
    KnowledgeHasIncreased = 307,
    LabelAdditionalRequirements = 308,
    LabelAttackFromTactics = 309,
    LabelBase = 310,
    LabelCanIncrease = 311,
    LabelCraftingReputation = 312,
    LabelCraftingSkillReputation = 313,
    LabelDecay = 314,
    LabelDefense = 315,
    LabelDurability = 316,
    LabelEquip = 317,
    LabelGrouping = 318,
    LabelHave = 319,
    LabelLeftHandAttack = 320,
    LabelLevel = 321,
    LabelLightSourceWhenLit = 322,
    LabelOnCure = 323,
    LabelOnDrink = 324,
    LabelOnEat = 325,
    LabelOnEquip = 326,
    LabelOnHeal = 327,
    LabelOnOtherHeal = 328,
    LabelPreservationRate = 329,
    LabelProtected = 330,
    LabelRange = 331,
    LabelRanged = 332,
    LabelRangedAttack = 333,
    LabelRangedDamage = 334,
    LabelReputationImpact = 335,
    LabelRequires = 336,
    LabelResists = 337,
    LabelRightHandAttack = 338,
    LabelSkill = 339,
    LabelStokeFireStrength = 340,
    LabelThrowDamageType = 341,
    LabelTrapDamage = 342,
    LabelUse = 343,
    LabelUses = 344,
    LabelVulnerabilities = 345,
    LabelWeight = 346,
    LabelWeightCapacity = 347,
    LabelWeightReduction = 348,
    LabelWorth = 349,
    LastPlaceYouLeftOff = 350,
    LearnedHowToCreate = 351,
    LeftHand = 352,
    LeftHandEquip = 353,
    Legs = 354,
    LikelyFailures = 355,
    LostHealth = 356,
    LostHunger = 357,
    LostStamina = 358,
    LostThirst = 359,
    MapNotOfThisArea = 360,
    MaterialsDestroyed = 361,
    Metabolism = 362,
    MetabolismSlowed = 363,
    Milk = 364,
    Milking = 365,
    MissedWith = 366,
    MissedYouWith = 367,
    MoreInformation = 368,
    MoveAllOfSameQualityToFacingContainer = 369,
    MoveAllOfSameQualityToInventory = 370,
    MoveAllOfSameQualityToLastOpenedContainer = 371,
    MoveAllOfSameQualityToOpenedContainer = 372,
    MoveAllToFacingContainer = 373,
    MoveAllToInventory = 374,
    MoveAllToLastOpenedContainer = 375,
    MoveAllToOpenedContainer = 376,
    MovedItem = 377,
    MoveOverTrapButDoNotSetOff = 378,
    MoveToFacingContainer = 379,
    MoveToInventory = 380,
    MoveToLastOpenedContainer = 381,
    MoveToOpenedContainer = 382,
    MultiplayerGamePaused = 383,
    MultiplayerGameResumed = 384,
    MultiplayerPlayerConnected = 385,
    MultiplayerPlayerDied = 386,
    MultiplayerPlayerDisconnected = 387,
    MultiplayerPlayerJoined = 388,
    MustBeEquippedToIgnite = 389,
    MustCastIntoWater = 390,
    Mysteriously = 391,
    Name = 392,
    NearlyBurnedEquipmentProtectedYou = 393,
    Neck = 394,
    NeedAShovelToDigTreasure = 395,
    NeedFishingNetForTreasure = 396,
    NeedFreeHandToShoot = 397,
    NeedToEquipToShoot = 398,
    NeedToStartTravelsOutside = 399,
    NeedWaterForRaft = 400,
    Negatively = 401,
    NightQuarter1 = 402,
    NightQuarter2 = 403,
    NightQuarter3 = 404,
    NightQuarter4 = 405,
    NoAmmunitionForThatWeapon = 406,
    NoBlackPowderToFireWeapon = 407,
    NoFireToStokeWith = 408,
    NoFishAtLocation = 409,
    NoGroundWater = 410,
    NoInkToDrawMap = 411,
    NoKindlingOrFuelItemsToStartFire = 412,
    NoKindlingToStartFire = 413,
    NoLongerFeelPainOfBeingBurned = 414,
    NoLongerHostile = 415,
    NoMoreRoomInContainer = 416,
    NoNeedToStokeFire = 417,
    NoReturnWithoutCompletingChallenges = 418,
    NoRoomForImprovement = 419,
    NoRoomToDrop = 420,
    North = 421,
    Northeast = 422,
    NorthNortheast = 423,
    NorthNorthwest = 424,
    Northwest = 425,
    NotAvailable = 426,
    NotEnoughPurifiedWaterYet = 427,
    NotEnoughTreasureToReturn = 428,
    NotFacingCreatureToOfferThisTo = 429,
    NotFacingLockedObject = 430,
    NotFacingOtherToHeal = 431,
    NotFacingValidItem = 432,
    NothingHereToCarve = 433,
    NothingHereToFill = 434,
    NothingHereToGrasp = 435,
    NothingToGetFromThis = 436,
    NothingToHarvestFromThisGather = 437,
    NothingToSmother = 438,
    NothingUsefulToHarvestYet = 439,
    NoTinderToStartFire = 440,
    NotInRangeOfTreasure = 441,
    NotSuitableToPlant = 442,
    NoWaterInStill = 443,
    NPCStartingDialog1 = 444,
    NPCStartingDialog2 = 445,
    NPCStartingDialog3 = 446,
    NPCStartingDialog4 = 447,
    NPCWelcome = 448,
    NPCWelcomeCredit = 449,
    NumberEight = 450,
    NumberFive = 451,
    NumberFour = 452,
    NumberNine = 453,
    NumberOne = 454,
    NumberSeven = 455,
    NumberSix = 456,
    NumberTen = 457,
    NumberThree = 458,
    NumberTwo = 459,
    ObjectIsLocked = 460,
    ObjectIsLockedAttemptToBreakIt = 461,
    Offer = 462,
    OfferAberrantFail = 463,
    OfferAberrantFailButTamed = 464,
    OpenDoor = 465,
    OverEatingLostStamina = 466,
    OverHydratingLostStamina = 467,
    Pack = 468,
    PaperTurnedToMush = 469,
    PartiallyDecodedMap = 470,
    PastExperiencesProvideBenefits = 471,
    PenultimateAnd = 472,
    PetCreature = 473,
    PickAway = 474,
    PickupAllItems = 475,
    PickupItem = 476,
    Piercing = 477,
    Place = 478,
    PlacedOnGround = 479,
    Plant = 480,
    PlantCouldBeHarvested = 481,
    PlantedInGround = 482,
    PlantGatheringWillDestroy = 483,
    PlantHasResourcesToGather = 484,
    PlantHasResourcesToHarvest = 485,
    PlantHighlyFertile = 486,
    Planting = 487,
    PlantIsDead = 488,
    PlantIsFertile = 489,
    PlantIsInStage = 490,
    PlantIsNotFertile = 491,
    PlantNotReadyToHarvest = 492,
    PlantReadyToGather = 493,
    PlantReadyToGatherNotMaximal = 494,
    PlantReadyToHarvest = 495,
    PlantReadyToHarvestNotMaximal = 496,
    Player = 497,
    PlayerHasCompletedChallengeRequirement = 498,
    PlayerHasWonChallenge = 499,
    Poisoned = 500,
    PoisonedLostHealth = 501,
    PoisonWorkedItsCourse = 502,
    Positively = 503,
    PouredOut = 504,
    PouredOutOnYourself = 505,
    PouredWaterIntoStill = 506,
    PourHarmedPlant = 507,
    PourHealedPlant = 508,
    PourHealedPlantFully = 509,
    PourHealedPlantPartially = 510,
    PourIncreasedFertility = 511,
    Preservation = 512,
    Preserve = 513,
    PreservedFood = 514,
    PurifiedWaterInStill = 515,
    Quality = 516,
    Recent = 517,
    ReduceLength = 518,
    RefusedToBeTamed = 519,
    Reinforce = 520,
    Reinforcement = 521,
    Release = 522,
    RemovedBlood = 523,
    RemoveFromQuickslot = 524,
    Repair = 525,
    RequiredForDisassembleLabel = 526,
    RequiredForDisassembly = 527,
    RequiresFireToBeLit = 528,
    RequiresYouFacingFireSource = 529,
    RequiresYouToBeAround = 530,
    Resistant = 531,
    ResistOrVuln = 532,
    ResistOrVulnAll = 533,
    Rest = 534,
    Rested = 535,
    Resting = 536,
    RestingOnGroundNotEffective = 537,
    RestInterrupted = 538,
    RestInterruptedDamage = 539,
    RestInterruptedLoudNoise = 540,
    RestInterruptedPain = 541,
    RestInterruptedStirring = 542,
    RestLongTime = 543,
    RestModerateTime = 544,
    RestOnGround = 545,
    RestShortTime = 546,
    RestTime = 547,
    ReturnedToCivilization = 548,
    ReturningToCivilizationSetOffAgain = 549,
    ReturnsToLife = 550,
    Reveals = 551,
    RevealsEntityAppearsHurt = 552,
    RevealsEntityAppearsUnharmed = 553,
    RevealsEntityAppearsVeryHurt = 554,
    RevealsEntityIsAtPercentHealth = 555,
    RevealsEntityIsInjured = 556,
    RevealsEntityIsMostlyUninjured = 557,
    RevealsEntityIsOnTheVergeOfDeath = 558,
    RevealsEntityIsSeverelyInjured = 559,
    RevealsEntitySeemsInjured = 560,
    RevealsEntitySeemsUninjured = 561,
    RevealsNumberOfResistancesAndVulnerabilities = 562,
    RevealsResistancesAndVulnerabilities = 563,
    RevealsSomeResistancesAndVulnerabilities = 564,
    Reverse = 565,
    RightHand = 566,
    RightHandEquip = 567,
    ScrollMaster = 568,
    ScrollProvidedNoUsefulInsight = 569,
    SeaweedFromWater = 570,
    SeemsToHaveDrawnEnergy = 571,
    SetTrapOffButNoDamage = 572,
    SetUp = 573,
    ShadowInTheWater = 574,
    Simple = 575,
    Skill = 576,
    SkillHasRaised = 577,
    Skills = 578,
    Slashing = 579,
    Sleep = 580,
    Sleeping = 581,
    Slept = 582,
    SlitherSuckerConstricts = 583,
    SlitherSuckerJumpedOnHead = 584,
    Some = 585,
    SomethingInTheWayOf = 586,
    SomethingInTheWayOfCarveFirst = 587,
    SomethingInTheWayOfFire = 588,
    SomethingInTheWayOfFishing = 589,
    SomethingInTheWayOfPerforming = 590,
    SomethingInTheWayOfPlacing = 591,
    SomethingInTheWayOfPlanting = 592,
    SomethingInWayOfClosingDoor = 593,
    SoothedTheirBurnInjuries = 594,
    SoothedYourBurnInjuries = 595,
    Sort = 596,
    SortedByBestCraftingConsumables = 597,
    SortedByBestCraftingRequirements = 598,
    SortedByCategory = 599,
    SortedByDecay = 600,
    SortedByDurability = 601,
    SortedByGroup = 602,
    SortedByName = 603,
    SortedByQuality = 604,
    SortedByRecent = 605,
    SortedBySkill = 606,
    SortedByUnlockedTime = 607,
    SortedByWeight = 608,
    South = 609,
    Southeast = 610,
    SouthSoutheast = 611,
    SouthSouthwest = 612,
    Southwest = 613,
    StaminaIsFull = 614,
    StartedFire = 615,
    StartTravelInWater = 616,
    StarvingToDeath = 617,
    SteppingOnHasInjuredYouForDamage = 618,
    StillHasNoWaterToPurify = 619,
    StirredUpClawWorm = 620,
    StirredUpCreature = 621,
    StoppedYourBleeding = 622,
    StopUsingRaft = 623,
    Strength = 624,
    StrengthIncreasing = 625,
    SummonedGuardiansByDiggingTreasure = 626,
    SunNotBrightEnoughToStartFire = 627,
    TakenFromGroundBecomeTamed = 628,
    Tame = 629,
    TamedAppearsAngered = 630,
    TamedAppearsContended = 631,
    TamedAppearsHappy = 632,
    TamedAppearsUpset = 633,
    TamedCreature = 634,
    TeleportBlocked = 635,
    Teleported = 636,
    ThanksBuying = 637,
    ThanksSelling = 638,
    The = 639,
    TheCreature = 640,
    TheirFist = 641,
    ThePlant = 642,
    ThereIsNoContainerOnTheStill = 643,
    ThereIsNoSunToStartFire = 644,
    ThereIsNothingToMilk = 645,
    ThisCannotBeMilked = 646,
    Throw = 647,
    ThrownIntoDepths = 648,
    ThrownIntoObstacle = 649,
    Tier = 650,
    Till = 651,
    Tilling = 652,
    TimeIs = 653,
    TimeIsDawn = 654,
    TimeIsDaytime = 655,
    TimeIsDusk = 656,
    TimeIsNighttime = 657,
    TimeIsSunrise = 658,
    TimeIsSunset = 659,
    ToDamageAChest = 660,
    ToFight = 661,
    TooDamaged = 662,
    TooExhaustedToJump = 663,
    TradeBarterCreditForItem = 664,
    TradeItemForBarterCredit = 665,
    TradingWith = 666,
    TrampledFire = 667,
    TrampledIntoGround = 668,
    TrampleIntoGround = 669,
    Trampling = 670,
    Transmogrification = 671,
    Transmogrified = 672,
    TrapMissed = 673,
    TrapStoppedYou = 674,
    TravelToFarOffLands = 675,
    TreasureIsBlocked = 676,
    True = 677,
    UnEquip = 678,
    UnEquipAll = 679,
    Unhitch = 680,
    UnhitchCreature = 681,
    Unknown = 682,
    UnknownItem = 683,
    UnlockedChest = 684,
    UnlockedTime = 685,
    UnpurifiedFreshWater = 686,
    UnpurifiedWaterInStill = 687,
    UsingBareHands = 688,
    Vulnerable = 689,
    WaitUntilFireCooledToGetWater = 690,
    Water = 691,
    WaterGathering = 692,
    WaterPutOutFire = 693,
    Weight = 694,
    WeightCapacity = 695,
    WellIsDry = 696,
    WellIsFull = 697,
    West = 698,
    WestNorthwest = 699,
    WestSouthwest = 700,
    WildGoatRefusedToBeMilked = 701,
    WillNotTrade = 702,
    With = 703,
    WithYouSee = 704,
    WorkingYourselfIntoExhaustion = 705,
    WorkingYourselfIntoExhaustionAndDrowning = 706,
    You = 707,
    YouApplied = 708,
    YouAte = 709,
    YouBeginResting = 710,
    YouCannotDoThatYet = 711,
    YouCooledLava = 712,
    YouCrafted = 713,
    YouDied = 714,
    YouDisassembled = 715,
    YouDismantled = 716,
    YouDrank = 717,
    YouDropTheTorch = 718,
    YouEquip = 719,
    YouFailedTo = 720,
    YouFailedToExtinguishedFireFully = 721,
    YouFailedToHeal = 722,
    YouFailedToHealOther = 723,
    YouFire = 724,
    YouGathered = 725,
    YouGatheredAndDropped = 726,
    YouHardenedCooledLava = 727,
    YouHarvested = 728,
    YouHarvestedAndDropped = 729,
    YouHaveAlreadyLearned = 730,
    YouHaveDied = 731,
    YouHaveEnabledDisabled = 732,
    YouHaveHealedOther = 733,
    YouHaveKilled = 734,
    YouHaveReleased = 735,
    YouHaveTamed = 736,
    YouNeedMoreCredit = 737,
    YouNoticeBecomeEnraged = 738,
    YouNoticeDying = 739,
    YouNoticeFertilityDecreasing = 740,
    YouNoticeFertilityIncreasing = 741,
    YouNoticeGrowing = 742,
    YouNoticeLavaCooling = 743,
    YouNoticeLavaHardening = 744,
    YouNoticePerish = 745,
    YouNoticeStumbleInjureItself = 746,
    YouNoticeTakeFromGround = 747,
    YouNoticeWoundsClosing = 748,
    YouNoticeZombieHorde = 749,
    YouOfferedToCreature = 750,
    YouOpen = 751,
    YouPacked = 752,
    YouPickedUp = 753,
    YouRepair = 754,
    YourFist = 755,
    YourHands = 756,
    YourHighSkill = 757,
    YourInventory = 758,
    YourLowSkill = 759,
    YourModerateSkill = 760,
    YourRubbingNoEffect = 761,
    YouRub = 762,
    YouSalvaged = 763,
    YouSee = 764,
    YouSeeAnAberrant = 765,
    YouSeeASlimeCombine = 766,
    YouSeeDrop = 767,
    YouSeeEngulfFire = 768,
    YouSeeHelpingPlant = 769,
    YouSeeLay = 770,
    YouSeeLayingTrap = 771,
    YouSeeSpewLava = 772,
    YouSeeSpitAcid = 773,
    YouSeeSpringForth = 774,
    YouSeeSummon = 775,
    YouSeeSwampFlood = 776,
    YouSeeTrampling = 777,
    YouSeparate = 778,
    YouSetTheTrapOff = 779,
    YouStokeTheFireElemental = 780,
    YouThrew = 781,
    YouTilled = 782,
    YouUnequip = 783,
    YouUsed = 784
}
export default Message;
