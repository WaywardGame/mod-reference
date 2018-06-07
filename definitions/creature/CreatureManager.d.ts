import { ICreature, ICreatureDescription, SpawnGroup } from "creature/ICreature";
import { ICreatureManager } from "creature/ICreatureManager";
import BaseEntityManager from "entity/BaseEntityManager";
import { CreatureType, MoveType } from "Enums";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
export default class CreatureManager extends BaseEntityManager<ICreature> implements ICreatureManager {
    getEntities(): (ICreature | undefined)[];
    getHappinessLevel(player: IPlayer, creatureDesc: ICreatureDescription): number;
    spawn(creatureType: CreatureType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean): ICreature | undefined;
    spawnFromGroup(creatureGroup: SpawnGroup, x: number, y: number, z: number, bypass?: boolean): ICreature | undefined;
    maybeSpawnClawWorm(player: IPlayer): void;
    remove(creature: ICreature): void;
    updateAll(): void;
    /**
     * getMovePenalty
     * @return Blocked penalty - Do no return 0!
     */
    getMovePenalty(moveType: MoveType, tile: ITile, isFinalMove?: boolean): number;
    checkSpawnReputation(creatureDescription: ICreatureDescription, bypass?: boolean): boolean;
    getCreaturesWithSpawnGroup(group?: SpawnGroup, checkReputation?: boolean): CreatureType[];
    private getReputationAberrantBonus;
}
