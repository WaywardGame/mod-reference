import { DoodadType, DoodadTypeGroup, IInspect } from "Enums";
import { IDoodad, IDoodadDescription } from "IDoodad";
import { Message } from "language/Messages";
import { IPlayer } from "player/IPlayer";
export interface IDoodadManager {
    create(type: DoodadType, x: number, y: number, z: number, spread?: number, decay?: number, minDur?: number, maxDur?: number, weight?: number): IDoodad | undefined;
    remove(doodad: IDoodad): void;
    updateAll(): void;
    update(doodad: IDoodad): void;
    canGrowInCaves(doodad: IDoodad): boolean;
    gather(player: IPlayer, doodad: IDoodad): void;
    canPickup(player: IPlayer, doodad: IDoodad, message?: boolean): boolean;
    pickup(player: IPlayer, x: number, y: number, z: number): void;
    checkForTrampling(playerOrCreatureId: IPlayer | number, doodad: IDoodad): boolean;
    getGardenFertilityMessage(spread: number): Message;
    getDurabilityMessage(doodad: IDoodad): Message;
    messageGardenFertility(player: IPlayer, spread: number): void;
    inspect(doodad: IDoodad): IInspect[];
    causeStatus(player: IPlayer, doodadDesc: IDoodadDescription): void;
    damage(doodad: IDoodad, forceBreak?: boolean): void;
    addTreasureChestLoot(doodad: IDoodad): void;
    isDoodadTypeGroup(doodadType: (DoodadType | DoodadTypeGroup)): boolean;
}
export default IDoodadManager;
