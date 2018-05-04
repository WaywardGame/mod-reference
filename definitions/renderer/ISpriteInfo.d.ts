import Vec2 from "utilities/math/Vector2";
export interface ISpriteInfo {
    texCoord: Vec2;
    texSize: number;
    texOffsetY: number;
    animated?: boolean;
}
export default ISpriteInfo;
