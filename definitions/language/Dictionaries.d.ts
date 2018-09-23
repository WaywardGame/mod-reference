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
    InterruptChoice = 12,
    Item = 13,
    ItemGroup = 14,
    ItemQuality = 15,
    Message = 16,
    Milestone = 17,
    Misc = 18,
    Note = 19,
    OnEquip = 20,
    Skill = 21,
    Source = 22,
    Terrain = 23,
    TileEvent = 24,
    Ui = 25
}
export declare type Enum = {
    [key: string]: number;
} & {
    [key: number]: string;
};
export declare const SYMBOL_ANY_DICTIONARY: unique symbol;
declare const dictionaries: Descriptions<Dictionary, Enum | typeof SYMBOL_ANY_DICTIONARY>;
export default dictionaries;
