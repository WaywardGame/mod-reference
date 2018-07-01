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
    Skill = 6
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
    ChatServerMessage = 91,
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
    IsInTheWayOfPickingUp = 272,
    IsSeverelyDamaged = 273,
    IsUninjured = 274,
    ItContains = 275,
    ItsWeightCapacity = 276,
    JoinedAServer = 277,
    Jump = 278,
    Killed = 279,
    KnowledgeHasIncreased = 280,
    LabelAdditionalRequirements = 281,
    LabelAttackFromTactics = 282,
    LabelBase = 283,
    LabelCanIncrease = 284,
    LabelCraftingReputation = 285,
    LabelDecay = 286,
    LabelDefense = 287,
    LabelDurability = 288,
    LabelEquip = 289,
    LabelGrouping = 290,
    LabelHave = 291,
    LabelLeftHandAttack = 292,
    LabelLevel = 293,
    LabelLightSourceWhenLit = 294,
    LabelOnCure = 295,
    LabelOnDrink = 296,
    LabelOnEat = 297,
    LabelOnEquip = 298,
    LabelOnHeal = 299,
    LabelOnOtherHeal = 300,
    LabelProtected = 301,
    LabelRange = 302,
    LabelRanged = 303,
    LabelRangedAttack = 304,
    LabelRangedDamage = 305,
    LabelReputationImpact = 306,
    LabelRequires = 307,
    LabelResists = 308,
    LabelRightHandAttack = 309,
    LabelSkill = 310,
    LabelStokeFireStrength = 311,
    LabelThrowDamageType = 312,
    LabelTrapDamage = 313,
    LabelUse = 314,
    LabelUses = 315,
    LabelVulnerabilities = 316,
    LabelWeight = 317,
    LabelWeightCapacity = 318,
    LabelWeightReduction = 319,
    LabelWorth = 320,
    LastPlaceYouLeftOff = 321,
    LearnedHowToCreate = 322,
    LeftHand = 323,
    LeftHandEquip = 324,
    Legs = 325,
    LikelyFailures = 326,
    LostHealth = 327,
    LostHunger = 328,
    LostStamina = 329,
    LostThirst = 330,
    MapNotOfThisArea = 331,
    MaterialsDestroyed = 332,
    Metabolism = 333,
    MetabolismSlowed = 334,
    MilestoneIsHidden = 335,
    MilestoneIsInvisible = 336,
    Milk = 337,
    Milking = 338,
    MissedWith = 339,
    MissedYouWith = 340,
    MoreInformation = 341,
    MoveAllOfSameQualityToFacingContainer = 342,
    MoveAllOfSameQualityToInventory = 343,
    MoveAllOfSameQualityToLastOpenedContainer = 344,
    MoveAllOfSameQualityToOpenedContainer = 345,
    MoveAllToFacingContainer = 346,
    MoveAllToInventory = 347,
    MoveAllToLastOpenedContainer = 348,
    MoveAllToOpenedContainer = 349,
    MoveOverTrapButDoNotSetOff = 350,
    MoveToFacingContainer = 351,
    MoveToInventory = 352,
    MoveToLastOpenedContainer = 353,
    MoveToOpenedContainer = 354,
    MultiplayerGamePaused = 355,
    MultiplayerGameResumed = 356,
    MultiplayerPlayerConnected = 357,
    MultiplayerPlayerDied = 358,
    MultiplayerPlayerDisconnected = 359,
    MultiplayerPlayerJoined = 360,
    MustBeEquippedToIgnite = 361,
    MustCastIntoWater = 362,
    Mysteriously = 363,
    Name = 364,
    NearlyBurnedEquipmentProtectedYou = 365,
    Neck = 366,
    NeedAShovelToDigTreasure = 367,
    NeedFishingNetForTreasure = 368,
    NeedFreeHandToShoot = 369,
    NeedToEquipToShoot = 370,
    NeedToStartTravelsOutside = 371,
    NeedWaterForRaft = 372,
    Negatively = 373,
    NightQuarter1 = 374,
    NightQuarter2 = 375,
    NightQuarter3 = 376,
    NightQuarter4 = 377,
    No = 378,
    NoAmmunitionForThatWeapon = 379,
    NoBlackPowderToFireWeapon = 380,
    NoFireToStokeWith = 381,
    NoFishAtLocation = 382,
    NoInkToDrawMap = 383,
    NoKindlingOrFuelItemsToStartFire = 384,
    NoKindlingToStartFire = 385,
    NoLongerFeelPainOfBeingBurned = 386,
    NoMoreRoomInContainer = 387,
    NoNeedToStokeFire = 388,
    NoRoomForImprovement = 389,
    NoRoomToDrop = 390,
    NotAvailable = 391,
    NotEnoughPurifiedWaterYet = 392,
    NotEnoughTreasureToReturn = 393,
    NotFacingCreatureToOfferThisTo = 394,
    NotFacingLockedObject = 395,
    NotFacingOtherToHeal = 396,
    NotFacingValidItem = 397,
    NothingHereToCarve = 398,
    NothingHereToFill = 399,
    NothingHereToGrasp = 400,
    NothingToGetFromThis = 401,
    NothingToHarvestFromThisGather = 402,
    NothingToSmother = 403,
    NothingUsefulToHarvestYet = 404,
    NoTinderToStartFire = 405,
    NotInRangeOfTreasure = 406,
    NotSuitableToPlant = 407,
    NoWaterInStill = 408,
    NoWhereNearTreasure = 409,
    NPCStartingDialog1 = 410,
    NPCStartingDialog2 = 411,
    NPCStartingDialog3 = 412,
    NPCStartingDialog4 = 413,
    NPCWelcome = 414,
    NPCWelcomeCredit = 415,
    NumberEight = 416,
    NumberFive = 417,
    NumberFour = 418,
    NumberNine = 419,
    NumberOne = 420,
    NumberSeven = 421,
    NumberSix = 422,
    NumberTen = 423,
    NumberThree = 424,
    NumberTwo = 425,
    ObjectIsLocked = 426,
    ObjectIsLockedAttemptToBreakIt = 427,
    Offer = 428,
    OfferAberrantFail = 429,
    OfferAberrantFailButTamed = 430,
    OpenDoor = 431,
    OverEatingLostStamina = 432,
    OverHydratingLostStamina = 433,
    Pack = 434,
    PaperTurnedToMush = 435,
    PartiallyDecodedMap = 436,
    PastExperiencesProvideBenefits = 437,
    PenultimateAnd = 438,
    PetCreature = 439,
    PickAway = 440,
    PickupAllItems = 441,
    PickupItem = 442,
    Piercing = 443,
    Place = 444,
    PlaceAllOnGround = 445,
    PlacedOnGround = 446,
    Plant = 447,
    PlantedInGround = 448,
    PlantGatheringWillDestroy = 449,
    PlantHasResourcesToGather = 450,
    PlantHasResourcesToHarvest = 451,
    PlantHighlyFertile = 452,
    Planting = 453,
    PlantIsFertile = 454,
    PlantIsNotFertile = 455,
    PlantNotReadyToHarvest = 456,
    PlantReadyToHarvest = 457,
    PlantReadyToHarvestNotMaximal = 458,
    Player = 459,
    Poisoned = 460,
    PoisonedLostHealth = 461,
    PoisonWorkedItsCourse = 462,
    Positively = 463,
    PouredOut = 464,
    PouredOutOnYourself = 465,
    PouredWaterIntoStill = 466,
    Preservation = 467,
    Preserve = 468,
    PreservedFood = 469,
    PurifiedWaterInStill = 470,
    Quality = 471,
    Recent = 472,
    ReduceLength = 473,
    RefusedToBeTamed = 474,
    Reinforce = 475,
    Reinforcement = 476,
    Release = 477,
    RemovedBlood = 478,
    RemoveFromQuickslot = 479,
    Repair = 480,
    RequiredForDisassembleLabel = 481,
    RequiredForDisassembly = 482,
    RequiresFireToBeLit = 483,
    RequiresYouFacingFireSource = 484,
    RequiresYouToBeAround = 485,
    Resistant = 486,
    Rest = 487,
    Rested = 488,
    Resting = 489,
    RestingOnGroundNotEffective = 490,
    RestInterrupted = 491,
    RestInterruptedDamage = 492,
    RestInterruptedLoudNoise = 493,
    RestInterruptedPain = 494,
    RestInterruptedStirring = 495,
    RestLongTime = 496,
    RestModerateTime = 497,
    RestOnGround = 498,
    RestShortTime = 499,
    RestTime = 500,
    ReturnedToCivilization = 501,
    ReturningToCivilizationSetOffAgain = 502,
    ReturnsToLife = 503,
    RightHand = 504,
    RightHandEquip = 505,
    ScrollProvidedNoUsefulInsight = 506,
    SeaweedFromWater = 507,
    SeemsHurt = 508,
    SeemsQuiteInjured = 509,
    SeemsToHaveDrawnEnergy = 510,
    SeemsUnharmed = 511,
    SetTrapOffButNoDamage = 512,
    SetUp = 513,
    ShadowInTheWater = 514,
    Simple = 515,
    Skill = 516,
    SkillHasRaised = 517,
    Skills = 518,
    Slashing = 519,
    Sleep = 520,
    Sleeping = 521,
    Slept = 522,
    SlitherSuckerConstricts = 523,
    SlitherSuckerJumpedOnHead = 524,
    Some = 525,
    SomethingInTheWayOf = 526,
    SomethingInTheWayOfCarveFirst = 527,
    SomethingInTheWayOfFire = 528,
    SomethingInTheWayOfFishing = 529,
    SomethingInTheWayOfPerforming = 530,
    SomethingInTheWayOfPlacing = 531,
    SomethingInTheWayOfPlanting = 532,
    SomethingInWayOfClosingDoor = 533,
    SoothedYourBurnInjuries = 534,
    Sort = 535,
    SortedByCategory = 536,
    SortedByDecay = 537,
    SortedByDurability = 538,
    SortedByGroup = 539,
    SortedByName = 540,
    SortedByQuality = 541,
    SortedByRecent = 542,
    SortedBySkill = 543,
    SortedByUnlockedTime = 544,
    SortedByWeight = 545,
    StaminaIsFull = 546,
    StartedFire = 547,
    StartTravelInWater = 548,
    StarvingToDeath = 549,
    SteppingOnHasInjuredYouForDamage = 550,
    StillHasNoWaterToPurify = 551,
    StirredUpClawWorm = 552,
    StirredUpCreature = 553,
    StoppedYourBleeding = 554,
    StopUsingRaft = 555,
    Strength = 556,
    StrengthIncreasing = 557,
    SummonedGuardiansByDiggingTreasure = 558,
    SunNotBrightEnoughToStartFire = 559,
    TakenFromGroundBecomeTamed = 560,
    Tame = 561,
    TamedAppearsAngered = 562,
    TamedAppearsContended = 563,
    TamedAppearsHappy = 564,
    TamedAppearsUpset = 565,
    TamedCreature = 566,
    TeleportBlocked = 567,
    Teleported = 568,
    ThanksBuying = 569,
    ThanksSelling = 570,
    TheirFist = 571,
    ThereIsNoSunToStartFire = 572,
    ThereIsNothingToMilk = 573,
    ThisCannotBeMilked = 574,
    Throw = 575,
    ThrownIntoDepths = 576,
    ThrownIntoObstacle = 577,
    Till = 578,
    Tilling = 579,
    TimeIs = 580,
    TimeIsDawn = 581,
    TimeIsDaytime = 582,
    TimeIsDusk = 583,
    TimeIsNighttime = 584,
    TimeIsSunrise = 585,
    TimeIsSunset = 586,
    TooDamaged = 587,
    TooExhaustedToJump = 588,
    TradeBarterCreditForItem = 589,
    TradeItemForBarterCredit = 590,
    TradingWith = 591,
    TrampledFire = 592,
    TrampledIntoGround = 593,
    TrampleIntoGround = 594,
    Trampling = 595,
    Transmogrification = 596,
    Transmogrified = 597,
    TrapStoppedYou = 598,
    TravelToFarOffLands = 599,
    TreasureIsBlocked = 600,
    True = 601,
    UnEquip = 602,
    UnEquipAll = 603,
    Unknown = 604,
    UnknownItem = 605,
    UnlockedChest = 606,
    UnlockedTime = 607,
    UnpurifiedWaterInStill = 608,
    UsingBareFistsToFight = 609,
    UsingBareHands = 610,
    Vulnerable = 611,
    WaitUntilFireCooledToGetWater = 612,
    WalkingDistanceOfTreasure = 613,
    Water = 614,
    WaterGathering = 615,
    WaterPutOutFire = 616,
    Weight = 617,
    WeightCapacity = 618,
    WildGoatRefusedToBeMilked = 619,
    With = 620,
    WorkingYourselfIntoExhaustion = 621,
    WorkingYourselfIntoExhaustionAndDrowning = 622,
    YouAte = 623,
    YouBeginResting = 624,
    YouCannotDoThatYet = 625,
    YouCooledLava = 626,
    YouCrafted = 627,
    YouDied = 628,
    YouDisassembled = 629,
    YouDismantled = 630,
    YouDrank = 631,
    YouEquip = 632,
    YouFailedTo = 633,
    YouFailedToExtinguishedFireFully = 634,
    YouFailedToHeal = 635,
    YouFailedToHealOther = 636,
    YouFire = 637,
    YouGathered = 638,
    YouGatheredAndDropped = 639,
    YouHardenedCooledLava = 640,
    YouHarvested = 641,
    YouHarvestedAndDropped = 642,
    YouHaveDied = 643,
    YouHaveEnabledDisabled = 644,
    YouHaveHealedOther = 645,
    YouHaveKilled = 646,
    YouHaveReleased = 647,
    YouHaveTamed = 648,
    YouNeedMoreCredit = 649,
    YouNoticeBecomeEnraged = 650,
    YouNoticeDying = 651,
    YouNoticeFertilityDecreasing = 652,
    YouNoticeFertilityIncreasing = 653,
    YouNoticeGrowing = 654,
    YouNoticeLavaCooling = 655,
    YouNoticeLavaHardening = 656,
    YouNoticePerish = 657,
    YouNoticeStumbleInjureItself = 658,
    YouNoticeTakeFromGround = 659,
    YouNoticeWoundsClosing = 660,
    YouNoticeZombieHorde = 661,
    YouOfferedToCreature = 662,
    YouOpen = 663,
    YouPacked = 664,
    YouPickedUp = 665,
    YouRepair = 666,
    YourFist = 667,
    YourHands = 668,
    YourRubbingNoEffect = 669,
    YouRub = 670,
    YouSalvaged = 671,
    YouSee = 672,
    YouSeeAnAberrant = 673,
    YouSeeDrop = 674,
    YouSeeEngulfFire = 675,
    YouSeeLay = 676,
    YouSeeLayingTrap = 677,
    YouSeeSpewLava = 678,
    YouSeeSpitAcid = 679,
    YouSeeSpringForth = 680,
    YouSeeSummon = 681,
    YouSeeSwampFlood = 682,
    YouSeparate = 683,
    YouSetTheTrapOff = 684,
    YouThrew = 685,
    YouTilled = 686,
    YouUnequip = 687,
    YouUsed = 688
}
