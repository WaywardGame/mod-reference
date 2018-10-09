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
    AppearsInjured = 16,
    AppearsToBeAberrant = 17,
    AppearsUninjured = 18,
    ArmorAppeared = 19,
    ArmorProtectedFromInjuryAgainst = 20,
    Attack = 21,
    AttemptedToDropAllIntoFire = 22,
    AttemptedToPlaceAllOnGround = 23,
    AttemptToTill = 24,
    Back = 25,
    BadlyBurnedLostHealth = 26,
    BarteringSkillsProvided = 27,
    BeenPoisoned = 28,
    BeginSleeping = 29,
    BeginUsingRaft = 30,
    Belt = 31,
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
    CarvedUpCorpse = 80,
    CarveWithTool = 81,
    Carving = 82,
    CastYourLine = 83,
    Category = 84,
    CaughtFish = 85,
    ChatBanCommand = 86,
    ChatBannedCommand = 87,
    ChatCommandsCommand = 88,
    ChatPingCommand = 89,
    ChatPlayerMessage = 90,
    ChatPlayersCommand = 91,
    ChatServerMessage = 92,
    ChatUnbanCommand = 93,
    ChatUnknownCommand = 94,
    Chest = 95,
    ClearMessages = 96,
    Clockwise = 97,
    CloseContainer = 98,
    CloseDoor = 99,
    CollectObjectWithHands = 100,
    Consumed = 101,
    Container = 102,
    Cook = 103,
    Cooked = 104,
    CopySelectedText = 105,
    CorpseOf = 106,
    CorpseOfNamed = 107,
    CouldNotDecipher = 108,
    Counterclockwise = 109,
    Craft = 110,
    Crafted = 111,
    Crafts = 112,
    CreatureAngered = 113,
    CreatureAppears = 114,
    CreatureAppeased = 115,
    CreatureIdolAttractedCreature = 116,
    CreatureResistanceVulnerableHigh = 117,
    CreatureResistanceVulnerableLow = 118,
    CreatureResistanceVulnerableModerate = 119,
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
    Effective = 185,
    Enabled = 186,
    EquipmentPreventedStatusEffects = 187,
    EquipTo = 188,
    ErrorHasOccured = 189,
    Expert = 190,
    ExtinguishedFire = 191,
    ExtinguishedTorch = 192,
    FailedToAddFuelToTorch = 193,
    FailedToCatchFish = 194,
    FailedToCauseDamage = 195,
    FailedToCauseYouDamage = 196,
    FailedToDrawMap = 197,
    FailedToIgniteTorch = 198,
    FailedToPickLock = 199,
    FailedToPlant = 200,
    FailedToPreserve = 201,
    FailedToReinforce = 202,
    FailedToRepair = 203,
    FailedToStartFire = 204,
    FailedToTame = 205,
    FailedToTransmogrify = 206,
    FarAwayFromTreasure = 207,
    Feet = 208,
    FeltBurningPainLostHealth = 209,
    FewMinutes = 210,
    Filled = 211,
    FilledFrom = 212,
    Fire = 213,
    FireAlmostExtinguished = 214,
    FireAroundYouIsWarm = 215,
    FiredIntoObstacle = 216,
    FireIsHealthy = 217,
    FireIsRaging = 218,
    FireIsStruggling = 219,
    FireOverflowed = 220,
    FireReducedToEmbers = 221,
    FireSource = 222,
    FullyDecodedMap = 223,
    GainedHealth = 224,
    GainedHunger = 225,
    GainedStamina = 226,
    GainedThirst = 227,
    GameHasBeenSavedIsTakingUpMB = 228,
    Gather = 229,
    GatherDestroy = 230,
    Gathering = 231,
    GatherWithHands = 232,
    GhostNoActions = 233,
    GhostOf = 234,
    GoatHasNoMilk = 235,
    GrabAll = 236,
    Group = 237,
    HackAway = 238,
    HandProtectionPreventedInjury = 239,
    Hands = 240,
    HandsNotEffectiveForDigging = 241,
    Harvest = 242,
    Harvesting = 243,
    HarvestWithHands = 244,
    HasBeenHurtByATrap = 245,
    HasDecayed = 246,
    HasHitYouForDamage = 247,
    HasNoEffect = 248,
    HasSetTrapOffNoDamage = 249,
    HasSplit = 250,
    Head = 251,
    Held = 252,
    Help = 253,
    HelpGrow = 254,
    Hints = 255,
    HintsDisabled = 256,
    HintsEnabled = 257,
    HitForDamage = 258,
    HitYouForDamage = 259,
    Hour = 260,
    Hours = 261,
    HurtHandsHittingWithoutWeapons = 262,
    HurtHandsWithNoTool = 263,
    Ignite = 264,
    IgnitedTorch = 265,
    Ineffective = 266,
    InExactLocationOfTreasure = 267,
    InjuredFromTrap = 268,
    InNeedOfRepair = 269,
    Intermediate = 270,
    Inventory = 271,
    IsAtPercentHealth = 272,
    IsBarelyHurt = 273,
    IsInjured = 274,
    IsInTheWayOfPickingUp = 275,
    IsSeverelyDamaged = 276,
    IsUninjured = 277,
    ItContains = 278,
    ItsWeightCapacity = 279,
    JoinedAServer = 280,
    Jump = 281,
    Killed = 282,
    KnowledgeHasIncreased = 283,
    LabelAdditionalRequirements = 284,
    LabelAttackFromTactics = 285,
    LabelBase = 286,
    LabelCanIncrease = 287,
    LabelCraftingReputation = 288,
    LabelCraftingSkillReputation = 289,
    LabelDecay = 290,
    LabelDefense = 291,
    LabelDurability = 292,
    LabelEquip = 293,
    LabelGrouping = 294,
    LabelHave = 295,
    LabelLeftHandAttack = 296,
    LabelLevel = 297,
    LabelLightSourceWhenLit = 298,
    LabelOnCure = 299,
    LabelOnDrink = 300,
    LabelOnEat = 301,
    LabelOnEquip = 302,
    LabelOnHeal = 303,
    LabelOnOtherHeal = 304,
    LabelProtected = 305,
    LabelRange = 306,
    LabelRanged = 307,
    LabelRangedAttack = 308,
    LabelRangedDamage = 309,
    LabelReputationImpact = 310,
    LabelRequires = 311,
    LabelResists = 312,
    LabelRightHandAttack = 313,
    LabelSkill = 314,
    LabelStokeFireStrength = 315,
    LabelThrowDamageType = 316,
    LabelTrapDamage = 317,
    LabelUse = 318,
    LabelUses = 319,
    LabelVulnerabilities = 320,
    LabelWeight = 321,
    LabelWeightCapacity = 322,
    LabelWeightReduction = 323,
    LabelWorth = 324,
    LastPlaceYouLeftOff = 325,
    LearnedHowToCreate = 326,
    LeftHand = 327,
    LeftHandEquip = 328,
    Legs = 329,
    LikelyFailures = 330,
    LostHealth = 331,
    LostHunger = 332,
    LostStamina = 333,
    LostThirst = 334,
    MapNotOfThisArea = 335,
    MaterialsDestroyed = 336,
    Metabolism = 337,
    MetabolismSlowed = 338,
    Milk = 339,
    Milking = 340,
    MissedWith = 341,
    MissedYouWith = 342,
    MoreInformation = 343,
    MoveAllOfSameQualityToFacingContainer = 344,
    MoveAllOfSameQualityToInventory = 345,
    MoveAllOfSameQualityToLastOpenedContainer = 346,
    MoveAllOfSameQualityToOpenedContainer = 347,
    MoveAllToFacingContainer = 348,
    MoveAllToInventory = 349,
    MoveAllToLastOpenedContainer = 350,
    MoveAllToOpenedContainer = 351,
    MovedItem = 352,
    MovedItems = 353,
    MoveOverTrapButDoNotSetOff = 354,
    MoveToFacingContainer = 355,
    MoveToInventory = 356,
    MoveToLastOpenedContainer = 357,
    MoveToOpenedContainer = 358,
    MultiplayerGamePaused = 359,
    MultiplayerGameResumed = 360,
    MultiplayerPlayerConnected = 361,
    MultiplayerPlayerDied = 362,
    MultiplayerPlayerDisconnected = 363,
    MultiplayerPlayerJoined = 364,
    MustBeEquippedToIgnite = 365,
    MustCastIntoWater = 366,
    Mysteriously = 367,
    Name = 368,
    NearlyBurnedEquipmentProtectedYou = 369,
    Neck = 370,
    NeedAShovelToDigTreasure = 371,
    NeedFishingNetForTreasure = 372,
    NeedFreeHandToShoot = 373,
    NeedToEquipToShoot = 374,
    NeedToStartTravelsOutside = 375,
    NeedWaterForRaft = 376,
    Negatively = 377,
    NightQuarter1 = 378,
    NightQuarter2 = 379,
    NightQuarter3 = 380,
    NightQuarter4 = 381,
    NoAmmunitionForThatWeapon = 382,
    NoBlackPowderToFireWeapon = 383,
    NoFireToStokeWith = 384,
    NoFishAtLocation = 385,
    NoInkToDrawMap = 386,
    NoKindlingOrFuelItemsToStartFire = 387,
    NoKindlingToStartFire = 388,
    NoLongerFeelPainOfBeingBurned = 389,
    NoLongerHostile = 390,
    NoMoreRoomInContainer = 391,
    NoNeedToStokeFire = 392,
    NoRoomForImprovement = 393,
    NoRoomToDrop = 394,
    NotAvailable = 395,
    NotEnoughPurifiedWaterYet = 396,
    NotEnoughTreasureToReturn = 397,
    NotFacingCreatureToOfferThisTo = 398,
    NotFacingLockedObject = 399,
    NotFacingOtherToHeal = 400,
    NotFacingValidItem = 401,
    NothingHereToCarve = 402,
    NothingHereToFill = 403,
    NothingHereToGrasp = 404,
    NothingToGetFromThis = 405,
    NothingToHarvestFromThisGather = 406,
    NothingToSmother = 407,
    NothingUsefulToHarvestYet = 408,
    NoTinderToStartFire = 409,
    NotInRangeOfTreasure = 410,
    NotSuitableToPlant = 411,
    NoWaterInStill = 412,
    NoWhereNearTreasure = 413,
    NPCStartingDialog1 = 414,
    NPCStartingDialog2 = 415,
    NPCStartingDialog3 = 416,
    NPCStartingDialog4 = 417,
    NPCWelcome = 418,
    NPCWelcomeCredit = 419,
    NumberEight = 420,
    NumberFive = 421,
    NumberFour = 422,
    NumberNine = 423,
    NumberOne = 424,
    NumberSeven = 425,
    NumberSix = 426,
    NumberTen = 427,
    NumberThree = 428,
    NumberTwo = 429,
    ObjectIsLocked = 430,
    ObjectIsLockedAttemptToBreakIt = 431,
    Offer = 432,
    OfferAberrantFail = 433,
    OfferAberrantFailButTamed = 434,
    OpenDoor = 435,
    OverEatingLostStamina = 436,
    OverHydratingLostStamina = 437,
    Pack = 438,
    PaperTurnedToMush = 439,
    PartiallyDecodedMap = 440,
    PastExperiencesProvideBenefits = 441,
    PenultimateAnd = 442,
    PetCreature = 443,
    PickAway = 444,
    PickupAllItems = 445,
    PickupItem = 446,
    Piercing = 447,
    Place = 448,
    PlaceAllOnGround = 449,
    PlacedOnGround = 450,
    Plant = 451,
    PlantedInGround = 452,
    PlantGatheringWillDestroy = 453,
    PlantHasResourcesToGather = 454,
    PlantHasResourcesToHarvest = 455,
    PlantHighlyFertile = 456,
    Planting = 457,
    PlantIsFertile = 458,
    PlantIsNotFertile = 459,
    PlantNotReadyToHarvest = 460,
    PlantReadyToHarvest = 461,
    PlantReadyToHarvestNotMaximal = 462,
    Player = 463,
    Poisoned = 464,
    PoisonedLostHealth = 465,
    PoisonWorkedItsCourse = 466,
    Positively = 467,
    PouredOut = 468,
    PouredOutOnYourself = 469,
    PouredWaterIntoStill = 470,
    Preservation = 471,
    Preserve = 472,
    PreservedFood = 473,
    PurifiedWaterInStill = 474,
    Quality = 475,
    Recent = 476,
    ReduceLength = 477,
    RefusedToBeTamed = 478,
    Reinforce = 479,
    Reinforcement = 480,
    Release = 481,
    RemovedBlood = 482,
    RemoveFromQuickslot = 483,
    Repair = 484,
    RequiredForDisassembleLabel = 485,
    RequiredForDisassembly = 486,
    RequiresFireToBeLit = 487,
    RequiresYouFacingFireSource = 488,
    RequiresYouToBeAround = 489,
    Resistant = 490,
    ResistOrVuln = 491,
    ResistOrVulnAll = 492,
    Rest = 493,
    Rested = 494,
    Resting = 495,
    RestingOnGroundNotEffective = 496,
    RestInterrupted = 497,
    RestInterruptedDamage = 498,
    RestInterruptedLoudNoise = 499,
    RestInterruptedPain = 500,
    RestInterruptedStirring = 501,
    RestLongTime = 502,
    RestModerateTime = 503,
    RestOnGround = 504,
    RestShortTime = 505,
    RestTime = 506,
    ReturnedToCivilization = 507,
    ReturningToCivilizationSetOffAgain = 508,
    ReturnsToLife = 509,
    RightHand = 510,
    RightHandEquip = 511,
    ScrollProvidedNoUsefulInsight = 512,
    SeaweedFromWater = 513,
    SeemsHurt = 514,
    SeemsQuiteInjured = 515,
    SeemsToHaveDrawnEnergy = 516,
    SeemsUnharmed = 517,
    SetTrapOffButNoDamage = 518,
    SetUp = 519,
    ShadowInTheWater = 520,
    Simple = 521,
    Skill = 522,
    SkillHasRaised = 523,
    Skills = 524,
    Slashing = 525,
    Sleep = 526,
    Sleeping = 527,
    Slept = 528,
    SlitherSuckerConstricts = 529,
    SlitherSuckerJumpedOnHead = 530,
    Some = 531,
    SomethingInTheWayOf = 532,
    SomethingInTheWayOfCarveFirst = 533,
    SomethingInTheWayOfFire = 534,
    SomethingInTheWayOfFishing = 535,
    SomethingInTheWayOfPerforming = 536,
    SomethingInTheWayOfPlacing = 537,
    SomethingInTheWayOfPlanting = 538,
    SomethingInWayOfClosingDoor = 539,
    SoothedTheirBurnInjuries = 540,
    SoothedYourBurnInjuries = 541,
    Sort = 542,
    SortedByCategory = 543,
    SortedByDecay = 544,
    SortedByDurability = 545,
    SortedByGroup = 546,
    SortedByName = 547,
    SortedByQuality = 548,
    SortedByRecent = 549,
    SortedBySkill = 550,
    SortedByUnlockedTime = 551,
    SortedByWeight = 552,
    StaminaIsFull = 553,
    StartedFire = 554,
    StartTravelInWater = 555,
    StarvingToDeath = 556,
    SteppingOnHasInjuredYouForDamage = 557,
    StillHasNoWaterToPurify = 558,
    StirredUpClawWorm = 559,
    StirredUpCreature = 560,
    StoppedYourBleeding = 561,
    StopUsingRaft = 562,
    Strength = 563,
    StrengthIncreasing = 564,
    SummonedGuardiansByDiggingTreasure = 565,
    SunNotBrightEnoughToStartFire = 566,
    TakenFromGroundBecomeTamed = 567,
    Tame = 568,
    TamedAppearsAngered = 569,
    TamedAppearsContended = 570,
    TamedAppearsHappy = 571,
    TamedAppearsUpset = 572,
    TamedCreature = 573,
    TeleportBlocked = 574,
    Teleported = 575,
    ThanksBuying = 576,
    ThanksSelling = 577,
    TheirFist = 578,
    ThereIsNoSunToStartFire = 579,
    ThereIsNothingToMilk = 580,
    ThisCannotBeMilked = 581,
    Throw = 582,
    ThrownIntoDepths = 583,
    ThrownIntoObstacle = 584,
    Till = 585,
    Tilling = 586,
    TimeIs = 587,
    TimeIsDawn = 588,
    TimeIsDaytime = 589,
    TimeIsDusk = 590,
    TimeIsNighttime = 591,
    TimeIsSunrise = 592,
    TimeIsSunset = 593,
    ToDamageAChest = 594,
    ToFight = 595,
    TooDamaged = 596,
    TooExhaustedToJump = 597,
    TradeBarterCreditForItem = 598,
    TradeItemForBarterCredit = 599,
    TradingWith = 600,
    TrampledFire = 601,
    TrampledIntoGround = 602,
    TrampleIntoGround = 603,
    Trampling = 604,
    Transmogrification = 605,
    Transmogrified = 606,
    TrapStoppedYou = 607,
    TravelToFarOffLands = 608,
    TreasureIsBlocked = 609,
    True = 610,
    UnEquip = 611,
    UnEquipAll = 612,
    Unknown = 613,
    UnknownItem = 614,
    UnlockedChest = 615,
    UnlockedTime = 616,
    UnpurifiedWaterInStill = 617,
    UsingBareHands = 618,
    Vulnerable = 619,
    WaitUntilFireCooledToGetWater = 620,
    WalkingDistanceOfTreasure = 621,
    Water = 622,
    WaterGathering = 623,
    WaterPutOutFire = 624,
    Weight = 625,
    WeightCapacity = 626,
    WildGoatRefusedToBeMilked = 627,
    With = 628,
    WorkingYourselfIntoExhaustion = 629,
    WorkingYourselfIntoExhaustionAndDrowning = 630,
    YouAte = 631,
    YouBeginResting = 632,
    YouCannotDoThatYet = 633,
    YouCooledLava = 634,
    YouCrafted = 635,
    YouDied = 636,
    YouDisassembled = 637,
    YouDismantled = 638,
    YouDrank = 639,
    YouEquip = 640,
    YouFailedTo = 641,
    YouFailedToExtinguishedFireFully = 642,
    YouFailedToHeal = 643,
    YouFailedToHealOther = 644,
    YouFire = 645,
    YouGathered = 646,
    YouGatheredAndDropped = 647,
    YouHardenedCooledLava = 648,
    YouHarvested = 649,
    YouHarvestedAndDropped = 650,
    YouHaveDied = 651,
    YouHaveEnabledDisabled = 652,
    YouHaveHealedOther = 653,
    YouHaveKilled = 654,
    YouHaveReleased = 655,
    YouHaveTamed = 656,
    YouNeedMoreCredit = 657,
    YouNoticeBecomeEnraged = 658,
    YouNoticeDying = 659,
    YouNoticeFertilityDecreasing = 660,
    YouNoticeFertilityIncreasing = 661,
    YouNoticeGrowing = 662,
    YouNoticeLavaCooling = 663,
    YouNoticeLavaHardening = 664,
    YouNoticePerish = 665,
    YouNoticeStumbleInjureItself = 666,
    YouNoticeTakeFromGround = 667,
    YouNoticeWoundsClosing = 668,
    YouNoticeZombieHorde = 669,
    YouOfferedToCreature = 670,
    YouOpen = 671,
    YouPacked = 672,
    YouPickedUp = 673,
    YouRepair = 674,
    YourFist = 675,
    YourHands = 676,
    YourInventory = 677,
    YourRubbingNoEffect = 678,
    YouRub = 679,
    YouSalvaged = 680,
    YouSee = 681,
    YouSeeAnAberrant = 682,
    YouSeeDrop = 683,
    YouSeeEngulfFire = 684,
    YouSeeHelpingPlant = 685,
    YouSeeLay = 686,
    YouSeeLayingTrap = 687,
    YouSeeSpewLava = 688,
    YouSeeSpitAcid = 689,
    YouSeeSpringForth = 690,
    YouSeeSummon = 691,
    YouSeeSwampFlood = 692,
    YouSeeTrampling = 693,
    YouSeparate = 694,
    YouSetTheTrapOff = 695,
    YouThrew = 696,
    YouTilled = 697,
    YouUnequip = 698,
    YouUsed = 699
}
export default Message;
