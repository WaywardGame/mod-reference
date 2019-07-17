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
import { ItemType, ItemTypeGroup } from "item/IItem";
import Item from "item/Item";
import Crafter from "item/recipe/Crafter";
import ItemOutput from "item/recipe/output/ItemOutput";
import RecipeRequirement, { RecipeRequirementType } from "item/recipe/RecipeRequirement";
export default class ItemRequirement extends RecipeRequirement<RecipeRequirementType.Item> {
    readonly item: ItemType | ItemTypeGroup;
    readonly quantity: number;
    static readonly BASE: ItemRequirement;
    private consume;
    private inheritQuality;
    private decayWeight;
    private outputIntermediate?;
    private changeInto?;
    private predicate?;
    constructor(item: ItemType | ItemTypeGroup, quantity?: number, initializer?: (requirement: ItemRequirement) => any);
    consumed(): boolean;
    /**
     * Item requirements are consumed by default, so this method should usually only be used to disable that.
     */
    setConsumed(consumed?: boolean): this;
    /**
     * Sets this item requirement to be changed into another item on recipe completion.
     * @param item The item to change into.
     * @param initializer An initializer for configuring the item that the input will be changed into.
     *
     * **Notes**:
     * - Using `ChangeInto` will ignore the `Consumed` setting
     * - Configuring the quantity of the `ItemOutput` in the initializer will have no effect.
     */
    setChangeInto(item: ItemType, initializer?: (output: ItemOutput) => any): this;
    getChangeInto(): ItemOutput | undefined;
    /**
     * Sets this items used for this item requirement to contribute their decay to the output items at the given weight.
     *
     * The default weight is `1`, so if there is one item at default weight and one item at a weight of `2`, the final decay would be
     * 66% of the `2` weight item and 33% of the `1` weight item.
     */
    setDecayWeight(weight: number): this;
    /**
     * Sets the quality of the output items to use the quality of the highest-quality item passed to this requirement.
     * **Note**: The output items will only use this quality by default, it can still be overridden by the item outputs.
     */
    setInheritQualityFrom(): this;
    setPredicate(predicate: (item: Item, consumed: boolean) => boolean): this;
    /**
     * Sets the `ItemOutput` that this requirement will be used for.
     * This is called internally, it should have no real use in recipe construction.
     */
    setOutputIntermediate(output: ItemOutput.Intermediate): this;
    /**
     * Returns the `ItemOutput` that this requirement is used for.
     * This is called internally, it should have no real use in recipe construction.
     */
    getOutput(): ItemOutput.Intermediate | undefined;
    getUsable(api: Crafter): Item[];
    isMet(api: Crafter, quantity?: number): boolean;
    private freeUsedItem;
    private onAttemptCraft;
    private onCraft;
    private onFail;
    private itemMatches;
    private getUsedItems;
    private getQualityBonus;
}
