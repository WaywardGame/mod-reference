/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import { DoodadType, TerrainType } from "Enums";
import { TerrainDecoration } from "renderer/Decorations";
import Vec2 from "utilities/math/Vector2";
export default class DoodadInfo {
    type: DoodadType | TerrainType | TerrainDecoration;
    tall: boolean;
    animated: boolean;
    topLeft: Vec2;
    topRight: Vec2;
    bottomLeft: Vec2;
    bottomRight: Vec2;
    constructor(type: DoodadType | TerrainType | TerrainDecoration, tall: boolean, xOffset: number, yOffset: number, animated: boolean);
}
