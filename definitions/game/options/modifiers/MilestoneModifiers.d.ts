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
import MilestoneModifier from "game/options/modifiers/MilestoneModifier";
export default class MilestoneModifiersManager {
    private static readonly instances;
    static isNotHostExclusive(milestone: Milestone): boolean;
    private static areOptionsHostExclusive;
    static getGroup(milestone: Milestone): import("./MilestoneModifier").MilestoneModifierGroup | undefined;
    static getImage(milestone: Milestone): string | undefined;
    static getModifierInstance(milestone: Milestone): MilestoneModifier | undefined;
    static sort(a: Milestone, b: Milestone): 1 | 0 | -1;
    private readonly initializedModifiers;
    initialize(...milestones: Milestone[]): void;
    uninitialize(): void;
    options(): import("../../../utilities/stream/Stream").default<IGameOptionsPartial>;
}
