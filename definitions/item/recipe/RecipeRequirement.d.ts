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
import { IItem } from "item/IItem";
import { ITile } from "tile/ITerrain";
import Stream from "utilities/stream/Stream";
export declare enum RecipeRequirementType {
    Item = 0,
    Tool = 1,
    Doodad = 2,
    Fire = 3
}
export interface IUseItemStrategy {
    items: IItem[];
    freeUsedItem(api: IRecipeApi, item: IItem): boolean;
}
export interface IRecipeApi {
    /**
     * Gets a stream of the tiles around the crafter entity.
     * @param includeCrafterTile Whether the tile the crafter is on should be included. Defaults to `true`.
     */
    tilesAroundCrafter(includeCrafterTile?: boolean): Stream<ITile>;
    getCrafter(): IEntity;
    getUsableItems(): Set<IItem>;
    getUsedItems(): Stream<IItem>;
    freeUsedItem(item: IItem): boolean;
    useItems(useItemStrategy: IUseItemStrategy): void;
}
export default abstract class RecipeRequirement {
    readonly type: RecipeRequirementType;
    constructor(type: RecipeRequirementType);
    abstract isMet(api: IRecipeApi): boolean;
}
