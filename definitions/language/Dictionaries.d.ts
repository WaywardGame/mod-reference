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
import { Bindable, BookType, CreatureType, DamageType, DoodadType, DoodadTypeGroup, EquipType, GrowingStage, ItemQuality, ItemType, ItemTypeGroup, LegendaryType, OnEquipType, SkillType, StatusType, TerrainType } from "Enums";
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
import { MusicPlaylist } from "save/data/ISaveDataGlobal";
import { SaveSort } from "save/ISaveManager";
import { TileEventType } from "tile/ITileEvent";
import { ChangelogSection } from "utilities/Trello";
export declare enum Dictionary {
    Action = 0,
    Bindable = 1,
    BindPress = 2,
    Book = 3,
    Corpse = 4,
    Creature = 5,
    DamageType = 6,
    Doodad = 7,
    DoodadGroup = 8,
    DoodadItem = 9,
    EquipSlot = 10,
    Growth = 11,
    GrowthFungus = 12,
    HelpArticle = 13,
    HumanName = 14,
    InspectType = 15,
    InterruptChoice = 16,
    Item = 17,
    ItemGroup = 18,
    ItemQuality = 19,
    LegendaryType = 20,
    Message = 21,
    Milestone = 22,
    Misc = 23,
    MusicPlaylist = 24,
    Note = 25,
    Number = 26,
    OnEquip = 27,
    Quest = 28,
    QuestRequirement = 29,
    Skill = 30,
    Source = 31,
    Stat = 32,
    StatusEffect = 33,
    Terrain = 34,
    TileEvent = 35,
    Ui = 36,
    TeamMemberResponsibility = 37,
    UiQuadrant = 38,
    ChangelogSection = 39,
    CharacterSort = 40,
    GameEndMessage = 41,
    Difficulty = 42,
    HighscoreSort = 43,
    SaveSlotSort = 44,
    ModType = 45,
    ModSort = 46,
    ModLoadError = 47,
    PartOfDay = 48
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
    [Dictionary.BindPress]: symbol;
    [Dictionary.Book]: typeof BookType;
    [Dictionary.Corpse]: typeof CreatureType;
    [Dictionary.Creature]: typeof CreatureType;
    [Dictionary.DamageType]: typeof DamageType;
    [Dictionary.Doodad]: typeof DoodadType;
    [Dictionary.DoodadGroup]: typeof DoodadTypeGroup;
    [Dictionary.DoodadItem]: typeof ItemType;
    [Dictionary.EquipSlot]: typeof EquipType;
    [Dictionary.Growth]: typeof GrowingStage;
    [Dictionary.GrowthFungus]: typeof GrowingStage;
    [Dictionary.HelpArticle]: typeof HelpArticle;
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
    [Dictionary.MusicPlaylist]: typeof MusicPlaylist;
    [Dictionary.Note]: typeof Note;
    [Dictionary.Number]: symbol;
    [Dictionary.OnEquip]: typeof OnEquipType;
    [Dictionary.Quest]: typeof QuestType;
    [Dictionary.QuestRequirement]: typeof RequirementType;
    [Dictionary.Skill]: typeof SkillType;
    [Dictionary.Source]: typeof Source;
    [Dictionary.Stat]: typeof Stat;
    [Dictionary.StatusEffect]: typeof StatusType;
    [Dictionary.Terrain]: typeof TerrainType;
    [Dictionary.TileEvent]: typeof TileEventType;
    [Dictionary.Ui]: typeof UiTranslation;
    [Dictionary.TeamMemberResponsibility]: typeof Responsibility;
    [Dictionary.UiQuadrant]: typeof Quadrant;
    [Dictionary.ChangelogSection]: typeof ChangelogSection;
    [Dictionary.CharacterSort]: typeof CharacterSort;
    [Dictionary.GameEndMessage]: typeof GameEndMessage;
    [Dictionary.Difficulty]: typeof Difficulty;
    [Dictionary.HighscoreSort]: typeof HighscoreSort;
    [Dictionary.SaveSlotSort]: typeof SaveSort;
    [Dictionary.ModType]: typeof ModType;
    [Dictionary.ModSort]: typeof ModSort;
    [Dictionary.ModLoadError]: typeof CanLoadState;
    [Dictionary.PartOfDay]: typeof PartOfDay;
};
export { dictionaries as strictDictionaries };
declare const _default: Descriptions<Dictionary, typeof SYMBOL_ANY_DICTIONARY | Enum>;
export default _default;
