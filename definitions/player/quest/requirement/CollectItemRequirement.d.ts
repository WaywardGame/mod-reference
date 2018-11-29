/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ItemType } from "Enums";
import Translation from "language/Translation";
import IPlayer from "player/IPlayer";
import Requirement, { RequirementFactory } from "player/quest/requirement/Requirement";
export default class CollectItemRequirementFactory extends RequirementFactory<[ItemType, number], CollectItemRequirement> {
    constructor();
    protected getRequirementClass(): typeof CollectItemRequirement;
    protected validateOptions(itemType: unknown, quantity: unknown): boolean;
    private onInventoryChange;
}
declare class CollectItemRequirement extends Requirement<[ItemType, number]> {
    private collected;
    onInventoryChange(player: IPlayer): boolean;
    getTranslation(): Translation;
}
export {};
