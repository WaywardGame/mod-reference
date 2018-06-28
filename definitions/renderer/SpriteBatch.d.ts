import ISpriteBatch from "renderer/ISpriteBatch";
import Vec2 from "utilities/math/Vector2";
export default class SpriteBatch implements ISpriteBatch {
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
    private readonly vertexArray;
    constructor(gl: WebGL2RenderingContext, maxSprites: number);
    static resetGl(): void;
    clear(): void;
    begin(): void;
    add(tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number, offsetY?: number, red?: number, green?: number, blue?: number, alpha?: number): void;
    end(): void;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number): void;
}
