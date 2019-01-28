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
import { RequirementType } from "player/quest/requirement/IRequirement";
import { Requirement } from "player/quest/requirement/Requirement";
declare const requirements: {
    [RequirementType.SailToCivilization]: Requirement<[], {}>;
    [RequirementType.KillCreature]: Requirement<[import("../../Enums").CreatureType, number], import("./requirement/KillCreatureRequirement").IKillCreatureRequirement>;
    [RequirementType.KillCreatures]: Requirement<[number], import("./requirement/KillCreaturesRequirement").IKillCreaturesRequirement>;
    [RequirementType.CollectItem]: Requirement<[(import("../../Enums").ItemType | import("../../Enums").ItemTypeGroup)[], number], {}>;
    [RequirementType.LearnSkill]: Requirement<[import("../../Enums").SkillType, number], {}>;
    [RequirementType.LearnSkills]: Requirement<[number], {}>;
    [RequirementType.LearnAnySkill]: Requirement<[number], {}>;
    [RequirementType.Equip]: Requirement<[import("../../Enums").EquipType[], import("../../Enums").ItemTypeGroup[]], {}>;
    [RequirementType.Craft]: Requirement<[(import("../../Enums").ItemType | import("../../Enums").ItemTypeGroup)[], number], {
        crafted: number;
    }>;
    [RequirementType.Dismantle]: Requirement<[(import("../../Enums").ItemType | import("../../Enums").ItemTypeGroup)[], number], {
        dismantled: number;
    }>;
    [RequirementType.Build]: Requirement<[(import("../../Enums").ItemType | import("../../Enums").ItemTypeGroup)[]], {}>;
    [RequirementType.TameCreature]: Requirement<[import("../../Enums").CreatureType, number], import("./requirement/TameCreatureRequirement").ITameCreatureRequirement>;
    [RequirementType.TameCreatures]: Requirement<[number], import("./requirement/TameCreaturesRequirement").ITameCreaturesRequirement>;
};
export default requirements;
export declare type RequirementArgs<R extends RequirementType> = (typeof requirements)[R] extends Requirement<infer O, any> ? O : (typeof requirements)[R] extends Requirement<infer O2> ? O2 : never;
