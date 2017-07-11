import { ActionType, CreatureType, DoodadType, DoodadTypeGroup, ItemType, ItemTypeGroup, OnEquipType, SkillType, TerrainType } from "Enums";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { TileEventType } from "tile/ITileEvent";
import { HintType } from "ui/IHint";
export declare enum UiMessage {
    AreYouSureYouWantToSail = 0,
    AreYouSureYouWantToSailReturn = 1,
    AreYouSureYouWantToStepOn = 2,
    AreYouSureYouWantToWhileOnFire = 3,
    AutoSaving = 4,
    Cancel = 5,
    DependencyIssue = 6,
    DoNotForgetToAddRequiredModsOnWorkshop = 7,
    FailedToSaveGame = 8,
    FinalizingWorld = 9,
    GeneratingWorld = 10,
    HowDoYouWantToExportSave = 11,
    IncompatibleVersion = 12,
    ItemInCraftMayBeDestroyed = 13,
    LoadingMods = 14,
    LoadingSprites = 15,
    LoadingWorld = 16,
    LocalFile = 17,
    LocalVersionOfModDetected = 18,
    MissingRequiredMods = 19,
    ModLoadError = 20,
    ModProvidesLanguage = 21,
    ModRequiresItself = 22,
    ModWithNameAlreadyExists = 23,
    MultiplayerConnecting = 24,
    MultiplayerFailedToConnect = 25,
    MultiplayerLostConnection = 26,
    MultiplayerRetry = 27,
    MultiplayerServerShutdown = 28,
    MultiplayerSynchronizationError = 29,
    MultiplayerVersionMismatch = 30,
    No = 31,
    Ok = 32,
    PublishingMod = 33,
    QuittingGame = 34,
    RefreshingMods = 35,
    Rejoin = 36,
    Rename = 37,
    RequiredModsMissingWantToContinue = 38,
    RequiredModsNotLoaded = 39,
    Resting = 40,
    ReturnToTitleScreenNoSaveInDailyChallenge = 41,
    ReturnToTitleScreenProgressWillBeSaved = 42,
    SavingGame = 43,
    Sleeping = 44,
    SteamWorkshop = 45,
    TravelAway = 46,
    UnableToImportSave = 47,
    UnableToLoadRequiredMods = 48,
    UpdatingMod = 49,
    VersionWarning = 50,
    WantToDeleteAllSavedData = 51,
    WantToDeleteThisGame = 52,
    WantToPublishThisMod = 53,
    WantToPublishUpdateToMod = 54,
    WantToUninstallThisMod = 55,
    WaterDoesNotNeedDesalination = 56,
    WelcomeToWayward = 57,
    WhatWouldYouLikeToNameThis = 58,
    Yes = 59,
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
    OptionsDirectionTurnDelay = 134,
    OptionsDirectionTurnDelayTooltip = 135,
    OptionsDropOnGather = 136,
    OptionsDropOnGatherTooltip = 137,
    OptionsDropUnderYourself = 138,
    OptionsDropUnderYourselfTooltip = 139,
    OptionsEffects = 140,
    OptionsEnableHints = 141,
    OptionsEnableHintsTooltip = 142,
    OptionsFullscreenMode = 143,
    OptionsGame = 144,
    OptionsGraphics = 145,
    OptionsKeepSortActive = 146,
    OptionsKeepSortActiveTooltip = 147,
    OptionsKeyBindRebinding = 148,
    OptionsLanguage = 149,
    OptionsMouseClickMovement = 150,
    OptionsMouseClickMovementTooltip = 151,
    OptionsMusic = 152,
    OptionsMute = 153,
    OptionsNextSong = 154,
    OptionsPixelFont = 155,
    OptionsProtectedCraftingItems = 156,
    OptionsProtectedCraftingItemsTooltip = 157,
    OptionsRightClickInspect = 158,
    OptionsRightClickInspectTooltip = 159,
    OptionsSaveData = 160,
    OptionsScaleDefault = 161,
    OptionsScaleIn = 162,
    OptionsScaleOut = 163,
    OptionsScreenshotMode = 164,
    OptionsScreenshotModeTooltip = 165,
    OptionsSkipIntro = 166,
    OptionsSkipIntroTooltip = 167,
    OptionsVisionDither = 168,
    OptionsVisionFade = 169,
    OptionsWarnOnDangerousActions = 170,
    OptionsWarnOnDangerousActionsTooltip = 171,
    OptionsWarnWhenBreakingItems = 172,
    OptionsWarnWhenBreakingItemsTooltip = 173,
    OptionsWindowedMode = 174,
    OptionsWorldTooltips = 175,
    OptionsWorldTooltipsTooltip = 176,
    OptionsZoomIn = 177,
    OptionsZoomOnScroll = 178,
    OptionsZoomOnScrollTooltip = 179,
    OptionsZoomOut = 180,
    Overburdened = 181,
    Poisoned = 182,
    PreviousHint = 183,
    QuickSlot1 = 184,
    QuickSlot2 = 185,
    QuickSlot3 = 186,
    QuickSlot4 = 187,
    QuickSlot5 = 188,
    QuickSlot6 = 189,
    QuickSlot7 = 190,
    QuickSlot8 = 191,
    QuickSlot9 = 192,
    Reputation = 193,
    ReturnToTitleScreen = 194,
    Stamina = 195,
    Starving = 196,
    TabCrafting = 197,
    TabDismantle = 198,
    Thirst = 199,
    Version = 200,
    Weight = 201,
    WindowTitleContainer = 202,
    WindowTitleCrafting = 203,
    WindowTitleEquipment = 204,
    WindowTitleHighscores = 205,
    WindowTitleInventory = 206,
    WindowTitleMap = 207,
    WindowTitleMessages = 208,
    WindowTitleMilestones = 209,
    WindowTitleOptions = 210,
    WindowTitleSkills = 211,
}
export declare enum Dictionary {
    Action = 0,
    Corpse = 1,
    Creature = 2,
    Doodad = 3,
    Growth = 4,
    Hint = 5,
    Item = 6,
    KeyBind = 7,
    Message = 8,
    Milestone = 9,
    OnEquip = 10,
    Skill = 11,
    Terrain = 12,
    TileEvent = 13,
    Ui = 14,
    UiStatic = 15,
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
    FugusFruiting = 11,
    FungusFull = 12,
    FungusDead = 13,
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
export interface IGrowthDictionary {
    [index: number]: [string, string];
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
    setDictionary(dictionary: Dictionary.Growth, newEntries: IGrowthDictionary): void;
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
    removeDictionary(dictionary: Dictionary): void;
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
export interface ILanguageExtension {
    [key: string]: INameDescription;
}
