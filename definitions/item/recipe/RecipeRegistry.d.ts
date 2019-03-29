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
import Recipe from "item/recipe/Recipe";
import Stream from "utilities/stream/Stream";
export declare enum RecipeType {
}
declare class RecipeRegistry {
    private readonly recipes;
    getRecipeDescriptions(): Readonly<Descriptions<RecipeType, Recipe>>;
    stream(): Stream<[RecipeType, Recipe]>;
    register(recipe: Recipe): void;
}
declare const _default: RecipeRegistry;
export default _default;
