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
import { IItem, ItemType } from "item/IItem";
import Crafter from "item/recipe/Crafter";
import RecipeOutput from "item/recipe/RecipeOutput";
export default class ItemOutput extends RecipeOutput<IItem> {
    readonly itemType: ItemType;
    readonly quantity: number;
    quality?: Quality;
    weightInheritance: number;
    constructor(itemType: ItemType, quantity?: number);
    setQuality(quality: Quality): this;
    /**
     * Recipe inputs will all add up to a certain weight, which is then distributed amongst the output items.
     * @param weight The "weight" of this item's portion of the total recipe weight. Defaults to `1`
     *
     * ### Example:
     * - Say you had a recipe with a single rock, to produce an apple and a boat. ¯\\\_(ツ)\_/¯
     * - We'll say the rock weighs `5`.
     * - If the apple has a "weight inheritance" of `2`, while the boat has a weight inheritance of `1`,
     * the apple will get `5 * (2/3)` of the weight, and the boat will get `5 * (1/3)` of the weight.
     */
    setWeightInheritance(weight: number): this;
    get(api: Crafter): IItem;
    private getOutputInventory;
}
