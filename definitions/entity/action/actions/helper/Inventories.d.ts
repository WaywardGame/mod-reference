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
import Item from "item/Item";
import { IVector3 } from "utilities/math/IVector";
declare module Inventories {
    function ofEntity(entity: Entity): Item[][];
    function get(tile: IVector3): Item[][];
}
export default Inventories;
