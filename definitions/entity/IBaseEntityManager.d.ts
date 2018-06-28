import { Entity } from "entity/IEntity";
import { MoveType } from "Enums";
import { IBound3 } from "utilities/math/Bound3";
export interface IBaseEntityManager<T extends Entity> {
    getEntities(): SaferArray<T>;
    remove(entity: T): void;
    updateFov(bounds: IBound3[]): number;
    getMoveTypesInFov(): IMoveTypeZ[];
}
export default IBaseEntityManager;
export interface IMoveTypeZ {
    moveType: MoveType;
    z: number;
}
