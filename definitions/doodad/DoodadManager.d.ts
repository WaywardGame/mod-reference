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
import { IDoodad, IDoodadOptions } from "doodad/IDoodad";
import IDoodadManager from "doodad/IDoodadManager";
import { DoodadType, DoodadTypeGroup } from "Enums";
import { Message } from "language/IMessages";
export default class DoodadManager implements IDoodadManager {
    create(type: DoodadType, x: number, y: number, z: number, options?: IDoodadOptions): IDoodad | undefined;
    remove(doodad: IDoodad, removeItems?: boolean): void;
    updateAll(): void;
    getGardenFertilityMessage(spread: number): Message;
    isDoodadTypeGroup(doodadType: (DoodadType | DoodadTypeGroup)): doodadType is DoodadTypeGroup;
    verifyAndFixItemWeights(): void;
}
