import { IMoveTypeZ } from "creature/ICreatureManager";
import { Entity } from "entity/IEntity";
import { IBaseEntityManager } from "./IBaseEntityManager";
export default abstract class BaseEntityManager<T extends Entity> implements IBaseEntityManager<T> {
    private bounds;
    private moveTypesInFov;
    remove(entity: T): void;
    updateFov(): number;
    getMoveTypesInFov(): IMoveTypeZ[];
    abstract getEntities(): SaferArray<T>;
}
