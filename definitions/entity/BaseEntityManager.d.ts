import { IMoveTypeZ } from "creature/ICreatureManager";
import { Entity } from "entity/IEntity";
import * as Utilities from "Utilities";
import { IBaseEntityManager } from "./IBaseEntityManager";
export default abstract class BaseEntityManager<T extends Entity> implements IBaseEntityManager<T> {
    private moveTypesInFov;
    remove(entity: T): void;
    updateFov(bounds: Utilities.Bound3[]): number;
    getMoveTypesInFov(): IMoveTypeZ[];
    abstract getEntities(): SaferArray<T>;
}
