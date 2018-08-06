/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import Vec2 from "utilities/math/Vector2";
/**
 * Each tile in the wayward world is rendered as 4 subtiles (topleft, topright, bottomleft, bottomright).
 * The world consists of 3 tile layers (terrain, doodad, doodadOver).
 * Each subtile is a RGBA 32bit pixel representing a foreground and background tile.
 * Red,Green make up the x,y coordinate in the tilesheet of the foreground tile.
 * Blue,Alpha make up the x,y coordinate in the tilesheet of the background tile.
 * If Red and Green are both 0, the subtile foreground is not rendered.
 * If Blue and Alpha are both 0, the subtile background is not rendered.
 */
export default class TileLayer {
    private readonly width;
    private readonly height;
    private static texTileSprites;
    private static inverseTileSpriteTextureSize;
    private static tileShaderProgram;
    private readonly singleTileData;
    private readonly singleTileDataU8;
    private readonly singleTileDataU32;
    private readonly tileData;
    private readonly tileDataU8;
    private readonly tileDataU32;
    private readonly texTiles;
    private readonly inverseTileDataTextureSize;
    private readonly vertexArray;
    static setTileTexture(texture: WebGLTexture, textureSizeInversed: Vec2): any;
    static compileShaders(gl: WebGL2RenderingContext): void;
    constructor(width: number, height: number, gl: WebGL2RenderingContext, positionBuffer: WebGLBuffer);
    setTileTLFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTRFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBLFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBRFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTLBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTRBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBLBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBRBG(dataIndex: number, tileX: number, tileY: number): void;
    sendTileToGPU(x: number, y: number, gl: WebGL2RenderingContext): void;
    sendToGPU(gl: WebGL2RenderingContext): void;
    render(gl: WebGL2RenderingContext, x: number, y: number, subTileSize: number, tileScale: number, viewWidth: number, viewHeight: number, fixedDepth?: boolean): void;
    clear(): void;
}
