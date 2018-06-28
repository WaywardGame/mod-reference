import { IBaseEntityManager } from "entity/IBaseEntityManager";
import { NPCType } from "Enums";
import { INPC } from "npc/INPC";
export interface INPCManager extends IBaseEntityManager<INPC> {
    spawn(npcType: NPCType, x: number, y: number, z: number): INPC | undefined;
    updateAll(): void;
}
export default INPCManager;
