import { ICreature } from "creature/ICreature";
import { INPC } from "npc/INPC";
import IPlayer from "player/IPlayer";
import { IBaseEntity } from "./IBaseEntity";
export declare type Entity = IPlayer | ICreature | INPC;
export interface IEntity extends IBaseEntity {
    entityType: EntityType;
}
export declare enum EntityType {
    Player = 0,
    Creature = 1,
    NPC = 2,
}
