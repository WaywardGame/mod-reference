import { ICreature, ICreatureDescription, SpawnGroup } from "creature/ICreature";
import { ICreatureManager, IMoveTypeZ } from "creature/ICreatureManager";
import { CreatureType, MoveType } from "Enums";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
export default class CreatureManager implements ICreatureManager {
    private bounds;
    private moveTypesInFov;
    getHappinessLevel(player: IPlayer, creatureDesc: ICreatureDescription): number;
    spawn(creatureType: CreatureType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean): ICreature | undefined;
    spawnFromGroup(creatureGroup: SpawnGroup, x: number, y: number, z: number, bypass?: boolean): ICreature | undefined;
    maybeSpawnClawWorm(player: IPlayer): void;
    remove(creature: ICreature): void;
    updateFov(): number;
    updateAll(): void;
    getMoveTypesInFov(): IMoveTypeZ[];
    /**
     * getMovePenalty
     * @return Blocked penalty - Do no return 0!
     */
    getMovePenalty(moveType: MoveType, tile: ITile, isFinalMove?: boolean): number;
    checkSpawnReputation(creatureDescription: ICreatureDescription, bypass?: boolean): boolean;
    getCreaturesWithSpawnGroup(group?: SpawnGroup, checkReputation?: boolean): CreatureType[];
    private getReputationAberrantBonus();
}
