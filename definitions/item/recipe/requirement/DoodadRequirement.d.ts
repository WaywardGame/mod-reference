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
import { DoodadType, DoodadTypeGroup } from "doodad/IDoodad";
import Crafter from "item/recipe/Crafter";
import RecipeRequirement, { RecipeRequirementType } from "item/recipe/RecipeRequirement";
export default class DoodadRequirement extends RecipeRequirement<RecipeRequirementType.Doodad> {
    readonly doodad: DoodadType | DoodadTypeGroup;
    static readonly BASE: DoodadRequirement;
    constructor(doodad: DoodadType | DoodadTypeGroup);
    getUsable(api: Crafter): Set<Doodad>;
    isMet(api: Crafter): boolean;
    private onAttemptCraft;
    private getQualityBonus;
}
