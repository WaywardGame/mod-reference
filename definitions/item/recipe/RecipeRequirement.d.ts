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
import { IItem } from "item/IItem";
import { ITile } from "tile/ITerrain";
import Stream from "utilities/stream/Stream";
export declare enum RecipeRequirementType {
    Item = 0,
    Tool = 1,
    Doodad = 2,
    Fire = 3
}
export interface RecipeInputTypeMap {
    [RecipeRequirementType.Item]: IItem;
    [RecipeRequirementType.Tool]: IItem;
    [RecipeRequirementType.Doodad]: IDoodad;
    [RecipeRequirementType.Fire]: ITile;
}
export declare type RecipeInputType<R extends RecipeRequirementType> = RecipeInputTypeMap[R];
export interface IRecipeInputUseStrategy<R extends RecipeRequirementType> {
    inputs: Array<RecipeInputType<R>>;
    freeUsedInput?(api: ICrafter, input: RecipeInputType<R>): boolean;
    onAttemptCraft?(api: ICrafter, input: RecipeInputType<R>): any;
    onCraft?(api: ICrafter, input: RecipeInputType<R>): any;
    onFail?(api: ICrafter, input: RecipeInputType<R>): any;
}
export declare const MAX_QUALITY_BONUSES: Readonly<Descriptions<RecipeRequirementType, number>>;
export interface ICrafter {
    accessibleItems: IItem[];
    /**
     * Gets a stream of the tiles around the crafter entity.
     * @param includeCrafterTile Whether the tile the crafter is on should be included. Defaults to `true`.
     */
    tilesAroundCrafter(includeCrafterTile?: boolean): Stream<ITile>;
    getCrafter(): IEntity;
    getUsable<R extends RecipeRequirementType>(type: R): Set<RecipeInputType<R>>;
    getUsed<R extends RecipeRequirementType>(type: R): Stream<RecipeInputType<R>>;
    freeUsed<R extends RecipeRequirementType>(type: R, input: RecipeInputType<R>): boolean;
    use<R extends RecipeRequirementType>(type: R, useStrategy: IRecipeInputUseStrategy<R>): void;
    getQualityBonus(): number;
    addQualityBonus(type: RecipeRequirementType, bonus: number): this;
    setQualityBonus(type: RecipeRequirementType, bonus: number): this;
}
export default abstract class RecipeRequirement<R extends RecipeRequirementType> {
    readonly type: R;
    constructor(type: R);
    abstract isMet(api: ICrafter): boolean;
    abstract getUsable(api: ICrafter): Iterable<RecipeInputType<R>>;
}
