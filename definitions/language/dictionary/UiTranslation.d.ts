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
/**
 * Ui messages that are on elements that don't change
 */
declare enum UiTranslation {
    GameActionGather = 0,
    GameQualityExceptional = 1,
    GameQualityRemarkable = 2,
    GameQualityLegendary = 3,
    GameDamageTypeBlunt = 4,
    GameDamageTypeSlashing = 5,
    GameDamageTypePiercing = 6,
    GameDamageTypeFire = 7,
    GameDialogMessagesName = 8,
    GameDialogMessagesEditFiltersName = 9,
    GameDialogMessagesEditFiltersLabelName = 10,
    GameDialogMessagesEditFiltersButtonDelete = 11,
    GameDialogMessagesEditFiltersButtonSave = 12,
    GameDialogMessagesEditFiltersButtonReset = 13,
    GameDialogMessagesEditFiltersButtonNew = 14,
    GameDialogMessagesEditFiltersInterruptSaveOverExisting = 15,
    GameDialogMessagesEditFiltersInterruptSaveOverExistingDescription = 16,
    GameDialogMessagesEditFiltersInterruptResetConfirm = 17,
    GameDialogMessagesEditFiltersInterruptResetConfirmDescription = 18,
    GameDialogNotesName = 19,
    GameDialogNotesNoteTime = 20,
    GameDialogNotesNoteNumber = 21,
    GameDialogNotesNoteLockedTitle = 22,
    GameDialogNotesNoteLockedDescription = 23,
    GameDialogNotesLinkId = 24,
    GameDialogNotesLinkLearnMore = 25,
    GameDialogQuickSettingsName = 26,
    GameDialogMilestonesName = 27,
    GameDialogMilestonesInvisibleMilestone = 28,
    GameDialogMilestonesProgress = 29,
    GameDialogMilestonesProgressHidden = 30,
    GameDialogMilestonesMilestone = 31,
    GameDialogMilestonesTooltipHidden = 32,
    GameDialogMilestonesTooltipInvisible = 33,
    GameDialogMilestonesSortName = 34,
    GameDialogMilestonesSortProgress = 35,
    GameDialogSkillsName = 36,
    GameDialogSkillsSkill = 37,
    GameDialogSkillsTooltipReputationImpact = 38,
    GameDialogSkillsTooltipCanIncrease = 39,
    GameDialogSkillsSortName = 40,
    GameDialogSkillsSortLevel = 41,
    GameDialogBookName = 42,
    GameDialogMapName = 43,
    GameTooltipShowMoreInformation = 44,
    GameTooltipLegendaryMaxWeightLabel = 45,
    GameStatsPercentage = 46,
    GameStatsStatAttack = 47,
    GameStatsStatGeneric = 48,
    GameStatsStatGenericWithMax = 49,
    GameStatsStatbar = 50,
    GameStatsStatHealthTooltip = 51,
    GameStatsStatStaminaTooltip = 52,
    GameStatsStatHungerTooltip = 53,
    GameStatsStatThirstTooltip = 54,
    GameStatsStatReputationTooltipDifficulty = 55,
    GameStatsStatReputationTooltipDifficultyEasy = 56,
    GameStatsStatReputationTooltipDifficultyHard = 57,
    GameStatsStatReputationTooltipDifficultyInsane = 58,
    GameStatsStatReputationTooltipDifficultyMedium = 59,
    GameStatsStatReputationTooltipDifficultySimple = 60,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 61,
    GameStatsStatReputationTooltipDifficultyVeryHard = 62,
    GameStatsStatReputationTooltipBenignity = 63,
    GameStatsStatReputationTooltipMalignity = 64,
    GameStatsStatReputationTooltipScore = 65,
    GameStatsStatReputationTooltipTurn = 66,
    GameStatsStatReputationTooltipTicks = 67,
    GameStatsStatWeightTooltip = 68,
    GameStatsStatAttackTooltipTactics = 69,
    GameStatsStatAttackTooltipLeftHand = 70,
    GameStatsStatAttackTooltipRightHand = 71,
    GameStatsStatDefenseTooltipBase = 72,
    GameStatsStatDefenseTooltipBlunt = 73,
    GameStatsStatDefenseTooltipParrying = 74,
    GameStatsStatDefenseTooltipFire = 75,
    GameStatsStatDefenseTooltipPiercing = 76,
    GameStatsStatDefenseTooltipSlashing = 77,
    GameStatsStatusEffectBleedingTooltip = 78,
    GameStatsStatusEffectBurnedTooltip = 79,
    GameStatsStatusEffectPoisonedTooltip = 80,
    GameQuadrantElementStats = 81,
    GameQuadrantElementMenuBar = 82,
    GameQuadrantElementQuickslots = 83,
    GameQuadrantElementMessages = 84,
    GameQuadrantElementContextMenuMoveTo = 85,
    GameQuadrantElementContextMenuSwitchWith = 86,
    GameQuadrantNone = 87,
    GameQuadrantLeft = 88,
    GameQuadrantTopLeft = 89,
    GameQuadrantTop = 90,
    GameQuadrantTopRight = 91,
    GameQuadrantRight = 92,
    GameQuadrantBottomRight = 93,
    GameQuadrantBottom = 94,
    GameQuadrantBottomLeft = 95,
    GameItemBarterCredit = 96,
    GameItemBarterCreditTrade = 97,
    GameInterruptItemMayBeDestroyedInCraft = 98,
    GameInterruptItemMayBeDestroyedInCraftDescription = 99,
    GameInterruptItemMayBeDestroyedOnUse = 100,
    GameInterruptItemMayBeDestroyedOnUseDescription = 101,
    GameInterruptLoadingQuitting = 102,
    GameInterruptLoadingQuittingDescription = 103,
    GameInterruptLoadingSaving = 104,
    GameInterruptLoadingSavingDescription = 105,
    GameInterruptReleaseCreature = 106,
    GameInterruptReleaseCreatureDescription = 107,
    GameInterruptRenameCreature = 108,
    GameInterruptRenameCreatureDescription = 109,
    GameInterruptRenameDoodad = 110,
    GameInterruptRenameDoodadDescription = 111,
    GameInterruptRenameItem = 112,
    GameInterruptRenameItemDescription = 113,
    GameInterruptReturnToTitleScreen = 114,
    GameInterruptReturnToTitleScreenDailyChallenge = 115,
    GameInterruptReturnToTitleScreenDailyChallengeDescription = 116,
    GameInterruptReturnToTitleScreenDescription = 117,
    GameInterruptLoadingWorld = 118,
    GameInterruptLoadingWorldDescription = 119,
    GameInterruptLoadingGeneratingWorld = 120,
    GameInterruptLoadingGeneratingWorldDescription = 121,
    GameInterruptLoadingFinalizingWorld = 122,
    GameInterruptLoadingFinalizingWorldDescription = 123,
    GameInterruptSailAwayEnd = 124,
    GameInterruptSailAwayEndDescription = 125,
    GameInterruptSailAwayReturnable = 126,
    GameInterruptSailAwayReturnableDescription = 127,
    GameInterruptTravelAway = 128,
    GameInterruptTravelAwayDescription = 129,
    GameInterruptLoadingResting = 130,
    GameInterruptLoadingRestingDescription = 131,
    GameInterruptLoadingSleeping = 132,
    GameInterruptLoadingSleepingDescription = 133,
    GameInterruptLoadingTraveling = 134,
    GameInterruptLoadingTravelingDescription = 135,
    GameInterruptLoadingLostGLContext = 136,
    GameInterruptLoadingAutoSaving = 137,
    GameInterruptLoadingAutoSavingDescription = 138,
    GameInterruptLoadingLostGLContextDescription = 139,
    GameInterruptLoadingMods = 140,
    GameInterruptLoadingModsDescription = 141,
    GameInterruptLoadingMultiplayerPlayerConnecting = 142,
    GameInterruptLoadingMultiplayerSyncing = 143,
    GameInterruptLoadingReloadingWebGl = 144,
    GameInterruptDangerousStep = 145,
    GameInterruptDangerousStepDescription = 146,
    GameInterruptSaveFailure = 147,
    GameInterruptSaveFailureDescription = 148,
    GameInterruptLoadFailure = 149,
    GameInterruptLoadFailureDescription = 150,
    GameInterruptDesalinationNoNeed = 151,
    GameInterruptDesalinationNoNeedDescription = 152,
    GameInterruptWellConvert = 153,
    GameInterruptWellConvertDescription = 154,
    GameInterruptNoHealingRequired = 155,
    GameInterruptNoHealingRequiredDescription = 156,
    GameInterruptConfirmationActionOnFire = 157,
    GameInterruptConfirmationActionOnFireDescription = 158,
    GameInterruptConfirmationDestroyOnGather = 159,
    GameInterruptConfirmationDestroyOnGatherDescription = 160,
    GameInterruptLoadingGame = 161,
    GameInterruptLoadingGameDescription = 162,
    GameInterruptLoadingSprites = 163,
    GameInterruptLoadingSpritesDescription = 164,
    GameInterruptMultiplayerSynchronizing = 165,
    GameInterruptMultiplayerSynchronizingDescription = 166,
    GameInterruptNoSaveOnDeath = 167,
    GameInterruptNoSaveOnDeathDescription = 168,
    GameInterruptItemsMayBeDestroyedOnUse = 169,
    GameInterruptItemsMayBeDestroyedOnUseDescription = 170,
    GameMenuBarButtonTooltipBindable = 171,
    GameMenuBarButtonTooltipMenu = 172,
    GameMenuBarButtonTooltipSave = 173,
    GameMenuBarButtonTooltipNotes = 174,
    GameMenuBarButtonTooltipMilestones = 175,
    GameMenuBarButtonTooltipMessages = 176,
    GameMenuBarButtonTooltipHelp = 177,
    GameMenuBarButtonTooltipQuickSettings = 178,
    GameMenuBarButtonTooltipActions = 179,
    GameMenuBarButtonTooltipInventory = 180,
    GameMenuBarButtonTooltipCrafting = 181,
    GameMenuBarButtonTooltipEquipment = 182,
    GameMenuBarButtonTooltipSkills = 183,
    GameMessagesButtonSend = 184,
    GameMessagesContextMenuShowAsDialog = 185,
    GameMessagesContextMenuClear = 186,
    GameMessagesContextMenuCopy = 187,
    GameMessagesContextMenuExport = 188,
    GameMessagesContextMenuClearInterrupt = 189,
    GameMessagesContextMenuClearInterruptDescription = 190,
    GameMessagesFilter = 191,
    GameMessagesFilterAll = 192,
    GameMessagesFilterGame = 193,
    GameMessagesFilterChat = 194,
    GameMessagesFiltersEdit = 195,
    GameMessagesNewNote = 196,
    GameMultiplayerInterruptBanned = 197,
    GameMultiplayerInterruptConnected = 198,
    GameMultiplayerInterruptConnectedDescriptionDownloadingWorldData = 199,
    GameMultiplayerInterruptConnectedDescriptionWaitingForWorldData = 200,
    GameMultiplayerInterruptConnecting = 201,
    GameMultiplayerInterruptConnectingDescription = 202,
    GameMultiplayerInterruptFailedToConnect = 203,
    GameMultiplayerInterruptFailedToLoadMods = 204,
    GameMultiplayerInterruptKicked = 205,
    GameMultiplayerInterruptLostConnection = 206,
    GameMultiplayerInterruptRequiredModIsDisabled = 207,
    GameMultiplayerInterruptRequiredModNotInstalled = 208,
    GameMultiplayerInterruptRequiredModNotMultiplayerCompatible = 209,
    GameMultiplayerInterruptRequiredModUnableToLoad = 210,
    GameMultiplayerInterruptRequiredModVersionMismatch = 211,
    GameMultiplayerInterruptRestartServerAfterLoadingSave = 212,
    GameMultiplayerInterruptRestartServerAfterLoadingSaveDescription = 213,
    GameMultiplayerInterruptServerShutdown = 214,
    GameMultiplayerInterruptSynchronizationError = 215,
    GameMultiplayerInterruptSynchronizationErrorDescription = 216,
    GameMultiplayerInterruptUnableToJoinGame = 217,
    GameMultiplayerInterruptUnableToJoinGameBuildMismatch = 218,
    GameMultiplayerInterruptUnableToJoinGameDuplicateIdentifier = 219,
    GameMultiplayerInterruptUnableToJoinGameFriendsOnly = 220,
    GameMultiplayerInterruptUnableToJoinGameServerFull = 221,
    GameMultiplayerInterruptUnableToJoinGameSteamRequired = 222,
    GameMultiplayerInterruptUnableToJoinGameUnknownError = 223,
    GameMultiplayerInterruptUnableToJoinGameVersionMismatch = 224,
    MenuAboutTitle = 225,
    MenuAboutDescription = 226,
    MenuAboutGameDescription = 227,
    MenuAboutSectionTeam = 228,
    MenuAboutTeamMemberResponsibilities = 229,
    MenuAboutTeamMemberResponsibilityProgramming = 230,
    MenuAboutTeamMemberResponsibilityDesign = 231,
    MenuAboutTeamMemberResponsibilityWeb = 232,
    MenuAboutTeamMemberResponsibilityArt = 233,
    MenuAboutTeamMemberResponsibilityPR = 234,
    MenuAboutTeamMemberResponsibilityUX = 235,
    MenuAboutTeamMemberResponsibilityMusic = 236,
    MenuAboutTeamMemberName = 237,
    MenuAboutTeamMemberNickname = 238,
    MenuAboutSectionContributors = 239,
    MenuAboutSectionSpecialThanks = 240,
    MenuAboutTextSpecialThanksTestorsAndDonators = 241,
    MenuAboutSectionLibraries = 242,
    MenuAboutSectionLibrariesDescription = 243,
    MenuChangelogTitle = 244,
    MenuChangelogDescription = 245,
    MenuChangelogSectionBalance = 246,
    MenuChangelogSectionBugFixes = 247,
    MenuChangelogSectionImprovements = 248,
    MenuChangelogSectionMod = 249,
    MenuChangelogSectionModding = 250,
    MenuChangelogSectionNew = 251,
    MenuChangelogSectionTechnical = 252,
    MenuChangelogHeadingFailedLoad = 253,
    MenuChangelogHeadingChangeCount = 254,
    MenuChangelogInterruptLoadingChangelog = 255,
    MenuChangelogInterruptLoadingChangelogDescription = 256,
    MenuCharacterCreationButtonRandomizeName = 257,
    MenuCharacterCreationButtonExportTooltip = 258,
    MenuCharacterCreationButtonImportTooltip = 259,
    MenuCharacterCreationButtonStartGame = 260,
    MenuCharacterCreationButtonJoinGame = 261,
    MenuCharacterCreationDescription = 262,
    MenuCharacterCreationHeadingHairColor = 263,
    MenuCharacterCreationHeadingHairStyle = 264,
    MenuCharacterCreationHeadingSkinTone = 265,
    MenuCharacterCreationLabelName = 266,
    MenuCharacterCreationTitle = 267,
    MenuCharacterCreationInterruptImportCharacterFailure = 268,
    MenuCharacterCreationInterruptImportCharacterFailureDescription = 269,
    MenuCharacterCreationButtonRotateLeftTooltip = 270,
    MenuCharacterCreationButtonRotateRightTooltip = 271,
    MenuCharacterCreationButtonRandomizeTooltip = 272,
    MenuCharacterSelectionButtonNewCharacter = 273,
    MenuCharacterSelectionCharacterSortLastUse = 274,
    MenuCharacterSelectionCharacterSortName = 275,
    MenuCharacterSelectionCharacterSortUseCount = 276,
    MenuCharacterSelectionDescription = 277,
    MenuCharacterSelectionHeadingNoCharacters = 278,
    MenuCharacterSelectionTitle = 279,
    MenuCharacterSelectionLabelLastUse = 280,
    MenuCharacterSelectionLabelUseCount = 281,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 282,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 283,
    MenuCharacterSelectionInterruptDeleteCharacter = 284,
    MenuMultiplayerDescription = 285,
    MenuMultiplayerTitle = 286,
    MenuMultiplayerButtonJoinById = 287,
    MenuMultiplayerServerLabelReputation = 288,
    MenuMultiplayerServerLabelDays = 289,
    MenuMultiplayerButtonNewGame = 290,
    MenuMultiplayerButtonLoadGame = 291,
    MenuMultiplayerServerTooltipPVP = 292,
    MenuMultiplayerServerTooltipModsLabel = 293,
    MenuMultiplayerServerTooltipFriendsLabel = 294,
    MenuMultiplayerServerPlayers = 295,
    MenuMultiplayerServerRegion = 296,
    MenuMultiplayerServerHost = 297,
    MenuMultiplayerServerDedicated = 298,
    MenuMultiplayerHeadingPlayersOnline = 299,
    MenuGameEndTitleDead = 300,
    MenuGameEndTitleWon = 301,
    MenuGameEndDescriptionDead1 = 302,
    MenuGameEndDescriptionDead2 = 303,
    MenuGameEndDescriptionDead3 = 304,
    MenuGameEndDescriptionWin1 = 305,
    MenuGameEndDescriptionWin2 = 306,
    MenuGameEndDescriptionWin3 = 307,
    MenuGameEndShareFacebook = 308,
    MenuGameEndShareTwitter = 309,
    MenuGameEndContinueAsGhost = 310,
    MenuGameEndReturnToIsland = 311,
    MenuGameEndExitToMenu = 312,
    MenuGameEndInterruptGhostDeleteSave = 313,
    MenuGameEndInterruptWonDeleteSave = 314,
    MenuGameEndInterruptDeleteSaveDescription = 315,
    MenuHelpTitle = 316,
    MenuHelpDescription = 317,
    MenuHelpLabelSearch = 318,
    MenuHighscoresTitle = 319,
    MenuHighscoresDescription = 320,
    MenuHighscoresDifficultyFilterHardcore = 321,
    MenuHighscoresDifficultyFilterCasual = 322,
    MenuHighscoresDifficultyFilterCustom = 323,
    MenuHighscoresDifficultyFilterDailyChallenge = 324,
    MenuHighscoresDifficultyFilterAll = 325,
    MenuHighscoresSortScore = 326,
    MenuHighscoresSortSaveName = 327,
    MenuHighscoresSortRecency = 328,
    MenuHighscoresHighscoreLabelDifficulty = 329,
    MenuHighscoresHighscoreLabelTurns = 330,
    MenuHighscoresHighscoreLabelScore = 331,
    MenuHighscoresHighscoreLabelPlace = 332,
    MenuHighscoresHighscoreLabelDate = 333,
    MenuHighscoresHighscoreLabelDeathBy = 334,
    MenuHighscoresHighscoreTitle = 335,
    MenuHighscoresCharacterNameUnknown = 336,
    MenuLoadGameButtonNewGame = 337,
    MenuLoadGameButtonNewGameButtonImportTooltip = 338,
    MenuLoadGameDescription = 339,
    MenuLoadGameSaveButtonDeleteTooltip = 340,
    MenuLoadGameSaveButtonEditNameTooltip = 341,
    MenuLoadGameSaveButtonExportTooltip = 342,
    MenuLoadGameSaveSortCreatedTime = 343,
    MenuLoadGameSaveSortName = 344,
    MenuLoadGameSaveSortSaveTime = 345,
    MenuLoadGameSaveSortTurnCount = 346,
    MenuLoadGameSaveTooltipLabelCreatedTime = 347,
    MenuLoadGameSaveTooltipLabelSaveTime = 348,
    MenuLoadGameSaveTooltipLabelDifficulty = 349,
    MenuLoadGameSaveTooltipLabelScore = 350,
    MenuLoadGameSaveTooltipLabelSeed = 351,
    MenuLoadGameSaveTooltipLabelTurns = 352,
    MenuLoadGameSaveTooltipLabelMods = 353,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 354,
    MenuLoadGameSaveTooltipMod = 355,
    MenuLoadGameSlotsRemaining = 356,
    MenuLoadGameTitle = 357,
    MenuLoadGameInterruptDeleteSave = 358,
    MenuLoadGameInterruptDeleteSaveDescription = 359,
    MenuLoadGameInterruptLoadingExportingSave = 360,
    MenuLoadGameInterruptLoadingExportingSaveDescription = 361,
    MenuLoadGameInterruptLoadingImportingSave = 362,
    MenuLoadGameInterruptLoadingImportingSaveDescription = 363,
    MenuLoadGameInterruptImportSaveFailure = 364,
    MenuLoadGameInterruptImportSaveFailureDescription = 365,
    MenuLoadGameInterruptExportType = 366,
    MenuLoadGameInterruptExportTypeDescription = 367,
    MenuLoadGameInterruptPublishingSave = 368,
    MenuLoadGameInterruptPublishingSaveDescription = 369,
    MenuLoadGameInterruptMissingMod = 370,
    MenuLoadGameInterruptMissingModDescription = 371,
    MenuLoadGameInterruptMissingModDescriptionLabelModsMissing = 372,
    MenuLoadGameInterruptMissingModDescriptionLabelModsDisabled = 373,
    MenuLoadGameInterruptLoading = 374,
    MenuLoadGameInterruptLoadingDescription = 375,
    MenuMainButtonAbout = 376,
    MenuMainButtonChangelog = 377,
    MenuMainButtonContinueGame = 378,
    MenuMainButtonMultiplayer = 379,
    MenuMainButtonHighscores = 380,
    MenuMainButtonLoadGame = 381,
    MenuMainButtonMods = 382,
    MenuMainButtonNewGame = 383,
    MenuMainButtonNews = 384,
    MenuMainButtonOptions = 385,
    MenuMainButtonQuitGame = 386,
    MenuMainInterruptLoadingNews = 387,
    MenuMainInterruptLoadingNewsDescription = 388,
    MenuMainInterruptLoadingChangelog = 389,
    MenuMainInterruptLoadingChangelogDescription = 390,
    MenuMainInterruptWelcomeToVersion = 391,
    MenuMainInterruptWelcomeToVersionDescription = 392,
    MenuMainInterruptOldVersionWarning = 393,
    MenuMainInterruptOldVersionWarningDescription = 394,
    MenuModsButtonDisableAll = 395,
    MenuModsButtonEnableAll = 396,
    MenuModsButtonModdingGuide = 397,
    MenuModsButtonOpenFolder = 398,
    MenuModsButtonOpenWorkshop = 399,
    MenuModsDescription = 400,
    MenuModsHeadingInternal = 401,
    MenuModsHeadingLocal = 402,
    MenuModsHeadingNoMods = 403,
    MenuModsHeadingWorkshop = 404,
    MenuModsInterruptConfirmPublish = 405,
    MenuModsInterruptConfirmPublishUpdate = 406,
    MenuModsInterruptModEnableMultipleLanguages = 407,
    MenuModsInterruptModEnableMultipleLanguagesDescription = 408,
    MenuModsInterruptModEnableUseLanguage = 409,
    MenuModsInterruptModEnableUseLanguageDescription = 410,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshop = 411,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshopDescription = 412,
    MenuModsInterruptConfirmPublishDescription = 413,
    MenuModsInterruptConfirmPublishUpdateDescription = 414,
    MenuModsInterruptPublishingMod = 415,
    MenuModsInterruptPublishingModDescription = 416,
    MenuModsInterruptPublishError = 417,
    MenuModsInterruptPublishErrorDescription = 418,
    MenuModsInterruptUpdatingMod = 419,
    MenuModsInterruptUpdatingModDescription = 420,
    MenuModsInterruptPublishUpdateError = 421,
    MenuModsInterruptPublishUpdateErrorDescription = 422,
    MenuModsInterruptInfoMissingDependencies = 423,
    MenuModsInterruptInfoMissingDependenciesDescription = 424,
    MenuModsInterruptConfirmEnableDisabledDependencies = 425,
    MenuModsInterruptConfirmEnableDisabledDependenciesDescription = 426,
    MenuModsInterruptConfirmDisableDependents = 427,
    MenuModsInterruptConfirmDisableDependentsDescription = 428,
    MenuModsInterruptConfirmUninstallMod = 429,
    MenuModsInterruptConfirmUninstallModDescription = 430,
    MenuModsInterruptUnloadableSaveGameMod = 431,
    MenuModsInterruptUnloadableSaveGameModDescription = 432,
    MenuModsSortName = 433,
    MenuModsSortCreatedDate = 434,
    MenuModsSortInstallDate = 435,
    MenuModsSortAuthor = 436,
    MenuModsSortLastUpdated = 437,
    MenuModsTabInternal = 438,
    MenuModsTabLocal = 439,
    MenuModsTabWorkshop = 440,
    MenuModsTitle = 441,
    MenuModsTooltipLabelAuthor = 442,
    MenuModsTooltipLabelDependencies = 443,
    MenuModsTooltipLabelProvides = 444,
    MenuModsTooltipLabelVersion = 445,
    MenuModsTooltipLabelDescription = 446,
    MenuModsTooltipLabelInstallDate = 447,
    MenuModsTooltipLabelCreatedDate = 448,
    MenuModsTooltipLabelLastUpdatedDate = 449,
    MenuModsTooltipMultiplayerCompatibility = 450,
    MenuModsTooltipModOptions = 451,
    MenuModsTooltipProvidesCustomizations = 452,
    MenuModsTooltipProvidesImageOverrides = 453,
    MenuModsTooltipProvidesLanguage = 454,
    MenuModsTooltipProvidesScript = 455,
    MenuModsTooltipProvidesStylesheet = 456,
    MenuModsTooltipPublishMod = 457,
    MenuModsTooltipUninstallMod = 458,
    MenuModsTooltipViewInSteamWorkshop = 459,
    MenuModsTooltipCanLoadStateModLoadError = 460,
    MenuModsTooltipCanLoadStateDependencyIssue = 461,
    MenuModsTooltipCanLoadStateModRequiresItself = 462,
    MenuModsTooltipCanLoadStateMissingRequiredMod = 463,
    MenuModsTooltipCanLoadStateReqiredModNotLoaded = 464,
    MenuModsTooltipCanLoadStateLocalModPrecedence = 465,
    MenuModsTooltipCanLoadStateIncompatibleVersion = 466,
    MenuModsButtonEditInternalMods = 467,
    MenuModsSubmenuEditInternalModsTitle = 468,
    MenuModsSubmenuEditInternalModsDescription = 469,
    MenuModsSubmenuEditInternalModsInterruptModsListChangeReload = 470,
    MenuModsSubmenuEditInternalModsInterruptModsListChangeReloadDescription = 471,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 472,
    MenuNewGameButtonNext = 473,
    MenuNewGameButtonStartServer = 474,
    MenuNewGameDescription = 475,
    MenuNewGameLabelEditName = 476,
    MenuNewGameLabelEditSeed = 477,
    MenuNewGamePlaceholderEditSeed = 478,
    MenuNewGameTitle = 479,
    MenuNewGameChoiceDifficultyCasual = 480,
    MenuNewGameChoiceDifficultyCasualDescription = 481,
    MenuNewGameChoiceDifficultyHardcore = 482,
    MenuNewGameChoiceDifficultyHardcoreDescription = 483,
    MenuNewGameChoiceDifficultyCustom = 484,
    MenuNewGameChoiceDifficultyCustomDescription = 485,
    MenuNewGameChoiceDifficultyDailyChallenge = 486,
    MenuNewGameChoiceDifficultyDailyChallengeDescription = 487,
    MenuNewGameChoiceSingleplayer = 488,
    MenuNewGameChoiceSingleplayerDescription = 489,
    MenuNewGameChoiceMultiplayer = 490,
    MenuNewGameChoiceMultiplayerDescription = 491,
    MenuNewGameChoiceTurnModeManual = 492,
    MenuNewGameChoiceTurnModeManualDescription = 493,
    MenuNewGameChoiceTurnModeRealTime = 494,
    MenuNewGameChoiceTurnModeRealTimeDescription = 495,
    MenuNewGameChoiceTurnModeSimulated = 496,
    MenuNewGameChoiceTurnModeSimulatedDescription = 497,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 498,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 499,
    MenuCustomGameOptionsTitle = 500,
    MenuCustomGameOptionsDescription = 501,
    MenuCustomGameOptionsPeaceful = 502,
    MenuCustomGameOptionsPeacefulDescription = 503,
    MenuCustomGameOptionsRespawnOnDeath = 504,
    MenuCustomGameOptionsRespawnOnDeathDescription = 505,
    MenuCustomGameOptionsBenignityInitial = 506,
    MenuCustomGameOptionsBenignityMultiplier = 507,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 508,
    MenuCustomGameOptionsMalignityInitial = 509,
    MenuCustomGameOptionsMalignityMultiplier = 510,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 511,
    MenuCustomGameOptionsStatMultiplier = 512,
    MenuCustomGameOptionsStatMultiplierTooltip = 513,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 514,
    MenuCustomGameOptionsHeadingGeneral = 515,
    MenuCustomGameOptionsHeadingTime = 516,
    MenuCustomGameOptionsHeadingStats = 517,
    MenuCustomGameOptionsHeadingReputation = 518,
    MenuCustomGameOptionsHeadingInventory = 519,
    MenuCustomGameOptionsHeadingSkills = 520,
    MenuCustomGameOptionsHeadingStatusEffects = 521,
    MenuCustomGameOptionsEternalNight = 522,
    MenuCustomGameOptionsTimeFrozen = 523,
    MenuCustomGameOptionsTimeInitial = 524,
    MenuCustomGameOptionsTimeDayLength = 525,
    MenuCustomGameOptionsTimeDayLengthTooltip = 526,
    MenuCustomGameOptionsTimeDayPercent = 527,
    MenuCustomGameOptionsTimeDayPercentTooltip = 528,
    MenuCustomGameOptionsEternalNightDescription = 529,
    MenuCustomGameOptionsStatStarting = 530,
    MenuCustomGameOptionsStatMax = 531,
    MenuCustomGameOptionsStatStartingDisplay = 532,
    MenuCustomGameOptionsStatMaxDisplay = 533,
    MenuCustomGameOptionsStatStrengthTooltip = 534,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 535,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 536,
    MenuCustomGameOptionsStatusEffectStartWith = 537,
    MenuCustomGameOptionsStatusEffectUntreatable = 538,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 539,
    MenuCustomGameOptionsSkillsGenerateRandom = 540,
    MenuCustomGameOptionsSkillsGenerateRandomDescription = 541,
    MenuCustomGameOptionsSkillNone = 542,
    MenuCustomGameOptionsSkillConfigure = 543,
    MenuCustomGameOptionsSkillInitial = 544,
    MenuCustomGameOptionsSkillMultiplier = 545,
    MenuCustomGameOptionsSkillMultiplierTooltip = 546,
    MenuCustomGameOptionsRandomItems = 547,
    MenuCustomGameOptionsRandomItemsDescription = 548,
    MenuNewsButtonDiscord = 549,
    MenuNewsButtonFacebook = 550,
    MenuNewsButtonReddit = 551,
    MenuNewsButtonTwitter = 552,
    MenuNewsDescription = 553,
    MenuNewsHeadingSocial = 554,
    MenuNewsTitle = 555,
    MenuNewsHeadingUnableToLoad = 556,
    MenuNewsButtonAllNews = 557,
    MenuOptionsInterruptLoading = 558,
    MenuOptionsInterruptLoadingDescription = 559,
    MenuOptionsButtonDitherFogOfWar = 560,
    MenuOptionsButtonDisableCustomCursor = 561,
    MenuOptionsButtonFullscreen = 562,
    MenuOptionsButtonDeveloperMode = 563,
    MenuOptionsButtonDeveloperModeContextMenu = 564,
    MenuOptionsButtonPixelFont = 565,
    MenuOptionsButtonReloadGame = 566,
    MenuOptionsButtonExportGlobalSaveData = 567,
    MenuOptionsButtonImportGlobalSaveData = 568,
    MenuOptionsButtonSaveDataClearAll = 569,
    MenuOptionsButtonSaveDataClearCharacters = 570,
    MenuOptionsButtonSaveDataClearHighscores = 571,
    MenuOptionsButtonSaveDataClearMilestones = 572,
    MenuOptionsButtonSaveDataClearOptions = 573,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 574,
    MenuOptionsButtonSaveDataClearSaves = 575,
    MenuOptionsButtonSkipSplash = 576,
    MenuOptionsButtonToggleDevTools = 577,
    MenuOptionsButtonTooltipsCreatures = 578,
    MenuOptionsButtonOpenLogsFolder = 579,
    MenuOptionsButtonTooltipsDoodads = 580,
    MenuOptionsButtonTooltipsItems = 581,
    MenuOptionsButtonTooltipsTerrain = 582,
    MenuOptionsButtonDropLocationFacing = 583,
    MenuOptionsButtonDropLocationFeet = 584,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 585,
    MenuOptionsDescription = 586,
    MenuOptionsHeadingAudio = 587,
    MenuOptionsHeadingDeveloper = 588,
    MenuOptionsHeadingGameplayOptions = 589,
    MenuOptionsHeadingGeneralOptions = 590,
    MenuOptionsHeadingControls = 591,
    MenuOptionsHeadingLanguage = 592,
    MenuOptionsHeadingPowerPreference = 593,
    MenuOptionsHeadingModOptions = 594,
    MenuOptionsHeadingOther = 595,
    MenuOptionsHeadingSaveData = 596,
    MenuOptionsHeadingTooltips = 597,
    MenuOptionsHeadingVideo = 598,
    MenuOptionsInterruptReloadGame = 599,
    MenuOptionsInterruptSaveDataClearAll = 600,
    MenuOptionsInterruptSaveDataClearAllDescription = 601,
    MenuOptionsInterruptSaveDataClearCharacters = 602,
    MenuOptionsInterruptSaveDataClearHighscores = 603,
    MenuOptionsInterruptSaveDataClearMilestones = 604,
    MenuOptionsInterruptSaveDataClearOptions = 605,
    MenuOptionsInterruptSaveDataClearSaves = 606,
    MenuOptionsInterruptSaveDataClearCraftingRecipes = 607,
    MenuOptionsLabelInterfaceScale = 608,
    MenuOptionsLabelDirectionTurnDelay = 609,
    MenuOptionsLabelMouseTurnDelay = 610,
    MenuOptionsTooltipTurnDelay = 611,
    MenuOptionsTooltipMouseTurnDelay = 612,
    MenuOptionsTooltipUiScaleClamped = 613,
    MenuOptionsTooltipControlsFilter = 614,
    MenuOptionsLabelVolumeEffects = 615,
    MenuOptionsLabelVolumeMusic = 616,
    MenuOptionsTabAudio = 617,
    MenuOptionsTabDeveloper = 618,
    MenuOptionsTabGameplay = 619,
    MenuOptionsTabGeneral = 620,
    MenuOptionsTabControls = 621,
    MenuOptionsTabMods = 622,
    MenuOptionsTabSaveData = 623,
    MenuOptionsTabVideo = 624,
    MenuOptionsTitle = 625,
    MenuOptionsTooltipMusicNextTrack = 626,
    MenuOptionsBindChoose = 627,
    MenuOptionsBindChooseAdd = 628,
    MenuOptionsBindableTypeGame = 629,
    MenuOptionsBindableTypeDialog = 630,
    MenuOptionsBindableTypeMenu = 631,
    MenuOptionsBindableTypeDeveloper = 632,
    MenuOptionsBindableTypeMod = 633,
    MenuOptionsBindLabelModifier = 634,
    MenuOptionsBindButtonResetTooltip = 635,
    MenuOptionsBindButtonDeleteTooltip = 636,
    MenuOptionsBindButtonAddTooltip = 637,
    MenuOptionsButtonAllowDiagonalMovement = 638,
    MenuOptionsButtonAlwaysShowMoreInformation = 639,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 640,
    MenuOptionsButtonAutoGatherHarvest = 641,
    MenuOptionsButtonAutoGatherHarvestTooltip = 642,
    MenuOptionsButtonAutoPickup = 643,
    MenuOptionsButtonAutoPickupTooltip = 644,
    MenuOptionsButtonDropOnGatherHarvest = 645,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 646,
    MenuOptionsButtonKeepSortActive = 647,
    MenuOptionsButtonKeepSortActiveTooltip = 648,
    MenuOptionsButtonProtectCraftingItemsInInventory = 649,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 650,
    MenuOptionsButtonProtectCraftingItemContainers = 651,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 652,
    MenuOptionsButtonUseAdjacentContainers = 653,
    MenuOptionsButtonUseAdjacentContainersTooltip = 654,
    MenuOptionsButtonHideEquippedHeadgear = 655,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 656,
    MenuOptionsButtonEnableAutoSave = 657,
    MenuOptionsButtonEnableAutoSaveTooltip = 658,
    MenuOptionsButtonWarnOnDangerousActions = 659,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 660,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 661,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 662,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 663,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 664,
    MenuOptionsHeadingWarnWhenBreakingItems = 665,
    MenuOptionsButtonSaveDataClearBindings = 666,
    MenuOptionsInterruptSaveDataClearBindings = 667,
    MenuOptionsTooltipDialogOpacity = 668,
    MenuOptionsLabelDialogOpacity = 669,
    MenuOptionsDeveloperLogSourceFilterHeading = 670,
    MenuOptionsChoicePowerPreferenceDefault = 671,
    MenuOptionsChoicePowerPreferenceLowPower = 672,
    MenuOptionsChoicePowerPreferenceHighPerformance = 673,
    MenuOptionsInterruptConfirmImportGlobalData = 674,
    MenuOptionsInterruptConfirmImportGlobalDataDescription = 675,
    MenuOptionsInterruptLoadingImportingGlobalData = 676,
    MenuOptionsInterruptLoadingImportingGlobalDataDescription = 677,
    MenuOptionsAudioVolumeDisplay = 678,
    MenuPauseButtonContinue = 679,
    MenuPauseButtonOptions = 680,
    MenuPauseButtonWorld = 681,
    MenuPauseButtonTitleScreen = 682,
    MenuPauseButtonStopServer = 683,
    MenuPauseHeadingPaused = 684,
    MenuPauseParagraphPaused = 685,
    MenuPauseHeadingNotPaused = 686,
    MenuPauseParagraphNotPaused = 687,
    MenuPauseHeadingDedicatedServer = 688,
    MenuPauseParagraphDedicatedServer = 689,
    MenuPauseInterruptGhostKeepSave = 690,
    MenuPauseInterruptGhostKeepSaveDescription = 691,
    MenuWorldTitle = 692,
    MenuWorldDescription = 693,
    MenuWorldHeadingMultiplayer = 694,
    MenuWorldOpenServer = 695,
    MenuWorldOpenServerDescription = 696,
    MenuWorldPauseServer = 697,
    MenuWorldPauseServerDescription = 698,
    MenuWorldCopyGameCode = 699,
    MenuWorldCopyGameCodeTooltip = 700,
    MenuJoinServerTitle = 701,
    MenuJoinServerDescription = 702,
    MenuJoinServerInputPlaceholder = 703,
    MenuJoinServerNext = 704,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 705,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 706,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 707,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 708,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 709,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 710,
    MenuSharedMultiplayerChoicePVP = 711,
    MenuSharedMultiplayerChoicePVPDescription = 712,
    MenuSharedMultiplayerMaxPlayers = 713,
    MenuSharedRealTimeTickSpeedTooltip = 714,
    MenuSharedRealTimeTickSpeedLabel = 715,
    MenuSharedButtonDefault = 716,
    MenuSharedValueTickSpeed = 717,
    MenuSharedValuePercentage = 718,
    MiscSortBy = 719,
    MiscSortDirection = 720,
    MiscFilter = 721,
    MiscPlayerNameDefault = 722,
    MiscPlayerNameServer = 723,
    MiscSaveNameDefault = 724,
    MiscSaveVersionUnknown = 725,
    MiscDailyChallengeName = 726,
    MiscDifficultyHardcore = 727,
    MiscDifficultyCasual = 728,
    MiscDifficultyDailyChallenge = 729,
    MiscDifficultyCustom = 730,
    MiscVersion = 731,
    MiscVersionBeta = 732,
    MiscVersionRelease = 733,
    MiscPartOfDayDawn = 734,
    MiscPartOfDaySunrise = 735,
    MiscPartOfDayDaytime = 736,
    MiscPartOfDaySunset = 737,
    MiscPartOfDayDusk = 738,
    MiscPartOfDayNighttime = 739,
    MiscTime = 740,
    MiscTimeMeridiem = 741,
    MiscBindableOr = 742,
    MiscBindableNoBindings = 743,
    SteamworksInterruptURLOpenedInBrowser = 744,
    SteamworksInterruptURLOpenedInBrowserDescription = 745,
    SteamworksInterruptWorkshopOpenedInBrowser = 746,
    SteamworksInterruptWorkshopOpenedInBrowserDescription = 747,
    SteamworksInterruptModWithNameAlreadyExists = 748,
    SteamworksInterruptModWithNameAlreadyExistsDescription = 749,
    SteamworksInterruptModImportSaveGameFailure = 750,
    SteamworksInterruptModImportSaveGameFailureDescription = 751,
    SteamworksInterruptModImportedSaveGame = 752,
    SteamworksInterruptModImportedSaveGameDescription = 753,
    SteamworksInterruptLoadingRefreshingMods = 754,
    SteamworksInterruptLoadingRefreshingModsDescription = 755,
    SteamworksInterruptOpenFolderFailure = 756,
    SteamworksInterruptOpenFolderFailureDescription = 757,
    DifficultyOptionsPeaceful = 758,
    DifficultyOptionsRespawn = 759,
    DifficultyOptionsEternalNight = 760,
    DifficultyOptionsTimeInitial = 761,
    DifficultyOptionsTimeFrozen = 762,
    DifficultyOptionsTimeDayLength = 763,
    DifficultyOptionsTimeDayPercent = 764,
    DifficultyOptionsNoItems = 765,
    DifficultyOptionsBenignityInitial = 766,
    DifficultyOptionsBenignityMultiplier = 767,
    DifficultyOptionsMalignityInitial = 768,
    DifficultyOptionsMalignityMultiplier = 769,
    DifficultyOptionsStatInitial = 770,
    DifficultyOptionsStatMax = 771,
    DifficultyOptionsStatMultiplier = 772,
    DifficultyOptionsStatusEffectStartWith = 773,
    DifficultyOptionsStatusEffectUntreatable = 774,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 775,
    DifficultyOptionsNoRandomSkills = 776,
    DifficultyOptionsSkillGainMultiplier = 777,
    DifficultyOptionsSkillInitial = 778,
    DifficultyOptionsStatusEffectPermanent = 779,
    DifficultyOptionsStatusEffectRateMultiplier = 780,
    DifficultyOptionsStatusEffectMultiplier = 781,
    EquipmentBack = 782,
    EquipmentBelt = 783,
    EquipmentChest = 784,
    EquipmentFeet = 785,
    EquipmentHands = 786,
    EquipmentHead = 787,
    EquipmentLeftHand = 788,
    EquipmentLeftHandOption = 789,
    EquipmentLegs = 790,
    EquipmentNeck = 791,
    EquipmentRightHand = 792,
    EquipmentRightHandOption = 793,
    EquipmentUse = 794,
    HudFilter = 795,
    QuickSlot1 = 796,
    QuickSlot2 = 797,
    QuickSlot3 = 798,
    QuickSlot4 = 799,
    QuickSlot5 = 800,
    QuickSlot6 = 801,
    QuickSlot7 = 802,
    QuickSlot8 = 803,
    QuickSlot9 = 804,
    TabCrafting = 805,
    TabDismantle = 806,
    Version = 807,
    WindowTitleContainer = 808,
    WindowTitleCrafting = 809,
    WindowTitleEquipment = 810,
    WindowTitleInventory = 811
}
export default UiTranslation;
