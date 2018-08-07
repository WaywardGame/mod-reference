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
import { IMoveTypeZ } from "creature/ICreatureManager";
import { IBaseEntityManager } from "entity/IBaseEntityManager";
import { Entity } from "entity/IEntity";
import Bound3 from "utilities/math/Bound3";
export default abstract class BaseEntityManager<T extends Entity> implements IBaseEntityManager<T> {
    private moveTypesInFov;
    remove(entity: T): void;
    updateFov(bounds: Bound3[]): number;
    getMoveTypesInFov(): IMoveTypeZ[];
    abstract getEntities(): SaferArray<T>;
}
