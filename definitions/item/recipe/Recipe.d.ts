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
import { IContainer, RecipeLevel } from "item/IItem";
import RecipeRequirement, { RecipeRequirementType } from "item/recipe/RecipeRequirement";
import { RecipeRequirementClass } from "item/recipe/RecipeRequirements";
export default class Recipe {
    private readonly requirements;
    private skill;
    private level;
    private reputation;
    constructor();
    getRequirements(): import("../../utilities/stream/Stream").default<RecipeRequirement>;
    addRequirement<R extends RecipeRequirementType>(requirementType: R, ...args: ArgumentsOf<RecipeRequirementClass<R>>): this;
    getSkill(): SkillType;
    setSkill(skill: SkillType): this;
    getLevel(): RecipeLevel;
    setLevel(level: RecipeLevel): this;
    getReputation(): number;
    setReputation(reputation: number): this;
    canCraft(crafter: IEntity, inventories: IContainer[]): boolean;
    requirementsStatus(crafter: IEntity, inventories: IContainer[]): import("../../utilities/stream/Stream").default<[RecipeRequirement, boolean]>;
}
