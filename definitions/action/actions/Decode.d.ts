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
import { Action } from "action/Action";
import { ActionArgument } from "action/IAction";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import Vector2 from "utilities/math/Vector2";
import Vector3 from "utilities/math/Vector3";
declare const _default: Action<[ActionArgument.ItemNearby], import("../../player/IPlayer").IPlayer, void>;
export default _default;
export declare function getCartographyDistance(skill: number, distance: number): Translation | Message;
export declare function getCartographyDirection(skill: number, humanPosition: Vector2, mapPosition: Vector3): Message.None | Message;
