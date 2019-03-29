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
import { RecipeRequirementType } from "item/recipe/RecipeRequirement";
import DoodadRequirement from "item/recipe/requirement/DoodadRequirement";
import FireRequirement from "item/recipe/requirement/FireRequirement";
import ItemRequirement from "item/recipe/requirement/ItemRequirement";
import ToolRequirement from "item/recipe/requirement/ToolRequirement";
declare const requirements: {
    [RecipeRequirementType.Item]: typeof ItemRequirement;
    [RecipeRequirementType.Tool]: typeof ToolRequirement;
    [RecipeRequirementType.Doodad]: typeof DoodadRequirement;
    [RecipeRequirementType.Fire]: typeof FireRequirement;
};
export default requirements;
export declare type RecipeRequirementClass<R extends RecipeRequirementType> = (typeof requirements)[R];
