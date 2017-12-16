import { DoodadType, DoodadTypeGroup } from "Enums";
import { IDoodad, IDoodadOptions } from "IDoodad";
import { Message } from "language/Messages";
export interface IDoodadManager {
    create(type: DoodadType, x: number, y: number, z: number, options?: IDoodadOptions): IDoodad | undefined;
    getGardenFertilityMessage(spread: number): Message;
    isDoodadTypeGroup(doodadType: (DoodadType | DoodadTypeGroup)): doodadType is DoodadTypeGroup;
    remove(doodad: IDoodad): void;
    updateAll(): void;
    verifyAndFixItemWeights(): void;
}
export default IDoodadManager;
