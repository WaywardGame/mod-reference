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
import CollectItemRequirementFactory from "player/quest/requirement/CollectItemRequirement";
import KillCreatureRequirementFactory from "player/quest/requirement/KillCreatureRequirement";
import { RequirementFactory } from "player/quest/requirement/Requirement";
export declare enum RequirementType {
    KillCreature = 0,
    CollectItem = 1,
    SailToCivilization = 2
}
declare const requirements: {
    [RequirementType.SailToCivilization]: RequirementFactory<[], import("./requirement/Requirement").default<[]>>;
    [RequirementType.KillCreature]: KillCreatureRequirementFactory;
    [RequirementType.CollectItem]: CollectItemRequirementFactory;
};
export default requirements;
