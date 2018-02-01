import { ICorpse } from "creature/corpse/ICorpse";
import { CreatureType, ItemType } from "Enums";
export interface ICorpseManager {
    create(type: CreatureType, x: number, y: number, z: number, decay?: number, aberrant?: boolean, name?: string): ICorpse | undefined;
    updateAll(): void;
    getResources(corpse: ICorpse): ItemType[];
    remove(corpse: ICorpse): void;
    createBlood(x: number, y: number, z: number): void;
    getCorpsesString(corpse: ICorpse[]): string;
}
export default ICorpseManager;
