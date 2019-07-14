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
import Player from "entity/player/Player";
declare const _default: Action<[[ActionArgument.Item, ActionArgument.Undefined], [ActionArgument.AttackType, ActionArgument.Undefined]], Player | import("../../npc/INPC").INPC, void>;
export default _default;
