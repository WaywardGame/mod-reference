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
import { DoodadType } from "Enums";
import IWorldLayer from "renderer/IWorldLayer";
import { IDoodadAdaptor, ITileAdaptation } from "renderer/TileAdaptors";
export default class Fence implements IDoodadAdaptor {
    adaptGate(world: IWorldLayer, x: number, y: number, doodadType: DoodadType, vertical: boolean, result: ITileAdaptation): void;
    adapt(world: IWorldLayer, x: number, y: number, doodadType: DoodadType, result: ITileAdaptation): void;
}
