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
import { ActionType } from "action/IAction";
import { Stat } from "entity/IStats";
import { Bindable, BindableType, BookType, CreatureType, DamageType, DoodadType, DoodadTypeGroup, EquipType, GrowingStage, ItemQuality, ItemType, ItemTypeGroup, LegendaryType, OnEquipType, SkillType, StatusType, TerrainType } from "Enums";
import { Difficulty } from "game/Difficulty";
import { InspectType } from "game/inspection/IInspection";
import { PartOfDay } from "game/TimeManager";
import { GameEndMessage } from "language/dictionary/GameEndMessage";
import HumanName from "language/dictionary/HumanName";
import InterruptChoice from "language/dictionary/InterruptChoice";
import Message from "language/dictionary/Message";
import { MiscTranslation } from "language/dictionary/Misc";
import Note from "language/dictionary/Note";
import UiTranslation from "language/dictionary/UiTranslation";
import { ModType } from "mod/IModInfo";
import { CanLoadState } from "mod/IModManager";
import { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import { CharacterSort } from "newui/screen/screens/menu/menus/character/Character";
import { HelpArticle } from "newui/screen/screens/menu/menus/help/HelpArticleDescriptions";
import { HighscoreSort } from "newui/screen/screens/menu/menus/highscores/IHighscoresMenu";
import { Responsibility } from "newui/screen/screens/menu/menus/main/AboutMenu";
import { ModSort } from "newui/screen/screens/menu/menus/mods/IModsMenu";
import { Source } from "player/IMessageManager";
import { MilestoneType } from "player/IMilestone";
import { QuestType } from "player/quest/quest/IQuest";
import { RequirementType } from "player/quest/requirement/IRequirement";
import { MusicPlaylist, PowerMode } from "save/data/ISaveDataGlobal";
import { SaveSort } from "save/ISaveManager";
import { TileEventType } from "tile/ITileEvent";
import { ChangelogSection } from "utilities/Trello";
export declare enum Dictionary {
    Action = 0,
    Bindable = 1,
    BindableType = 2,
    BindPress = 3,
    Book = 4,
    ChangelogSection = 5,
    CharacterSort = 6,
    Corpse = 7,
    Creature = 8,
    DamageType = 9,
    Difficulty = 10,
    Doodad = 11,
    DoodadGroup = 12,
    DoodadItem = 13,
    EquipSlot = 14,
    GameEndMessage = 15,
    Growth = 16,
    GrowthFungus = 17,
    HelpArticle = 18,
    HighscoreSort = 19,
    HumanName = 20,
    InspectType = 21,
    InterruptChoice = 22,
    Item = 23,
    ItemGroup = 24,
    ItemQuality = 25,
    LegendaryType = 26,
    Message = 27,
    Milestone = 28,
    Misc = 29,
    ModLoadError = 30,
    ModSort = 31,
    ModType = 32,
    MusicPlaylist = 33,
    Note = 34,
    Number = 35,
    OnEquip = 36,
    PartOfDay = 37,
    PowerMode = 38,
    Quest = 39,
    QuestRequirement = 40,
    SaveSlotSort = 41,
    Skill = 42,
    Source = 43,
    Stat = 44,
    StatusEffect = 45,
    TeamMemberResponsibility = 46,
    Terrain = 47,
    TileEvent = 48,
    Ui = 49,
    UiQuadrant = 50
}
export declare type Enum = {
    [key: string]: number;
} & {
    [key: number]: string;
};
export declare const SYMBOL_ANY_DICTIONARY: unique symbol;
declare const dictionaries: {
    [Dictionary.Action]: typeof ActionType;
    [Dictionary.Bindable]: typeof Bindable;
    [Dictionary.BindableType]: typeof BindableType;
    [Dictionary.BindPress]: symbol;
    [Dictionary.Book]: typeof BookType;
    [Dictionary.ChangelogSection]: typeof ChangelogSection;
    [Dictionary.CharacterSort]: typeof CharacterSort;
    [Dictionary.Corpse]: typeof CreatureType;
    [Dictionary.Creature]: typeof CreatureType;
    [Dictionary.DamageType]: typeof DamageType;
    [Dictionary.Difficulty]: typeof Difficulty;
    [Dictionary.Doodad]: typeof DoodadType;
    [Dictionary.DoodadGroup]: typeof DoodadTypeGroup;
    [Dictionary.DoodadItem]: typeof ItemType;
    [Dictionary.EquipSlot]: typeof EquipType;
    [Dictionary.GameEndMessage]: typeof GameEndMessage;
    [Dictionary.Growth]: typeof GrowingStage;
    [Dictionary.GrowthFungus]: typeof GrowingStage;
    [Dictionary.HelpArticle]: typeof HelpArticle;
    [Dictionary.HighscoreSort]: typeof HighscoreSort;
    [Dictionary.HumanName]: typeof HumanName;
    [Dictionary.InspectType]: typeof InspectType;
    [Dictionary.InterruptChoice]: typeof InterruptChoice;
    [Dictionary.Item]: typeof ItemType;
    [Dictionary.ItemGroup]: typeof ItemTypeGroup;
    [Dictionary.ItemQuality]: typeof ItemQuality;
    [Dictionary.LegendaryType]: typeof LegendaryType;
    [Dictionary.Message]: typeof Message;
    [Dictionary.Milestone]: typeof MilestoneType;
    [Dictionary.Misc]: typeof MiscTranslation;
    [Dictionary.ModLoadError]: typeof CanLoadState;
    [Dictionary.ModSort]: typeof ModSort;
    [Dictionary.ModType]: typeof ModType;
    [Dictionary.MusicPlaylist]: typeof MusicPlaylist;
    [Dictionary.Note]: typeof Note;
    [Dictionary.Number]: symbol;
    [Dictionary.OnEquip]: typeof OnEquipType;
    [Dictionary.PartOfDay]: typeof PartOfDay;
    [Dictionary.PowerMode]: typeof PowerMode;
    [Dictionary.Quest]: typeof QuestType;
    [Dictionary.QuestRequirement]: typeof RequirementType;
    [Dictionary.SaveSlotSort]: typeof SaveSort;
    [Dictionary.Skill]: typeof SkillType;
    [Dictionary.Source]: typeof Source;
    [Dictionary.Stat]: typeof Stat;
    [Dictionary.StatusEffect]: typeof StatusType;
    [Dictionary.TeamMemberResponsibility]: typeof Responsibility;
    [Dictionary.Terrain]: typeof TerrainType;
    [Dictionary.TileEvent]: typeof TileEventType;
    [Dictionary.Ui]: typeof UiTranslation;
    [Dictionary.UiQuadrant]: typeof Quadrant;
};
export { dictionaries as strictDictionaries };
declare const _default: Descriptions<Dictionary, typeof SYMBOL_ANY_DICTIONARY | Enum>;
export default _default;
