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
export declare enum Dictionary {
    Action = 0,
    Bindable = 1,
    BindPress = 2,
    Book = 3,
    Corpse = 4,
    Creature = 5,
    Doodad = 6,
    DoodadGroup = 7,
    EquipSlot = 8,
    Growth = 9,
    GrowthFungus = 10,
    HelpArticle = 11,
    HumanName = 12,
    InspectType = 13,
    InterruptChoice = 14,
    Item = 15,
    ItemGroup = 16,
    ItemQuality = 17,
    LegendaryType = 18,
    Message = 19,
    Milestone = 20,
    Misc = 21,
    Note = 22,
    Number = 23,
    OnEquip = 24,
    Quest = 25,
    QuestRequirement = 26,
    Skill = 27,
    Source = 28,
    Stat = 29,
    StatusEffect = 30,
    Terrain = 31,
    TileEvent = 32,
    Ui = 33
}
export declare type Enum = {
    [key: string]: number;
} & {
    [key: number]: string;
};
export declare const SYMBOL_ANY_DICTIONARY: unique symbol;
declare const dictionaries: Descriptions<Dictionary, Enum | typeof SYMBOL_ANY_DICTIONARY>;
export default dictionaries;
