import Vec2 = TSM.vec2;
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
    private width;
    private height;
    private static texTileSprites;
    private static inverseTileSpriteTextureSize;
    private static tileShaderProgram;
    private singleTileData;
    private singleTileDataU8;
    private singleTileDataU32;
    private tileData;
    private tileDataU8;
    private tileDataU32;
    private texTiles;
    private inverseTileDataTextureSize;
    static setTileTexture(texture: WebGLTexture, textureSizeInversed: Vec2): any;
    static compileShaders(gl: WebGLRenderingContext): void;
    constructor(width: number, height: number, gl: WebGLRenderingContext);
    setTileTLFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTRFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBLFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBRFG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTLBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTRBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBLBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBRBG(dataIndex: number, tileX: number, tileY: number): void;
    sendTileToGPU(x: number, y: number, gl: WebGLRenderingContext): void;
    sendToGPU(gl: WebGLRenderingContext): void;
    render(gl: WebGLRenderingContext, x: number, y: number, subTileSize: number, tileScale: number, viewWidth: number, viewHeight: number, fixedDepth?: boolean): void;
    clear(): void;
}
