import { IDoodad, IDoodadOptions } from "doodad/IDoodad";
import IDoodadManager from "doodad/IDoodadManager";
import { DoodadType, DoodadTypeGroup } from "Enums";
import { Message } from "language/IMessages";
export default class DoodadManager implements IDoodadManager {
    create(type: DoodadType, x: number, y: number, z: number, options?: IDoodadOptions): IDoodad | undefined;
    remove(doodad: IDoodad): void;
    updateAll(): void;
    getGardenFertilityMessage(spread: number): Message;
    isDoodadTypeGroup(doodadType: (DoodadType | DoodadTypeGroup)): doodadType is DoodadTypeGroup;
    verifyAndFixItemWeights(): void;
}
