import { ICreature, ICreatureDescription, SpawnGroup } from "creature/ICreature";
import { CreatureType, MoveType } from "Enums";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
export interface ICreatureManager {
    getHappinessLevel(player: IPlayer, creatureDesc: ICreatureDescription): number;
    spawn(creatureType: CreatureType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean): ICreature | undefined;
    spawnFromGroup(creatureGroup: SpawnGroup, x: number, y: number, z: number, bypass?: boolean): ICreature | undefined;
    maybeSpawnClawWorm(player: IPlayer): void;
    remove(creature: ICreature): void;
    updateFov(): number;
    updateAll(): void;
    getMoveTypesInFov(): IMoveTypeZ[];
    getMovePenalty(moveType: MoveType, tile: ITile, isFinalMove?: boolean): number;
    checkSpawnReputation(creatureDescription: ICreatureDescription, bypass?: boolean): boolean;
    getCreaturesWithSpawnGroup(group?: SpawnGroup, checkReputation?: boolean): CreatureType[];
}
export default ICreatureManager;
export interface IMoveTypeZ {
    moveType: MoveType;
    z: number;
}
