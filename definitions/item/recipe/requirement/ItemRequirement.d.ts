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
import ItemOutput from "item/recipe/output/ItemOutput";
import RecipeRequirement, { ICrafter, RecipeRequirementType } from "item/recipe/RecipeRequirement";
export default class ItemRequirement extends RecipeRequirement<RecipeRequirementType.Item> {
    readonly item: ItemType | ItemTypeGroup;
    readonly quantity: number;
    static readonly BASE: ItemRequirement;
    private consume;
    private retainedForDisassembly;
    private inheritQuality;
    private changeInto?;
    constructor(item: ItemType | ItemTypeGroup, quantity?: number, initializer?: (requirement: ItemRequirement) => any);
    consumed(): boolean;
    setConsumed(consumed?: boolean): this;
    setInheritQualityFrom(): this;
    setChangeInto(item: ItemType): this;
    getChangeInto(): ItemOutput | undefined;
    isRetainedForDisassembly(): boolean;
    setIsRetainedForDisassembly(retainedForDisassembly?: boolean): this;
    getUsable(api: ICrafter): IItem[];
    isMet(api: ICrafter, quantity?: number): boolean;
    private freeUsedItem;
    private onAttemptCraft;
    private onCraft;
    private onFail;
    private getUsedItems;
    private getQualityBonus;
}
