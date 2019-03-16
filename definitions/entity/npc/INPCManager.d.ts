/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IEntityManager } from "entity/IEntityManager";
import { INPC } from "entity/npc/INPC";
import { NPCType } from "entity/npc/NPCS";
export interface INPCManager extends IEntityManager<INPC> {
    spawn(npcType: NPCType, x: number, y: number, z: number): INPC | undefined;
    updateAll(): void;
}
export default INPCManager;
