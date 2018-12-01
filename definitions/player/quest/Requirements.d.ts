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
import { RequirementType } from "player/quest/requirement/IRequirement";
import { Requirement } from "player/quest/requirement/Requirement";
declare const requirements: {
    [RequirementType.SailToCivilization]: Requirement<[], never>;
    [RequirementType.KillCreature]: Requirement<[import("../../Enums").CreatureType, number], import("./requirement/KillCreatureRequirement").IKillCreatureRequirement>;
    [RequirementType.CollectItem]: Requirement<[import("../../Enums").ItemType, number], never>;
    [RequirementType.LearnSkill]: Requirement<[import("../../Enums").SkillType, number], never>;
};
export default requirements;
export declare type RequirementArgs<R extends RequirementType> = (typeof requirements)[R] extends Requirement<infer O, any> ? O : (typeof requirements)[R] extends Requirement<infer O2> ? O2 : never;
