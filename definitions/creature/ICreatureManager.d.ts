/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import { ICreature, ICreatureDescription, SpawnableTiles, SpawnGroup } from "creature/ICreature";
import IEntityManager from "entity/IEntityManager";
import { CreatureType, MoveType } from "Enums";
import { ITile } from "tile/ITerrain";
export interface ICreatureManager extends IEntityManager<ICreature> {
    getHappinessLevel(human: Human, creature: ICreature): number;
    spawn(creatureType: CreatureType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean, spawnTiles?: SpawnableTiles): ICreature | undefined;
    spawnFromGroup(creatureGroup: SpawnGroup, x: number, y: number, z: number, bypass?: boolean): ICreature | undefined;
    maybeSpawnClawWorm(human: Human): void;
    updateAll(): void;
    getMovePenalty(moveType: MoveType, tile: ITile, isFinalMove?: boolean): number;
    checkSpawnReputation(creatureDescription: ICreatureDescription, bypass?: boolean): boolean;
    getCreaturesWithSpawnGroup(group?: SpawnGroup, checkReputation?: boolean): CreatureType[];
    getSpawnableCreatures(creatureGroup: SpawnGroup, z: number): ISpawnableCreatures;
}
export interface ISpawnableCreatures {
    pool: CreatureType[];
    aberrantChance: number;
}
export default ICreatureManager;
export interface IMoveTypeZ {
    moveType: MoveType;
    z: number;
}
