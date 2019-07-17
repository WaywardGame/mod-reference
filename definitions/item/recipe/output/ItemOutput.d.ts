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
import { Quality } from "game/IObject";
import { ItemType } from "item/IItem";
import Item from "item/Item";
import Crafter from "item/recipe/Crafter";
import RecipeOutput from "item/recipe/RecipeOutput";
import { RecipeInputType, RecipeRequirementType } from "item/recipe/RecipeRequirement";
import { RecipeRequirementClass } from "item/recipe/RecipeRequirements";
import ItemRequirement from "item/recipe/requirement/ItemRequirement";
declare class ItemOutput extends RecipeOutput<Item> {
    readonly itemType: ItemType;
    readonly quantity: number;
    quality?: Quality;
    private readonly requirements;
    private readonly predicates;
    private intermediate;
    constructor(itemType: ItemType, quantity?: number);
    addRequirement(...args: ConstructorParameters<typeof ItemRequirement>): this;
    setRequirementPredicate<R extends RecipeRequirementType>(requirementType: R, predicate: (input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>) => boolean): this;
    predicateMatches<R extends RecipeRequirementType>(requirementType: R, input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>): boolean;
    setQuality(quality: Quality): this;
    get(api: Crafter): Item;
    private getDecay;
    private getOutputInventory;
}
declare module ItemOutput {
    class Intermediate {
        private readonly output;
        private readonly decays;
        constructor(output: ItemOutput);
        addDecay(decay: number, weight?: number): this;
        getDecay(): number;
        predicateMatches<R extends RecipeRequirementType>(requirementType: R, input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>): boolean;
    }
}
export default ItemOutput;
