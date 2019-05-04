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
    constructor(recipe: Recipe, crafter: IEntity, accessibleItems: IItem[]);
    tilesAroundCrafter(includeCrafterTile?: boolean): Stream<import("../../tile/ITerrain").ITile>;
    getCrafter(): IEntity;
    getUsable(type: RecipeRequirementType): Set<import("../../doodad/IDoodad").IDoodad> | Set<import("../../tile/ITerrain").ITile> | Set<IItem>;
    getUsed(type: RecipeRequirementType): Stream<IItem> | Stream<import("../../tile/ITerrain").ITile> | Stream<import("../../doodad/IDoodad").IDoodad>;
    freeUsed<R extends RecipeRequirementType>(type: R, input: RecipeInputType<R>): boolean;
    use<R extends RecipeRequirementType>(type: R, useStrategy: IRecipeInputUseStrategy<R>): this;
    getQualityBonus(): number;
    addQualityBonus(type: RecipeRequirementType, bonus: number): this;
    setQualityBonus(type: RecipeRequirementType, bonus: number): this;
    getRandomResult(): CraftResult;
    craft(): void;
}
export {};
