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
import { CreatureType, ItemType, SkillType } from "Enums";
import { Quest } from "player/quest/quest/Quest";
import { RequirementType } from "player/quest/requirement/IRequirement";
export default class DailyChallenge extends Quest {
    constructor();
    protected createRequirements(): IterableIterator<import("../requirement/IRequirement").IRequirement<any[], {}> | import("../requirement/IRequirement").IRequirement<[ItemType, number], {}> | import("../requirement/IRequirement").IRequirement<[SkillType, number], {}> | import("../requirement/IRequirement").IRequirement<[CreatureType, number], {}> | {
        hidden: boolean;
        type: RequirementType;
        options: [];
        completed: boolean;
        data: {};
    }>;
    private onUpdate;
}
