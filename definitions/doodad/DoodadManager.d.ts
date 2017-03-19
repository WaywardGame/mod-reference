import { IDoodad, IDoodadDescription } from "doodad/IDoodad";
import IDoodadManager from "doodad/IDoodadManager";
import { DoodadType, DoodadTypeGroup, IInspect } from "Enums";
import { Message } from "language/Messages";
import { IPlayer } from "player/IPlayer";
export default class DoodadManager implements IDoodadManager {
    create(type: DoodadType, x: number, y: number, z: number, spread?: number, decay?: number, minDur?: number, maxDur?: number, weight?: number): IDoodad | undefined;
    remove(doodad: IDoodad): void;
    updateAll(): void;
    update(doodad: IDoodad): void;
    canGrowInCaves(doodad: IDoodad): boolean;
    gather(player: IPlayer, doodad: IDoodad): void;
    canPickup(player: IPlayer, doodad: IDoodad, message?: boolean): boolean;
    pickup(player: IPlayer, x: number, y: number, z: number): void;
    checkForTrampling(doodad: IDoodad, creatureId?: number | null): boolean;
    getGardenFertilityMessage(spread: number): Message;
    getDurabilityMessage(doodad: IDoodad): Message;
    messageGardenFertility(player: IPlayer, spread: number): void;
    inspect(doodad: IDoodad): IInspect[];
    causeStatus(player: IPlayer, doodadDesc: IDoodadDescription): void;
    damage(doodad: IDoodad, forceBreak?: boolean, isTrample?: boolean): void;
    addTreasureChestLoot(doodad: IDoodad): void;
    isDoodadTypeGroup(doodadType: (DoodadType | DoodadTypeGroup)): boolean;
}
