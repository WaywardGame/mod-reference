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
import { Command } from "command/ICommand";
import { DoodadType, DoodadTypeGroup, GrowingStage } from "doodad/IDoodad";
import { ActionType } from "entity/action/IAction";
import { CreatureType } from "entity/creature/ICreature";
import { DamageType, StatusType } from "entity/IEntity";
import { EquipType, SkillType } from "entity/IHuman";
import { Stat } from "entity/IStats";
import { Source } from "entity/player/IMessageManager";
import { MilestoneType } from "entity/player/IMilestone";
import { QuestType } from "entity/player/quest/quest/IQuest";
import { RequirementType } from "entity/player/quest/requirement/IRequirement";
import { Difficulty } from "game/Difficulty";
import { InspectType } from "game/inspection/IInspection";
import { Quality } from "game/IObject";
import { PartOfDay } from "game/TimeManager";
import { BookType, EquipEffect, ItemType, ItemTypeGroup, LegendaryType } from "item/IItem";
import { GameEndMessage } from "language/dictionary/GameEndMessage";
import HumanName from "language/dictionary/HumanName";
import Interrupt from "language/dictionary/Interrupt";
import InterruptChoice from "language/dictionary/InterruptChoice";
import Message from "language/dictionary/Message";
import { MiscTranslation } from "language/dictionary/Misc";
import Note from "language/dictionary/Note";
import UiTranslation from "language/dictionary/UiTranslation";
import { ModType } from "mod/IModInfo";
import { CanLoadState, ModLoadFailureReason } from "mod/IModManager";
import { DisconnectReason, UnableToJoinReason } from "multiplayer/IMultiplayer";
import { Bindable, BindableType } from "newui/BindingManager";
import { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import { MessageTimestamp } from "newui/screen/screens/game/IGameScreenApi";
import { CharacterSort } from "newui/screen/screens/menu/menus/character/Character";
import { HelpArticle } from "newui/screen/screens/menu/menus/help/HelpArticleDescriptions";
import { HighscoreSort } from "newui/screen/screens/menu/menus/highscores/IHighscoresMenu";
import { Responsibility } from "newui/screen/screens/menu/menus/main/AboutMenu";
import { ModSort } from "newui/screen/screens/menu/menus/mods/IModsMenu";
import { MusicPlaylist, PowerMode } from "save/data/ISaveDataGlobal";
import { SaveSort } from "save/ISaveManager";
import { TerrainType } from "tile/ITerrain";
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
    Command = 7,
    Corpse = 8,
    Creature = 9,
    DamageType = 10,
    Difficulty = 11,
    Doodad = 12,
    DoodadGroup = 13,
    DoodadItem = 14,
    EquipSlot = 15,
    GameEndMessage = 16,
    Growth = 17,
    GrowthFungus = 18,
    HelpArticle = 19,
    HighscoreSort = 20,
    HumanName = 21,
    InspectType = 22,
    InterruptChoice = 23,
    Item = 24,
    ItemGroup = 25,
    Quality = 26,
    LegendaryType = 27,
    Message = 28,
    MessagesTimestampMode = 29,
    Milestone = 30,
    Misc = 31,
    ModLoadError = 32,
    ModSort = 33,
    ModType = 34,
    MusicPlaylist = 35,
    Note = 36,
    Number = 37,
    EquipEffect = 38,
    PartOfDay = 39,
    PowerMode = 40,
    Quest = 41,
    QuestRequirement = 42,
    SaveSlotSort = 43,
    Skill = 44,
    Source = 45,
    Stat = 46,
    StatusEffect = 47,
    TeamMemberResponsibility = 48,
    Terrain = 49,
    TileEvent = 50,
    Ui = 51,
    UiQuadrant = 52,
    Interrupt = 53,
    MultiplayerDisconnectReason = 54,
    UnableToJoinReason = 55,
    ModLoadFailureReason = 56
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
    [Dictionary.Command]: typeof Command;
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
    [Dictionary.Quality]: typeof Quality;
    [Dictionary.LegendaryType]: typeof LegendaryType;
    [Dictionary.Message]: typeof Message;
    [Dictionary.MessagesTimestampMode]: typeof MessageTimestamp;
    [Dictionary.Milestone]: typeof MilestoneType;
    [Dictionary.Misc]: typeof MiscTranslation;
    [Dictionary.ModLoadError]: typeof CanLoadState;
    [Dictionary.ModSort]: typeof ModSort;
    [Dictionary.ModType]: typeof ModType;
    [Dictionary.MusicPlaylist]: typeof MusicPlaylist;
    [Dictionary.Note]: typeof Note;
    [Dictionary.Number]: symbol;
    [Dictionary.EquipEffect]: typeof EquipEffect;
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
    [Dictionary.Interrupt]: typeof Interrupt;
    [Dictionary.MultiplayerDisconnectReason]: typeof DisconnectReason;
    [Dictionary.UnableToJoinReason]: typeof UnableToJoinReason;
    [Dictionary.ModLoadFailureReason]: typeof ModLoadFailureReason;
};
export { dictionaries as strictDictionaries };
declare const _default: Descriptions<Dictionary, typeof SYMBOL_ANY_DICTIONARY | Enum>;
export default _default;
