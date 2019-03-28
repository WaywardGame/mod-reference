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
import IEntity from "entity/IEntity";
import { IContainer } from "item/IItem";
import RecipeRequirement from "item/recipe/RecipeRequirement";
export default class Recipe {
    private readonly requirements;
    getRequirements(): import("../../utilities/stream/Stream").default<RecipeRequirement>;
    addRequirement(requirement: RecipeRequirement): this;
    canCraft(crafter: IEntity, inventories: IContainer[]): boolean;
    requirementsStatus(crafter: IEntity, inventories: IContainer[]): import("../../utilities/stream/Stream").default<[RecipeRequirement, boolean]>;
}
