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
    Growth = 8,
    GrowthFungus = 9,
    HelpArticle = 10,
    HumanName = 11,
    InspectType = 12,
    InterruptChoice = 13,
    Item = 14,
    ItemGroup = 15,
    ItemQuality = 16,
    LegendaryType = 17,
    Message = 18,
    Milestone = 19,
    Misc = 20,
    Note = 21,
    Number = 22,
    OnEquip = 23,
    Skill = 24,
    Source = 25,
    Stat = 26,
    Terrain = 27,
    TileEvent = 28,
    Ui = 29
}
export declare type Enum = {
    [key: string]: number;
} & {
    [key: number]: string;
};
export declare const SYMBOL_ANY_DICTIONARY: unique symbol;
declare const dictionaries: Descriptions<Dictionary, Enum | typeof SYMBOL_ANY_DICTIONARY>;
export default dictionaries;
