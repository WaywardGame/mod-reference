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
    ModRequiresItself = 19,
    ModWithNameAlreadyExists = 20,
    MultiplayerConnecting = 21,
    MultiplayerFailedToConnect = 22,
    MultiplayerRetry = 23,
    No = 24,
    Ok = 25,
    PublishingMod = 26,
    QuittingGame = 27,
    RefreshingMods = 28,
    Rename = 29,
    RequiredModsMissingWantToContinue = 30,
    RequiredModsNotLoaded = 31,
    Resting = 32,
    ReturnToTitleScreenNoSaveInDailyChallenge = 33,
    ReturnToTitleScreenProgressWillBeSaved = 34,
    SavingGame = 35,
    Sleeping = 36,
    SteamWorkshop = 37,
    TravelAway = 38,
    UnableToImportSave = 39,
    UnableToLoadRequiredMods = 40,
    UpdatingMod = 41,
    VersionWarning = 42,
    WantToDeleteAllSavedData = 43,
    WantToDeleteThisGame = 44,
    WantToPublishThisMod = 45,
    WantToPublishUpdateToMod = 46,
    WantToUninstallThisMod = 47,
    WelcomeToWayward = 48,
    WhatWouldYouLikeToNameItem = 49,
    Yes = 50,
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
    MenuManageMods = 80,
    MenuManageModsDisableAll = 81,
    MenuManageModsEnableAll = 82,
    MenuManageModsInternal = 83,
    MenuManageModsLocal = 84,
    MenuManageModsMessage = 85,
    MenuManageModsPublishMod = 86,
    MenuManageModsUninstallMod = 87,
    MenuManageModsViewInSteamWorkshop = 88,
    MenuManageModsWorkshop = 89,
    MenuModdingGuide = 90,
    MenuNewGame = 91,
    MenuNewGameCustomizationEnable = 92,
    MenuNewGameEditSeed = 93,
    MenuNewGameMessage = 94,
    MenuNewGameName = 95,
    MenuNewGameSeedPlaceholder = 96,
    MenuNewGameStart = 97,
    MenuNews = 98,
    MenuNoMods = 99,
    MenuOpenLogsFolder = 100,
    MenuOpenModsFolder = 101,
    MenuOptions = 102,
    MenuOptionsMessage = 103,
    MenuPlayGame = 104,
    MenuPlayGameMessage = 105,
    MenuPlayGameNewGame = 106,
    MenuPostATweet = 107,
    MenuQuitGame = 108,
    MenuReloadGame = 109,
    MenuShareOnFacebook = 110,
    MenuToggleDeveloperTools = 111,
    MenuVisitSteamWorkshop = 112,
    NearDeath = 113,
    NextHint = 114,
    OptionsAlternateContextMenu = 115,
    OptionsAlternateContextMenuTooltip = 116,
    OptionsAlternateFont = 117,
    OptionsAudio = 118,
    OptionsAutoGather = 119,
    OptionsAutoGatherTooltip = 120,
    OptionsAutoPickup = 121,
    OptionsAutoPickupTooltip = 122,
    OptionsBindDefault = 123,
    OptionsBinds = 124,
    OptionsDeveloper = 125,
    OptionsDeveloperLogging = 126,
    OptionsDeveloperLoggingTooltip = 127,
    OptionsDialogOpacity = 128,
    OptionsDropOnGather = 129,
    OptionsDropOnGatherTooltip = 130,
    OptionsDropUnderYourself = 131,
    OptionsDropUnderYourselfTooltip = 132,
    OptionsEffects = 133,
    OptionsEnableHints = 134,
    OptionsEnableHintsTooltip = 135,
    OptionsFullscreenMode = 136,
    OptionsGame = 137,
    OptionsGraphics = 138,
    OptionsKeepSortActive = 139,
    OptionsKeepSortActiveTooltip = 140,
    OptionsKeyBindRebinding = 141,
    OptionsLanguage = 142,
    OptionsMouseClickMovement = 143,
    OptionsMouseClickMovementTooltip = 144,
    OptionsMusic = 145,
    OptionsMute = 146,
    OptionsNextSong = 147,
    OptionsPixelFont = 148,
    OptionsProtectedCraftingItems = 149,
    OptionsProtectedCraftingItemsTooltip = 150,
    OptionsSaveData = 151,
    OptionsScaleDefault = 152,
    OptionsScaleIn = 153,
    OptionsScaleOut = 154,
    OptionsScreenshotMode = 155,
    OptionsScreenshotModeTooltip = 156,
    OptionsSkipIntro = 157,
    OptionsSkipIntroTooltip = 158,
    OptionsVisionDither = 159,
    OptionsVisionFade = 160,
    OptionsWarnOnDangerousActions = 161,
    OptionsWarnOnDangerousActionsTooltip = 162,
    OptionsWarnWhenBreakingItems = 163,
    OptionsWarnWhenBreakingItemsTooltip = 164,
    OptionsWindowedMode = 165,
    OptionsWorldTooltips = 166,
    OptionsWorldTooltipsTooltip = 167,
    OptionsZoomIn = 168,
    OptionsZoomOnScroll = 169,
    OptionsZoomOnScrollTooltip = 170,
    OptionsZoomOut = 171,
    Overburdened = 172,
    Poisoned = 173,
    PreviousHint = 174,
    QuickSlot1 = 175,
    QuickSlot2 = 176,
    QuickSlot3 = 177,
    QuickSlot4 = 178,
    QuickSlot5 = 179,
    QuickSlot6 = 180,
    QuickSlot7 = 181,
    QuickSlot8 = 182,
    QuickSlot9 = 183,
    Reputation = 184,
    ReturnToTitleScreen = 185,
    Stamina = 186,
    Starving = 187,
    TabCrafting = 188,
    TabDismantle = 189,
    Thirst = 190,
    Version = 191,
    Weight = 192,
    WindowTitleContainer = 193,
    WindowTitleCrafting = 194,
    WindowTitleEquipment = 195,
    WindowTitleHighscores = 196,
    WindowTitleInventory = 197,
    WindowTitleMap = 198,
    WindowTitleMessages = 199,
    WindowTitleMilestones = 200,
    WindowTitleOptions = 201,
    WindowTitleSkills = 202,
}
export declare enum Dictionary {
    Item = 0,
    Doodad = 1,
    Action = 2,
    UiStatic = 3,
    Ui = 4,
    Message = 5,
    Terrain = 6,
    Creature = 7,
    Skill = 8,
    Corpse = 9,
    Hint = 10,
    Milestone = 11,
    OnEquip = 12,
    TileEvent = 13,
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
