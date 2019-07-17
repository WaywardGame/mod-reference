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
import NPC from "entity/npc/NPC";
import { NPCType } from "entity/npc/NPCS";
export default class NPCManager extends EntityManager<NPC> {
    getEntities(): (NPC | undefined)[];
    spawn(npcType: NPCType, x: number, y: number, z: number): NPC | undefined;
    remove(npc: NPC): void;
    updateAll(): void;
}
