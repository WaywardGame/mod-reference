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
import { Bindable, BookType, CreatureType, DoodadType, DoodadTypeGroup, EquipType, GrowingStage, ItemQuality, ItemType, ItemTypeGroup, LegendaryType, OnEquipType, SkillType, StatusType, TerrainType } from "Enums";
import { InspectType } from "game/inspection/IInspection";
import HumanName from "language/dictionary/HumanName";
import InterruptChoice from "language/dictionary/InterruptChoice";
import Message from "language/dictionary/Message";
import { MiscTranslation } from "language/dictionary/Misc";
import Note from "language/dictionary/Note";
import UiTranslation from "language/dictionary/UiTranslation";
import { HelpArticle } from "newui/screen/screens/menu/menus/help/HelpArticleDescriptions";
import { Source } from "player/IMessageManager";
import { MilestoneType } from "player/IMilestone";
import { QuestType } from "player/quest/quest/IQuest";
import { RequirementType } from "player/quest/requirement/IRequirement";
import { MusicPlaylist } from "save/data/ISaveDataGlobal";
import { TileEventType } from "tile/ITileEvent";
export declare enum Dictionary {
    Action = 0,
    Bindable = 1,
    BindPress = 2,
    Book = 3,
    Corpse = 4,
    Creature = 5,
    Doodad = 6,
    DoodadGroup = 7,
    DoodadItem = 8,
    EquipSlot = 9,
    Growth = 10,
    GrowthFungus = 11,
    HelpArticle = 12,
    HumanName = 13,
    InspectType = 14,
    InterruptChoice = 15,
    Item = 16,
    ItemGroup = 17,
    ItemQuality = 18,
    LegendaryType = 19,
    Message = 20,
    Milestone = 21,
    Misc = 22,
    Note = 23,
    Number = 24,
    OnEquip = 25,
    Quest = 26,
    QuestRequirement = 27,
    Skill = 28,
    Source = 29,
    Stat = 30,
    StatusEffect = 31,
    Terrain = 32,
    TileEvent = 33,
    Ui = 34,
    MusicPlaylist = 35
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
    [Dictionary.MusicPlaylist]: typeof MusicPlaylist;
};
export { dictionaries as strictDictionaries };
declare const _default: Descriptions<Dictionary, typeof SYMBOL_ANY_DICTIONARY | Enum>;
export default _default;
