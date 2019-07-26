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
import { IGameOptionsPartial } from "game/GameMode";
import { Milestone } from "game/milestones/IMilestone";
export default class MilestoneModifiersManager {
    private static readonly instances;
    static isNotHostExclusive(milestone: Milestone): boolean;
    private static areOptionsHostExclusive;
    static getGroup(milestone: Milestone): import("./MilestoneModifier").MilestoneModifierGroup | undefined;
    private readonly initializedModifiers;
    initialize(...milestones: Milestone[]): void;
    uninitialize(): void;
    options(): import("../../utilities/stream/Stream").default<IGameOptionsPartial>;
}
