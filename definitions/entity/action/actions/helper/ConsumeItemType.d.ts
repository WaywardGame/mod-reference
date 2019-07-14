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
import { ActionType, IActionApi } from "entity/action/IAction";
import { INPC } from "entity/npc/INPC";
import Player from "entity/player/Player";
import { IItem, ItemType } from "item/IItem";
export default function consumeItemType(action: IActionApi<Player | INPC>, item: IItem | ItemType, actionType?: ActionType): boolean;
