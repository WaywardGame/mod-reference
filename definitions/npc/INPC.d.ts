import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { EntityType } from "entity/IEntity";
import { ActionType } from "Enums";
export interface INPC extends IBaseHumanEntity {
    entityType: EntityType.NPC;
    getActions(): ActionType[] | undefined;
    update(): void;
    moveTo(x: number, y: number, z: number): boolean;
    isHostile(): boolean;
}
