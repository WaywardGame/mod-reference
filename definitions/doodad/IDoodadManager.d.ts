import { IDoodad, IDoodadOptions } from "doodad/IDoodad";
import { DoodadType, DoodadTypeGroup } from "Enums";
import { Message } from "language/IMessages";
export interface IDoodadManager {
    create(type: DoodadType, x: number, y: number, z: number, options?: IDoodadOptions): IDoodad | undefined;
    getGardenFertilityMessage(spread: number): Message;
    isDoodadTypeGroup(doodadType: (DoodadType | DoodadTypeGroup)): doodadType is DoodadTypeGroup;
    remove(doodad: IDoodad): void;
    updateAll(): void;
    verifyAndFixItemWeights(): void;
}
export default IDoodadManager;
