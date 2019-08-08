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
    GameDialogCraftingName = 1,
    GameDialogMessagesName = 2,
    GameDialogMessagesOptionTimestamp = 3,
    GameDialogMessagesOptionShowSendButton = 4,
    GameDialogMessagesOptionShowOptionsButton = 5,
    GameDialogMessagesOptionMaxMessages = 6,
    GameDialogMessagesEditFiltersName = 7,
    GameDialogMessagesEditFiltersLabelName = 8,
    GameDialogMessagesEditFiltersButtonDelete = 9,
    GameDialogMessagesEditFiltersButtonSave = 10,
    GameDialogMessagesEditFiltersButtonReset = 11,
    GameDialogMessagesEditFiltersButtonNew = 12,
    GameDialogNotesName = 13,
    GameDialogNotesNoteTime = 14,
    GameDialogNotesNoteNumber = 15,
    GameDialogNotesNoteLockedTitle = 16,
    GameDialogNotesNoteLockedDescription = 17,
    GameDialogNotesLinkId = 18,
    GameDialogNotesLinkLearnMore = 19,
    GameDialogNotesSettingsPinUnreadNotesAutomatically = 20,
    GameDialogQuickSettingsName = 21,
    GameDialogMilestonesName = 22,
    GameDialogMilestonesInvisibleMilestone = 23,
    GameDialogMilestonesProgress = 24,
    GameDialogMilestonesProgressHidden = 25,
    GameDialogMilestonesMilestone = 26,
    GameDialogMilestonesTooltipHidden = 27,
    GameDialogMilestonesTooltipInvisible = 28,
    GameDialogMilestonesSortName = 29,
    GameDialogMilestonesSortProgress = 30,
    GameDialogSkillsName = 31,
    GameDialogSkillsSkill = 32,
    GameDialogSkillsTooltipReputationImpact = 33,
    GameDialogSkillsTooltipCanIncrease = 34,
    GameDialogSkillsSortName = 35,
    GameDialogSkillsSortLevel = 36,
    GameDialogBookName = 37,
    GameDialogMapName = 38,
    GameDialogMapTooltipDecode = 39,
    GameDialogQuestsName = 40,
    GameDialogQuestsLink = 41,
    GameDialogQuestsChildQuests = 42,
    GameDialogQuestsRequirements = 43,
    GameDialogQuestsActiveQuests = 44,
    GameDialogQuestsCompletedQuests = 45,
    GameDialogQuestsCompleteQuest = 46,
    GameTooltipShowMoreInformation = 47,
    GameTooltipLegendaryMaxWeightLabel = 48,
    GameStatsPercentage = 49,
    GameStatsStatAttack = 50,
    GameStatsStatGeneric = 51,
    GameStatsStatGenericWithMax = 52,
    GameStatsStatbar = 53,
    GameStatsStatHealthTooltip = 54,
    GameStatsStatStaminaTooltip = 55,
    GameStatsStatHungerTooltip = 56,
    GameStatsStatThirstTooltip = 57,
    GameStatsStatReputationTooltipDifficulty = 58,
    GameStatsStatReputationTooltipDifficultyEasy = 59,
    GameStatsStatReputationTooltipDifficultyHard = 60,
    GameStatsStatReputationTooltipDifficultyInsane = 61,
    GameStatsStatReputationTooltipDifficultyMedium = 62,
    GameStatsStatReputationTooltipDifficultySimple = 63,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 64,
    GameStatsStatReputationTooltipDifficultyVeryHard = 65,
    GameStatsStatReputationTooltipBenignity = 66,
    GameStatsStatReputationTooltipMalignity = 67,
    GameStatsStatReputationTooltipScore = 68,
    GameStatsStatReputationTooltipTurn = 69,
    GameStatsStatReputationTooltipTicks = 70,
    GameStatsStatWeightTooltip = 71,
    GameStatsStatAttackTooltipTactics = 72,
    GameStatsStatAttackTooltipLeftHand = 73,
    GameStatsStatAttackTooltipRightHand = 74,
    GameStatsStatDefenseTooltipBase = 75,
    GameStatsStatDefenseTooltipBlunt = 76,
    GameStatsStatDefenseTooltipParrying = 77,
    GameStatsStatDefenseTooltipFire = 78,
    GameStatsStatDefenseTooltipPiercing = 79,
    GameStatsStatDefenseTooltipSlashing = 80,
    GameQuadrantElementStats = 81,
    GameQuadrantElementMenuBar = 82,
    GameQuadrantElementQuickslots = 83,
    GameQuadrantElementMessages = 84,
    GameQuadrantElementContextMenuMoveTo = 85,
    GameQuadrantElementContextMenuSwitchWith = 86,
    GameItemBarterCredit = 87,
    GameItemBarterCreditTrade = 88,
    GameMenuBarButtonTooltipBindable = 89,
    GameMenuBarButtonTooltipMenu = 90,
    GameMenuBarButtonTooltipSave = 91,
    GameMenuBarButtonTooltipNotes = 92,
    GameMenuBarButtonTooltipMilestones = 93,
    GameMenuBarButtonTooltipMilestonesDisabled = 94,
    GameMenuBarButtonTooltipMessages = 95,
    GameMenuBarButtonTooltipHelp = 96,
    GameMenuBarButtonTooltipQuickSettings = 97,
    GameMenuBarButtonTooltipActions = 98,
    GameMenuBarButtonTooltipInventory = 99,
    GameMenuBarButtonTooltipCrafting = 100,
    GameMenuBarButtonTooltipEquipment = 101,
    GameMenuBarButtonTooltipSkills = 102,
    GameMenuBarButtonTooltipQuests = 103,
    GameMenuBarButtonTooltipQuestsDisabled = 104,
    GameMessagesButtonSend = 105,
    GameMessagesContextMenuShowAsDialog = 106,
    GameMessagesContextMenuClear = 107,
    GameMessagesContextMenuCopy = 108,
    GameMessagesContextMenuExport = 109,
    GameMessagesFilter = 110,
    GameMessagesFilterAll = 111,
    GameMessagesFilterGame = 112,
    GameMessagesFilterChat = 113,
    GameMessagesFiltersEdit = 114,
    GameMessagesNewNote = 115,
    GameMessagesTurn = 116,
    GameMessagesDedicatedServerBackup = 117,
    GameMessagesDedicatedServerBackupLimitReached = 118,
    MenuAboutTitle = 119,
    MenuAboutDescription = 120,
    MenuAboutGameDescription = 121,
    MenuAboutSectionTeam = 122,
    MenuAboutTeamMemberResponsibilities = 123,
    MenuAboutTeamMemberName = 124,
    MenuAboutTeamMemberNickname = 125,
    MenuAboutSectionContributors = 126,
    MenuAboutSectionSpecialThanks = 127,
    MenuAboutTextSpecialThanksTestorsAndDonators = 128,
    MenuAboutSectionLibraries = 129,
    MenuAboutSectionLibrariesDescription = 130,
    MenuBindings = 131,
    MenuBindingsDescription = 132,
    MenuChangelogTitle = 133,
    MenuChangelogDescription = 134,
    MenuChangelogHeadingFailedLoad = 135,
    MenuChangelogHeadingChangeCount = 136,
    MenuCharacterCreationButtonRandomizeName = 137,
    MenuCharacterCreationButtonExportTooltip = 138,
    MenuCharacterCreationButtonImportTooltip = 139,
    MenuCharacterCreationButtonStartGame = 140,
    MenuCharacterCreationButtonJoinGame = 141,
    MenuCharacterCreationDescription = 142,
    MenuCharacterCreationHeadingHairColor = 143,
    MenuCharacterCreationHeadingHairStyle = 144,
    MenuCharacterCreationHeadingSkinTone = 145,
    MenuCharacterCreationLabelName = 146,
    MenuCharacterCreationTitle = 147,
    MenuCharacterCreationButtonRotateLeftTooltip = 148,
    MenuCharacterCreationButtonRotateRightTooltip = 149,
    MenuCharacterCreationButtonRandomizeTooltip = 150,
    MenuCharacterSelectionButtonNewCharacter = 151,
    MenuCharacterSelectionDescription = 152,
    MenuCharacterSelectionHeadingNoCharacters = 153,
    MenuCharacterSelectionTitle = 154,
    MenuCharacterSelectionLabelLastUse = 155,
    MenuCharacterSelectionLabelUseCount = 156,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 157,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 158,
    MenuMultiplayerDescription = 159,
    MenuMultiplayerTitle = 160,
    MenuMultiplayerButtonJoinById = 161,
    MenuMultiplayerServerLabelReputation = 162,
    MenuMultiplayerServerLabelDays = 163,
    MenuMultiplayerButtonNewGame = 164,
    MenuMultiplayerButtonLoadGame = 165,
    MenuMultiplayerServerTooltipPVP = 166,
    MenuMultiplayerServerTooltipModsLabel = 167,
    MenuMultiplayerServerTooltipFriendsLabel = 168,
    MenuMultiplayerServerPlayers = 169,
    MenuMultiplayerServerRegion = 170,
    MenuMultiplayerServerHost = 171,
    MenuMultiplayerServerDedicated = 172,
    MenuMultiplayerHeadingPlayersOnline = 173,
    MenuMultiplayerServerModUnableToLoad = 174,
    MenuGameEndTitleDead = 175,
    MenuGameEndTitleWon = 176,
    MenuGameEndShareFacebook = 177,
    MenuGameEndShareTwitter = 178,
    MenuGameEndContinueAsGhost = 179,
    MenuGameEndReturnToIsland = 180,
    MenuGameEndExitToMenu = 181,
    MenuHelpTitle = 182,
    MenuHelpDescription = 183,
    MenuHelpLabelSearch = 184,
    MenuHighscoresTitle = 185,
    MenuHighscoresDescription = 186,
    MenuHighscoresDifficultyFilterAll = 187,
    MenuHighscoresHighscoreLabelDifficulty = 188,
    MenuHighscoresHighscoreLabelTurns = 189,
    MenuHighscoresHighscoreLabelScore = 190,
    MenuHighscoresHighscoreLabelPlace = 191,
    MenuHighscoresHighscoreLabelDate = 192,
    MenuHighscoresHighscoreLabelDeathBy = 193,
    MenuHighscoresHighscoreTitle = 194,
    MenuHighscoresCharacterNameUnknown = 195,
    MenuHighscoresHighscoreReplayWithSettings = 196,
    MenuLoadGameButtonNewGame = 197,
    MenuLoadGameButtonNewGameButtonImportTooltip = 198,
    MenuLoadGameDescription = 199,
    MenuLoadGameSaveButtonDeleteTooltip = 200,
    MenuLoadGameSaveButtonEditNameTooltip = 201,
    MenuLoadGameSaveButtonExportTooltip = 202,
    MenuLoadGameSaveTooltipLabelCreatedTime = 203,
    MenuLoadGameSaveTooltipLabelSaveTime = 204,
    MenuLoadGameSaveTooltipLabelDifficulty = 205,
    MenuLoadGameSaveTooltipLabelScore = 206,
    MenuLoadGameSaveTooltipLabelSeed = 207,
    MenuLoadGameSaveTooltipLabelTurns = 208,
    MenuLoadGameSaveTooltipLabelMods = 209,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 210,
    MenuLoadGameSaveTooltipMod = 211,
    MenuLoadGameSlotsRemaining = 212,
    MenuLoadGameTitle = 213,
    MenuMainButtonAbout = 214,
    MenuMainButtonChangelog = 215,
    MenuMainButtonContinueGame = 216,
    MenuMainButtonMultiplayer = 217,
    MenuMainButtonHighscores = 218,
    MenuMainButtonLoadGame = 219,
    MenuMainButtonMods = 220,
    MenuMainButtonNewGame = 221,
    MenuMainButtonNews = 222,
    MenuMainButtonOptions = 223,
    MenuMainButtonQuitGame = 224,
    MenuModsButtonDisableAll = 225,
    MenuModsButtonEnableAll = 226,
    MenuModsButtonModdingGuide = 227,
    MenuModsButtonOpenFolder = 228,
    MenuModsButtonOpenWorkshop = 229,
    MenuModsDescription = 230,
    MenuModsTitle = 231,
    MenuModsTooltipLabelAuthor = 232,
    MenuModsTooltipLabelTags = 233,
    MenuModsTooltipLabelDependencies = 234,
    MenuModsTooltipLabelProvides = 235,
    MenuModsTooltipLabelVersion = 236,
    MenuModsTooltipLabelDescription = 237,
    MenuModsTooltipLabelInstallDate = 238,
    MenuModsTooltipLabelCreatedDate = 239,
    MenuModsTooltipLabelLastUpdatedDate = 240,
    MenuModsTooltipMultiplayerCompatibility = 241,
    MenuModsTooltipPreventsMilestoneUnlocks = 242,
    MenuModsTooltipModOptions = 243,
    MenuModsTooltipPublishMod = 244,
    MenuModsTooltipUninstallMod = 245,
    MenuModsTooltipViewInSteamWorkshop = 246,
    MenuModsButtonEditInternalMods = 247,
    MenuModsSectionHeading = 248,
    MenuModsSubmenuEditInternalModsTitle = 249,
    MenuModsSubmenuEditInternalModsDescription = 250,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 251,
    MenuNewGameButtonNext = 252,
    MenuNewGameButtonStartServer = 253,
    MenuNewGameDescription = 254,
    MenuNewGameLabelEditName = 255,
    MenuNewGameLabelEditSeed = 256,
    MenuNewGamePlaceholderEditSeed = 257,
    MenuNewGameTitle = 258,
    MenuNewGameChoiceDifficulty = 259,
    MenuNewGameChoiceSingleplayer = 260,
    MenuNewGameChoiceSingleplayerDescription = 261,
    MenuNewGameChoiceMultiplayer = 262,
    MenuNewGameChoiceMultiplayerDescription = 263,
    MenuNewGameChoiceTurnModeManual = 264,
    MenuNewGameChoiceTurnModeManualDescription = 265,
    MenuNewGameChoiceTurnModeRealTime = 266,
    MenuNewGameChoiceTurnModeRealTimeDescription = 267,
    MenuNewGameChoiceTurnModeSimulated = 268,
    MenuNewGameChoiceTurnModeSimulatedDescription = 269,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 270,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 271,
    MenuNewGameChoiceDifficultyChallengeDaily = 272,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 273,
    MenuNewGameButtonMilestones = 274,
    MenuNewGameButtonMilestonesDescription = 275,
    MenuNewGameTabGameMode = 276,
    MenuNewGameTabMultiplayer = 277,
    MenuNewGameTabGameplayModifiers = 278,
    MenuNewGameHeadingGameMode = 279,
    MenuNewGameHeadingMultiplayer = 280,
    MenuNewGameHeadingGameplayModifiers = 281,
    MenuNewGameChoiceClientsInheritHostModifiers = 282,
    MenuNewGameChoiceClientsInheritHostModifiersDescription = 283,
    MenuNewGameChoiceCustomModifiers = 284,
    MenuNewGameChoiceCustomModifiersDescription = 285,
    MenuMilestoneModifiersTitle = 286,
    MenuMilestoneModifiersDescription = 287,
    MenuCustomGameOptionsTitle = 288,
    MenuCustomGameOptionsDescription = 289,
    MenuCustomGameOptionsRespawnOnDeath = 290,
    MenuCustomGameOptionsRespawnOnDeathDescription = 291,
    MenuCustomGameOptionsCreaturesPeaceful = 292,
    MenuCustomGameOptionsCreaturesPeacefulDescription = 293,
    MenuCustomGameOptionsCreaturesAberrantSpawns = 294,
    MenuCustomGameOptionsCreaturesAberrantSpawnsDescription = 295,
    MenuCustomGameOptionsCreaturesHeadingIndividualConfigurations = 296,
    MenuCustomGameOptionsCreaturesAllowAberrantSpawns = 297,
    MenuCustomGameOptionsCreaturesAllowSpawning = 298,
    MenuCustomGameOptionsCreatureNone = 299,
    MenuCustomGameOptionsCreatureConfigure = 300,
    MenuCustomGameOptionsBenignityInitial = 301,
    MenuCustomGameOptionsBenignityMultiplier = 302,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 303,
    MenuCustomGameOptionsMalignityInitial = 304,
    MenuCustomGameOptionsMalignityMultiplier = 305,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 306,
    MenuCustomGameOptionsStatMultiplier = 307,
    MenuCustomGameOptionsStatMultiplierTooltip = 308,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 309,
    MenuCustomGameOptionsHeadingGeneral = 310,
    MenuCustomGameOptionsHeadingTime = 311,
    MenuCustomGameOptionsHeadingStats = 312,
    MenuCustomGameOptionsHeadingReputation = 313,
    MenuCustomGameOptionsHeadingInventory = 314,
    MenuCustomGameOptionsHeadingCreatures = 315,
    MenuCustomGameOptionsHeadingSkills = 316,
    MenuCustomGameOptionsHeadingStatusEffects = 317,
    MenuCustomGameOptionsEternalNight = 318,
    MenuCustomGameOptionsEternalNightDescription = 319,
    MenuCustomGameOptionsEternalDay = 320,
    MenuCustomGameOptionsEternalDayDescription = 321,
    MenuCustomGameOptionsTimeFrozen = 322,
    MenuCustomGameOptionsTimeInitial = 323,
    MenuCustomGameOptionsTimeDayLength = 324,
    MenuCustomGameOptionsTimeDayLengthTooltip = 325,
    MenuCustomGameOptionsTimeDayPercent = 326,
    MenuCustomGameOptionsTimeDayPercentTooltip = 327,
    MenuCustomGameOptionsStatStarting = 328,
    MenuCustomGameOptionsStatMax = 329,
    MenuCustomGameOptionsStatStartingDisplay = 330,
    MenuCustomGameOptionsStatMaxDisplay = 331,
    MenuCustomGameOptionsStatNoChange = 332,
    MenuCustomGameOptionsStatStrengthTooltip = 333,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 334,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 335,
    MenuCustomGameOptionsStatusEffectStartWith = 336,
    MenuCustomGameOptionsStatusEffectUntreatable = 337,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 338,
    MenuCustomGameOptionsSkillInitialRandomCount = 339,
    MenuCustomGameOptionsSkillInitialRandomCountDescription = 340,
    MenuCustomGameOptionsSkillsHeadingIndividualConfigurations = 341,
    MenuCustomGameOptionsSkillsGlobal = 342,
    MenuCustomGameOptionsSkillNone = 343,
    MenuCustomGameOptionsSkillConfigure = 344,
    MenuCustomGameOptionsSkillInitial = 345,
    MenuCustomGameOptionsSkillMultiplier = 346,
    MenuCustomGameOptionsSkillMultiplierTooltip = 347,
    MenuCustomGameOptionsRandomItems = 348,
    MenuCustomGameOptionsRandomItemsDescription = 349,
    MenuCustomGameOptionsExport = 350,
    MenuCustomGameOptionsImport = 351,
    MenuNewsButtonDiscord = 352,
    MenuNewsButtonFacebook = 353,
    MenuNewsButtonReddit = 354,
    MenuNewsButtonTwitter = 355,
    MenuNewsDescription = 356,
    MenuNewsHeadingSocial = 357,
    MenuNewsTitle = 358,
    MenuNewsHeadingUnableToLoad = 359,
    MenuNewsButtonAllNews = 360,
    MenuOptionsButtonDitherFogOfWar = 361,
    MenuOptionsButtonDisableCustomCursor = 362,
    MenuOptionsButtonFullscreen = 363,
    MenuOptionsButtonDeveloperMode = 364,
    MenuOptionsButtonDeveloperModeContextMenu = 365,
    MenuOptionsButtonPixelFont = 366,
    MenuOptionsButtonReloadGame = 367,
    MenuOptionsButtonExportGlobalSaveData = 368,
    MenuOptionsButtonImportGlobalSaveData = 369,
    MenuOptionsButtonSaveDataClearAll = 370,
    MenuOptionsButtonSaveDataClearCharacters = 371,
    MenuOptionsButtonSaveDataClearHighscores = 372,
    MenuOptionsButtonSaveDataClearMilestones = 373,
    MenuOptionsButtonSaveDataClearOptions = 374,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 375,
    MenuOptionsButtonSaveDataClearSaves = 376,
    MenuOptionsButtonSkipSplash = 377,
    MenuOptionsButtonToggleDevTools = 378,
    MenuOptionsButtonTooltipsCreatures = 379,
    MenuOptionsButtonOpenLogsFolder = 380,
    MenuOptionsButtonTooltipsDoodads = 381,
    MenuOptionsButtonTooltipsItems = 382,
    MenuOptionsButtonTooltipsTerrain = 383,
    MenuOptionsButtonDropLocationFacing = 384,
    MenuOptionsButtonDropLocationFeet = 385,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 386,
    MenuOptionsDescription = 387,
    MenuOptionsHeadingAudio = 388,
    MenuOptionsHeadingDeveloper = 389,
    MenuOptionsHeadingGameplayOptions = 390,
    MenuOptionsHeadingGeneralOptions = 391,
    MenuOptionsHeadingControls = 392,
    MenuOptionsHeadingLanguage = 393,
    MenuOptionsHeadingPowerPreference = 394,
    MenuOptionsHeadingModOptions = 395,
    MenuOptionsHeadingOther = 396,
    MenuOptionsHeadingSaveData = 397,
    MenuOptionsHeadingTooltips = 398,
    MenuOptionsHeadingVideo = 399,
    MenuOptionsLabelInterfaceScale = 400,
    MenuOptionsLabelTooltipDelay = 401,
    MenuOptionsLabelDirectionTurnDelay = 402,
    MenuOptionsLabelMouseTurnDelay = 403,
    MenuOptionsTooltipTurnDelay = 404,
    MenuOptionsTooltipMouseTurnDelay = 405,
    MenuOptionsTooltipUiScaleClamped = 406,
    MenuOptionsTooltipControlsFilter = 407,
    MenuOptionsLabelVolumeEffects = 408,
    MenuOptionsLabelVolumeMusic = 409,
    MenuOptionsTabAudio = 410,
    MenuOptionsTabDeveloper = 411,
    MenuOptionsTabGameplay = 412,
    MenuOptionsTabGeneral = 413,
    MenuOptionsTabControls = 414,
    MenuOptionsTabMods = 415,
    MenuOptionsTabSaveData = 416,
    MenuOptionsTabVideo = 417,
    MenuOptionsTitle = 418,
    MenuOptionsTooltipMusicNextTrack = 419,
    MenuOptionsBindChoose = 420,
    MenuOptionsBindChooseAdd = 421,
    MenuOptionsBindLabelModifier = 422,
    MenuOptionsBindButtonResetTooltip = 423,
    MenuOptionsBindButtonDeleteTooltip = 424,
    MenuOptionsBindButtonAddTooltip = 425,
    MenuOptionsButtonUnlockAllMilestones = 426,
    MenuOptionsButtonUnlockAllCraftingRecipes = 427,
    MenuOptionsButtonAlternatingDirectionMovement = 428,
    MenuOptionsButtonAllowAlternatingDirectionMovementTooltip = 429,
    MenuOptionsButtonAlwaysShowMoreInformation = 430,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 431,
    MenuOptionsButtonAutoGatherHarvest = 432,
    MenuOptionsButtonAutoGatherHarvestTooltip = 433,
    MenuOptionsButtonAutoPickup = 434,
    MenuOptionsButtonAutoPickupTooltip = 435,
    MenuOptionsButtonDropOnGatherHarvest = 436,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 437,
    MenuOptionsButtonKeepSortActive = 438,
    MenuOptionsButtonKeepSortActiveTooltip = 439,
    MenuOptionsButtonProtectCraftingItemsInInventory = 440,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 441,
    MenuOptionsButtonProtectCraftingItemContainers = 442,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 443,
    MenuOptionsButtonUseAdjacentContainers = 444,
    MenuOptionsButtonUseAdjacentContainersTooltip = 445,
    MenuOptionsButtonHideEquippedHeadgear = 446,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 447,
    MenuOptionsButtonEnableAutoSave = 448,
    MenuOptionsButtonEnableAutoSaveTooltip = 449,
    MenuOptionsButtonWarnOnDangerousActions = 450,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 451,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 452,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 453,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 454,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 455,
    MenuOptionsHeadingWarnWhenBreakingItems = 456,
    MenuOptionsButtonSaveDataClearBindings = 457,
    MenuOptionsTooltipDialogOpacity = 458,
    MenuOptionsLabelDialogOpacity = 459,
    MenuOptionsDeveloperLogSourceFilterHeading = 460,
    MenuOptionsAudioVolumeDisplay = 461,
    MenuOptionsMusicPlaylist = 462,
    MenuOptionsButtonConfigureBindings = 463,
    MenuPauseButtonContinue = 464,
    MenuPauseButtonOptions = 465,
    MenuPauseButtonModes = 466,
    MenuPauseButtonPaused = 467,
    MenuPauseButtonMultiplayer = 468,
    MenuPauseButtonTitleScreen = 469,
    MenuPauseButtonStopServer = 470,
    MenuPauseHeadingPaused = 471,
    MenuPauseParagraphPaused = 472,
    MenuPauseHeadingNotPaused = 473,
    MenuPauseParagraphNotPaused = 474,
    MenuPauseHeadingDedicatedServer = 475,
    MenuPauseParagraphDedicatedServer = 476,
    MenuModesTitle = 477,
    MenuModesDescription = 478,
    MenuMultiplayerOptionsTitle = 479,
    MenuMultiplayerOptionsDescription = 480,
    MenuMultiplayerOptionsOpenServer = 481,
    MenuMultiplayerOptionsOpenServerDescription = 482,
    MenuMultiplayerOptionsCopyGameCode = 483,
    MenuMultiplayerOptionsCopyGameCodeTooltip = 484,
    MenuMultiplayerOptionsInviteSteamFriends = 485,
    MenuMultiplayerOptionsCheckConnectionHeading = 486,
    MenuMultiplayerOptionsCheckConnectionParagraph = 487,
    MenuMultiplayerOptionsCheckConnectionButton = 488,
    MenuMultiplayerOptionsCheckConnectionResultUnknown = 489,
    MenuMultiplayerOptionsCheckConnectionResultChecking = 490,
    MenuMultiplayerOptionsCheckConnectionResultWebRTC = 491,
    MenuMultiplayerOptionsCheckConnectionResultWebRTCFail = 492,
    MenuMultiplayerOptionsCheckConnectionResultWebSocket = 493,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketFail = 494,
    MenuMultiplayerOptionsCheckConnectionResultWebSocketUnavailable = 495,
    MenuMultiplayerOptionsCheckConnectionResultSuccess = 496,
    MenuJoinServerTitle = 497,
    MenuJoinServerDescription = 498,
    MenuJoinServerInputPlaceholder = 499,
    MenuJoinServerNext = 500,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 501,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 502,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 503,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 504,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 505,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 506,
    MenuSharedMultiplayerChoicePVP = 507,
    MenuSharedMultiplayerChoicePVPDescription = 508,
    MenuSharedMultiplayerMaxPlayers = 509,
    MenuSharedRealTimeTickSpeedTooltip = 510,
    MenuSharedRealTimeTickSpeedLabel = 511,
    MenuSharedButtonDefault = 512,
    MenuSharedValueMillseconds = 513,
    MenuSharedValuePercentage = 514,
    MenuSharedMilestonesNotUnlockable = 515,
    MenuSharedMilestonesNotUnlockableDescription = 516,
    MiscSortBy = 517,
    MiscSortDirection = 518,
    MiscFilter = 519,
    MiscPlayerNameDefault = 520,
    MiscPlayerNameServer = 521,
    MiscSaveNameDefault = 522,
    MiscSaveNameDailyChallenge = 523,
    MiscSaveNameChallenge = 524,
    MiscSaveVersionUnknown = 525,
    MiscVersion = 526,
    MiscTime = 527,
    MiscTimeMeridiem = 528,
    MiscBindableOr = 529,
    MiscBindableNoBindings = 530,
    DifficultyOptionsPeaceful = 531,
    DifficultyOptionsAberrantSpawnsDisabled = 532,
    DifficultyOptionsAberrantSpawnsOnly = 533,
    DifficultyOptionsCreatureSpawningDisabled = 534,
    DifficultyOptionsCreatureSpawnsDefault = 535,
    DifficultyOptionsCreatureSpawnsAberrantOnly = 536,
    DifficultyOptionsCreatureSpawnsNoAberrants = 537,
    DifficultyOptionsRespawn = 538,
    DifficultyOptionsEternalNight = 539,
    DifficultyOptionsEternalDay = 540,
    DifficultyOptionsTimeInitial = 541,
    DifficultyOptionsTimeFrozen = 542,
    DifficultyOptionsTimeDayLength = 543,
    DifficultyOptionsTimeDayPercent = 544,
    DifficultyOptionsNoItems = 545,
    DifficultyOptionsBenignityInitial = 546,
    DifficultyOptionsBenignityMultiplier = 547,
    DifficultyOptionsMalignityInitial = 548,
    DifficultyOptionsMalignityMultiplier = 549,
    DifficultyOptionsStatInitial = 550,
    DifficultyOptionsStatMax = 551,
    DifficultyOptionsStatMultiplier = 552,
    DifficultyOptionsStatusEffectStartWith = 553,
    DifficultyOptionsStatusEffectUntreatable = 554,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 555,
    DifficultyOptionsNoRandomSkills = 556,
    DifficultyOptionsSkillStartingCount = 557,
    DifficultyOptionsSkillGainMultiplier = 558,
    DifficultyOptionsSkillInitial = 559,
    DifficultyOptionsStatusEffectPermanent = 560,
    DifficultyOptionsStatusEffectRateMultiplier = 561,
    DifficultyOptionsStatusEffectMultiplier = 562,
    EquipmentBack = 563,
    EquipmentBelt = 564,
    EquipmentChest = 565,
    EquipmentFeet = 566,
    EquipmentHands = 567,
    EquipmentHead = 568,
    EquipmentLeftHand = 569,
    EquipmentLeftHandOption = 570,
    EquipmentLegs = 571,
    EquipmentNeck = 572,
    EquipmentRightHand = 573,
    EquipmentRightHandOption = 574,
    EquipmentUse = 575,
    HudFilter = 576,
    QuickSlot1 = 577,
    QuickSlot2 = 578,
    QuickSlot3 = 579,
    QuickSlot4 = 580,
    QuickSlot5 = 581,
    QuickSlot6 = 582,
    QuickSlot7 = 583,
    QuickSlot8 = 584,
    QuickSlot9 = 585,
    TabCrafting = 586,
    TabDismantle = 587,
    Version = 588,
    WindowTitleContainer = 589,
    WindowTitleCrafting = 590,
    WindowTitleEquipment = 591,
    WindowTitleInventory = 592
}
export default UiTranslation;
