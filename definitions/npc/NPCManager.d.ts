import BaseEntityManager from "entity/BaseEntityManager";
import { NPCType } from "Enums";
import { INPC } from "npc/INPC";
import INPCManager from "npc/INPCManager";
export default class NPCManager extends BaseEntityManager<INPC> implements INPCManager {
    getEntities(): (INPC | undefined)[];
    spawn(npcType: NPCType, x: number, y: number, z: number): INPC | undefined;
    remove(npc: INPC): void;
    updateAll(): void;
}
