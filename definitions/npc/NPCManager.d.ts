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
import EntityManager from "entity/EntityManager";
import { NPCType } from "Enums";
import { INPC } from "npc/INPC";
import INPCManager from "npc/INPCManager";
export default class NPCManager extends EntityManager<INPC> implements INPCManager {
    getEntities(): (INPC | undefined)[];
    spawn(npcType: NPCType, x: number, y: number, z: number): INPC | undefined;
    remove(npc: INPC): void;
    updateAll(): void;
}
