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
import { QuestRequirement } from "entity/player/quest/requirement/Requirement";
import { ItemType, ItemTypeGroup } from "item/IItem";
declare const _default: QuestRequirement<[(ItemType | ItemTypeGroup)[], number], {
    dismantled: number;
}>;
export default _default;
