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
import { ItemType, ItemTypeGroup } from "item/IItem";
import RecipeRequirement, { IRecipeApi } from "item/recipe/RecipeRequirement";
export default class ItemRequirement extends RecipeRequirement {
    readonly item: ItemType | ItemTypeGroup;
    readonly quantity: number;
    private consume;
    private disassembleable;
    constructor(item: ItemType | ItemTypeGroup, quantity?: number, initializer?: (requirement: ItemRequirement) => any);
    consumed(): boolean;
    setConsumed(consumed?: boolean): this;
    canBeDisassembled(): boolean;
    setCanBeDisassembled(disassembleable?: boolean): this;
    isMet(api: IRecipeApi, quantity?: number): boolean;
    private freeUsedItem;
    private getUsedItems;
}
