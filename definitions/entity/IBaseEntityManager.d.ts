import { Entity } from "entity/IEntity";
import { MoveType } from "Enums";
export interface IBaseEntityManager<T extends Entity> {
    getEntities(): SaferArray<T>;
    remove(entity: T): void;
    updateFov(): number;
    getMoveTypesInFov(): IMoveTypeZ[];
}
export default IBaseEntityManager;
export interface IMoveTypeZ {
    moveType: MoveType;
    z: number;
}
