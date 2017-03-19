import Vec2 = TSM.vec2;
import { DoodadType } from "Enums";
export default class DoodadInfo {
    type: DoodadType;
    tall: boolean;
    animated: boolean;
    topLeft: Vec2;
    topRight: Vec2;
    bottomLeft: Vec2;
    bottomRight: Vec2;
    constructor(type: DoodadType, tall: boolean, xOffset: number, yOffset: number, animated: boolean);
}
