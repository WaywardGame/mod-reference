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
import { ItemType } from "item/IItem";
export declare enum LootGroupType {
    Low = 0,
    High = 1,
    Treasure = 2,
    SeaTreasure = 3,
    CaveChest = 4,
    FireElemental = 5,
    VeryHigh = 6
}
export declare const lootGroup: (ItemType[] | undefined)[];
export default lootGroup;
