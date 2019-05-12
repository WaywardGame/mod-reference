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
import { SkillType } from "entity/IHuman";
import { CraftResult, IItem, RecipeLevel } from "item/IItem";
import RecipeOutput, { RecipeOutputType } from "item/recipe/RecipeOutput";
import { RecipeOutputClass } from "item/recipe/RecipeOutputs";
import RecipeRequirement, { ICrafter, IRecipeInputUseStrategy, RecipeInputType, RecipeRequirementType } from "item/recipe/RecipeRequirement";
import { RecipeRequirementClass } from "item/recipe/RecipeRequirements";
import Stream from "utilities/stream/Stream";
export default class Recipe {
    /**
     * When `undefined`, this recipe is not registered.
     */
    readonly index: number | undefined;
    private readonly requirements;
    private readonly outputs;
    private skill;
    private level;
    private reputation;
    constructor();
    getRequirements(): Stream<RecipeRequirement<any>>;
    addRequirement<R extends RecipeRequirementType>(requirementType: R, ...args: ArgumentsOf<RecipeRequirementClass<R>>): this;
    getOutputs(): Stream<RecipeOutput>;
    addOutput<R extends RecipeOutputType>(outputType: R, ...args: ArgumentsOf<RecipeOutputClass<R>>): this;
    getSkill(): SkillType;
    setSkill(skill: SkillType): this;
    getLevel(): RecipeLevel;
    setLevel(level: RecipeLevel): this;
    getReputation(): number;
    setReputation(reputation: number): this;
    canCraft(crafter: Crafter): boolean;
    canCraft(entity: IEntity, items: IItem[]): boolean;
    requirementsStatus(entity: IEntity, items: IItem[]): Stream<[RecipeRequirement<any>, boolean]>;
    getCrafter(entity: IEntity, items: IItem[]): Crafter;
}
declare class Crafter implements ICrafter {
    private readonly recipe;
    private readonly crafter;
    readonly accessibleItems: IItem[];
    private readonly inputs;
    private readonly qualityBonuses;
    private readonly usedFilter;
    constructor(recipe: Recipe, crafter: IEntity, accessibleItems: IItem[]);
    tilesAroundCrafter(includeCrafterTile?: boolean): Stream<import("../../tile/ITerrain").ITile>;
    getCrafter(): IEntity;
    getUsable(type: RecipeRequirementType): Set<import("../../doodad/IDoodad").IDoodad> | Set<import("../../tile/ITerrain").ITile> | Set<IItem>;
    getUsed(type: RecipeRequirementType): Stream<import("../../doodad/IDoodad").IDoodad | IItem | import("../../tile/ITerrain").ITile>;
    /**
     * Returns whether the input could be "freed" (the requirement using it could use sth else instead).
     *
     * ### What is this for?
     *
     * A single input could be used for more than one thing in a recipe. Consider the following example:
     *
     * 1. We have a recipe that takes any rock item, and an item from the "sharpened" group.
     * 2. We have only one sharpened rock and one large rock in our inventory.
     * 3. The recipe requirements are iterated through:
     * 	- For the "any rock item" requirement, the first item that matches is "used". In this case, it's the "sharpened rock".
     * 	- For the "sharpened group" requirement, the only remaining item is the large rock, so it doesn't match.
     * 		- Since there were no items that matched the sharpened group, it looks back to the items already "used", and tries
     * to "free" those items. **That's this function**.
     * 		- Freeing an item means returning back to the requirement that used it, and checking if any other items will
     * fit the requirement.
     * 		- If any other items matched that item, this method returns true, and then the item can be used by the
     * requirement that needed it to be freed.
     * 		- In this example, the large rock also fits the "any rock item" requirement, so the sharpened rock is freed
     * for use by the "sharpened group" requirement.
     */
    freeUsed<R extends RecipeRequirementType>(type: R, input: RecipeInputType<R>): boolean;
    use<R extends RecipeRequirementType>(type: R, useStrategy: IRecipeInputUseStrategy<R>): this;
    getQualityBonus(): number;
    addQualityBonus(type: RecipeRequirementType, bonus: number): this;
    setQualityBonus(type: RecipeRequirementType, bonus: number): this;
    attemptCraft(): {
        type: CraftResult;
        outputs: any[];
    };
    private runEvent;
    private getOutputs;
    private getRandomResult;
}
export {};
