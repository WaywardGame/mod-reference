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
import { IDoodad } from "doodad/IDoodad";
import IEntity from "entity/IEntity";
import { SkillType } from "entity/IHuman";
import { Events } from "event/EventBuses";
import EventEmitter from "event/EventEmitter";
import { IItem, RecipeLevel } from "item/IItem";
import RecipeOutput, { RecipeOutputType } from "item/recipe/RecipeOutput";
import { RecipeOutputClass } from "item/recipe/RecipeOutputs";
import RecipeRequirement, { ICrafter, IUseItemStrategy, QualityBonus, RecipeRequirementType } from "item/recipe/RecipeRequirement";
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
    getRequirements(): Stream<RecipeRequirement>;
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
    requirementsStatus(entity: IEntity, items: IItem[]): Stream<[RecipeRequirement, boolean]>;
    getCrafter(entity: IEntity, items: IItem[]): Crafter;
}
declare class Crafter extends EventEmitter.Host<Events<ICrafter>> implements ICrafter {
    private readonly crafter;
    private readonly items;
    private usableItems;
    private readonly usedItems;
    private usableDoodads;
    private readonly usedDoodads;
    private readonly qualityBonuses;
    constructor(crafter: IEntity, items: IItem[]);
    tilesAroundCrafter(includeCrafterTile?: boolean): Stream<import("../../tile/ITerrain").ITile>;
    getCrafter(): IEntity;
    getUsableItems(): Set<IItem>;
    getUsedItems(): Stream<IItem>;
    freeUsedItem(item: IItem): boolean;
    useItems(useItemStrategy: IUseItemStrategy): this;
    getUsableDoodads(): Set<IDoodad>;
    getUsedDoodads(): Set<IDoodad>;
    useDoodads(...doodads: IDoodad[]): this;
    getQualityBonus(): number;
    addQualityBonus(type: QualityBonus, bonus: number): this;
    setQualityBonus(type: QualityBonus, bonus: number): this;
}
export {};
