/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ICorpse } from "creature/corpse/ICorpse";
import ICorpseManager from "creature/corpse/ICorpseManager";
import { CreatureType, ItemType } from "Enums";
export default class CorpseManager implements ICorpseManager {
    create(type: CreatureType, x: number, y: number, z: number, decay?: number, aberrant?: boolean, name?: string): ICorpse | undefined;
    updateAll(): void;
    getResources(corpse: ICorpse): ItemType[];
    remove(corpse: ICorpse): void;
    createBlood(x: number, y: number, z: number): void;
    getCorpsesString(corpses: ICorpse[]): string;
}
