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
    ActionTestDepthWell = 8,
    AddedFuelToFire = 9,
    AddedFuelToTorch = 10,
    AddToQuickslot = 11,
    Advanced = 12,
    All = 13,
    AllEquipmentUnEquipped = 14,
    AlreadyDesalinatedWaterInStill = 15,
    AlreadyFullyRefined = 16,
    AlreadyFullyRepaired = 17,
    AlreadyPreserved = 18,
    AlreadyWaterInStill = 19,
    AnUnknownItem = 20,
    AppearedNotEffectiveForGathering = 21,
    AppearsToBeAberrant = 22,
    ArmorAppeared = 23,
    ArmorProtectedFromInjuryAgainst = 24,
    Attack = 25,
    AttemptedToDropAllIntoFire = 26,
    AttemptedToPlaceAllOnGround = 27,
    AttemptToTill = 28,
    Back = 29,
    BadlyBurnedLostHealth = 30,
    BarteringSkillsProvided = 31,
    BasedOnItSeems = 32,
    BeenPoisoned = 33,
    BeginSleeping = 34,
    BeginUsingRaft = 35,
    Belt = 36,
    BestForCraftingConsumables = 37,
    BestForCraftingRequirements = 38,
    BleedingHasStopped = 39,
    BleedingProfusely = 40,
    BleedingToDeathLostHealth = 41,
    Blunt = 42,
    BookBlank = 43,
    BookContains = 44,
    BookCrumbles = 45,
    BookDiagrams = 46,
    BookEmpty = 47,
    BookNothing = 48,
    BookOpen = 49,
    BookScribbles = 50,
    BothEffectiveIneffective = 51,
    BothHands = 52,
    BrokeIntoPieces = 53,
    BrokenOnImpact = 54,
    BrokenWhileFiring = 55,
    Build = 56,
    Burned = 57,
    CannotAddAnyMoreFuel = 58,
    CannotBePerformedOverWater = 59,
    CannotBePreserved = 60,
    CannotBeRefined = 61,
    CannotBeReinforced = 62,
    CannotBeRepaired = 63,
    CannotBeTamed = 64,
    CannotBuildHere = 65,
    CannotDoThatHere = 66,
    CannotDropHere = 67,
    CannotEquipThatThere = 68,
    CannotFishFor = 69,
    CannotHere = 70,
    CannotInWater = 71,
    CannotLeave = 72,
    CannotPickupWhenFull = 73,
    CannotPickUpWhileLit = 74,
    CannotPickUpWithItemsInside = 75,
    CannotPlaceContainerInItself = 76,
    CannotPlaceHere = 77,
    CannotPlaceThatFromHere = 78,
    CannotPlaceThatHere = 79,
    CannotPlantHereTilled = 80,
    CannotRepairWhileLit = 81,
    CannotRestHere = 82,
    CannotSeeHere = 83,
    CannotSleepHere = 84,
    CannotStartFireHere = 85,
    CannotToTellTime = 86,
    CarryingTooMuchWeight = 87,
    CartographyDirection = 88,
    CartographyDirectionUnsure = 89,
    CartographyDistanceHighSkillExactDistance = 90,
    CartographyDistanceHighSkillFarAway = 91,
    CartographyDistanceHighSkillInRegion = 92,
    CartographyDistanceHighSkillNearby = 93,
    CartographyDistanceLowSkillNearby = 94,
    CartographyDistanceLowSkillUnsure = 95,
    CartographyDistanceMedSkillFarAway = 96,
    CartographyDistanceMedSkillNearby = 97,
    CartographyDistanceMedSkillVeryClose = 98,
    CarvedUpCorpse = 99,
    CarveWithTool = 100,
    Carving = 101,
    CastYourLine = 102,
    Category = 103,
    CaughtFish = 104,
    ChatBanCommand = 105,
    ChatBannedCommand = 106,
    ChatCommandsCommand = 107,
    ChatCommandsCommandCommand = 108,
    ChatPingCommand = 109,
    ChatPlayerMessage = 110,
    ChatPlayersCommand = 111,
    ChatServerMessage = 112,
    ChatUnbanCommand = 113,
    ChatUnknownCommand = 114,
    Chest = 115,
    ClearMessages = 116,
    Clockwise = 117,
    CloseContainer = 118,
    CloseDoor = 119,
    CloseToBeingDestroyed = 120,
    CollectObjectWithHands = 121,
    Consumed = 122,
    Container = 123,
    Cook = 124,
    Cooked = 125,
    CopySelectedText = 126,
    CorpseOf = 127,
    CorpseOfNamed = 128,
    CouldNotDecipher = 129,
    Counterclockwise = 130,
    Craft = 131,
    Crafted = 132,
    Crafts = 133,
    CreatureAngered = 134,
    CreatureAppears = 135,
    CreatureAppeased = 136,
    CreatureExcrement = 137,
    CreatureHappinessHigh = 138,
    CreatureHappinessLow = 139,
    CreatureHappinessLowest = 140,
    CreatureHappinessNormal = 141,
    CreatureIdolAttractedCreature = 142,
    CreatureUntamed = 143,
    CuredYourPoison = 144,
    Cut = 145,
    DamageAppeared = 146,
    DamagedByPouring = 147,
    DayQuarter1 = 148,
    DayQuarter2 = 149,
    DayQuarter3 = 150,
    DayQuarter4 = 151,
    DealtNoDamageToYou = 152,
    DeathBy = 153,
    DeathByBleeding = 154,
    DeathByBurning = 155,
    DeathByChallengeWinner = 156,
    DeathByConsumption = 157,
    DeathByDrowning = 158,
    DeathByExhaustion = 159,
    DeathByFistByPlayer = 160,
    DeathByPoison = 161,
    DeathBySteppingOn = 162,
    DeathByTrap = 163,
    DeathByWeaponByPlayer = 164,
    Decay = 165,
    DestroyedFromUse = 166,
    DetachContainer = 167,
    Dexterity = 168,
    DexterityIncreasing = 169,
    DidNotSeemToBeHurting = 170,
    Dig = 171,
    DigAway = 172,
    Digging = 173,
    DigWithHands = 174,
    Disabled = 175,
    Disassemble = 176,
    DisassembleAction = 177,
    Disassembling = 178,
    DiscoveredCaveEntrance = 179,
    DiscoveredInTheBottle = 180,
    DiscoveredLavaPassage = 181,
    Dismantle = 182,
    DismantleAction = 183,
    DismantleLabel = 184,
    Dismantling = 185,
    DismantlingRequires = 186,
    DoNotHaveTreasureMaps = 187,
    DoNotProduceAnyResources = 188,
    DoodadAppearsDamaged = 189,
    DoodadAppearsOnVergeOfBreaking = 190,
    DoodadAppearsUnscathed = 191,
    DoodadCauseStatus = 192,
    DoodadGroupTier = 193,
    DoodadPreservation = 194,
    DoodadPreservationHigh = 195,
    DoodadPreservationLow = 196,
    DoodadPreservationModerate = 197,
    DoodadPreservationVeryHigh = 198,
    DoodadPreservationVeryLow = 199,
    DoodadShowsSignsOfWear = 200,
    DrewSurroundings = 201,
    Drink = 202,
    Drop = 203,
    DropAll = 204,
    DropAllOfSameQuality = 205,
    DroppedIntoDepths = 206,
    DroppedIntoFire = 207,
    DueToDehydration = 208,
    DueToStarvation = 209,
    DugTreasureOut = 210,
    DumpContentsOfContainerInInventory = 211,
    Durability = 212,
    DyingOfDehydration = 213,
    EarnedMilestone = 214,
    East = 215,
    EastNortheast = 216,
    EastSoutheast = 217,
    Effective = 218,
    Enabled = 219,
    Enchant = 220,
    EquipmentPreventedStatusEffects = 221,
    EquipTo = 222,
    ErrorHasOccured = 223,
    Expert = 224,
    ExtinguishedFire = 225,
    ExtinguishedLightSource = 226,
    FailedToAddFuelToTorch = 227,
    FailedToCatchFish = 228,
    FailedToCauseDamage = 229,
    FailedToCauseYouDamage = 230,
    FailedToDrawMap = 231,
    FailedToEnchant = 232,
    FailedToIgniteTorch = 233,
    FailedToPickLock = 234,
    FailedToPlant = 235,
    FailedToPreserve = 236,
    FailedToRefine = 237,
    FailedToReinforce = 238,
    FailedToRepair = 239,
    FailedToStartFire = 240,
    FailedToTame = 241,
    FailedToTransmogrify = 242,
    Feet = 243,
    FeltBurningPainLostHealth = 244,
    FewMinutes = 245,
    Filled = 246,
    FilledFrom = 247,
    Fire = 248,
    FireAlmostExtinguished = 249,
    FireAroundYouIsWarm = 250,
    FiredIntoObstacle = 251,
    FireIsHealthy = 252,
    FireIsRaging = 253,
    FireIsStruggling = 254,
    FireOverflowed = 255,
    FireOverflowedFireElemental = 256,
    FireReducedToEmbers = 257,
    FireSource = 258,
    FishingWithNoBait = 259,
    FreshWater = 260,
    FromTheStill = 261,
    Fuel = 262,
    FullyDecodedMap = 263,
    GainedHealth = 264,
    GainedHunger = 265,
    GainedStamina = 266,
    GainedThirst = 267,
    GameHasBeenSavedIsTakingUpMB = 268,
    Gather = 269,
    GatherDestroy = 270,
    Gathering = 271,
    GatherWithHands = 272,
    GhostNoActions = 273,
    GhostOf = 274,
    GoatHasNoMilk = 275,
    GrabAll = 276,
    Group = 277,
    HackAway = 278,
    HandProtectionPreventedInjury = 279,
    Hands = 280,
    HandsNotEffectiveForDigging = 281,
    Harvest = 282,
    Harvesting = 283,
    HarvestWithHands = 284,
    HasBeenHurtByATrap = 285,
    HasDecayed = 286,
    HasHitYouForDamage = 287,
    HasNoEffect = 288,
    HasSetTrapOffNoDamage = 289,
    HasSplit = 290,
    Head = 291,
    Held = 292,
    Help = 293,
    HelpGrow = 294,
    Here = 295,
    Hints = 296,
    HintsDisabled = 297,
    HintsEnabled = 298,
    Hitch = 299,
    HitchAttempt = 300,
    HitchCreature = 301,
    HitchDisabled = 302,
    HitchInUse = 303,
    HitForDamage = 304,
    HitYouForDamage = 305,
    Hour = 306,
    Hours = 307,
    HurtHandsHittingWithoutWeapons = 308,
    HurtHandsWithNoTool = 309,
    Ignite = 310,
    IgnitedTorch = 311,
    Ineffective = 312,
    InjuredFromTrap = 313,
    InNeedOfRepair = 314,
    Intermediate = 315,
    Inventory = 316,
    IsInTheWayOfPickingUp = 317,
    It = 318,
    ItAlsoReveals = 319,
    ItAlsoSeems = 320,
    ItContains = 321,
    ItsWeightCapacity = 322,
    JoinedAServer = 323,
    Jump = 324,
    Killed = 325,
    KnowledgeHasIncreased = 326,
    LabelAdditionalRequirements = 327,
    LabelAttackFromTactics = 328,
    LabelBase = 329,
    LabelCanIncrease = 330,
    LabelCraftingReputation = 331,
    LabelCraftingSkillReputation = 332,
    LabelDecay = 333,
    LabelDefense = 334,
    LabelDurability = 335,
    LabelEquip = 336,
    LabelGrouping = 337,
    LabelHave = 338,
    LabelLeftHandAttack = 339,
    LabelLevel = 340,
    LabelLightSourceWhenLit = 341,
    LabelOnCure = 342,
    LabelOnDrink = 343,
    LabelOnEat = 344,
    LabelOnEquip = 345,
    LabelOnHeal = 346,
    LabelOnOtherHeal = 347,
    LabelPreservationRate = 348,
    LabelProtected = 349,
    LabelRange = 350,
    LabelRanged = 351,
    LabelRangedAttack = 352,
    LabelRangedDamage = 353,
    LabelReputationImpact = 354,
    LabelRequires = 355,
    LabelResists = 356,
    LabelRightHandAttack = 357,
    LabelSkill = 358,
    LabelStokeFireStrength = 359,
    LabelThrowDamageType = 360,
    LabelTrapDamage = 361,
    LabelUse = 362,
    LabelUses = 363,
    LabelVulnerabilities = 364,
    LabelWeight = 365,
    LabelWeightCapacity = 366,
    LabelWeightReduction = 367,
    LabelWorth = 368,
    LastPlaceYouLeftOff = 369,
    LearnedHowToCreate = 370,
    LeftHand = 371,
    LeftHandEquip = 372,
    LegendaryItemDamage = 373,
    Legs = 374,
    LikelyFailures = 375,
    Limited = 376,
    LostHealth = 377,
    LostHunger = 378,
    LostStamina = 379,
    LostThirst = 380,
    MapNotOfThisArea = 381,
    MaterialsDestroyed = 382,
    MessageOfTheDay = 383,
    Metabolism = 384,
    MetabolismSlowed = 385,
    Milk = 386,
    Milking = 387,
    MissedWith = 388,
    MissedYouWith = 389,
    MoreInformation = 390,
    MoveAllOfSameQualityToFacingContainer = 391,
    MoveAllOfSameQualityToInventory = 392,
    MoveAllOfSameQualityToLastOpenedContainer = 393,
    MoveAllOfSameQualityToOpenedContainer = 394,
    MoveAllToFacingContainer = 395,
    MoveAllToInventory = 396,
    MoveAllToLastOpenedContainer = 397,
    MoveAllToOpenedContainer = 398,
    MovedItem = 399,
    MoveOverTrapButDoNotSetOff = 400,
    MoveToFacingContainer = 401,
    MoveToInventory = 402,
    MoveToLastOpenedContainer = 403,
    MoveToOpenedContainer = 404,
    MultiplayerGamePaused = 405,
    MultiplayerGameResumed = 406,
    MultiplayerPlayerConnected = 407,
    MultiplayerPlayerDied = 408,
    MultiplayerPlayerDisconnected = 409,
    MultiplayerPlayerJoined = 410,
    MustBeEquippedToIgnite = 411,
    MustCastIntoWater = 412,
    Mysteriously = 413,
    Name = 414,
    NearlyBurnedEquipmentProtectedYou = 415,
    Neck = 416,
    NeedAShovelToDigTreasure = 417,
    NeedFishingNetForTreasure = 418,
    NeedFreeHandToShoot = 419,
    NeedToEquipToShoot = 420,
    NeedToStartTravelsOutside = 421,
    NeedWaterForRaft = 422,
    Negatively = 423,
    NightQuarter1 = 424,
    NightQuarter2 = 425,
    NightQuarter3 = 426,
    NightQuarter4 = 427,
    No = 428,
    NoAmmunitionForThatWeapon = 429,
    NoBlackPowderToFireWeapon = 430,
    NoFireToStokeWith = 431,
    NoFishAtLocation = 432,
    NoGroundWater = 433,
    NoInkToDrawMap = 434,
    NoKindlingOrFuelItemsToStartFire = 435,
    NoKindlingToStartFire = 436,
    NoLongerFeelPainOfBeingBurned = 437,
    NoLongerHostile = 438,
    NoMoreRoomInContainer = 439,
    NoNeedToStokeFire = 440,
    NoReturnWithoutCompletingChallenges = 441,
    NoRoomForImprovement = 442,
    NoRoomToDrop = 443,
    North = 444,
    Northeast = 445,
    NorthNortheast = 446,
    NorthNorthwest = 447,
    Northwest = 448,
    NotAvailable = 449,
    NotEnoughPurifiedWaterYet = 450,
    NotEnoughTreasureToReturn = 451,
    NotFacingCreatureToOfferThisTo = 452,
    NotFacingLockedObject = 453,
    NotFacingOtherToHeal = 454,
    NotFacingValidItem = 455,
    NothingHereToCarve = 456,
    NothingHereToFill = 457,
    NothingHereToGrasp = 458,
    NothingToGetFromThis = 459,
    NothingToHarvestFromThisGather = 460,
    NothingToSmother = 461,
    NothingUsefulToHarvestYet = 462,
    NoTinderToStartFire = 463,
    NotInRangeOfTreasure = 464,
    NotSuitableToPlant = 465,
    NoWaterInStill = 466,
    NPCStartingDialog1 = 467,
    NPCStartingDialog2 = 468,
    NPCStartingDialog3 = 469,
    NPCStartingDialog4 = 470,
    NPCWelcome = 471,
    NPCWelcomeCredit = 472,
    NumberEight = 473,
    NumberFive = 474,
    NumberFour = 475,
    NumberNine = 476,
    NumberOne = 477,
    NumberSeven = 478,
    NumberSix = 479,
    NumberTen = 480,
    NumberThree = 481,
    NumberTwo = 482,
    ObjectIsLocked = 483,
    ObjectIsLockedAttemptToBreakIt = 484,
    Offer = 485,
    OfferAberrantFail = 486,
    OfferAberrantFailButTamed = 487,
    OpenDoor = 488,
    OverEatingLostStamina = 489,
    OverHydratingLostStamina = 490,
    Pack = 491,
    PaperTurnedToMush = 492,
    PartiallyDecodedMap = 493,
    PenultimateAnd = 494,
    Pet = 495,
    PetCreature = 496,
    PickAway = 497,
    PickupAllItems = 498,
    PickupItem = 499,
    Piercing = 500,
    Place = 501,
    PlacedOnGround = 502,
    Plant = 503,
    PlantCouldBeHarvested = 504,
    PlantedInGround = 505,
    PlantGatheringWillDestroy = 506,
    PlantHasResourcesToGather = 507,
    PlantHasResourcesToHarvest = 508,
    PlantHighlyFertile = 509,
    Planting = 510,
    PlantIsDead = 511,
    PlantIsFertile = 512,
    PlantIsInStage = 513,
    PlantIsNotFertile = 514,
    PlantNotReadyToHarvest = 515,
    PlantReadyToGather = 516,
    PlantReadyToGatherNotMaximal = 517,
    PlantReadyToHarvest = 518,
    PlantReadyToHarvestNotMaximal = 519,
    Player = 520,
    PlayerHasCompletedChallengeRequirement = 521,
    PlayerHasWonChallenge = 522,
    Poisoned = 523,
    PoisonedLostHealth = 524,
    PoisonWorkedItsCourse = 525,
    Positively = 526,
    PouredOut = 527,
    PouredOutOnYourself = 528,
    PouredWaterIntoStill = 529,
    PourHarmedPlant = 530,
    PourHealedPlant = 531,
    PourHealedPlantFully = 532,
    PourHealedPlantPartially = 533,
    PourIncreasedFertility = 534,
    Preserve = 535,
    PreservedFood = 536,
    PurifiedWaterInStill = 537,
    Quality = 538,
    Recent = 539,
    ReduceLength = 540,
    Refine = 541,
    RefusedToBeTamed = 542,
    Reinforce = 543,
    Release = 544,
    RemovedBlood = 545,
    RemoveFromQuickslot = 546,
    Repair = 547,
    RequiredForDisassembleLabel = 548,
    RequiredForDisassembly = 549,
    RequiresFireToBeLit = 550,
    RequiresYouFacingFireSource = 551,
    RequiresYouToBeAround = 552,
    Resistant = 553,
    ResistOrVuln = 554,
    ResistOrVulnAll = 555,
    Rest = 556,
    Rested = 557,
    Resting = 558,
    RestingOnGroundNotEffective = 559,
    RestInterrupted = 560,
    RestInterruptedDamage = 561,
    RestInterruptedLoudNoise = 562,
    RestInterruptedPain = 563,
    RestInterruptedStirring = 564,
    RestLongTime = 565,
    RestModerateTime = 566,
    RestOnGround = 567,
    RestShortTime = 568,
    RestTime = 569,
    ReturnedToCivilization = 570,
    ReturningToCivilizationSetOffAgain = 571,
    ReturnsToLife = 572,
    Reveals = 573,
    RevealsEntityAppearsHurt = 574,
    RevealsEntityAppearsUnharmed = 575,
    RevealsEntityAppearsVeryHurt = 576,
    RevealsEntityIsAtPercentHealth = 577,
    RevealsEntityIsInjured = 578,
    RevealsEntityIsMostlyUninjured = 579,
    RevealsEntityIsOnTheVergeOfDeath = 580,
    RevealsEntityIsSeverelyInjured = 581,
    RevealsEntitySeemsInjured = 582,
    RevealsEntitySeemsUninjured = 583,
    RevealsNumberOfResistancesAndVulnerabilities = 584,
    RevealsResistancesAndVulnerabilities = 585,
    RevealsSomeResistancesAndVulnerabilities = 586,
    Reverse = 587,
    RightHand = 588,
    RightHandEquip = 589,
    ScrollMaster = 590,
    ScrollProvidedNoUsefulInsight = 591,
    Seawater = 592,
    SeaweedFromWater = 593,
    SeemsToHaveDrawnEnergy = 594,
    SetTrapOffButNoDamage = 595,
    SetUp = 596,
    ShadowInTheWater = 597,
    Simple = 598,
    Skill = 599,
    SkillHasRaised = 600,
    Skills = 601,
    Slashing = 602,
    Sleep = 603,
    Sleeping = 604,
    Slept = 605,
    SlitherSuckerConstricts = 606,
    SlitherSuckerJumpedOnHead = 607,
    Some = 608,
    SomethingInTheWayOf = 609,
    SomethingInTheWayOfCarveFirst = 610,
    SomethingInTheWayOfFire = 611,
    SomethingInTheWayOfFishing = 612,
    SomethingInTheWayOfPerforming = 613,
    SomethingInTheWayOfPlacing = 614,
    SomethingInTheWayOfPlanting = 615,
    SomethingInWayOfClosingDoor = 616,
    SoothedTheirBurnInjuries = 617,
    SoothedYourBurnInjuries = 618,
    Sort = 619,
    SortedByBestCraftingConsumables = 620,
    SortedByBestCraftingRequirements = 621,
    SortedByCategory = 622,
    SortedByDecay = 623,
    SortedByDurability = 624,
    SortedByGroup = 625,
    SortedByName = 626,
    SortedByQuality = 627,
    SortedByRecent = 628,
    SortedBySkill = 629,
    SortedByUnlockedTime = 630,
    SortedByWeight = 631,
    South = 632,
    Southeast = 633,
    SouthSoutheast = 634,
    SouthSouthwest = 635,
    Southwest = 636,
    StaminaIsFull = 637,
    StartedFire = 638,
    StartTravelInWater = 639,
    StarvingToDeath = 640,
    SteppingOnHasInjuredYouForDamage = 641,
    StillHasNoWaterToPurify = 642,
    StirredUpClawWorm = 643,
    StirredUpCreature = 644,
    StoppedYourBleeding = 645,
    StopUsingRaft = 646,
    Strength = 647,
    StrengthIncreasing = 648,
    SummonedGuardiansByDiggingTreasure = 649,
    SunNotBrightEnoughToStartFire = 650,
    TakenFromGroundBecomeTamed = 651,
    Tame = 652,
    TamedCreature = 653,
    TeleportBlocked = 654,
    Teleported = 655,
    ThanksBuying = 656,
    ThanksSelling = 657,
    The = 658,
    TheCreature = 659,
    TheirFist = 660,
    ThePlant = 661,
    ThereIsNoContainerOnTheStill = 662,
    ThereIsNoSunToStartFire = 663,
    ThereIsNothingToMilk = 664,
    ThisCannotBeMilked = 665,
    Throw = 666,
    ThrownIntoDepths = 667,
    ThrownIntoObstacle = 668,
    Tier = 669,
    TierGroup = 670,
    Till = 671,
    Tilling = 672,
    TimeIs = 673,
    TimeIsDawn = 674,
    TimeIsDaytime = 675,
    TimeIsDusk = 676,
    TimeIsNighttime = 677,
    TimeIsSunrise = 678,
    TimeIsSunset = 679,
    ToDamageAChest = 680,
    ToFight = 681,
    TooDamaged = 682,
    TooExhaustedToJump = 683,
    TradeBarterCreditForItem = 684,
    TradeItemForBarterCredit = 685,
    TradingWith = 686,
    TrampledFire = 687,
    TrampledIntoGround = 688,
    TrampleIntoGround = 689,
    Trampling = 690,
    Transmogrified = 691,
    Transmogrify = 692,
    TrapMissed = 693,
    TrapStoppedYou = 694,
    TravelToFarOffLands = 695,
    TreasureIsBlocked = 696,
    True = 697,
    UnEquip = 698,
    UnEquipAll = 699,
    Unhitch = 700,
    UnhitchCreature = 701,
    Unknown = 702,
    UnknownItem = 703,
    Unlimited = 704,
    UnlockedChest = 705,
    UnlockedTime = 706,
    UnpurifiedFreshWater = 707,
    UnpurifiedWaterInStill = 708,
    UsingBareHands = 709,
    Vulnerable = 710,
    WaitUntilFireCooledToGetWater = 711,
    Water = 712,
    WaterGathering = 713,
    WaterPutOutFire = 714,
    Weight = 715,
    WeightCapacity = 716,
    WellIsDry = 717,
    WellIsFull = 718,
    West = 719,
    WestNorthwest = 720,
    WestSouthwest = 721,
    WildGoatRefusedToBeMilked = 722,
    WillNotTrade = 723,
    With = 724,
    WithYouSee = 725,
    WorkingYourselfIntoExhaustion = 726,
    WorkingYourselfIntoExhaustionAndDrowning = 727,
    You = 728,
    YouApplied = 729,
    YouAte = 730,
    YouBeginResting = 731,
    YouCannotDoThatYet = 732,
    YouCooledLava = 733,
    YouCrafted = 734,
    YouDied = 735,
    YouDisassembled = 736,
    YouDismantled = 737,
    YouDrank = 738,
    YouDropTheTorch = 739,
    YouEnchant = 740,
    YouEnchantMutate = 741,
    YouEquip = 742,
    YouFailedTo = 743,
    YouFailedToExtinguishedFireFully = 744,
    YouFailedToHeal = 745,
    YouFailedToHealOther = 746,
    YouFire = 747,
    YouGathered = 748,
    YouGatheredAndDropped = 749,
    YouHardenedCooledLava = 750,
    YouHarvested = 751,
    YouHarvestedAndDropped = 752,
    YouHaveAlreadyLearned = 753,
    YouHaveDied = 754,
    YouHaveEnabledDisabled = 755,
    YouHaveHealedOther = 756,
    YouHaveKilled = 757,
    YouHaveReleased = 758,
    YouHaveTamed = 759,
    YouNeedMoreCredit = 760,
    YouNoticeBecomeEnraged = 761,
    YouNoticeDying = 762,
    YouNoticeFertilityDecreasing = 763,
    YouNoticeFertilityIncreasing = 764,
    YouNoticeGrowing = 765,
    YouNoticeLavaCooling = 766,
    YouNoticeLavaHardening = 767,
    YouNoticePerish = 768,
    YouNoticeStumbleInjureItself = 769,
    YouNoticeTakeFromGround = 770,
    YouNoticeWoundsClosing = 771,
    YouNoticeZombieHorde = 772,
    YouOfferedToCreature = 773,
    YouOpen = 774,
    YouPacked = 775,
    YouPickedUp = 776,
    YouRefine = 777,
    YouReinforce = 778,
    YouRepair = 779,
    YourFist = 780,
    YourHands = 781,
    YourHighSkill = 782,
    YourInventory = 783,
    YourLowSkill = 784,
    YourModerateSkill = 785,
    YourRubbingNoEffect = 786,
    YouRub = 787,
    YouSalvaged = 788,
    YouSee = 789,
    YouSeeAnAberrant = 790,
    YouSeeASlimeCombine = 791,
    YouSeeDrop = 792,
    YouSeeEngulfFire = 793,
    YouSeeHelpingPlant = 794,
    YouSeeLay = 795,
    YouSeeLayingTrap = 796,
    YouSeeSpewLava = 797,
    YouSeeSpitAcid = 798,
    YouSeeSpringForth = 799,
    YouSeeSummon = 800,
    YouSeeSwampFlood = 801,
    YouSeeTrampling = 802,
    YouSeparate = 803,
    YouSetTheTrapOff = 804,
    YouStokeTheFireElemental = 805,
    YouThrew = 806,
    YouTilled = 807,
    YouUnequip = 808,
    YouUsed = 809
}
export default Message;
