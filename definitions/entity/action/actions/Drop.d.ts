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
import { Action } from "entity/action/Action";
import { ActionArgument } from "entity/action/IAction";
export declare enum DropLocation {
    Facing = 0,
    Feet = 1,
    FeetWhenFacingBlocked = 2
}
declare const _default: Action<[ActionArgument.ItemNearby, [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../../npc/INPC").INPC | import("../../player/IPlayer").IPlayer, void>;
export default _default;