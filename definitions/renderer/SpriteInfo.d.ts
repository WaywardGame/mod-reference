import ISpriteInfo from "renderer/ISpriteInfo";
import Vec2 from "utilities/math/Vector2";
export default class SpriteInfo implements ISpriteInfo {
    texCoord: Vec2;
    texSize: number;
    texOffsetY: number;
    animated?: boolean | undefined;
    constructor(texCoord: Vec2, texSize: number, texOffsetY: number, animated?: boolean | undefined);
}
