import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { EntityType } from "entity/IEntity";
export interface INPC extends IBaseHumanEntity {
    entityType: EntityType.NPC;
    update(): void;
    moveTo(x: number, y: number, z: number): boolean;
}
