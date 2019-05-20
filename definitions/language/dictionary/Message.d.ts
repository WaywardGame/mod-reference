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
    CreatureHappinessHigh = 137,
    CreatureHappinessLow = 138,
    CreatureHappinessLowest = 139,
    CreatureHappinessNormal = 140,
    CreatureIdolAttractedCreature = 141,
    CreatureUntamed = 142,
    CuredYourPoison = 143,
    Cut = 144,
    DamageAppeared = 145,
    DamagedByPouring = 146,
    DayQuarter1 = 147,
    DayQuarter2 = 148,
    DayQuarter3 = 149,
    DayQuarter4 = 150,
    DealtNoDamageToYou = 151,
    DeathBy = 152,
    DeathByBleeding = 153,
    DeathByBurning = 154,
    DeathByChallengeWinner = 155,
    DeathByConsumption = 156,
    DeathByDrowning = 157,
    DeathByExhaustion = 158,
    DeathByFistByPlayer = 159,
    DeathByPoison = 160,
    DeathBySteppingOn = 161,
    DeathByTrap = 162,
    DeathByWeaponByPlayer = 163,
    Decay = 164,
    DestroyedFromUse = 165,
    DetachContainer = 166,
    Dexterity = 167,
    DexterityIncreasing = 168,
    DidNotSeemToBeHurting = 169,
    Dig = 170,
    DigAway = 171,
    Digging = 172,
    DigWithHands = 173,
    Disabled = 174,
    Disassemble = 175,
    DisassembleAction = 176,
    Disassembling = 177,
    DiscoveredCaveEntrance = 178,
    DiscoveredInTheBottle = 179,
    DiscoveredLavaPassage = 180,
    Dismantle = 181,
    DismantleAction = 182,
    DismantleLabel = 183,
    Dismantling = 184,
    DismantlingRequires = 185,
    DoNotHaveTreasureMaps = 186,
    DoNotProduceAnyResources = 187,
    DoodadAppearsDamaged = 188,
    DoodadAppearsOnVergeOfBreaking = 189,
    DoodadAppearsUnscathed = 190,
    DoodadCauseStatus = 191,
    DoodadGroupTier = 192,
    DoodadPreservation = 193,
    DoodadPreservationHigh = 194,
    DoodadPreservationLow = 195,
    DoodadPreservationModerate = 196,
    DoodadPreservationVeryHigh = 197,
    DoodadPreservationVeryLow = 198,
    DoodadShowsSignsOfWear = 199,
    DrewSurroundings = 200,
    Drink = 201,
    Drop = 202,
    DropAll = 203,
    DropAllOfSameQuality = 204,
    DroppedIntoDepths = 205,
    DroppedIntoFire = 206,
    DueToDehydration = 207,
    DueToStarvation = 208,
    DugTreasureOut = 209,
    DumpContentsOfContainerInInventory = 210,
    Durability = 211,
    DyingOfDehydration = 212,
    EarnedMilestone = 213,
    East = 214,
    EastNortheast = 215,
    EastSoutheast = 216,
    Effective = 217,
    Enabled = 218,
    EquipmentPreventedStatusEffects = 219,
    EquipTo = 220,
    ErrorHasOccured = 221,
    Expert = 222,
    ExtinguishedFire = 223,
    ExtinguishedTorch = 224,
    FailedToAddFuelToTorch = 225,
    FailedToCatchFish = 226,
    FailedToCauseDamage = 227,
    FailedToCauseYouDamage = 228,
    FailedToDrawMap = 229,
    FailedToIgniteTorch = 230,
    FailedToPickLock = 231,
    FailedToPlant = 232,
    FailedToPreserve = 233,
    FailedToRefine = 234,
    FailedToReinforce = 235,
    FailedToRepair = 236,
    FailedToStartFire = 237,
    FailedToTame = 238,
    FailedToTransmogrify = 239,
    Feet = 240,
    FeltBurningPainLostHealth = 241,
    FewMinutes = 242,
    Filled = 243,
    FilledFrom = 244,
    Fire = 245,
    FireAlmostExtinguished = 246,
    FireAroundYouIsWarm = 247,
    FiredIntoObstacle = 248,
    FireIsHealthy = 249,
    FireIsRaging = 250,
    FireIsStruggling = 251,
    FireOverflowed = 252,
    FireOverflowedFireElemental = 253,
    FireReducedToEmbers = 254,
    FireSource = 255,
    FishingWithNoBait = 256,
    FromTheStill = 257,
    FullyDecodedMap = 258,
    GainedHealth = 259,
    GainedHunger = 260,
    GainedStamina = 261,
    GainedThirst = 262,
    GameHasBeenSavedIsTakingUpMB = 263,
    Gather = 264,
    GatherDestroy = 265,
    Gathering = 266,
    GatherWithHands = 267,
    GhostNoActions = 268,
    GhostOf = 269,
    GoatHasNoMilk = 270,
    GrabAll = 271,
    Group = 272,
    HackAway = 273,
    HandProtectionPreventedInjury = 274,
    Hands = 275,
    HandsNotEffectiveForDigging = 276,
    Harvest = 277,
    Harvesting = 278,
    HarvestWithHands = 279,
    HasBeenHurtByATrap = 280,
    HasDecayed = 281,
    HasHitYouForDamage = 282,
    HasNoEffect = 283,
    HasSetTrapOffNoDamage = 284,
    HasSplit = 285,
    Head = 286,
    Held = 287,
    Help = 288,
    HelpGrow = 289,
    Here = 290,
    Hints = 291,
    HintsDisabled = 292,
    HintsEnabled = 293,
    Hitch = 294,
    HitchAttempt = 295,
    HitchCreature = 296,
    HitchDisabled = 297,
    HitchInUse = 298,
    HitForDamage = 299,
    HitYouForDamage = 300,
    Hour = 301,
    Hours = 302,
    HurtHandsHittingWithoutWeapons = 303,
    HurtHandsWithNoTool = 304,
    Ignite = 305,
    IgnitedTorch = 306,
    Ineffective = 307,
    InjuredFromTrap = 308,
    InNeedOfRepair = 309,
    Intermediate = 310,
    Inventory = 311,
    IsInTheWayOfPickingUp = 312,
    It = 313,
    ItAlsoReveals = 314,
    ItAlsoSeems = 315,
    ItContains = 316,
    ItsWeightCapacity = 317,
    JoinedAServer = 318,
    Jump = 319,
    Killed = 320,
    KnowledgeHasIncreased = 321,
    LabelAdditionalRequirements = 322,
    LabelAttackFromTactics = 323,
    LabelBase = 324,
    LabelCanIncrease = 325,
    LabelCraftingReputation = 326,
    LabelCraftingSkillReputation = 327,
    LabelDecay = 328,
    LabelDefense = 329,
    LabelDurability = 330,
    LabelEquip = 331,
    LabelGrouping = 332,
    LabelHave = 333,
    LabelLeftHandAttack = 334,
    LabelLevel = 335,
    LabelLightSourceWhenLit = 336,
    LabelOnCure = 337,
    LabelOnDrink = 338,
    LabelOnEat = 339,
    LabelOnEquip = 340,
    LabelOnHeal = 341,
    LabelOnOtherHeal = 342,
    LabelPreservationRate = 343,
    LabelProtected = 344,
    LabelRange = 345,
    LabelRanged = 346,
    LabelRangedAttack = 347,
    LabelRangedDamage = 348,
    LabelReputationImpact = 349,
    LabelRequires = 350,
    LabelResists = 351,
    LabelRightHandAttack = 352,
    LabelSkill = 353,
    LabelStokeFireStrength = 354,
    LabelThrowDamageType = 355,
    LabelTrapDamage = 356,
    LabelUse = 357,
    LabelUses = 358,
    LabelVulnerabilities = 359,
    LabelWeight = 360,
    LabelWeightCapacity = 361,
    LabelWeightReduction = 362,
    LabelWorth = 363,
    LastPlaceYouLeftOff = 364,
    LearnedHowToCreate = 365,
    LeftHand = 366,
    LeftHandEquip = 367,
    Legs = 368,
    LikelyFailures = 369,
    LostHealth = 370,
    LostHunger = 371,
    LostStamina = 372,
    LostThirst = 373,
    MapNotOfThisArea = 374,
    MaterialsDestroyed = 375,
    Metabolism = 376,
    MetabolismSlowed = 377,
    Milk = 378,
    Milking = 379,
    MissedWith = 380,
    MissedYouWith = 381,
    MoreInformation = 382,
    MoveAllOfSameQualityToFacingContainer = 383,
    MoveAllOfSameQualityToInventory = 384,
    MoveAllOfSameQualityToLastOpenedContainer = 385,
    MoveAllOfSameQualityToOpenedContainer = 386,
    MoveAllToFacingContainer = 387,
    MoveAllToInventory = 388,
    MoveAllToLastOpenedContainer = 389,
    MoveAllToOpenedContainer = 390,
    MovedItem = 391,
    MoveOverTrapButDoNotSetOff = 392,
    MoveToFacingContainer = 393,
    MoveToInventory = 394,
    MoveToLastOpenedContainer = 395,
    MoveToOpenedContainer = 396,
    MultiplayerGamePaused = 397,
    MultiplayerGameResumed = 398,
    MultiplayerPlayerConnected = 399,
    MultiplayerPlayerDied = 400,
    MultiplayerPlayerDisconnected = 401,
    MultiplayerPlayerJoined = 402,
    MustBeEquippedToIgnite = 403,
    MustCastIntoWater = 404,
    Mysteriously = 405,
    Name = 406,
    NearlyBurnedEquipmentProtectedYou = 407,
    Neck = 408,
    NeedAShovelToDigTreasure = 409,
    NeedFishingNetForTreasure = 410,
    NeedFreeHandToShoot = 411,
    NeedToEquipToShoot = 412,
    NeedToStartTravelsOutside = 413,
    NeedWaterForRaft = 414,
    Negatively = 415,
    NightQuarter1 = 416,
    NightQuarter2 = 417,
    NightQuarter3 = 418,
    NightQuarter4 = 419,
    NoAmmunitionForThatWeapon = 420,
    NoBlackPowderToFireWeapon = 421,
    NoFireToStokeWith = 422,
    NoFishAtLocation = 423,
    NoGroundWater = 424,
    NoInkToDrawMap = 425,
    NoKindlingOrFuelItemsToStartFire = 426,
    NoKindlingToStartFire = 427,
    NoLongerFeelPainOfBeingBurned = 428,
    NoLongerHostile = 429,
    NoMoreRoomInContainer = 430,
    NoNeedToStokeFire = 431,
    NoReturnWithoutCompletingChallenges = 432,
    NoRoomForImprovement = 433,
    NoRoomToDrop = 434,
    North = 435,
    Northeast = 436,
    NorthNortheast = 437,
    NorthNorthwest = 438,
    Northwest = 439,
    NotAvailable = 440,
    NotEnoughPurifiedWaterYet = 441,
    NotEnoughTreasureToReturn = 442,
    NotFacingCreatureToOfferThisTo = 443,
    NotFacingLockedObject = 444,
    NotFacingOtherToHeal = 445,
    NotFacingValidItem = 446,
    NothingHereToCarve = 447,
    NothingHereToFill = 448,
    NothingHereToGrasp = 449,
    NothingToGetFromThis = 450,
    NothingToHarvestFromThisGather = 451,
    NothingToSmother = 452,
    NothingUsefulToHarvestYet = 453,
    NoTinderToStartFire = 454,
    NotInRangeOfTreasure = 455,
    NotSuitableToPlant = 456,
    NoWaterInStill = 457,
    NPCStartingDialog1 = 458,
    NPCStartingDialog2 = 459,
    NPCStartingDialog3 = 460,
    NPCStartingDialog4 = 461,
    NPCWelcome = 462,
    NPCWelcomeCredit = 463,
    NumberEight = 464,
    NumberFive = 465,
    NumberFour = 466,
    NumberNine = 467,
    NumberOne = 468,
    NumberSeven = 469,
    NumberSix = 470,
    NumberTen = 471,
    NumberThree = 472,
    NumberTwo = 473,
    ObjectIsLocked = 474,
    ObjectIsLockedAttemptToBreakIt = 475,
    Offer = 476,
    OfferAberrantFail = 477,
    OfferAberrantFailButTamed = 478,
    OpenDoor = 479,
    OverEatingLostStamina = 480,
    OverHydratingLostStamina = 481,
    Pack = 482,
    PaperTurnedToMush = 483,
    PartiallyDecodedMap = 484,
    PastExperiencesProvideBenefits = 485,
    PenultimateAnd = 486,
    Pet = 487,
    PetCreature = 488,
    PickAway = 489,
    PickupAllItems = 490,
    PickupItem = 491,
    Piercing = 492,
    Place = 493,
    PlacedOnGround = 494,
    Plant = 495,
    PlantCouldBeHarvested = 496,
    PlantedInGround = 497,
    PlantGatheringWillDestroy = 498,
    PlantHasResourcesToGather = 499,
    PlantHasResourcesToHarvest = 500,
    PlantHighlyFertile = 501,
    Planting = 502,
    PlantIsDead = 503,
    PlantIsFertile = 504,
    PlantIsInStage = 505,
    PlantIsNotFertile = 506,
    PlantNotReadyToHarvest = 507,
    PlantReadyToGather = 508,
    PlantReadyToGatherNotMaximal = 509,
    PlantReadyToHarvest = 510,
    PlantReadyToHarvestNotMaximal = 511,
    Player = 512,
    PlayerHasCompletedChallengeRequirement = 513,
    PlayerHasWonChallenge = 514,
    Poisoned = 515,
    PoisonedLostHealth = 516,
    PoisonWorkedItsCourse = 517,
    Positively = 518,
    PouredOut = 519,
    PouredOutOnYourself = 520,
    PouredWaterIntoStill = 521,
    PourHarmedPlant = 522,
    PourHealedPlant = 523,
    PourHealedPlantFully = 524,
    PourHealedPlantPartially = 525,
    PourIncreasedFertility = 526,
    Preservation = 527,
    Preserve = 528,
    PreservedFood = 529,
    PurifiedWaterInStill = 530,
    Quality = 531,
    Recent = 532,
    ReduceLength = 533,
    Refine = 534,
    Refining = 535,
    RefusedToBeTamed = 536,
    Reinforce = 537,
    Reinforcement = 538,
    Release = 539,
    RemovedBlood = 540,
    RemoveFromQuickslot = 541,
    Repair = 542,
    RequiredForDisassembleLabel = 543,
    RequiredForDisassembly = 544,
    RequiresFireToBeLit = 545,
    RequiresYouFacingFireSource = 546,
    RequiresYouToBeAround = 547,
    Resistant = 548,
    ResistOrVuln = 549,
    ResistOrVulnAll = 550,
    Rest = 551,
    Rested = 552,
    Resting = 553,
    RestingOnGroundNotEffective = 554,
    RestInterrupted = 555,
    RestInterruptedDamage = 556,
    RestInterruptedLoudNoise = 557,
    RestInterruptedPain = 558,
    RestInterruptedStirring = 559,
    RestLongTime = 560,
    RestModerateTime = 561,
    RestOnGround = 562,
    RestShortTime = 563,
    RestTime = 564,
    ReturnedToCivilization = 565,
    ReturningToCivilizationSetOffAgain = 566,
    ReturnsToLife = 567,
    Reveals = 568,
    RevealsEntityAppearsHurt = 569,
    RevealsEntityAppearsUnharmed = 570,
    RevealsEntityAppearsVeryHurt = 571,
    RevealsEntityIsAtPercentHealth = 572,
    RevealsEntityIsInjured = 573,
    RevealsEntityIsMostlyUninjured = 574,
    RevealsEntityIsOnTheVergeOfDeath = 575,
    RevealsEntityIsSeverelyInjured = 576,
    RevealsEntitySeemsInjured = 577,
    RevealsEntitySeemsUninjured = 578,
    RevealsNumberOfResistancesAndVulnerabilities = 579,
    RevealsResistancesAndVulnerabilities = 580,
    RevealsSomeResistancesAndVulnerabilities = 581,
    Reverse = 582,
    RightHand = 583,
    RightHandEquip = 584,
    ScrollMaster = 585,
    ScrollProvidedNoUsefulInsight = 586,
    SeaweedFromWater = 587,
    SeemsToHaveDrawnEnergy = 588,
    SetTrapOffButNoDamage = 589,
    SetUp = 590,
    ShadowInTheWater = 591,
    Simple = 592,
    Skill = 593,
    SkillHasRaised = 594,
    Skills = 595,
    Slashing = 596,
    Sleep = 597,
    Sleeping = 598,
    Slept = 599,
    SlitherSuckerConstricts = 600,
    SlitherSuckerJumpedOnHead = 601,
    Some = 602,
    SomethingInTheWayOf = 603,
    SomethingInTheWayOfCarveFirst = 604,
    SomethingInTheWayOfFire = 605,
    SomethingInTheWayOfFishing = 606,
    SomethingInTheWayOfPerforming = 607,
    SomethingInTheWayOfPlacing = 608,
    SomethingInTheWayOfPlanting = 609,
    SomethingInWayOfClosingDoor = 610,
    SoothedTheirBurnInjuries = 611,
    SoothedYourBurnInjuries = 612,
    Sort = 613,
    SortedByBestCraftingConsumables = 614,
    SortedByBestCraftingRequirements = 615,
    SortedByCategory = 616,
    SortedByDecay = 617,
    SortedByDurability = 618,
    SortedByGroup = 619,
    SortedByName = 620,
    SortedByQuality = 621,
    SortedByRecent = 622,
    SortedBySkill = 623,
    SortedByUnlockedTime = 624,
    SortedByWeight = 625,
    South = 626,
    Southeast = 627,
    SouthSoutheast = 628,
    SouthSouthwest = 629,
    Southwest = 630,
    StaminaIsFull = 631,
    StartedFire = 632,
    StartTravelInWater = 633,
    StarvingToDeath = 634,
    SteppingOnHasInjuredYouForDamage = 635,
    StillHasNoWaterToPurify = 636,
    StirredUpClawWorm = 637,
    StirredUpCreature = 638,
    StoppedYourBleeding = 639,
    StopUsingRaft = 640,
    Strength = 641,
    StrengthIncreasing = 642,
    SummonedGuardiansByDiggingTreasure = 643,
    SunNotBrightEnoughToStartFire = 644,
    TakenFromGroundBecomeTamed = 645,
    Tame = 646,
    TamedCreature = 647,
    TeleportBlocked = 648,
    Teleported = 649,
    ThanksBuying = 650,
    ThanksSelling = 651,
    The = 652,
    TheCreature = 653,
    TheirFist = 654,
    ThePlant = 655,
    ThereIsNoContainerOnTheStill = 656,
    ThereIsNoSunToStartFire = 657,
    ThereIsNothingToMilk = 658,
    ThisCannotBeMilked = 659,
    Throw = 660,
    ThrownIntoDepths = 661,
    ThrownIntoObstacle = 662,
    Tier = 663,
    TierGroup = 664,
    Till = 665,
    Tilling = 666,
    TimeIs = 667,
    TimeIsDawn = 668,
    TimeIsDaytime = 669,
    TimeIsDusk = 670,
    TimeIsNighttime = 671,
    TimeIsSunrise = 672,
    TimeIsSunset = 673,
    ToDamageAChest = 674,
    ToFight = 675,
    TooDamaged = 676,
    TooExhaustedToJump = 677,
    TradeBarterCreditForItem = 678,
    TradeItemForBarterCredit = 679,
    TradingWith = 680,
    TrampledFire = 681,
    TrampledIntoGround = 682,
    TrampleIntoGround = 683,
    Trampling = 684,
    Transmogrification = 685,
    Transmogrified = 686,
    TrapMissed = 687,
    TrapStoppedYou = 688,
    TravelToFarOffLands = 689,
    TreasureIsBlocked = 690,
    True = 691,
    UnEquip = 692,
    UnEquipAll = 693,
    Unhitch = 694,
    UnhitchCreature = 695,
    Unknown = 696,
    UnknownItem = 697,
    UnlockedChest = 698,
    UnlockedTime = 699,
    UnpurifiedFreshWater = 700,
    UnpurifiedWaterInStill = 701,
    UsingBareHands = 702,
    Vulnerable = 703,
    WaitUntilFireCooledToGetWater = 704,
    Water = 705,
    WaterGathering = 706,
    WaterPutOutFire = 707,
    Weight = 708,
    WeightCapacity = 709,
    WellIsDry = 710,
    WellIsFull = 711,
    West = 712,
    WestNorthwest = 713,
    WestSouthwest = 714,
    WildGoatRefusedToBeMilked = 715,
    WillNotTrade = 716,
    With = 717,
    WithYouSee = 718,
    WorkingYourselfIntoExhaustion = 719,
    WorkingYourselfIntoExhaustionAndDrowning = 720,
    You = 721,
    YouApplied = 722,
    YouAte = 723,
    YouBeginResting = 724,
    YouCannotDoThatYet = 725,
    YouCooledLava = 726,
    YouCrafted = 727,
    YouDied = 728,
    YouDisassembled = 729,
    YouDismantled = 730,
    YouDrank = 731,
    YouDropTheTorch = 732,
    YouEquip = 733,
    YouFailedTo = 734,
    YouFailedToExtinguishedFireFully = 735,
    YouFailedToHeal = 736,
    YouFailedToHealOther = 737,
    YouFire = 738,
    YouGathered = 739,
    YouGatheredAndDropped = 740,
    YouHardenedCooledLava = 741,
    YouHarvested = 742,
    YouHarvestedAndDropped = 743,
    YouHaveAlreadyLearned = 744,
    YouHaveDied = 745,
    YouHaveEnabledDisabled = 746,
    YouHaveHealedOther = 747,
    YouHaveKilled = 748,
    YouHaveReleased = 749,
    YouHaveTamed = 750,
    YouNeedMoreCredit = 751,
    YouNoticeBecomeEnraged = 752,
    YouNoticeDying = 753,
    YouNoticeFertilityDecreasing = 754,
    YouNoticeFertilityIncreasing = 755,
    YouNoticeGrowing = 756,
    YouNoticeLavaCooling = 757,
    YouNoticeLavaHardening = 758,
    YouNoticePerish = 759,
    YouNoticeStumbleInjureItself = 760,
    YouNoticeTakeFromGround = 761,
    YouNoticeWoundsClosing = 762,
    YouNoticeZombieHorde = 763,
    YouOfferedToCreature = 764,
    YouOpen = 765,
    YouPacked = 766,
    YouPickedUp = 767,
    YouRefine = 768,
    YouRepair = 769,
    YourFist = 770,
    YourHands = 771,
    YourHighSkill = 772,
    YourInventory = 773,
    YourLowSkill = 774,
    YourModerateSkill = 775,
    YourRubbingNoEffect = 776,
    YouRub = 777,
    YouSalvaged = 778,
    YouSee = 779,
    YouSeeAnAberrant = 780,
    YouSeeASlimeCombine = 781,
    YouSeeDrop = 782,
    YouSeeEngulfFire = 783,
    YouSeeHelpingPlant = 784,
    YouSeeLay = 785,
    YouSeeLayingTrap = 786,
    YouSeeSpewLava = 787,
    YouSeeSpitAcid = 788,
    YouSeeSpringForth = 789,
    YouSeeSummon = 790,
    YouSeeSwampFlood = 791,
    YouSeeTrampling = 792,
    YouSeparate = 793,
    YouSetTheTrapOff = 794,
    YouStokeTheFireElemental = 795,
    YouThrew = 796,
    YouTilled = 797,
    YouUnequip = 798,
    YouUsed = 799
}
export default Message;
