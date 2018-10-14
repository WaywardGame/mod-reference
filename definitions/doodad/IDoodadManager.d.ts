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
import { DoodadType, DoodadTypeGroup } from "Enums";
export interface IDoodadManager {
    create(type: DoodadType, x: number, y: number, z: number, options?: IDoodadOptions): IDoodad | undefined;
    isDoodadTypeGroup(doodadType: (DoodadType | DoodadTypeGroup)): doodadType is DoodadTypeGroup;
    /**
     * Removes a doodad from the world.
     * @param doodad The doodad to remove
     * @param removeItems Whether to remove items.
     *
     * Note: This method will remove any items in them whether the `removeItems` parameter is provided or not. If the parameter is not
     * provided, the assumption is that it will only be called on empty doodads. Therefore, if there *are* items, it will log a warning.
     */
    remove(doodad: IDoodad, removeItems?: true): void;
    updateAll(): void;
    verifyAndFixItemWeights(): void;
}
export default IDoodadManager;
