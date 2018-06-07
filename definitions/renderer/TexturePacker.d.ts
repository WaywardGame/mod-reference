import ISpriteInfo from "renderer/ISpriteInfo";
import Vec2 from "utilities/math/Vector2";
export default class SpritePacker {
    private readonly gl;
    width: number;
    height: number;
    texture: WebGLTexture;
    inverseTextureSize: Vec2;
    private spriteLoadCount;
    private sprites;
    private readonly rootNode;
    private readonly padding;
    private readonly loadedSprites;
    constructor(gl: WebGL2RenderingContext, width: number, height: number, nullSprite: boolean, padding: number);
    load(callback: () => void): void;
    addSprite(src: string, callback: (si: ISpriteInfo, imageElement?: HTMLImageElement) => void): void;
    private loadSprite;
    private spriteLoaded;
    private checkFinished;
    private pack;
    private packSprite;
}
