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
import ItemOutput from "item/recipe/output/ItemOutput";
import Recipe from "item/recipe/Recipe";
export declare enum RecipeSort {
    Name = 0
}
export declare class Craftable {
    readonly recipe: Recipe;
    readonly output: ItemOutput;
    static allFromRecipe(recipe: Recipe): import("../../../../../../utilities/stream/Stream").default<Craftable>;
    private static getFromRecipeAndOutput;
    private static readonly cache;
    private constructor();
}
declare class RecipeCache {
    recipesByItemType: Map<ItemType, Recipe[]>;
    private sortedRecipes;
    getSortedRecipes(sort: RecipeSort): Craftable[];
    protected onPlay(): void;
}
declare const _default: RecipeCache;
export default _default;
