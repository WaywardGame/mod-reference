import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { AiType, EntityType } from "entity/IEntity";
import { ActionType } from "Enums";
export interface INPC extends IBaseHumanEntity {
    entityType: EntityType.NPC;
    getActions(): ActionType[] | undefined;
    addAiType(ai: AiType): void;
    update(): void;
    moveTo(x: number, y: number, z: number): boolean;
    isHostile(): boolean;
    isWaiting(): boolean;
    makeHostile(): void;
}
