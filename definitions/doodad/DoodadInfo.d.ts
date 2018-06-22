import { DoodadType, TerrainType } from "Enums";
import Vec2 from "utilities/math/Vector2";
export default class DoodadInfo {
    type: DoodadType | TerrainType;
    tall: boolean;
    animated: boolean;
    topLeft: Vec2;
    topRight: Vec2;
    bottomLeft: Vec2;
    bottomRight: Vec2;
    constructor(type: DoodadType | TerrainType, tall: boolean, xOffset: number, yOffset: number, animated: boolean);
}
