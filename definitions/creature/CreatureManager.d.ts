/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ICreature, ICreatureDescription, SpawnableTiles, SpawnGroup } from "creature/ICreature";
import { ICreatureManager } from "creature/ICreatureManager";
import EntityManager from "entity/EntityManager";
import { CreatureType, MoveType } from "Enums";
import { ITile } from "tile/ITerrain";
export default class CreatureManager extends EntityManager<ICreature> implements ICreatureManager {
    getEntities(): (ICreature | undefined)[];
    getHappinessLevel(human: Human, creature: ICreature): number;
    /**
     * Spawns a creature.
     * @param creatureType The type of creature to spawn.
     * @param x The tile X position
     * @param y The tile Y position
     * @param z The tile Z position
     * @param bypass Whether to bypass checks for whether the creature can spawn there naturally. Defaults to false, if the creature can't spawn naturally, it won't.
     * @param forceAberrant If provided, forces the spawned creature's aberrant state to be the passed boolean. True = aberrant, false = not aberrant. If not provided, the aberrant state is decided based on chance.
     * @param spawnableTiles If set, this will overwrite the creature's description for which tiles it can spawn on
     */
    spawn(creatureType: CreatureType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean, spawnTiles?: SpawnableTiles): ICreature | undefined;
    spawnFromGroup(creatureGroup: SpawnGroup, x: number, y: number, z: number, bypass?: boolean): ICreature | undefined;
    getSpawnableCreatures(creatureGroup: SpawnGroup, z: number, reputation?: number, time?: number): {
        pool: CreatureType[];
        aberrantChance: number;
    };
    maybeSpawnClawWorm(human: Human): void;
    remove(creature: ICreature): void;
    updateAll(): void;
    /**
     * getMovePenalty
     * @return Blocked penalty - Do no return 0!
     */
    getMovePenalty(moveType: MoveType, tile: ITile, isFinalMove?: boolean): number;
    checkSpawnReputation(creatureDescription: ICreatureDescription, reputation?: number, bypass?: boolean): boolean;
    getCreaturesWithSpawnGroup(group?: SpawnGroup, checkReputation?: boolean, reputation?: number): CreatureType[];
    private getReputationAberrantBonus;
}
