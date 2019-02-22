/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
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
import { ICreature, ICreatureDescription, SpawnGroup, TileGroup } from "creature/ICreature";
import IEntityManager from "entity/IEntityManager";
import { CreatureType, MoveType } from "Enums";
import { ITile } from "tile/ITerrain";
export interface ICreatureManager extends IEntityManager<ICreature> {
    getHappinessLevel(human: Human, creature: ICreature): number;
    spawn(creatureType: CreatureType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean, spawnTiles?: TileGroup): ICreature | undefined;
    spawnFromGroup(creatureGroup: SpawnGroup, x: number, y: number, z: number, bypass?: boolean): ICreature | undefined;
    maybeSpawnClawWorm(target: Human | ICreature): void;
    updateAll(): void;
    getMovePenalty(moveType: MoveType, tile: ITile, isFinalMove?: boolean): number;
    checkSpawnReputation(creatureDescription: ICreatureDescription, reputation?: number, bypass?: boolean): boolean;
    getCreaturesWithSpawnGroup(group?: SpawnGroup, checkReputation?: boolean): CreatureType[];
    getSpawnableCreatures(creatureGroup: SpawnGroup, z: number, reputation?: number, time?: number): ISpawnableCreatures;
    exists(creature: ICreature): boolean;
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
