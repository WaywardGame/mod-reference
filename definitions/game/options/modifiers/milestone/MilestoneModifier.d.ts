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
import Entity from "entity/Entity";
import { Milestone } from "game/milestones/IMilestone";
import GameplayModifier from "game/options/modifiers/GameplayModifier";
export declare enum MilestoneModifierGroup {
    Creatures = 0,
    Skills = 1,
    Items = 2,
    Equipment = 3,
    Reputation = 4,
    Actions = 5,
    Treasure = 6,
    Metagame = 7,
    Turns = 8,
    Challenge = 9
}
export default abstract class MilestoneModifier extends GameplayModifier<Milestone> {
    after?: Milestone[];
    /**
     * Whether this milestone modifier is host-exclusive, IE, clients connecting to a server can't select this modifier.
     *
     * Modifiers with custom `options: IGameOptions` are always host-exclusive.
     */
    isHostExclusive: boolean;
    constructor(id?: Milestone);
    isEnabledForPlayer(entity: Entity): boolean;
    abstract getGroup(): MilestoneModifierGroup;
}
