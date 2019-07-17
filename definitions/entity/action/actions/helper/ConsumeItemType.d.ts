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
import NPC from "entity/npc/NPC";
import Player from "entity/player/Player";
import { ItemType } from "item/IItem";
import Item from "item/Item";
export default function consumeItemType(action: IActionApi<Player | NPC>, item: Item | ItemType, actionType?: ActionType): boolean;
