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
import { IMilestone, Milestone } from "game/milestones/IMilestone";
declare module Milestones {
    const descriptions: Descriptions<Milestone, IMilestone>;
    /**
     * Get whether the given milestone is completed or not.
     */
    function isComplete(milestone: Milestone): boolean;
    /**
     * Get the current amount for the given milestone.
     */
    function getAmount(milestone: Milestone): number;
    /**
     * Get a `Stream` of all completed milestones
     */
    function getCompleted(): import("../../utilities/stream/Stream").default<Milestone>;
    type IMilestoneUpdate = [Milestone, number?];
    function add(...updates: IMilestoneUpdate[]): void;
    function update(): void;
}
export default Milestones;
