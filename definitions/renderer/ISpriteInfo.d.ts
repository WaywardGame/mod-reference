import Vec2 = TSM.vec2;
export interface ISpriteInfo {
    texCoord: Vec2;
    texSize: number;
    texOffsetY: number;
    animated?: boolean;
}
export default ISpriteInfo;
