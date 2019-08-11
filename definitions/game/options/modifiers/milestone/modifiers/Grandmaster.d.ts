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
import { Milestone } from "game/milestones/IMilestone";
import { IGameOptionsPartial } from "game/options/IGameOptions";
import MilestoneModifier, { MilestoneModifierGroup } from "game/options/modifiers/milestone/MilestoneModifier";
export default class Grandmaster extends MilestoneModifier {
    after: Milestone[];
    options: IGameOptionsPartial;
    getGroup(): MilestoneModifierGroup;
}