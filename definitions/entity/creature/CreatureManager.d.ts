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
import Creature from "entity/creature/Creature";
import { CreatureType, ICreatureDescription, SpawnGroup, TileGroup } from "entity/creature/ICreature";
import EntityManager from "entity/EntityManager";
import Human from "entity/Human";
import { MoveType } from "entity/IEntity";
import Translation from "language/Translation";
import { ITile } from "tile/ITerrain";
import Vector3 from "utilities/math/Vector3";
export default class CreatureManager extends EntityManager<Creature> {
    getEntities(): (Creature | undefined)[];
    getName(creature: Creature | CreatureType, aberrant?: boolean, count?: number, article?: boolean): Translation;
    getHappinessLevel(human: Human, creature: Creature): number;
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
    spawn(creatureType: CreatureType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean, spawnTiles?: TileGroup): Creature | undefined;
    spawnFromGroup(creatureGroup: SpawnGroup, x: number, y: number, z: number, bypass?: boolean): Creature | undefined;
    getSpawnableCreatures(creatureGroup: SpawnGroup, z: number, reputation?: number, time?: number): {
        pool: CreatureType[];
        aberrantChance: number;
    };
    exists(creature: Creature): boolean;
    maybeSpawnClawWorm(target: Human | Creature): void;
    remove(creature: Creature): void;
    updateAll(): void;
    /**
     * getMovePenalty
     * @return Blocked penalty - Do no return 0!
     */
    getMovePenalty(moveType: MoveType, tile: ITile, isFinalMove?: boolean): number;
    checkSpawnReputation(creatureDescription: ICreatureDescription, reputation?: number, bypass?: boolean): boolean;
    getCreaturesWithSpawnGroup(group?: SpawnGroup, checkReputation?: boolean, reputation?: number): CreatureType[];
    spawnGuardians(position: Vector3, amount: number): number;
    private getReputationAberrantBonus;
}
