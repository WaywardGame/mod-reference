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
import { ActionType, IActionApi } from "action/IAction";
import { ItemType } from "Enums";
import { IItem } from "item/IItem";
import { INPC } from "npc/INPC";
import IPlayer from "player/IPlayer";
export default function consumeItemType(action: IActionApi<IPlayer | INPC>, item: IItem | ItemType, actionType?: ActionType): boolean;
