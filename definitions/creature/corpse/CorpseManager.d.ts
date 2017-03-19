import { ICorpse } from "creature/corpse/ICorpse";
import ICorpseManager from "creature/corpse/ICorpseManager";
import { ItemType } from "Enums";
export default class CorpseManager implements ICorpseManager {
    create(corpse: ICorpse): void;
    updateAll(): void;
    getResources(corpse: ICorpse): ItemType[];
    remove(corpse: ICorpse): void;
    createBlood(x: number, y: number, z: number): void;
}
