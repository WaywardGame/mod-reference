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
import GameplayModifiersManager from "game/options/modifiers/GameplayModifiersManager";
import MilestoneModifier from "game/options/modifiers/milestone/MilestoneModifier";
declare class MilestoneModifiersManager extends GameplayModifiersManager<Milestone, MilestoneModifier> {
    constructor();
    isNotHostExclusive(milestone: Milestone): boolean;
    getGroup(milestone: Milestone): import("./MilestoneModifier").MilestoneModifierGroup | undefined;
    sort(a: Milestone, b: Milestone): 1 | 0 | -1;
    private areOptionsHostExclusive;
}
declare const _default: MilestoneModifiersManager;
export default _default;
