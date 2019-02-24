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
    MenuHighscoresHighscoreReplayWithSettings = 309,
    MenuLoadGameButtonNewGame = 310,
    MenuLoadGameButtonNewGameButtonImportTooltip = 311,
    MenuLoadGameDescription = 312,
    MenuLoadGameSaveButtonDeleteTooltip = 313,
    MenuLoadGameSaveButtonEditNameTooltip = 314,
    MenuLoadGameSaveButtonExportTooltip = 315,
    MenuLoadGameSaveTooltipLabelCreatedTime = 316,
    MenuLoadGameSaveTooltipLabelSaveTime = 317,
    MenuLoadGameSaveTooltipLabelDifficulty = 318,
    MenuLoadGameSaveTooltipLabelScore = 319,
    MenuLoadGameSaveTooltipLabelSeed = 320,
    MenuLoadGameSaveTooltipLabelTurns = 321,
    MenuLoadGameSaveTooltipLabelMods = 322,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 323,
    MenuLoadGameSaveTooltipMod = 324,
    MenuLoadGameSlotsRemaining = 325,
    MenuLoadGameTitle = 326,
    MenuLoadGameInterruptDeleteSave = 327,
    MenuLoadGameInterruptDeleteSaveDescription = 328,
    MenuLoadGameInterruptLoadingExportingSave = 329,
    MenuLoadGameInterruptLoadingExportingSaveDescription = 330,
    MenuLoadGameInterruptLoadingImportingSave = 331,
    MenuLoadGameInterruptLoadingImportingSaveDescription = 332,
    MenuLoadGameInterruptImportSaveFailure = 333,
    MenuLoadGameInterruptImportSaveFailureDescription = 334,
    MenuLoadGameInterruptExportType = 335,
    MenuLoadGameInterruptExportTypeDescription = 336,
    MenuLoadGameInterruptPublishingSave = 337,
    MenuLoadGameInterruptPublishingSaveDescription = 338,
    MenuLoadGameInterruptMissingMod = 339,
    MenuLoadGameInterruptMissingModDescription = 340,
    MenuLoadGameInterruptMissingModDescriptionLabelModsMissing = 341,
    MenuLoadGameInterruptMissingModDescriptionLabelModsDisabled = 342,
    MenuLoadGameInterruptLoading = 343,
    MenuLoadGameInterruptLoadingDescription = 344,
    MenuMainButtonAbout = 345,
    MenuMainButtonChangelog = 346,
    MenuMainButtonContinueGame = 347,
    MenuMainButtonMultiplayer = 348,
    MenuMainButtonHighscores = 349,
    MenuMainButtonLoadGame = 350,
    MenuMainButtonMods = 351,
    MenuMainButtonNewGame = 352,
    MenuMainButtonNews = 353,
    MenuMainButtonOptions = 354,
    MenuMainButtonQuitGame = 355,
    MenuMainInterruptLoadingNews = 356,
    MenuMainInterruptLoadingNewsDescription = 357,
    MenuMainInterruptLoadingChangelog = 358,
    MenuMainInterruptLoadingChangelogDescription = 359,
    MenuMainInterruptWelcomeToVersion = 360,
    MenuMainInterruptWelcomeToVersionDescription = 361,
    MenuMainInterruptOldVersionWarning = 362,
    MenuMainInterruptOldVersionWarningDescription = 363,
    MenuModsButtonDisableAll = 364,
    MenuModsButtonEnableAll = 365,
    MenuModsButtonModdingGuide = 366,
    MenuModsButtonOpenFolder = 367,
    MenuModsButtonOpenWorkshop = 368,
    MenuModsDescription = 369,
    MenuModsInterruptConfirmPublish = 370,
    MenuModsInterruptConfirmPublishUpdate = 371,
    MenuModsInterruptModEnableMultipleLanguages = 372,
    MenuModsInterruptModEnableMultipleLanguagesDescription = 373,
    MenuModsInterruptModEnableUseLanguage = 374,
    MenuModsInterruptModEnableUseLanguageDescription = 375,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshop = 376,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshopDescription = 377,
    MenuModsInterruptConfirmPublishDescription = 378,
    MenuModsInterruptConfirmPublishUpdateDescription = 379,
    MenuModsInterruptPublishingMod = 380,
    MenuModsInterruptPublishingModDescription = 381,
    MenuModsInterruptPublishError = 382,
    MenuModsInterruptPublishErrorDescription = 383,
    MenuModsInterruptUpdatingMod = 384,
    MenuModsInterruptUpdatingModDescription = 385,
    MenuModsInterruptPublishUpdateError = 386,
    MenuModsInterruptPublishUpdateErrorDescription = 387,
    MenuModsInterruptInfoMissingDependencies = 388,
    MenuModsInterruptInfoMissingDependenciesDescription = 389,
    MenuModsInterruptConfirmEnableDisabledDependencies = 390,
    MenuModsInterruptConfirmEnableDisabledDependenciesDescription = 391,
    MenuModsInterruptConfirmDisableDependents = 392,
    MenuModsInterruptConfirmDisableDependentsDescription = 393,
    MenuModsInterruptConfirmUninstallMod = 394,
    MenuModsInterruptConfirmUninstallModDescription = 395,
    MenuModsInterruptUnloadableSaveGameMod = 396,
    MenuModsInterruptUnloadableSaveGameModDescription = 397,
    MenuModsTitle = 398,
    MenuModsTooltipLabelAuthor = 399,
    MenuModsTooltipLabelTags = 400,
    MenuModsTooltipLabelDependencies = 401,
    MenuModsTooltipLabelProvides = 402,
    MenuModsTooltipLabelVersion = 403,
    MenuModsTooltipLabelDescription = 404,
    MenuModsTooltipLabelInstallDate = 405,
    MenuModsTooltipLabelCreatedDate = 406,
    MenuModsTooltipLabelLastUpdatedDate = 407,
    MenuModsTooltipMultiplayerCompatibility = 408,
    MenuModsTooltipModOptions = 409,
    MenuModsTooltipProvidesCustomizations = 410,
    MenuModsTooltipProvidesImageOverrides = 411,
    MenuModsTooltipProvidesLanguage = 412,
    MenuModsTooltipProvidesLanguageExtensions = 413,
    MenuModsTooltipProvidesScript = 414,
    MenuModsTooltipProvidesStylesheet = 415,
    MenuModsTooltipPublishMod = 416,
    MenuModsTooltipUninstallMod = 417,
    MenuModsTooltipViewInSteamWorkshop = 418,
    MenuModsButtonEditInternalMods = 419,
    MenuModsSectionHeading = 420,
    MenuModsSubmenuEditInternalModsTitle = 421,
    MenuModsSubmenuEditInternalModsDescription = 422,
    MenuModsSubmenuEditInternalModsInterruptModsListChangeReload = 423,
    MenuModsSubmenuEditInternalModsInterruptModsListChangeReloadDescription = 424,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 425,
    MenuNewGameButtonNext = 426,
    MenuNewGameButtonStartServer = 427,
    MenuNewGameDescription = 428,
    MenuNewGameLabelEditName = 429,
    MenuNewGameLabelEditSeed = 430,
    MenuNewGamePlaceholderEditSeed = 431,
    MenuNewGameTitle = 432,
    MenuNewGameChoiceDifficulty = 433,
    MenuNewGameChoiceSingleplayer = 434,
    MenuNewGameChoiceSingleplayerDescription = 435,
    MenuNewGameChoiceMultiplayer = 436,
    MenuNewGameChoiceMultiplayerDescription = 437,
    MenuNewGameChoiceTurnModeManual = 438,
    MenuNewGameChoiceTurnModeManualDescription = 439,
    MenuNewGameChoiceTurnModeRealTime = 440,
    MenuNewGameChoiceTurnModeRealTimeDescription = 441,
    MenuNewGameChoiceTurnModeSimulated = 442,
    MenuNewGameChoiceTurnModeSimulatedDescription = 443,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 444,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 445,
    MenuNewGameChoiceDifficultyChallengeDaily = 446,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 447,
    MenuNewGameInterruptTooManySaves = 448,
    MenuNewGameInterruptTooManySavesDescription = 449,
    MenuCustomGameOptionsTitle = 450,
    MenuCustomGameOptionsDescription = 451,
    MenuCustomGameOptionsRespawnOnDeath = 452,
    MenuCustomGameOptionsRespawnOnDeathDescription = 453,
    MenuCustomGameOptionsCreaturesPeaceful = 454,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 455,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 456,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 457,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 458,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 459,
    MenuCustomGameOptionsCreaturesAllowSpawning = 460,
    MenuCustomGameOptionsCreatureNone = 461,
    MenuCustomGameOptionsCreatureConfigure = 462,
    MenuCustomGameOptionsBenignityInitial = 463,
    MenuCustomGameOptionsBenignityMultiplier = 464,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 465,
    MenuCustomGameOptionsMalignityInitial = 466,
    MenuCustomGameOptionsMalignityMultiplier = 467,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 468,
    MenuCustomGameOptionsStatMultiplier = 469,
    MenuCustomGameOptionsStatMultiplierTooltip = 470,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 471,
    MenuCustomGameOptionsHeadingGeneral = 472,
    MenuCustomGameOptionsHeadingTime = 473,
    MenuCustomGameOptionsHeadingStats = 474,
    MenuCustomGameOptionsHeadingReputation = 475,
    MenuCustomGameOptionsHeadingInventory = 476,
    MenuCustomGameOptionsHeadingCreatures = 477,
    MenuCustomGameOptionsHeadingSkills = 478,
    MenuCustomGameOptionsHeadingStatusEffects = 479,
    MenuCustomGameOptionsEternalNight = 480,
    MenuCustomGameOptionsTimeFrozen = 481,
    MenuCustomGameOptionsTimeInitial = 482,
    MenuCustomGameOptionsTimeDayLength = 483,
    MenuCustomGameOptionsTimeDayLengthTooltip = 484,
    MenuCustomGameOptionsTimeDayPercent = 485,
    MenuCustomGameOptionsTimeDayPercentTooltip = 486,
    MenuCustomGameOptionsEternalNightDescription = 487,
    MenuCustomGameOptionsStatStarting = 488,
    MenuCustomGameOptionsStatMax = 489,
    MenuCustomGameOptionsStatStartingDisplay = 490,
    MenuCustomGameOptionsStatMaxDisplay = 491,
    MenuCustomGameOptionsStatNoChange = 492,
    MenuCustomGameOptionsStatStrengthTooltip = 493,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 494,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 495,
    MenuCustomGameOptionsStatusEffectStartWith = 496,
    MenuCustomGameOptionsStatusEffectUntreatable = 497,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 498,
    MenuCustomGameOptionsSkillsGenerateRandom = 499,
    MenuCustomGameOptionsSkillsGenerateRandomDescription = 500,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 501,
    MenuCustomGameOptionsSkillsGlobal = 502,
    MenuCustomGameOptionsSkillNone = 503,
    MenuCustomGameOptionsSkillConfigure = 504,
    MenuCustomGameOptionsSkillInitial = 505,
    MenuCustomGameOptionsSkillMultiplier = 506,
    MenuCustomGameOptionsSkillMultiplierTooltip = 507,
    MenuCustomGameOptionsRandomItems = 508,
    MenuCustomGameOptionsRandomItemsDescription = 509,
    MenuCustomGameOptionsExport = 510,
    MenuCustomGameOptionsImport = 511,
    MenuCustomGameOptionsInterruptConfirmImport = 512,
    MenuCustomGameOptionsInterruptConfirmImportDescription = 513,
    MenuCustomGameOptionsInterruptLoadingImporting = 514,
    MenuCustomGameOptionsInterruptLoadingImportingDescription = 515,
    MenuNewsButtonDiscord = 516,
    MenuNewsButtonFacebook = 517,
    MenuNewsButtonReddit = 518,
    MenuNewsButtonTwitter = 519,
    MenuNewsDescription = 520,
    MenuNewsHeadingSocial = 521,
    MenuNewsTitle = 522,
    MenuNewsHeadingUnableToLoad = 523,
    MenuNewsButtonAllNews = 524,
    MenuOptionsInterruptLoading = 525,
    MenuOptionsInterruptLoadingDescription = 526,
    MenuOptionsButtonDitherFogOfWar = 527,
    MenuOptionsButtonDisableCustomCursor = 528,
    MenuOptionsButtonFullscreen = 529,
    MenuOptionsButtonDeveloperMode = 530,
    MenuOptionsButtonDeveloperModeContextMenu = 531,
    MenuOptionsButtonPixelFont = 532,
    MenuOptionsButtonReloadGame = 533,
    MenuOptionsButtonExportGlobalSaveData = 534,
    MenuOptionsButtonImportGlobalSaveData = 535,
    MenuOptionsButtonSaveDataClearAll = 536,
    MenuOptionsButtonSaveDataClearCharacters = 537,
    MenuOptionsButtonSaveDataClearHighscores = 538,
    MenuOptionsButtonSaveDataClearMilestones = 539,
    MenuOptionsButtonSaveDataClearOptions = 540,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 541,
    MenuOptionsButtonSaveDataClearSaves = 542,
    MenuOptionsButtonSkipSplash = 543,
    MenuOptionsButtonToggleDevTools = 544,
    MenuOptionsButtonTooltipsCreatures = 545,
    MenuOptionsButtonOpenLogsFolder = 546,
    MenuOptionsButtonTooltipsDoodads = 547,
    MenuOptionsButtonTooltipsItems = 548,
    MenuOptionsButtonTooltipsTerrain = 549,
    MenuOptionsButtonDropLocationFacing = 550,
    MenuOptionsButtonDropLocationFeet = 551,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 552,
    MenuOptionsDescription = 553,
    MenuOptionsHeadingAudio = 554,
    MenuOptionsHeadingDeveloper = 555,
    MenuOptionsHeadingGameplayOptions = 556,
    MenuOptionsHeadingGeneralOptions = 557,
    MenuOptionsHeadingControls = 558,
    MenuOptionsHeadingLanguage = 559,
    MenuOptionsHeadingPowerPreference = 560,
    MenuOptionsHeadingModOptions = 561,
    MenuOptionsHeadingOther = 562,
    MenuOptionsHeadingSaveData = 563,
    MenuOptionsHeadingTooltips = 564,
    MenuOptionsHeadingVideo = 565,
    MenuOptionsInterruptReloadGame = 566,
    MenuOptionsInterruptSaveDataClearAll = 567,
    MenuOptionsInterruptSaveDataClearAllDescription = 568,
    MenuOptionsInterruptSaveDataClearCharacters = 569,
    MenuOptionsInterruptSaveDataClearHighscores = 570,
    MenuOptionsInterruptSaveDataClearMilestones = 571,
    MenuOptionsInterruptSaveDataClearOptions = 572,
    MenuOptionsInterruptSaveDataClearSaves = 573,
    MenuOptionsInterruptSaveDataClearCraftingRecipes = 574,
    MenuOptionsLabelInterfaceScale = 575,
    MenuOptionsLabelDirectionTurnDelay = 576,
    MenuOptionsLabelMouseTurnDelay = 577,
    MenuOptionsTooltipTurnDelay = 578,
    MenuOptionsTooltipMouseTurnDelay = 579,
    MenuOptionsTooltipUiScaleClamped = 580,
    MenuOptionsTooltipControlsFilter = 581,
    MenuOptionsLabelVolumeEffects = 582,
    MenuOptionsLabelVolumeMusic = 583,
    MenuOptionsTabAudio = 584,
    MenuOptionsTabDeveloper = 585,
    MenuOptionsTabGameplay = 586,
    MenuOptionsTabGeneral = 587,
    MenuOptionsTabControls = 588,
    MenuOptionsTabMods = 589,
    MenuOptionsTabSaveData = 590,
    MenuOptionsTabVideo = 591,
    MenuOptionsTitle = 592,
    MenuOptionsTooltipMusicNextTrack = 593,
    MenuOptionsBindChoose = 594,
    MenuOptionsBindChooseAdd = 595,
    MenuOptionsBindLabelModifier = 596,
    MenuOptionsBindButtonResetTooltip = 597,
    MenuOptionsBindButtonDeleteTooltip = 598,
    MenuOptionsBindButtonAddTooltip = 599,
    MenuOptionsButtonAlternatingDirectionMovement = 600,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 601,
    MenuOptionsButtonAlwaysShowMoreInformation = 602,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 603,
    MenuOptionsButtonAutoGatherHarvest = 604,
    MenuOptionsButtonAutoGatherHarvestTooltip = 605,
    MenuOptionsButtonAutoPickup = 606,
    MenuOptionsButtonAutoPickupTooltip = 607,
    MenuOptionsButtonDropOnGatherHarvest = 608,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 609,
    MenuOptionsButtonKeepSortActive = 610,
    MenuOptionsButtonKeepSortActiveTooltip = 611,
    MenuOptionsButtonProtectCraftingItemsInInventory = 612,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 613,
    MenuOptionsButtonProtectCraftingItemContainers = 614,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 615,
    MenuOptionsButtonUseAdjacentContainers = 616,
    MenuOptionsButtonUseAdjacentContainersTooltip = 617,
    MenuOptionsButtonHideEquippedHeadgear = 618,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 619,
    MenuOptionsButtonEnableAutoSave = 620,
    MenuOptionsButtonEnableAutoSaveTooltip = 621,
    MenuOptionsButtonWarnOnDangerousActions = 622,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 623,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 624,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 625,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 626,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 627,
    MenuOptionsHeadingWarnWhenBreakingItems = 628,
    MenuOptionsButtonSaveDataClearBindings = 629,
    MenuOptionsInterruptSaveDataClearBindings = 630,
    MenuOptionsTooltipDialogOpacity = 631,
    MenuOptionsLabelDialogOpacity = 632,
    MenuOptionsDeveloperLogSourceFilterHeading = 633,
    MenuOptionsInterruptConfirmImportGlobalData = 634,
    MenuOptionsInterruptConfirmImportGlobalDataDescription = 635,
    MenuOptionsInterruptLoadingImportingGlobalData = 636,
    MenuOptionsInterruptLoadingImportingGlobalDataDescription = 637,
    MenuOptionsAudioVolumeDisplay = 638,
    MenuOptionsMusicPlaylist = 639,
    MenuOptionsButtonConfigureBindings = 640,
    MenuPauseButtonContinue = 641,
    MenuPauseButtonOptions = 642,
    MenuPauseButtonModes = 643,
    MenuPauseButtonPaused = 644,
    MenuPauseButtonMultiplayer = 645,
    MenuPauseButtonTitleScreen = 646,
    MenuPauseButtonStopServer = 647,
    MenuPauseHeadingPaused = 648,
    MenuPauseParagraphPaused = 649,
    MenuPauseHeadingNotPaused = 650,
    MenuPauseParagraphNotPaused = 651,
    MenuPauseHeadingDedicatedServer = 652,
    MenuPauseParagraphDedicatedServer = 653,
    MenuPauseInterruptGhostKeepSave = 654,
    MenuPauseInterruptGhostKeepSaveDescription = 655,
    MenuPauseInterruptReturnToTitleScreen = 656,
    MenuPauseInterruptReturnToTitleScreenChallengeDescription = 657,
    MenuPauseInterruptReturnToTitleScreenChallengeMultiplayerDescription = 658,
    MenuPauseInterruptReturnToTitleScreenDescription = 659,
    MenuPauseInterruptReturnToTitleScreenMultiplayerDescription = 660,
    MenuModesTitle = 661,
    MenuModesDescription = 662,
    MenuMultiplayerOptionsTitle = 663,
    MenuMultiplayerOptionsDescription = 664,
    MenuMultiplayerOptionsOpenServer = 665,
    MenuMultiplayerOptionsOpenServerDescription = 666,
    MenuMultiplayerOptionsCopyGameCode = 667,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 668,
    MenuMultiplayerOptionsInviteSteamFriends = 669,
    MenuJoinServerTitle = 670,
    MenuJoinServerDescription = 671,
    MenuJoinServerInputPlaceholder = 672,
    MenuJoinServerNext = 673,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 674,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 675,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 676,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 677,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 678,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 679,
    MenuSharedMultiplayerChoicePVP = 680,
    MenuSharedMultiplayerChoicePVPDescription = 681,
    MenuSharedMultiplayerMaxPlayers = 682,
    MenuSharedRealTimeTickSpeedTooltip = 683,
    MenuSharedRealTimeTickSpeedLabel = 684,
    MenuSharedButtonDefault = 685,
    MenuSharedValueTickSpeed = 686,
    MenuSharedValuePercentage = 687,
    MiscSortBy = 688,
    MiscSortDirection = 689,
    MiscFilter = 690,
    MiscPlayerNameDefault = 691,
    MiscPlayerNameServer = 692,
    MiscSaveNameDefault = 693,
    MiscSaveNameDailyChallenge = 694,
    MiscSaveNameChallenge = 695,
    MiscSaveVersionUnknown = 696,
    MiscVersion = 697,
    MiscTime = 698,
    MiscTimeMeridiem = 699,
    MiscBindableOr = 700,
    MiscBindableNoBindings = 701,
    SteamworksInterruptURLOpenedInBrowser = 702,
    SteamworksInterruptURLOpenedInBrowserDescription = 703,
    SteamworksInterruptWorkshopOpenedInBrowser = 704,
    SteamworksInterruptWorkshopOpenedInBrowserDescription = 705,
    SteamworksInterruptModWithNameAlreadyExists = 706,
    SteamworksInterruptModWithNameAlreadyExistsDescription = 707,
    SteamworksInterruptModImportSaveGameFailure = 708,
    SteamworksInterruptModImportSaveGameFailureDescription = 709,
    SteamworksInterruptModImportedSaveGame = 710,
    SteamworksInterruptModImportedSaveGameDescription = 711,
    SteamworksInterruptLoadingRefreshingMods = 712,
    SteamworksInterruptLoadingRefreshingModsDescription = 713,
    SteamworksInterruptOpenFolderFailure = 714,
    SteamworksInterruptOpenFolderFailureDescription = 715,
    DifficultyOptionsPeaceful = 716,
    DifficultyOptionsAberrantSpawnsDisabled = 717,
    DifficultyOptionsCreatureSpawningDisabled = 718,
    DifficultyOptionsCreatureAberrantSpawnsDisabled = 719,
    DifficultyOptionsRespawn = 720,
    DifficultyOptionsEternalNight = 721,
    DifficultyOptionsTimeInitial = 722,
    DifficultyOptionsTimeFrozen = 723,
    DifficultyOptionsTimeDayLength = 724,
    DifficultyOptionsTimeDayPercent = 725,
    DifficultyOptionsNoItems = 726,
    DifficultyOptionsBenignityInitial = 727,
    DifficultyOptionsBenignityMultiplier = 728,
    DifficultyOptionsMalignityInitial = 729,
    DifficultyOptionsMalignityMultiplier = 730,
    DifficultyOptionsStatInitial = 731,
    DifficultyOptionsStatMax = 732,
    DifficultyOptionsStatMultiplier = 733,
    DifficultyOptionsStatusEffectStartWith = 734,
    DifficultyOptionsStatusEffectUntreatable = 735,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 736,
    DifficultyOptionsNoRandomSkills = 737,
    DifficultyOptionsSkillGainMultiplier = 738,
    DifficultyOptionsSkillInitial = 739,
    DifficultyOptionsStatusEffectPermanent = 740,
    DifficultyOptionsStatusEffectRateMultiplier = 741,
    DifficultyOptionsStatusEffectMultiplier = 742,
    EquipmentBack = 743,
    EquipmentBelt = 744,
    EquipmentChest = 745,
    EquipmentFeet = 746,
    EquipmentHands = 747,
    EquipmentHead = 748,
    EquipmentLeftHand = 749,
    EquipmentLeftHandOption = 750,
    EquipmentLegs = 751,
    EquipmentNeck = 752,
    EquipmentRightHand = 753,
    EquipmentRightHandOption = 754,
    EquipmentUse = 755,
    HudFilter = 756,
    QuickSlot1 = 757,
    QuickSlot2 = 758,
    QuickSlot3 = 759,
    QuickSlot4 = 760,
    QuickSlot5 = 761,
    QuickSlot6 = 762,
    QuickSlot7 = 763,
    QuickSlot8 = 764,
    QuickSlot9 = 765,
    TabCrafting = 766,
    TabDismantle = 767,
    Version = 768,
    WindowTitleContainer = 769,
    WindowTitleCrafting = 770,
    WindowTitleEquipment = 771,
    WindowTitleInventory = 772
}
export default UiTranslation;
