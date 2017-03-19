import Vec2 = TSM.vec2;
import ISpriteInfo from "renderer/ISpriteInfo";
export default class SpriteInfo implements ISpriteInfo {
    texCoord: Vec2;
    texSize: number;
    texOffsetY: number;
    animated: boolean;
    constructor(texCoord: Vec2, texSize: number, texOffsetY: number, animated?: boolean);
}
