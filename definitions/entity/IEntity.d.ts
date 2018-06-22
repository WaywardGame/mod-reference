import { ICreature } from "creature/ICreature";
import IBaseEntity from "entity/IBaseEntity";
import { INPC } from "npc/INPC";
import IPlayer from "player/IPlayer";
export declare type Entity = IPlayer | ICreature | INPC;
export interface IEntity extends IBaseEntity {
    entityType: EntityType;
}
export declare enum EntityType {
    Player = 0,
    Creature = 1,
    NPC = 2
}
export declare enum AiType {
    Neutral = 0,
    Hostile = 1,
    Scared = 2,
    Random = 4,
    Hidden = 8,
    Fearless = 16,
    Tamed = 32,
    Follower = 64,
    Defender = 128,
    Fleeing = 256,
    Waiting = 512
}
