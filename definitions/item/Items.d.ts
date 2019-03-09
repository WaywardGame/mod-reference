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
import { ItemType, ItemTypeGroup } from "Enums";
import { IItemDescription, IItemGroupDescription, IRecipeComponent } from "item/IItem";
export declare const itemDescriptions: Descriptions<ItemType, IItemDescription>;
export default itemDescriptions;
export declare const itemGroupDescriptions: Descriptions<ItemTypeGroup, IItemGroupDescription>;
export declare function RecipeComponent(type: ItemType | ItemTypeGroup, requiredAmount: number, consumedAmount: number, disassembleAmount?: number, ignoreWeight?: boolean): IRecipeComponent;
