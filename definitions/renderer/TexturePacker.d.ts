import Vec2 = TSM.vec2;
import ISpriteInfo from "renderer/ISpriteInfo";
export default class SpritePacker {
    private gl;
    width: number;
    height: number;
    texture: WebGLTexture;
    inverseTextureSize: Vec2;
    private spriteLoadCount;
    private sprites;
    private rootNode;
    private padding;
    private loadedSprites;
    constructor(gl: WebGLRenderingContext, width: number, height: number, nullSprite: boolean, padding: number);
    load(callback: () => void): void;
    addSprite(src: string, callback: (si: ISpriteInfo, imageElement?: HTMLImageElement) => void): void;
    private loadSprite(sprite, callback, retry?);
    private spriteLoaded(callback);
    private checkFinished(callback);
    private pack();
    private packSprite(gl, image);
}
