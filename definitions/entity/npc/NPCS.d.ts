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
import NPC from "entity/npc/NPC";
import Registrar, { IRegistrarItem } from "game/Registrar";
export declare enum NPCType {
    Merchant = 0,
    DeathKnight = 1
}
export interface INPCClass extends IRegistrarItem {
    new (id?: number, x?: number, y?: number, z?: number): NPC;
}
export declare const registrar: Registrar<INPCClass>;
