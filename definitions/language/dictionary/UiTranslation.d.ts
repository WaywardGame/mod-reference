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
    GameDialogMessagesName = 1,
    GameDialogMessagesOptionTimestamp = 2,
    GameDialogMessagesOptionShowSendButton = 3,
    GameDialogMessagesOptionShowOptionsButton = 4,
    GameDialogMessagesOptionMaxMessages = 5,
    GameDialogMessagesEditFiltersName = 6,
    GameDialogMessagesEditFiltersLabelName = 7,
    GameDialogMessagesEditFiltersButtonDelete = 8,
    GameDialogMessagesEditFiltersButtonSave = 9,
    GameDialogMessagesEditFiltersButtonReset = 10,
    GameDialogMessagesEditFiltersButtonNew = 11,
    GameDialogMessagesEditFiltersInterruptSaveOverExisting = 12,
    GameDialogMessagesEditFiltersInterruptSaveOverExistingDescription = 13,
    GameDialogMessagesEditFiltersInterruptResetConfirm = 14,
    GameDialogMessagesEditFiltersInterruptResetConfirmDescription = 15,
    GameDialogNotesName = 16,
    GameDialogNotesNoteTime = 17,
    GameDialogNotesNoteNumber = 18,
    GameDialogNotesNoteLockedTitle = 19,
    GameDialogNotesNoteLockedDescription = 20,
    GameDialogNotesLinkId = 21,
    GameDialogNotesLinkLearnMore = 22,
    GameDialogNotesSettingsPinUnreadNotesAutomatically = 23,
    GameDialogQuickSettingsName = 24,
    GameDialogMilestonesName = 25,
    GameDialogMilestonesInvisibleMilestone = 26,
    GameDialogMilestonesProgress = 27,
    GameDialogMilestonesProgressHidden = 28,
    GameDialogMilestonesMilestone = 29,
    GameDialogMilestonesTooltipHidden = 30,
    GameDialogMilestonesTooltipInvisible = 31,
    GameDialogMilestonesSortName = 32,
    GameDialogMilestonesSortProgress = 33,
    GameDialogSkillsName = 34,
    GameDialogSkillsSkill = 35,
    GameDialogSkillsTooltipReputationImpact = 36,
    GameDialogSkillsTooltipCanIncrease = 37,
    GameDialogSkillsSortName = 38,
    GameDialogSkillsSortLevel = 39,
    GameDialogBookName = 40,
    GameDialogMapName = 41,
    GameDialogMapTooltipDecode = 42,
    GameDialogQuestsName = 43,
    GameDialogQuestsLink = 44,
    GameDialogQuestsChildQuests = 45,
    GameDialogQuestsRequirements = 46,
    GameDialogQuestsActiveQuests = 47,
    GameDialogQuestsCompletedQuests = 48,
    GameDialogQuestsCompleteQuest = 49,
    GameTooltipShowMoreInformation = 50,
    GameTooltipLegendaryMaxWeightLabel = 51,
    GameStatsPercentage = 52,
    GameStatsStatAttack = 53,
    GameStatsStatGeneric = 54,
    GameStatsStatGenericWithMax = 55,
    GameStatsStatbar = 56,
    GameStatsStatHealthTooltip = 57,
    GameStatsStatStaminaTooltip = 58,
    GameStatsStatHungerTooltip = 59,
    GameStatsStatThirstTooltip = 60,
    GameStatsStatReputationTooltipDifficulty = 61,
    GameStatsStatReputationTooltipDifficultyEasy = 62,
    GameStatsStatReputationTooltipDifficultyHard = 63,
    GameStatsStatReputationTooltipDifficultyInsane = 64,
    GameStatsStatReputationTooltipDifficultyMedium = 65,
    GameStatsStatReputationTooltipDifficultySimple = 66,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 67,
    GameStatsStatReputationTooltipDifficultyVeryHard = 68,
    GameStatsStatReputationTooltipBenignity = 69,
    GameStatsStatReputationTooltipMalignity = 70,
    GameStatsStatReputationTooltipScore = 71,
    GameStatsStatReputationTooltipTurn = 72,
    GameStatsStatReputationTooltipTicks = 73,
    GameStatsStatWeightTooltip = 74,
    GameStatsStatAttackTooltipTactics = 75,
    GameStatsStatAttackTooltipLeftHand = 76,
    GameStatsStatAttackTooltipRightHand = 77,
    GameStatsStatDefenseTooltipBase = 78,
    GameStatsStatDefenseTooltipBlunt = 79,
    GameStatsStatDefenseTooltipParrying = 80,
    GameStatsStatDefenseTooltipFire = 81,
    GameStatsStatDefenseTooltipPiercing = 82,
    GameStatsStatDefenseTooltipSlashing = 83,
    GameQuadrantElementStats = 84,
    GameQuadrantElementMenuBar = 85,
    GameQuadrantElementQuickslots = 86,
    GameQuadrantElementMessages = 87,
    GameQuadrantElementContextMenuMoveTo = 88,
    GameQuadrantElementContextMenuSwitchWith = 89,
    GameItemBarterCredit = 90,
    GameItemBarterCreditTrade = 91,
    GameInterruptItemMayBeDestroyedInCraft = 92,
    GameInterruptItemMayBeDestroyedInCraftDescription = 93,
    GameInterruptItemMayBeDestroyedOnUse = 94,
    GameInterruptItemMayBeDestroyedOnUseDescription = 95,
    GameInterruptLoadingQuitting = 96,
    GameInterruptLoadingQuittingDescription = 97,
    GameInterruptLoadingSaving = 98,
    GameInterruptLoadingSavingDescription = 99,
    GameInterruptReleaseCreature = 100,
    GameInterruptReleaseCreatureDescription = 101,
    GameInterruptRenameCreature = 102,
    GameInterruptRenameCreatureDescription = 103,
    GameInterruptRenameDoodad = 104,
    GameInterruptRenameDoodadDescription = 105,
    GameInterruptRenameItem = 106,
    GameInterruptRenameItemDescription = 107,
    GameInterruptReturnToTitleScreen = 108,
    GameInterruptReturnToTitleScreenChallenge = 109,
    GameInterruptReturnToTitleScreenChallengeDescription = 110,
    GameInterruptReturnToTitleScreenDescription = 111,
    GameInterruptLoadingWorld = 112,
    GameInterruptLoadingWorldDescription = 113,
    GameInterruptLoadingGeneratingWorld = 114,
    GameInterruptLoadingGeneratingWorldDescription = 115,
    GameInterruptLoadingFinalizingWorld = 116,
    GameInterruptLoadingFinalizingWorldDescription = 117,
    GameInterruptSailAwayEnd = 118,
    GameInterruptSailAwayEndDescription = 119,
    GameInterruptSailAwayReturnable = 120,
    GameInterruptSailAwayReturnableDescription = 121,
    GameInterruptTravelAway = 122,
    GameInterruptTravelAwayDescription = 123,
    GameInterruptLoadingResting = 124,
    GameInterruptLoadingRestingDescription = 125,
    GameInterruptLoadingSleeping = 126,
    GameInterruptLoadingSleepingDescription = 127,
    GameInterruptLoadingTraveling = 128,
    GameInterruptLoadingTravelingDescription = 129,
    GameInterruptLoadingLostGLContext = 130,
    GameInterruptLoadingAutoSaving = 131,
    GameInterruptLoadingAutoSavingDescription = 132,
    GameInterruptLoadingLostGLContextDescription = 133,
    GameInterruptLoadingMods = 134,
    GameInterruptLoadingModsDescription = 135,
    GameInterruptLoadingMultiplayerPlayerConnecting = 136,
    GameInterruptLoadingMultiplayerSyncing = 137,
    GameInterruptLoadingReloadingWebGl = 138,
    GameInterruptDangerousStep = 139,
    GameInterruptDangerousStepDescription = 140,
    GameInterruptSaveFailure = 141,
    GameInterruptSaveFailureDescription = 142,
    GameInterruptLoadFailure = 143,
    GameInterruptLoadFailureDescription = 144,
    GameInterruptDesalinationNoNeed = 145,
    GameInterruptDesalinationNoNeedDescription = 146,
    GameInterruptWellConvert = 147,
    GameInterruptWellConvertDescription = 148,
    GameInterruptNoHealingRequired = 149,
    GameInterruptNoHealingRequiredDescription = 150,
    GameInterruptConfirmationActionOnFire = 151,
    GameInterruptConfirmationActionOnFireDescription = 152,
    GameInterruptConfirmationDestroyOnGather = 153,
    GameInterruptConfirmationDestroyOnGatherDescription = 154,
    GameInterruptLoadingGame = 155,
    GameInterruptLoadingGameDescription = 156,
    GameInterruptLoadingSprites = 157,
    GameInterruptLoadingSpritesDescription = 158,
    GameInterruptMultiplayerSynchronizing = 159,
    GameInterruptMultiplayerSynchronizingDescription = 160,
    GameInterruptNoSaveOnDeath = 161,
    GameInterruptNoSaveOnDeathDescription = 162,
    GameInterruptItemsMayBeDestroyedOnUse = 163,
    GameInterruptItemsMayBeDestroyedOnUseDescription = 164,
    GameMenuBarButtonTooltipBindable = 165,
    GameMenuBarButtonTooltipMenu = 166,
    GameMenuBarButtonTooltipSave = 167,
    GameMenuBarButtonTooltipNotes = 168,
    GameMenuBarButtonTooltipMilestones = 169,
    GameMenuBarButtonTooltipMessages = 170,
    GameMenuBarButtonTooltipHelp = 171,
    GameMenuBarButtonTooltipQuickSettings = 172,
    GameMenuBarButtonTooltipActions = 173,
    GameMenuBarButtonTooltipInventory = 174,
    GameMenuBarButtonTooltipCrafting = 175,
    GameMenuBarButtonTooltipEquipment = 176,
    GameMenuBarButtonTooltipSkills = 177,
    GameMenuBarButtonTooltipQuests = 178,
    GameMessagesButtonSend = 179,
    GameMessagesContextMenuShowAsDialog = 180,
    GameMessagesContextMenuClear = 181,
    GameMessagesContextMenuCopy = 182,
    GameMessagesContextMenuExport = 183,
    GameMessagesContextMenuClearInterrupt = 184,
    GameMessagesContextMenuClearInterruptDescription = 185,
    GameMessagesFilter = 186,
    GameMessagesFilterAll = 187,
    GameMessagesFilterGame = 188,
    GameMessagesFilterChat = 189,
    GameMessagesFiltersEdit = 190,
    GameMessagesNewNote = 191,
    GameMessagesTurn = 192,
    GameMultiplayerInterruptBanned = 193,
    GameMultiplayerInterruptConnected = 194,
    GameMultiplayerInterruptConnectedDescriptionDownloadingWorldData = 195,
    GameMultiplayerInterruptConnectedDescriptionWaitingForWorldData = 196,
    GameMultiplayerInterruptConnecting = 197,
    GameMultiplayerInterruptConnectingDescription = 198,
    GameMultiplayerInterruptFailedToConnect = 199,
    GameMultiplayerInterruptFailedToLoadMods = 200,
    GameMultiplayerInterruptKicked = 201,
    GameMultiplayerInterruptLostConnection = 202,
    GameMultiplayerInterruptRequiredModIsDisabled = 203,
    GameMultiplayerInterruptRequiredModNotInstalled = 204,
    GameMultiplayerInterruptRequiredModNotMultiplayerCompatible = 205,
    GameMultiplayerInterruptRequiredModUnableToLoad = 206,
    GameMultiplayerInterruptRequiredModVersionMismatch = 207,
    GameMultiplayerInterruptRestartServerAfterLoadingSave = 208,
    GameMultiplayerInterruptRestartServerAfterLoadingSaveDescription = 209,
    GameMultiplayerInterruptServerShutdown = 210,
    GameMultiplayerInterruptSynchronizationError = 211,
    GameMultiplayerInterruptSynchronizationErrorDescription = 212,
    GameMultiplayerInterruptUnableToJoinGame = 213,
    GameMultiplayerInterruptUnableToJoinGameBuildMismatch = 214,
    GameMultiplayerInterruptUnableToJoinGameDuplicateIdentifier = 215,
    GameMultiplayerInterruptUnableToJoinGameFriendsOnly = 216,
    GameMultiplayerInterruptUnableToJoinGameServerFull = 217,
    GameMultiplayerInterruptUnableToJoinGameSteamRequired = 218,
    GameMultiplayerInterruptUnableToJoinGameUnknownError = 219,
    GameMultiplayerInterruptUnableToJoinGameVersionMismatch = 220,
    MenuAboutTitle = 221,
    MenuAboutDescription = 222,
    MenuAboutGameDescription = 223,
    MenuAboutSectionTeam = 224,
    MenuAboutTeamMemberResponsibilities = 225,
    MenuAboutTeamMemberName = 226,
    MenuAboutTeamMemberNickname = 227,
    MenuAboutSectionContributors = 228,
    MenuAboutSectionSpecialThanks = 229,
    MenuAboutTextSpecialThanksTestorsAndDonators = 230,
    MenuAboutSectionLibraries = 231,
    MenuAboutSectionLibrariesDescription = 232,
    MenuBindings = 233,
    MenuBindingsDescription = 234,
    MenuChangelogTitle = 235,
    MenuChangelogDescription = 236,
    MenuChangelogHeadingFailedLoad = 237,
    MenuChangelogHeadingChangeCount = 238,
    MenuChangelogInterruptLoadingChangelog = 239,
    MenuChangelogInterruptLoadingChangelogDescription = 240,
    MenuCharacterCreationButtonRandomizeName = 241,
    MenuCharacterCreationButtonExportTooltip = 242,
    MenuCharacterCreationButtonImportTooltip = 243,
    MenuCharacterCreationButtonStartGame = 244,
    MenuCharacterCreationButtonJoinGame = 245,
    MenuCharacterCreationDescription = 246,
    MenuCharacterCreationHeadingHairColor = 247,
    MenuCharacterCreationHeadingHairStyle = 248,
    MenuCharacterCreationHeadingSkinTone = 249,
    MenuCharacterCreationLabelName = 250,
    MenuCharacterCreationTitle = 251,
    MenuCharacterCreationInterruptImportCharacterFailure = 252,
    MenuCharacterCreationInterruptImportCharacterFailureDescription = 253,
    MenuCharacterCreationButtonRotateLeftTooltip = 254,
    MenuCharacterCreationButtonRotateRightTooltip = 255,
    MenuCharacterCreationButtonRandomizeTooltip = 256,
    MenuCharacterSelectionButtonNewCharacter = 257,
    MenuCharacterSelectionDescription = 258,
    MenuCharacterSelectionHeadingNoCharacters = 259,
    MenuCharacterSelectionTitle = 260,
    MenuCharacterSelectionLabelLastUse = 261,
    MenuCharacterSelectionLabelUseCount = 262,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 263,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 264,
    MenuCharacterSelectionInterruptDeleteCharacter = 265,
    MenuMultiplayerDescription = 266,
    MenuMultiplayerTitle = 267,
    MenuMultiplayerButtonJoinById = 268,
    MenuMultiplayerServerLabelReputation = 269,
    MenuMultiplayerServerLabelDays = 270,
    MenuMultiplayerButtonNewGame = 271,
    MenuMultiplayerButtonLoadGame = 272,
    MenuMultiplayerServerTooltipPVP = 273,
    MenuMultiplayerServerTooltipModsLabel = 274,
    MenuMultiplayerServerTooltipFriendsLabel = 275,
    MenuMultiplayerServerPlayers = 276,
    MenuMultiplayerServerRegion = 277,
    MenuMultiplayerServerHost = 278,
    MenuMultiplayerServerDedicated = 279,
    MenuMultiplayerHeadingPlayersOnline = 280,
    MenuGameEndTitleDead = 281,
    MenuGameEndTitleWon = 282,
    MenuGameEndShareFacebook = 283,
    MenuGameEndShareTwitter = 284,
    MenuGameEndContinueAsGhost = 285,
    MenuGameEndReturnToIsland = 286,
    MenuGameEndExitToMenu = 287,
    MenuGameEndInterruptGhostDeleteSave = 288,
    MenuGameEndInterruptWonDeleteSave = 289,
    MenuGameEndInterruptDeleteSaveDescription = 290,
    MenuGameEndInterruptReturnToTitleScreen = 291,
    MenuGameEndInterruptReturnToTitleScreenChallengeMultiplayerDescription = 292,
    MenuGameEndInterruptReturnToTitleScreenChallengeDescription = 293,
    MenuGameEndInterruptReturnToTitleScreenMultiplayerDescription = 294,
    MenuHelpTitle = 295,
    MenuHelpDescription = 296,
    MenuHelpLabelSearch = 297,
    MenuHighscoresTitle = 298,
    MenuHighscoresDescription = 299,
    MenuHighscoresDifficultyFilterAll = 300,
    MenuHighscoresHighscoreLabelDifficulty = 301,
    MenuHighscoresHighscoreLabelTurns = 302,
    MenuHighscoresHighscoreLabelScore = 303,
    MenuHighscoresHighscoreLabelPlace = 304,
    MenuHighscoresHighscoreLabelDate = 305,
    MenuHighscoresHighscoreLabelDeathBy = 306,
    MenuHighscoresHighscoreTitle = 307,
    MenuHighscoresCharacterNameUnknown = 308,
    MenuLoadGameButtonNewGame = 309,
    MenuLoadGameButtonNewGameButtonImportTooltip = 310,
    MenuLoadGameDescription = 311,
    MenuLoadGameSaveButtonDeleteTooltip = 312,
    MenuLoadGameSaveButtonEditNameTooltip = 313,
    MenuLoadGameSaveButtonExportTooltip = 314,
    MenuLoadGameSaveTooltipLabelCreatedTime = 315,
    MenuLoadGameSaveTooltipLabelSaveTime = 316,
    MenuLoadGameSaveTooltipLabelDifficulty = 317,
    MenuLoadGameSaveTooltipLabelScore = 318,
    MenuLoadGameSaveTooltipLabelSeed = 319,
    MenuLoadGameSaveTooltipLabelTurns = 320,
    MenuLoadGameSaveTooltipLabelMods = 321,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 322,
    MenuLoadGameSaveTooltipMod = 323,
    MenuLoadGameSlotsRemaining = 324,
    MenuLoadGameTitle = 325,
    MenuLoadGameInterruptDeleteSave = 326,
    MenuLoadGameInterruptDeleteSaveDescription = 327,
    MenuLoadGameInterruptLoadingExportingSave = 328,
    MenuLoadGameInterruptLoadingExportingSaveDescription = 329,
    MenuLoadGameInterruptLoadingImportingSave = 330,
    MenuLoadGameInterruptLoadingImportingSaveDescription = 331,
    MenuLoadGameInterruptImportSaveFailure = 332,
    MenuLoadGameInterruptImportSaveFailureDescription = 333,
    MenuLoadGameInterruptExportType = 334,
    MenuLoadGameInterruptExportTypeDescription = 335,
    MenuLoadGameInterruptPublishingSave = 336,
    MenuLoadGameInterruptPublishingSaveDescription = 337,
    MenuLoadGameInterruptMissingMod = 338,
    MenuLoadGameInterruptMissingModDescription = 339,
    MenuLoadGameInterruptMissingModDescriptionLabelModsMissing = 340,
    MenuLoadGameInterruptMissingModDescriptionLabelModsDisabled = 341,
    MenuLoadGameInterruptLoading = 342,
    MenuLoadGameInterruptLoadingDescription = 343,
    MenuMainButtonAbout = 344,
    MenuMainButtonChangelog = 345,
    MenuMainButtonContinueGame = 346,
    MenuMainButtonMultiplayer = 347,
    MenuMainButtonHighscores = 348,
    MenuMainButtonLoadGame = 349,
    MenuMainButtonMods = 350,
    MenuMainButtonNewGame = 351,
    MenuMainButtonNews = 352,
    MenuMainButtonOptions = 353,
    MenuMainButtonQuitGame = 354,
    MenuMainInterruptLoadingNews = 355,
    MenuMainInterruptLoadingNewsDescription = 356,
    MenuMainInterruptLoadingChangelog = 357,
    MenuMainInterruptLoadingChangelogDescription = 358,
    MenuMainInterruptWelcomeToVersion = 359,
    MenuMainInterruptWelcomeToVersionDescription = 360,
    MenuMainInterruptOldVersionWarning = 361,
    MenuMainInterruptOldVersionWarningDescription = 362,
    MenuModsButtonDisableAll = 363,
    MenuModsButtonEnableAll = 364,
    MenuModsButtonModdingGuide = 365,
    MenuModsButtonOpenFolder = 366,
    MenuModsButtonOpenWorkshop = 367,
    MenuModsDescription = 368,
    MenuModsInterruptConfirmPublish = 369,
    MenuModsInterruptConfirmPublishUpdate = 370,
    MenuModsInterruptModEnableMultipleLanguages = 371,
    MenuModsInterruptModEnableMultipleLanguagesDescription = 372,
    MenuModsInterruptModEnableUseLanguage = 373,
    MenuModsInterruptModEnableUseLanguageDescription = 374,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshop = 375,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshopDescription = 376,
    MenuModsInterruptConfirmPublishDescription = 377,
    MenuModsInterruptConfirmPublishUpdateDescription = 378,
    MenuModsInterruptPublishingMod = 379,
    MenuModsInterruptPublishingModDescription = 380,
    MenuModsInterruptPublishError = 381,
    MenuModsInterruptPublishErrorDescription = 382,
    MenuModsInterruptUpdatingMod = 383,
    MenuModsInterruptUpdatingModDescription = 384,
    MenuModsInterruptPublishUpdateError = 385,
    MenuModsInterruptPublishUpdateErrorDescription = 386,
    MenuModsInterruptInfoMissingDependencies = 387,
    MenuModsInterruptInfoMissingDependenciesDescription = 388,
    MenuModsInterruptConfirmEnableDisabledDependencies = 389,
    MenuModsInterruptConfirmEnableDisabledDependenciesDescription = 390,
    MenuModsInterruptConfirmDisableDependents = 391,
    MenuModsInterruptConfirmDisableDependentsDescription = 392,
    MenuModsInterruptConfirmUninstallMod = 393,
    MenuModsInterruptConfirmUninstallModDescription = 394,
    MenuModsInterruptUnloadableSaveGameMod = 395,
    MenuModsInterruptUnloadableSaveGameModDescription = 396,
    MenuModsTitle = 397,
    MenuModsTooltipLabelAuthor = 398,
    MenuModsTooltipLabelTags = 399,
    MenuModsTooltipLabelDependencies = 400,
    MenuModsTooltipLabelProvides = 401,
    MenuModsTooltipLabelVersion = 402,
    MenuModsTooltipLabelDescription = 403,
    MenuModsTooltipLabelInstallDate = 404,
    MenuModsTooltipLabelCreatedDate = 405,
    MenuModsTooltipLabelLastUpdatedDate = 406,
    MenuModsTooltipMultiplayerCompatibility = 407,
    MenuModsTooltipModOptions = 408,
    MenuModsTooltipProvidesCustomizations = 409,
    MenuModsTooltipProvidesImageOverrides = 410,
    MenuModsTooltipProvidesLanguage = 411,
    MenuModsTooltipProvidesLanguageExtensions = 412,
    MenuModsTooltipProvidesScript = 413,
    MenuModsTooltipProvidesStylesheet = 414,
    MenuModsTooltipPublishMod = 415,
    MenuModsTooltipUninstallMod = 416,
    MenuModsTooltipViewInSteamWorkshop = 417,
    MenuModsButtonEditInternalMods = 418,
    MenuModsSectionHeading = 419,
    MenuModsSubmenuEditInternalModsTitle = 420,
    MenuModsSubmenuEditInternalModsDescription = 421,
    MenuModsSubmenuEditInternalModsInterruptModsListChangeReload = 422,
    MenuModsSubmenuEditInternalModsInterruptModsListChangeReloadDescription = 423,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 424,
    MenuNewGameButtonNext = 425,
    MenuNewGameButtonStartServer = 426,
    MenuNewGameDescription = 427,
    MenuNewGameLabelEditName = 428,
    MenuNewGameLabelEditSeed = 429,
    MenuNewGamePlaceholderEditSeed = 430,
    MenuNewGameTitle = 431,
    MenuNewGameChoiceDifficulty = 432,
    MenuNewGameChoiceSingleplayer = 433,
    MenuNewGameChoiceSingleplayerDescription = 434,
    MenuNewGameChoiceMultiplayer = 435,
    MenuNewGameChoiceMultiplayerDescription = 436,
    MenuNewGameChoiceTurnModeManual = 437,
    MenuNewGameChoiceTurnModeManualDescription = 438,
    MenuNewGameChoiceTurnModeRealTime = 439,
    MenuNewGameChoiceTurnModeRealTimeDescription = 440,
    MenuNewGameChoiceTurnModeSimulated = 441,
    MenuNewGameChoiceTurnModeSimulatedDescription = 442,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 443,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 444,
    MenuNewGameChoiceDifficultyChallengeDaily = 445,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 446,
    MenuCustomGameOptionsTitle = 447,
    MenuCustomGameOptionsDescription = 448,
    MenuCustomGameOptionsPeaceful = 449,
    MenuCustomGameOptionsPeacefulDescription = 450,
    MenuCustomGameOptionsRespawnOnDeath = 451,
    MenuCustomGameOptionsRespawnOnDeathDescription = 452,
    MenuCustomGameOptionsBenignityInitial = 453,
    MenuCustomGameOptionsBenignityMultiplier = 454,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 455,
    MenuCustomGameOptionsMalignityInitial = 456,
    MenuCustomGameOptionsMalignityMultiplier = 457,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 458,
    MenuCustomGameOptionsStatMultiplier = 459,
    MenuCustomGameOptionsStatMultiplierTooltip = 460,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 461,
    MenuCustomGameOptionsHeadingGeneral = 462,
    MenuCustomGameOptionsHeadingTime = 463,
    MenuCustomGameOptionsHeadingStats = 464,
    MenuCustomGameOptionsHeadingReputation = 465,
    MenuCustomGameOptionsHeadingInventory = 466,
    MenuCustomGameOptionsHeadingSkills = 467,
    MenuCustomGameOptionsHeadingStatusEffects = 468,
    MenuCustomGameOptionsEternalNight = 469,
    MenuCustomGameOptionsTimeFrozen = 470,
    MenuCustomGameOptionsTimeInitial = 471,
    MenuCustomGameOptionsTimeDayLength = 472,
    MenuCustomGameOptionsTimeDayLengthTooltip = 473,
    MenuCustomGameOptionsTimeDayPercent = 474,
    MenuCustomGameOptionsTimeDayPercentTooltip = 475,
    MenuCustomGameOptionsEternalNightDescription = 476,
    MenuCustomGameOptionsStatStarting = 477,
    MenuCustomGameOptionsStatMax = 478,
    MenuCustomGameOptionsStatStartingDisplay = 479,
    MenuCustomGameOptionsStatMaxDisplay = 480,
    MenuCustomGameOptionsStatNoChange = 481,
    MenuCustomGameOptionsStatStrengthTooltip = 482,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 483,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 484,
    MenuCustomGameOptionsStatusEffectStartWith = 485,
    MenuCustomGameOptionsStatusEffectUntreatable = 486,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 487,
    MenuCustomGameOptionsSkillsGenerateRandom = 488,
    MenuCustomGameOptionsSkillsGenerateRandomDescription = 489,
    MenuCustomGameOptionsSkillNone = 490,
    MenuCustomGameOptionsSkillConfigure = 491,
    MenuCustomGameOptionsSkillInitial = 492,
    MenuCustomGameOptionsSkillMultiplier = 493,
    MenuCustomGameOptionsSkillMultiplierTooltip = 494,
    MenuCustomGameOptionsRandomItems = 495,
    MenuCustomGameOptionsRandomItemsDescription = 496,
    MenuNewsButtonDiscord = 497,
    MenuNewsButtonFacebook = 498,
    MenuNewsButtonReddit = 499,
    MenuNewsButtonTwitter = 500,
    MenuNewsDescription = 501,
    MenuNewsHeadingSocial = 502,
    MenuNewsTitle = 503,
    MenuNewsHeadingUnableToLoad = 504,
    MenuNewsButtonAllNews = 505,
    MenuOptionsInterruptLoading = 506,
    MenuOptionsInterruptLoadingDescription = 507,
    MenuOptionsButtonDitherFogOfWar = 508,
    MenuOptionsButtonDisableCustomCursor = 509,
    MenuOptionsButtonFullscreen = 510,
    MenuOptionsButtonDeveloperMode = 511,
    MenuOptionsButtonDeveloperModeContextMenu = 512,
    MenuOptionsButtonPixelFont = 513,
    MenuOptionsButtonReloadGame = 514,
    MenuOptionsButtonExportGlobalSaveData = 515,
    MenuOptionsButtonImportGlobalSaveData = 516,
    MenuOptionsButtonSaveDataClearAll = 517,
    MenuOptionsButtonSaveDataClearCharacters = 518,
    MenuOptionsButtonSaveDataClearHighscores = 519,
    MenuOptionsButtonSaveDataClearMilestones = 520,
    MenuOptionsButtonSaveDataClearOptions = 521,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 522,
    MenuOptionsButtonSaveDataClearSaves = 523,
    MenuOptionsButtonSkipSplash = 524,
    MenuOptionsButtonToggleDevTools = 525,
    MenuOptionsButtonTooltipsCreatures = 526,
    MenuOptionsButtonOpenLogsFolder = 527,
    MenuOptionsButtonTooltipsDoodads = 528,
    MenuOptionsButtonTooltipsItems = 529,
    MenuOptionsButtonTooltipsTerrain = 530,
    MenuOptionsButtonDropLocationFacing = 531,
    MenuOptionsButtonDropLocationFeet = 532,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 533,
    MenuOptionsDescription = 534,
    MenuOptionsHeadingAudio = 535,
    MenuOptionsHeadingDeveloper = 536,
    MenuOptionsHeadingGameplayOptions = 537,
    MenuOptionsHeadingGeneralOptions = 538,
    MenuOptionsHeadingControls = 539,
    MenuOptionsHeadingLanguage = 540,
    MenuOptionsHeadingPowerPreference = 541,
    MenuOptionsHeadingModOptions = 542,
    MenuOptionsHeadingOther = 543,
    MenuOptionsHeadingSaveData = 544,
    MenuOptionsHeadingTooltips = 545,
    MenuOptionsHeadingVideo = 546,
    MenuOptionsInterruptReloadGame = 547,
    MenuOptionsInterruptSaveDataClearAll = 548,
    MenuOptionsInterruptSaveDataClearAllDescription = 549,
    MenuOptionsInterruptSaveDataClearCharacters = 550,
    MenuOptionsInterruptSaveDataClearHighscores = 551,
    MenuOptionsInterruptSaveDataClearMilestones = 552,
    MenuOptionsInterruptSaveDataClearOptions = 553,
    MenuOptionsInterruptSaveDataClearSaves = 554,
    MenuOptionsInterruptSaveDataClearCraftingRecipes = 555,
    MenuOptionsLabelInterfaceScale = 556,
    MenuOptionsLabelDirectionTurnDelay = 557,
    MenuOptionsLabelMouseTurnDelay = 558,
    MenuOptionsTooltipTurnDelay = 559,
    MenuOptionsTooltipMouseTurnDelay = 560,
    MenuOptionsTooltipUiScaleClamped = 561,
    MenuOptionsTooltipControlsFilter = 562,
    MenuOptionsLabelVolumeEffects = 563,
    MenuOptionsLabelVolumeMusic = 564,
    MenuOptionsTabAudio = 565,
    MenuOptionsTabDeveloper = 566,
    MenuOptionsTabGameplay = 567,
    MenuOptionsTabGeneral = 568,
    MenuOptionsTabControls = 569,
    MenuOptionsTabMods = 570,
    MenuOptionsTabSaveData = 571,
    MenuOptionsTabVideo = 572,
    MenuOptionsTitle = 573,
    MenuOptionsTooltipMusicNextTrack = 574,
    MenuOptionsBindChoose = 575,
    MenuOptionsBindChooseAdd = 576,
    MenuOptionsBindLabelModifier = 577,
    MenuOptionsBindButtonResetTooltip = 578,
    MenuOptionsBindButtonDeleteTooltip = 579,
    MenuOptionsBindButtonAddTooltip = 580,
    MenuOptionsButtonAlternatingDirectionMovement = 581,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 582,
    MenuOptionsButtonAlwaysShowMoreInformation = 583,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 584,
    MenuOptionsButtonAutoGatherHarvest = 585,
    MenuOptionsButtonAutoGatherHarvestTooltip = 586,
    MenuOptionsButtonAutoPickup = 587,
    MenuOptionsButtonAutoPickupTooltip = 588,
    MenuOptionsButtonDropOnGatherHarvest = 589,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 590,
    MenuOptionsButtonKeepSortActive = 591,
    MenuOptionsButtonKeepSortActiveTooltip = 592,
    MenuOptionsButtonProtectCraftingItemsInInventory = 593,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 594,
    MenuOptionsButtonProtectCraftingItemContainers = 595,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 596,
    MenuOptionsButtonUseAdjacentContainers = 597,
    MenuOptionsButtonUseAdjacentContainersTooltip = 598,
    MenuOptionsButtonHideEquippedHeadgear = 599,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 600,
    MenuOptionsButtonEnableAutoSave = 601,
    MenuOptionsButtonEnableAutoSaveTooltip = 602,
    MenuOptionsButtonWarnOnDangerousActions = 603,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 604,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 605,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 606,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 607,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 608,
    MenuOptionsHeadingWarnWhenBreakingItems = 609,
    MenuOptionsButtonSaveDataClearBindings = 610,
    MenuOptionsInterruptSaveDataClearBindings = 611,
    MenuOptionsTooltipDialogOpacity = 612,
    MenuOptionsLabelDialogOpacity = 613,
    MenuOptionsDeveloperLogSourceFilterHeading = 614,
    MenuOptionsInterruptConfirmImportGlobalData = 615,
    MenuOptionsInterruptConfirmImportGlobalDataDescription = 616,
    MenuOptionsInterruptLoadingImportingGlobalData = 617,
    MenuOptionsInterruptLoadingImportingGlobalDataDescription = 618,
    MenuOptionsAudioVolumeDisplay = 619,
    MenuOptionsMusicPlaylist = 620,
    MenuOptionsButtonConfigureBindings = 621,
    MenuPauseButtonContinue = 622,
    MenuPauseButtonOptions = 623,
    MenuPauseButtonModes = 624,
    MenuPauseButtonPaused = 625,
    MenuPauseButtonMultiplayer = 626,
    MenuPauseButtonTitleScreen = 627,
    MenuPauseButtonStopServer = 628,
    MenuPauseHeadingPaused = 629,
    MenuPauseParagraphPaused = 630,
    MenuPauseHeadingNotPaused = 631,
    MenuPauseParagraphNotPaused = 632,
    MenuPauseHeadingDedicatedServer = 633,
    MenuPauseParagraphDedicatedServer = 634,
    MenuPauseInterruptGhostKeepSave = 635,
    MenuPauseInterruptGhostKeepSaveDescription = 636,
    MenuPauseInterruptReturnToTitleScreen = 637,
    MenuPauseInterruptReturnToTitleScreenChallengeDescription = 638,
    MenuPauseInterruptReturnToTitleScreenChallengeMultiplayerDescription = 639,
    MenuPauseInterruptReturnToTitleScreenDescription = 640,
    MenuPauseInterruptReturnToTitleScreenMultiplayerDescription = 641,
    MenuModesTitle = 642,
    MenuModesDescription = 643,
    MenuMultiplayerOptionsTitle = 644,
    MenuMultiplayerOptionsDescription = 645,
    MenuMultiplayerOptionsOpenServer = 646,
    MenuMultiplayerOptionsOpenServerDescription = 647,
    MenuMultiplayerOptionsCopyGameCode = 648,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 649,
    MenuMultiplayerOptionsInviteSteamFriends = 650,
    MenuJoinServerTitle = 651,
    MenuJoinServerDescription = 652,
    MenuJoinServerInputPlaceholder = 653,
    MenuJoinServerNext = 654,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 655,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 656,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 657,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 658,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 659,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 660,
    MenuSharedMultiplayerChoicePVP = 661,
    MenuSharedMultiplayerChoicePVPDescription = 662,
    MenuSharedMultiplayerMaxPlayers = 663,
    MenuSharedRealTimeTickSpeedTooltip = 664,
    MenuSharedRealTimeTickSpeedLabel = 665,
    MenuSharedButtonDefault = 666,
    MenuSharedValueTickSpeed = 667,
    MenuSharedValuePercentage = 668,
    MiscSortBy = 669,
    MiscSortDirection = 670,
    MiscFilter = 671,
    MiscPlayerNameDefault = 672,
    MiscPlayerNameServer = 673,
    MiscSaveNameDefault = 674,
    MiscSaveNameDailyChallenge = 675,
    MiscSaveNameChallenge = 676,
    MiscSaveVersionUnknown = 677,
    MiscVersion = 678,
    MiscTime = 679,
    MiscTimeMeridiem = 680,
    MiscBindableOr = 681,
    MiscBindableNoBindings = 682,
    SteamworksInterruptURLOpenedInBrowser = 683,
    SteamworksInterruptURLOpenedInBrowserDescription = 684,
    SteamworksInterruptWorkshopOpenedInBrowser = 685,
    SteamworksInterruptWorkshopOpenedInBrowserDescription = 686,
    SteamworksInterruptModWithNameAlreadyExists = 687,
    SteamworksInterruptModWithNameAlreadyExistsDescription = 688,
    SteamworksInterruptModImportSaveGameFailure = 689,
    SteamworksInterruptModImportSaveGameFailureDescription = 690,
    SteamworksInterruptModImportedSaveGame = 691,
    SteamworksInterruptModImportedSaveGameDescription = 692,
    SteamworksInterruptLoadingRefreshingMods = 693,
    SteamworksInterruptLoadingRefreshingModsDescription = 694,
    SteamworksInterruptOpenFolderFailure = 695,
    SteamworksInterruptOpenFolderFailureDescription = 696,
    DifficultyOptionsPeaceful = 697,
    DifficultyOptionsRespawn = 698,
    DifficultyOptionsEternalNight = 699,
    DifficultyOptionsTimeInitial = 700,
    DifficultyOptionsTimeFrozen = 701,
    DifficultyOptionsTimeDayLength = 702,
    DifficultyOptionsTimeDayPercent = 703,
    DifficultyOptionsNoItems = 704,
    DifficultyOptionsBenignityInitial = 705,
    DifficultyOptionsBenignityMultiplier = 706,
    DifficultyOptionsMalignityInitial = 707,
    DifficultyOptionsMalignityMultiplier = 708,
    DifficultyOptionsStatInitial = 709,
    DifficultyOptionsStatMax = 710,
    DifficultyOptionsStatMultiplier = 711,
    DifficultyOptionsStatusEffectStartWith = 712,
    DifficultyOptionsStatusEffectUntreatable = 713,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 714,
    DifficultyOptionsNoRandomSkills = 715,
    DifficultyOptionsSkillGainMultiplier = 716,
    DifficultyOptionsSkillInitial = 717,
    DifficultyOptionsStatusEffectPermanent = 718,
    DifficultyOptionsStatusEffectRateMultiplier = 719,
    DifficultyOptionsStatusEffectMultiplier = 720,
    EquipmentBack = 721,
    EquipmentBelt = 722,
    EquipmentChest = 723,
    EquipmentFeet = 724,
    EquipmentHands = 725,
    EquipmentHead = 726,
    EquipmentLeftHand = 727,
    EquipmentLeftHandOption = 728,
    EquipmentLegs = 729,
    EquipmentNeck = 730,
    EquipmentRightHand = 731,
    EquipmentRightHandOption = 732,
    EquipmentUse = 733,
    HudFilter = 734,
    QuickSlot1 = 735,
    QuickSlot2 = 736,
    QuickSlot3 = 737,
    QuickSlot4 = 738,
    QuickSlot5 = 739,
    QuickSlot6 = 740,
    QuickSlot7 = 741,
    QuickSlot8 = 742,
    QuickSlot9 = 743,
    TabCrafting = 744,
    TabDismantle = 745,
    Version = 746,
    WindowTitleContainer = 747,
    WindowTitleCrafting = 748,
    WindowTitleEquipment = 749,
    WindowTitleInventory = 750
}
export default UiTranslation;
