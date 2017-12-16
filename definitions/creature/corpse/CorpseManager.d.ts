import { ICorpse } from "creature/corpse/ICorpse";
import ICorpseManager from "creature/corpse/ICorpseManager";
import { CreatureType, ItemType } from "Enums";
export default class CorpseManager implements ICorpseManager {
    create(type: CreatureType, x: number, y: number, z: number, decay?: number, aberrant?: boolean): ICorpse | undefined;
    updateAll(): void;
    getResources(corpse: ICorpse): ItemType[];
    remove(corpse: ICorpse): void;
    createBlood(x: number, y: number, z: number): void;
    getCorpsesString(corpses: ICorpse[]): string;
}
