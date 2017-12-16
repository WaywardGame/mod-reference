import Vec2 = TSM.vec2;
export default class SpriteBatch {
    private static shaderProgram;
    private static spriteLength;
    capacity: number;
    texSprites: WebGLTexture;
    inverseSpriteTextureSize: Vec2;
    private count;
    private buffer;
    private colorBuffer;
    private array;
    private colorArray;
    private gl;
    private begun;
    private vertexArray;
    constructor(gl: WebGL2RenderingContext, maxSprites: number);
    static resetGl(): void;
    clear(): void;
    begin(): void;
    add(tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number, offsetY?: number, red?: number, green?: number, blue?: number, alpha?: number): void;
    end(): void;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number): void;
}
