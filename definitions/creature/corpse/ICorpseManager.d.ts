import { ICorpse } from "creature/corpse/ICorpse";
import { ItemType } from "Enums";
export interface ICorpseManager {
    create(corpse: ICorpse): void;
    updateAll(): void;
    getResources(corpse: ICorpse): ItemType[];
    remove(corpse: ICorpse): void;
    createBlood(x: number, y: number, z: number): void;
}
export default ICorpseManager;
