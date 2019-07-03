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
import { IItem, RecipeLevel } from "item/IItem";
import Crafter from "item/recipe/Crafter";
import RecipeOutput, { RecipeOutputType } from "item/recipe/RecipeOutput";
import { RecipeOutputClass } from "item/recipe/RecipeOutputs";
import RecipeRequirement, { RecipeInputType, RecipeRequirementType } from "item/recipe/RecipeRequirement";
import { RecipeRequirementClass } from "item/recipe/RecipeRequirements";
export default class Recipe {
    /**
     * When `undefined`, this recipe is not registered.
     */
    readonly index: number | undefined;
    private readonly requirements;
    private readonly outputs;
    private readonly predicates;
    private skill;
    private level;
    private reputation;
    constructor();
    getRequirements(): import("../../utilities/stream/Stream").default<RecipeRequirement<any>>;
    addRequirement<R extends RecipeRequirementType>(requirementType: R, ...args: ConstructorParameters<RecipeRequirementClass<R>>): this;
    setRequirementPredicate<R extends RecipeRequirementType>(requirementType: R, predicate: (input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>) => boolean): this;
    predicateMatches<R extends RecipeRequirementType>(requirementType: R, input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>): boolean;
    getOutputs(): import("../../utilities/stream/Stream").default<RecipeOutput<any>>;
    addOutput<R extends RecipeOutputType>(outputType: R, ...args: ConstructorParameters<RecipeOutputClass<R>>): this;
    getSkill(): SkillType;
    setSkill(skill: SkillType): this;
    getLevel(): RecipeLevel;
    setLevel(level: RecipeLevel): this;
    getReputation(): number;
    setReputation(reputation: number): this;
    canCraft(crafter: Crafter): boolean;
    canCraft(entity: IEntity, items: IItem[]): boolean;
    requirementsStatus(entity: IEntity, items: IItem[]): import("../../utilities/stream/Stream").default<[RecipeRequirement<any>, boolean]>;
    getCrafter(entity: IEntity, items: IItem[]): Crafter;
}
