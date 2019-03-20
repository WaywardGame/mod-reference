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
import { QuestRequirementType } from "entity/player/quest/requirement/IRequirement";
import { QuestRequirement } from "entity/player/quest/requirement/Requirement";
declare const requirements: {
    [QuestRequirementType.SailToCivilization]: QuestRequirement<[], {}>;
    [QuestRequirementType.KillCreature]: QuestRequirement<[import("../../creature/ICreature").CreatureType, number], import("./requirement/KillCreatureRequirement").IKillCreatureRequirement>;
    [QuestRequirementType.KillCreatures]: QuestRequirement<[number], import("./requirement/KillCreaturesRequirement").IKillCreaturesRequirement>;
    [QuestRequirementType.CollectItem]: QuestRequirement<[(import("../../../item/IItem").ItemType | import("../../../item/IItem").ItemTypeGroup)[], number], {}>;
    [QuestRequirementType.LearnSkill]: QuestRequirement<[import("../../IHuman").SkillType, number], {}>;
    [QuestRequirementType.LearnSkills]: QuestRequirement<[number], {}>;
    [QuestRequirementType.LearnAnySkill]: QuestRequirement<[number], {}>;
    [QuestRequirementType.Equip]: QuestRequirement<[import("../../IHuman").EquipType[], import("../../../item/IItem").ItemTypeGroup[]], {}>;
    [QuestRequirementType.Craft]: QuestRequirement<[(import("../../../item/IItem").ItemType | import("../../../item/IItem").ItemTypeGroup)[], number], {
        crafted: number;
    }>;
    [QuestRequirementType.Dismantle]: QuestRequirement<[(import("../../../item/IItem").ItemType | import("../../../item/IItem").ItemTypeGroup)[], number], {
        dismantled: number;
    }>;
    [QuestRequirementType.Build]: QuestRequirement<[(import("../../../item/IItem").ItemType | import("../../../item/IItem").ItemTypeGroup)[]], {}>;
    [QuestRequirementType.TameCreature]: QuestRequirement<[import("../../creature/ICreature").CreatureType, number], import("./requirement/TameCreatureRequirement").ITameCreatureRequirement>;
    [QuestRequirementType.TameCreatures]: QuestRequirement<[number], import("./requirement/TameCreaturesRequirement").ITameCreaturesRequirement>;
};
export default requirements;
export declare type RequirementArgs<R extends QuestRequirementType> = (typeof requirements)[R] extends QuestRequirement<infer O, any> ? O : (typeof requirements)[R] extends QuestRequirement<infer O2> ? O2 : never;
