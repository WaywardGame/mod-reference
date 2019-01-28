/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import { IDoodad, IDoodadOptions } from "doodad/IDoodad";
import Registrar, { IRegistrarItem } from "game/Registrar";
export interface IDoodadClass extends IRegistrarItem {
    new (id?: number, x?: number, y?: number, z?: number, options?: IDoodadOptions): IDoodad;
}
export declare const registrar: Registrar<IDoodadClass>;
