/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ICorpse } from "entity/creature/corpse/ICorpse";
import ICorpseManager from "entity/creature/corpse/ICorpseManager";
import { CreatureType } from "entity/creature/ICreature";
import { InspectionResult } from "game/inspection/IInspection";
import Inspection from "game/inspection/Inspect";
import { ItemType } from "item/IItem";
import Translation from "language/Translation";
import Stream from "utilities/stream/Stream";
export default class CorpseManager implements ICorpseManager {
    create(type: CreatureType, x: number, y: number, z: number, decay?: number, aberrant?: boolean, name?: string, qualityBonus?: number): ICorpse | undefined;
    updateAll(): void;
    getResources(corpse: ICorpse): ItemType[];
    remove(corpse: ICorpse): void;
    createBlood(x: number, y: number, z: number): void;
    getName(typeOrCorpse: CreatureType | ICorpse, article?: boolean, count?: number, showCount?: boolean): Translation;
    getCorpseTranslations(corpses: ICorpse[]): Stream<Translation>;
    getCorpseListTranslation(corpses: ICorpse[]): Translation;
    inspect({ context }: Inspection, ...corpses: ICorpse[]): InspectionResult;
    is(thing: any): thing is ICorpse;
}
