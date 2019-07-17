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
import Doodad from "doodad/Doodad";
import Item from "item/Item";
import Crafter from "item/recipe/Crafter";
import { ITile } from "tile/ITerrain";
export declare enum RecipeRequirementType {
    Item = 0,
    Tool = 1,
    Doodad = 2,
    Fire = 3
}
export interface RecipeInputTypeMap {
    [RecipeRequirementType.Item]: Item;
    [RecipeRequirementType.Tool]: Item;
    [RecipeRequirementType.Doodad]: Doodad;
    [RecipeRequirementType.Fire]: ITile;
}
export declare type RecipeInputType<R extends RecipeRequirementType = RecipeRequirementType> = RecipeInputTypeMap[R];
export interface IRecipeInputUseStrategy<R extends RecipeRequirementType> {
    inputs: Array<RecipeInputType<R>>;
    freeUsedInput?(api: Crafter, inputs: Array<RecipeInputType<R>>): boolean;
    onAttemptCraft?(api: Crafter, inputs: Array<RecipeInputType<R>>): any;
    onCraft?(api: Crafter, inputs: Array<RecipeInputType<R>>): any;
    onFail?(api: Crafter, inputs: Array<RecipeInputType<R>>): any;
}
export declare const MAX_QUALITY_BONUSES: Readonly<Descriptions<RecipeRequirementType, number>>;
export default abstract class RecipeRequirement<R extends RecipeRequirementType> {
    readonly type: R;
    constructor(type: R);
    abstract isMet(api: Crafter): boolean;
    abstract getUsable(api: Crafter): Iterable<RecipeInputType<R>>;
}
