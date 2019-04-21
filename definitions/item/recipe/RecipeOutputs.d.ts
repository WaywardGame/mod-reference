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
import ItemOutput from "item/recipe/output/ItemOutput";
import { RecipeOutputType } from "item/recipe/RecipeOutput";
declare const outputs: {
    [RecipeOutputType.Item]: typeof ItemOutput;
};
export default outputs;
export declare type RecipeOutputClass<R extends RecipeOutputType> = (typeof outputs)[R];
