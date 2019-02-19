/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import ISpriteBatch from "renderer/ISpriteBatch";
import Vec2 from "utilities/math/Vector2";
export default class SpriteBatch implements ISpriteBatch {
    private readonly depthOffset;
    private static shaderProgram;
    private static readonly spriteLength;
    capacity: number;
    texSprites: WebGLTexture;
    inverseSpriteTextureSize: Vec2;
    private count;
    private readonly buffer;
    private readonly colorBuffer;
    private readonly array;
    private readonly colorArray;
    private readonly gl;
    private begun;
    private useAlpha;
    private readonly vertexArray;
    constructor(gl: WebGL2RenderingContext, maxSprites: number, depthOffset?: number);
    static resetGl(): void;
    dispose(): void;
    clear(): void;
    begin(): void;
    add(tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number, offsetY?: number, red?: number, green?: number, blue?: number, alpha?: number): void;
    end(): void;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number): void;
}
