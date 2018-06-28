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
import { IActionDescription } from "action/IAction";
import { IItemTypeGroup, ItemType, ItemTypeGroup } from "Enums";
import { IGroupDescription, IItemDescription, IRecipeComponent } from "item/IItem";
export declare const itemDescriptions: Description<IItemDescription>;
export default itemDescriptions;
export declare const itemGroups: Description<IGroupDescription>;
export declare const itemActionDescriptions: Description<IActionDescription>;
export declare function RecipeComponent(type: (ItemType | ItemTypeGroup), requiredAmount: number, consumedAmount: number, disassembleAmount?: number, ignoreWeight?: boolean): IRecipeComponent;
export declare function ExtendItem(typeOrItemDescription: ItemType | Partial<IItemDescription>, extendWith: Partial<IItemDescription>): Description<IItemDescription>;
export declare function isItemTypeGroup(itemType: ItemType | ItemTypeGroup | IItemTypeGroup): itemType is ItemTypeGroup;
export declare function isCustomItemTypeGroup(itemType: ItemType | ItemTypeGroup | IItemTypeGroup): itemType is IItemTypeGroup;
export declare function isItemTypeInGroup(itemType: ItemType, itemGroupSearch: ItemTypeGroup | IItemTypeGroup): boolean;
