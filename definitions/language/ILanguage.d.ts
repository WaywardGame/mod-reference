import { ActionType, CreatureType, DoodadType, DoodadTypeGroup, ItemType, ItemTypeGroup, OnEquipType, SkillType, TerrainType } from "Enums";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { TileEventType } from "tile/ITileEvent";
import { HintType } from "ui/IHint";
export declare enum UiMessage {
    AreYouSureYouWantToSail = 0,
    AreYouSureYouWantToSailReturn = 1,
    AreYouSureYouWantToStepOn = 2,
    AutoSaving = 3,
    Cancel = 4,
    DependencyIssue = 5,
    DoNotForgetToAddRequiredModsOnWorkshop = 6,
    FinalizingWorld = 7,
    GeneratingWorld = 8,
    HowDoYouWantToExportSave = 9,
    IncompatibleVersion = 10,
    ItemInCraftMayBeDestroyed = 11,
    LoadingMods = 12,
    LoadingSprites = 13,
    LoadingWorld = 14,
    LocalFile = 15,
    LocalVersionOfModDetected = 16,
    MissingRequiredMods = 17,
    ModLoadError = 18,
    ModProvidesLanguage = 19,
    ModRequiresItself = 20,
    ModWithNameAlreadyExists = 21,
    MultiplayerConnecting = 22,
    MultiplayerFailedToConnect = 23,
    MultiplayerLostConnection = 24,
    MultiplayerRetry = 25,
    MultiplayerServerShutdown = 26,
    MultiplayerSynchronizationError = 27,
    MultiplayerVersionMismatch = 28,
    No = 29,
    Ok = 30,
    PublishingMod = 31,
    QuittingGame = 32,
    RefreshingMods = 33,
    Rejoin = 34,
    Rename = 35,
    RequiredModsMissingWantToContinue = 36,
    RequiredModsNotLoaded = 37,
    Resting = 38,
    ReturnToTitleScreenNoSaveInDailyChallenge = 39,
    ReturnToTitleScreenProgressWillBeSaved = 40,
    SavingGame = 41,
    Sleeping = 42,
    SteamWorkshop = 43,
    TravelAway = 44,
    UnableToImportSave = 45,
    UnableToLoadRequiredMods = 46,
    UpdatingMod = 47,
    VersionWarning = 48,
    WantToDeleteAllSavedData = 49,
    WantToDeleteThisGame = 50,
    WantToPublishThisMod = 51,
    WantToPublishUpdateToMod = 52,
    WantToUninstallThisMod = 53,
    WelcomeToWayward = 54,
    WhatWouldYouLikeToNameThis = 55,
    Yes = 56,
}
export declare enum UiMessageStatic {
    Bleeding = 0,
    Burned = 1,
    Dehydrated = 2,
    DisableHints = 3,
    EnableHints = 4,
    Encumbered = 5,
    EquipmentBack = 6,
    EquipmentBelt = 7,
    EquipmentChest = 8,
    EquipmentFeet = 9,
    EquipmentHands = 10,
    EquipmentHead = 11,
    EquipmentLeftHand = 12,
    EquipmentLeftHandOption = 13,
    EquipmentLegs = 14,
    EquipmentNeck = 15,
    EquipmentRightHand = 16,
    EquipmentRightHandOption = 17,
    EquipmentUse = 18,
    Exhausted = 19,
    Health = 20,
    Healthy = 21,
    HudActions = 22,
    HudCrafting = 23,
    HudEquipment = 24,
    HudFilter = 25,
    HudHelp = 26,
    HudInventory = 27,
    HudMessages = 28,
    HudMilestones = 29,
    HudOptions = 30,
    HudSave = 31,
    HudSkills = 32,
    HudTitleScreen = 33,
    Hunger = 34,
    MenuAbout = 35,
    MenuAboutCredits = 36,
    MenuAboutDonators = 37,
    MenuAboutIntro = 38,
    MenuAboutLibraries = 39,
    MenuAboutLibrariesIntro = 40,
    MenuAboutMessage = 41,
    MenuAboutThanks = 42,
    MenuAboutThanksIntro = 43,
    MenuAboutUnlok = 44,
    MenuChangelog = 45,
    MenuChangelogBalance = 46,
    MenuChangelogBugFixes = 47,
    MenuChangelogImprovements = 48,
    MenuChangelogMessage = 49,
    MenuChangelogMod = 50,
    MenuChangelogModding = 51,
    MenuChangelogNew = 52,
    MenuChangelogTechnical = 53,
    MenuCharacter = 54,
    MenuCharacterAccept = 55,
    MenuCharacterExport = 56,
    MenuCharacterHairColor = 57,
    MenuCharacterHairStyle = 58,
    MenuCharacterHairStyleNext = 59,
    MenuCharacterHairStylePrevious = 60,
    MenuCharacterImport = 61,
    MenuCharacterMessage = 62,
    MenuCharacterSkinColor = 63,
    MenuDailyChallenge = 64,
    MenuDeleteAllGameData = 65,
    MenuDeleteGame = 66,
    MenuEditGame = 67,
    MenuEndGameDead = 68,
    MenuEndGameWon = 69,
    MenuExportGame = 70,
    MenuExportSave = 71,
    MenuHighscores = 72,
    MenuHighscoresAll = 73,
    MenuHighscoresDailyChallenge = 74,
    MenuHighscoresMessage = 75,
    MenuHighscoresNone = 76,
    MenuHighscoresNormal = 77,
    MenuImportGame = 78,
    MenuImportSave = 79,
    MenuJoinGame = 80,
    MenuJoinGameJoin = 81,
    MenuJoinGameMessage = 82,
    MenuJoinGameName = 83,
    MenuJoinGameServer = 84,
    MenuManageMods = 85,
    MenuManageModsDisableAll = 86,
    MenuManageModsEnableAll = 87,
    MenuManageModsInternal = 88,
    MenuManageModsLocal = 89,
    MenuManageModsMessage = 90,
    MenuManageModsPublishMod = 91,
    MenuManageModsUninstallMod = 92,
    MenuManageModsViewInSteamWorkshop = 93,
    MenuManageModsWorkshop = 94,
    MenuModdingGuide = 95,
    MenuNewGame = 96,
    MenuNewGameCustomizationEnable = 97,
    MenuNewGameEditSeed = 98,
    MenuNewGameMessage = 99,
    MenuNewGameName = 100,
    MenuNewGameSeedPlaceholder = 101,
    MenuNewGameStart = 102,
    MenuNews = 103,
    MenuNoMods = 104,
    MenuOpenLogsFolder = 105,
    MenuOpenModsFolder = 106,
    MenuOptions = 107,
    MenuOptionsMessage = 108,
    MenuPlayGame = 109,
    MenuPlayGameMessage = 110,
    MenuPlayGameNewGame = 111,
    MenuPostATweet = 112,
    MenuQuitGame = 113,
    MenuReloadGame = 114,
    MenuShareOnFacebook = 115,
    MenuToggleDeveloperTools = 116,
    MenuVisitSteamWorkshop = 117,
    NearDeath = 118,
    NextHint = 119,
    OptionsAlternateContextMenu = 120,
    OptionsAlternateContextMenuTooltip = 121,
    OptionsAlternateFont = 122,
    OptionsAudio = 123,
    OptionsAutoGather = 124,
    OptionsAutoGatherTooltip = 125,
    OptionsAutoPickup = 126,
    OptionsAutoPickupTooltip = 127,
    OptionsBindDefault = 128,
    OptionsBinds = 129,
    OptionsDeveloper = 130,
    OptionsDeveloperLogging = 131,
    OptionsDeveloperLoggingTooltip = 132,
    OptionsDialogOpacity = 133,
    OptionsDropOnGather = 134,
    OptionsDropOnGatherTooltip = 135,
    OptionsDropUnderYourself = 136,
    OptionsDropUnderYourselfTooltip = 137,
    OptionsEffects = 138,
    OptionsEnableHints = 139,
    OptionsEnableHintsTooltip = 140,
    OptionsFullscreenMode = 141,
    OptionsGame = 142,
    OptionsGraphics = 143,
    OptionsKeepSortActive = 144,
    OptionsKeepSortActiveTooltip = 145,
    OptionsKeyBindRebinding = 146,
    OptionsLanguage = 147,
    OptionsMouseClickMovement = 148,
    OptionsMouseClickMovementTooltip = 149,
    OptionsMusic = 150,
    OptionsMute = 151,
    OptionsNextSong = 152,
    OptionsPixelFont = 153,
    OptionsProtectedCraftingItems = 154,
    OptionsProtectedCraftingItemsTooltip = 155,
    OptionsRightClickInspect = 156,
    OptionsRightClickInspectTooltip = 157,
    OptionsSaveData = 158,
    OptionsScaleDefault = 159,
    OptionsScaleIn = 160,
    OptionsScaleOut = 161,
    OptionsScreenshotMode = 162,
    OptionsScreenshotModeTooltip = 163,
    OptionsSkipIntro = 164,
    OptionsSkipIntroTooltip = 165,
    OptionsVisionDither = 166,
    OptionsVisionFade = 167,
    OptionsWarnOnDangerousActions = 168,
    OptionsWarnOnDangerousActionsTooltip = 169,
    OptionsWarnWhenBreakingItems = 170,
    OptionsWarnWhenBreakingItemsTooltip = 171,
    OptionsWindowedMode = 172,
    OptionsWorldTooltips = 173,
    OptionsWorldTooltipsTooltip = 174,
    OptionsZoomIn = 175,
    OptionsZoomOnScroll = 176,
    OptionsZoomOnScrollTooltip = 177,
    OptionsZoomOut = 178,
    Overburdened = 179,
    Poisoned = 180,
    PreviousHint = 181,
    QuickSlot1 = 182,
    QuickSlot2 = 183,
    QuickSlot3 = 184,
    QuickSlot4 = 185,
    QuickSlot5 = 186,
    QuickSlot6 = 187,
    QuickSlot7 = 188,
    QuickSlot8 = 189,
    QuickSlot9 = 190,
    Reputation = 191,
    ReturnToTitleScreen = 192,
    Stamina = 193,
    Starving = 194,
    TabCrafting = 195,
    TabDismantle = 196,
    Thirst = 197,
    Version = 198,
    Weight = 199,
    WindowTitleContainer = 200,
    WindowTitleCrafting = 201,
    WindowTitleEquipment = 202,
    WindowTitleHighscores = 203,
    WindowTitleInventory = 204,
    WindowTitleMap = 205,
    WindowTitleMessages = 206,
    WindowTitleMilestones = 207,
    WindowTitleOptions = 208,
    WindowTitleSkills = 209,
}
export declare enum Dictionary {
    Action = 0,
    Corpse = 1,
    Creature = 2,
    Doodad = 3,
    Hint = 4,
    Item = 5,
    KeyBind = 6,
    Message = 7,
    Milestone = 8,
    OnEquip = 9,
    Skill = 10,
    Terrain = 11,
    TileEvent = 12,
    Ui = 13,
    UiStatic = 14,
}
export interface IStringArray {
    [index: number]: string;
}
export interface INameDescription {
    name: string;
    description?: string;
    prefix?: string;
    suffix?: string;
}
export interface INameDescriptionArray {
    [index: number]: INameDescription;
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
export interface IHintDictionary {
    [index: number]: [string, string];
}
export interface IItemDictionary {
    [index: number]: [string, string, string] | [string, string];
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
export interface ILanguage {
    getName(): string;
    shouldUseAlternateFontStyle(): boolean;
    shouldPluralize(): boolean;
    pluralize(str: string): string;
    addPluralRule(from: string, to: string): void;
    getDictionary(dictionary: Dictionary): INameDescriptionArray;
    setDictionary(dictionary: Dictionary.Action, newEntries: IActionDictionary): void;
    setDictionary(dictionary: Dictionary.Corpse, newEntries: ICorpseDictionary): void;
    setDictionary(dictionary: Dictionary.Creature, newEntries: ICreatureDictionary): void;
    setDictionary(dictionary: Dictionary.Doodad, newEntries: IDoodadDictionary): void;
    setDictionary(dictionary: Dictionary.Hint, newEntries: IHintDictionary): void;
    setDictionary(dictionary: Dictionary.Item, newEntries: IItemDictionary): void;
    setDictionary(dictionary: Dictionary.Message, newEntries: IMessageDictionary): void;
    setDictionary(dictionary: Dictionary.Milestone, newEntries: IMilestoneDictionary): void;
    setDictionary(dictionary: Dictionary.OnEquip, newEntries: IOnEquipDictionary): void;
    setDictionary(dictionary: Dictionary.Skill, newEntries: ISkillDictionary): void;
    setDictionary(dictionary: Dictionary.Terrain, newEntries: ITerrainDictionary): void;
    setDictionary(dictionary: Dictionary.TileEvent, newEntries: ITileEventDictionary): void;
    setDictionary(dictionary: Dictionary.Ui, newEntries: IUiDictionary): void;
    setDictionary(dictionary: Dictionary, newEntries: {
        [index: number]: any;
    }): void;
    setDictionaryRaw(dictionary: Dictionary, newEntries: INameDescriptionArray): void;
    setDictionaries(dictionaries: {
        [index: number]: {
            [index: number]: any;
        };
    }): void;
    setEntry(dictionary: Dictionary.Action, entryIndex: ActionType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Creature, entryIndex: CreatureType, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Corpse, entryIndex: CreatureType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.Doodad, entryIndex: DoodadType, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Doodad, entryIndex: DoodadTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Hint, entryIndex: HintType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemType, prefix: string, name: string, description?: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Message, entryIndex: Message, name: string): void;
    setEntry(dictionary: Dictionary.Milestone, entryIndex: MilestoneType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.OnEquip, entryIndex: OnEquipType, name: string): void;
    setEntry(dictionary: Dictionary.Skill, entryIndex: SkillType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Terrain, entryIndex: TerrainType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.TileEvent, entryIndex: TileEventType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Ui, entryIndex: UiMessageStatic, name: string): void;
    setEntry(dictionary: Dictionary, entryIndex: number, ...entry: string[]): void;
}
export interface ISelector {
    selector: string | string[];
    html?: boolean;
    attribute?: string;
    func?: (translation: string) => string;
}
export interface ISelectorArray {
    [index: number]: ISelector;
}
