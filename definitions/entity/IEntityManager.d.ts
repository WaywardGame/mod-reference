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
import { EntityPlayerCreatureNpc } from "entity/IEntity";
import { MoveType } from "Enums";
import { IBound3 } from "utilities/math/Bound3";
export interface IEntityManager<T extends EntityPlayerCreatureNpc> {
    getEntities(): SaferArray<T>;
    remove(entity: T): void;
    updateFov(bounds: IBound3[]): number;
    getMoveTypesInFov(): IMoveTypeZ[];
}
export default IEntityManager;
export interface IMoveTypeZ {
    moveType: MoveType;
    z: number;
}
