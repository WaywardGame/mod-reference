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
