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
import { IGameOptions } from "game/GameMode";
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
export default abstract class MilestoneModifier {
    /**
     * Difficulty options to be applied due to this modifier
     */
    options?: RecursivePartial<IGameOptions>;
    /**
     * Whether this milestone modifier is host-exclusive, IE, clients connecting to a server can't select this modifier.
     *
     * Modifiers with custom `options: IGameOptions` are always host-exclusive.
     */
    isHostExclusive: boolean;
    initialize(): void;
    uninitialize(): void;
    abstract getGroup(): MilestoneModifierGroup;
}
