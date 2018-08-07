/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Registrar, { IRegistrarItem } from "game/Registrar";
import { INPC } from "npc/INPC";
export interface INPCClass extends IRegistrarItem {
    new (id?: number, x?: number, y?: number, z?: number): INPC;
}
export declare const registrar: Registrar<INPCClass>;
