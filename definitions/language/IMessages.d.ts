export interface IMessagePack {
    message?: Message | string;
    type?: MessageType;
    args?: string | number | any[];
}
export declare module IMessagePack {
    function getArgs(messagePack: IMessagePack): any[];
}
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
    AboutHours = 1,
    AddedFuelToFire = 2,
    AddedFuelToTorch = 3,
    AddFuel = 4,
    AddToQuickslot = 5,
    Advanced = 6,
    All = 7,
    AllEquipmentUnEquipped = 8,
    AlreadyDesalinatedWaterInStill = 9,
    AlreadyFullHealth = 10,
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
    AwakeToFindYourself = 25,
    Back = 26,
    BadlyBurnedLostHealth = 27,
    BarteringSkillsProvided = 28,
    BeenPoisoned = 29,
    BeginSleeping = 30,
    BeginUsingRaft = 31,
    Belt = 32,
    BleedingHasStopped = 33,
    BleedingProfusely = 34,
    BleedingToDeathLostHealth = 35,
    Blunt = 36,
    BookBlank = 37,
    BookContains = 38,
    BookCrumbles = 39,
    BookDiagrams = 40,
    BookEmpty = 41,
    BookNothing = 42,
    BookOpen = 43,
    BookScribbles = 44,
    BothEffectiveIneffective = 45,
    BothHands = 46,
    BrokeIntoPieces = 47,
    BrokenOnImpact = 48,
    BrokenWhileFiring = 49,
    Build = 50,
    Burned = 51,
    CannotAddAnyMoreFuel = 52,
    CannotBePerformedOverWater = 53,
    CannotBePreserved = 54,
    CannotBeReinforced = 55,
    CannotBeRepaired = 56,
    CannotBeTamed = 57,
    CannotBuildHere = 58,
    CannotDoThatHere = 59,
    CannotDropHere = 60,
    CannotEquipThatThere = 61,
    CannotFishFor = 62,
    CannotHere = 63,
    CannotInWater = 64,
    CannotLeave = 65,
    CannotPickupWhenFull = 66,
    CannotPickUpWhileLit = 67,
    CannotPickUpWithItemsInside = 68,
    CannotPlaceContainerInItself = 69,
    CannotPlaceHere = 70,
    CannotPlaceThatFromHere = 71,
    CannotPlaceThatHere = 72,
    CannotPlantHereTilled = 73,
    CannotRepairWhileLit = 74,
    CannotRestHere = 75,
    CannotSeeHere = 76,
    CannotSleepHere = 77,
    CannotStartFireHere = 78,
    CannotToTellTime = 79,
    CarryingTooMuchWeight = 80,
    CarvedUpCorpse = 81,
    CarveWithTool = 82,
    Carving = 83,
    CastYourLine = 84,
    Category = 85,
    CaughtFish = 86,
    ChatBanCommand = 87,
    ChatBannedCommand = 88,
    ChatCommandsCommand = 89,
    ChatPingCommand = 90,
    ChatPlayerMessage = 91,
    ChatPlayersCommand = 92,
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
    Corpse = 106,
    CorpseOf = 107,
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
    FailedToPickLock = 198,
    FailedToPlant = 199,
    FailedToPreserve = 200,
    FailedToReinforce = 201,
    FailedToRepair = 202,
    FailedToStartFire = 203,
    FailedToTame = 204,
    FailedToTransmogrify = 205,
    FarAwayFromTreasure = 206,
    Feet = 207,
    FeltBurningPainLostHealth = 208,
    FewMinutes = 209,
    Filled = 210,
    FilledFrom = 211,
    Fire = 212,
    FireAlmostExtinguished = 213,
    FireAroundYouIsWarm = 214,
    FiredIntoObstacle = 215,
    FireIsHealthy = 216,
    FireIsRaging = 217,
    FireIsStruggling = 218,
    FireOverflowed = 219,
    FireReducedToEmbers = 220,
    FireSource = 221,
    FullyDecodedMap = 222,
    GainedHealth = 223,
    GainedHunger = 224,
    GainedStamina = 225,
    GainedThirst = 226,
    GameHasBeenSavedIsTakingUpMB = 227,
    Gather = 228,
    GatherDestroy = 229,
    Gathering = 230,
    GatherWithHands = 231,
    GhostNoActions = 232,
    GhostOf = 233,
    GoatHasNoMilk = 234,
    GrabAll = 235,
    Group = 236,
    HackAway = 237,
    HandProtectionPreventedInjury = 238,
    Hands = 239,
    HandsNotEffectiveForDigging = 240,
    Harvest = 241,
    Harvesting = 242,
    HarvestWithHands = 243,
    HasBeenHurtByATrap = 244,
    HasDecayed = 245,
    HasHitYouForDamage = 246,
    HasNoEffect = 247,
    HasSetTrapOffNoDamage = 248,
    HasSplit = 249,
    Head = 250,
    Held = 251,
    Help = 252,
    HelpGrow = 253,
    Hints = 254,
    HintsDisabled = 255,
    HintsEnabled = 256,
    HitForDamage = 257,
    HitYouForDamage = 258,
    Hour = 259,
    Hours = 260,
    HurtHandsHittingWithoutWeapons = 261,
    HurtHandsWithNoTool = 262,
    Ineffective = 263,
    InExactLocationOfTreasure = 264,
    InjuredFromTrap = 265,
    InNeedOfRepair = 266,
    Intermediate = 267,
    Inventory = 268,
    IsAtPercentHealth = 269,
    IsBarelyHurt = 270,
    IsInjured = 271,
    IsSeverelyDamaged = 272,
    IsUninjured = 273,
    ItContains = 274,
    ItsWeightCapacity = 275,
    JoinedAServer = 276,
    Jump = 277,
    Killed = 278,
    KnowledgeHasIncreased = 279,
    LabelAdditionalRequirements = 280,
    LabelAttackFromTactics = 281,
    LabelBase = 282,
    LabelCanIncrease = 283,
    LabelCraftingReputation = 284,
    LabelDecay = 285,
    LabelDefense = 286,
    LabelDurability = 287,
    LabelEquip = 288,
    LabelGrouping = 289,
    LabelHave = 290,
    LabelLeftHandAttack = 291,
    LabelLevel = 292,
    LabelLightSourceWhenLit = 293,
    LabelOnCure = 294,
    LabelOnDrink = 295,
    LabelOnEat = 296,
    LabelOnEquip = 297,
    LabelOnHeal = 298,
    LabelOnOtherHeal = 299,
    LabelProtected = 300,
    LabelRange = 301,
    LabelRanged = 302,
    LabelRangedAttack = 303,
    LabelRangedDamage = 304,
    LabelReputationImpact = 305,
    LabelRequires = 306,
    LabelResists = 307,
    LabelRightHandAttack = 308,
    LabelSkill = 309,
    LabelStokeFireStrength = 310,
    LabelThrowDamageType = 311,
    LabelTrapDamage = 312,
    LabelUse = 313,
    LabelUses = 314,
    LabelVulnerabilities = 315,
    LabelWeight = 316,
    LabelWeightCapacity = 317,
    LabelWeightReduction = 318,
    LabelWorth = 319,
    LastPlaceYouLeftOff = 320,
    LearnedHowToCreate = 321,
    LeftHand = 322,
    LeftHandEquip = 323,
    Legs = 324,
    LikelyFailures = 325,
    LostHealth = 326,
    LostHunger = 327,
    LostStamina = 328,
    LostThirst = 329,
    MapNotOfThisArea = 330,
    MaterialsDestroyed = 331,
    Metabolism = 332,
    MetabolismSlowed = 333,
    MilestoneIsHidden = 334,
    MilestoneIsInvisible = 335,
    Milk = 336,
    Milking = 337,
    MissedWith = 338,
    MissedYouWith = 339,
    MoreInformation = 340,
    MoveAllOfSameQualityToFacingContainer = 341,
    MoveAllOfSameQualityToInventory = 342,
    MoveAllOfSameQualityToLastOpenedContainer = 343,
    MoveAllOfSameQualityToOpenedContainer = 344,
    MoveAllToFacingContainer = 345,
    MoveAllToInventory = 346,
    MoveAllToLastOpenedContainer = 347,
    MoveAllToOpenedContainer = 348,
    MoveOverTrapButDoNotSetOff = 349,
    MoveToFacingContainer = 350,
    MoveToInventory = 351,
    MoveToLastOpenedContainer = 352,
    MoveToOpenedContainer = 353,
    MultiplayerGamePaused = 354,
    MultiplayerGameResumed = 355,
    MultiplayerPlayerConnected = 356,
    MultiplayerPlayerDied = 357,
    MultiplayerPlayerDisconnected = 358,
    MultiplayerPlayerJoined = 359,
    MustBeEquippedToIgnite = 360,
    MustCastIntoWater = 361,
    Mysteriously = 362,
    Name = 363,
    NearlyBurnedEquipmentProtectedYou = 364,
    Neck = 365,
    NeedAShovelToDigTreasure = 366,
    NeedFishingNetForTreasure = 367,
    NeedFreeHandToShoot = 368,
    NeedToEquipToShoot = 369,
    NeedToStartTravelsOutside = 370,
    NeedWaterForRaft = 371,
    Negatively = 372,
    NightQuarter1 = 373,
    NightQuarter2 = 374,
    NightQuarter3 = 375,
    NightQuarter4 = 376,
    No = 377,
    NoAmmunitionForThatWeapon = 378,
    NoBlackPowderToFireWeapon = 379,
    NoFireToStokeWith = 380,
    NoFishAtLocation = 381,
    NoInkToDrawMap = 382,
    NoKindlingOrFuelItemsToStartFire = 383,
    NoKindlingToStartFire = 384,
    NoLongerFeelPainOfBeingBurned = 385,
    NoMoreRoomInContainer = 386,
    NoNeedToStokeFire = 387,
    NoRoomForImprovement = 388,
    NoRoomToDrop = 389,
    NotAvailable = 390,
    NotEnoughPurifiedWaterYet = 391,
    NotEnoughTreasureToReturn = 392,
    NotFacingCreatureToOfferThisTo = 393,
    NotFacingLockedObject = 394,
    NotFacingOtherToHeal = 395,
    NotFacingValidItem = 396,
    NothingHereToCarve = 397,
    NothingHereToFill = 398,
    NothingHereToGrasp = 399,
    NothingToGetFromThis = 400,
    NothingToHarvestFromThisGather = 401,
    NothingToSmother = 402,
    NothingUsefulToHarvestYet = 403,
    NoTinderToStartFire = 404,
    NotInRangeOfTreasure = 405,
    NotSuitableToPlant = 406,
    NoWaterInStill = 407,
    NoWhereNearTreasure = 408,
    NPCStartingDialog1 = 409,
    NPCStartingDialog2 = 410,
    NPCStartingDialog3 = 411,
    NPCStartingDialog4 = 412,
    NPCWelcome = 413,
    NPCWelcomeCredit = 414,
    NumberEight = 415,
    NumberFive = 416,
    NumberFour = 417,
    NumberNine = 418,
    NumberOne = 419,
    NumberSeven = 420,
    NumberSix = 421,
    NumberTen = 422,
    NumberThree = 423,
    NumberTwo = 424,
    ObjectIsLocked = 425,
    ObjectIsLockedAttemptToBreakIt = 426,
    Offer = 427,
    OfferAberrantFail = 428,
    OpenDoor = 429,
    OverEatingLostStamina = 430,
    OverHydratingLostStamina = 431,
    Pack = 432,
    PaperTurnedToMush = 433,
    PartiallyDecodedMap = 434,
    PastExperiencesProvideBenefits = 435,
    PenultimateAnd = 436,
    PetCreature = 437,
    PickAway = 438,
    PickupAllItems = 439,
    PickupItem = 440,
    Piercing = 441,
    Place = 442,
    PlaceAllOnGround = 443,
    PlacedOnGround = 444,
    Plant = 445,
    PlantedInGround = 446,
    PlantGatheringWillDestroy = 447,
    PlantHasResourcesToGather = 448,
    PlantHasResourcesToHarvest = 449,
    PlantHighlyFertile = 450,
    PlantIsFertile = 451,
    PlantIsNotFertile = 452,
    PlantNotReadyToHarvest = 453,
    PlantReadyToHarvest = 454,
    PlantReadyToHarvestNotMaximal = 455,
    Player = 456,
    Poisoned = 457,
    PoisonedLostHealth = 458,
    PoisonWorkedItsCourse = 459,
    Positively = 460,
    PouredOut = 461,
    PouredOutOnYourself = 462,
    PouredWaterIntoStill = 463,
    Preservation = 464,
    Preserve = 465,
    PreservedFood = 466,
    PurifiedWaterInStill = 467,
    Quality = 468,
    Recent = 469,
    ReduceLength = 470,
    RefusedToBeTamed = 471,
    Reinforce = 472,
    Reinforcement = 473,
    Release = 474,
    RemovedBlood = 475,
    RemoveFromQuickslot = 476,
    Repair = 477,
    RequiredForDisassembleLabel = 478,
    RequiredForDisassembly = 479,
    RequiresFireToBeLit = 480,
    RequiresYouFacingFireSource = 481,
    RequiresYouToBeAround = 482,
    Resistant = 483,
    Rest = 484,
    Rested = 485,
    Resting = 486,
    RestingOnGroundNotEffective = 487,
    RestInterrupted = 488,
    RestInterruptedDamage = 489,
    RestInterruptedLoudNoise = 490,
    RestInterruptedPain = 491,
    RestInterruptedStirring = 492,
    RestLongTime = 493,
    RestModerateTime = 494,
    RestOnGround = 495,
    RestShortTime = 496,
    RestTime = 497,
    ReturnedToCivilization = 498,
    ReturningToCivilizationSetOffAgain = 499,
    ReturnsToLife = 500,
    RightHand = 501,
    RightHandEquip = 502,
    ScrollProvidedNoUsefulInsight = 503,
    SeaweedFromWater = 504,
    SeemsHurt = 505,
    SeemsQuiteInjured = 506,
    SeemsToHaveDrawnEnergy = 507,
    SeemsUnharmed = 508,
    SetTrapOffButNoDamage = 509,
    SetUp = 510,
    ShadowInTheWater = 511,
    Simple = 512,
    Skill = 513,
    SkillHasRaised = 514,
    Skills = 515,
    Slashing = 516,
    Sleep = 517,
    Sleeping = 518,
    Slept = 519,
    SlitherSuckerConstricts = 520,
    SlitherSuckerJumpedOnHead = 521,
    Some = 522,
    SomethingInTheWayOf = 523,
    SomethingInTheWayOfCarveFirst = 524,
    SomethingInTheWayOfFire = 525,
    SomethingInTheWayOfFishing = 526,
    SomethingInTheWayOfPerforming = 527,
    SomethingInTheWayOfPlacing = 528,
    SomethingInTheWayOfPlanting = 529,
    SomethingInWayOfClosingDoor = 530,
    SoothedYourBurnInjuries = 531,
    Sort = 532,
    SortedByCategory = 533,
    SortedByDecay = 534,
    SortedByDurability = 535,
    SortedByGroup = 536,
    SortedByName = 537,
    SortedByQuality = 538,
    SortedByRecent = 539,
    SortedBySkill = 540,
    SortedByUnlockedTime = 541,
    SortedByWeight = 542,
    StaminaIsFull = 543,
    StartedFire = 544,
    StartTravelInWater = 545,
    StarvingToDeath = 546,
    SteppingOnHasInjuredYouForDamage = 547,
    StillHasNoWaterToPurify = 548,
    StirredUpClawWorm = 549,
    StirredUpCreature = 550,
    StoppedYourBleeding = 551,
    StopUsingRaft = 552,
    Strength = 553,
    StrengthIncreasing = 554,
    SummonedGuardiansByDiggingTreasure = 555,
    SunNotBrightEnoughToStartFire = 556,
    TakenFromGroundBecomeTamed = 557,
    Tame = 558,
    TamedAppearsAngered = 559,
    TamedAppearsContended = 560,
    TamedAppearsHappy = 561,
    TamedAppearsUpset = 562,
    TamedCreature = 563,
    TeleportBlocked = 564,
    Teleported = 565,
    ThanksBuying = 566,
    ThanksSelling = 567,
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
    TradeBarterCreditForItem = 586,
    TradeItemForBarterCredit = 587,
    TradingWith = 588,
    TrampledFire = 589,
    TrampledIntoGround = 590,
    TrampleIntoGround = 591,
    Trampling = 592,
    Transmogrification = 593,
    Transmogrified = 594,
    TrapStoppedYou = 595,
    TravelToFarOffLands = 596,
    TreasureIsBlocked = 597,
    True = 598,
    UnEquip = 599,
    UnEquipAll = 600,
    Unknown = 601,
    UnknownItem = 602,
    UnlockedChest = 603,
    UnlockedTime = 604,
    UnpurifiedWaterInStill = 605,
    UsingBareFistsToFight = 606,
    UsingBareHands = 607,
    Vulnerable = 608,
    WaitUntilFireCooledToGetWater = 609,
    WalkingDistanceOfTreasure = 610,
    Water = 611,
    WaterGathering = 612,
    WaterPutOutFire = 613,
    Weight = 614,
    WeightCapacity = 615,
    WildGoatRefusedToBeMilked = 616,
    With = 617,
    WorkingYourselfIntoExhaustion = 618,
    WorkingYourselfIntoExhaustionAndDrowning = 619,
    YouAte = 620,
    YouBeginResting = 621,
    YouCannotDoThatYet = 622,
    YouCooledLava = 623,
    YouCrafted = 624,
    YouDied = 625,
    YouDisassembled = 626,
    YouDismantled = 627,
    YouDrank = 628,
    YouEquip = 629,
    YouFailedTo = 630,
    YouFailedToExtinguishedFireFully = 631,
    YouFailedToHeal = 632,
    YouFailedToHealOther = 633,
    YouFire = 634,
    YouGathered = 635,
    YouGatheredAndDropped = 636,
    YouHardenedCooledLava = 637,
    YouHarvested = 638,
    YouHarvestedAndDropped = 639,
    YouHaveDied = 640,
    YouHaveEnabledDisabled = 641,
    YouHaveHealedOther = 642,
    YouHaveKilled = 643,
    YouHaveReleased = 644,
    YouHaveTamed = 645,
    YouNeedMoreCredit = 646,
    YouNoticeBecomeEnraged = 647,
    YouNoticeDying = 648,
    YouNoticeFertilityDecreasing = 649,
    YouNoticeFertilityIncreasing = 650,
    YouNoticeGrowing = 651,
    YouNoticeLavaCooling = 652,
    YouNoticeLavaHardening = 653,
    YouNoticePerish = 654,
    YouNoticeStumbleInjureItself = 655,
    YouNoticeTakeFromGround = 656,
    YouNoticeWoundsClosing = 657,
    YouNoticeZombieHorde = 658,
    YouOfferedToCreature = 659,
    YouOpen = 660,
    YouPacked = 661,
    YouPickedUp = 662,
    YouRepair = 663,
    YourFist = 664,
    YourHands = 665,
    YourRubbingNoEffect = 666,
    YouRub = 667,
    YouSalvaged = 668,
    YouSee = 669,
    YouSeeAnAberrant = 670,
    YouSeeDrop = 671,
    YouSeeEngulfFire = 672,
    YouSeeLay = 673,
    YouSeeLayingTrap = 674,
    YouSeeSpewLava = 675,
    YouSeeSpitAcid = 676,
    YouSeeSpringForth = 677,
    YouSeeSummon = 678,
    YouSeeSwampFlood = 679,
    YouSeparate = 680,
    YouSetTheTrapOff = 681,
    YouThrew = 682,
    YouTilled = 683,
    YouUnequip = 684,
    YouUsed = 685,
}
