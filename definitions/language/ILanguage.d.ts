import { ActionType, BookType, CreatureType, DoodadType, DoodadTypeGroup, ItemType, ItemTypeGroup, OnEquipType, SkillType, TerrainType } from "Enums";
import { Message } from "language/IMessages";
import { MilestoneType } from "player/IMilestone";
import { TileEventType } from "tile/ITileEvent";
import { HintType } from "ui/IHint";
/**
 * Choices for interrupts
 */
export declare enum InterruptChoice {
    Cancel = 0,
    LocalFile = 1,
    No = 2,
    Ok = 3,
    Rejoin = 4,
    Rename = 5,
    Retry = 6,
    SteamWorkshop = 7,
    Yes = 8,
    ContinueAnyway = 9,
    OpenSaveFolderAndQuit = 10
}
/**
 * Ui messages that are on elements that don't change
 */
export declare enum UiTranslation {
    GameActionGather = 0,
    GameQualityExceptional = 1,
    GameQualityRemarkable = 2,
    GameQualityLegendary = 3,
    GameDamageTypeBlunt = 4,
    GameDamageTypeSlashing = 5,
    GameDamageTypePiercing = 6,
    GameDamageTypeFire = 7,
    GameDialogMessagesName = 8,
    GameDialogNotesName = 9,
    GameDialogNotesNoteTime = 10,
    GameDialogNotesNoteNumber = 11,
    GameDialogNotesNoteLockedTitle = 12,
    GameDialogNotesNoteLockedDescription = 13,
    GameDialogNotesLinkId = 14,
    GameStatsPercentage = 15,
    GameStatsStatAttack = 16,
    GameStatsStatGeneric = 17,
    GameStatsStatGenericWithMax = 18,
    GameStatsStatbar = 19,
    GameStatsStatHealthTooltip = 20,
    GameStatsStatStaminaTooltip = 21,
    GameStatsStatHungerTooltip = 22,
    GameStatsStatThirstTooltip = 23,
    GameStatsStatReputationTooltipDifficulty = 24,
    GameStatsStatReputationTooltipDifficultyEasy = 25,
    GameStatsStatReputationTooltipDifficultyHard = 26,
    GameStatsStatReputationTooltipDifficultyInsane = 27,
    GameStatsStatReputationTooltipDifficultyMedium = 28,
    GameStatsStatReputationTooltipDifficultySimple = 29,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 30,
    GameStatsStatReputationTooltipDifficultyVeryHard = 31,
    GameStatsStatReputationTooltipBenignity = 32,
    GameStatsStatReputationTooltipMalignity = 33,
    GameStatsStatReputationTooltipScore = 34,
    GameStatsStatReputationTooltipTurn = 35,
    GameStatsStatReputationTooltipTicks = 36,
    GameStatsStatWeightTooltip = 37,
    GameStatsStatAttackTooltipTactics = 38,
    GameStatsStatAttackTooltipLeftHand = 39,
    GameStatsStatAttackTooltipRightHand = 40,
    GameStatsStatDefenseTooltipBase = 41,
    GameStatsStatDefenseTooltipBlunt = 42,
    GameStatsStatDefenseTooltipParrying = 43,
    GameStatsStatDefenseTooltipFire = 44,
    GameStatsStatDefenseTooltipPiercing = 45,
    GameStatsStatDefenseTooltipSlashing = 46,
    GameStatsStatusEffectBleedingTooltip = 47,
    GameStatsStatusEffectBurnedTooltip = 48,
    GameStatsStatusEffectPoisonedTooltip = 49,
    GameQuadrantElementStats = 50,
    GameQuadrantElementMenuBar = 51,
    GameQuadrantElementQuickslots = 52,
    GameQuadrantElementMessages = 53,
    GameQuadrantElementContextMenuMoveTo = 54,
    GameQuadrantElementContextMenuSwitchWith = 55,
    GameQuadrantNone = 56,
    GameQuadrantLeft = 57,
    GameQuadrantTopLeft = 58,
    GameQuadrantTop = 59,
    GameQuadrantTopRight = 60,
    GameQuadrantRight = 61,
    GameQuadrantBottomRight = 62,
    GameQuadrantBottom = 63,
    GameQuadrantBottomLeft = 64,
    GameLegendaryAttack = 65,
    GameLegendaryDefense = 66,
    GameLegendaryIllumination = 67,
    GameLegendaryWeightCapacity = 68,
    GameLegendaryItemWeight = 69,
    GameLegendaryStat = 70,
    GameLegendarySkill = 71,
    GameLegendaryBenignity = 72,
    GameLegendaryMalignity = 73,
    GameLegendaryRange = 74,
    GameLegendaryUseBenefits = 75,
    GameLegendaryWorth = 76,
    GameLegendaryStatHealth = 77,
    GameLegendaryStatStamina = 78,
    GameLegendaryStatMetabolism = 79,
    GameItemBarterCredit = 80,
    GameItemBarterCreditTrade = 81,
    GameInterruptItemMayBeDestroyedInCraft = 82,
    GameInterruptItemMayBeDestroyedInCraftDescription = 83,
    GameInterruptItemMayBeDestroyedOnUse = 84,
    GameInterruptItemMayBeDestroyedOnUseDescription = 85,
    GameInterruptLoadingQuitting = 86,
    GameInterruptLoadingQuittingDescription = 87,
    GameInterruptLoadingSaving = 88,
    GameInterruptLoadingSavingDescription = 89,
    GameInterruptReleaseCreature = 90,
    GameInterruptReleaseCreatureDescription = 91,
    GameInterruptRenameCreature = 92,
    GameInterruptRenameCreatureDescription = 93,
    GameInterruptRenameDoodad = 94,
    GameInterruptRenameDoodadDescription = 95,
    GameInterruptRenameItem = 96,
    GameInterruptRenameItemDescription = 97,
    GameInterruptReturnToTitleScreen = 98,
    GameInterruptReturnToTitleScreenDailyChallenge = 99,
    GameInterruptReturnToTitleScreenDailyChallengeDescription = 100,
    GameInterruptReturnToTitleScreenDescription = 101,
    GameInterruptReturnToTitleScreenDead = 102,
    GameInterruptReturnToTitleScreenDeadDescription = 103,
    GameInterruptLoadingWorld = 104,
    GameInterruptLoadingWorldDescription = 105,
    GameInterruptLoadingGeneratingWorld = 106,
    GameInterruptLoadingGeneratingWorldDescription = 107,
    GameInterruptLoadingFinalizingWorld = 108,
    GameInterruptLoadingFinalizingWorldDescription = 109,
    GameInterruptSailAwayEnd = 110,
    GameInterruptSailAwayEndDescription = 111,
    GameInterruptSailAwayReturnable = 112,
    GameInterruptSailAwayReturnableDescription = 113,
    GameInterruptTravelAway = 114,
    GameInterruptTravelAwayDescription = 115,
    GameInterruptLoadingResting = 116,
    GameInterruptLoadingRestingDescription = 117,
    GameInterruptLoadingSleeping = 118,
    GameInterruptLoadingSleepingDescription = 119,
    GameInterruptLoadingTraveling = 120,
    GameInterruptLoadingTravelingDescription = 121,
    GameInterruptLoadingLostGLContext = 122,
    GameInterruptLoadingAutoSaving = 123,
    GameInterruptLoadingAutoSavingDescription = 124,
    GameInterruptLoadingLostGLContextDescription = 125,
    GameInterruptLoadingMods = 126,
    GameInterruptLoadingModsDescription = 127,
    GameInterruptLoadingMultiplayerPlayerConnecting = 128,
    GameInterruptLoadingMultiplayerSyncing = 129,
    GameInterruptDangerousStep = 130,
    GameInterruptDangerousStepDescription = 131,
    GameInterruptSaveFailure = 132,
    GameInterruptSaveFailureDescription = 133,
    GameInterruptLoadFailure = 134,
    GameInterruptLoadFailureDescription = 135,
    GameInterruptDesalinationNoNeed = 136,
    GameInterruptDesalinationNoNeedDescription = 137,
    GameInterruptConfirmationActionOnFire = 138,
    GameInterruptConfirmationActionOnFireDescription = 139,
    GameInterruptConfirmationDestroyOnGather = 140,
    GameInterruptConfirmationDestroyOnGatherDescription = 141,
    GameInterruptLoadingGame = 142,
    GameInterruptLoadingGameDescription = 143,
    GameInterruptLoadingSprites = 144,
    GameInterruptLoadingSpritesDescription = 145,
    GameInterruptMultiplayerSynchronizing = 146,
    GameInterruptMultiplayerSynchronizingDescription = 147,
    GameInterruptNoSaveOnDeath = 148,
    GameInterruptNoSaveOnDeathDescription = 149,
    GameMenuBarButtonTooltipBindable = 150,
    GameMenuBarButtonTooltipMenu = 151,
    GameMenuBarButtonTooltipSave = 152,
    GameMenuBarButtonTooltipNotes = 153,
    GameMenuBarButtonTooltipMilestones = 154,
    GameMenuBarButtonTooltipMessages = 155,
    GameMenuBarButtonTooltipHelp = 156,
    GameMenuBarButtonTooltipQuickSettings = 157,
    GameMenuBarButtonTooltipActions = 158,
    GameMenuBarButtonTooltipInventory = 159,
    GameMenuBarButtonTooltipCrafting = 160,
    GameMenuBarButtonTooltipEquipment = 161,
    GameMenuBarButtonTooltipSkills = 162,
    GameMessagesButtonSend = 163,
    GameMessagesContextMenuShowAsDialog = 164,
    GameMessagesContextMenuClear = 165,
    GameMessagesFilter = 166,
    GameMessagesFilterAll = 167,
    GameMessagesFilterGame = 168,
    GameMessagesFilterChat = 169,
    GameMessagesNewNote = 170,
    GameMultiplayerInterruptBanned = 171,
    GameMultiplayerInterruptConnecting = 172,
    GameMultiplayerInterruptConnectingDescription = 173,
    GameMultiplayerInterruptFailedToConnect = 174,
    GameMultiplayerInterruptFailedToLoadMods = 175,
    GameMultiplayerInterruptKicked = 176,
    GameMultiplayerInterruptLostConnection = 177,
    GameMultiplayerInterruptServerShutdown = 178,
    GameMultiplayerInterruptSynchronizationError = 179,
    GameMultiplayerInterruptSynchronizationErrorDescription = 180,
    GameMultiplayerInterruptUnableToJoinGame = 181,
    GameMultiplayerInterruptUnableToJoinGameBuildMismatch = 182,
    GameMultiplayerInterruptUnableToJoinGameDuplicateIdentifier = 183,
    GameMultiplayerInterruptUnableToJoinGameFriendsOnly = 184,
    GameMultiplayerInterruptUnableToJoinGameServerFull = 185,
    GameMultiplayerInterruptUnableToJoinGameUnknownError = 186,
    GameMultiplayerInterruptUnableToJoinGameVersionMismatch = 187,
    MenuAboutTitle = 188,
    MenuAboutDescription = 189,
    MenuAboutGameDescription = 190,
    MenuAboutSectionTeam = 191,
    MenuAboutTeamMemberResponsibilities = 192,
    MenuAboutTeamMemberResponsibilityProgramming = 193,
    MenuAboutTeamMemberResponsibilityDesign = 194,
    MenuAboutTeamMemberResponsibilityWeb = 195,
    MenuAboutTeamMemberResponsibilityArt = 196,
    MenuAboutTeamMemberResponsibilityPR = 197,
    MenuAboutTeamMemberResponsibilityUX = 198,
    MenuAboutTeamMemberResponsibilityMusic = 199,
    MenuAboutTeamMemberName = 200,
    MenuAboutTeamMemberNickname = 201,
    MenuAboutSectionContributors = 202,
    MenuAboutSectionSpecialThanks = 203,
    MenuAboutTextSpecialThanksTestorsAndDonators = 204,
    MenuAboutSectionLibraries = 205,
    MenuAboutSectionLibrariesDescription = 206,
    MenuChangelogTitle = 207,
    MenuChangelogDescription = 208,
    MenuChangelogSectionBalance = 209,
    MenuChangelogSectionBugFixes = 210,
    MenuChangelogSectionImprovements = 211,
    MenuChangelogSectionMod = 212,
    MenuChangelogSectionModding = 213,
    MenuChangelogSectionNew = 214,
    MenuChangelogSectionTechnical = 215,
    MenuChangelogHeadingFailedLoad = 216,
    MenuChangelogHeadingChangeCount = 217,
    MenuChangelogInterruptLoadingChangelog = 218,
    MenuChangelogInterruptLoadingChangelogDescription = 219,
    MenuCharacterCreationButtonRandomizeName = 220,
    MenuCharacterCreationButtonExportTooltip = 221,
    MenuCharacterCreationButtonImportTooltip = 222,
    MenuCharacterCreationButtonStartGame = 223,
    MenuCharacterCreationButtonJoinGame = 224,
    MenuCharacterCreationDescription = 225,
    MenuCharacterCreationHeadingHairColor = 226,
    MenuCharacterCreationHeadingHairStyle = 227,
    MenuCharacterCreationHeadingSkinTone = 228,
    MenuCharacterCreationLabelName = 229,
    MenuCharacterCreationTitle = 230,
    MenuCharacterCreationInterruptImportCharacterFailure = 231,
    MenuCharacterCreationInterruptImportCharacterFailureDescription = 232,
    MenuCharacterCreationButtonRotateLeftTooltip = 233,
    MenuCharacterCreationButtonRotateRightTooltip = 234,
    MenuCharacterCreationButtonRandomizeTooltip = 235,
    MenuCharacterSelectionButtonNewCharacter = 236,
    MenuCharacterSelectionCharacterSortLastUse = 237,
    MenuCharacterSelectionCharacterSortName = 238,
    MenuCharacterSelectionCharacterSortUseCount = 239,
    MenuCharacterSelectionDescription = 240,
    MenuCharacterSelectionHeadingNoCharacters = 241,
    MenuCharacterSelectionTitle = 242,
    MenuCharacterSelectionLabelLastUse = 243,
    MenuCharacterSelectionLabelUseCount = 244,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 245,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 246,
    MenuCharacterSelectionInterruptDeleteCharacter = 247,
    MenuFriendsDescription = 248,
    MenuFriendsHeadingNotPlayingWayward = 249,
    MenuFriendsHeadingPlayingWayward = 250,
    MenuFriendsSectionNoFriendsOnline = 251,
    MenuFriendsSectionNoFriendsWayward = 252,
    MenuFriendsTitle = 253,
    MenuFriendsUnableToLoad = 254,
    MenuFriendsButtonJoinDedicatedServer = 255,
    MenuGameEndTitleDead = 256,
    MenuGameEndTitleWon = 257,
    MenuGameEndDescriptionDead1 = 258,
    MenuGameEndDescriptionDead2 = 259,
    MenuGameEndDescriptionDead3 = 260,
    MenuGameEndDescriptionWin1 = 261,
    MenuGameEndDescriptionWin2 = 262,
    MenuGameEndDescriptionWin3 = 263,
    MenuGameEndShareFacebook = 264,
    MenuGameEndShareTwitter = 265,
    MenuHelpTitle = 266,
    MenuHelpDescription = 267,
    MenuHighscoresTitle = 268,
    MenuHighscoresDescription = 269,
    MenuHighscoresDifficultyFilterHardcore = 270,
    MenuHighscoresDifficultyFilterCasual = 271,
    MenuHighscoresDifficultyFilterDailyChallenge = 272,
    MenuHighscoresDifficultyFilterAll = 273,
    MenuHighscoresSortScore = 274,
    MenuHighscoresSortSaveName = 275,
    MenuHighscoresSortRecency = 276,
    MenuHighscoresHighscoreLabelDifficulty = 277,
    MenuHighscoresHighscoreLabelTurns = 278,
    MenuHighscoresHighscoreLabelScore = 279,
    MenuHighscoresHighscoreLabelPlace = 280,
    MenuHighscoresHighscoreLabelDate = 281,
    MenuHighscoresHighscoreLabelDeathBy = 282,
    MenuHighscoresHighscoreTitle = 283,
    MenuHighscoresCharacterNameUnknown = 284,
    MenuLoadGameButtonNewGame = 285,
    MenuLoadGameButtonNewGameButtonImportTooltip = 286,
    MenuLoadGameDescription = 287,
    MenuLoadGameSaveButtonDeleteTooltip = 288,
    MenuLoadGameSaveButtonEditNameTooltip = 289,
    MenuLoadGameSaveButtonExportTooltip = 290,
    MenuLoadGameSaveSortCreatedTime = 291,
    MenuLoadGameSaveSortName = 292,
    MenuLoadGameSaveSortSaveTime = 293,
    MenuLoadGameSaveSortTurnCount = 294,
    MenuLoadGameSaveTooltipLabelCreatedTime = 295,
    MenuLoadGameSaveTooltipLabelSaveTime = 296,
    MenuLoadGameSaveTooltipLabelScore = 297,
    MenuLoadGameSaveTooltipLabelSeed = 298,
    MenuLoadGameSaveTooltipLabelTurns = 299,
    MenuLoadGameSaveTooltipLabelMods = 300,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 301,
    MenuLoadGameSaveTooltipMod = 302,
    MenuLoadGameSlotsRemaining = 303,
    MenuLoadGameTitle = 304,
    MenuLoadGameInterruptDeleteSave = 305,
    MenuLoadGameInterruptDeleteSaveDescription = 306,
    MenuLoadGameInterruptLoadingExportingSave = 307,
    MenuLoadGameInterruptLoadingExportingSaveDescription = 308,
    MenuLoadGameInterruptLoadingImportingSave = 309,
    MenuLoadGameInterruptLoadingImportingSaveDescription = 310,
    MenuLoadGameInterruptImportSaveFailure = 311,
    MenuLoadGameInterruptImportSaveFailureDescription = 312,
    MenuLoadGameInterruptExportType = 313,
    MenuLoadGameInterruptExportTypeDescription = 314,
    MenuLoadGameInterruptPublishingSave = 315,
    MenuLoadGameInterruptPublishingSaveDescription = 316,
    MenuLoadGameInterruptMissingMod = 317,
    MenuLoadGameInterruptMissingModDescription = 318,
    MenuLoadGameInterruptMissingModDescriptionLabelModsMissing = 319,
    MenuLoadGameInterruptMissingModDescriptionLabelModsDisabled = 320,
    MenuLoadGameInterruptLoading = 321,
    MenuLoadGameInterruptLoadingDescription = 322,
    MenuMainButtonAbout = 323,
    MenuMainButtonChangelog = 324,
    MenuMainButtonContinueGame = 325,
    MenuMainButtonFriends = 326,
    MenuMainButtonFriendsWithCount = 327,
    MenuMainButtonHighscores = 328,
    MenuMainButtonLoadGame = 329,
    MenuMainButtonMods = 330,
    MenuMainButtonNewGame = 331,
    MenuMainButtonNews = 332,
    MenuMainButtonOptions = 333,
    MenuMainInterruptLoadingNews = 334,
    MenuMainInterruptLoadingNewsDescription = 335,
    MenuMainInterruptLoadingChangelog = 336,
    MenuMainInterruptLoadingChangelogDescription = 337,
    MenuMainInterruptWelcomeToVersion = 338,
    MenuMainInterruptWelcomeToVersionDescription = 339,
    MenuMainInterruptOldVersionWarning = 340,
    MenuMainInterruptOldVersionWarningDescription = 341,
    MenuModsButtonDisableAll = 342,
    MenuModsButtonEnableAll = 343,
    MenuModsButtonModdingGuide = 344,
    MenuModsButtonOpenFolder = 345,
    MenuModsButtonOpenWorkshop = 346,
    MenuModsDescription = 347,
    MenuModsHeadingInternal = 348,
    MenuModsHeadingLocal = 349,
    MenuModsHeadingNoMods = 350,
    MenuModsHeadingWorkshop = 351,
    MenuModsInterruptConfirmPublish = 352,
    MenuModsInterruptConfirmPublishUpdate = 353,
    MenuModsInterruptModEnableMultipleLanguages = 354,
    MenuModsInterruptModEnableMultipleLanguagesDescription = 355,
    MenuModsInterruptModEnableUseLanguage = 356,
    MenuModsInterruptModEnableUseLanguageDescription = 357,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshop = 358,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshopDescription = 359,
    MenuModsInterruptConfirmPublishDescription = 360,
    MenuModsInterruptConfirmPublishUpdateDescription = 361,
    MenuModsInterruptPublishingMod = 362,
    MenuModsInterruptPublishingModDescription = 363,
    MenuModsInterruptPublishError = 364,
    MenuModsInterruptPublishErrorDescription = 365,
    MenuModsInterruptUpdatingMod = 366,
    MenuModsInterruptUpdatingModDescription = 367,
    MenuModsInterruptPublishUpdateError = 368,
    MenuModsInterruptPublishUpdateErrorDescription = 369,
    MenuModsInterruptInfoMissingDependencies = 370,
    MenuModsInterruptInfoMissingDependenciesDescription = 371,
    MenuModsInterruptConfirmEnableDisabledDependencies = 372,
    MenuModsInterruptConfirmEnableDisabledDependenciesDescription = 373,
    MenuModsInterruptConfirmDisableDependents = 374,
    MenuModsInterruptConfirmDisableDependentsDescription = 375,
    MenuModsInterruptConfirmUninstallMod = 376,
    MenuModsInterruptConfirmUninstallModDescription = 377,
    MenuModsInterruptUnloadableSaveGameMod = 378,
    MenuModsInterruptUnloadableSaveGameModDescription = 379,
    MenuModsSortName = 380,
    MenuModsSortCreatedDate = 381,
    MenuModsSortInstallDate = 382,
    MenuModsSortAuthor = 383,
    MenuModsSortLastUpdated = 384,
    MenuModsTabInternal = 385,
    MenuModsTabLocal = 386,
    MenuModsTabWorkshop = 387,
    MenuModsTitle = 388,
    MenuModsTooltipLabelAuthor = 389,
    MenuModsTooltipLabelDependencies = 390,
    MenuModsTooltipLabelProvides = 391,
    MenuModsTooltipLabelVersion = 392,
    MenuModsTooltipLabelDescription = 393,
    MenuModsTooltipLabelInstallDate = 394,
    MenuModsTooltipLabelCreatedDate = 395,
    MenuModsTooltipLabelLastUpdatedDate = 396,
    MenuModsTooltipModOptions = 397,
    MenuModsTooltipProvidesCustomizations = 398,
    MenuModsTooltipProvidesImageOverrides = 399,
    MenuModsTooltipProvidesLanguage = 400,
    MenuModsTooltipProvidesScript = 401,
    MenuModsTooltipProvidesStylesheet = 402,
    MenuModsTooltipPublishMod = 403,
    MenuModsTooltipUninstallMod = 404,
    MenuModsTooltipViewInSteamWorkshop = 405,
    MenuModsTooltipCanLoadStateModLoadError = 406,
    MenuModsTooltipCanLoadStateDependencyIssue = 407,
    MenuModsTooltipCanLoadStateModRequiresItself = 408,
    MenuModsTooltipCanLoadStateMissingRequiredMod = 409,
    MenuModsTooltipCanLoadStateReqiredModNotLoaded = 410,
    MenuModsTooltipCanLoadStateLocalModPrecedence = 411,
    MenuModsTooltipCanLoadStateIncompatibleVersion = 412,
    MenuNewGameButtonNext = 413,
    MenuNewGameButtonStartServer = 414,
    MenuNewGameDescription = 415,
    MenuNewGameLabelEditName = 416,
    MenuNewGameLabelEditSeed = 417,
    MenuNewGamePlaceholderEditSeed = 418,
    MenuNewGameTitle = 419,
    MenuNewGameChoiceDifficultyCasual = 420,
    MenuNewGameChoiceDifficultyCasualDescription = 421,
    MenuNewGameChoiceDifficultyHardcore = 422,
    MenuNewGameChoiceDifficultyHardcoreDescription = 423,
    MenuNewGameChoiceDifficultyDailyChallenge = 424,
    MenuNewGameChoiceDifficultyDailyChallengeDescription = 425,
    MenuNewGameChoiceSingleplayer = 426,
    MenuNewGameChoiceSingleplayerDescription = 427,
    MenuNewGameChoiceMultiplayer = 428,
    MenuNewGameChoiceMultiplayerDescription = 429,
    MenuNewGameChoiceTurnsManual = 430,
    MenuNewGameChoiceTurnsManualDescription = 431,
    MenuNewGameChoiceTurnsRealTime = 432,
    MenuNewGameChoiceTurnsRealTimeDescription = 433,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 434,
    MenuNewsButtonDiscord = 435,
    MenuNewsButtonFacebook = 436,
    MenuNewsButtonReddit = 437,
    MenuNewsButtonTwitter = 438,
    MenuNewsDescription = 439,
    MenuNewsHeadingSocial = 440,
    MenuNewsTitle = 441,
    MenuNewsHeadingUnableToLoad = 442,
    MenuNewsButtonAllNews = 443,
    MenuOptionsInterruptLoading = 444,
    MenuOptionsInterruptLoadingDescription = 445,
    MenuOptionsButtonDitherFogOfWar = 446,
    MenuOptionsButtonFullscreen = 447,
    MenuOptionsButtonScreenshotMode = 448,
    MenuOptionsButtonDeveloperMode = 449,
    MenuOptionsButtonDeveloperModeContextMenu = 450,
    MenuOptionsButtonPixelFont = 451,
    MenuOptionsButtonReloadGame = 452,
    MenuOptionsButtonSaveDataClearAll = 453,
    MenuOptionsButtonSaveDataClearCharacters = 454,
    MenuOptionsButtonSaveDataClearHighscores = 455,
    MenuOptionsButtonSaveDataClearMilestones = 456,
    MenuOptionsButtonSaveDataClearOptions = 457,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 458,
    MenuOptionsButtonSaveDataClearSaves = 459,
    MenuOptionsButtonSkipSplash = 460,
    MenuOptionsButtonToggleDevTools = 461,
    MenuOptionsButtonTooltipsCreatures = 462,
    MenuOptionsButtonOpenLogsFolder = 463,
    MenuOptionsButtonTooltipsDoodads = 464,
    MenuOptionsButtonTooltipsItems = 465,
    MenuOptionsButtonTooltipsTerrain = 466,
    MenuOptionsButtonDropLocationFacing = 467,
    MenuOptionsButtonDropLocationFeet = 468,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 469,
    MenuOptionsDescription = 470,
    MenuOptionsHeadingAudio = 471,
    MenuOptionsHeadingDeveloper = 472,
    MenuOptionsHeadingGameplayOptions = 473,
    MenuOptionsHeadingGeneralOptions = 474,
    MenuOptionsHeadingControls = 475,
    MenuOptionsHeadingLanguage = 476,
    MenuOptionsHeadingModOptions = 477,
    MenuOptionsHeadingOther = 478,
    MenuOptionsHeadingSaveData = 479,
    MenuOptionsHeadingTooltips = 480,
    MenuOptionsHeadingVideo = 481,
    MenuOptionsInterruptReloadGame = 482,
    MenuOptionsInterruptSaveDataClearAll = 483,
    MenuOptionsInterruptSaveDataClearAllDescription = 484,
    MenuOptionsInterruptSaveDataClearCharacters = 485,
    MenuOptionsInterruptSaveDataClearHighscores = 486,
    MenuOptionsInterruptSaveDataClearMilestones = 487,
    MenuOptionsInterruptSaveDataClearOptions = 488,
    MenuOptionsInterruptSaveDataClearSaves = 489,
    MenuOptionsInterruptSaveDataClearCraftingRecipes = 490,
    MenuOptionsLabelInterfaceScale = 491,
    MenuOptionsLabelTurnDelay = 492,
    MenuOptionsTooltipTurnDelay = 493,
    MenuOptionsTooltipUiScaleClamped = 494,
    MenuOptionsTooltipControlsFilter = 495,
    MenuOptionsLabelVolumeEffects = 496,
    MenuOptionsLabelVolumeMusic = 497,
    MenuOptionsLabelControlsFilter = 498,
    MenuOptionsTabAudio = 499,
    MenuOptionsTabDeveloper = 500,
    MenuOptionsTabGameplay = 501,
    MenuOptionsTabGeneral = 502,
    MenuOptionsTabControls = 503,
    MenuOptionsTabMods = 504,
    MenuOptionsTabSaveData = 505,
    MenuOptionsTabVideo = 506,
    MenuOptionsTitle = 507,
    MenuOptionsTooltipMusicNextTrack = 508,
    MenuOptionsBindChoose = 509,
    MenuOptionsBindChooseAdd = 510,
    MenuOptionsBindableTypeGame = 511,
    MenuOptionsBindableTypeDialog = 512,
    MenuOptionsBindableTypeMenu = 513,
    MenuOptionsBindableTypeDeveloper = 514,
    MenuOptionsBindableTypeMod = 515,
    MenuOptionsBindLabelModifier = 516,
    MenuOptionsBindButtonResetTooltip = 517,
    MenuOptionsBindButtonDeleteTooltip = 518,
    MenuOptionsBindButtonAddTooltip = 519,
    MenuOptionsButtonAllowDiagonalMovement = 520,
    MenuOptionsButtonAlwaysShowMoreInformation = 521,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 522,
    MenuOptionsButtonAutoGatherHarvest = 523,
    MenuOptionsButtonAutoGatherHarvestTooltip = 524,
    MenuOptionsButtonAutoPickup = 525,
    MenuOptionsButtonAutoPickupTooltip = 526,
    MenuOptionsButtonDropOnGatherHarvest = 527,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 528,
    MenuOptionsButtonKeepSortActive = 529,
    MenuOptionsButtonKeepSortActiveTooltip = 530,
    MenuOptionsButtonProtectedCraftingItems = 531,
    MenuOptionsButtonProtectedCraftingItemsTooltip = 532,
    MenuOptionsButtonHideEquippedHeadgear = 533,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 534,
    MenuOptionsButtonWarnOnDangerousActions = 535,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 536,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 537,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 538,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 539,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 540,
    MenuOptionsHeadingWarnWhenBreakingItems = 541,
    MenuOptionsButtonSaveDataClearBindings = 542,
    MenuOptionsInterruptSaveDataClearBindings = 543,
    MenuOptionsTooltipDialogOpacity = 544,
    MenuOptionsLabelDialogOpacity = 545,
    MenuOptionsDeveloperLogSourceFilterHeading = 546,
    MenuPauseButtonContinue = 547,
    MenuPauseButtonOptions = 548,
    MenuPauseButtonMultiplayer = 549,
    MenuPauseButtonTitleScreen = 550,
    MenuPauseButtonStopServer = 551,
    MenuPauseHeadingPaused = 552,
    MenuPauseParagraphPaused = 553,
    MenuPauseHeadingNotPaused = 554,
    MenuPauseParagraphNotPaused = 555,
    MenuPauseHeadingDedicatedServer = 556,
    MenuPauseParagraphDedicatedServer = 557,
    MenuMultiplayerTitle = 558,
    MenuMultiplayerDescription = 559,
    MenuMultiplayerOpenServer = 560,
    MenuMultiplayerOpenServerDescription = 561,
    MenuMultiplayerPauseServer = 562,
    MenuMultiplayerPauseServerDescription = 563,
    MenuJoinDedicatedServerTitle = 564,
    MenuJoinDedicatedServerDescription = 565,
    MenuJoinDedicatedServerIP = 566,
    MenuJoinDedicatedServerIPPlaceholder = 567,
    MenuJoinDedicatedServerNext = 568,
    MenuSharedSortBy = 569,
    MenuSharedSortDirection = 570,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 571,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 572,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 573,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 574,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 575,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 576,
    MenuSharedMultiplayerChoicePVP = 577,
    MenuSharedMultiplayerChoicePVPDescription = 578,
    MenuSharedMultiplayerMaxPlayers = 579,
    MenuSharedRealTimeTickSpeedTooltip = 580,
    MenuSharedRealTimeTickSpeedLabel = 581,
    MenuSharedButtonDefault = 582,
    MenuSharedValueTickSpeed = 583,
    MenuSharedValuePercentage = 584,
    MiscPlayerNameDefault = 585,
    MiscSaveNameDefault = 586,
    MiscSaveVersionUnknown = 587,
    MiscDailyChallengeName = 588,
    MiscDifficultyHardcore = 589,
    MiscDifficultyCasual = 590,
    MiscDifficultyDailyChallenge = 591,
    MiscVersion = 592,
    MiscVersionBeta = 593,
    MiscVersionRelease = 594,
    MiscPartOfDayDawn = 595,
    MiscPartOfDaySunrise = 596,
    MiscPartOfDayDaytime = 597,
    MiscPartOfDaySunset = 598,
    MiscPartOfDayDusk = 599,
    MiscPartOfDayNighttime = 600,
    SharedListSeparator = 601,
    MiscBindableOr = 602,
    MiscBindableNoBindings = 603,
    SteamworksInterruptURLOpenedInBrowser = 604,
    SteamworksInterruptURLOpenedInBrowserDescription = 605,
    SteamworksInterruptWorkshopOpenedInBrowser = 606,
    SteamworksInterruptWorkshopOpenedInBrowserDescription = 607,
    SteamworksInterruptModWithNameAlreadyExists = 608,
    SteamworksInterruptModWithNameAlreadyExistsDescription = 609,
    SteamworksInterruptModImportSaveGameFailure = 610,
    SteamworksInterruptModImportSaveGameFailureDescription = 611,
    SteamworksInterruptModImportedSaveGame = 612,
    SteamworksInterruptModImportedSaveGameDescription = 613,
    SteamworksInterruptLoadingRefreshingMods = 614,
    SteamworksInterruptLoadingRefreshingModsDescription = 615,
    SteamworksInterruptOpenFolderFailure = 616,
    SteamworksInterruptOpenFolderFailureDescription = 617,
    Bleeding = 618,
    Burned = 619,
    DisableHints = 620,
    EnableHints = 621,
    EquipmentBack = 622,
    EquipmentBelt = 623,
    EquipmentChest = 624,
    EquipmentFeet = 625,
    EquipmentHands = 626,
    EquipmentHead = 627,
    EquipmentLeftHand = 628,
    EquipmentLeftHandOption = 629,
    EquipmentLegs = 630,
    EquipmentNeck = 631,
    EquipmentRightHand = 632,
    EquipmentRightHandOption = 633,
    EquipmentUse = 634,
    HudFilter = 635,
    MenuDeleteAllGameData = 636,
    MenuDeleteGame = 637,
    MenuEditGame = 638,
    MenuExportGame = 639,
    MenuExportSave = 640,
    MenuHighscoresAll = 641,
    MenuHighscoresDailyChallenge = 642,
    MenuHighscoresMessage = 643,
    MenuHighscoresNone = 644,
    MenuHighscoresNormal = 645,
    MenuImportGame = 646,
    MenuImportSave = 647,
    MenuJoinGame = 648,
    MenuJoinGameJoin = 649,
    MenuJoinGameMessage = 650,
    MenuJoinGameName = 651,
    MenuJoinGameServer = 652,
    MenuOptionsMessage = 653,
    MenuQuitGame = 654,
    MenuReloadGame = 655,
    MenuToggleDeveloperTools = 656,
    MenuVisitSteamWorkshop = 657,
    OptionsAudio = 658,
    OptionsAutoGatherHarvest = 659,
    OptionsAutoGatherHarvestTooltip = 660,
    OptionsAutoPickup = 661,
    OptionsAutoPickupTooltip = 662,
    OptionsDropItemsAtFeet = 663,
    OptionsDropItemsAtFeetTooltip = 664,
    OptionsDropItemsAtFeetWhenFacingTileBlocked = 665,
    OptionsDropItemsAtFeetWhenFacingTileBlockedTooltip = 666,
    OptionsDropItemsOnFacingTile = 667,
    OptionsDropItemsOnFacingTileTooltip = 668,
    OptionsDropOnGatherHarvest = 669,
    OptionsDropOnGatherHarvestTooltip = 670,
    OptionsHideEquippedHeadgear = 671,
    OptionsHideEquippedHeadgearTooltip = 672,
    OptionsKeepSortActive = 673,
    OptionsKeepSortActiveTooltip = 674,
    OptionsProtectedCraftingItems = 675,
    OptionsProtectedCraftingItemsTooltip = 676,
    OptionsWarnOnDangerousActions = 677,
    OptionsWarnOnDangerousActionsTooltip = 678,
    OptionsWarnWhenBreakingItems = 679,
    OptionsWarnWhenBreakingItemsOnCraft = 680,
    OptionsWarnWhenBreakingItemsOnCraftTooltip = 681,
    OptionsWarnWhenBreakingItemsTooltip = 682,
    Poisoned = 683,
    QuickSlot1 = 684,
    QuickSlot2 = 685,
    QuickSlot3 = 686,
    QuickSlot4 = 687,
    QuickSlot5 = 688,
    QuickSlot6 = 689,
    QuickSlot7 = 690,
    QuickSlot8 = 691,
    QuickSlot9 = 692,
    TabCrafting = 693,
    TabDismantle = 694,
    Version = 695,
    WindowTitleContainer = 696,
    WindowTitleCrafting = 697,
    WindowTitleEquipment = 698,
    WindowTitleInventory = 699,
    WindowTitleMap = 700,
    WindowTitleMilestones = 701,
    WindowTitleOptions = 702,
    WindowTitleSkills = 703
}
export declare enum PlayerTranslation {
    FirstName = 0,
    LastName = 1
}
export declare enum Dictionary {
    Action = 0,
    Bindable = 1,
    BindPress = 2,
    Book = 3,
    Corpse = 4,
    Creature = 5,
    Doodad = 6,
    Growth = 7,
    InterruptChoice = 8,
    Item = 9,
    Message = 10,
    Milestone = 11,
    Note = 12,
    OnEquip = 13,
    Player = 14,
    Skill = 15,
    Terrain = 16,
    TileEvent = 17,
    Ui = 18
}
export declare enum GrowthStageTranslation {
    Germinating = 0,
    Seedling = 1,
    Vegetative = 2,
    Budding = 3,
    Flowering = 4,
    Ripening = 5,
    Dead = 6,
    FungusGerminating = 7,
    FungusSpreading = 8,
    FungusForming = 9,
    FungusYoung = 10,
    FungusFruiting = 11,
    FungusFull = 12,
    FungusDead = 13
}
export interface IStringArray {
    [index: number]: string;
}
export interface ITranslationObject {
    name: string;
    description?: string;
    prefix?: string;
    suffix?: string;
}
export declare type ITranslation = string[] | ITranslationObject;
export interface ITranslationArray {
    [index: number]: ITranslation;
}
export interface IActionDictionary {
    [index: number]: [string, string];
}
export interface ICorpseDictionary {
    [index: number]: [string, string];
}
export interface ICreatureDictionary {
    [index: number]: [string, string, string] | [string, string];
}
export interface IDoodadDictionary {
    [index: number]: [string, string, string] | [string, string];
}
export interface IGrowthDictionary {
    [index: number]: [string, string];
}
export interface IHintDictionary {
    [index: number]: [string, string];
}
export interface IItemDictionary {
    [index: number]: [string, string, string, string] | [string, string];
}
export interface IMessageDictionary {
    [index: number]: string;
}
export interface IMilestoneDictionary {
    [index: number]: [string, string];
}
export interface IOnEquipDictionary {
    [index: number]: string;
}
export interface ISkillDictionary {
    [index: number]: [string, string];
}
export interface ITerrainDictionary {
    [index: number]: [string, string];
}
export interface ITileEventDictionary {
    [index: number]: [string, string];
}
export interface IUiDictionary {
    [index: number]: string;
}
export interface IBookDictionary {
    [index: number]: [string, string];
}
export interface IPressNameDictionary {
    [index: string]: string;
}
export interface ILanguage {
    getName(): string;
    shouldUseAlternateFontStyle(): boolean;
    shouldPluralize(): boolean;
    pluralize(str: string): string;
    addPluralRule(from: string, to: string): void;
    getDictionary(dictionary: Dictionary): ITranslationArray;
    setDictionary(dictionary: Dictionary.Action, newEntries: IActionDictionary): void;
    setDictionary(dictionary: Dictionary.Book, newEntries: IBookDictionary): void;
    setDictionary(dictionary: Dictionary.Corpse, newEntries: ICorpseDictionary): void;
    setDictionary(dictionary: Dictionary.Creature, newEntries: ICreatureDictionary): void;
    setDictionary(dictionary: Dictionary.Doodad, newEntries: IDoodadDictionary): void;
    setDictionary(dictionary: Dictionary.Growth, newEntries: IGrowthDictionary): void;
    setDictionary(dictionary: Dictionary.Note, newEntries: IHintDictionary): void;
    setDictionary(dictionary: Dictionary.Item, newEntries: IItemDictionary): void;
    setDictionary(dictionary: Dictionary.Message, newEntries: IMessageDictionary): void;
    setDictionary(dictionary: Dictionary.Milestone, newEntries: IMilestoneDictionary): void;
    setDictionary(dictionary: Dictionary.OnEquip, newEntries: IOnEquipDictionary): void;
    setDictionary(dictionary: Dictionary.Skill, newEntries: ISkillDictionary): void;
    setDictionary(dictionary: Dictionary.Terrain, newEntries: ITerrainDictionary): void;
    setDictionary(dictionary: Dictionary.TileEvent, newEntries: ITileEventDictionary): void;
    setDictionary(dictionary: Dictionary.InterruptChoice, newEntries: IUiDictionary): void;
    setDictionary(dictionary: Dictionary, newEntries: {
        [index: number]: any;
    }): void;
    setDictionaryRaw(dictionary: Dictionary, newEntries: ITranslationArray): void;
    setDictionaries(dictionaries: {
        [index: number]: {
            [index: number]: any;
        };
    }): void;
    setEntry(dictionary: Dictionary.Action, entryIndex: ActionType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Book, entryIndex: BookType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Corpse, entryIndex: CreatureType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.Creature, entryIndex: CreatureType, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Doodad, entryIndex: DoodadType, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Doodad, entryIndex: DoodadTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Note, entryIndex: HintType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemType, prefix: string, name: string, description?: string, plural?: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Message, entryIndex: Message, name: string): void;
    setEntry(dictionary: Dictionary.Milestone, entryIndex: MilestoneType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.OnEquip, entryIndex: OnEquipType, name: string): void;
    setEntry(dictionary: Dictionary.Skill, entryIndex: SkillType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Terrain, entryIndex: TerrainType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.TileEvent, entryIndex: TileEventType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.InterruptChoice, entryIndex: UiTranslation, name: string): void;
    setEntry(dictionary: Dictionary.BindPress, entryName: string, name: string): void;
    setEntry(dictionary: Dictionary, entryIndex: number, ...entry: string[]): void;
    removeDictionary(dictionary: Dictionary): void;
}
export interface ISelector {
    selector: string | string[];
    html?: boolean;
    attribute?: string;
    func?(translation: string): string;
}
export interface ISelectorArray {
    [index: number]: ISelector;
}
export interface ILanguageExtension {
    [key: string]: ITranslation;
}
