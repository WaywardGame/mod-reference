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
import { IItem, ItemType, ItemTypeGroup } from "item/IItem";
import Crafter from "item/recipe/Crafter";
import ItemOutput from "item/recipe/output/ItemOutput";
import RecipeRequirement, { RecipeRequirementType } from "item/recipe/RecipeRequirement";
export default class ItemRequirement extends RecipeRequirement<RecipeRequirementType.Item> {
    readonly item: ItemType | ItemTypeGroup;
    readonly quantity: number;
    static readonly BASE: ItemRequirement;
    private consume;
    private retainedForDisassembly;
    private inheritQuality;
    private contributedWeightModifier;
    private changeInto?;
    constructor(item: ItemType | ItemTypeGroup, quantity?: number, initializer?: (requirement: ItemRequirement) => any);
    consumed(): boolean;
    /**
     * Item requirements are consumed by default, so this method should usually only be used to disable that.
     *
     * Note: An item that isn't consumed can't be retained for disassembly.
     */
    setConsumed(consumed?: boolean): this;
    isRetainedForDisassembly(): boolean;
    /**
     * Item requirements are retained for disassembly by default, so this method should usually only be used to disable that.
     *
     * Note: An item retained for disassembly will always be consumed.
     */
    setIsRetainedForDisassembly(retainedForDisassembly?: boolean): this;
    /**
     * Sets this item requirement to be changed into another item on recipe completion.
     * @param item The item to change into.
     * @param initializer An initializer for configuring the item that the input will be changed into.
     *
     * Notes:
     * - Using `ChangeInto` will ignore settings `Consumed` and `RetainedForDisassembly`.
     * - Configuring the quantity of the `ItemOutput` in the initializer will have no effect.
     */
    setChangeInto(item: ItemType, initializer?: (output: ItemOutput) => any): this;
    getChangeInto(): ItemOutput | undefined;
    /**
     * Sets this items used for this item requirement to contribute `their weight * the given modifier` to the output items.
     * @param modifier A decimal number between `0` and `1`, `0` being no weight, `1` being all weight.
     */
    setContributedWeightModifier(modifier: number): this;
    /**
     * Sets the quality of the output items to use the quality of the highest-quality item passed to this requirement.
     *
     * Note: The output items will only use this quality by default, it can still be overridden by the item outputs.
     */
    setInheritQualityFrom(): this;
    getUsable(api: Crafter): IItem[];
    isMet(api: Crafter, quantity?: number): boolean;
    private freeUsedItem;
    private onAttemptCraft;
    private onCraft;
    private onFail;
    private getUsedItems;
    private getQualityBonus;
}
