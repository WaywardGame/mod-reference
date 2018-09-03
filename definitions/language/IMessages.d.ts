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
    AlreadyFullyRepaired = 10,
    AlreadyPreserved = 11,
    AlreadyWaterInStill = 12,
    AnUnknownItem = 13,
    AppearedNotEffectiveForGathering = 14,
    AppearsInjured = 15,
    AppearsToBeAberrant = 16,
    AppearsUninjured = 17,
    ArmorAppeared = 18,
    ArmorProtectedFromInjuryAgainst = 19,
    Attack = 20,
    AttemptedToDropAllIntoFire = 21,
    AttemptedToPlaceAllOnGround = 22,
    AttemptToTill = 23,
    Back = 24,
    BadlyBurnedLostHealth = 25,
    BarteringSkillsProvided = 26,
    BeenPoisoned = 27,
    BeginSleeping = 28,
    BeginUsingRaft = 29,
    Belt = 30,
    BleedingHasStopped = 31,
    BleedingProfusely = 32,
    BleedingToDeathLostHealth = 33,
    Blunt = 34,
    BookBlank = 35,
    BookContains = 36,
    BookCrumbles = 37,
    BookDiagrams = 38,
    BookEmpty = 39,
    BookNothing = 40,
    BookOpen = 41,
    BookScribbles = 42,
    BothEffectiveIneffective = 43,
    BothHands = 44,
    BrokeIntoPieces = 45,
    BrokenOnImpact = 46,
    BrokenWhileFiring = 47,
    Build = 48,
    Burned = 49,
    CannotAddAnyMoreFuel = 50,
    CannotBePerformedOverWater = 51,
    CannotBePreserved = 52,
    CannotBeReinforced = 53,
    CannotBeRepaired = 54,
    CannotBeTamed = 55,
    CannotBuildHere = 56,
    CannotDoThatHere = 57,
    CannotDropHere = 58,
    CannotEquipThatThere = 59,
    CannotFishFor = 60,
    CannotHere = 61,
    CannotInWater = 62,
    CannotLeave = 63,
    CannotPickupWhenFull = 64,
    CannotPickUpWhileLit = 65,
    CannotPickUpWithItemsInside = 66,
    CannotPlaceContainerInItself = 67,
    CannotPlaceHere = 68,
    CannotPlaceThatFromHere = 69,
    CannotPlaceThatHere = 70,
    CannotPlantHereTilled = 71,
    CannotRepairWhileLit = 72,
    CannotRestHere = 73,
    CannotSeeHere = 74,
    CannotSleepHere = 75,
    CannotStartFireHere = 76,
    CannotToTellTime = 77,
    CarryingTooMuchWeight = 78,
    CarvedUpCorpse = 79,
    CarveWithTool = 80,
    Carving = 81,
    CastYourLine = 82,
    Category = 83,
    CaughtFish = 84,
    ChatBanCommand = 85,
    ChatBannedCommand = 86,
    ChatCommandsCommand = 87,
    ChatPingCommand = 88,
    ChatPlayerMessage = 89,
    ChatPlayersCommand = 90,
    ChatServerMessage = 91,
    ChatUnbanCommand = 92,
    ChatUnknownCommand = 93,
    Chest = 94,
    ClearMessages = 95,
    Clockwise = 96,
    CloseContainer = 97,
    CloseDoor = 98,
    CollectObjectWithHands = 99,
    Consumed = 100,
    Container = 101,
    Cook = 102,
    Cooked = 103,
    CopySelectedText = 104,
    Corpse = 105,
    CorpseOf = 106,
    CouldNotDecipher = 107,
    Counterclockwise = 108,
    Craft = 109,
    Crafted = 110,
    Crafts = 111,
    CreatureAngered = 112,
    CreatureAppears = 113,
    CreatureAppeased = 114,
    CreatureIdolAttractedCreature = 115,
    CreatureResistanceVulnerableHigh = 116,
    CreatureResistanceVulnerableLow = 117,
    CreatureResistanceVulnerableModerate = 118,
    CreatureUntamed = 119,
    CuredYourPoison = 120,
    Cut = 121,
    DamageAppeared = 122,
    DamagedByPouring = 123,
    DayQuarter1 = 124,
    DayQuarter2 = 125,
    DayQuarter3 = 126,
    DayQuarter4 = 127,
    DealtNoDamageToYou = 128,
    DeathBy = 129,
    DeathByBleeding = 130,
    DeathByBurning = 131,
    DeathByConsumption = 132,
    DeathByDrowning = 133,
    DeathByExhaustion = 134,
    DeathByFistByPlayer = 135,
    DeathByPoison = 136,
    DeathBySteppingOn = 137,
    DeathByTrap = 138,
    DeathByWeaponByPlayer = 139,
    Decay = 140,
    DestroyedFromUse = 141,
    Dexterity = 142,
    DexterityIncreasing = 143,
    DidNotSeemToBeHurting = 144,
    Dig = 145,
    DigAway = 146,
    Digging = 147,
    DigWithHands = 148,
    Disabled = 149,
    Disassemble = 150,
    DisassembleAction = 151,
    Disassembling = 152,
    DiscoveredCaveEntrance = 153,
    DiscoveredInTheBottle = 154,
    DiscoveredLavaPassage = 155,
    Dismantle = 156,
    DismantleAction = 157,
    DismantleLabel = 158,
    Dismantling = 159,
    DismantlingRequires = 160,
    DoNotHaveTreasureMaps = 161,
    DoNotProduceAnyResources = 162,
    DoodadAppearsDamaged = 163,
    DoodadAppearsOnVergeOfBreaking = 164,
    DoodadAppearsUnscathed = 165,
    DoodadCauseStatus = 166,
    DoodadShowsSignsOfWear = 167,
    DrewSurroundings = 168,
    Drink = 169,
    Drop = 170,
    DropAll = 171,
    DropAllIntoFire = 172,
    DropAllOfSameQuality = 173,
    DroppedAllIntoDepths = 174,
    DroppedIntoDepths = 175,
    DroppedIntoFire = 176,
    DueToDehydration = 177,
    DueToStarvation = 178,
    DugTreasureOut = 179,
    DumpContentsOfContainerInInventory = 180,
    Durability = 181,
    DyingOfDehydration = 182,
    EarnedMilestone = 183,
    Effective = 184,
    Enabled = 185,
    EquipmentPreventedStatusEffects = 186,
    EquipTo = 187,
    ErrorHasOccured = 188,
    Expert = 189,
    ExtinguishedFire = 190,
    ExtinguishedTorch = 191,
    FailedToAddFuelToTorch = 192,
    FailedToCatchFish = 193,
    FailedToCauseDamage = 194,
    FailedToCauseYouDamage = 195,
    FailedToDrawMap = 196,
    FailedToIgniteTorch = 197,
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
    Ignite = 263,
    IgnitedTorch = 264,
    Ineffective = 265,
    InExactLocationOfTreasure = 266,
    InjuredFromTrap = 267,
    InNeedOfRepair = 268,
    Intermediate = 269,
    Inventory = 270,
    IsAtPercentHealth = 271,
    IsBarelyHurt = 272,
    IsInjured = 273,
    IsInTheWayOfPickingUp = 274,
    IsSeverelyDamaged = 275,
    IsUninjured = 276,
    ItContains = 277,
    ItsWeightCapacity = 278,
    JoinedAServer = 279,
    Jump = 280,
    Killed = 281,
    KnowledgeHasIncreased = 282,
    LabelAdditionalRequirements = 283,
    LabelAttackFromTactics = 284,
    LabelBase = 285,
    LabelCanIncrease = 286,
    LabelCraftingReputation = 287,
    LabelCraftingSkillReputation = 288,
    LabelDecay = 289,
    LabelDefense = 290,
    LabelDurability = 291,
    LabelEquip = 292,
    LabelGrouping = 293,
    LabelHave = 294,
    LabelLeftHandAttack = 295,
    LabelLevel = 296,
    LabelLightSourceWhenLit = 297,
    LabelOnCure = 298,
    LabelOnDrink = 299,
    LabelOnEat = 300,
    LabelOnEquip = 301,
    LabelOnHeal = 302,
    LabelOnOtherHeal = 303,
    LabelProtected = 304,
    LabelRange = 305,
    LabelRanged = 306,
    LabelRangedAttack = 307,
    LabelRangedDamage = 308,
    LabelReputationImpact = 309,
    LabelRequires = 310,
    LabelResists = 311,
    LabelRightHandAttack = 312,
    LabelSkill = 313,
    LabelStokeFireStrength = 314,
    LabelThrowDamageType = 315,
    LabelTrapDamage = 316,
    LabelUse = 317,
    LabelUses = 318,
    LabelVulnerabilities = 319,
    LabelWeight = 320,
    LabelWeightCapacity = 321,
    LabelWeightReduction = 322,
    LabelWorth = 323,
    LastPlaceYouLeftOff = 324,
    LearnedHowToCreate = 325,
    LeftHand = 326,
    LeftHandEquip = 327,
    Legs = 328,
    LikelyFailures = 329,
    LostHealth = 330,
    LostHunger = 331,
    LostStamina = 332,
    LostThirst = 333,
    MapNotOfThisArea = 334,
    MaterialsDestroyed = 335,
    Metabolism = 336,
    MetabolismSlowed = 337,
    MilestoneIsHidden = 338,
    MilestoneIsInvisible = 339,
    Milk = 340,
    Milking = 341,
    MissedWith = 342,
    MissedYouWith = 343,
    MoreInformation = 344,
    MoveAllOfSameQualityToFacingContainer = 345,
    MoveAllOfSameQualityToInventory = 346,
    MoveAllOfSameQualityToLastOpenedContainer = 347,
    MoveAllOfSameQualityToOpenedContainer = 348,
    MoveAllToFacingContainer = 349,
    MoveAllToInventory = 350,
    MoveAllToLastOpenedContainer = 351,
    MoveAllToOpenedContainer = 352,
    MovedItem = 353,
    MovedItems = 354,
    MoveOverTrapButDoNotSetOff = 355,
    MoveToFacingContainer = 356,
    MoveToInventory = 357,
    MoveToLastOpenedContainer = 358,
    MoveToOpenedContainer = 359,
    MultiplayerGamePaused = 360,
    MultiplayerGameResumed = 361,
    MultiplayerPlayerConnected = 362,
    MultiplayerPlayerDied = 363,
    MultiplayerPlayerDisconnected = 364,
    MultiplayerPlayerJoined = 365,
    MustBeEquippedToIgnite = 366,
    MustCastIntoWater = 367,
    Mysteriously = 368,
    Name = 369,
    NearlyBurnedEquipmentProtectedYou = 370,
    Neck = 371,
    NeedAShovelToDigTreasure = 372,
    NeedFishingNetForTreasure = 373,
    NeedFreeHandToShoot = 374,
    NeedToEquipToShoot = 375,
    NeedToStartTravelsOutside = 376,
    NeedWaterForRaft = 377,
    Negatively = 378,
    NightQuarter1 = 379,
    NightQuarter2 = 380,
    NightQuarter3 = 381,
    NightQuarter4 = 382,
    No = 383,
    NoAmmunitionForThatWeapon = 384,
    NoBlackPowderToFireWeapon = 385,
    NoFireToStokeWith = 386,
    NoFishAtLocation = 387,
    NoInkToDrawMap = 388,
    NoKindlingOrFuelItemsToStartFire = 389,
    NoKindlingToStartFire = 390,
    NoLongerFeelPainOfBeingBurned = 391,
    NoLongerHostile = 392,
    NoMoreRoomInContainer = 393,
    NoNeedToStokeFire = 394,
    NoRoomForImprovement = 395,
    NoRoomToDrop = 396,
    NotAvailable = 397,
    NotEnoughPurifiedWaterYet = 398,
    NotEnoughTreasureToReturn = 399,
    NotFacingCreatureToOfferThisTo = 400,
    NotFacingLockedObject = 401,
    NotFacingOtherToHeal = 402,
    NotFacingValidItem = 403,
    NothingHereToCarve = 404,
    NothingHereToFill = 405,
    NothingHereToGrasp = 406,
    NothingToGetFromThis = 407,
    NothingToHarvestFromThisGather = 408,
    NothingToSmother = 409,
    NothingUsefulToHarvestYet = 410,
    NoTinderToStartFire = 411,
    NotInRangeOfTreasure = 412,
    NotSuitableToPlant = 413,
    NoWaterInStill = 414,
    NoWhereNearTreasure = 415,
    NPCStartingDialog1 = 416,
    NPCStartingDialog2 = 417,
    NPCStartingDialog3 = 418,
    NPCStartingDialog4 = 419,
    NPCWelcome = 420,
    NPCWelcomeCredit = 421,
    NumberEight = 422,
    NumberFive = 423,
    NumberFour = 424,
    NumberNine = 425,
    NumberOne = 426,
    NumberSeven = 427,
    NumberSix = 428,
    NumberTen = 429,
    NumberThree = 430,
    NumberTwo = 431,
    ObjectIsLocked = 432,
    ObjectIsLockedAttemptToBreakIt = 433,
    Offer = 434,
    OfferAberrantFail = 435,
    OfferAberrantFailButTamed = 436,
    OpenDoor = 437,
    OverEatingLostStamina = 438,
    OverHydratingLostStamina = 439,
    Pack = 440,
    PaperTurnedToMush = 441,
    PartiallyDecodedMap = 442,
    PastExperiencesProvideBenefits = 443,
    PenultimateAnd = 444,
    PetCreature = 445,
    PickAway = 446,
    PickupAllItems = 447,
    PickupItem = 448,
    Piercing = 449,
    Place = 450,
    PlaceAllOnGround = 451,
    PlacedOnGround = 452,
    Plant = 453,
    PlantedInGround = 454,
    PlantGatheringWillDestroy = 455,
    PlantHasResourcesToGather = 456,
    PlantHasResourcesToHarvest = 457,
    PlantHighlyFertile = 458,
    Planting = 459,
    PlantIsFertile = 460,
    PlantIsNotFertile = 461,
    PlantNotReadyToHarvest = 462,
    PlantReadyToHarvest = 463,
    PlantReadyToHarvestNotMaximal = 464,
    Player = 465,
    Poisoned = 466,
    PoisonedLostHealth = 467,
    PoisonWorkedItsCourse = 468,
    Positively = 469,
    PouredOut = 470,
    PouredOutOnYourself = 471,
    PouredWaterIntoStill = 472,
    Preservation = 473,
    Preserve = 474,
    PreservedFood = 475,
    PurifiedWaterInStill = 476,
    Quality = 477,
    Recent = 478,
    ReduceLength = 479,
    RefusedToBeTamed = 480,
    Reinforce = 481,
    Reinforcement = 482,
    Release = 483,
    RemovedBlood = 484,
    RemoveFromQuickslot = 485,
    Repair = 486,
    RequiredForDisassembleLabel = 487,
    RequiredForDisassembly = 488,
    RequiresFireToBeLit = 489,
    RequiresYouFacingFireSource = 490,
    RequiresYouToBeAround = 491,
    Resistant = 492,
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
    YouSeeLay = 685,
    YouSeeLayingTrap = 686,
    YouSeeSpewLava = 687,
    YouSeeSpitAcid = 688,
    YouSeeSpringForth = 689,
    YouSeeSummon = 690,
    YouSeeSwampFlood = 691,
    YouSeparate = 692,
    YouSetTheTrapOff = 693,
    YouThrew = 694,
    YouTilled = 695,
    YouUnequip = 696,
    YouUsed = 697
}
